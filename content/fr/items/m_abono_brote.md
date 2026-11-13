---
title: Fertiglu
id: m_abono_brote
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Portée +60
  good: true
details:
- label: Portée
  value: '+60'
- label: Rebonds
  value: +1 par exemplaire
- label: Rebondit sur
  value: Murs, rochers et obstacles
icon: items-ps/mulch/gooey.png
sprite: true
names:
  en:
    name: Gooey Mulch
    desc: Your shots bounce off walls and rocks
  es:
    name: Abono Brote
    desc: Tus disparos rebotan en las paredes y rocas
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
Vos tirs rebondissent sur les murs et les rochers

{{< clip >}}

## Fonctionnement
- Chacun de vos tirs peut rebondir une fois sur un mur, un rocher ou un autre obstacle au lieu de disparaître. Il est réfléchi et continue avec le reste de sa portée.
- Un rebond n'inflige rien et n'arrête rien en lui-même ; il garde simplement le tir en vie. Avec le [Ticketaurora](m_ori_ticket.html), un tir rebondit d'abord et ne traverse que lorsqu'il n'a plus de rebonds.

## Cumul
- Chaque exemplaire ajoute un rebond de plus et +60 de Portée.
