---
title: Strange Ball
id: f_extrana_ball
kind: passive
category: familiar
family: familiar
tier: 1
pools:
- treasure
- devil
pool_weight: 2
details:
- label: Companion
  value: Duskull (Ghost)
- label: Fire interval
  value: 0.57 s
- label: Damage per shot
  value: 2 + 0.4 per floor
- label: Shots
  value: Pass through rocks
icon: items-ps/ball/strange.png
sprite: true
names:
  es:
    name: Extraña Ball
    desc: Un Duskull te acompaña; sus disparos atraviesan las rocas
  fr:
    name: Étrange Ball
    desc: Un Skelénox vous accompagne ; ses tirs traversent les rochers
  de:
    name: Rätselball
    desc: Ein Zwirrlicht begleitet dich; seine Schüsse durchdringen Felsen
  it:
    name: Strange Ball
    desc: Un Duskull ti accompagna; i suoi tiri attraversano i massi
  pt:
    name: Strange Ball
    desc: Um Duskull te acompanha; os tiros dele atravessam as rochas
  ru:
    name: Стрейнджбол
    desc: Даскулл следует за тобой; его выстрелы проходят сквозь валуны
  ja:
    name: ストレンジボール
    desc: ヨマワルがついてくる。そのショットは岩を貫通する
  ko:
    name: 스트레인지볼
    desc: 해골몽이 함께 다닌다. 탄이 바위를 통과한다
  zh:
    name: 奇异球
    desc: 一只夜巡灵跟随你；它的弹可穿过石块
  zt:
    name: 奇異球
    desc: 夜巡靈會跟著你；它的彈會穿過岩石
---
A Duskull follows you; its shots pass through rocks

{{< clip >}}

## How it works

- Duskull follows just behind you and shoots at the nearest enemy within 380 px, once every 0.57 seconds. Its shots travel up to 360 px and carry its type (Ghost).
- Its shots pass through rocks and obstacles.
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Its shots are not boosted by your shot upgrades (no extra shots, no crits) and do not trigger your on-hit items.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
