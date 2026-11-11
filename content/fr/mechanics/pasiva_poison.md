---
title: Passif Poison
id: pasiva_poison
color: '#b45cf0'
labels:
- text: MÉCANIQUE
  color: '#b45cf0'
icon: icons/types/poison.png
element: poison
---
Les tirs Poison empoisonnent les ennemis. Le passif rend le poison plus fréquent, plus long et plus fort, et dès le rang 3 il se propage quand un ennemi empoisonné meurt.

## Au rang 0
- Chaque tir a 20 % de chances d'empoisonner (30 % pour un Pokémon à type unique), +2 % par point de Chance.
- Le poison dure 2,5 s et fait 2 ticks par seconde, chacun de 12 % des dégâts du tir qui l'a causé (au moins 1,5).

## Avec le rang
- +3 % de chances d'empoisonner par rang.
- Le poison dure 10 % plus longtemps par rang et chaque tick inflige 2 % de plus des dégâts du tir par rang.
- Dès le rang 3, quand un ennemi empoisonné meurt, le poison saute sur jusqu'à 3 ennemis non empoisonnés à moins de 100 px. Il garde 80 % du temps qui restait et les mêmes dégâts, et il peut encore se propager quand ils meurent.

## Rang par rang
| Rang | Chance d'empoisonner (type unique / double) | Durée du poison | Tick de poison (% des dégâts du tir) | Se propage à la mort |
|---|---|---|---|---|
| 0 | 30 % / 20 % | 2,5 s | 12 % | — |
| 1 | 33 % / 23 % | 2,8 s | 14 % | — |
| 2 | 36 % / 26 % | 3 s | 16 % | — |
| 3 | 39 % / 29 % | 3,2 s | 18 % | Oui |
| 4 | 42 % / 32 % | 3,5 s | 20 % | Oui |
| 5 | 45 % / 35 % | 3,8 s | 22 % | Oui |
| 6 | 48 % / 38 % | 4 s | 24 % | Oui |
| 7 | 51 % / 41 % | 4,2 s | 26 % | Oui |
| 8 | 54 % / 44 % | 4,5 s | 28 % | Oui |
| 9 | 57 % / 47 % | 4,8 s | 30 % | Oui |
| 10 | 60 % / 50 % | 5 s | 32 % | Oui |

## Monter de rang
- En Classique et dans la Ligue, votre rang monte de un tous les 8 niveaux (rang 1 au niveau 9, rang 7 au niveau 57). Voir [Passifs de type évolutifs](pasivas_escalan.html) pour les autres façons de le monter.
- Tenir la [Plaque Toxicité](../items/x_toxic_plate.html) ajoute 2 rangs à ce passif, si votre Pokémon a ce type. Le rang maximum est 10.
- Un Pokémon à double type alterne ses deux types, un tir sur deux. Chaque tir utilise le passif et le rang de son propre type.
- Les chances « type unique » valent pour les Pokémon qui n'ont qu'un type ; ceux à double type utilisent le chiffre le plus bas.
