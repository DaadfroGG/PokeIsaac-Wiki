---
title: Mixed Mushrooms
id: s_setas
kind: passive
category: stats
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Damage +0.7
  good: true
- text: Hearts +1
  good: true
- text: Speed -0.2
  good: false
- text: Heals 1 heart
  good: true
details:
- label: Damage
  value: '+0.7'
- label: Max health
  value: +1 heart
- label: Heal
  value: 1 heart on pickup
- label: Speed
  value: −0.2
- label: Stacking
  value: Every copy adds again
icon: items-ps/curry-ingredient/mixed-mushrooms.png
sprite: true
names:
  es:
    name: Setas
    desc: Daño +0,7 y corazón +1, velocidad -
  fr:
    name: Champignons
    desc: Dégâts +0,7 et cœur +1, vitesse -
  de:
    name: Pilzmix
    desc: Schaden +0,7 und Herz +1, Tempo -
  it:
    name: Funghi
    desc: Danni +0,7 e cuore +1, velocità -
  pt:
    name: Cogumelos Variados
    desc: Dano +0,7 e coração +1, velocidade -
  ru:
    name: Грибное ассорти
    desc: Урон +0,7 и сердце +1, скорость -
  ja:
    name: キノコパック
    desc: ダメージ+0.7とハート+1、移動速度-
  ko:
    name: 버섯팩
    desc: 대미지 +0.7, 하트 +1, 속도 -
  zh:
    name: 袋装蕈菇
    desc: 伤害+0.7，心+1，速度-
  zt:
    name: 袋裝蕈菇
    desc: 傷害+0.7、愛心+1，速度下降
---
Damage +0.7 and heart +1, speed -

## How it works
- Damage +0.7: a flat bonus added to your Pokémon's base Damage. All the flat Damage from your items is added up first; the first +3 counts in full, +3 to +8 at half, +8 to +40 at a quarter and anything beyond at 5 % (see [Diminishing returns](../mechanics/rendimientos.html)).
- Max health +1 heart: raises your maximum health by 1 heart (up to the limit of 12 hearts; soul hearts are separate). It also heals 1 heart the moment you pick it up. At 12 hearts the maximum no longer grows, but you are still healed.
- Speed −0.2: subtracted from your movement speed in full. Your speed can never drop below the minimum of 1.6.

## Stacking
- Every copy adds its bonuses again, with no limit on copies. The diminishing returns described above apply to the total, not to each copy separately.
