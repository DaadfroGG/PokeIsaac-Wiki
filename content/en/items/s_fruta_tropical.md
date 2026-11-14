---
title: Fruit Bunch
id: s_fruta_tropical
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Speed +0.3
  good: true
- text: Range +80
  good: true
details:
- label: Speed
  value: '+0.3'
- label: Range
  value: +80 px
- label: Stacking
  value: Every copy adds again
icon: items-ps/curry-ingredient/fruit-bunch.png
sprite: true
names:
  es:
    name: Fruta Tropical
    desc: Velocidad + y alcance +
  fr:
    name: Fruits
    desc: Vitesse + et portée +
  de:
    name: Früchte
    desc: Tempo + und Reichweite +
  it:
    name: Frutti
    desc: Velocità + e gittata +
  pt:
    name: Cacho de Frutas
    desc: Velocidade + e alcance +
  ru:
    name: Гроздь фруктов
    desc: Скорость + и дальность +
  ja:
    name: フサパック
    desc: 移動速度+・射程+
  ko:
    name: 송이팩
    desc: 속도 +, 사거리 +
  zh:
    name: 袋装果实
    desc: 速度+，射程+
  zt:
    name: 袋裝果實
    desc: 速度+、射程+
---
Speed + and range +

## How it works
- Speed +0.3: added straight to your movement speed, with no diminishing returns. Your speed can never drop below the minimum of 1.6.
- Range +80 px: added straight to how far your shots travel, with no diminishing returns. Range can never drop below 120 px.
- **Real effect** for a typical Pokémon (4 damage, 4.3 shots/s, speed 4, range 350 px, shot speed 9, 4 hearts), first copy only: Speed +0.3: 4 → 4.3 (+8 %) · Range +80 px: 350 → 430 px (+23 %). See [Stats in practice](../mechanics/estadisticas_reales.html) for how the totals behave.

## Stacking
- Every copy adds its bonuses again, with no limit on copies. The diminishing returns described above apply to the total, not to each copy separately.
