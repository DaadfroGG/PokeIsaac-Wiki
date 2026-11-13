---
title: Bicycle
id: bicicleta
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Duration
  value: 6 s
- label: Speed
  value: '+2.2'
icon: items-ps/key-item/bicycle.png
sprite: true
names:
  es:
    name: Bicicleta
    desc: Velocidad muy alta durante 6 segundos
  fr:
    name: Bicyclette
    desc: Vitesse très élevée pendant 6 secondes
  de:
    name: Fahrrad
    desc: Sehr hohes Tempo für 6 Sekunden
  it:
    name: Bicicletta
    desc: Velocità altissima per 6 secondi
  pt:
    name: Bicicleta
    desc: Velocidade muito alta por 6 segundos
  ru:
    name: Велосипед
    desc: Очень высокая скорость на 6 секунд
  ja:
    name: じてんしゃ
    desc: 6秒間、移動速度が大きく上がる
  ko:
    name: 자전거
    desc: 6초 동안 속도가 매우 빨라진다
  zh:
    name: 自行车
    desc: 6秒内速度极快
  zt:
    name: 自行車
    desc: 6秒內速度極快
---
Very high speed for 6 seconds

## How it works
- For 6 seconds you get +2.2 Speed, a very large boost.
- Nothing else changes: you can still be hit as usual.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: the timer just restarts at 6 seconds.
