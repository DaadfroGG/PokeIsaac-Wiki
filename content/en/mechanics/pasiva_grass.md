---
title: Grass passive
id: pasiva_grass
color: '#6fdc5a'
labels:
- text: MECHANIC
  color: '#6fdc5a'
icon: icons/types/grass.png
element: grass
---
Grass shots sometimes pierce through enemies. The passive makes them pierce more and, from rank 3, roots enemies in place.

## At rank 0
- Each shot has a 20 % chance to pierce one enemy (30 % for a single-type Pokémon), +1 % per point of Luck.

## With rank
- A second roll, 3 % per rank, lets the shot pierce one more enemy.
- From rank 3, every shot that already pierces pierces one more enemy.
- From rank 3, each hit has a chance to root the enemy: 5 % at rank 3, +3 % per rank after that. A rooted enemy can't move for 0.5 s; a boss is slowed for 0.7 s instead.

## Against bosses
- Bosses are never rooted: from rank 3, a root becomes a 0.7 s slow instead.
- A slowed boss only walks at half speed between two attacks. Its attacks, dashes and the pause between attacks are not slowed at all.

## Rank by rank
| Rank | Pierce chance (single / dual type) | Extra pierce roll | Root chance |
|---|---|---|---|
| 0 | 30 % / 20 % | — | — |
| 1 | 30 % / 20 % | 3 % | — |
| 2 | 30 % / 20 % | 6 % | — |
| 3 | 30 % / 20 % | 9 % | 5 % |
| 4 | 30 % / 20 % | 12 % | 8 % |
| 5 | 30 % / 20 % | 15 % | 11 % |
| 6 | 30 % / 20 % | 18 % | 14 % |
| 7 | 30 % / 20 % | 21 % | 17 % |
| 8 | 30 % / 20 % | 24 % | 20 % |
| 9 | 30 % / 20 % | 27 % | 23 % |
| 10 | 30 % / 20 % | 30 % | 26 % |

## Raising the rank
- In Classic and the League, your rank goes up by one every 8 levels (rank 1 at level 9, rank 7 at level 57). See [Scaling type passives](pasivas_escalan.html) for the other ways to raise it.
- Holding the [Meadow Plate](../items/x_meadow_plate.html) adds 2 ranks to this passive, if your Pokémon has this type. The highest rank is 10.
- A dual-type Pokémon alternates its two types, one shot in two. Each shot uses the passive and the rank of its own type.
- "Single type" chances apply to Pokémon with only one type; dual-type Pokémon use the lower number.
