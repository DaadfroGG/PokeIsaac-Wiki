---
title: Fire passive
id: pasiva_fire
color: '#ff7a33'
labels:
- text: MECHANIC
  color: '#ff7a33'
icon: icons/types/fire.png
element: fire
---
Fire Pokémon burn enemies. Their passive makes burns more frequent, longer and stronger, and from rank 2 the flames spread.

## At rank 0
- Each shot has a 15 % chance to burn (22.5 % for a single-type Pokémon), +2 % per point of Luck.
- A burn lasts 2 s and ticks 3 times per second for 10 % of the damage of the shot that caused it (at least 1).

## With rank
- +2 % burn chance per rank.
- Burns last 10 % longer per rank and each tick deals 1.5 % more of the shot's damage per rank.
- From rank 2, when a hit burns an enemy, the flames can jump to up to 2 nearby enemies that are not burning (within 90 px). The chance is 15 % at rank 2, +7 % per rank after that, up to 60 %. The new burns last 80 % as long as the first one and hit just as hard.

## Rank by rank
| Rank | Burn chance (single / dual type) | Burn length | Burn tick (% of shot damage) | Spread chance |
|---|---|---|---|---|
| 0 | 22.5 % / 15 % | 2 s | 10 % | — |
| 1 | 24.5 % / 17 % | 2.2 s | 11.5 % | — |
| 2 | 26.5 % / 19 % | 2.4 s | 13 % | 15 % |
| 3 | 28.5 % / 21 % | 2.6 s | 14.5 % | 22 % |
| 4 | 30.5 % / 23 % | 2.8 s | 16 % | 29 % |
| 5 | 32.5 % / 25 % | 3 s | 17.5 % | 36 % |
| 6 | 34.5 % / 27 % | 3.2 s | 19 % | 43 % |
| 7 | 36.5 % / 29 % | 3.4 s | 20.5 % | 50 % |
| 8 | 38.5 % / 31 % | 3.6 s | 22 % | 57 % |
| 9 | 40.5 % / 33 % | 3.8 s | 23.5 % | 60 % |
| 10 | 42.5 % / 35 % | 4 s | 25 % | 60 % |

## Raising the rank
- In Classic and the League, your rank goes up by one every 8 levels (rank 1 at level 9, rank 7 at level 57). See [Scaling type passives](pasivas_escalan.html) for the other ways to raise it.
- Holding the [Flame Plate](../items/x_flame_plate.html) adds 2 ranks to this passive, if your Pokémon has this type. The highest rank is 10.
- A dual-type Pokémon alternates its two types, one shot in two. Each shot uses the passive and the rank of its own type.
- "Single type" chances apply to Pokémon with only one type; dual-type Pokémon use the lower number.
