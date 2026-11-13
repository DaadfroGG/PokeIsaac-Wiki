---
title: Heavy Ball
id: f_peso_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
- devil
pool_weight: 2
details:
- label: Companion
  value: Magby (Fire)
- label: Orbit
  value: 80 px around you
- label: Touch damage
  value: 1.6 × companion damage, every 1/6 s
- label: Burn
  value: 1.5 s on every touch
icon: items-ps/ball/heavy.png
sprite: true
names:
  es:
    name: Peso Ball
    desc: Un Magby gira lejos de ti y quema a los enemigos que toca
  fr:
    name: Masse Ball
    desc: Un Magby gravite loin de vous et brûle les ennemis qu'il touche
  de:
    name: Schwerball
    desc: Ein Magby kreist weit von dir entfernt und verbrennt Gegner, die es berührt
  it:
    name: Peso Ball
    desc: Un Magby gira lontano da te e brucia i nemici che tocca
  pt:
    name: Bola Pesada
    desc: Um Magby gira longe de você e queima os inimigos que toca
  ru:
    name: Хевибол
    desc: Магби кружит вдали от тебя и поджигает врагов, которых касается
  ja:
    name: ヘビーボール
    desc: ブビィが離れて回り、触れた敵を燃やす
  ko:
    name: 헤비볼
    desc: 마그비가 멀리서 주위를 돌며 닿는 적에게 화상을 입힌다
  zh:
    name: 沉重球
    desc: 鸭嘴宝宝在远处绕着你旋转，灼伤碰到的敌人
  zt:
    name: 沉重球
    desc: 鴨嘴寶寶會在離你較遠處旋轉，灼傷碰到的敵人
---
A Magby orbits far from you and burns enemies it touches

{{< clip >}}

## How it works

- It does not shoot: it orbits you in a circle of 80 px, making a full turn about every 2.3 seconds. Any enemy it touches takes 1.6 × the companion damage (at least 1), at most once every 1/6 second.
- Every enemy it touches is also set on fire for 1.5 seconds. It orbits far from you, so you have to move for it to reach enemies.
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own. Several orbiters of the same kind space themselves evenly around you.
