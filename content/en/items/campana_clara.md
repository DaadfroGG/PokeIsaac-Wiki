---
title: Clear Bell
id: campana_clara
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 4
details:
- label: Duration
  value: 6 seconds
- label: Each hit
  value: Heals you half a heart instead of hurting you
- label: After each hit
  value: 1.17 s of invulnerability
- label: Only you
  value: Doesn't heal your teammates
icon: items-ps/key-item/clear-bell.png
sprite: true
names:
  es:
    name: Campana Clara
    desc: Durante 6 segundos, los golpes que recibes te curan medio corazón en vez de herirte
  fr:
    name: Cloche Cristal
    desc: Pendant 6 secondes, les coups reçus vous rendent un demi-cœur au lieu de vous blesser
  de:
    name: Klarglocke
    desc: 6 Sekunden lang heilen dich erlittene Treffer um ein halbes Herz, statt dich zu verletzen
  it:
    name: Campana Chiara
    desc: Per 6 secondi, i colpi che subisci ti curano di mezzo cuore invece di ferirti
  pt:
    name: Sino Cristalino
    desc: Por 6 segundos, os golpes que você recebe te curam meio coração em vez de ferir
  ru:
    name: Чистый колокольчик
    desc: На 6 секунд получаемые удары лечат тебя на полсердца вместо урона
  ja:
    name: とうめいなすず
    desc: 6秒間、受けた攻撃がダメージではなく半分のハートの回復になる
  ko:
    name: 크리스탈방울
    desc: 6초 동안 받는 공격이 피해 대신 하트 반 칸을 회복시킨다
  zh:
    name: 透明铃铛
    desc: 6秒内，你受到的攻击会为你回复半颗心，而不是伤害你
  zt:
    name: 透明鈴鐺
    desc: 6秒內，你受到的攻擊會為你回復半顆愛心，而不是傷害你
---
For 6 seconds, hits you take heal you half a heart instead of hurting you

## How it works
- For 6 seconds, every hit that would hurt you (shots, contact, explosions, hazards) does no damage and heals you half a heart instead.
- After each such hit you are invulnerable for 1.17 seconds, so at most about 5 hits can heal you.
- This heal counts toward the limit on item healing over 10 seconds: once that limit is reached, hits still do nothing but no longer heal.
- In co-op it only protects the player who used it.
- It always goes off when you press it, even in an empty room, and uses the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: the timer just restarts at 6 seconds.
