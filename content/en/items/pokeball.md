---
title: Poké Ball
id: pokeball
kind: active
family: core
tier: 1
pools:
- treasure
- shop
charge: 4
details:
- label: Charge
  value: 4 rooms
- label: Target
  value: Non-boss enemy at 40 % health or less
- label: Range
  value: 220 px
- label: Companion
  value: Permanent; damage 2 + 0.4 per floor passed, like every companion
icon: items/poke-ball.png
sprite: true
names:
  es:
    name: Poké Ball
    desc: 'Captura un enemigo débil: te acompañará'
  fr:
    name: Poké Ball
    desc: 'Capture un ennemi affaibli : il vous accompagnera'
  de:
    name: Pokéball
    desc: 'Fängt einen schwachen Gegner: Er begleitet dich'
  it:
    name: Poké Ball
    desc: 'Cattura un nemico debole: ti accompagnerà'
  pt:
    name: Poké Bola
    desc: 'Captura um inimigo fraco: ele acompanhará você'
  ru:
    name: Покебол
    desc: 'Ловит ослабленного врага: он пойдет с тобой'
  ja:
    name: モンスターボール
    desc: 弱った敵を捕まえる。なかまになってついてくる
  ko:
    name: 몬스터볼
    desc: '약해진 적을 포획한다: 동료가 된다'
  zh:
    name: 精灵球
    desc: 捕获一个虚弱的敌人：它会跟随你
  zt:
    name: 精靈球
    desc: 捕捉一個虛弱的敵人：牠會跟著你
---
Captures a weak enemy: it will follow you

## How it works
- Charge: 4 rooms. Every room you clear gives 1 charge.
- It captures the nearest enemy within 220 px that is not a boss and has 40 % of its max health or less. If there is no such enemy, nothing happens and no charge is spent.
- It can't be used if your [companions](../mechanics/companeros.html) are already at their limit.
- The captured enemy disappears and joins you as a permanent companion of its own species. It keeps shooting for you for the rest of the run, with the attack style of that species.
- The companion deals the same damage as every other companion: 2, plus 0.4 for every floor already passed (2 on the first floor, 5.6 on floor 10). It keeps growing as you go down, whatever floor you caught it on (see [Companions](../mechanics/companeros.html)).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With a [Cell Battery](d_pila.html) the item can store twice its charge.
