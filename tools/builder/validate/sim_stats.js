// PARAMS: { builds: [{ char, items, lv, shiny }] } -> stats as the game computes them
const out = [];
for (const b of PARAMS.builds) {
  try {
    const r = Lab.run({ char: b.char, items: b.items, lv: b.lv, floor: b.floor || 5, shiny: !!b.shiny });
    Lab.tick(2);
    const p = Lab.g.player;
    out.push({ b, missing: r.missing, stats: Lab.stats(), speed: p.speed, hp: p.maxHp, elem: p.elem });
  } catch (e) { out.push({ b, error: String(e).slice(0, 200) }); }
}
return out;
