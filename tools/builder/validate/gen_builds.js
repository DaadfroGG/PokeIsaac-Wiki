const fs = require("fs");
const data = JSON.parse(fs.readFileSync("static/assets/builder/data.json"));
let seed = 7; const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
const pick = (a) => a[Math.floor(rnd() * a.length)];
const chars = Object.keys(data.chars);
const ok = Object.entries(data.items).filter(([k, it]) => it.t === "full" && !it.h && !(it.e || []).some((f) => f.when || f.var || f.k === "weapon" || f.k === "companion" || f.k === "alwayscrit"));
const builds = [];
for (let i = 0; i < +process.argv[2]; i++) {
  const n = 1 + Math.floor(rnd() * 8), items = [];
  for (let j = 0; j < n; j++) items.push(pick(ok)[0]);
  builds.push({ char: pick(chars), items, lv: 1 + Math.floor(rnd() * 60), shiny: rnd() < 0.15 });
}
fs.writeFileSync(process.argv[3], JSON.stringify({ builds }));
