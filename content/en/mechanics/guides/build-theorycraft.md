---
title: Building for endless mode
layout: guide
weight: 1
---
How to build a run that goes deep into [endless mode](../modo_infinito.html). The numbers come from the game's rules and were checked against the current version, but most of this hasn't been tested in real runs. If you find something that plays out differently, edit the page.

## The short version

- Damage multipliers share one cap: **×3** at most. Once you're there, more multipliers do nothing.
- Fire rate has a floor too: **12 shots per second** at most.
- **[White Herb](../../items/hierba_blanca.html) is a core pick.** The strongest damage items (Lens Case, Power Lens, Gold Leaf, Toxic Orb) all slow your fire; the herb removes every one of those penalties, past and future. On such a build it roughly triples your damage per second.
- So depth comes from what sits **outside** those caps: extra shots, companions that copy your shots, effects that trigger on hit, and damage based on a percentage of the enemy's health.
- Late in endless, enemies take about 7 % more health per floor. Every time you double your damage, you go about 10 floors further.
- You can't out-heal deep floors (12 hearts at most, and healing is capped), so avoid hits instead of tanking them.

## The caps

**Flat damage** has [diminishing returns](../rendimientos.html): the first +3 counts in full, up to +8 at half, up to +40 at a quarter. Past +40 each +1 still counts +0.05, and copies stack, so once everything else is in place, spare Bag slots go to [Power Lens](../../items/m_lente_recia.html) (+4 per copy, see [Filling the Bag](#filling-the-bag)). A two-stage evolution already gives +2.5.

**Damage multipliers** are all multiplied together, then capped: up to ×2.3 counts in full, a quarter of anything above that, and never more than ×3. For example, [Gold Leaf](../../items/m_hoja_oro.html) (×1.8) and [X Sp. Atk](../../items/s_ataque_especial_x.html) (×1.5) make ×2.7, which becomes ×2.4. Add [Honor of Kalos](../../items/d_emblema_kalos.html) (×2) and you're at the cap. Past about ×5 before the cap, extra multipliers are wasted.

**Fire rate** stops at 5 frames between shots, which is 12 shots per second. Fire rate items get you most of the way, and [Swift Feather](../../items/m_pluma_impetu.html) (up to ×2) usually finishes the job. Anything beyond is wasted. [Whipped Dream](../../items/m_dulce_nata.html) is a trap here: its fire rate boost is lost to the floor, but its damage penalty stays (the cap only absorbs part of it if your multipliers are already past ×2.3).

**[White Herb](../../items/hierba_blanca.html)** is what makes the big items work. Without it, every heavy hitter costs you fire rate; with it, they are pure gains, whether you pick it up before or after them. Measured on Pikachu:

| Build | Shots/s without herb | With herb | Damage per second |
|---|---|---|---|
| [Lens Case](../../items/m_portalentillas.html) | 2.7 | 4.3 | ×1.6 |
| [Power Lens](../../items/m_lente_recia.html) | 2 | 4.3 | ×2.1 |
| [Toxic Orb](../../items/m_toxisfera.html) | 2.5 | 4.3 | ×1.7 |
| Lens Case + Power Lens + [Gold Leaf](../../items/m_hoja_oro.html) | 1.4 | 4.3 | ×3 |
| Same + 8 fire rate items | 2.3 | 8.9 | ×3.9 |

It does not touch damage multipliers below ×1, so [Whipped Dream](../../items/m_dulce_nata.html) stays a trap.

## What goes past the caps

**Extra shots.** Each extra shot deals your full capped damage.
- [Lens Case](../../items/m_portalentillas.html): triple shot, but slower fire
- [TM Double Team](../../items/mt_doble.html): double shot
- [Go-Goggles](../../items/m_gafas_aislantes.html): extra diagonal shots
- [Vs. Recorder](../../items/camara_lucha.html): an echo of each shot at 50 % damage
- [Silver Powder](../../items/polvo_plata.html): shots split in two on hit
- [Dragon Scale](../../items/escama_dragon.html): every 4th shot deals ×2
- [Repeat Ball](../../items/f_acopio_ball.html): a Ditto that copies every volley at 75 % damage. With [Apricorn Box](../../items/m_caja_bonguri.html) you can carry more of them (5 companions with one, 6 with a second one, never more)

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

- **Stay close to the boss.** You can have at most 450 shots on screen; when you fire more, the oldest disappear. A many-shot build does about twice the damage up close as from 300 px away. Aim to stay near the boss's body, not its feet: its hitbox sits on the sprite.
- **More projectiles still pay off past 450.** Shots that hit do so almost at once, and the cap removes the oldest first, which are shots that already missed (see [Projectiles](../proyectiles.html)). In tests with 6 Dittos, doubling them with [Catching Pocket](../../items/a_bolsillo_captura.html) multiplied boss damage by about 1.8 to 2.6, and tripling them by about 2.5 to 3, with the cap full the whole time.
- **Catching Pocket** copies your permanent companions for the room: 6 Dittos become 12, 18 with [Devon Scuba Gear](../../items/d_bombona_devon.html) or two uses with [Cell Battery](../../items/d_pila.html), 30 with both. Save it for bosses.
- **Keep graphics quality on full** if your computer can take it. Effects like [Light Stone](../../items/m_orbe_claro.html)'s rays need room in the effects list, and lower quality leaves less room, so more of them are dropped.
- **Shot damage before on-hit damage**, because of shields.

## Suggested build, by priority

The [Bag](../mochila100.html) holds 100 items.

| Priority | Items | Why |
|---|---|---|
| 1. Extra shots | [Lens Case](../../items/m_portalentillas.html), [TM Double Team](../../items/mt_doble.html), [Go-Goggles](../../items/m_gafas_aislantes.html), [Vs. Recorder](../../items/camara_lucha.html), [Silver Powder](../../items/polvo_plata.html), [Dragon Scale](../../items/escama_dragon.html), [Repeat Ball](../../items/f_acopio_ball.html), [Marble](../../items/m_canica.html) | Multiplies damage outside every cap |
| 2. White Herb | [White Herb](../../items/hierba_blanca.html) | Removes the penalties of 24 items, so the strongest of them become pure gains (see below): about ×3 damage per second on a Lens Case, Power Lens and Gold Leaf build |
| 3. Fire rate to the floor | [PP Max](../../items/v_pp_max.html), [Calcium](../../items/calcio.html), [Coconut Milk](../../items/s_leche_coco.html), [Courage Candy](../../items/s_caramelo_mente.html), [Exp. Candy S](../../items/s_caramelo_exp_s.html), [Pungent Root](../../items/s_hierba_intensa.html), [Swift Feather](../../items/m_pluma_impetu.html) | Stop at 12 shots per second |
| 4. Multipliers | [Gold Leaf](../../items/m_hoja_oro.html), [X Sp. Atk](../../items/s_ataque_especial_x.html), [Honor of Kalos](../../items/d_emblema_kalos.html), [Ring Target](../../items/m_blanco.html), [Red Apricorn](../../items/m_bonguri_rojo.html) | Reaches the ×3 cap |
| 5. Flat damage | [Protein](../../items/proteina.html), [Muscle Feather](../../items/s_pluma_musculo.html) and similar | The first +8 count the most; later, fill spare slots with Power Lens |
| 6. Weapon | [Razor Fang](../../items/w_colmillo.html) | Its bonus applies to every hit after the cap |
| 7. On-hit | [Gold Teeth](../../items/m_dentadura.html), [Metronome](../../items/metronomo.html), [Deep Sea Tooth](../../items/m_diente_marino.html), [Light Stone](../../items/m_orbe_claro.html), [Muscle Band](../../items/banda_musculo.html), [Expert Belt](../../items/cinta_experto.html), [Dragon Fang](../../items/colmillo_dragon.html) | [Gold Teeth](../../items/m_dentadura.html) and [Metronome](../../items/metronomo.html) also work on shields |
| 8. Companions | [Apricorn Box](../../items/m_caja_bonguri.html) and more [Repeat Ball](../../items/f_acopio_ball.html) | Each Ditto copies every volley. [Catching Pocket](../../items/a_bolsillo_captura.html) (with [Devon Scuba Gear](../../items/d_bombona_devon.html) and [Cell Battery](../../items/d_pila.html)) multiplies them for a boss room |
| 9. Depth | [Comet Shard](../../items/fragmento_cometa.html), [Wise Glasses](../../items/gafas_especiales.html), [Anima Stone](../../items/hw_anima.html) if it shows up | Damage that doesn't lose value |
| 10. Survival | [Big Root](../../items/raiz_grande.html) with [Moomoo Milk](../../items/leche_mumu.html) (3.5 hearts per 10 s with 12 hearts, the healing limit; at full health it builds up to 6 soul hearts in 15 s), [Metal Coat](../../items/revest_metalico.html), [Rusted Shield](../../items/escudo_oxidado.html), [Destiny Knot (Core)](../../items/lazo_destino.html), [Broken Mirror](../../items/cu_espejo.html), [Eviolite](../../items/d_mineral_evol.html), [Max Revive](../../items/d_revivir_maximo.html) | Avoiding hits matters more than health |
| 11. Filler | [Zinc](../../items/zinc.html) and other luck, up to 10 | Raises [Gold Teeth](../../items/m_dentadura.html) and [Deep Sea Tooth](../../items/m_diente_marino.html) chances |

### Once you have White Herb

The herb deletes every stat line that lowers a stat (slower fire, less damage, speed, range, shot speed, luck or hearts), on items you hold and on everything you pick up later. Items that trade a big bonus for a penalty become pure gains, and they usually beat the clean items of the same pool. Take the herb early, then grab these instead of skipping them:

| Becomes | Items |
|---|---|
| Big damage, no fire rate cost | [Power Lens](../../items/m_lente_recia.html) (×1.6, +4, giant shots), [Choice Band](../../items/cinta_elegida.html) (+2), [Life Orb](../../items/vidasfera.html) (+1.8), [Precooked Burger](../../items/s_hamburguesas.html) (+1.5), [Twisted Spoon](../../items/cuchara.html) (+1.2), [Choice Specs](../../items/gafas_elegidas.html) (+1), [Gold Leaf](../../items/m_hoja_oro.html) (×1.8, +1, +1 heart) |
| Extra shots, no cost | [Lens Case](../../items/m_portalentillas.html) (triple shot), [TM Double Team](../../items/mt_doble.html) (double shot) |
| Strong effects, no cost | [Toxic Orb](../../items/m_toxisfera.html) (exploding shots, +1), [Polished Mud Ball](../../items/m_bola_arcilla.html) (fragments, +1), [Red Orb](../../items/w_prisma_rojo.html) (Hyper Beam), [Galarica Wreath](../../items/m_corona_galanuez.html) (damaging aura, +0.5), [Large Leek](../../items/m_puerro_grueso.html) (up to ×2.2 up close; it still loses damage with distance) |
| Pure fire rate | [Quick Claw](../../items/garra_rapida.html), [Coconut Milk](../../items/s_leche_coco.html), [Exp. Candy S](../../items/s_caramelo_exp_s.html), [Destiny Knot (Cursed)](../../items/cu_nudo.html) |
| Pure survival | [Mixed Mushrooms](../../items/s_setas.html), [Power Weight](../../items/d_pesa_recia.html), [Choice Scarf](../../items/panuelo_elegido.html), [Broken Mirror](../../items/cu_espejo.html) (no more luck loss), [Rag Doll](../../items/cu_vudu.html) (no more heart loss) |

The herb only removes stat lines. Drawbacks built into an effect stay: [Whipped Dream](../../items/m_dulce_nata.html)'s ×0.45 damage, Large Leek's falloff at range.

### Filling the Bag

Copies stack their stats, so a deep run is about spending the [Bag](../mochila100.html)'s 100 slots (up to 150 deep in endless). Each capped stat only needs a few copies; past that they're wasted (numbers measured on Pikachu, see [Theoretical maximums](max-caps.html)):

| Slots | For | How many |
|---|---|---|
| [White Herb](../../items/hierba_blanca.html) | Removes the minus lines of everything below | 1 |
| [Quick Claw](../../items/garra_rapida.html) or other fire rate items | 12 shots per second | About 6 Quick Claw (4 at level 60) |
| [Lens Case](../../items/m_portalentillas.html) | 9 shots per volley | 4 |
| Cap multipliers: [Gold Leaf](../../items/m_hoja_oro.html), [X Sp. Atk](../../items/s_ataque_especial_x.html), [Lustrous Orb](../../items/orbe_lustre.html) | ×3 with Power Lens | 3 |
| Per-hit and spike items (Eon Flute, Plate, Expert Belt, Muscle Band, Large Leek, Dragon Fang, Gold Teeth, Dragon Scale…) | Damage on top of the cap | About 15 |
| [Apricorn Box](../../items/m_caja_bonguri.html) ×2 and [Repeat Ball](../../items/f_acopio_ball.html) ×6 | 6 Dittos | 8 |
| [Iron](../../items/hierro.html), [HP Up](../../items/maspv.html) | 12 hearts | Up to 9 |
| [Bright Powder](../../items/polvo_brillo.html), [Golden Pinap Berry](../../items/s_pinia_dorada.html) | Luck 10 (Gold Teeth 30 %), or 20 (Gold Teeth 50 %) | 5, or 25 |
| Survival: Big Root, Moomoo Milk, Rusted Shield, Metal Coat, Destiny Knot (Core), Broken Mirror, Eviolite, Max Revive | Staying alive | About 8 |
| Depth: Comet Shard, Wise Glasses, Anima Stone | Damage that ignores depth | 3 |
| **Everything else: [Power Lens](../../items/m_lente_recia.html)** | +4 flat damage per copy, no fire rate cost with the herb | The rest |

That is about 65 slots with luck at 10. In a 150-slot Bag, the other 85 can be Power Lens: +340 flat damage on paper, which counts as +28.5 (Pikachu's base is 3.5). Copies come back once the pools run dry, and the [Eon Ticket](../../items/a_ticket_eon.html) duplicates pedestals.

Speed, range and shot speed have no ceiling, but they don't add damage: past about 950 px a straight shot always hits a wall first, so a couple of range items is enough.

**Skip:** [Whipped Dream](../../items/m_dulce_nata.html), always; without White Herb, items that slow your fire ([Power Lens](../../items/m_lente_recia.html), [Toxic Orb](../../items/m_toxisfera.html), [Polished Mud Ball](../../items/m_bola_arcilla.html), [Choice Band](../../items/cinta_elegida.html)…) once your fire rate is near the floor; [Ability Patch](../../items/a_parche.html), which rerolls your whole build; luck past 10 (past 20 with Gold Teeth), multipliers past about ×5 before the cap, more than about 6 Quick Claw, 4 Lens Case or 12 hearts' worth of health items.

**What the deepest runs in the Ranking carry:** several [Repeat Ball](../../items/f_acopio_ball.html) with [Apricorn Box](../../items/m_caja_bonguri.html); [Light Stone](../../items/m_orbe_claro.html), [Power Lens](../../items/m_lente_recia.html) with [White Herb](../../items/hierba_blanca.html); [Gold Teeth](../../items/m_dentadura.html), [Lens Case](../../items/m_portalentillas.html), [Dragon Scale](../../items/escama_dragon.html), [Go-Goggles](../../items/m_gafas_aislantes.html); and for survival [Metal Coat](../../items/revest_metalico.html) (coins absorb hits), [Rusted Shield](../../items/escudo_oxidado.html) (your shots cancel enemy shots) and [Destiny Knot (Core)](../../items/lazo_destino.html) (rear shots). Some go mono-type, with several Gems and Plates of their type.

**Glass cannon (untested):** [Fluffy Tail](../../items/d_cola_skitty.html) sets you to 1 heart with 9 extra lives. At 1 heart you always enter rooms at full health, so [Honor of Kalos](../../items/d_emblema_kalos.html)'s ×2 should be on every room, and [Crown Pass](../../items/d_pase_corona.html) stays active too. Any hit costs a life.
