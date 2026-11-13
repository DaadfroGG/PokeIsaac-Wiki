---
title: Extra shots
id: disparos_extra
color: '#ffd23c'
labels:
- text: MECHANIC
  color: '#ffd23c'
icon: icons/mechanics/armas.png
details:
- label: Volley
  value: 1 shot + 1 per multishot, never more than 9 per volley
- label: Multishot items
  value: TM Double Team +1, Lens Case +2 (they add up)
- label: Beyond 9
  value: Destiny Knot, Go-Goggles, Dragon Skull, Marble, Red Nectar, Repeat Ball and a few others
- label: Most per attack
  value: 9 + 9 backwards = 18, ×2 with Go-Goggles = 36, + up to 6 more by chance
- label: On screen
  value: At most 450 of your projectiles at once
---
Each attack fires a volley of up to 9 shots. Some items add shots on top of that volley, and those are not limited to 9.

## The volley
- Each time you attack, you fire **1 shot + 1 per multishot**. Multishot comes from [TM Double Team](../items/mt_doble.html) (+1) and [Lens Case](../items/m_portalentillas.html) (+2), and copies add up.
- The volley never goes past **9 shots**: multishot beyond +8 does nothing for the volley.
- The shots fan out around where you aim:

| Shots | Gap between two shots | Width of the fan |
|---|---|---|
| 1 | — | straight |
| 2 | 14° | 14° |
| 3 | 16° | 32° |
| 4 | 16° | 48° |
| 5 to 9 | 57° ÷ (shots − 1) | 57° (always the same) |

- From 5 shots on, the fan stays 57° wide and the shots just get closer together.
- Every shot of the volley rolls its own critical hit, homing and pierce, and its own effects on each hit (see [Projectiles and damage](proyectiles.html)).

### Burst talent
- Some Pokémon unlock the **Burst** mastery talent at mastery rank 8 (Shellder, Cloyster, Aipom, Ambipom, Roggenrola, Boldore, Minccino, Cinccino, Landorus, Pikipek, Oricorio, Arceus).
- With it on, every 4th attack fires **one more shot** in the volley.
- That shot counts towards the 9: a volley that already has 9 shots gets nothing more.
- It only applies to the forward volley, not to the one [Destiny Knot](../items/lazo_destino.html) fires backwards.

## Items that add shots beyond the 9

| Item | Extra shots | When | Damage |
|---|---|---|---|
| [Destiny Knot](../items/lazo_destino.html) | A whole second volley backwards (same count, up to 9) | Every attack | Full |
| [Go-Goggles](../items/m_gafas_aislantes.html) | Each shot of your volleys becomes 2, 26° apart on each side | Every attack | Full, both |
| [Dragon Skull](../items/m_craneo_dragon.html) | 3 (right, back, left) | 15 % + 1 % per Luck, max 50 %, per attack | Full |
| [Marble](../items/m_canica.html) | 1 or 2 in random directions | 25 % + 1 % per Luck, per attack | Full |
| [Red Nectar](../items/m_nectar_rojo.html) | 1 big Fire-type flame that pierces everything and burns | 12 % + 1 % per Luck, max 50 %, per attack | ×1.2 |
| [Repeat Ball](../items/f_acopio_ball.html) | Ditto copies every shot of your volleys from where it stands | Every attack | 75 % |
| [Vs. Recorder](../items/camara_lucha.html) | A copy of each shot, from the same spot, half a second later (up to 24 waiting at once) | Every shot | 50 % |
| [Reveal Glass](../items/espejo_veraz.html) (active) | Your reflection on the other side of the room fires a mirrored copy of each shot, for 8 s | While active | Full |
| [Tropical Shell](../items/m_concha_tropical.html) | 2 to 10 shots in a burst after you stop firing (full charge after 2 s) | First attack after a pause | Full |

- The chances of Dragon Skull, Marble and Red Nectar are rolled **once per attack**, not once per shot, and not again for the volley Destiny Knot fires backwards. "Luck" means your Luck after [diminishing returns](rendimientos.html).
- Go-Goggles only double the shots of your volleys (forward and backward). The shots added by Dragon Skull, Marble, Red Nectar, Tropical Shell and Ditto are not doubled.
- Ditto copies your volleys (forward and backward) but not the extra shots of the other items, and Go-Goggles don't double its copies.
- [Destiny Knot (Cursed)](../items/cu_nudo.html) does **not** add any shot: it is a fire-rate item.

## How they add up
<div class="mx-tiles"><div class="mx-tile"><div class="v">9</div><div class="k">volley at most</div></div><div class="mx-tile"><div class="v">18</div><div class="k">with Destiny Knot (9 forward + 9 back)</div></div><div class="mx-tile"><div class="v">36</div><div class="k">with Go-Goggles as well</div></div><div class="mx-tile"><div class="v">450</div><div class="k">of your projectiles on screen at once</div></div></div>

1. Volley: 1 + multishot, at most **9**.
2. Destiny Knot: a second volley backwards, **9 + 9 = 18**.
3. Go-Goggles: every one of those shots becomes two, **18 × 2 = 36**.
4. By chance, on the same attack: Dragon Skull **+3**, Marble **+1 or 2**, Red Nectar **+1**, so up to **42** from you alone.
5. Each Ditto ([Repeat Ball](../items/f_acopio_ball.html)) adds a copy of your two volleys: **+18** per Ditto at 75 % damage.
6. Vs. Recorder then repeats most of these half a second later at 50 %, up to 24 copies waiting at once.

- All of these are capped by the **450** projectiles of yours that can be in the room at once. Past that, the projectiles created by other projectiles (splits, fragments, bones…) are removed first, oldest first.
- At most 12 attacks per second (see [Diminishing returns](rendimientos.html)).

## Other items that create projectiles
These don't add shots to your attack, but they create more projectiles when something happens:

| Item | What it creates |
|---|---|
| [Brittle Bones](../items/m_huesos_finos.html) | When a shot defeats an enemy: 3 bones (straight on and 34° to each side) at 50 % damage |
| [Polished Mud Ball](../items/m_bola_arcilla.html) | Each shot bursts on landing into 8 fragments + 2 per multishot (fewer when the room is full of projectiles), 11 % damage each |
| [Deep Sea Tooth](../items/m_diente_marino.html) | When its needle finishes off an enemy: 6 shots around it at 35 % damage |
| [Ultra Ball](../items/f_ultra_ball.html) | Bronzor: your shots that go through it split in three (the shot keeps going, plus 2 shots 20° to each side at 60 % damage) |
| [TM Tri Attack](../items/mt_triataque.html) | 3 shots (fire, electric, ice) from each enemy you defeat |
| [Dome Fossil](../items/m_fosil_domo.html) | 7 shots orbit around you when you enter a room with enemies (80 % damage, they go through everything) |
| [Beach Glass](../items/a_cristal_marino.html) (active) | 12 of your shots all around you, with their effects |

Related pages: [Projectiles and damage](proyectiles.html) · [Status effects](estados.html) · [Item stacking](acumulacion.html) · [Diminishing returns](rendimientos.html)
