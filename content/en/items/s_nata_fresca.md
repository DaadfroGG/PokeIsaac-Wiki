---
title: Fresh Cream
id: s_nata_fresca
kind: passive
category: stats
family: core
tier: 1
pools:
- boss
- shop
pool_weight: 2
stats:
- text: Hearts +1
  good: true
- text: Speed +0.3
  good: true
- text: Heals 1 heart
  good: true
details:
- label: Max health
  value: +1 heart
- label: Heal
  value: 1 heart on pickup
- label: Speed
  value: '+0.3'
- label: Stacking
  value: Every copy adds again
icon: items-ps/curry-ingredient/fresh-cream.png
sprite: true
names:
  es:
    name: Nata Fresca
    desc: Corazón +1 y velocidad +
  fr:
    name: Crème Fraîche
    desc: Cœur +1 et vitesse +
  de:
    name: Frische Sahne
    desc: Herz +1 und Tempo +
  it:
    name: Panna da cucina
    desc: Cuore +1 e velocità +
  pt:
    name: Creme Fresco
    desc: Coração +1 e velocidade +
  ru:
    name: Свежие сливки
    desc: Сердце +1 и скорость +
  ja:
    name: しんせんクリーム
    desc: ハート+1、移動速度+
  ko:
    name: 신선한크림
    desc: 하트 +1, 속도 +
  zh:
    name: 鲜鲜奶油
    desc: 心+1，速度+
  zt:
    name: 鮮鮮奶油
    desc: 愛心 +1，速度 +
---
Heart +1 and speed +

## How it works
- Max health +1 heart: raises your maximum health by 1 heart (up to the limit of 12 hearts; soul hearts are separate). It also heals 1 heart the moment you pick it up. At 12 hearts the maximum no longer grows, but you are still healed.
- Speed +0.3: added straight to your movement speed, with no diminishing returns. Your speed can never drop below the minimum of 1.6.
- **Real effect** for a typical Pokémon (4 damage, 4.3 shots/s, speed 4, range 350 px, shot speed 9, 4 hearts), first copy only: Max health +1 heart: 4 → 5 hearts · Speed +0.3: 4 → 4.3 (+8 %). See [Stats in practice](../mechanics/estadisticas_reales.html) for how the totals behave.

## Stacking
- Every copy adds its bonuses again, with no limit on copies. The diminishing returns described above apply to the total, not to each copy separately.
