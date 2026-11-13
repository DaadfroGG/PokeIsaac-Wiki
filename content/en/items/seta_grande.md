---
title: Big Mushroom
id: seta_grande
kind: passive
category: defense
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Hearts +1
  good: true
- text: Damage +0.5
  good: true
- text: Heals 1 heart
  good: true
details:
- label: Hearts
  value: +1 container
- label: Damage
  value: '+0.5'
- label: Healing
  value: 1 heart on pick-up
- label: Size
  value: Your sprite grows 20 %
icon: items-ps/valuable-item/big-mushroom.png
sprite: true
names:
  es:
    name: Seta Grande
    desc: 'Creces: corazón +1 y daño +0.5'
  fr:
    name: Gros Champi
    desc: 'Vous grandissez : cœur +1 et dégâts +0,5'
  de:
    name: Riesenpilz
    desc: 'Du wächst: Herz +1 und Schaden +0,5'
  it:
    name: Grande Fungo
    desc: 'Cresci: cuore +1 e danni +0,5'
  pt:
    name: Cogumelo Grande
    desc: 'Você cresce: coração +1 e dano +0,5'
  ru:
    name: Большой гриб
    desc: 'Ты растешь: сердце +1 и урон +0,5'
  ja:
    name: おおきなキノコ
    desc: 成長：ハート+1、ダメージ+0.5
  ko:
    name: 큰버섯
    desc: '커진다: 하트 +1, 대미지 +0.5'
  zh:
    name: 大蘑菇
    desc: 你成长了：心+1，伤害+0.5
  zt:
    name: 大蘑菇
    desc: 你成長了：愛心+1，傷害+0.5
---
You grow: heart +1 and damage +0.5

## How it works

- Adds one heart container, +0.5 Damage and heals 1 heart as soon as you pick it up.
- The +0.5 is flat Damage, so it falls under [diminishing returns](../mechanics/rendimientos.html) once your flat bonuses pass +3.
- You are drawn 20 % bigger for the rest of the run. [Mini Mushroom](mini_seta.html) does the opposite (20 % smaller); with both you end up at ×0.96.

## Stacking

- Each copy adds another container, another +0.5 Damage and another heal.
- The size increase is a one-time ×1.2: further copies do not make you bigger.
