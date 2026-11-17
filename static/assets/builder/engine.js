/* PokéIsaac build planner: the stat and damage maths. No DOM, no dependencies; works in the browser and in node.
   Every formula follows the wiki's mechanics pages (diminishing returns, stats in practice, critical hits...). */
(function (root) {
  "use strict";

  const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

  // Diminishing returns: 100 % up to `a`, 50 % up to `b`, 25 % up to `c` (or without end), 5 % above `c`.
  function dr(x, a, b, c) {
    const reduced = x <= a ? x : x <= b ? a + 0.5 * (x - a) : a + 0.5 * (b - a) + 0.25 * (Math.min(x, c || Infinity) - b);
    return c && x > c ? reduced + 0.05 * (x - c) : reduced;
  }
  // Damage multipliers from different items multiply, then up to x2.3 counts in full, a quarter above, never past x3.
  const mulDr = (m) => (m <= 2.3 ? m : Math.min(3, 2.3 + 0.25 * (m - 2.3)));

  const SHINY = { dmg: 1.06, rate: 0.94, speed: 1.03, luck: 1 };
  const EVO = [null, { hp: 2, dmg: 1 }, { hp: 2, dmg: 1.5, speed: -0.2 }];
  const PURE_K = 1.5;

  // Level of the Pokémon: damage, fire rate and speed scale with it in Classic and Liga only.
  const levelK = (lv) => ({ dmg: 1 + 0.008 * (lv - 1), rate: 1 - 0.004 * (lv - 1), speed: 1 + 0.002 * (lv - 1) });

  // Type bonus tier: grows with level (Classic/Liga) or with the floor (other modes).
  function typeTier(b) {
    const lv = b.level || 1;
    const floorIdx = Math.max(0, (b.floor || 1) - 1);
    if (b.levels !== false) {
      let t = Math.floor((lv - 1) / 8);
      if (floorIdx >= 30) t += Math.min(3, Math.floor((floorIdx - 30) / 20));
      return clamp(t, 0, 10);
    }
    return clamp(Math.floor(floorIdx / 10), 0, 3);
  }

  // Which of the two types gets a bonus depends on the shot: a dual type alternates, so averages are used.
  const isFightDark = (e) => e === "fighting" || e === "dark";
  const dmgK = (e, t) => (e === "rock" || e === "ground" ? 1 + 0.03 * t : e === "dragon" ? 1 + 0.02 * t : e === "fighting" ? 1 + 0.01 * t : 1);
  const critAdd = (e, t) => (isFightDark(e) ? 0.015 * t : 0);
  const critDmg = (e, t) => (isFightDark(e) ? 0.1 * t : 0);

  function shinyK(data, ch, shiny) {
    if (!shiny) return { dmg: 1, rate: 1, speed: 1, luck: 0, focus: null };
    const rel = { dmg: ch.dmg / data.avg.dmg, rate: data.avg.rate / ch.rate, speed: ch.speed / data.avg.speed };
    const focus = Object.keys(rel).sort((a, b) => rel[b] - rel[a])[0];
    return {
      dmg: focus === "dmg" ? 1 + 2 * (SHINY.dmg - 1) : SHINY.dmg,
      rate: focus === "rate" ? 1 - 2 * (1 - SHINY.rate) : SHINY.rate,
      speed: focus === "speed" ? 1 + 2 * (SHINY.speed - 1) : SHINY.speed,
      luck: SHINY.luck,
      focus,
    };
  }

  // Situation: numbers and switches the player sets (coins, hits taken, standing still...). Missing = 0 / off.
  const SIT_VARS = ["coins", "hits", "floors", "rooms", "candies", "claw", "calm", "buys", "rend", "eye", "kills", "roomhits", "missing", "soul"];
  const SIT_FLAGS = ["low_health", "just_hit", "standing_still", "mega_energy", "fight_start", "boss", "close", "slowed", "firing", "crown", "cleared", "moving", "levelup", "switchin", "hurt", "fresh", "far", "last_enemy", "enemy_full", "enemy_flying", "first_hit"];
  const LIMITS = { coins: 250, hits: 10, floors: 14, rooms: 15, candies: 10, claw: 10, calm: 15, buys: 15, rend: 9, eye: 10, kills: 10, roomhits: 6, missing: 4, soul: 6 };

  // One effect record of an item. Returns { stat, add, mul, active } (add for flat bonuses, mul for multipliers).
  function evalFx(fx, ctx) {
    const sit = ctx.sit;
    const when = fx.when;
    const on =
      !when ? true :
      when === "electric" ? ctx.elem === "electric" :
      when === "odd_floor" ? (ctx.floor - 1) % 2 === 0 :
      when === "even_floor" ? (ctx.floor - 1) % 2 === 1 :
      !!sit[when];
    const out = { stat: fx.stat, add: 0, mul: 1, active: on, when: when || null, kind: fx.k, v: fx.value, fam: !!fx.fam };
    if (!(fx.k in { add: 1, mul: 1, mulvar: 1, divvar: 1 })) { out.active = on; return out; }
    if (fx.k === "add") {
      if (fx.var) {
        const v = fx.var === "items" ? ctx.nItems : Math.min(LIMITS[fx.var] || 1e9, +sit[fx.var] || 0);
        out.add = Math.min(fx.max == null ? Infinity : fx.max, fx.per * (fx.step ? Math.floor(v / fx.step) : v));
        out.v = out.add; out.active = out.add !== 0;
      } else if (on) out.add = fx.value;
    } else if (fx.k === "mul" && on) out.mul = fx.value;
    else if (fx.k === "mulvar" || fx.k === "divvar") {
      const v = Math.min(fx.max == null ? Infinity : fx.max, Math.min(LIMITS[fx.var] || 1e9, +sit[fx.var] || 0));
      out.mul = fx.k === "divvar" ? 1 / (1 + fx.per * v) : 1 + fx.per * v; out.v = out.mul; out.active = v > 0; out.kind = "mulvar";
    }
    return out;
  }

  // Weapons. avg = your average damage of one hit, R = your delay between shots in ticks, ms = 1 + multishot.
  // Each returns { dps, hits (per attack), cycle (seconds between attacks), mult (damage of a hit as a share of your hit) }.
  const WEAPON_MODELS = {
    // bolt that jumps: first target takes x0.7 (more targets add more), ready again after 1.5 x delay
    laser: (avg, R, ms) => { const n = Math.min(5, ms), cycle = (1.5 * R) / 60; return { hits: n, mult: 0.7, cycle, dps: (n * 0.7 * avg) / cycle }; },
    // bites in a cone x1.1 with balance x0.37, and Defense Down: +12 % damage taken per stack, 3 stacks
    knife: (avg, R, ms) => { const n = Math.min(3, ms), cycle = (1.5 * Math.max(14, R)) / 60; return { hits: n, mult: 1.1 * 0.37, cycle, dps: (n * 1.1 * 0.37 * avg) / cycle, defenseDown: 1.36 }; },
    // blizzard zone: x0.78 every 0.25 s for 5.3 s once fully charged, balance x0.72. Zones of successive uses do not add up on one target (measured against the game), so one zone counts.
    ring: (avg) => ({ hits: 1, mult: 0.78 * 0.72, cycle: 0.25, zones: 1, dps: 0.78 * 0.72 * avg * 4 }),
    // earthquake at full charge x3.4, balance x0.53; multishot adds rings of -12 % damage each; charging goes on during the cooldown
    epic: (avg, R, ms) => {
      const charge = Math.min(70, Math.max(26, 2.4 * R)), cd = 1.5 * Math.max(30, 1.6 * R), cycle = Math.max(charge, cd) / 60;
      let rings = 0; for (let i = 0; i < Math.min(3, ms); i++) rings += 1 - 0.12 * i;
      return { hits: Math.min(3, ms), mult: 3.4 * 0.53, cycle, dps: (3.4 * 0.53 * avg * rings) / cycle };
    },
    // Rolling Voltorbs: a normal volley (max 9) at balance x0.8; each grazes once (x0.45) and its blast (x0.6) hits the target; ready after 1.5 x max(24, 1.6 delays)
    fetus: (avg, R, ms) => { const n = Math.min(9, ms), cycle = (1.5 * Math.max(24, 1.6 * R)) / 60, per = (0.45 + 0.6) * 0.8; return { hits: n, mult: per, cycle, dps: (n * per * avg) / cycle }; },
    // Leek: 5-swing cycle (4 slashes whose damage grows 15 % each, then a spin x1.6 with waves x2); each slash also sends a x0.4 wave
    sword: (avg, R, ms) => {
      let dmg = 0, ticks = 0;
      for (let k = 0; k < 4; k++) { dmg += 0.9 * (1 + 0.15 * k); ticks += 1.5 * Math.max(12, R * (1 - 0.05 * k)); }
      dmg += 1.6 + 2 * Math.min(3, ms); ticks += 1.5 * Math.max(12, R * (1 - 0.05 * 4));
      const cycle = ticks / 60;
      return { hits: 5, mult: dmg / 5, cycle: cycle / 5, dps: (dmg * 0.31 * avg) / cycle };
    },
    // Snowball: one ball that grows as it travels (x0.68 to x1.43), taken at mid-range, hitting about 1.5 times as it rolls through; balance x0.45
    ludo: (avg, R) => { const cycle = (1.5 * Math.max(22, 1.8 * R)) / 60, per = 0.68 * (1 + 1.1 * 0.5) * 1.5 * 0.45; return { hits: 1.5, mult: per, cycle, dps: (per * avg) / cycle }; },
    // Damp Rock: full charge = a line of 7 rocks x1.41, about 2 of them on the target, balance x0.36; charging goes on during the 0.3 s rest
    lung: (avg, R) => { const charge = Math.min(110, Math.max(36, 3.2 * R)), cycle = Math.max(charge, 18) / 60, per = 2 * 1.41 * 0.36; return { hits: 2, mult: per, cycle, dps: (per * avg) / cycle }; },
    // Fame Checker (module): links every 0.2 s from you to the mark, x0.17 with balance x0.62
    laser2: (avg) => ({ hits: 1, mult: 0.17 * 0.62, cycle: 0.2, dps: 5 * 0.17 * 0.62 * avg }),
    // Casteliacone (module): replaces your normal shots by charged volleys (computed separately)
    charge: () => ({ hits: 0, mult: 1, cycle: 0, dps: 0 }),
    // Hyper Beam: meter fills 6.25 % per hit (one per delay): 16 delays, then 12 ticks of x2.3 with balance x0.33, rest 0.57 s
    beam: (avg, R) => { const cycle = (16 * R + 36 + 34) / 60; return { hits: 12, mult: 2.3 * 0.33, cycle, dps: (12 * 2.3 * 0.33 * avg) / cycle }; },
  };

  function character(data, slug) {
    const a = data.chars[slug];
    if (!a) return null;
    return { hp: a[0], dmg: a[1], rate: a[2], speed: a[3], range: a[4], shot: a[5], luck: a[6], elem: a[7], elem2: a[8] || "" };
  }

  // build = { char, stage 0-2, level, levels (bool), floor, shiny, items: {slug: count} }
  function compute(data, b) {
    const ch = character(data, b.char);
    if (!ch) return null;
    const tier = typeTier(b);
    const lv = b.levels !== false ? clamp(b.level || 1, 1, 60) : 1;
    const lk = levelK(lv);
    const sk = shinyK(data, ch, b.shiny);
    const has = (e) => ch.elem === e || ch.elem2 === e;

    // Sum of every stat bonus given by the items (each copy counts), plus the evolution bonuses.
    const sum = { dmg: 0, rate: 0, speed: 0, hp: 0, range: 0, shot: 0, luck: 0 };
    const unsimulated = [], partial = [];
    const contribSkipped = [];
    const contrib = { dmg: [], rate: [], speed: [], hp: [], range: [], shot: [], luck: [] };
    let nItems = 0;
    const present = [];
    const whiteHerb = !!((b.items || {}).hierba_blanca > 0);
    for (const [slug, n0] of Object.entries(b.items || {})) {
      const it = data.items[slug];
      if (!it || n0 <= 0) continue;
      const n = it.h ? 1 : n0;
      nItems += n;
      present.push(slug);
      for (const [k, v] of Object.entries(it.s || {})) { if (whiteHerb && slug !== "hierba_blanca" && (k === "rate" ? v > 0 : v < 0)) { contribSkipped.push({ slug, k, v: v * n }); continue; } sum[k] += v * n; if (contrib[k]) contrib[k].push({ slug, n, v: v * n }); }
      if (it.t === "none") unsimulated.push(slug);
      else if (it.t === "partial") partial.push(slug);
    }
    // Conditional effects: each item counts once, however many copies you hold.
    const ctx = { sit: b.sit || {}, elem: ch.elem, floor: b.floor || 1, nItems };
    const addList = { dmg: [], rate: [], speed: [], range: [], shot: [], luck: [] };
    const effects = [], adds = { dmg: 0, rate: 0, speed: 0, range: 0, shot: 0, luck: 0 }, muls = { dmg: [], rate: [], speed: [], hit: [] };
    const mods = { multishot: 0, crit: 0, critX: 0 }, boosts = [], extras = [];
    let rear = false, double = false, echo = 0, alwaysCrit = false, famK = 1, famCapAdd = 0, famHit = 1;
    const comps = [], weapons = [];
    const MODULES = ["beam", "laser2", "charge"];
    for (const slug of present) {
      const copies = data.items[slug].h ? 1 : b.items[slug];
      for (const fx of data.items[slug].e || []) {
        const r = evalFx(fx, ctx);
        r.slug = slug; effects.push(r);
        if (r.add) { adds[r.stat] += r.add; addList[r.stat].push({ slug, v: r.add }); }
        if (r.mul !== 1) muls[r.stat].push({ slug, v: r.mul });
        if (fx.fam && r.active && r.mul !== 1) famHit *= r.mul;
        if (fx.k === "companion") { for (let c = 0; c < copies; c++) comps.push({ slug, fx }); r.label = "companion"; r.v = copies; }
        else if (fx.k === "weapon") { weapons.push({ slug, model: fx.model, module: MODULES.includes(fx.model) }); r.label = "weapon"; }
        else if (fx.k === "nonegatives") { r.label = "nonegatives"; }
        else if (fx.k === "famk") { famK *= fx.value; r.label = "famk"; r.v = fx.value; }
        else if (fx.k === "famcap") { famCapAdd += fx.value * copies; r.label = "famcap"; r.v = fx.value * copies; }
        else if (fx.k === "mod") { mods[fx.mod] += fx.value * copies; r.label = fx.mod; r.v = fx.value * copies * (fx.mod === "crit" ? 8 : 1); }
        else if (fx.k === "typeboost") { boosts.push({ elem: fx.elem, mul: fx.mul, tier: fx.tier || 0 }); r.label = fx.tier ? "plate" : "boost"; r.v = fx.mul; r.elem = fx.elem; }
        else if (fx.k === "rear") { rear = true; r.label = "rear"; }
        else if (fx.k === "double") { double = true; r.label = "double"; }
        else if (fx.k === "echo") { echo = fx.value; r.label = "echo"; r.v = fx.value; }
        else if (fx.k === "extra") { extras.push(fx); r.label = "extra"; r.v = fx.n; }
        else if (fx.k === "alwayscrit") { r.active = !!ctx.sit[fx.when]; if (r.active) alwaysCrit = true; r.label = "alwayscrit"; }
      }
    }
    const evo = { hp: 0, dmg: 0, speed: 0 };
    for (let s = 1; s <= (b.stage || 0); s++) for (const k of ["hp", "dmg", "speed"]) evo[k] += EVO[Math.min(s, 2)][k] || 0;

    const out = { tier, level: lv, nItems, unsimulated, partial, effects, shinyFocus: sk.focus, stats: {}, steps: {}, contrib, addList, contribSkipped };

    // Damage
    const dmgBonus = sum.dmg + evo.dmg + adds.dmg;
    const dmgCounted = dmgBonus > 0 ? dr(dmgBonus, 3, 8, 40) : dmgBonus;
    const hitMul = muls.hit.reduce((a, m) => a * m.v, 1);
    const dmgMulRaw = muls.dmg.reduce((a, m) => a * m.v, 1);
    const dmgMul = mulDr(dmgMulRaw);
    const dmgBase = ch.dmg + dmgCounted;
    const dmg = Math.max(0.5, dmgBase * dmgMul * sk.dmg * lk.dmg);
    out.stats.damage = dmg;
    out.steps.damage = { base: ch.dmg, items: sum.dmg + adds.dmg, evo: evo.dmg, counted: dmgCounted, mult: dmgMul, multRaw: dmgMulRaw, mults: muls.dmg, shiny: sk.dmg, level: lk.dmg };

    // Fire rate (ticks between shots: lower is faster)
    const rateBonus = sum.rate < 0 ? -dr(-sum.rate, 3, 7) : sum.rate;
    const tierFor = (e) => clamp(tier + (has(e) && boosts.some((x) => x.elem === e && x.tier) ? boosts.find((x) => x.elem === e && x.tier).tier : 0), 0, 10);
    const bugMul = has("bug") ? 1 - 0.012 * tierFor("bug") : 1;
    const rateMulItems = muls.rate.reduce((a, m) => a * m.v, 1);
    const ticks = Math.max(5, (ch.rate + rateBonus) * rateMulItems * bugMul * sk.rate * lk.rate);
    // The game waits whole ticks between two shots, so a delay of 12.38 ticks is really 13.
    const shotTicks = Math.ceil(ticks - 1e-9);
    out.stats.ticks = ticks;
    out.stats.shotTicks = shotTicks;
    out.stats.fireRate = 60 / shotTicks;
    out.steps.fireRate = { baseTicks: ch.rate, items: sum.rate, counted: rateBonus, itemMul: rateMulItems, bug: bugMul, shiny: sk.rate, level: lk.rate, capped: ticks === 5, shotTicks };

    // Speed
    const speedAdd = evo.speed + adds.speed + (has("flying") ? 0.04 * tierFor("flying") : has("bug") ? 0.02 * tierFor("bug") : 0);
    out.stats.speed = Math.max(1.6, ch.speed + sum.speed + speedAdd) * sk.speed * lk.speed;
    out.steps.speed = { base: ch.speed, items: sum.speed, evo: evo.speed, cond: adds.speed, type: speedAdd - evo.speed - adds.speed, shiny: sk.speed, level: lk.speed };

    // Range and shot speed
    out.stats.range = Math.max(120, ch.range + 50 + sum.range + adds.range);
    out.steps.range = { base: ch.range, global: 50, items: sum.range, cond: adds.range };
    out.stats.shotSpeed = Math.max(4, ch.shot + sum.shot + adds.shot);
    out.steps.shotSpeed = { base: ch.shot, items: sum.shot, cond: adds.shot };

    // Luck (full up to 10, a quarter above)
    const luckRaw = ch.luck + sum.luck + adds.luck + sk.luck + (has("normal") ? 0.35 * tierFor("normal") : 0);
    out.stats.luck = luckRaw <= 10 ? luckRaw : 10 + 0.25 * (luckRaw - 10);
    out.steps.luck = { base: ch.luck, items: sum.luck + adds.luck, shiny: sk.luck, type: has("normal") ? 0.35 * tierFor("normal") : 0, raw: luckRaw };

    // Health in half hearts, 1 to 12 hearts
    out.stats.hp = clamp(ch.hp + sum.hp + evo.hp, 2, 24);
    out.steps.hp = { base: ch.hp, items: sum.hp, evo: evo.hp, capped: ch.hp + sum.hp + evo.hp > 24 };
    out.stats.hearts = out.stats.hp / 2;

    // Damage per shot, averaged over the shot types of a dual-type Pokémon (they alternate).
    const elems = ch.elem2 ? [ch.elem, ch.elem2] : [ch.elem];
    const pure = ch.elem2 ? 1 : PURE_K;
    const critX = Math.min(1, mods.critX);
    let avg = 0, critC = 0, critM = 0, kAvg = 0, cType = 0;
    for (const e of elems) {
      const te = tierFor(e);
      const boost = boosts.filter((x) => x.elem === e).reduce((a, x) => a * x.mul, 1);
      const c = alwaysCrit ? 1 : clamp(0.08 * mods.crit + (isFightDark(e) ? 0.1 * pure : 0) + critAdd(e, te) + 0.01 * out.stats.luck, 0, 1);
      const m = 2 + critX + critDmg(e, te);
      const k = dmgK(e, te) * boost;
      avg += (dmg * k * hitMul * (1 + c * (m - 1))) / elems.length;
      cType += ((isFightDark(e) ? 0.1 * pure : 0) + critAdd(e, te)) / elems.length;
      critC += c / elems.length; critM += m / elems.length; kAvg += k / elems.length;
    }
    out.steps.crit = { items: 0.08 * mods.crit, type: cType, luck: 0.01 * out.stats.luck, always: alwaysCrit, mult: 2 + critX };
    out.stats.critChance = critC;
    out.stats.critMult = critM;
    out.stats.typeDamage = kAvg;
    out.stats.shotDamage = dmg * kAvg;
    out.stats.avgShot = avg;
    out.steps.shot = { dmg, type: kAvg, hit: hitMul, critF: avg / (dmg * kAvg * hitMul || 1) };
    // Volley: 1 + multishot (max 9), doubled backwards by Destiny Knot and by Go-Goggles; random extra shots by chance.
    const fwd = clamp(1 + mods.multishot, 1, 9);
    const volley = fwd * (rear ? 2 : 1) * (double ? 2 : 1);
    let extraShots = 0;
    for (const x of extras) extraShots += x.n * clamp(x.base + 0.01 * out.stats.luck, 0, x.max);
    let perAttack = volley + extraShots;
    let echoShots = 0;
    if (echo) {
      // a copy of each shot half a second later, at most 24 waiting at once
      echoShots = perAttack * Math.min(1, 24 / Math.max(1e-9, perAttack * out.stats.fireRate * 0.5)) * echo;
    }
    out.stats.shotsPerVolley = perAttack + echoShots;
    // Chance shots fly in random directions: against one target about 1 in 10 lands (measured against the game), the rest are left out of the damage.
    const EXTRA_HIT = 0.1;
    const hitAttack = volley + extraShots * EXTRA_HIT;
    const hitEcho = echo ? hitAttack * Math.min(1, 24 / Math.max(1e-9, hitAttack * out.stats.fireRate * 0.5)) * echo : 0;
    out.stats.hitShots = hitAttack + hitEcho;
    out.steps.volley = { forward: fwd, rear, double, volley, extra: extraShots, extraHit: EXTRA_HIT, echo: echoShots, hitMul, crit: mods.crit, critX };
    out.stats.hitMul = hitMul;
    out.stats.playerDps = avg * out.stats.hitShots * out.stats.fireRate;

    // Companions: up to 3 (+2 per Apricorn Box, never more than 6) take the Balls in the order they were added.
    const cap = Math.min(6, 3 + famCapAdd);
    const floorIdx = Math.max(0, (b.floor || 1) - 1);
    const famBase = Math.max(2, 2 + 0.4 * floorIdx);
    const ELEMS = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];
    const boostFor = (e) => boosts.filter((x) => x.elem === e).reduce((a, x) => a * x.mul, 1);
    const companions = [];
    comps.forEach((c, i) => {
      const f = c.fx, row = { slug: c.slug, active: i < cap, dps: 0, perShot: 0, interval: 0 };
      if (f.copy) {
        // Ditto repeats your forward and backward volleys at 75 % damage, with your own stats
        row.perShot = avg * f.copy; row.interval = 60 / out.stats.fireRate / 60;
        row.dps = avg * f.copy * fwd * (rear ? 2 : 1) * out.stats.fireRate; row.shots = fwd * (rear ? 2 : 1);
      } else {
        const boost = f.rand ? ELEMS.reduce((a, e) => a + boostFor(e), 0) / ELEMS.length : boostFor(f.elem);
        const d = famBase * famK * (f.dmgK || 1) * famHit * boost;
        row.perShot = d; row.shots = f.shots; row.interval = f.cd / 60; row.dps = (d * f.shots * 60) / f.cd;
      }
      companions.push(row);
    });
    out.companions = companions;
    out.steps.companions = { cap, count: comps.length, base: famBase, famK, famHit };
    out.stats.companionDps = companions.filter((c) => c.active).reduce((a, c) => a + c.dps, 0);

    // Equipped weapon (one at a time) plus every module (these work with any weapon). Single target, every hit lands.
    const mainWeapons = weapons.filter((w) => !w.module);
    const heldWeapon = mainWeapons.find((w) => w.slug === b.weapon) || mainWeapons[mainWeapons.length - 1] || null;
    out.weapons = weapons.map((w) => ({ slug: w.slug, module: w.module, equipped: w === heldWeapon }));
    out.stats.weaponDps = 0; out.steps.weapons = [];
    let defenseDown = 1;
    const Rt = out.stats.ticks, msv = 1 + mods.multishot;
    for (const w of weapons) {
      if (!w.module && w !== heldWeapon) continue;
      const W = WEAPON_MODELS[w.model](avg, Rt, msv);
      if (w.model === "charge") {
        // charge to the full: a volley of balls x1.25 whose fragments (half of the 12 seek the target) add 15 % each; charging takes 2.5 delays
        const chargeT = Math.min(85, Math.max(20, 2.5 * Rt)) / 60;
        const per = 1.25 * (1 + 6 * 0.15);
        const dpsC = (perAttack * per * avg) / chargeT;
        W.dps = dpsC - out.stats.playerDps; W.replaces = true; W.mult = per; W.cycle = chargeT; W.hits = perAttack;
      }
      out.stats.weaponDps += W.dps;
      out.steps.weapons.push(Object.assign({ slug: w.slug, model: w.model, module: w.module }, W));
      if (W.defenseDown) defenseDown = W.defenseDown;
    }
    out.steps.weapon = out.steps.weapons.find((x) => !x.module) || null;
    out.stats.dps = (out.stats.playerDps + out.stats.companionDps + out.stats.weaponDps) * defenseDown;
    out.steps.defenseDown = defenseDown;
    return out;
  }

  const api = { compute, dr, mulDr, levelK, typeTier, character, EVO, SIT_VARS, SIT_FLAGS, LIMITS };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.PIBuilder = api;
})(typeof self !== "undefined" ? self : this);
