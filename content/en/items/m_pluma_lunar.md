---
title: Lunar Wing (Module)
id: m_pluma_lunar
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Range +80
  good: true
details:
- label: Range
  value: '+80'
- label: Orbit
  value: About 0.5 s around you
- label: Launch
  value: Toward your aim, up to 260 px ahead
icon: items-ps/key-item/lunar-wing.png
sprite: true
names:
  es:
    name: Pluma Lunar
    desc: Tus disparos dan una vuelta a tu alrededor como lunas y luego salen hacia donde apuntas
  fr:
    name: Lun’Aile
    desc: Vos tirs tournent autour de vous comme des lunes puis partent là où vous visez
  de:
    name: Lunarfeder
    desc: Deine Schüsse kreisen wie Monde um dich und fliegen dann dorthin, wohin du zielst
  it:
    name: Alalunare
    desc: I tuoi tiri fanno un giro intorno a te come lune e poi partono dove mira
  pt:
    name: Pluma Lunar
    desc: Seus tiros dão uma volta ao seu redor como luas e depois saem para onde você mira
  ru:
    name: Лунное перо
    desc: Твои выстрелы делают круг вокруг тебя, как луны, а затем летят туда, куда ты целишься
  ja:
    name: みかづきのはね
    desc: ショットが月のようにあなたの周りを一周してから、狙った方向へ飛ぶ
  ko:
    name: 초승달깃털
    desc: 탄이 달처럼 내 주위를 한 바퀴 돌고 조준한 방향으로 날아간다
  zh:
    name: 新月之羽
    desc: 你的弹先像卫星一样绕你转一圈，然后飞向你瞄准的方向
  zt:
    name: 新月之羽
    desc: 你的彈會像衛星一樣繞著你轉一圈，然後飛向你瞄準的方向
---
Your shots circle around you like moons and then fly where you aim

{{< clip >}}

## How it works
- Each shot first circles around you like a moon, spiralling outward from 26 to 60 px, then after about 0.5 s flies off toward where you are aiming.
- Consecutive shots circle in opposite directions. Once launched, a shot curves toward an enemy within 95 px if it is far off its path.
- Orbiting shots disappear if they touch a rock, unless you are [Ghost-type](../types/ghost.html).

## Stacking
- The orbit does not change; +80 Range is added for each copy.
