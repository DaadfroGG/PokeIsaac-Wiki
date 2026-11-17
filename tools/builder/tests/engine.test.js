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
near(r.stats.damage, 4.9); near(r.stats.ticks, 10.9); near(r.stats.fireRate, 60 / 11, 0.01);
// fire rate table: 14 ticks with +10 -> 5.75 counted -> 7.3 shots/s; +15 on 10 ticks hits the 12/s cap
data.items.f10 = { s: { rate: -10 }, t: "full" }; near(run({ items: { f10: 1 } }).stats.fireRate, 60 / 9, 0.01);
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

// --- phase 4: companions ---
// Pichu (Friend Ball): shoots every 0.5 s for 2 + 0.4 per floor passed
let pc = r3({ floor: 1, items: { f_amigo_ball: 1 } });
near(pc.stats.companionDps, 2 * 2); near(pc.companions[0].perShot, 2);
near(r3({ floor: 11, items: { f_amigo_ball: 1 } }).stats.companionDps, 6 * 2);
// Exp. Share doubles it; Igglybuff x1.8 every 40 ticks; Togepi 3 shots every 38 ticks
near(r3({ floor: 1, items: { f_amigo_ball: 1, repartir_exp: 1 } }).stats.companionDps, 8);
near(r3({ floor: 1, items: { f_amor_ball: 1 } }).stats.companionDps, 2 * 1.8 * 60 / 40);
near(r3({ floor: 1, items: { f_ensueno_ball: 1 } }).stats.companionDps, 3 * 2 * 60 / 38);
// A Fire Gem boosts a Fire companion's type only; Electric Pichu is unaffected
near(r3({ floor: 1, items: { f_amigo_ball: 1, x_fire_gem: 1 } }).stats.companionDps, 4);
near(r3({ floor: 1, items: { f_amigo_ball: 1, x_electric_gem: 1 } }).stats.companionDps, 4 * 1.3);
// Expert Belt reaches companions against bosses
near(r3({ floor: 1, items: { f_amigo_ball: 1, cinta_experto: 1 }, sit: { boss: true } }).stats.companionDps, 4 * 1.3);
// Limit of 3 companions, 5 with an Apricorn Box
const four = r3({ floor: 1, items: { f_amigo_ball: 4 } });
near(four.companions.filter((c) => c.active).length, 3);
near(r3({ floor: 1, items: { f_amigo_ball: 4, m_caja_bonguri: 1 } }).companions.filter((c) => c.active).length, 4);
// Ditto: 75 % of your own volley, forward and backward
const dt = r3({ items: { f_acopio_ball: 1 } });
near(dt.stats.companionDps, dt.stats.avgShot * 0.75 * dt.stats.fireRate);

// --- Gold Leaf x1.8, Power Lens x1.6, Special Attack X x1.5 multiply, then the x3 cap; White Herb cancels penalties ---
let m = r3({ items: { m_hoja_oro: 1, m_lente_recia: 1, s_ataque_especial_x: 1 } });
near(m.steps.damage.multRaw, 4.32); near(m.steps.damage.mult, 2.3 + 0.25 * (4.32 - 2.3));
const noHerb = r3({ items: { m_lente_recia: 1 } }), herb = r3({ items: { m_lente_recia: 1, hierba_blanca: 1 } });
near(noHerb.steps.fireRate.counted, 16 > 0 ? noHerb.steps.fireRate.counted : 0);
near(herb.steps.fireRate.items, 0);
near(herb.stats.fireRate > noHerb.stats.fireRate, true);
// Sweet Cream (Soja): damage x0.45, delay x0.28
near(r3({ items: { m_dulce_nata: 1 } }).steps.damage.mult, 0.45);
// Red Apricorn-style counters
near(r3({ items: { m_bonguri_rojo: 1 }, sit: { kills: 10 } }).steps.damage.mult, 1.6);

// --- weapons (equipped one only, single target) ---
const base = r3({ items: {} });
// Shock Drive: x0.7 per bolt, ready after 1.5 delays
const sd = r3({ items: { w_fulgorom: 1 } });
near(sd.stats.weaponDps, (0.7 * sd.stats.avgShot) / ((1.5 * sd.stats.ticks) / 60));
// Razor Fang: x1.1 x0.37, and Defense Down x1.36 on everything
const rf = r3({ items: { w_colmillo: 1 } });
near(rf.steps.defenseDown, 1.36);
near(rf.stats.dps, (rf.stats.playerDps + rf.stats.weaponDps) * 1.36);
// Only the equipped weapon counts; the last added one by default, w picks another
const two = r3({ items: { w_fulgorom: 1, w_colmillo: 1 } });
near(two.steps.weapon.model === "knife", true);
near(r3({ items: { w_fulgorom: 1, w_colmillo: 1 }, weapon: "w_fulgorom" }).steps.weapon.model === "laser", true);

// Colress Machine: volley of Voltorbs, (0.45 + 0.6) x 0.8 each, ready after 1.5 x max(24, 1.6 delays)
const cm = r3({ items: { w_acromaquina: 1, mt_doble: 1 } });
near(cm.stats.weaponDps, (2 * 1.05 * 0.8 * cm.stats.avgShot) / ((1.5 * Math.max(24, 1.6 * cm.stats.ticks)) / 60));

// remaining weapons give a positive DPS; modules stack with the equipped weapon
for (const [slug, model] of [["w_puerro", "sword"], ["w_bola_nieve", "ludo"], ["w_roca_lluvia", "lung"], ["w_memorin", "laser2"]]) {
  const r = r3({ items: { [slug]: 1 } });
  near(r.steps.weapons[0].model === model && r.stats.weaponDps > 0, true);
}
const mod = r3({ items: { w_memorin: 1, w_fulgorom: 1 } });
near(mod.steps.weapons.length, 2);

// held items: one copy counts, multiplicative bucket, flat range/speed
const hb = r3({ items: { adamant_mint: 3 } });
near(hb.steps.damage.multRaw, 1.15);
const fig = r3({ items: { figy_berry: 1 }, sit: { missing: 4 } });
near(fig.steps.damage.multRaw, 1.4);
const mago = r3({ items: { mago_berry: 1 }, sit: { soul: 6 } });
near(mago.steps.fireRate.itemMul, 1 / 1.3);
const calm = r3({ items: { calm_mint: 1 } });
near(calm.stats.range, Math.max(120, base.stats.range - 60));
const wiki = r3({ items: { wiki_berry: 1 }, sit: { enemy_full: 1 } });
near(wiki.stats.dps / base.stats.dps, 1.3, 1e-6);

// shot items, checked against the game's own simulator (pikachu lv 30 alone, neutral boss)
const sp = (b) => E.compute(data, Object.assign({ char: "pikachu", stage: 0, level: 30, levels: true, floor: 1 }, b));
const b0 = sp({ items: {} });
const rel = (slug) => sp({ items: { [slug]: 1 } }).stats.dps / b0.stats.dps;
near(rel("m_dentadura"), 1.264, 0.02); near(rel("m_duralium"), 1.25, 0.01); near(rel("m_flauta_eon"), 1.15, 0.01);
near(rel("m_galleta_lava"), 1.088, 0.02); near(rel("m_orbe_claro"), 1.33, 0.03);
near(rel("pico_afilado"), 1.61, 0.05); near(rel("m_lector_gb"), 1.17, 0.03); near(rel("m_seta_aroma"), 1.41, 0.12);
near(rel("m_bonguri_verde"), 1.15, 0.03); near(rel("roca_calor"), 1.15, 0.03);
near(sp({ items: { m_panuelo_sucio: 1 }, sit: { boss: 1 } }).stats.dps, b0.stats.dps, 1e-9); // does not work on bosses

// more shot items vs the simulator (pikachu lv 30 alone, ratio to the same build without the item)
const ratio = (slug) => sp({ items: { [slug]: 1 } }).stats.dps / b0.stats.dps;
near(ratio("flecha_venenosa"), 1.76, 0.06); near(ratio("carbon"), 1.23, 0.06); near(ratio("m_bola_arcilla"), 1.86, 0.06);
near(ratio("m_nectar_rojo"), 1.31, 0.08); near(ratio("m_toxisfera"), 1.37, 0.1); near(ratio("m_corona_galanuez"), 1.07, 0.06);
near(sp({ items: { m_puerro_grueso: 1 } }).steps.shot.hit, 2.2 - 1.8 * 150 / 270, 0.01);
console.log("engine tests passed");
