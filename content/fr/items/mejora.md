---
title: Améliorator
id: mejora
kind: passive
category: utility
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Dégâts
  value: +0,3 par étage descendu après l'avoir pris
- label: Plafond
  value: +4 (atteint après 14 étages)
icon: items-ps/evo-item/up-grade.png
sprite: true
names:
  en:
    name: Upgrade
    desc: Damage +0.3 each time you go down a floor
  es:
    name: Mejora
    desc: Daño +0.3 cada vez que bajas de planta
  de:
    name: Upgrade
    desc: Schaden +0,3 bei jedem Abstieg in eine tiefere Etage
  it:
    name: Upgrade
    desc: Danni +0,3 ogni volta che scendi di piano
  pt:
    name: Melhora
    desc: Dano +0,3 cada vez que você desce de andar
  ru:
    name: Апгрейд
    desc: Урон +0,3 при каждом спуске на этаж ниже
  ja:
    name: アップグレード
    desc: 階を下りるたびにダメージ+0.3
  ko:
    name: 업그레이드
    desc: 층을 내려갈 때마다 대미지 +0.3
  zh:
    name: 升级数据
    desc: 每下一层，伤害+0.3
  zt:
    name: 升級資料
    desc: 每往下一層，傷害+0.3
---
Dégâts +0,3 à chaque étage descendu

## Fonctionnement
- Il ne donne rien tout de suite : chaque fois que vous descendez d'un étage après l'avoir pris, vous gagnez Dégâts +0,3.
- Le bonus s'arrête à +4, après 14 étages.
- C'est un bonus de Dégâts fixe normal : il apparaît dans le HUD et suit les [rendements décroissants](../mechanics/rendimientos.html), donc les derniers points comptent moins.

## Cumul
- Un deuxième exemplaire ne fait rien de plus : même compteur, même plafond de +4.
