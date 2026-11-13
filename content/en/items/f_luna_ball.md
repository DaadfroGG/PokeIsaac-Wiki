---
title: Moon Ball
id: f_luna_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Companion
  value: Cleffa (Fairy)
- label: Orbit
  value: 38 px around you
- label: Touch damage
  value: 0.8 × companion damage, every 1/6 s
- label: Shield
  value: Destroys enemy shots it touches
icon: items-ps/ball/moon.png
sprite: true
names:
  es:
    name: Luna Ball
    desc: Un Cleffa gira a tu alrededor, para los disparos enemigos y hiere a quien toca
  fr:
    name: Lune Ball
    desc: Un Mélo gravite autour de vous, bloque les tirs ennemis et blesse ce qu'il touche
  de:
    name: Mondball
    desc: Ein Pii kreist um dich, hält gegnerische Schüsse auf und verletzt, was es berührt
  it:
    name: Luna Ball
    desc: Un Cleffa gira intorno a te, ferma i tiri nemici e ferisce chi tocca
  pt:
    name: Moon Ball
    desc: Um Cleffa gira ao seu redor, bloqueia os tiros inimigos e fere o que tocar
  ru:
    name: Мунбол
    desc: Клеффа кружит вокруг тебя, блокирует вражеские выстрелы и ранит всех, кого касается
  ja:
    name: ムーンボール
    desc: ピィが周りを回り、敵のショットを止め、触れたものにダメージを与える
  ko:
    name: 문볼
    desc: 삐가 주위를 돌며 적 탄을 막고 닿는 적에게 피해를 준다
  zh:
    name: 月亮球
    desc: 一只皮宝宝绕着你转，可挡下敌人的弹并伤害碰到的敌人
  zt:
    name: 月亮球
    desc: 皮寶寶會繞著你旋轉，擋下敵方的彈並傷害碰到的對象
---
A Cleffa orbits you, blocks enemy shots and hurts whatever it touches

{{< clip >}}

## How it works

- It does not shoot: it orbits you in a circle of 38 px, making a full turn about every 1.5 seconds. Any enemy it touches takes 0.8 × the companion damage (at least 1), at most once every 1/6 second.
- It blocks enemy shots: any enemy projectile that comes within a few pixels of it is destroyed. It can only protect the side it happens to be on.
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own. Several orbiters of the same kind space themselves evenly around you.
