---
title: Poison passive
id: pasiva_poison
color: '#b45cf0'
labels:
- text: MECHANIC
  color: '#b45cf0'
icon: icons/types/poison.png
element: poison
---
Poison shots poison enemies. The passive makes poison more frequent, longer and stronger, and from rank 3 it spreads when a poisoned enemy dies.

## At rank 0
- Each shot has a 20 % chance to poison (30 % for a single-type Pokémon), +2 % per point of Luck.
- Poison lasts 2.5 s and ticks twice per second for 12 % of the damage of the shot that caused it (at least 1.5).

## With rank
- +3 % poison chance per rank.
- Poison lasts 10 % longer per rank and each tick deals 2 % more of the shot's damage per rank.
- From rank 3, when a poisoned enemy dies, the poison jumps to up to 3 enemies within 100 px that are not poisoned. It keeps 80 % of the time that was left and the same damage, and it can spread again when they die.

## Rank by rank
| Rank | Poison chance (single / dual type) | Poison length | Poison tick (% of shot damage) | Spreads on death |
|---|---|---|---|---|
| 0 | 30 % / 20 % | 2.5 s | 12 % | — |
| 1 | 33 % / 23 % | 2.8 s | 14 % | — |
| 2 | 36 % / 26 % | 3 s | 16 % | — |
| 3 | 39 % / 29 % | 3.2 s | 18 % | Yes |
| 4 | 42 % / 32 % | 3.5 s | 20 % | Yes |
| 5 | 45 % / 35 % | 3.8 s | 22 % | Yes |
| 6 | 48 % / 38 % | 4 s | 24 % | Yes |
| 7 | 51 % / 41 % | 4.2 s | 26 % | Yes |
| 8 | 54 % / 44 % | 4.5 s | 28 % | Yes |
| 9 | 57 % / 47 % | 4.8 s | 30 % | Yes |
| 10 | 60 % / 50 % | 5 s | 32 % | Yes |

## Raising the rank
- In Classic and the League, your rank goes up by one every 8 levels (rank 1 at level 9, rank 7 at level 57). See [Scaling type passives](pasivas_escalan.html) for the other ways to raise it.
- Holding the [Toxic Plate](../items/x_toxic_plate.html) adds 2 ranks to this passive, if your Pokémon has this type. The highest rank is 10.
- A dual-type Pokémon alternates its two types, one shot in two. Each shot uses the passive and the rank of its own type.
- "Single type" chances apply to Pokémon with only one type; dual-type Pokémon use the lower number.
