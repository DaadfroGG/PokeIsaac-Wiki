---
title: Berry Juice
id: bolsa_sangre
kind: passive
category: stats
family: core
tier: 1
pool_weight: 0
stats:
- text: Hearts +1
  good: true
- text: Damage +0.3
  good: true
- text: Heals 3 hearts
  good: true
details:
- label: Max HP
  value: +1 heart
- label: Damage
  value: '+0.3'
- label: Healing
  value: 3 hearts when picked up
icon: items-ps/medicine/berry-juice.png
sprite: true
names:
  es:
    name: Zumo de Baya
    desc: Corazón +1, te cura y sube un poco el daño
  fr:
    name: Jus de Baie
    desc: Cœur +1, vous soigne et augmente un peu les dégâts
  de:
    name: Beerensaft
    desc: Herz +1, heilt dich und erhöht den Schaden etwas
  it:
    name: Succodibacca
    desc: Cuore +1, ti cura e aumenta un po' i danni
  pt:
    name: Suco de Fruta
    desc: Coração +1, cura e aumenta um pouco o dano
  ru:
    name: Ягодный сок
    desc: Сердце +1, лечит и немного повышает урон
  ja:
    name: きのみジュース
    desc: ハート+1、HPが回復してダメージが少し上がる
  ko:
    name: 나무열매쥬스
    desc: 하트 +1, 회복하고 대미지가 조금 오른다
  zh:
    name: 树果汁
    desc: 心+1，回复生命并略微提升伤害
  zt:
    name: 樹果汁
    desc: 愛心 +1，回復生命並稍微提升傷害
---
Heart +1, heals you and raises damage a little

## How it works
- One more heart container, up to the limit of 12 hearts. At 12 hearts you get no container, but the heal still applies.
- The +0.3 Damage is a flat bonus: it adds up with your other flat bonuses and follows the [diminishing returns](../mechanics/rendimientos.html) (in full up to +3 in total, then less and less).
- It heals 3 hearts when you pick it up; this heal ignores the healing limit.

## How to get it
- It is not in any item pool. It can be left by a [donation machine](../world/blood.html) that wears out after several donations: 30 % chance of Berry Juice (15 % of [Fresh Water](bolsa_suero.html) instead).

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Damage) and its heal.
