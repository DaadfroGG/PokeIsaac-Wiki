---
title: Fast Ball
id: f_rapid_ball
kind: passive
category: familiar
family: familiar
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Companion
  value: Elekid (Electric)
- label: Fire interval
  value: 1.4 s
- label: Damage per beam
  value: 1.5 × companion damage (at least 2)
- label: Range
  value: Targets within 420 px
icon: items-ps/ball/fast.png
sprite: true
names:
  es:
    name: Rapid Ball
    desc: Un Elekid te acompaña y lanza láseres eléctricos que atraviesan a los enemigos
  fr:
    name: Speed Ball
    desc: Un Élekid vous accompagne et lance des lasers électriques qui transpercent les ennemis
  de:
    name: Turboball
    desc: Ein Elekid begleitet dich und feuert Elektro-Laser, die Gegner durchbohren
  it:
    name: Rapid Ball
    desc: Un Elekid ti accompagna e lancia laser elettrici che trapassano i nemici
  pt:
    name: Bola Veloz
    desc: Um Elekid te acompanha e lança lasers elétricos que atravessam os inimigos
  ru:
    name: Фастбол
    desc: Элекид следует за тобой и стреляет электрическими лазерами, пронзающими врагов
  ja:
    name: スピードボール
    desc: エレキッドがついてきて、敵を貫く電気レーザーを放つ
  ko:
    name: 스피드볼
    desc: 에레키드가 함께 다니며 적을 관통하는 전기 레이저를 쏜다
  zh:
    name: 速度球
    desc: 一只电击怪跟随你，发射能穿透敌人的电击激光
  zt:
    name: 速度球
    desc: 電擊怪會跟著你，發射能貫穿敵人的電擊雷射
---
An Elekid follows you and fires electric lasers that pierce enemies

{{< clip >}}

## How it works

- Elekid follows just behind you. Every 1.4 seconds, if an enemy is within 420 px, it fires an Electric laser in a straight line toward it.
- The laser hits every enemy along its path (it pierces), once each, for 1.5 times the companion damage (at least 2).
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Its shots are not boosted by your shot upgrades (no extra shots, no crits) and do not trigger your on-hit items.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
