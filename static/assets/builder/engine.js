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
  const SIT_VARS = ["coins", "hits", "floors", "rooms", "candies", "claw", "calm", "buys", "rend", "eye", "kills", "roomhits"];
  const SIT_FLAGS = ["low_health", "just_hit", "standing_still", "mega_energy", "fight_start", "boss", "close", "slowed", "firing", "crown"];
  const LIMITS = { coins: 250, hits: 10, floors: 14, rooms: 15, candies: 10, claw: 10, calm: 15, buys: 15, rend: 9, eye: 10, kills: 10, roomhits: 6 };

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
    if (!(fx.k in { add: 1, mul: 1, mulvar: 1 })) { out.active = on; return out; }
    if (fx.k === "add") {
      if (fx.var) {
        const v = fx.var === "items" ? ctx.nItems : Math.min(LIMITS[fx.var] || 1e9, +sit[fx.var] || 0);
        out.add = Math.min(fx.max == null ? Infinity : fx.max, fx.per * (fx.step ? Math.floor(v / fx.step) : v));
        out.v = out.add; out.active = out.add !== 0;
      } else if (on) out.add = fx.value;
    } else if (fx.k === "mul" && on) out.mul = fx.value;
    else if (fx.k === "mulvar") {
      const v = Math.min(fx.max == null ? Infinity : fx.max, +sit[fx.var] || 0);
      out.mul = 1 + fx.per * v; out.v = out.mul; out.active = v > 0;
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
    // blizzard zone: x0.78 every 0.25 s for 5.3 s once fully charged, balance x0.72; zones of successive uses overlap (max 6)
    ring: (avg, R) => {
      const charge = Math.min(70, Math.max(22, 2 * R)), cd = 1.5 * Math.max(20, R), cycleT = Math.max(charge, cd), cycle = cycleT / 60;
      const active = Math.min(6, 320 / cycleT);
      return { hits: active, mult: 0.78 * 0.72, cycle: 0.25, zones: active, dps: active * 0.78 * 0.72 * avg * 4 };
    },
    // earthquake at full charge x3.4, balance x0.53; multishot adds rings of -12 % damage each; charging goes on during the cooldown
    epic: (avg, R, ms) => {
      const charge = Math.min(70, Math.max(26, 2.4 * R)), cd = 1.5 * Math.max(30, 1.6 * R), cycle = Math.max(charge, cd) / 60;
      let rings = 0; for (let i = 0; i < Math.min(3, ms); i++) rings += 1 - 0.12 * i;
      return { hits: Math.min(3, ms), mult: 3.4 * 0.53, cycle, dps: (3.4 * 0.53 * avg * rings) / cycle };
    },
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
    for (const [slug, n] of Object.entries(b.items || {})) {
      const it = data.items[slug];
      if (!it || n <= 0) continue;
      nItems += n;
      present.push(slug);
      for (const [k, v] of Object.entries(it.s || {})) { if (whiteHerb && slug !== "hierba_blanca" && (k === "rate" ? v > 0 : v < 0)) { contribSkipped.push({ slug, k, v: v * n }); continue; } sum[k] += v * n; if (contrib[k]) contrib[k].push({ slug, n, v: v * n }); }
      if (it.t === "none") unsimulated.push(slug);
      else if (it.t === "partial") partial.push(slug);
    }
    // Conditional effects: each item counts once, however many copies you hold.
    const ctx = { sit: b.sit || {}, elem: ch.elem, floor: b.floor || 1, nItems };
    const addList = { dmg: [], rate: [], speed: [] };
    const effects = [], adds = { dmg: 0, rate: 0, speed: 0 }, muls = { dmg: [], rate: [], speed: [], hit: [] };
    const mods = { multishot: 0, crit: 0, critX: 0 }, boosts = [], extras = [];
    let rear = false, double = false, echo = 0, alwaysCrit = false, famK = 1, famCapAdd = 0, famHit = 1;
    const comps = [], weapons = [];
    for (const slug of present) {
      const copies = b.items[slug];
      for (const fx of data.items[slug].e || []) {
        const r = evalFx(fx, ctx);
        r.slug = slug; effects.push(r);
        if (r.add) { adds[r.stat] += r.add; addList[r.stat].push({ slug, v: r.add }); }
        if (r.mul !== 1) muls[r.stat].push({ slug, v: r.mul });
        if (fx.fam && r.active && r.mul !== 1) famHit *= r.mul;
        if (fx.k === "companion") { for (let c = 0; c < copies; c++) comps.push({ slug, fx }); r.label = "companion"; r.v = copies; }
        else if (fx.k === "weapon") { weapons.push({ slug, model: fx.model }); r.label = "weapon"; }
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
    out.stats.ticks = ticks;
    out.stats.fireRate = 60 / ticks;
    out.steps.fireRate = { baseTicks: ch.rate, items: sum.rate, counted: rateBonus, itemMul: rateMulItems, bug: bugMul, shiny: sk.rate, level: lk.rate, capped: ticks === 5 };

    // Speed
    const speedAdd = evo.speed + adds.speed + (has("flying") ? 0.04 * tierFor("flying") : has("bug") ? 0.02 * tierFor("bug") : 0);
    out.stats.speed = Math.max(1.6, ch.speed + sum.speed + speedAdd) * sk.speed * lk.speed;
    out.steps.speed = { base: ch.speed, items: sum.speed, evo: evo.speed, cond: adds.speed, type: speedAdd - evo.speed - adds.speed, shiny: sk.speed, level: lk.speed };

    // Range and shot speed
    out.stats.range = Math.max(120, ch.range + 50 + sum.range);
    out.steps.range = { base: ch.range, global: 50, items: sum.range };
    out.stats.shotSpeed = Math.max(4, ch.shot + sum.shot);
    out.steps.shotSpeed = { base: ch.shot, items: sum.shot };

    // Luck (full up to 10, a quarter above)
    const luckRaw = ch.luck + sum.luck + sk.luck + (has("normal") ? 0.35 * tierFor("normal") : 0);
    out.stats.luck = luckRaw <= 10 ? luckRaw : 10 + 0.25 * (luckRaw - 10);
    out.steps.luck = { base: ch.luck, items: sum.luck, shiny: sk.luck, type: has("normal") ? 0.35 * tierFor("normal") : 0, raw: luckRaw };

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
    out.steps.volley = { forward: fwd, rear, double, volley, extra: extraShots, echo: echoShots, hitMul, crit: mods.crit, critX };
    out.stats.hitMul = hitMul;
    out.stats.playerDps = avg * out.stats.shotsPerVolley * out.stats.fireRate;

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

    // Equipped weapon (one at a time): a separate attack that works beside your normal shots. Single target, every hit lands.
    const heldWeapon = weapons.find((w) => w.slug === b.weapon) || weapons[weapons.length - 1] || null;
    out.weapons = weapons.map((w) => ({ slug: w.slug, equipped: w === heldWeapon }));
    out.stats.weaponDps = 0; out.steps.weapon = null;
    let defenseDown = 1;
    if (heldWeapon) {
      const R = out.stats.ticks, ms = 1 + mods.multishot;
      const W = WEAPON_MODELS[heldWeapon.model](avg, R, ms);
      out.stats.weaponDps = W.dps; out.steps.weapon = Object.assign({ slug: heldWeapon.slug, model: heldWeapon.model }, W);
      if (W.defenseDown) defenseDown = W.defenseDown;
    }
    out.stats.dps = (out.stats.playerDps + out.stats.companionDps + out.stats.weaponDps) * defenseDown;
    out.steps.defenseDown = defenseDown;
    return out;
  }

  const api = { compute, dr, mulDr, levelK, typeTier, character, EVO, SIT_VARS, SIT_FLAGS, LIMITS };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.PIBuilder = api;
})(typeof self !== "undefined" ? self : this);
