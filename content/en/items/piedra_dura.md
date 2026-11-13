---
title: Hard Stone
id: piedra_dura
kind: passive
category: shot
family: core
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Hearts +1
  good: true
- text: Heals 1 heart
  good: true
details:
- label: Max HP
  value: +1 heart
- label: Healing
  value: 1 heart when picked up
- label: Knockback
  value: Strength 6 (3 + 3 per knockback item)
- label: Bosses
  value: Never pushed
icon: items/hard-stone.png
sprite: true
names:
  es:
    name: Piedra Dura
    desc: Corazón +1 y disparos que empujan
  fr:
    name: Pierre Dure
    desc: Cœur +1 et tirs qui repoussent
  de:
    name: Granitstein
    desc: Herz +1 und Schüsse mit Rückstoß
  it:
    name: Pietradura
    desc: Cuore +1 e tiri che respingono
  pt:
    name: Pedra Dura
    desc: Coração +1 e tiros que empurram
  ru:
    name: Твердый камень
    desc: Сердце +1 и выстрелы с отбрасыванием
  ja:
    name: かたいいし
    desc: ハート+1、敵を押し返すショット
  ko:
    name: 딱딱한돌
    desc: 하트 +1, 탄이 적을 밀쳐낸다
  zh:
    name: 硬石头
    desc: 心+1，射弹可击退敌人
  zt:
    name: 硬石頭
    desc: 愛心 +1 且子彈會擊退
---
Heart +1 and shots that knock back

## How it works
- You get one more heart container (up to the limit of 12 hearts) and heal 1 heart when you pick it up. This heal ignores the healing limit. At 12 hearts you get no container, but still the heal.
- Every hit of your shots pushes the enemy away in the direction the shot was flying, much harder than the small push every shot gives.
- It works on every hit, split shots included. Bosses are never pushed.

## Stacking
- Both parts stack: each copy gives one more heart (and its heal), and the push gets stronger (strength 6, then 9, then 12…).
