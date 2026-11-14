---
title: Genius Feather
id: s_pluma_intelecto
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Range +150
  good: true
details:
- label: Range
  value: +150 px
- label: Stacking
  value: Every copy adds again
icon: items-ps/medicine/genius-wing.png
sprite: true
names:
  es:
    name: Pluma Intelecto
    desc: Alcance ++
  fr:
    name: Plume Esprit
    desc: Portée ++
  de:
    name: Geniefeder
    desc: Reichweite ++
  it:
    name: Piumingegno
    desc: Gittata ++
  pt:
    name: Pluma do Intelecto
    desc: Alcance ++
  ru:
    name: Перо интеллекта
    desc: Дальность ++
  ja:
    name: ちりょくのハネ
    desc: 射程++
  ko:
    name: 지력깃털
    desc: 사거리 ++
  zh:
    name: 智力之羽
    desc: 射程++
  zt:
    name: 智力之羽
    desc: 射程++
---
Range ++

## How it works
- Range +150 px: added straight to how far your shots travel, with no diminishing returns. Range can never drop below 120 px.
- **Real effect** for a typical Pokémon (4 damage, 4.3 shots/s, speed 4, range 350 px, shot speed 9, 4 hearts), first copy only: Range +150 px: 350 → 500 px (+43 %). See [Stats in practice](../mechanics/estadisticas_reales.html) for how the totals behave.

## Stacking
- Every copy adds its bonuses again, with no limit on copies. The diminishing returns described above apply to the total, not to each copy separately.
