---
title: Rusted Sword
id: espada_oxidada
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 2
details:
- label: Range
  value: 125 px fan in front of you
- label: Damage
  value: Your Damage ×10 (at least 12)
- label: Enemy shots
  value: Cuts them
icon: items-ps/hold-item/rusted-sword.png
sprite: true
names:
  es:
    name: Espada Oxidada
    desc: Un tajo delante de ti que hace ×10 de daño y corta los disparos enemigos
  fr:
    name: Épée Rouillée
    desc: Une entaille devant vous qui inflige ×10 dégâts et coupe les tirs ennemis
  de:
    name: Rostiges Schwert
    desc: Ein Hieb vor dir, der ×10 Schaden macht und gegnerische Schüsse zerschneidet
  it:
    name: Spada rovinata
    desc: Un fendente davanti a te che infligge ×10 danni e taglia i tiri nemici
  pt:
    name: Espada Enferrujada
    desc: Um golpe à sua frente que causa ×10 de dano e corta os tiros inimigos
  ru:
    name: Ржавый меч
    desc: Удар перед тобой с уроном ×10, который рассекает вражеские выстрелы
  ja:
    name: くちたけん
    desc: 目の前を斬りつけて×10のダメージを与え、敵のショットを切る
  ko:
    name: 녹슨검
    desc: 앞에 대미지 ×10의 베기를 날려 적의 탄을 자른다
  zh:
    name: 腐朽的剑
    desc: 在你面前挥出一记伤害×10的斩击，并斩断敌人的弹
  zt:
    name: 腐朽的劍
    desc: 在面前揮出一擊，造成×10傷害並切斷敵人的彈
---
A slash in front of you that deals ×10 damage and cuts enemy shots

## How it works
- You slash in the direction you last shot: a wide fan about 125° across and 125 px long, plus anything right against you.
- Every enemy in it takes 10 times your Damage (at least 12), bosses included. The slash can be a [critical hit](../mechanics/criticos.html) and triggers your items' on-hit effects.
- Every enemy shot in the fan is destroyed, and crates and barrels just in front of you are broken.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): you slash twice.
