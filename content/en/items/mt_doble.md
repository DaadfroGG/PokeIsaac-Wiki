---
title: TM Double Team
id: mt_doble
kind: passive
category: shot
family: core
tier: 4
pools:
- treasure
- boss
pool_weight: 1
stats:
- text: Damage -0.3
  good: false
details:
- label: Shots
  value: +1 per volley
- label: Spread
  value: About 7° each side of where you aim
- label: Damage
  value: '-0.3'
- label: Cap
  value: 9 shots per volley
icon: items/tm-normal.png
sprite: true
names:
  es:
    name: MT Doble Equipo
    desc: Disparo doble
  fr:
    name: CT Reflet
    desc: Tir double
  de:
    name: TM Doppelteam
    desc: Doppelschuss
  it:
    name: MT Doppioteam
    desc: Tiro doppio
  pt:
    name: MT Equipe Dupla
    desc: Tiro duplo
  ru:
    name: ТМ Двойная команда
    desc: Двойной выстрел
  ja:
    name: わざマシン・かげぶんしん
    desc: ダブルショット
  ko:
    name: 기술머신 그림자분신
    desc: 더블 샷
  zh:
    name: 招式机器 影子分身
    desc: 双发射击
  zt:
    name: 招式學習器 影子分身
    desc: 雙發射擊
---
Double shot

{{< clip >}}

## How it works
- You fire one more shot per volley: with no other extra shots, that's 2 shots side by side, about 7° to each side of where you aim.
- Each shot deals your full damage. The -0.3 is taken off your Damage stat (penalties count in full).
- With more shots, the volley spreads out in a fan.

## Stacking
- It stacks: each copy adds one more shot per volley and another -0.3 Damage. A volley can't have more than 9 shots (see [extra shots](../mechanics/disparos_extra.html)).
