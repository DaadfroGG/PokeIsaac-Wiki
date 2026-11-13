---
title: Terrain Extender
id: b_cubresuelos
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
- label: Cross blasts
  value: 3 per direction, every 70 px (56 px up/down)
- label: Blast
  value: 46 px radius, 18 damage each
- label: Hurts you
  value: No (only the central blast does)
icon: items-ps/hold-item/terrain-extender.png
sprite: true
names:
  es:
    name: Cubresuelos
    desc: +5 Voltorbs; estallan en cruz y llegan mucho más lejos
  fr:
    name: Champ’Duit
    desc: +5 Voltorbes ; ils explosent en croix et portent bien plus loin
  de:
    name: Feldbeschichtung
    desc: +5 Voltobals; sie explodieren im Kreuz und reichen viel weiter
  it:
    name: Fissacampo
    desc: +5 Voltorb; esplodono a croce e arrivano molto più lontano
  pt:
    name: Extensor de Terreno
    desc: +5 Voltorbs; explodem em cruz e chegam muito mais longe
  ru:
    name: Расширитель местности
    desc: +5 Вольторбов; взрываются крестом и достают намного дальше
  ja:
    name: グランドコート
    desc: ビリリダマ+5個。十字に爆発し、はるかに遠くまで届く
  ko:
    name: 그라운드코트
    desc: 찌리리공 +5. 십자로 폭발하며 훨씬 멀리까지 닿는다
  zh:
    name: 大地膜
    desc: +5霹雳电球；十字形爆炸，波及范围远得多
  zt:
    name: 大地膜
    desc: +5顆霹靂電球；呈十字爆炸，範圍遠得多
---
+5 Voltorbs; they explode in a cross and reach much farther

## How it works
- A normal Voltorb (placed with the bomb key) explodes after 1.5 s in a 95 px radius for max(25, 7 × your Damage), and it also hurts you (1 heart) if you stand inside.
- With this item, each Voltorb also sets off a cross of extra blasts: 3 to the right, 3 to the left, 3 up and 3 down, one every 70 px horizontally and every 56 px vertically. The line stops at the edge of the room.
- Each extra blast has a 46 px radius and deals a flat 18 damage. They break rocks and crates and can open secret doors, but they never hurt you.
- Small Voltorbs from the [Candy Jar](b_tarro.html) do not make crosses.
- With the [Colress Machine](w_acromaquina.html), the effect also works on its rolling Voltorbs (see that page).
- With the [Colress Machine](w_acromaquina.html), every explosion of its Voltorbs also sets off four small blasts (62 px sideways, 50 px up/down, 36 px radius, 12 % of the shot's damage each).

## Stacking
- The effect is only switched on: a second copy does nothing more. Each copy still gives +5 Voltorbs.
