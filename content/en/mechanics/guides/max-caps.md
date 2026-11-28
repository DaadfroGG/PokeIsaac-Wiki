---
title: Theoretical maximums
layout: guide
weight: 2
---
How far each stat can go, where the game stops counting, and how big a single hit can get. The ceilings come from the articles linked below; the worked example was checked in the current version of the game.

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

Your shot damage is built in two halves. The first half is the Damage stat on the HUD, the second half is applied on each shot or hit and never shows on the HUD.

**1. The Damage stat.** Base damage of your Pokémon (2.7 to 7.2 across the roster) plus your flat bonuses after diminishing returns, times your multipliers after the ×3 cap, times your level (up to ×1.47), your [shiny bonus](../shinys_ventaja.html) (up to +12 %) and your type passive.

**2. On each hit, on top of the cap.** These have no shared limit. The steady ones:

| Item | Bonus | When |
|---|---|---|
| [Eon Flute](../../items/m_flauta_eon.html) | ×1.15 | Every shot |
| [Plate](../../items/x_zap_plate.html) of the shot's type | ×1.15 | Shots of that type |
| [Expert Belt](../../items/cinta_experto.html) | ×1.3 | Against bosses |
| [Muscle Band](../../items/banda_musculo.html) | ×1.6 | Up close |
| [Binding Band](../../items/banda_atadura.html) | ×1.3 | Slowed enemies |
| [Dragon Fang](../../items/colmillo_dragon.html) | up to ×1.72 | Hitting the same enemy |
| [Scanner](../../items/escaner.html) | ×1.5 | Scanned enemies |
| Critical hit | ×2, ×3 with [Wide Lens](../../items/lupa.html) | Every shot with [Lansat Berry](../../items/baya_zonlan.html) at one heart |
| Type effectiveness | up to ×2.25 | Double weakness |

**Worked example**, measured in the game. Pikachu at the ×3 cap hits for 10.5 per shot.

| Added | Per hit | Total |
|---|---|---|
| Nothing more | 10.5 | ×1 |
| Eon Flute, Zap Plate, Expert Belt, Muscle Band, Binding Band, Dragon Fang (full), Scanner | 96.9 | ×9.2 |
| + Lansat Berry at one heart and Wide Lens (every shot a ×3 crit) | 290.6 | ×27.7 |
| + an enemy weak twice to Electric (Water/Flying) | 653.9 | ×62.3 |
| + level 60 | 962.5 | ×91.7 |
| + all five spikes below on the same shot | 98,565 | ×9,387 |

A shiny whose standout stat is damage would add up to another ×1.12.

**Occasional spikes**, on some shots only: [Gold Teeth](../../items/m_dentadura.html) ×3.2, [Normal Gem](../../items/gema_normal.html) ×4 on the first shot of a fight, [Dragon Scale](../../items/escama_dragon.html) ×2 every fourth shot, [Blunder Policy](../../items/seguro_fallo.html) ×2 after a shot hits a wall, [Sun Stone](../../items/p_solar.html) up to ×2 after resting. They all multiply when they land on the same shot: ×102.4 with all five (measured), on top of everything above. Lining them up is rare: the first shot of a fight, fired after 2 s of rest, after a wall hit, being a fourth shot and a gold tooth. More per-hit items are in the [endless build guide](build-theorycraft.html).

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
