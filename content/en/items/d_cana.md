---
title: Fishing Rod
id: d_cana
kind: passive
category: voltorb
family: defense
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
- label: Launch
  value: In your last firing direction, 420 px/s
- label: Fuse
  value: 1.3 s (instead of 1.5 s)
- label: Explodes
  value: On hitting a wall/rock or coming within 14 px of an enemy
icon: items-ps/key-item/fishing-rod.png
sprite: true
names:
  es:
    name: Caña
    desc: +5 Voltorbs; salen lanzados hacia donde disparaste por última vez y estallan al chocar
  fr:
    name: Canne à Pêche
    desc: +5 Voltorbes ; ils sont lancés là où vous avez tiré en dernier et explosent à l'impact
  de:
    name: Angel
    desc: +5 Voltobals; sie fliegen dorthin, wohin du zuletzt geschossen hast, und explodieren beim Aufprall
  it:
    name: Amo
    desc: +5 Voltorb; partono verso dove hai sparato per ultimo ed esplodono all'impatto
  pt:
    name: Vara de Pescar
    desc: +5 Voltorbs; são lançados para onde você atirou por último e explodem ao colidir
  ru:
    name: Удочка
    desc: +5 Вольторбов; летят туда, куда ты стрелял в последний раз, и взрываются при столкновении
  ja:
    name: つりざお
    desc: ビリリダマ+5個。最後に撃った方向へ飛び出し、ぶつかると爆発する
  ko:
    name: 낚싯대
    desc: 찌리리공 +5. 마지막으로 쏜 방향으로 날아가 부딪히면 폭발한다
  zh:
    name: 钓竿
    desc: +5霹雳电球；朝你上次射击的方向射出，碰撞时爆炸
  zt:
    name: 釣竿
    desc: +5顆霹靂電球；朝你上次射擊的方向射出，撞擊時爆炸
---
+5 Voltorbs; they launch toward where you last fired and explode on impact

## How it works
- A normal Voltorb (placed with the bomb key) explodes after 1.5 s in a 95 px radius for max(25, 7 × your Damage), and it also hurts you (1 heart) if you stand inside.
- With this item, a placed Voltorb is launched in the direction you last fired (down if you have not fired yet) at about 420 px/s, with a 1.3 s fuse. It explodes as soon as it hits a wall or rock, or comes within 14 px of an enemy, otherwise at the end of the fuse (about 560 px of travel at most).
- With the [Colress Machine](w_acromaquina.html), its rolling Voltorbs are faster (×0.85 of shot speed instead of ×0.6) and have a longer fuse (1.75 s instead of 1.33 s), so they roll farther.

## Stacking
- The effect is only switched on: a second copy does nothing more. Each copy still gives +5 Voltorbs.
