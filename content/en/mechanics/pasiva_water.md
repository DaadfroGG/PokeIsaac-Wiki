---
title: Water passive
id: pasiva_water
color: '#4fb3ff'
labels:
- text: MECHANIC
  color: '#4fb3ff'
icon: icons/types/water.png
element: water
---
Water shots push enemies back. The passive pushes harder, soaks enemies to slow them and, from rank 4, splashes the enemies next to the one you hit.

## At rank 0
- Every hit pushes the enemy back (bosses are never pushed).

## With rank
- The push is 10 % stronger per rank.
- Each hit has a 10 % + 5 % per rank chance to soak the enemy: it is slowed for 1 s. Bosses are never soaked.
- From rank 4, every hit splashes up to 2 enemies within 70 px of the target for 25 % of the shot's damage. The splash ignores the type chart.

## Rank by rank
| Rank | Push | Soak chance | Splash (% of shot damage) |
|---|---|---|---|
| 0 | ×1 | — | — |
| 1 | ×1.1 | 15 % | — |
| 2 | ×1.2 | 20 % | — |
| 3 | ×1.3 | 25 % | — |
| 4 | ×1.4 | 30 % | 25 % |
| 5 | ×1.5 | 35 % | 25 % |
| 6 | ×1.6 | 40 % | 25 % |
| 7 | ×1.7 | 45 % | 25 % |
| 8 | ×1.8 | 50 % | 25 % |
| 9 | ×1.9 | 55 % | 25 % |
| 10 | ×2 | 60 % | 25 % |

## Raising the rank
- In Classic and the League, your rank goes up by one every 8 levels (rank 1 at level 9, rank 7 at level 57). See [Scaling type passives](pasivas_escalan.html) for the other ways to raise it.
- Holding the [Splash Plate](../items/x_splash_plate.html) adds 2 ranks to this passive, if your Pokémon has this type. The highest rank is 10.
- A dual-type Pokémon alternates its two types, one shot in two. Each shot uses the passive and the rank of its own type.
