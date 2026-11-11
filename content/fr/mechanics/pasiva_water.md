---
title: Passif Eau
id: pasiva_water
color: '#4fb3ff'
labels:
- text: MÉCANIQUE
  color: '#4fb3ff'
icon: icons/types/water.png
element: water
---
Les tirs Eau repoussent les ennemis. Le passif repousse plus fort, mouille les ennemis pour les ralentir et, dès le rang 4, éclabousse ceux qui sont à côté de l'ennemi touché.

## Au rang 0
- Chaque coup repousse l'ennemi (les boss ne sont jamais repoussés).

## Avec le rang
- La poussée est 10 % plus forte par rang.
- Chaque coup a 10 % + 5 % par rang de chances de mouiller l'ennemi : il est ralenti pendant 1 s. Les boss ne sont jamais mouillés.
- Dès le rang 4, chaque coup éclabousse jusqu'à 2 ennemis à moins de 70 px de la cible pour 25 % des dégâts du tir. L'éclaboussure ignore la table des types.

## Rang par rang
| Rang | Poussée | Chance de mouiller | Éclaboussure (% des dégâts du tir) |
|---|---|---|---|
| 0 | ×1 | — | — |
| 1 | ×1,1 | 15 % | — |
| 2 | ×1,2 | 20 % | — |
| 3 | ×1,3 | 25 % | — |
| 4 | ×1,4 | 30 % | 25 % |
| 5 | ×1,5 | 35 % | 25 % |
| 6 | ×1,6 | 40 % | 25 % |
| 7 | ×1,7 | 45 % | 25 % |
| 8 | ×1,8 | 50 % | 25 % |
| 9 | ×1,9 | 55 % | 25 % |
| 10 | ×2 | 60 % | 25 % |

## Monter de rang
- En Classique et dans la Ligue, votre rang monte de un tous les 8 niveaux (rang 1 au niveau 9, rang 7 au niveau 57). Voir [Passifs de type évolutifs](pasivas_escalan.html) pour les autres façons de le monter.
- Tenir la [Plaque Hydro](../items/x_splash_plate.html) ajoute 2 rangs à ce passif, si votre Pokémon a ce type. Le rang maximum est 10.
- Un Pokémon à double type alterne ses deux types, un tir sur deux. Chaque tir utilise le passif et le rang de son propre type.
