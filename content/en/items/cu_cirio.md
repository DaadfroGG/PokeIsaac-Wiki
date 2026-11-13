---
title: Funeral Candle
id: cu_cirio
kind: passive
category: utility
family: cursed
tier: 1
pools:
- cursed
pool_weight: 1
details:
- label: When entering a room
  value: One cursed enemy (+60 % health, +½ heart of damage)
- label: When defeated
  value: Soul heart
- label: Never
  value: Boss rooms, cleared rooms
icon: items-ps/hold-item/flame-orb.png
sprite: true
names:
  es:
    name: Cirio Fúnebre
    desc: Al entrar en una sala con enemigos, uno al azar queda maldito (+60 % de vida y +½ corazón de daño). Al caer, suelta un corazón de alma.
  fr:
    name: Cierge Funèbre
    desc: En entrant dans une salle avec des ennemis, l'un d'eux, au hasard, est maudit (+60 % de vie et +½ cœur de dégâts). En tombant, il laisse un cœur d'âme.
  de:
    name: Funeral Candle
    desc: When you enter a room with enemies, a random one is cursed (+60% health and +½ heart of damage). When it falls, it drops a soul heart.
  it:
    name: Funeral Candle
    desc: When you enter a room with enemies, a random one is cursed (+60% health and +½ heart of damage). When it falls, it drops a soul heart.
  pt:
    name: Funeral Candle
    desc: When you enter a room with enemies, a random one is cursed (+60% health and +½ heart of damage). When it falls, it drops a soul heart.
  ru:
    name: Funeral Candle
    desc: When you enter a room with enemies, a random one is cursed (+60% health and +½ heart of damage). When it falls, it drops a soul heart.
  ja:
    name: Funeral Candle
    desc: When you enter a room with enemies, a random one is cursed (+60% health and +½ heart of damage). When it falls, it drops a soul heart.
  ko:
    name: Funeral Candle
    desc: When you enter a room with enemies, a random one is cursed (+60% health and +½ heart of damage). When it falls, it drops a soul heart.
  zh:
    name: Funeral Candle
    desc: When you enter a room with enemies, a random one is cursed (+60% health and +½ heart of damage). When it falls, it drops a soul heart.
  zt:
    name: Funeral Candle
    desc: When you enter a room with enemies, a random one is cursed (+60% health and +½ heart of damage). When it falls, it drops a soul heart.
---
When you enter a room with enemies, a random one is cursed (+60% health and +½ heart of damage). When it falls, it drops a soul heart.

## How it works
- When you enter a room that still has enemies, one random non-boss enemy is cursed: its health is multiplied by 1.6 and its contact damage rises by half a heart. A message announces it.
- It happens once per room, and never in boss rooms or in a room you already cleared.
- When the cursed enemy is defeated, it drops a [soul heart](../world/soul.html), however it dies.

## Stacking
- It is an on/off effect: a second Funeral Candle does not curse a second enemy.
