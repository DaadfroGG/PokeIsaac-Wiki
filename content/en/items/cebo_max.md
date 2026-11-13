---
title: Max Lure
id: cebo_max
kind: passive
category: utility
family: core
tier: 1
pools:
- shop
pool_weight: 2
details:
- label: Enemies
  value: +1 per combat room
- label: Extra coin
  value: 20 % per enemy killed
- label: Coin limit
  value: 3 per room, 6 + ½ floor per floor
icon: items-ps/other-item/max-lure.png
sprite: true
names:
  es:
    name: Cebo Máximo
    desc: Más enemigos en cada sala, pero sueltan más monedas
  fr:
    name: Max Leurre
    desc: Plus d'ennemis dans chaque salle, mais ils lâchent plus de pièces
  de:
    name: Top-Lockparfüm
    desc: Mehr Gegner in jedem Raum, aber sie lassen mehr Münzen fallen
  it:
    name: Profumo Max
    desc: Più nemici in ogni stanza, ma lasciano più monete
  pt:
    name: Isca Máxima
    desc: Mais inimigos em cada sala, mas eles soltam mais moedas
  ru:
    name: Макс-приманка
    desc: Больше врагов в каждой комнате, но они роняют больше монет
  ja:
    name: マックスルアー
    desc: 部屋ごとの敵が増えますが、コインをより多く落とします
  ko:
    name: 골드코롱
    desc: 방마다 적이 늘어나지만 동전을 더 많이 떨어뜨린다
  zh:
    name: 黄金香水
    desc: 每个房间敌人更多，但掉落更多硬币
  zt:
    name: 黃金香水
    desc: 每個房間的敵人更多，但會掉落更多金幣
---
More enemies in each room, but they drop more coins

## How it works
- When a normal combat room is filled, one extra enemy appears: a copy of a random enemy already in the room, with the same health, speed and damage, placed at least 170 px away from you.
- Each enemy you defeat has a 20 % chance to drop one extra [coin](../world/coin.html), on top of its normal drop (6 % + 0.5 % per Luck, see [Enemy drops](../mechanics/botin_enemigos.html)). The two are rolled separately, so an enemy can drop both. It works for every player as soon as one player in the team has it.
- These extra coins have limits: at most 3 per room and, per floor, 6 plus half the floor number (rounded).
- It does not affect boss rooms or other kinds of room.

## Stacking
- It is an on/off effect: a second copy does not add a second enemy or raise the coin chance.
- It cancels out the [Clear Amulet](amuleto_puro.html), which removes one enemy from the same rooms.
