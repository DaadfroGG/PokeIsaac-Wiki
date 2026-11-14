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
  const SIT_VARS = ["coins", "hits", "floors", "rooms", "candies", "claw", "calm", "buys"];
  const SIT_FLAGS = ["low_health", "just_hit", "standing_still", "mega_energy", "fight_start"];
  const LIMITS = { coins: 250, hits: 10, floors: 14, rooms: 15, candies: 10, claw: 10, calm: 15, buys: 15 };

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
    const out = { stat: fx.stat, add: 0, mul: 1, active: on, when: when || null, kind: fx.k, v: fx.value };
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
    let nItems = 0;
    const present = [];
    for (const [slug, n] of Object.entries(b.items || {})) {
      const it = data.items[slug];
      if (!it || n <= 0) continue;
      nItems += n;
      present.push(slug);
      for (const [k, v] of Object.entries(it.s || {})) sum[k] += v * n;
      if (it.t === "none") unsimulated.push(slug);
      else if (it.t === "partial") partial.push(slug);
    }
    // Conditional effects: each item counts once, however many copies you hold.
    const ctx = { sit: b.sit || {}, elem: ch.elem, floor: b.floor || 1, nItems };
    const effects = [], adds = { dmg: 0, rate: 0, speed: 0 }, muls = { dmg: [], rate: [], speed: [] };
    for (const slug of present) {
      for (const fx of data.items[slug].e || []) {
        const r = evalFx(fx, ctx);
        r.slug = slug; effects.push(r);
        if (r.add) adds[r.stat] += r.add;
        if (r.mul !== 1) muls[r.stat].push({ slug, v: r.mul });
      }
    }
    const evo = { hp: 0, dmg: 0, speed: 0 };
    for (let s = 1; s <= (b.stage || 0); s++) for (const k of ["hp", "dmg", "speed"]) evo[k] += EVO[Math.min(s, 2)][k] || 0;

    const out = { tier, level: lv, nItems, unsimulated, partial, effects, shinyFocus: sk.focus, stats: {}, steps: {} };

    // Damage
    const dmgBonus = sum.dmg + evo.dmg + adds.dmg;
    const dmgCounted = dmgBonus > 0 ? dr(dmgBonus, 3, 8, 40) : dmgBonus;
    const dmgMulRaw = muls.dmg.reduce((a, m) => a * m.v, 1);
    const dmgMul = mulDr(dmgMulRaw);
    const dmgBase = ch.dmg + dmgCounted;
    const dmg = Math.max(0.5, dmgBase * dmgMul * sk.dmg * lk.dmg);
    out.stats.damage = dmg;
    out.steps.damage = { base: ch.dmg, items: sum.dmg + adds.dmg, evo: evo.dmg, counted: dmgCounted, mult: dmgMul, multRaw: dmgMulRaw, mults: muls.dmg, shiny: sk.dmg, level: lk.dmg };

    // Fire rate (ticks between shots: lower is faster)
    const rateBonus = sum.rate < 0 ? -dr(-sum.rate, 3, 7) : sum.rate;
    const bugMul = has("bug") ? 1 - 0.012 * tier : 1;
    const rateMulItems = muls.rate.reduce((a, m) => a * m.v, 1);
    const ticks = Math.max(5, (ch.rate + rateBonus) * rateMulItems * bugMul * sk.rate * lk.rate);
    out.stats.ticks = ticks;
    out.stats.fireRate = 60 / ticks;
    out.steps.fireRate = { baseTicks: ch.rate, items: sum.rate, counted: rateBonus, itemMul: rateMulItems, bug: bugMul, shiny: sk.rate, level: lk.rate, capped: ticks === 5 };

    // Speed
    const speedAdd = evo.speed + adds.speed + (has("flying") ? 0.04 * tier : has("bug") ? 0.02 * tier : 0);
    out.stats.speed = Math.max(1.6, ch.speed + sum.speed + speedAdd) * sk.speed * lk.speed;
    out.steps.speed = { base: ch.speed, items: sum.speed, evo: evo.speed, cond: adds.speed, type: speedAdd - evo.speed - adds.speed, shiny: sk.speed, level: lk.speed };

    // Range and shot speed
    out.stats.range = Math.max(120, ch.range + 50 + sum.range);
    out.steps.range = { base: ch.range, global: 50, items: sum.range };
    out.stats.shotSpeed = Math.max(4, ch.shot + sum.shot);
    out.steps.shotSpeed = { base: ch.shot, items: sum.shot };

    // Luck (full up to 10, a quarter above)
    const luckRaw = ch.luck + sum.luck + sk.luck + (has("normal") ? 0.35 * tier : 0);
    out.stats.luck = luckRaw <= 10 ? luckRaw : 10 + 0.25 * (luckRaw - 10);
    out.steps.luck = { base: ch.luck, items: sum.luck, shiny: sk.luck, type: has("normal") ? 0.35 * tier : 0, raw: luckRaw };

    // Health in half hearts, 1 to 12 hearts
    out.stats.hp = clamp(ch.hp + sum.hp + evo.hp, 2, 24);
    out.steps.hp = { base: ch.hp, items: sum.hp, evo: evo.hp, capped: ch.hp + sum.hp + evo.hp > 24 };
    out.stats.hearts = out.stats.hp / 2;

    // Damage per shot, averaged over the shot types of a dual-type Pokémon (they alternate).
    const elems = ch.elem2 ? [ch.elem, ch.elem2] : [ch.elem];
    const pure = ch.elem2 ? 1 : PURE_K;
    let avg = 0, critC = 0, critM = 0, kAvg = 0;
    for (const e of elems) {
      const c = clamp((isFightDark(e) ? 0.1 * pure : 0) + critAdd(e, tier) + 0.01 * out.stats.luck, 0, 1);
      const m = 2 + critDmg(e, tier);
      const k = dmgK(e, tier);
      avg += (dmg * k * (1 + c * (m - 1))) / elems.length;
      critC += c / elems.length; critM += m / elems.length; kAvg += k / elems.length;
    }
    out.stats.critChance = critC;
    out.stats.critMult = critM;
    out.stats.typeDamage = kAvg;
    out.stats.shotDamage = dmg * kAvg;
    out.stats.avgShot = avg;
    out.stats.shotsPerVolley = 1; // extra shots join here in later versions
    out.stats.dps = avg * out.stats.shotsPerVolley * out.stats.fireRate;
    return out;
  }

  const api = { compute, dr, mulDr, levelK, typeTier, character, EVO, SIT_VARS, SIT_FLAGS, LIMITS };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.PIBuilder = api;
})(typeof self !== "undefined" ? self : this);
