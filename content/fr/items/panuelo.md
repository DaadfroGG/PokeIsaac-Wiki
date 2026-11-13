---
title: Mouchoir Soie
id: panuelo
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Dégâts +0,5
  good: true
- text: Cadence +
  good: true
details:
- label: Dégâts
  value: +0,5
- label: Cadence
  value: +1 (0,017 s de moins entre les tirs)
icon: items/silk-scarf.png
sprite: true
names:
  en:
    name: Silk Scarf
    desc: Damage +0.5, fire rate +
  es:
    name: Pañuelo Seda
    desc: Daño +0.5, cadencia +
  de:
    name: Seidenschal
    desc: Schaden +0,5, Feuerrate +
  it:
    name: Sciarpa Seta
    desc: Danni +0,5, cadenza +
  pt:
    name: Lenço de Seda
    desc: Dano +0,5, cadência +
  ru:
    name: Шелковый шарф
    desc: Урон +0,5, темп стрельбы +
  ja:
    name: シルクのスカーフ
    desc: ダメージ+0.5、連射+
  ko:
    name: 실크스카프
    desc: 대미지 +0.5, 연사 +
  zh:
    name: 丝绸围巾
    desc: 伤害+0.5，射速+
  zt:
    name: 絲綢圍巾
    desc: 傷害+0.5、射速+
---
Dégâts +0,5, cadence +

## Fonctionnement
- Le +0,5 en Dégâts est un bonus fixe : il s'ajoute à vos autres bonus fixes et suit les [rendements décroissants](../mechanics/rendimientos.html) (en entier jusqu'à +3 au total, puis de moins en moins).
- Cadence +1 : 0,017 s de moins entre deux tirs. Les bonus de cadence suivent les [rendements décroissants](../mechanics/rendimientos.html) : les 3 premiers points au total comptent en entier, les 4 suivants à moitié, le reste au quart. Vous ne tirez jamais plus de 12 fois par seconde.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Dégâts et Cadence).
