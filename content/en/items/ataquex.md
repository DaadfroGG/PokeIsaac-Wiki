---
title: X Attack
id: ataquex
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Damage +0.5
  good: true
- text: Shot spd +2
  good: true
details:
- label: Damage
  value: '+0.5'
- label: Shot speed
  value: '+2'
icon: items/x-attack.png
sprite: true
names:
  es:
    name: Ataque X
    desc: Daño +0.5, velocidad de disparo +
  fr:
    name: Attaque +
    desc: Dégâts +0,5, vitesse des tirs +
  de:
    name: X-Angriff
    desc: Schaden +0,5, Schusstempo +
  it:
    name: Attacco X
    desc: Danni +0,5, velocità dei tiri +
  pt:
    name: Ataque X
    desc: Dano +0,5, velocidade de tiro +
  ru:
    name: Атака X
    desc: Урон +0,5, скорость выстрелов +
  ja:
    name: プラスパワー
    desc: ダメージ+0.5、弾速+
  ko:
    name: 플러스파워
    desc: 대미지 +0.5, 탄속 +
  zh:
    name: 力量强化
    desc: 伤害+0.5，弹速+
  zt:
    name: 力量強化
    desc: 傷害+0.5、彈速+
---
Damage +0.5, shot speed +

## How it works
- The +0.5 Damage is a flat bonus: it adds up with your other flat bonuses and follows the [diminishing returns](../mechanics/rendimientos.html) (in full up to +3 in total, then less and less).
- Shot speed +2: your shots fly faster (they reach their range sooner). It never goes below 4.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Damage).
