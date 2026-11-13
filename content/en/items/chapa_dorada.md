---
title: Gold Bottle Cap
id: chapa_dorada
kind: passive
category: stats
family: core
tier: 3
pools:
- boss
- shop
pool_weight: 2
stats:
- text: Damage +0.5
  good: true
- text: Fire rate +
  good: true
- text: Speed +0.2
  good: true
- text: Shot spd +1
  good: true
- text: Range +40
  good: true
- text: Luck +1
  good: true
details:
- label: Damage
  value: '+0.5'
- label: Fire rate
  value: +1 (0.017 s less between shots)
- label: Speed
  value: '+0.2'
- label: Shot speed
  value: '+1'
- label: Range
  value: +40 px
- label: Luck
  value: '+1'
icon: items-ps/other-item/gold-bottle-cap.png
sprite: true
names:
  es:
    name: Chapa Dorada
    desc: Todas las estadísticas mejoran un poco
  fr:
    name: Capsule d’Or
    desc: Toutes les statistiques augmentent un peu
  de:
    name: Goldkronkorken
    desc: Alle Werte verbessern sich ein wenig
  it:
    name: Tappo d’oro
    desc: Tutte le statistiche migliorano un po'
  pt:
    name: Tampinha Dourada
    desc: Todos os atributos melhoram um pouco
  ru:
    name: Золотая крышка
    desc: Все характеристики немного улучшаются
  ja:
    name: きんのおうかん
    desc: すべてのステータスが少し上がる
  ko:
    name: 금색병뚜껑
    desc: 모든 능력치가 조금 오른다
  zh:
    name: 金色王冠
    desc: 所有数据略有提升
  zt:
    name: 金色王冠
    desc: 所有能力數值都稍微提升
---
All stats improve a little

## How it works
- The +0.5 Damage is a flat bonus: it adds up with your other flat bonuses and follows the [diminishing returns](../mechanics/rendimientos.html) (in full up to +3 in total, then less and less).
- Fire rate +1: 0.017 s less between shots. Fire-rate bonuses follow the [diminishing returns](../mechanics/rendimientos.html): the first 3 points in total count in full, the next 4 at half, the rest at a quarter. You never shoot more than 12 times per second.
- Speed +0.2 has no diminishing returns. Your speed never goes below 1.6.
- Shot speed +1: your shots fly faster (they reach their range sooner). It never goes below 4.
- Range +40: your shots travel 40 px farther, with no diminishing returns.
- Luck +1: each point gives +1 % [critical hit](../mechanics/criticos.html) chance, +2 % to your type passive statuses and improves other luck-based chances. Your total Luck counts in full up to 10, then at a quarter.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Damage and Fire rate).
