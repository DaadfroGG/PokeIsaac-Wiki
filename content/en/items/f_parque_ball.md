---
title: Park Ball
id: f_parque_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Companion
  value: Porygon (Normal (random shots))
- label: Fire interval
  value: 0.53 s
- label: Damage per shot
  value: 2 + 0.4 per floor
- label: Shot type
  value: Random among all 18 types
icon: items-ps/ball/park.png
sprite: true
names:
  es:
    name: Parque Ball
    desc: Un Porygon te acompaña; cada disparo suyo es de un tipo al azar
  fr:
    name: Parc Ball
    desc: Un Porygon vous accompagne ; chacun de ses tirs est d'un type aléatoire
  de:
    name: Parkball
    desc: Ein Porygon begleitet dich; jeder seiner Schüsse hat einen zufälligen Typ
  it:
    name: Parco Ball
    desc: Un Porygon ti accompagna; ogni suo tiro è di un tipo a caso
  pt:
    name: Bola do Parque
    desc: Um Porygon te acompanha; cada tiro dele é de um tipo aleatório
  ru:
    name: Паркбол
    desc: Поригон следует за тобой; каждый его выстрел случайного типа
  ja:
    name: パークボール
    desc: ポリゴンがついてくる。ショットはそれぞれランダムなタイプ
  ko:
    name: 파크볼
    desc: 폴리곤이 함께 다닌다. 탄마다 타입이 무작위다
  zh:
    name: 公园球
    desc: 多边兽跟随你；它的每发弹都是随机属性
  zt:
    name: 公園球
    desc: 多邊獸會跟著你；它的每發彈都是隨機屬性
---
A Porygon follows you; each of its shots is a random type

{{< clip >}}

## How it works

- Porygon follows just behind you and shoots at the nearest enemy within 380 px, once every 0.53 seconds. Its shots travel up to 360 px and carry its type (Normal (random shots)).
- Each shot is a random one of the 18 types (equal chances), so it uses that type's color and the [type chart](../mechanics/tabla_tipos.html) for that shot.
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Its shots are not boosted by your shot upgrades (no extra shots, no crits) and do not trigger your on-hit items.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
