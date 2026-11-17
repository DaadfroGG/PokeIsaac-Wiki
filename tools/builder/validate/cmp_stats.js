const fs = require("fs");
const E = require(process.cwd() + "/static/assets/builder/engine.js");
const data = JSON.parse(fs.readFileSync("static/assets/builder/data.json"));
const sim = JSON.parse(fs.readFileSync(process.argv[2])).result;
let bad = 0, n = 0; const rows = [];
for (const r of sim) {
  if (r.error || (r.missing || []).length) { rows.push(["ERR", r.b.char, r.error || r.missing]); continue; }
  const items = {}; for (const i of r.b.items) items[i] = (items[i] || 0) + 1;
  const o = E.compute(data, { char: r.b.char, stage: 0, level: r.b.lv, levels: true, floor: 5, shiny: r.b.shiny, items });
  const cmp = [["dmg", o.stats.damage, r.stats.dmg], ["ticks", o.stats.ticks, r.stats.rate], ["speed", o.stats.speed, r.speed], ["range", o.stats.range, r.stats.range], ["shot", o.stats.shotSpeed, r.stats.shotSpeed], ["luck", o.stats.luck, r.stats.luck]];
  n++;
  const diffs = cmp.filter(([, a, b]) => Math.abs(a - b) > 0.0005 * Math.max(1, Math.abs(b)));
  if (diffs.length) { bad++; rows.push([r.b.char, r.b.lv, r.b.shiny ? "shiny" : "", r.b.items.join(","), diffs.map(([k, a, b]) => `${k} plan ${a.toFixed(3)} sim ${b.toFixed(3)}`).join(" | "), "multishot sim " + r.stats.multishot + " plan " + o.stats.shotsPerVolley]); }
}
console.log(`${n} builds, ${bad} with a difference > 0.05 %`);
for (const x of rows) console.log(x.join(" ; "));
