---
title: Broken Mirror
id: cu_espejo
kind: passive
category: defense
family: cursed
tier: 1
pools:
- cursed
pool_weight: 1
stats:
- text: Luck -2
  good: false
details:
- label: Blocks hits
  value: 20 %
- label: Luck
  value: '-2'
- label: After a block
  value: 0.7 s of invulnerability
icon: items-ps/hold-item/wide-lens.png
sprite: true
names:
  es:
    name: Espejo Roto
    desc: Un 20 % de los golpes que recibes no te hacen nada, pero la suerte te abandona (-2).
  fr:
    name: Miroir Brisé
    desc: 20 % des coups que vous recevez ne vous font rien, mais la chance vous abandonne (-2).
  de:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  it:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  pt:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  ru:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  ja:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  ko:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  zh:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
  zt:
    name: Broken Mirror
    desc: 20% of the hits you take do nothing, but luck abandons you (-2).
---
20% of the hits you take do nothing, but luck abandons you (-2).

## How it works
- Each hit that would hurt you has a 20 % chance to do nothing at all. The check is separate for every hit; Luck does not change it.
- When a hit is blocked this way, you get 0.7 seconds of invulnerability.
- Blocked hits don't trigger your on-hit items, since nothing hit you.
- The Luck penalty is permanent while you own the item.

## Stacking
- The 20 % does not stack with a second copy. The -2 Luck is added again.
