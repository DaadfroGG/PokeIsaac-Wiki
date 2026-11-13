---
title: Tough Candy
id: s_caramelo_aguante
kind: passive
category: stats
family: core
tier: 2
pools:
- boss
pool_weight: 2
stats:
- text: Damage +0.8
  good: true
- text: Hearts +1
  good: true
- text: Heals 1 heart
  good: true
details:
- label: Damage
  value: '+0.8'
- label: Max HP
  value: +1 heart
- label: Healing
  value: 1 heart when picked up
icon: items-ps/av-candy/tough.png
sprite: true
names:
  es:
    name: Caramelo Aguante
    desc: Daño + y corazón +1
  fr:
    name: Bonbon Armure S
    desc: Dégâts + et cœur +1
  de:
    name: Robustbonbon
    desc: Schaden + und Herz +1
  it:
    name: Caramella protezione S
    desc: Danni + e cuore +1
  pt:
    name: Doce Resistência
    desc: Dano + e coração +1
  ru:
    name: Конфета стойкости
    desc: Урон + и сердце +1
  ja:
    name: まもりのアメ
    desc: ダメージ+、ハート+1
  ko:
    name: 수비의사탕
    desc: 대미지 +, 하트 +1
  zh:
    name: 守护糖果
    desc: 伤害+，心+1
  zt:
    name: 守護糖果
    desc: 傷害+、愛心+1
---
Damage + and heart +1

## How it works
- The +0.8 Damage is a flat bonus: it adds up with your other flat bonuses and follows the [diminishing returns](../mechanics/rendimientos.html) (in full up to +3 in total, then less and less).
- One more heart container, up to the limit of 12 hearts. At 12 hearts you get no container, but the heal still applies.
- It heals 1 heart when you pick it up; this heal ignores the healing limit.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Damage) and its heal.
