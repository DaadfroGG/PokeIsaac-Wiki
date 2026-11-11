---
title: Passif Électrik
id: pasiva_electric
color: '#ffe44d'
labels:
- text: MÉCANIQUE
  color: '#ffe44d'
icon: icons/types/electric.png
element: electric
---
Les tirs Électrik peuvent envoyer un éclair aux ennemis proches. Le passif rend l'éclair plus fréquent et plus fort, et il touche un ennemi de plus aux rangs 3 et 6.

## Au rang 0
- Chaque coup a 12 % de chances de faire un éclair en chaîne (18 % pour un Pokémon à type unique), +2 % par point de Chance.
- L'éclair touche 1 autre ennemi à moins de 180 px pour 60 % des dégâts du tir, en type Électrik pour la table des types.

## Avec le rang
- +2 % de chances d'éclair par rang.
- L'éclair inflige 4 % de plus des dégâts du tir par rang, jusqu'à 100 % au rang 10.
- L'éclair touche 1 ennemi de plus au rang 3 et encore 1 au rang 6.

## Rang par rang
| Rang | Chance d'éclair (type unique / double) | Dégâts de l'éclair (% des dégâts du tir) | Ennemis touchés |
|---|---|---|---|
| 0 | 18 % / 12 % | 60 % | 1 |
| 1 | 20 % / 14 % | 64 % | 1 |
| 2 | 22 % / 16 % | 68 % | 1 |
| 3 | 24 % / 18 % | 72 % | 2 |
| 4 | 26 % / 20 % | 76 % | 2 |
| 5 | 28 % / 22 % | 80 % | 2 |
| 6 | 30 % / 24 % | 84 % | 3 |
| 7 | 32 % / 26 % | 88 % | 3 |
| 8 | 34 % / 28 % | 92 % | 3 |
| 9 | 36 % / 30 % | 96 % | 3 |
| 10 | 38 % / 32 % | 100 % | 3 |

## Monter de rang
- En Classique et dans la Ligue, votre rang monte de un tous les 8 niveaux (rang 1 au niveau 9, rang 7 au niveau 57). Voir [Passifs de type évolutifs](pasivas_escalan.html) pour les autres façons de le monter.
- Tenir la [Plaque Volt](../items/x_zap_plate.html) ajoute 2 rangs à ce passif, si votre Pokémon a ce type. Le rang maximum est 10.
- Un Pokémon à double type alterne ses deux types, un tir sur deux. Chaque tir utilise le passif et le rang de son propre type.
- Les chances « type unique » valent pour les Pokémon qui n'ont qu'un type ; ceux à double type utilisent le chiffre le plus bas.
