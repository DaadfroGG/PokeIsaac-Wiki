// node tools/builder/tests/engine.test.js : formulas against the worked examples on the wiki's mechanics pages.
const assert = require("assert");
const E = require("../../../static/assets/builder/engine.js");
const data = JSON.parse(require("fs").readFileSync(__dirname + "/../../../static/assets/builder/data.json", "utf8"));
data.chars.test = [8, 4, 14, 4, 300, 9, 0, "normal", ""];
data.items.x10 = { s: { dmg: 10 }, t: "full" };
data.items.protein = { s: { dmg: 0.5 }, t: "full" };
data.items.calcium = { s: { rate: -2 }, t: "full" };
data.items.zinc = { s: { dmg: 0.4, rate: -1.2 }, t: "full" };
const near = (a, b, e = 1e-3) => assert(Math.abs(a - b) < e, `${a} != ${b}`);
const run = (b) => E.compute(data, Object.assign({ char: "test", levels: false, floor: 1 }, b));

// diminishing returns page: +10 damage counts 6; two x2 become x2.725
near(E.dr(10, 3, 8, 40), 6);
near(E.mulDr(4), 2.725);
// Pikachu (3.5) +10 flat damage = 9.5 (instead of 13.5)
near(E.compute(data, { char: "pikachu", levels: false, items: { x10: 1 } }).stats.damage, 9.5);
// Stats in practice page: Protein + Calcium + Zinc on 4 damage / 4.3 shots/s
const r = run({ items: { protein: 1, calcium: 1, zinc: 1 } });
near(r.stats.damage, 4.9); near(r.stats.ticks, 10.9); near(r.stats.fireRate, 5.505, 0.01);
// fire rate table: 14 ticks with +10 -> 5.75 counted -> 7.3 shots/s; +15 on 10 ticks hits the 12/s cap
data.items.f10 = { s: { rate: -10 }, t: "full" }; near(run({ items: { f10: 1 } }).stats.fireRate, 7.27, 0.01);
data.chars.fast = [8, 4, 10, 4, 300, 9, 0, "normal", ""]; data.items.f15 = { s: { rate: -15 }, t: "full" };
near(E.compute(data, { char: "fast", levels: false, items: { f15: 1 } }).stats.fireRate, 12);
// slowdown counts in full: +4 delay on 14 ticks = 3.33 shots/s
data.items.slow = { s: { rate: 4 }, t: "full" }; near(run({ items: { slow: 1 } }).stats.fireRate, 3.33, 0.01);
// luck: 14 counts 11
data.items.l14 = { s: { luck: 14 }, t: "full" }; near(run({ items: { l14: 1 } }).stats.luck, 11);
// range gets +50, hearts cap at 12
data.items.h30 = { s: { hp: 30 }, t: "full" }; assert.strictEqual(run({ items: { h30: 1 } }).stats.hearts, 12);
near(run({}).stats.range, 350);
// level 60: damage x1.472, rate x0.764, speed x1.118
const l = E.compute(data, { char: "test", levels: true, level: 60, floor: 1, items: {} });
near(l.stats.damage, 4 * 1.472, 1e-3); near(l.steps.fireRate.level, 0.764, 1e-3); near(l.steps.speed.level, 1.118, 1e-3);
// evolution: stage 2 gives +2.5 damage (counted through the returns) and -0.2 speed
const ev = run({ stage: 2 }); near(ev.stats.damage, 6.5); near(ev.stats.speed, 3.8); assert.strictEqual(ev.stats.hp, 12);

// --- conditional effects (phase 2), real item data ---
const real = JSON.parse(require("fs").readFileSync(__dirname + "/../../../static/assets/builder/data.json", "utf8"));
const rc = (b) => E.compute(real, Object.assign({ levels: false, floor: 1, shiny: false, stage: 0, level: 1, items: {}, sit: {} }, b));
// Liechi Berry x1.5 only at one heart or less
near(rc({ char: "pikachu", items: { baya_lichi: 1 }, sit: { low_health: true } }).stats.damage, 3.5 * 1.5);
near(rc({ char: "pikachu", items: { baya_lichi: 1 } }).stats.damage, 3.5);
// Light Ball: +0.5 and x2 for an Electric Pokémon (Pikachu), only +0.5 for others
near(rc({ char: "pikachu", items: { bola_luminosa: 1 } }).stats.damage, (3.5 + 0.5) * 2);
near(rc({ char: "charmander", items: { bola_luminosa: 1 } }).stats.damage, 4.2 + 0.5);
// two x2 multipliers become x2.725 (Light Ball on Pikachu + Relic Statue standing still)
near(rc({ char: "pikachu", items: { bola_luminosa: 1, estatua_antigua: 1 }, sit: { standing_still: true } }).stats.damage, (3.5 + 0.5) * 2.725);
// a second copy of a conditional item does nothing more
near(rc({ char: "pikachu", items: { orbe_lustre: 2 } }).stats.damage, 3.5 * 1.25);
// Stardust: +0.2 per full 10 coins, up to +2; goes through the flat-damage returns
near(rc({ char: "pikachu", items: { polvo_estelar: 1 }, sit: { coins: 59 } }).stats.damage, 3.5 + 1.0);
near(rc({ char: "pikachu", items: { polvo_estelar: 1 }, sit: { coins: 250 } }).stats.damage, 3.5 + 2);
// Relic Band: +0.15 per item including itself, up to +3 (20 items)
near(rc({ char: "pikachu", items: { brazalete_antiguo: 1, proteina: 3 } }).stats.damage, 3.5 + 0.15 * 4 + 1.5);
// Razor Claw: +4 % per level, x1.4 at 10
near(rc({ char: "pikachu", items: { garra: 1 }, sit: { claw: 10 } }).stats.damage, 3.5 * 1.4);
// X Speed + Power Herb at the start of a fight: delay x0.48, speed +1.4
const ff = rc({ char: "pikachu", items: { velocidad_x: 1, hierba_unica: 1 }, sit: { fight_start: true } });
near(ff.steps.fireRate.itemMul, 0.48); near(ff.stats.speed, 4.2 + 1.4);
// Moon Stone: x1.2 damage on odd floors, +0.5 speed on even floors
near(rc({ char: "pikachu", floor: 1, items: { p_lunar: 1 } }).stats.damage, 3.5 * 1.2);
near(rc({ char: "pikachu", floor: 2, items: { p_lunar: 1 } }).stats.speed, 4.7);
// Pretty Feather: +1 speed after 15 s without a hit; Soda Pop +0.1 per purchase up to 1.5
near(rc({ char: "pikachu", items: { pluma_bella: 1 }, sit: { calm: 15 } }).stats.speed, 5.2);
near(rc({ char: "pikachu", items: { refresco: 1 }, sit: { buys: 40 } }).stats.speed, 5.7);

// --- phase 3: crit, volley, type boosts, per-hit multipliers ---
const r3 = (b) => rc(Object.assign({ char: "pikachu" }, b));
// Scope-style crit: Magnifying Lens +8 % crit and crit x3 (Luck 1 adds 1 %)
let c = r3({ items: { lupa: 1 } });
near(c.stats.critChance, 0.08 + 0.01 * c.stats.luck); near(c.stats.critMult, 3);
// Double Team + Lens Case: 1 + 1 + 2 = 4 shots a volley
near(r3({ items: { mt_doble: 1, m_portalentillas: 1 } }).stats.shotsPerVolley, 4);
// volley max 9, Destiny Knot doubles it, Go-Goggles doubles again
near(r3({ items: { mt_doble: 9, lazo_destino: 1 } }).stats.shotsPerVolley, 18);
near(r3({ items: { mt_doble: 9, lazo_destino: 1, m_gafas_aislantes: 1 } }).stats.shotsPerVolley, 36);
// Experto Belt x1.3 only against bosses
near(r3({ items: { cinta_experto: 1 } }).stats.avgShot, r3({ items: {} }).stats.avgShot);
near(r3({ items: { cinta_experto: 1 }, sit: { boss: true } }).stats.avgShot / r3({ items: {} }).stats.avgShot, 1.3);
// Fire gem: +30 % damage to Fire shots only
near(r3({ char: "charmander", items: { x_fire_gem: 1 } }).stats.avgShot / r3({ char: "charmander", items: {} }).stats.avgShot > 1.3, true);
near(r3({ items: { x_fire_gem: 1 } }).stats.typeDamage, 1);
console.log("engine tests passed");
