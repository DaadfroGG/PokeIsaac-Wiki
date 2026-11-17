// PARAMS: { builds: [{char, items, lv, floor}], ticks }. Damage dealt per second to a frozen boss that refills, shooter 100 px away.
const out = [];
const seed = (s) => { let x = s; Math.random = () => { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; }; };
for (const b of PARAMS.builds) {
  try {
    const seeds = [1, 2, 3], dpsList = [];
    Lab.run({ char: b.char, items: b.items, lv: b.lv, floor: b.floor || 1 });
    const p = Lab.g.player, room = Lab.g.room, boss = room.enemies.find((e) => e.boss);
    for (const e of room.enemies) if (e !== boss) e.dead = true;
    boss.elem = "none"; boss.elem2 = null;
    let dealt = 0;
    const take0 = boss.takeDamage;
    boss.takeDamage = function (a, s, ...r) { const h0 = this.hp + (this.aShield || 0); const res = take0.call(this, a, s, ...r); dealt += Math.max(0, h0 - (this.hp + (this.aShield || 0))); this.hp = this.maxHp; this.aShield = this.aShieldMax || 0; return res; };
    boss.die = () => { boss.hp = boss.maxHp; };
    const upd0 = boss.update;
    const sh = boss.bodyShape(); p.x = sh.x; p.y = sh.y + 100;
    const none = { x: 0, y: 0 };
    p.input = { local: true, pos: null, move: () => none, shoot: () => { const s2 = boss.bodyShape(), dx = s2.x - p.x, dy = s2.y - p.y, d = Math.hypot(dx, dy) || 1; return { x: dx / d, y: dy / d }; }, hit: () => false, weapon: () => PARAMS.hold ? (Lab.g.frame % (PARAMS.hold + 3)) < PARAMS.hold : !!PARAMS.weapon };
    for (const s of seeds) {
      seed(100 + s); room.shots = []; Lab.tick(60);
      boss.stun = 99999; dealt = 0; const f0 = Lab.g.frame;
      for (let t = 0; t < PARAMS.ticks; t++) { boss.stun = 99999; boss.hp = boss.maxHp; Lab.tick(1); }
      dpsList.push(dealt / ((Lab.g.frame - f0) / 60));
    }
    out.push({ b, dps: dpsList.reduce((a, x) => a + x, 0) / dpsList.length, spread: dpsList, stats: Lab.stats(), boss: boss.key, maxHp: boss.maxHp, shield: boss.aShieldMax || 0 });
  } catch (e) { out.push({ b, error: String(e).slice(0, 300) }); }
}
return out;
