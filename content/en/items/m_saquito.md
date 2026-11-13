---
title: Sachet
id: m_saquito
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Range +60
  good: true
details:
- label: Range
  value: '+60'
- label: Spiral
  value: 22 px wide loops, one every ½ s
- label: Forward speed
  value: 80 % of your shot speed
- label: Rocks
  value: Only Ghost-type Pokémon pass through them
icon: items-ps/evo-item/sachet.png
sprite: true
names:
  es:
    name: Saquito Fragante
    desc: Tus disparos avanzan en espiral
  fr:
    name: Sachet Senteur
    desc: Vos tirs avancent en spirale
  de:
    name: Duftbeutel
    desc: Deine Schüsse bewegen sich spiralförmig
  it:
    name: Bustina aromi
    desc: I tuoi tiri avanzano a spirale
  pt:
    name: Sachê Perfumado
    desc: Seus tiros avançam em espiral
  ru:
    name: Саше
    desc: Твои выстрелы летят по спирали
  ja:
    name: においぶくろ
    desc: ショットが渦を巻いて進む
  ko:
    name: 향기주머니
    desc: 탄이 나선형으로 나아간다
  zh:
    name: 香袋
    desc: 你的弹呈螺旋前进
  zt:
    name: 香袋
    desc: 你的彈會呈螺旋前進
---
Your shots move in a spiral

## How it works
- Each shot circles around a line going where you aimed: loops of 22 px around that line, about two loops per second. One shot turns clockwise, the next counterclockwise.
- The line moves forward at 80 % of your shot speed, so your shots take longer to reach their range. The +60 Range makes up for part of that.
- Homing shots steer their spiral toward the nearest enemy.
- The spiral shots only go through rocks if your Pokémon is Ghost-type (like all shots); otherwise a rock stops them.
- Spiral shots are not turned by [TM Psychic](mt_psiquico.html), don't snap with the [Psychic Seed](m_semilla_psique.html) and don't bounce with the [Smooth Rock](m_roca_suave.html).

## Stacking
- The spiral doesn't change with a second copy. The +60 Range is added again.
