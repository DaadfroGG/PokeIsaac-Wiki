---
title: Gooey Mulch
id: m_abono_brote
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
- label: Bounces
  value: +1 per copy
- label: Bounces off
  value: Walls, rocks and obstacles
icon: items-ps/mulch/gooey.png
sprite: true
names:
  es:
    name: Abono Brote
    desc: Tus disparos rebotan en las paredes y rocas
  fr:
    name: Fertiglu
    desc: Vos tirs rebondissent sur les murs et les rochers
  de:
    name: Neumulch
    desc: Deine Schüsse prallen von Wänden und Felsen ab
  it:
    name: Fertilcolla
    desc: I tuoi tiri rimbalzano sui muri e sui massi
  pt:
    name: Adubo Pegajoso
    desc: Seus tiros ricocheteiam nas paredes e rochas
  ru:
    name: Липкая мульча
    desc: Твои выстрелы отскакивают от стен и валунов
  ja:
    name: ねばねばこやし
    desc: ショットが壁や岩で跳ね返る
  ko:
    name: 끈적끈적비료
    desc: 탄이 벽과 바위에 튕긴다
  zh:
    name: 粘粘肥
    desc: 你的弹会在墙壁和石块上反弹
  zt:
    name: 黏黏肥
    desc: 你的彈會在牆壁和岩石上反彈
---
Your shots bounce off walls and rocks

{{< clip >}}

## How it works
- Each of your shots can bounce once off a wall, a rock or another obstacle instead of disappearing. It is reflected and keeps flying with the rest of its range.
- A bounce does not damage or stop anything by itself; it just keeps the shot alive. With [AuroraTicket](m_ori_ticket.html), a shot bounces first and only wraps when it has no bounces left.

## Stacking
- Each copy adds one more bounce and +60 Range.
