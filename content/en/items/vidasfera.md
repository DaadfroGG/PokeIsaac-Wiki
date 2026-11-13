---
title: Life Orb
id: vidasfera
kind: passive
category: stats
family: core
tier: 3
pools:
- boss
- devil
pool_weight: 2
stats:
- text: Damage +1.8
  good: true
- text: Luck -2
  good: false
details:
- label: Damage
  value: '+1.8'
- label: Luck
  value: −2
- label: Stacking
  value: Every copy adds again
icon: items/life-orb.png
sprite: true
names:
  es:
    name: Vidasfera
    desc: Daño +1.8, suerte -2
  fr:
    name: Orbe Vie
    desc: Dégâts +1,8, chance -2
  de:
    name: Leben-Orb
    desc: Schaden +1,8, Glück -2
  it:
    name: Assorbisfera
    desc: Danni +1,8, fortuna -2
  pt:
    name: Orbe da Vida
    desc: Dano +1,8, sorte -2
  ru:
    name: Сфера жизни
    desc: Урон +1,8, удача -2
  ja:
    name: いのちのたま
    desc: ダメージ+1.8、運-2
  ko:
    name: 생명의구슬
    desc: 대미지 +1.8, 행운 -2
  zh:
    name: 生命宝珠
    desc: 伤害+1.8，幸运-2
  zt:
    name: 生命寶珠
    desc: 傷害+1.8、幸運-2
---
Damage +1.8, luck -2

## How it works
- Damage +1.8: a flat bonus added to your Pokémon's base Damage. All the flat Damage from your items is added up first; the first +3 counts in full, +3 to +8 at half, +8 to +40 at a quarter and anything beyond at 5 % (see [Diminishing returns](../mechanics/rendimientos.html)).
- Luck −2: lowers your Luck, so enemy drops, room-clear rewards, critical hits and type-passive status effects all become less likely. A Luck penalty counts in full. The same −1 % crit / −2 % status per point applies, and enemy drop chances stop getting worse at −5.

## Stacking
- Every copy adds its bonuses again, with no limit on copies. The diminishing returns described above apply to the total, not to each copy separately.
