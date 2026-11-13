---
title: Quick Claw
id: garra_rapida
kind: passive
category: stats
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Fire rate +
  good: true
- text: Damage -0.3
  good: false
details:
- label: Fire rate
  value: +4 (0.067 s less between shots)
- label: Damage
  value: '-0.3'
icon: items/quick-claw.png
sprite: true
names:
  es:
    name: Garra Rápida
    desc: Cadencia ++, daño -0.3
  fr:
    name: Vive Griffe
    desc: Cadence ++, dégâts -0,3
  de:
    name: Flinkklaue
    desc: Feuerrate ++, Schaden -0,3
  it:
    name: Rapidartigli
    desc: Cadenza ++, danni -0,3
  pt:
    name: Garra Rápida
    desc: Cadência ++, dano -0,3
  ru:
    name: Быстрый коготь
    desc: Темп стрельбы ++, урон -0,3
  ja:
    name: せんせいのツメ
    desc: 連射速度++、ダメージ-0.3
  ko:
    name: 선제공격손톱
    desc: 연사 ++, 대미지 -0.3
  zh:
    name: 先制之爪
    desc: 射速++，伤害-0.3
  zt:
    name: 先制之爪
    desc: 射速 ++，傷害 -0.3
---
Fire rate ++, damage -0.3

## How it works
- Fire rate +4: 0.067 s less between shots. Fire-rate bonuses follow the [diminishing returns](../mechanics/rendimientos.html): the first 3 points in total count in full, the next 4 at half, the rest at a quarter. You never shoot more than 12 times per second.
- The -0.3 Damage is taken off your flat bonuses; penalties count in full. Your Damage never goes below 0.5.
- On its own, the +4 fire rate counts as +3.5 (the 4th point is already at half); with other fire-rate items it counts for less.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Fire rate).
