const fs = require("fs");
const E = require(process.cwd() + "/static/assets/builder/engine.js");
const data = JSON.parse(fs.readFileSync("static/assets/builder/data.json"));
const sim = JSON.parse(fs.readFileSync(process.argv[2])).result;
const rows = [];
for (const r of sim) {
  if (r.error) { console.log("ERR", r.error); continue; }
  const items = {}; for (const i of r.b.items) items[i] = (items[i] || 0) + 1;
  const o = E.compute(data, { char: r.b.char, stage: 0, level: r.b.lv, levels: true, floor: 1, shiny: false, items });
  rows.push({ ratio: o.stats.dps / r.dps, plan: o.stats.dps, sim: r.dps, shots: o.stats.shotsPerVolley, ms: r.stats.multishot, b: r.b, boss: r.boss, spread: Math.max(...r.spread) / Math.min(...r.spread) });
}
rows.sort((a, b) => a.ratio - b.ratio);
const med = rows[Math.floor(rows.length / 2)].ratio;
console.log("n", rows.length, "median plan/sim", med.toFixed(3), "min", rows[0].ratio.toFixed(2), "max", rows[rows.length - 1].ratio.toFixed(2));
for (const x of rows) console.log(x.ratio.toFixed(2), "plan", x.plan.toFixed(1), "sim", x.sim.toFixed(1), "vol", x.shots.toFixed(1), "ms", x.ms, x.boss, x.b.char, "lv" + x.b.lv, x.b.items.join(","));
