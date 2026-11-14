---
title: Miroir Brisé
id: cu_espejo
kind: passive
category: defense
family: cursed
tier: 1
pools:
- cursed
pool_weight: 1
stats:
- text: Chance -2
  good: false
details:
- label: Blocage des coups
  value: 20 %
- label: Chance
  value: '-2'
- label: Après un blocage
  value: 0,7 s d'invulnérabilité
icon: items-ps/hold-item/wide-lens.png
sprite: true
names:
  en:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  es:
    name: Espejo Roto
    desc: Un 20 % de los golpes que recibes no te hacen nada, pero la suerte te abandona (-2).
  de:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  it:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  pt:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  ru:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  ja:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  ko:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  zh:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  zt:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
---
20 % des coups que vous recevez ne vous font rien, mais la chance vous abandonne (-2).

## Fonctionnement
- Chaque coup qui vous blesserait a 20 % de chances de ne rien faire du tout. Le test est indépendant pour chaque coup ; la Chance (Luck) ne le change pas.
- Quand un coup est bloqué ainsi, vous gagnez 0,7 seconde d'invulnérabilité.
- Les coups bloqués ne déclenchent pas vos objets « quand vous êtes touché », puisque rien ne vous a touché.
- Le malus de Chance est permanent tant que vous avez l'objet.
- **Effet réel** pour un Pokémon typique (4 dégâts, 4,3 tirs/s, vitesse 4, portée 350 px, vitesse des tirs 9, 4 cœurs), première copie seulement: Chance −2. Voir [Statistiques en pratique](../mechanics/estadisticas_reales.html) pour le comportement des totaux.

## Cumul
- Les 20 % ne se cumulent pas avec un second exemplaire. Le -2 de Chance est ajouté de nouveau.
