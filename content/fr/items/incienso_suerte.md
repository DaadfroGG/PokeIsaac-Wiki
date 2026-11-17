---
title: Encens Veine
id: incienso_suerte
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Chance +1
  good: true
details:
- label: En le prenant
  value: Chance +1
- label: Chaque étage
  value: Chance +1 à chaque étage descendu
- label: Plafond
  value: Aucun (plein jusqu'à 10 de Chance, puis ¼)
icon: items-ps/incense/luck.png
sprite: true
names:
  en:
    name: Luck Incense
    desc: Luck +1 each time you go down a floor
  es:
    name: Incienso Suerte
    desc: Suerte +1 cada vez que bajas de planta
  de:
    name: Glücksrauch
    desc: Glück +1 jedes Mal, wenn du eine Etage tiefer gehst
  it:
    name: Fortunaroma
    desc: Fortuna +1 ogni volta che scendi di piano
  pt:
    name: Incenso da Sorte
    desc: Sorte +1 cada vez que você desce de andar
  ru:
    name: Благовоние удачи
    desc: Удача +1 при каждом спуске на этаж ниже
  ja:
    name: こううんのおこう
    desc: 階を下りるたびに運+1
  ko:
    name: 행운의향로
    desc: 층을 내려갈 때마다 행운 +1
  zh:
    name: 幸运薰香
    desc: 每进入下一层，幸运+1
  zt:
    name: 幸運薰香
    desc: 每往下走一層，幸運+1
---
Chance +1 à chaque étage descendu

## Fonctionnement
- Vous gagnez Chance +1 en le prenant, puis encore Chance +1 à chaque nouvel étage, pour le reste de la partie.
- Pas de plafond, mais la Chance suit les [rendements décroissants](../mechanics/rendimientos.html) : chaque point compte plein jusqu'à 10 de Chance, puis seulement pour un quart.
- **Effet réel** pour un Pokémon typique (4 dégâts, 4,3 tirs/s, vitesse 4, portée 350 px, vitesse des tirs 9, 4 cœurs), première copie seulement: Chance +1. Voir [Statistiques en pratique](../mechanics/estadisticas_reales.html) pour le comportement des totaux.

## Cumul
- Chaque exemplaire donne son propre Chance +1 en le prenant, mais le Chance +1 par étage est un effet unique : il s'applique **une seule fois par étage, quel que soit le nombre d'exemplaires**. Deux exemplaires font +2 au ramassage, puis +1 par étage, pas +2.
- Au-delà de 10 de Chance, chaque point ne compte que pour un quart à l'écran : avec déjà beaucoup de Chance, le bonus d'étage s'affiche donc comme environ +0,25.
