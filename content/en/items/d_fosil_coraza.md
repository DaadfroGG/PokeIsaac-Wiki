---
title: Armor Fossil
id: d_fosil_coraza
kind: passive
category: defense
family: defense
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Shield
  value: 1 s out of every 8 s
- label: Blocks
  value: All damage
icon: items-ps/fossil/armor.png
sprite: true
names:
  es:
    name: Fósil Coraza
    desc: Cada 8 segundos, durante uno, nada te hace daño (brillas)
  fr:
    name: Fossile Armure
    desc: Toutes les 8 secondes, rien ne vous blesse pendant une seconde (vous brillez)
  de:
    name: Panzerfossil
    desc: Alle 8 Sekunden verletzt dich eine Sekunde lang nichts (du leuchtest)
  it:
    name: Fossilscudo
    desc: Ogni 8 secondi, per un secondo, nulla può farti male (brilli)
  pt:
    name: Fóssil Blindagem
    desc: A cada 8 segundos, por um segundo, nada machuca você (você brilha)
  ru:
    name: Окаменелость-броня
    desc: Каждые 8 секунд на одну секунду тебя ничто не ранит (ты светишься)
  ja:
    name: たてのカセキ
    desc: 8秒ごとに1秒間、何からもダメージを受けない（体が光る）
  ko:
    name: 방패의화석
    desc: 8초마다 1초 동안 어떤 공격도 받지 않는다(빛난다)
  zh:
    name: 盾甲化石
    desc: 每8秒有1秒，任何东西都无法伤害你（你会发光）
  zt:
    name: 盾甲化石
    desc: 每8秒中有1秒，任何攻擊都傷不到你（身上會發光）
---
Every 8 seconds, for one second, nothing can hurt you (you glow)

## How it works
- The game runs an 8-second cycle. During the last second of every cycle, you glow and nothing can hurt you.
- The cycle runs all the time, in every room, from the moment you have the item. It is not tied to a hit or a room.
- A hit that arrives during the glow does nothing and gives only a short flash of invulnerability.

## Stacking
- It does not stack: a second copy adds nothing.
