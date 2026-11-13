---
title: Ultra Ball
id: f_ultra_ball
kind: passive
category: familiar
family: familiar
tier: 3
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Companion
  value: Bronzor (Steel)
- label: Orbit
  value: 54 px around you
- label: Touch damage
  value: 0.6 × companion damage, every 1/6 s
- label: Prism
  value: Your shots through it split in two more
icon: items-ps/ball/ultra.png
sprite: true
names:
  es:
    name: Ultra Ball
    desc: Un Bronzor gira a tu alrededor; los disparos que lo atraviesan se parten en tres
  fr:
    name: Hyper Ball
    desc: Un Archéomire gravite autour de vous ; les tirs qui le traversent se divisent en trois
  de:
    name: Hyperball
    desc: Ein Bronzel kreist um dich; Schüsse, die es durchqueren, teilen sich in drei
  it:
    name: Ultra Ball
    desc: Un Bronzor gira intorno a te; i tiri che lo attraversano si dividono in tre
  pt:
    name: Ultra Bola
    desc: Um Bronzor gira ao seu redor; os tiros que o atravessam se dividem em três
  ru:
    name: Ультрабол
    desc: Бронзор кружит вокруг тебя; выстрелы, пролетающие сквозь него, делятся на три
  ja:
    name: ハイパーボール
    desc: ドーミラーが周りを回る。通過したショットは3つに分かれる
  ko:
    name: 하이퍼볼
    desc: 동미러가 주위를 돈다. 동미러를 지나는 탄은 셋으로 나뉜다
  zh:
    name: 高级球
    desc: 一只铜镜怪绕着你转；穿过它的弹会分裂成三发
  zt:
    name: 高級球
    desc: 銅鏡怪會繞著你旋轉；穿過它的彈會分裂成三發
---
A Bronzor orbits you; shots passing through it split into three

{{< clip >}}

## How it works

- It does not shoot: it orbits you in a circle of 54 px, making a full turn about every 2.1 seconds. Any enemy it touches takes 0.6 × the companion damage (at least 1), at most once every 1/6 second.
- Prism: when one of your shots passes within 16 px of it, two extra shots (about 20° to each side) are created, so one shot becomes three. Each extra shot deals 60 % of the original's damage, is a bit smaller, and has the same type but no other effects.
- It works once per shot, only on your main shots (not on split or other child shots).
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own. Several orbiters of the same kind space themselves evenly around you.
