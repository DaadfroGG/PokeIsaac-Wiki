---
title: Tide Bell
id: campana_marea
kind: passive
category: utility
family: core
tier: 1
pools:
- angel
pool_weight: 2
details:
- label: Interval
  value: Every 10 s of combat
- label: Radius
  value: 220 px
- label: Effect
  value: Pushes enemies away and stuns them 0.5 s
- label: Damage
  value: None
- label: Bosses
  value: Not affected
icon: items-ps/key-item/tidal-bell.png
sprite: true
names:
  es:
    name: Campana Marea
    desc: Cada 10 segundos, una ola aparta a los enemigos que tienes cerca
  fr:
    name: Cloche Marée
    desc: Toutes les 10 secondes, une vague repousse les ennemis proches
  de:
    name: Gezeitenglocke
    desc: Alle 10 Sekunden stößt eine Welle Gegner in deiner Nähe weg
  it:
    name: Campana Marea
    desc: Ogni 10 secondi, un'onda respinge i nemici vicini
  pt:
    name: Sino da Maré
    desc: A cada 10 segundos, uma onda afasta os inimigos próximos
  ru:
    name: Колокол прилива
    desc: Каждые 10 секунд волна отталкивает ближайших врагов
  ja:
    name: しおのすず
    desc: 10秒ごとに、衝撃波が近くの敵を押しのける
  ko:
    name: 해명의방울
    desc: 10초마다 파도가 주변의 적을 밀어낸다
  zh:
    name: 海声铃铛
    desc: 每10秒，一道冲击波会推开你身边的敌人
  zt:
    name: 潮汐之鈴
    desc: 每10秒，一道波浪會推開你身邊的敵人
---
Every 10 seconds, a wave pushes away nearby enemies

## How it works
- While a room still has enemies, a timer runs. After 10 seconds, a wave pushes away every non-boss enemy within 220 px of you and stuns them for 0.5 seconds.
- The wave does no damage: it only buys you space.
- If no enemy is within 220 px when the timer is up, the wave waits and goes off as soon as one comes within range, then the timer starts again.
- Bosses are not pushed or stunned.
- The timer only runs in rooms that are not cleared.

## Stacking
- It is an on/off effect: a second Tide Bell does not make waves more frequent or stronger.
