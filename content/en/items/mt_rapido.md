---
title: TM Quick Attack
id: mt_rapido
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
  value: +2 (0.033 s less between shots)
icon: items/tm-flying.png
sprite: true
names:
  es:
    name: MT Ataque Rápido
    desc: Velocidad y cadencia +
  fr:
    name: CT Vive-Attaque
    desc: Vitesse et cadence +
  de:
    name: TM Ruckzuckhieb
    desc: Tempo und Feuerrate +
  it:
    name: MT Attacco Rapido
    desc: Velocità e cadenza +
  pt:
    name: MT Ataque Rápido
    desc: Velocidade e cadência +
  ru:
    name: ТМ Быстрая атака
    desc: Скорость и темп стрельбы +
  ja:
    name: わざマシン・でんこうせっか
    desc: 移動速度・連射+
  ko:
    name: 기술머신 전광석화
    desc: 속도와 연사 +
  zh:
    name: 招式机器 电光一闪
    desc: 速度和射速+
  zt:
    name: 招式學習器 電光一閃
    desc: 速度和射速+
---
Speed and fire rate +

## How it works
- Speed +0.4 has no diminishing returns. Your speed never goes below 1.6.
- Fire rate +2: 0.033 s less between shots. Fire-rate bonuses follow the [diminishing returns](../mechanics/rendimientos.html): the first 3 points in total count in full, the next 4 at half, the rest at a quarter. You never shoot more than 12 times per second.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Fire rate).
