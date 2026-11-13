---
title: Bottle Cap
id: chapa_plateada
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Chance
  value: 1 in 6 each (about 17 %)
- label: Possible bonuses
  value: Damage +1.5 · Fire rate ++ · Speed +0.7 · Range +160 · Luck +3 · Shot speed +3
- label: Fire rate bonus
  value: −0.07 s between shots
icon: items-ps/other-item/bottle-cap.png
sprite: true
names:
  es:
    name: Chapa Plateada
    desc: Una estadística al azar mejora mucho
  fr:
    name: Capsule d’Argent
    desc: Une statistique aléatoire s'améliore beaucoup
  de:
    name: Silberkronkorken
    desc: Ein zufälliger Wert verbessert sich stark
  it:
    name: Tappo d’argento
    desc: Una statistica a caso migliora molto
  pt:
    name: Tampinha
    desc: Um atributo aleatório melhora muito
  ru:
    name: Серебряная крышка
    desc: Случайная характеристика сильно растет
  ja:
    name: ぎんのおうかん
    desc: ランダムなステータスが大きく上がる
  ko:
    name: 은색병뚜껑
    desc: 무작위 능력치 하나가 크게 오른다
  zh:
    name: 银色王冠
    desc: 随机一项数据大幅提升
  zt:
    name: 銀色王冠
    desc: 隨機一項能力數值大幅提升
---
One random stat improves a lot

## How it works
- At the moment you pick it up, the game draws one of six stat bonuses at random, each with the same chance (1 in 6), and applies it permanently. A message tells you which one you got.
- The six possible bonuses: Damage +1.5, Fire rate ++ (shots about 0.07 s closer together), Speed +0.7, Range +160 px, Luck +3, Shot speed +3.
- The bonus is a normal stat bonus: Damage follows the [diminishing returns](../mechanics/rendimientos.html) on flat Damage, fire rate and Luck follow theirs, while Speed, Range and Shot speed are added as they are.
- The draw is made once, when you pick the item up, and the result does not change afterwards.

## Stacking
- Each copy draws its own bonus when you pick it up, so two copies can give two different bonuses or the same one twice.
