---
title: Normal Gem
id: gema_normal
kind: passive
category: shot
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Shot
  value: 'First shot of each fight: damage ×4, size ×1.6, counts as a critical hit'
- label: Refill
  value: Every time you enter a room with enemies still alive
icon: items-ps/gem/normal.png
sprite: true
names:
  es:
    name: Gema Normal
    desc: El primer disparo de cada combate hace ×4 de daño
  fr:
    name: Joyau Normal
    desc: Le premier tir de chaque combat inflige ×4 de dégâts
  de:
    name: Normaljuwel
    desc: Der erste Schuss jedes Kampfes macht ×4 Schaden
  it:
    name: Bijounormale
    desc: Il primo tiro di ogni combattimento infligge ×4 danni
  pt:
    name: Gema Normal
    desc: O primeiro tiro de cada combate causa ×4 de dano
  ru:
    name: Обычный самоцвет
    desc: Первый выстрел в каждом бою наносит ×4 урона
  ja:
    name: ノーマルジュエル
    desc: 戦闘の最初のショットのダメージが×4
  ko:
    name: 노말주얼
    desc: 전투마다 첫 탄이 ×4 대미지를 준다
  zh:
    name: 一般宝石
    desc: 每场战斗的第一发弹伤害×4
  zt:
    name: 一般寶石
    desc: 每場戰鬥的第一發射擊造成×4傷害
---
The first shot of each fight deals ×4 damage

## How it works
- Each time you enter a room that still has living enemies, the gem is charged. The next shot you fire deals ×4 damage, is 1.6 times bigger and counts as a critical hit.
- Rooms with no enemies (or already cleared) do not charge it, but a charge you did not use stays ready.
- If the shot was already a normal critical hit, the ×4 comes on top of the crit ×2 (×8 in total).
- Since it counts as a critical hit, the shot also triggers crit effects such as the stun from [Black Glasses](gafas_sol.html).
- It works with every kind of shot, including beams and other weapon shots. Only one shot is boosted per fight, even if you fire several at once.

## Stacking
- It does not stack: a second copy does not give a second boosted shot.
