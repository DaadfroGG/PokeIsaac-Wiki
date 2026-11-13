---
title: Electirizer
id: electrizador
kind: passive
category: utility
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Interval
  value: Every 5 s of combat
- label: Damage
  value: 2× your Damage (at least 3)
- label: Target
  value: A random enemy that can be hurt, bosses included
icon: items-ps/evo-item/electirizer.png
sprite: true
names:
  es:
    name: Electrizador
    desc: Cada 5 segundos, un rayo cae sobre un enemigo
  fr:
    name: Électriseur
    desc: Toutes les 5 secondes, la foudre frappe un ennemi
  de:
    name: Stromisierer
    desc: Alle 5 Sekunden schlägt ein Blitz in einen Gegner ein
  it:
    name: Elettritore
    desc: Ogni 5 secondi, un fulmine colpisce un nemico
  pt:
    name: Electirizer
    desc: A cada 5 segundos, um raio cai sobre um inimigo
  ru:
    name: Электрайзер
    desc: Каждые 5 секунд молния бьет во врага
  ja:
    name: エレキブースター
    desc: 5秒ごとに、敵1体に雷が落ちる
  ko:
    name: 에레키부스터
    desc: 5초마다 적 하나에 번개가 떨어진다
  zh:
    name: 电力增幅器
    desc: 每5秒，一道落雷劈向一个敌人
  zt:
    name: 電力增幅器
    desc: 每5秒，一道閃電劈向一個敵人
---
Every 5 seconds, lightning strikes an enemy

## How it works
- While a room still has enemies, a timer runs. Every 5 seconds a lightning bolt strikes a random enemy that can currently be hurt (bosses included) and deals twice your Damage, with a minimum of 3.
- If no enemy can be hurt at that moment (for example one that is burrowed), the bolt waits and strikes as soon as one can.
- The timer only runs in rooms that are not cleared.

## Stacking
- It is an on/off effect: a second Electirizer does not strike more often.
