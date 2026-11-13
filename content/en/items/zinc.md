---
title: Zinc
id: zinc
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Damage +0.4
  good: true
- text: Fire rate +
  good: true
details:
- label: Damage
  value: '+0.4'
- label: Fire rate
  value: −0.02 s between shots
- label: Stacking
  value: Every copy adds again
icon: items/zinc.png
sprite: true
names:
  es:
    name: Zinc
    desc: Daño + y cadencia +
  fr:
    name: Zinc
    desc: Dégâts + et cadence +
  de:
    name: Zink
    desc: Schaden + und Feuerrate +
  it:
    name: Zinco
    desc: Danni + e cadenza +
  pt:
    name: Zinco
    desc: Dano + e cadência +
  ru:
    name: Цинк
    desc: Урон + и темп стрельбы +
  ja:
    name: キトサン
    desc: ダメージ+、連射+
  ko:
    name: 키토산
    desc: 대미지 +, 연사 +
  zh:
    name: 特防增强剂
    desc: 伤害+，射速+
  zt:
    name: 特防增強劑
    desc: 傷害+、射速+
---
Damage + and fire rate +

## How it works
- Damage +0.4: a flat bonus added to your Pokémon's base Damage. All the flat Damage from your items is added up first; the first +3 counts in full, +3 to +8 at half, +8 to +40 at a quarter and anything beyond at 5 % (see [Diminishing returns](../mechanics/rendimientos.html)).
- Fire rate: shortens the delay between two shots by 0.02 s. The fire-rate bonuses of all your items are added up: the first 3 points count in full, the next 4 at half and the rest at a quarter. Whatever you do, you can never shoot more than 12 times per second.

## Stacking
- Every copy adds its bonuses again, with no limit on copies. The diminishing returns described above apply to the total, not to each copy separately.
