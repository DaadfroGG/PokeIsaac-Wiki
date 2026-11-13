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

## Cumul
- Chaque exemplaire donne son propre Chance +1 en le prenant et son propre Chance +1 par étage : deux exemplaires font +2 par étage.
