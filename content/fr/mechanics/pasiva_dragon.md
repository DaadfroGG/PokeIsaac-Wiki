---
title: Passif Dragon
id: pasiva_dragon
color: '#7a5cff'
labels:
- text: MÉCANIQUE
  color: '#7a5cff'
icon: icons/types/dragon.png
element: dragon
---
Les Pokémon Dragon frappent un peu plus fort et brûlent les ennemis comme les Pokémon Feu. Leur passif ajoute des dégâts et les mêmes améliorations de brûlure que le Feu.

## Au rang 0
- Chaque tir a 15 % de chances de brûler (22,5 % pour un Pokémon à type unique), +2 % par point de Chance.
- Une brûlure dure 2 s et fait 3 ticks par seconde, chacun de 10 % des dégâts du tir qui l'a causée (au moins 1).

## Avec le rang
- +2 % de dégâts par rang sur les tirs Dragon.
- +2 % de chances de brûler par rang.
- Les brûlures durent 10 % plus longtemps par rang et chaque tick inflige 1,5 % de plus des dégâts du tir par rang.
- Dès le rang 2, quand un coup brûle un ennemi, les flammes peuvent sauter sur jusqu'à 2 ennemis proches qui ne brûlent pas (à moins de 90 px). La chance est de 15 % au rang 2, +7 % par rang ensuite, jusqu'à 60 %. Ces nouvelles brûlures durent 80 % de la première et font autant de dégâts.

## Rang par rang
| Rang | Dégâts | Chance de brûlure (type unique / double) | Durée de la brûlure | Chance de propagation |
|---|---|---|---|---|
| 0 | ×1 | 22,5 % / 15 % | 2 s | — |
| 1 | ×1,02 | 24,5 % / 17 % | 2,2 s | — |
| 2 | ×1,04 | 26,5 % / 19 % | 2,4 s | 15 % |
| 3 | ×1,06 | 28,5 % / 21 % | 2,6 s | 22 % |
| 4 | ×1,08 | 30,5 % / 23 % | 2,8 s | 29 % |
| 5 | ×1,1 | 32,5 % / 25 % | 3 s | 36 % |
| 6 | ×1,12 | 34,5 % / 27 % | 3,2 s | 43 % |
| 7 | ×1,14 | 36,5 % / 29 % | 3,4 s | 50 % |
| 8 | ×1,16 | 38,5 % / 31 % | 3,6 s | 57 % |
| 9 | ×1,18 | 40,5 % / 33 % | 3,8 s | 60 % |
| 10 | ×1,2 | 42,5 % / 35 % | 4 s | 60 % |

## Monter de rang
- En Classique et dans la Ligue, votre rang monte de un tous les 8 niveaux (rang 1 au niveau 9, rang 7 au niveau 57). Voir [Passifs de type évolutifs](pasivas_escalan.html) pour les autres façons de le monter.
- Tenir la [Plaque Draco](../items/x_draco_plate.html) ajoute 2 rangs à ce passif, si votre Pokémon a ce type. Le rang maximum est 10.
- Un Pokémon à double type alterne ses deux types, un tir sur deux. Chaque tir utilise le passif et le rang de son propre type.
- Les chances « type unique » valent pour les Pokémon qui n'ont qu'un type ; ceux à double type utilisent le chiffre le plus bas.
