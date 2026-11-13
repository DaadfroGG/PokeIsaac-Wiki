---
title: Silk Scarf
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
- text: Damage +0.5
  good: true
- text: Fire rate +
  good: true
details:
- label: Damage
  value: '+0.5'
- label: Fire rate
  value: +1 (0.017 s less between shots)
icon: items/silk-scarf.png
sprite: true
names:
  es:
    name: Pañuelo Seda
    desc: Daño +0.5, cadencia +
  fr:
    name: Mouchoir Soie
    desc: Dégâts +0,5, cadence +
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
Damage +0.5, fire rate +

## How it works
- The +0.5 Damage is a flat bonus: it adds up with your other flat bonuses and follows the [diminishing returns](../mechanics/rendimientos.html) (in full up to +3 in total, then less and less).
- Fire rate +1: 0.017 s less between shots. Fire-rate bonuses follow the [diminishing returns](../mechanics/rendimientos.html): the first 3 points in total count in full, the next 4 at half, the rest at a quarter. You never shoot more than 12 times per second.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Damage and Fire rate).
