---
title: Passif Plante
id: pasiva_grass
color: '#6fdc5a'
labels:
- text: MÉCANIQUE
  color: '#6fdc5a'
icon: icons/types/grass.png
element: grass
---
Les tirs Plante transpercent parfois les ennemis. Le passif les fait transpercer davantage et, dès le rang 3, immobilise les ennemis avec des racines.

## Au rang 0
- Chaque tir a 20 % de chances de transpercer un ennemi (30 % pour un Pokémon à type unique), +1 % par point de Chance.

## Avec le rang
- Un second tirage, 3 % par rang, permet au tir de transpercer un ennemi de plus.
- Dès le rang 3, chaque tir qui transperce déjà transperce un ennemi de plus.
- Dès le rang 3, chaque coup peut enraciner l'ennemi : 5 % au rang 3, +3 % par rang ensuite. Un ennemi enraciné ne peut plus bouger pendant 0,5 s ; un boss est ralenti pendant 0,7 s à la place.

## Rang par rang
| Rang | Chance de transpercer (type unique / double) | Second tirage | Chance d'enraciner |
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

## Monter de rang
- En Classique et dans la Ligue, votre rang monte de un tous les 8 niveaux (rang 1 au niveau 9, rang 7 au niveau 57). Voir [Passifs de type évolutifs](pasivas_escalan.html) pour les autres façons de le monter.
- Tenir la [Plaque Herbe](../items/x_meadow_plate.html) ajoute 2 rangs à ce passif, si votre Pokémon a ce type. Le rang maximum est 10.
- Un Pokémon à double type alterne ses deux types, un tir sur deux. Chaque tir utilise le passif et le rang de son propre type.
- Les chances « type unique » valent pour les Pokémon qui n'ont qu'un type ; ceux à double type utilisent le chiffre le plus bas.
