---
title: Building for endless mode
layout: guide
weight: 1
---
How to build a run that goes deep into [endless mode](../modo_infinito.html). The numbers come from the game's rules and were checked against the current version, but most of this hasn't been tested in real runs. If you find something that plays out differently, edit the page.

## The short version

- Damage multipliers share one cap: **×3** at most. Once you're there, more multipliers do nothing.
- Fire rate has a floor too: **12 shots per second** at most.
- So depth comes from what sits **outside** those caps: extra shots, companions that copy your shots, effects that trigger on hit, and damage based on a percentage of the enemy's health.
- Late in endless, enemies take about 7 % more health per floor. Every time you double your damage, you go about 10 floors further.
- You can't out-heal deep floors (12 hearts at most, and healing is capped), so avoid hits instead of tanking them.

## The caps

**Flat damage** has [diminishing returns](../rendimientos.html): the first +3 counts in full, up to +8 at half, up to +40 at a quarter. About +8 to +10 flat damage is all a build needs. A two-stage evolution already gives +2.5.

**Damage multipliers** are all multiplied together, then capped: up to ×2.3 counts in full, a quarter of anything above that, and never more than ×3. For example, [Gold Leaf](../../items/m_hoja_oro.html) (×1.8) and [X Sp. Atk](../../items/s_ataque_especial_x.html) (×1.5) make ×2.7, which becomes ×2.4. Add [Honor of Kalos](../../items/d_emblema_kalos.html) (×2) and you're at the cap. Past about ×5 before the cap, extra multipliers are wasted.

**Fire rate** stops at 5 frames between shots, which is 12 shots per second. Fire rate items get you most of the way, and [Swift Feather](../../items/m_pluma_impetu.html) (up to ×2) usually finishes the job. Anything beyond is wasted. [Whipped Dream](../../items/m_dulce_nata.html) is a trap here: its fire rate boost is lost to the floor, but its damage penalty stays.

## What goes past the caps

**Extra shots.** Each extra shot deals your full capped damage.
- [Lens Case](../../items/m_portalentillas.html): triple shot, but slower fire
- [TM Double Team](../../items/mt_doble.html): double shot
- [Go-Goggles](../../items/m_gafas_aislantes.html): extra diagonal shots
- [Vs. Recorder](../../items/camara_lucha.html): an echo of each shot at 50 % damage
- [Silver Powder](../../items/polvo_plata.html): shots split in two on hit
- [Dragon Scale](../../items/escama_dragon.html): every 4th shot deals ×2
- [Repeat Ball](../../items/f_acopio_ball.html): a Ditto that copies every volley at 75 % damage. With [Apricorn Box](../../items/m_caja_bonguri.html) you can carry more of them (6 companions at most, whatever the item text says)

You can have up to 9 shots per volley.

**On-hit effects.** These multiply each hit after the cap.

| Item | Effect |
|---|---|
| [Razor Fang](../../items/w_colmillo.html) | +12 % damage per bite stack, up to 3 stacks (×1.36). Also boosts companions |
| [Gold Teeth](../../items/m_dentadura.html) | Some shots deal ×3.2. Chance 10 % + 2 % per point of luck, up to 50 % |
| [Deep Sea Tooth](../../items/m_diente_marino.html) | A needle, at most once per second: ×2 on bosses; on other enemies, ×3, or an instant kill at half health or less. Chance 3 % + 0.5 % per point of luck, up to 10 % |
| [Large Leek](../../items/m_puerro_grueso.html) | ×2.2 point-blank, falling to ×0.4 at max range |
| [Expert Belt](../../items/cinta_experto.html) | ×1.3 against bosses |
| [Muscle Band](../../items/banda_musculo.html) | ×1.6 up close |
| [Dragon Fang](../../items/colmillo_dragon.html) | +8 % per hit on the same enemy, up to ×1.72 |
| [Metronome](../../items/metronomo.html) | +5 % per shot in a row, up to ×1.6 |

Type advantage also counts here: a super-effective hit deals ×1.5. Your Pokémon's level (up to ×1.47 at level 60), [shiny bonus](../shinys_ventaja.html) and [type ranks](../pasivas_escalan.html) apply outside the cap too.

**Luck** feeds [Gold Teeth](../../items/m_dentadura.html) and [Deep Sea Tooth](../../items/m_diente_marino.html), but past 10 it only counts at a quarter.

**Most copies don't stack.** Picking up the same item twice usually does nothing more: only extra shots, critical chance and plain stats add up per copy.

## Damage that ignores depth

Enemy health grows forever in endless, but these hit for a share of it, so they're worth the same on floor 200 as on floor 31.

- [Comet Shard](../../items/fragmento_cometa.html): when you enter a combat room, every enemy loses 25 % of its max health, and bosses 8 %.
- [Wise Glasses](../../items/gafas_especiales.html): your shots kill normal enemies below 15 % health. With the comet, you only need to take off 60 % of their health.
- [Deep Sea Tooth](../../items/m_diente_marino.html): its instant kill works at any depth (normal enemies only).
- [Anima Stone](../../items/hw_anima.html): every kill hits the nearest enemy for 2 % of a boss's max health (10 % for others). Huge against bosses that summon minions (Muk, Spiritomb, Vileplume), nothing against the rest.
- [Cursed Talisman](../../items/hw_talisman.html): a boss loses 8 % of its current health, once.
- [Rag Doll](../../items/cu_vudu.html): on a kill, 30 % chance to cut another enemy's current health by 25 %. Bosses included, but it can't kill.

## What endless throws at you

**Enemy health.** For the first 30 or so floors of endless, enemies gain about 14 % health per floor (×4 every 10 floors) and bosses 10.5 %. After that, both gain 7 % per floor, with no end. Floors in the table are those shown in the Ranking:

| Floor | Enemies | Floor bosses | Mega bosses |
|---|---|---|---|
| 31 | ×22 | ×74 | ×20 |
| 43 | ×105 | ×467 | ×78 |
| 53 | ×390 | ×1,266 | ×211 |
| 72 | ×4,705 | ×8,442 | ×1,407 |
| 100 | ×31,283 | ×56,133 | ×9,355 |
| 150 | ×921,518 | ×1.65 million | ×275,583 |
| 200 | ×27 million | ×49 million | ×8 million |

On top of this, [bosses adapt to you](../jefes_adaptativos.html): up to ×10 health before floor 43, then up to ×2. Very deep, every build falls behind what the game expects, and bosses drop to ×0.5.

**Chapters 5 to 7 are free.** They don't make endless any harder, so they're extra floors of items and experience. But once a chapter is unlocked, you have to beat its final boss to reach endless, so your build must be ready for it.

**Incoming damage.** On post-game floors, any hit smaller than a full heart counts as a full heart. Enemy contact damage keeps rising until about floor 73, where it reaches 3 hearts per hit. A boss hit can take at most half your max health. With 12 hearts, that's about 4 contact hits. This stops getting worse at floor 73, while enemy health keeps growing, so deep runs are a race.

**Shields.** Bosses with the [Armored](../afijos.html) affix get a shield worth 15 % of their max health, which you must break first. A shield takes your **raw shot damage**: type advantage and on-hit items ([Muscle Band](../../items/banda_musculo.html), [Expert Belt](../../items/cinta_experto.html), [Razor Fang](../../items/w_colmillo.html), [Large Leek](../../items/m_puerro_grueso.html), [Dragon Fang](../../items/colmillo_dragon.html)) don't count against it, and their stacks don't build until it breaks. Extra shots, the ×3 cap, critical hits, [Gold Teeth](../../items/m_dentadura.html) and [Metronome](../../items/metronomo.html) do count. The deeper you go, the more bosses carry it.

## Playing it

- **Stay close to the boss.** You can have at most 450 shots on screen; when you fire more, the oldest disappear. Builds with many shots lose most of their damage from far away. Aim to stay near the boss's body, not its feet: its hitbox sits on the sprite.
- **Keep graphics quality on full** if your computer can take it. Effects like [Light Stone](../../items/m_orbe_claro.html)'s rays need room in the effects list, and lower quality leaves less room, so more of them are dropped.
- **[White Herb](../../items/hierba_blanca.html)** cancels every fire rate penalty and stat drop you have or will get. It turns [Lens Case](../../items/m_portalentillas.html) and [Power Lens](../../items/m_lente_recia.html) into pure gains.
- **Shot damage before on-hit damage**, because of shields.

## Suggested build, by priority

The [Bag](../mochila100.html) holds 100 items.

| Priority | Items | Why |
|---|---|---|
| 1. Extra shots | [Lens Case](../../items/m_portalentillas.html), [TM Double Team](../../items/mt_doble.html), [Go-Goggles](../../items/m_gafas_aislantes.html), [Vs. Recorder](../../items/camara_lucha.html), [Silver Powder](../../items/polvo_plata.html), [Dragon Scale](../../items/escama_dragon.html), [Repeat Ball](../../items/f_acopio_ball.html), [Marble](../../items/m_canica.html) | Multiplies damage outside every cap |
| 2. Fire rate to the floor | [PP Max](../../items/v_pp_max.html), [Calcium](../../items/calcio.html), [Coconut Milk](../../items/s_leche_coco.html), [Courage Candy](../../items/s_caramelo_mente.html), [Exp. Candy S](../../items/s_caramelo_exp_s.html), [Pungent Root](../../items/s_hierba_intensa.html), [Swift Feather](../../items/m_pluma_impetu.html) | Stop at 12 shots per second |
| 3. Multipliers | [Gold Leaf](../../items/m_hoja_oro.html), [X Sp. Atk](../../items/s_ataque_especial_x.html), [Honor of Kalos](../../items/d_emblema_kalos.html), [Ring Target](../../items/m_blanco.html), [Red Apricorn](../../items/m_bonguri_rojo.html) | Reaches the ×3 cap |
| 4. Flat damage | [Protein](../../items/proteina.html), [Muscle Feather](../../items/s_pluma_musculo.html) and similar | About +8 is enough |
| 5. Weapon | [Razor Fang](../../items/w_colmillo.html) | Its bonus applies to every hit after the cap |
| 6. On-hit | [Gold Teeth](../../items/m_dentadura.html), [Metronome](../../items/metronomo.html), [Deep Sea Tooth](../../items/m_diente_marino.html), [Light Stone](../../items/m_orbe_claro.html), [Muscle Band](../../items/banda_musculo.html), [Expert Belt](../../items/cinta_experto.html), [Dragon Fang](../../items/colmillo_dragon.html) | [Gold Teeth](../../items/m_dentadura.html) and [Metronome](../../items/metronomo.html) also work on shields |
| 7. Companions | [Apricorn Box](../../items/m_caja_bonguri.html) and more [Repeat Ball](../../items/f_acopio_ball.html) | Each Ditto copies every volley |
| 8. Depth | [Comet Shard](../../items/fragmento_cometa.html), [Wise Glasses](../../items/gafas_especiales.html), [Anima Stone](../../items/hw_anima.html) if it shows up | Damage that doesn't lose value |
| 9. Survival | [Metal Coat](../../items/revest_metalico.html), [Rusted Shield](../../items/escudo_oxidado.html), [Destiny Knot (Core)](../../items/lazo_destino.html), [Broken Mirror](../../items/cu_espejo.html), [Eviolite](../../items/d_mineral_evol.html), [Max Revive](../../items/d_revivir_maximo.html) | Avoiding hits matters more than health |
| 10. Filler | [Zinc](../../items/zinc.html) and other luck, up to 10 | Raises [Gold Teeth](../../items/m_dentadura.html) and [Deep Sea Tooth](../../items/m_diente_marino.html) chances |

**Skip:** [Whipped Dream](../../items/m_dulce_nata.html); [Power Lens](../../items/m_lente_recia.html) and [Toxic Orb](../../items/m_toxisfera.html) once your fire rate is near the floor (unless you have [White Herb](../../items/hierba_blanca.html)); [Ability Patch](../../items/a_parche.html), which rerolls your whole build; luck past 10, multipliers past about ×5 before the cap, flat damage past +10.

**What the deepest runs in the Ranking carry:** several [Repeat Ball](../../items/f_acopio_ball.html) with [Apricorn Box](../../items/m_caja_bonguri.html); [Light Stone](../../items/m_orbe_claro.html), [Power Lens](../../items/m_lente_recia.html) with [White Herb](../../items/hierba_blanca.html); [Gold Teeth](../../items/m_dentadura.html), [Lens Case](../../items/m_portalentillas.html), [Dragon Scale](../../items/escama_dragon.html), [Go-Goggles](../../items/m_gafas_aislantes.html); and for survival [Metal Coat](../../items/revest_metalico.html) (coins absorb hits), [Rusted Shield](../../items/escudo_oxidado.html) (your shots cancel enemy shots) and [Destiny Knot (Core)](../../items/lazo_destino.html) (rear shots). Some go mono-type, with several Gems and Plates of their type.

**Glass cannon (untested):** [Fluffy Tail](../../items/d_cola_skitty.html) sets you to 1 heart with 9 extra lives. At 1 heart you always enter rooms at full health, so [Honor of Kalos](../../items/d_emblema_kalos.html)'s ×2 should be on every room, and [Crown Pass](../../items/d_pase_corona.html) stays active too. Any hit costs a life.
