---
title: Candy Jar
id: b_tarro
kind: passive
category: voltorb
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: +5 Voltorb
  good: true
details:
- label: Voltorbs
  value: '+5'
- label: Small Voltorbs
  value: 4 per explosion
- label: Small blast
  value: 60 px radius, ×0.55 damage
- label: Delay
  value: 0.4 to 0.6 s after the main blast
- label: Hurts you
  value: 'Yes'
icon: items-ps/storage/candy-jar.png
sprite: true
names:
  es:
    name: Tarro de Caramelos
    desc: +5 Voltorbs; al estallar, se reparten en cuatro Voltorbs pequeños
  fr:
    name: Bonbonnière
    desc: +5 Voltorbes ; en explosant, ils se divisent en quatre petits Voltorbes
  de:
    name: Bonbonglas
    desc: +5 Voltobals; beim Explodieren teilen sie sich in vier kleine Voltobals
  it:
    name: Portacaramelle
    desc: +5 Voltorb; esplodendo, si dividono in quattro Voltorb piccoli
  pt:
    name: Pote de Doces
    desc: +5 Voltorbs; ao explodir, se dividem em quatro Voltorbs pequenos
  ru:
    name: Банка конфет
    desc: +5 Вольторбов; при взрыве распадаются на четырех маленьких Вольторбов
  ja:
    name: アメボトル
    desc: ビリリダマ+5個。爆発すると小さなビリリダマ4個に分かれる
  ko:
    name: 사탕보틀
    desc: 찌리리공 +5. 터지면 작은 찌리리공 4개로 나뉜다
  zh:
    name: 糖果罐
    desc: +5霹雳电球；爆炸时分裂成四个小霹雳电球
  zt:
    name: 糖果罐
    desc: +5顆霹靂電球；爆炸時分裂成四顆小霹靂電球
---
+5 Voltorbs; when they explode, they split into four small Voltorbs

## How it works
- A normal Voltorb (placed with the bomb key) explodes after 1.5 s in a 95 px radius for max(25, 7 × your Damage), and it also hurts you (1 heart) if you stand inside.
- With this item, each Voltorb you place releases 4 small Voltorbs around it when it explodes (about 56 px sideways, 44 px up/down). They explode 0.43, 0.5, 0.57 and 0.63 s later with a 60 px radius and ×0.55 of the normal Voltorb damage. They hurt you if you are in range.
- Small Voltorbs cannot be placed in rocks or outside the room, and they do not split again or trigger the other Voltorb items (cross, beams, fire, drops...), except that the Poké Toy makes them chase enemies.
- With the [Colress Machine](w_acromaquina.html), every explosion of its Voltorbs sets off two small blasts (±44 px, 34 px radius, 35 % of the shot's damage) that never hurt you.

## Stacking
- The effect is only switched on: a second copy does nothing more. Each copy still gives +5 Voltorbs.
