---
title: Courage Candy
id: s_caramelo_mente
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Fire rate +
  good: true
- text: Shot spd +2
  good: true
details:
- label: Fire rate
  value: +2 (0.033 s less between shots)
- label: Shot speed
  value: '+2'
icon: items-ps/av-candy/courage.png
sprite: true
names:
  es:
    name: Caramelo Mente
    desc: Cadencia + y disparos más rápidos
  fr:
    name: Bonbon Mental S
    desc: Cadence + et tirs plus rapides
  de:
    name: Mentalbonbon
    desc: Feuerrate + und schnellere Schüsse
  it:
    name: Caramella intuito S
    desc: Cadenza + e tiri più veloci
  pt:
    name: Doce Coragem
    desc: Cadência + e tiros mais rápidos
  ru:
    name: Конфета духа
    desc: Темп стрельбы + и более быстрые выстрелы
  ja:
    name: こころのアメ
    desc: 連射速度+、弾速アップ
  ko:
    name: 마음의사탕
    desc: 연사 + 및 탄속 증가
  zh:
    name: 心灵糖果
    desc: 射速+，弹速更快
  zt:
    name: 心靈糖果
    desc: 射速 + 且彈速更快
---
Fire rate + and faster shots

## How it works
- Fire rate +2: 0.033 s less between shots. Fire-rate bonuses follow the [diminishing returns](../mechanics/rendimientos.html): the first 3 points in total count in full, the next 4 at half, the rest at a quarter. You never shoot more than 12 times per second.
- Shot speed +2: your shots fly faster (they reach their range sooner). It never goes below 4.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Fire rate).
