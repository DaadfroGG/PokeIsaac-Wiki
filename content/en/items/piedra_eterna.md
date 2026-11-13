---
title: Everstone
id: piedra_eterna
kind: passive
category: defense
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Damage +1
  good: true
- text: Hearts +1
  good: true
- text: Heals 1 heart
  good: true
details:
- label: Evolution
  value: Blocked
- label: Instead, each time
  value: Damage +0.7, +1 max heart, heals 1 heart
- label: On pickup
  value: Damage +1, +1 heart (healed)
icon: items-ps/hold-item/everstone.png
sprite: true
names:
  es:
    name: Piedra Eterna
    desc: Ya no evolucionas, pero daño +1 y corazón +1
  fr:
    name: Pierre Stase
    desc: Vous n'évoluez plus, mais dégâts +1 et cœur +1
  de:
    name: Ewigstein
    desc: Du entwickelst dich nicht mehr, aber Schaden +1 und Herz +1
  it:
    name: Pietrastante
    desc: Non evolvi più, ma danni +1 e cuore +1
  pt:
    name: Pedra Eterna
    desc: Você não evolui mais, mas dano +1 e coração +1
  ru:
    name: Вечный камень
    desc: Ты больше не эволюционируешь, но урон +1 и сердце +1
  ja:
    name: かわらずのいし
    desc: もう進化しないが、ダメージ+1・ハート+1
  ko:
    name: 변함없는돌
    desc: 더 이상 진화하지 않지만, 대미지 +1, 하트 +1
  zh:
    name: 不变之石
    desc: 不再进化，但伤害+1，心+1
  zt:
    name: 不變之石
    desc: 不再進化，但傷害+1、愛心+1
---
You no longer evolve, but damage +1 and heart +1

## How it works
- On pickup: Damage +1 and +1 max heart (the heart is filled).
- Your Pokémon never evolves. Each time it would have evolved (see [Levels and evolution](../mechanics/niveles_pokemon.html)), it gets Damage +0.7, +1 max heart (up to the maximum health limit) and heals 1 heart instead.
- Evolution by stone is blocked too.

## Stacking
- The pickup bonus is added again with each copy.
