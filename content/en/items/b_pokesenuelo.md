---
title: Poké Toy
id: b_pokesenuelo
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
- label: Homing range
  value: 420 px
- label: Roll speed
  value: 108 px/s
- label: Explodes
  value: On touching an enemy
icon: items-ps/other-item/poke-toy.png
sprite: true
names:
  es:
    name: Pokéseñuelo
    desc: +5 Voltorbs; ruedan hacia el enemigo más cercano y estallan al tocarlo
  fr:
    name: Poké Plumet
    desc: +5 Voltorbes ; ils roulent vers l'ennemi le plus proche et explosent à son contact
  de:
    name: Pokéwedel
    desc: +5 Voltobals; sie rollen zum nächsten Gegner und explodieren bei Berührung
  it:
    name: Pokégingillo
    desc: +5 Voltorb; rotolano verso il nemico più vicino ed esplodono al contatto
  pt:
    name: Poké Isca
    desc: +5 Voltorbs; rolam até o inimigo mais próximo e explodem ao tocá-lo
  ru:
    name: Покеигрушка
    desc: +5 Вольторбов; катятся к ближайшему врагу и взрываются при касании
  ja:
    name: ポケじゃらし
    desc: ビリリダマ+5個。いちばん近い敵に向かって転がり、触れると爆発する
  ko:
    name: 포켓풀
    desc: 찌리리공 +5. 가장 가까운 적에게 굴러가 닿으면 폭발한다
  zh:
    name: 宝可尾草
    desc: +5霹雳电球；滚向最近的敌人，接触即爆炸
  zt:
    name: 寶可尾草
    desc: +5顆霹靂電球；滾向最近的敵人，接觸即爆炸
---
+5 Voltorbs; they roll toward the nearest enemy and explode on contact

## How it works
- A normal Voltorb (placed with the bomb key) explodes after 1.5 s in a 95 px radius for max(25, 7 × your Damage), and it also hurts you (1 heart) if you stand inside.
- With this item, a placed Voltorb rolls toward the nearest enemy within 420 px at about 108 px/s (it cannot go through rocks) and explodes the moment it touches it, without waiting for the fuse.
- If no enemy is in range it stays where it was placed and explodes at the end of the 1.5 s fuse. It also works on the small Voltorbs of the [Candy Jar](b_tarro.html).
- With the [Colress Machine](w_acromaquina.html), its rolling Voltorbs also steer toward enemies like homing shots.

## Stacking
- The effect is only switched on: a second copy does nothing more. Each copy still gives +5 Voltorbs.
