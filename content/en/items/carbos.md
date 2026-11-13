---
title: Carbos
id: carbos
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Speed +0.4
  good: true
- text: Fire rate +
  good: true
details:
- label: Speed
  value: '+0.4'
- label: Fire rate
  value: +1.5 (0.025 s less between shots)
icon: items/carbos.png
sprite: true
names:
  es:
    name: Carburante
    desc: Velocidad + y cadencia +
  fr:
    name: Carbone
    desc: Vitesse + et cadence +
  de:
    name: Carbon
    desc: Tempo + und Feuerrate +
  it:
    name: Carburante
    desc: Velocità + e cadenza +
  pt:
    name: Carbono
    desc: Velocidade + e cadência +
  ru:
    name: Карбос
    desc: Скорость + и темп стрельбы +
  ja:
    name: インドメタシン
    desc: 移動速度+・連射+
  ko:
    name: 알칼로이드
    desc: 속도 +, 연사 +
  zh:
    name: 速度增强剂
    desc: 速度+，射速+
  zt:
    name: 速度增強劑
    desc: 速度+、射速+
---
Speed + and fire rate +

## How it works
- Speed +0.4 has no diminishing returns. Your speed never goes below 1.6.
- Fire rate +1.5: 0.025 s less between shots. Fire-rate bonuses follow the [diminishing returns](../mechanics/rendimientos.html): the first 3 points in total count in full, the next 4 at half, the rest at a quarter. You never shoot more than 12 times per second.

## How to get it
- Treasure rooms and shops.
- In Classic mode, the shop of the last floor of each chapter (every 10th floor) also sells two vitamins (more expensive than usual items): HP Up first if someone is below the heart limit, then two at random among Protein, Calcium, Zinc, Iron, PP Max and Carbos, preferring ones you don't have yet.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Fire rate).
