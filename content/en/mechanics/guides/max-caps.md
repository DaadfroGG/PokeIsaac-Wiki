---
title: Theoretical maximums
layout: guide
weight: 2
---
How far each stat can go, where the game stops counting, and how big a single hit can get. The ceilings come from the articles linked below; the worked example was checked in the current version of the game.

**In short:** the Damage stat tops out around **82.5** (the ×3 multiplier cap included). On top of that, every shot against a boss can be multiplied by about **×277**, and one perfect shot reaches about **2.8 million**. The full calculation is below.

## Every ceiling at a glance

| What | Ceiling | Details |
|---|---|---|
| Flat damage | None, but it shrinks | The first +3 counts in full, then 50 %, 25 % and 5 % past +40. +40 from items counts as +13.5. See [Diminishing returns](../rendimientos.html) |
| Damage multipliers | **×3** | Multiplied together: full up to ×2.3, a quarter above, ×3 reached at ×5.1 on paper. Only the items listed as "inside the cap" in [Item stacking](../acumulacion.html) |
| Multipliers on each hit | None | Everything listed as "on top of the cap" in [Item stacking](../acumulacion.html), plus crits and type effectiveness. They multiply with no limit |
| Fire rate | **12 shots per second** | See [Real stats](../estadisticas_reales.html) |
| Shots per volley | **9** | [Destiny Knot](../../items/lazo_destino.html) adds a second volley of up to 9 backwards; items that add shots on top are not limited to 9. See [Extra shots](../disparos_extra.html) |
| Your projectiles in the room | **450** | Past that, the oldest disappear, but those are almost always shots that already missed, so firing more still adds damage. See [Projectiles](../proyectiles.html) |
| Crit chance | None | Past 100 % every shot is a crit already; [Lansat Berry](../../items/baya_zonlan.html) does that at one heart. See [Critical hits](../criticos.html) |
| Crit damage | **×3** | ×2 normally, ×3 with [Wide Lens](../../items/lupa.html); a second one adds nothing |
| Luck | Soft cap at **10** | Above 10, a quarter counts |
| Max health | **12 hearts** | See [Real stats](../estadisticas_reales.html) |
| Speed, range, shot speed | None | They only have floors: speed 1.6, range 120 px, shot speed 4 |
| Companions | **6** | 3, then 5 with [Apricorn Box](../../items/m_caja_bonguri.html), 6 with a second one. See [Companions](../companeros.html) |
| Level | **60** | +47 % damage, fire rate ×1.3, +12 % speed. See [Pokémon levels](../niveles_pokemon.html) |
| Type effectiveness | **×2.25** | Against an enemy weak to your shot type twice. See [Type chart](../tabla_tipos.html) |
| Healing | 30 % of max HP per 10 s | Only for the repeating heals listed in [Healing](../curacion.html) |

## How big can one hit get?

One hit = **Damage stat** (what the HUD shows) × **per-hit multipliers** (never shown on the HUD). Each half has its own rules, so the maximum is worked out in four steps. Every multiplier below was checked in the current version of the game.

### Step 1: flat damage

Base damage of your Pokémon, plus flat bonuses after [diminishing returns](../rendimientos.html): the first +3 count in full, +3 to +8 at half, +8 to +40 at a quarter, beyond at 5 %.

- The highest base damage is **7.2** ([Mega Charizard X](../../pokemon/mega0006.html), [Mega Zygarde](../../pokemon/mega0718.html)); a typical Pokémon has 4.
- Every item with a damage line, one copy each, adds **+31.9** on paper ([White Herb](../../items/hierba_blanca.html) removes the minus lines of the others). After diminishing returns: 3 + 5 × 0.5 + 23.9 × 0.25 = **+11.5**.
- There is no hard ceiling: past +40, each extra +1 still counts +0.05.

<details><summary>The 42 items with a damage line</summary>

[Power Lens](../../items/m_lente_recia.html) +4, [Choice Band](../../items/cinta_elegida.html) +2, [Life Orb](../../items/vidasfera.html) +1.8, [Precooked Burger](../../items/s_hamburguesas.html) +1.5, [Twisted Spoon](../../items/cuchara.html) +1.2, [Choice Specs](../../items/gafas_elegidas.html) +1, [Dark Stone](../../items/m_orbe_oscuro.html) +1, [Everstone](../../items/piedra_eterna.html) +1, [Gigantamix](../../items/s_especias_gigamax.html) +1, [Gold Leaf](../../items/m_hoja_oro.html) +1, [Polished Mud Ball](../../items/m_bola_arcilla.html) +1, [Toxic Orb](../../items/m_toxisfera.html) +1, [Spice Mix](../../items/s_especias.html) +0.8, [Tough Candy](../../items/s_caramelo_aguante.html) +0.8, [Mixed Mushrooms](../../items/s_setas.html) +0.7, [Spell Tag](../../items/hechizo.html) +0.7, [Mighty Candy](../../items/s_caramelo_musculo.html) +0.6, [Shalour Sable](../../items/s_galleta_yantra.html) +0.6, [Big Mushroom](../../items/seta_grande.html) +0.5, [Exp. Candy XL](../../items/s_caramelo_exp_xl.html) +0.5, [Focus Band](../../items/banda.html) +0.5, [Galarica Wreath](../../items/m_corona_galanuez.html) +0.5, [Gold Bottle Cap](../../items/chapa_dorada.html) +0.5, [Instant Noodles](../../items/s_fideos.html) +0.5, [Light Ball](../../items/bola_luminosa.html) +0.5, [Meteorite Shard](../../items/cs_meteorito.html) +0.5, [Protein](../../items/proteina.html) +0.5, [Silk Scarf](../../items/panuelo.html) +0.5, [TM Shadow Sneak](../../items/mt_sombra.html) +0.5, [X Attack](../../items/ataquex.html) +0.5, [X Sp. Atk](../../items/s_ataque_especial_x.html) +0.5, [Dubious Disc](../../items/disco_extrano.html) +0.4, [Muscle Feather](../../items/s_pluma_musculo.html) +0.4, [Rare Bone](../../items/hueso_raro.html) +0.4, [Zinc](../../items/zinc.html) +0.4, [Berry Juice](../../items/bolsa_sangre.html) +0.3, [Black Glasses](../../items/gafas_sol.html) +0.3, [Charcoal](../../items/carbon.html) +0.3, [Grip Claw](../../items/garra_garfio.html) +0.3, [Magnet](../../items/iman.html) +0.3, [Poison Barb](../../items/flecha_venenosa.html) +0.3, [Rare Candy](../../items/caramelo.html) +0.3.

</details>

### Step 2: multipliers inside the cap

These are multiplied together, then capped: full up to ×2.3, a quarter above, **×3** at most (reached at ×5.1 on paper).

| Item | Multiplier | When |
|---|---|---|
| [Liechi Berry](../../items/baya_lichi.html) | ×1.5 | One heart or less, no soul hearts |
| [Weakness Policy](../../items/seguro_debilidad.html) | ×2 | 5 s after being hit |
| [Light Ball](../../items/bola_luminosa.html) | ×2 | Electric Pokémon |
| [Relic Statue](../../items/estatua_antigua.html) | ×2 | Standing still |
| [Lustrous Orb](../../items/orbe_lustre.html) | ×1.25 | Always |
| [Razor Claw](../../items/garra.html) | up to ×1.4 | Hit streak |
| [Key Stone](../../items/m_piedra_activadora.html) | ×2 | 8 s of mega energy |
| [Moon Stone](../../items/p_lunar.html) | ×1.2 | Odd floors |
| [Gold Leaf](../../items/m_hoja_oro.html) | ×1.8 | Always |
| [Power Lens](../../items/m_lente_recia.html) | ×1.6 | Always |
| [Ring Target](../../items/m_blanco.html) | up to ×2 | Hits in a row |
| [X Sp. Atk](../../items/s_ataque_especial_x.html) | ×1.5 | Always |
| [Red Apricorn](../../items/m_bonguri_rojo.html) | up to ×1.6 | Kills in the room |
| [Jaboca Berry](../../items/d_baya_jaboca.html) | up to ×1.6 | Hits taken in the room |
| Mega Stone of your Pokémon | ×1.2 | Always |
| [Dynamax](../raid_dinamax.html) | ×2 | While it lasts |
| [Whipped Dream](../../items/m_dulce_nata.html) | ×0.45 | Always (a penalty) |

All of them together make ×2,675 on paper, which still counts as ×3. Four always-on items are enough: Gold Leaf × Power Lens × X Sp. Atk × Lustrous Orb = ×5.4, so ×3.

### Step 3: the Damage stat

(base + flat) × capped multipliers × level × shiny:

- Level 60: ×1.47. A [shiny](../shinys_ventaja.html) whose standout stat is damage: ×1.12 (not for Megas).
- Best case: (7.2 + 11.5) × 3 × 1.47 = **82.5** Damage on the HUD.
- Pikachu with no flat damage: 3.5 × 3 = 10.5, and 15.5 at level 60.

### Step 4: per-hit multipliers

None of these show on the HUD and none have a shared limit: they all multiply each other.

| Source | Multiplier | When | Against bosses |
|---|---|---|---|
| [Eon Flute](../../items/m_flauta_eon.html) | ×1.15 | Every shot | Yes |
| [Plate](../../items/x_stone_plate.html) of the shot's type | ×1.15 | Shots of that type | Yes |
| [Type passive](../pasivas_escalan.html) at rank 10 | Rock/Ground ×1.3, Dragon ×1.2, Fighting ×1.1 | Shots of that type | Yes |
| [Expert Belt](../../items/cinta_experto.html) | ×1.3 | Bosses only | Yes |
| [Muscle Band](../../items/banda_musculo.html) | ×1.6 | Up close | Yes |
| [Large Leek](../../items/m_puerro_grueso.html) | ×2.14 measured up close (×2.2 at point blank) | Up close | Yes |
| [Binding Band](../../items/banda_atadura.html) | ×1.3 | Slowed enemies | Yes |
| [Dragon Fang](../../items/colmillo_dragon.html) | up to ×1.72 | Hitting the same enemy | Yes |
| [Scanner](../../items/escaner.html) | ×1.5 | After using it | Yes |
| [Metronome](../../items/metronomo.html) | up to ×1.6 | Firing without a break | Yes |
| Critical hit | ×2, ×3 with [Wide Lens](../../items/lupa.html) | Every shot with [Lansat Berry](../../items/baya_zonlan.html) at one heart | Yes |
| [Type effectiveness](../tabla_tipos.html) | up to ×2.25 | Enemy weak twice to the shot's type | Yes |
| [Gold Teeth](../../items/m_dentadura.html) | ×3.2 | Some shots (up to 50 % with luck) | Yes |
| [Normal Gem](../../items/gema_normal.html) | ×4 | First shot of each fight | Yes |
| [Dragon Scale](../../items/escama_dragon.html) | ×2 | Every fourth shot | Yes |
| [Blunder Policy](../../items/seguro_fallo.html) | ×2 | Shot after one that hit a wall | Yes |
| [Sun Stone](../../items/p_solar.html) | up to ×2 | After 2 s without firing | Yes |
| [Deep Sea Tooth](../../items/m_diente_marino.html) | ×2 on bosses (×3 or instant kill on others) | A needle, at most once per second | Yes |
| Sleeping enemy ([Poké Flute](../../items/poke_flauta.html)) | ×3 | First hit, then it wakes up | **No**, bosses never sleep |

What can't go together:
- Sun Stone needs a 2 s pause, which resets Metronome. Sun Stone is worth more (×2 against ×1.6).
- Expert Belt only works on bosses, a sleeping enemy is never a boss.
- Scanner and Poké Flute are both active items; you hold one at a time.
- Double weakness depends on your shot's type: Dragon shots never get more than ×1.5 (only Dragon is weak to Dragon).

### Worked example, measured

Pikachu, three items inside the cap, against a boss. Every line was measured in the game except the last.

| Added | Per hit | Total |
|---|---|---|
| Damage stat at the ×3 cap | 10.5 | ×1 |
| Eon Flute, Zap Plate, Expert Belt, Muscle Band, Binding Band, Dragon Fang (full), Scanner | 96.9 | ×9.2 |
| + Lansat Berry at one heart and Wide Lens (every shot a ×3 crit) | 290.6 | ×27.7 |
| + a boss weak twice to Electric (Water/Flying) | 653.9 | ×62.3 |
| + level 60 | 962.5 | ×91.7 |
| + Large Leek, as close as possible | 2,060 | ×196 |
| + Metronome at full | 3,296 | ×314 |
| + Normal Gem, Blunder Policy, Dragon Scale and a gold tooth on the same shot (×51.2) | 168,745 | ×16,071 |
| + Sun Stone instead of Metronome (×2 / ×1.6) | 210,931 | ×20,089 |
| + Deep Sea Tooth needle (×2, calculated) | 421,862 | ×40,177 |

### The theoretical ceiling

The best Pokémon for it is [Mega Diancie](../../pokemon/mega0719.html): 6.5 base damage, Rock type (Rock passive ×1.3 at rank 10, and Rock hits Fire/Flying, Bug/Flying and Ice/Flying bosses for ×2.25).

- Damage stat: (6.5 + 11.5) × 3 × 1.47 = **79.4**.
- Per hit, steady: 1.15 (Eon Flute) × 1.15 (Stone Plate) × 1.3 (Rock passive) × 1.3 (Expert Belt) × 1.6 (Muscle Band) × 2.14 (Large Leek) × 1.3 (Binding Band) × 1.72 (Dragon Fang) × 1.5 (Scanner) × 1.6 (Metronome) × 3 (crit) × 2.25 (type) = **×277**, so about **22,000** per hit on every shot.
- With every spike on the same shot (Normal Gem ×4, Blunder Policy ×2, Dragon Scale ×2, gold tooth ×3.2, Deep Sea Tooth ×2, and Sun Stone ×2 in place of Metronome): 22,000 ÷ 1.6 × 204.8 = about **2.8 million** in one hit.

That needs level 60, rank 10 (deep in [endless mode](../modo_infinito.html)), one heart left and a lot of luck with the pools. It is a ceiling, not a build.

## How many shots?

- At most 12 attacks per second, 9 shots per volley: 108 shots per second from the volley alone.
- [Destiny Knot](../../items/lazo_destino.html) doubles the volley (9 forward, 9 back), and chance-based extras can bring one attack up to 42 shots. See [Extra shots](../disparos_extra.html).
- Whatever the build, only 450 of your projectiles fit in the room. The cap removes the oldest first; shots that hit do so within a fraction of a second, so what it removes are mostly misses. More projectiles keep adding damage past the cap, a bit less each time. Staying close still about doubles a many-shot build's damage.
- Each companion copies or adds its own fire on top, up to 6 companions. For one room, [Catching Pocket](../../items/a_bolsillo_captura.html) copies them: up to 30 Dittos with [Devon Scuba Gear](../../items/d_bombona_devon.html) and [Cell Battery](../../items/d_pila.html).

## What is wasted

- Multipliers inside the cap past ×5.1 on paper: you are already at ×3. Pick items from the "on top" list instead.
- A second copy of the same multiplier: it counts once.
- Fire rate past 12 shots per second.
- Luck past 10 (a quarter counts), crit chance past 100 %, a second Wide Lens.
- Health past 12 hearts.
- [Whipped Dream](../../items/m_dulce_nata.html) is less of a loss on a build already past the cap: at ×8 on paper it only lowers damage to 87.5 %, and above ×11.3 it costs nothing.
