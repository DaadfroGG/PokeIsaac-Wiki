---
title: Dragon passive
id: pasiva_dragon
color: '#7a5cff'
labels:
- text: MECHANIC
  color: '#7a5cff'
icon: icons/types/dragon.png
element: dragon
---
Dragon Pokémon hit a bit harder and burn enemies like Fire Pokémon. Their passive adds damage and the same burn upgrades as Fire.

## At rank 0
- Each shot has a 15 % chance to burn (22.5 % for a single-type Pokémon), +2 % per point of Luck.
- A burn lasts 2 s and ticks 3 times per second for 10 % of the damage of the shot that caused it (at least 1).

## With rank
- +2 % damage per rank on Dragon shots.
- +2 % burn chance per rank.
- Burns last 10 % longer per rank and each tick deals 1.5 % more of the shot's damage per rank.
- From rank 2, when a hit burns an enemy, the flames can jump to up to 2 nearby enemies that are not burning (within 90 px). The chance is 15 % at rank 2, +7 % per rank after that, up to 60 %. The new burns last 80 % as long as the first one and hit just as hard.

## Rank by rank
| Rank | Damage | Burn chance (single / dual type) | Burn length | Spread chance |
|---|---|---|---|---|
| 0 | ×1 | 22.5 % / 15 % | 2 s | — |
| 1 | ×1.02 | 24.5 % / 17 % | 2.2 s | — |
| 2 | ×1.04 | 26.5 % / 19 % | 2.4 s | 15 % |
| 3 | ×1.06 | 28.5 % / 21 % | 2.6 s | 22 % |
| 4 | ×1.08 | 30.5 % / 23 % | 2.8 s | 29 % |
| 5 | ×1.1 | 32.5 % / 25 % | 3 s | 36 % |
| 6 | ×1.12 | 34.5 % / 27 % | 3.2 s | 43 % |
| 7 | ×1.14 | 36.5 % / 29 % | 3.4 s | 50 % |
| 8 | ×1.16 | 38.5 % / 31 % | 3.6 s | 57 % |
| 9 | ×1.18 | 40.5 % / 33 % | 3.8 s | 60 % |
| 10 | ×1.2 | 42.5 % / 35 % | 4 s | 60 % |

## Raising the rank
- In Classic and the League, your rank goes up by one every 8 levels (rank 1 at level 9, rank 7 at level 57). See [Scaling type passives](pasivas_escalan.html) for the other ways to raise it.
- Holding the [Draco Plate](../items/x_draco_plate.html) adds 2 ranks to this passive, if your Pokémon has this type. The highest rank is 10.
- A dual-type Pokémon alternates its two types, one shot in two. Each shot uses the passive and the rank of its own type.
- "Single type" chances apply to Pokémon with only one type; dual-type Pokémon use the lower number.
