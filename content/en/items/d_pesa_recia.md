---
title: Power Weight
id: d_pesa_recia
kind: passive
category: utility
family: defense
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Hearts +1
  good: true
- text: Speed -0.2
  good: false
- text: Heals 1 heart
  good: true
details:
- label: Max health
  value: +1 heart
- label: Heal
  value: 1 heart on pickup
- label: Speed
  value: −0.2
- label: Walking
  value: Breaks crates, barrels, bushes and vases
- label: Pulls
  value: Cannot drag you
icon: items-ps/ev-item/power-weight.png
sprite: true
names:
  es:
    name: Pesa Recia
    desc: 'Pisas fuerte: rompes cajas y jarrones al andar y no te mueven los tornados; corazón +1, velocidad -'
  fr:
    name: Poids Pouvoir
    desc: 'Pas lourds : vous cassez caisses et vases en marchant et les tornades ne vous déplacent pas ; cœur +1, vitesse -'
  de:
    name: Machtgewicht
    desc: 'Du stampfst kräftig auf: Du zerstörst Kisten und Vasen beim Gehen und Tornados bewegen dich nicht; Herz +1, Tempo -'
  it:
    name: Vigorpeso
    desc: 'Calpesti forte: rompi casse e vasi mentre cammini e i tornado non ti spostano; cuore +1, velocità -'
  pt:
    name: Peso Poderoso
    desc: 'Pisa forte: você quebra caixas e vasos ao andar e os tornados não movem você; coração +1, velocidade -'
  ru:
    name: Силовой груз
    desc: 'Тяжелая поступь: ломаешь ящики и вазы на ходу, и смерчи тебя не сдвигают; сердце +1, скорость -'
  ja:
    name: パワーウエイト
    desc: 重い足取り：歩くだけで箱やつぼを壊し、竜巻にも動かされない。ハート+1、移動速度-
  ko:
    name: 파워웨이트
    desc: '묵직한 발걸음: 걸으면 상자와 항아리를 부수고 회오리에 밀리지 않는다. 하트 +1, 속도 -'
  zh:
    name: 力量负重
    desc: 脚步沉重：走路时会踩碎箱子和花瓶，龙卷风无法移动你；心+1，速度-
  zt:
    name: 力量負重
    desc: 腳步沉重：走路時會踩碎箱子和花瓶，龍捲風也無法移動你；愛心+1，速度-
---
Heavy steps: you break crates and vases as you walk and tornadoes can't move you; heart +1, speed -

## How it works
- Max health +1 heart (up to the limit of 12 hearts), and it heals 1 heart when picked up.
- Speed −0.2, subtracted in full. Your speed can never drop below 1.6.
- While you are moving, you break the [crates](../world/crate.html), [barrels](../world/barrel.html), [bushes](../world/bush.html) and [vases](../world/vase.html) you walk into, without having to shoot them.
- Attacks that pull you in (tornadoes, vortexes) can no longer move you.

## Stacking
- Each copy adds another +1 heart and −0.2 Speed. The breaking and the immunity to pulls are on/off effects.
