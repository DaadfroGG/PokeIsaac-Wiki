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
console.log("engine tests passed");
