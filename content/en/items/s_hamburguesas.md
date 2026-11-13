---
title: Precooked Burger
id: s_hamburguesas
kind: passive
category: stats
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Damage +1.5
  good: true
- text: Fire rate -
  good: false
details:
- label: Damage
  value: '+1.5'
- label: Fire rate
  value: +0.05 s between shots (worse)
- label: Stacking
  value: Every copy adds again
icon: items-ps/curry-ingredient/precooked-burger.png
sprite: true
names:
  es:
    name: Hamburguesas
    desc: Daño +1,5, cadencia -
  fr:
    name: Steak Haché
    desc: Dégâts +1,5, cadence -
  de:
    name: Frikadellen
    desc: Schaden +1,5, Feuerrate -
  it:
    name: Hamburger
    desc: Danni +1,5, cadenza -
  pt:
    name: Hambúrguer Pré-Cozido
    desc: Dano +1,5, cadência -
  ru:
    name: Бургеры
    desc: Урон +1,5, темп стрельбы -
  ja:
    name: レトルトバーグ
    desc: ダメージ+1.5、連射-
  ko:
    name: 레토르트햄버그
    desc: 대미지 +1.5, 연사 -
  zh:
    name: 即食肉排
    desc: 伤害+1.5，射速-
  zt:
    name: 即食肉排
    desc: 傷害+1.5、射速-
---
Damage +1.5, fire rate -

## How it works
- Damage +1.5: a flat bonus added to your Pokémon's base Damage. All the flat Damage from your items is added up first; the first +3 counts in full, +3 to +8 at half, +8 to +40 at a quarter and anything beyond at 5 % (see [Diminishing returns](../mechanics/rendimientos.html)).
- Fire rate penalty: lengthens the delay between two shots by 0.05 s. A slowdown is added to the total of your other fire-rate items, and a net slowdown always counts in full, never reduced.

## Stacking
- Every copy adds its bonuses again, with no limit on copies. The diminishing returns described above apply to the total, not to each copy separately.
