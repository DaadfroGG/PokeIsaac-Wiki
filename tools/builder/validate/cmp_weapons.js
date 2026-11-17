const fs = require("fs");
const E = require(process.cwd() + "/static/assets/builder/engine.js");
const data = JSON.parse(fs.readFileSync("static/assets/builder/data.json"));
const sim = JSON.parse(fs.readFileSync(process.argv[2])).result;
for (const r of sim) {
  if (r.error) { console.log("ERR", r.b.items, r.error); continue; }
  const items = {}; for (const i of r.b.items) items[i] = (items[i] || 0) + 1;
  const o = E.compute(data, { char: r.b.char, stage: 0, level: r.b.lv, levels: true, floor: 1, shiny: false, items });
  console.log((o.stats.dps / r.dps).toFixed(2), "plan", o.stats.dps.toFixed(1), "(wpn", o.stats.weaponDps.toFixed(1) + ")", "sim", r.dps.toFixed(1), r.b.char, r.b.items.join(","), "plain-only plan", o.stats.playerDps.toFixed(1));
}
