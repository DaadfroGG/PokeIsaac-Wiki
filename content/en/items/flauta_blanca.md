---
title: White Flute
id: flauta_blanca
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Pulls
  value: Every free pickup on the floor
- label: Not pulled
  value: Shop items, pedestal items
icon: items-ps/flute/white.png
sprite: true
names:
  es:
    name: Flauta Blanca
    desc: Atrae hacia ti todo lo que hay en el suelo de la sala
  fr:
    name: Flûte Blanche
    desc: Attire vers vous tout ce qui se trouve au sol dans la salle
  de:
    name: Weiße Flöte
    desc: Zieht alles, was auf dem Raumboden liegt, zu dir
  it:
    name: Flauto Bianco
    desc: Attira a te tutto ciò che c'è sul suolo della stanza
  pt:
    name: Flauta Branca
    desc: Atrai para você tudo o que há no chão da sala
  ru:
    name: Белая флейта
    desc: Притягивает к тебе все, что лежит на полу комнаты
  ja:
    name: しろいビードロ
    desc: 部屋の床にあるものをすべて引き寄せる
  ko:
    name: 하양비드로
    desc: 방 바닥에 있는 모든 것을 끌어당긴다
  zh:
    name: 白色玻璃哨
    desc: 将房间地面上的一切吸向你
  zt:
    name: 白色玻璃哨
    desc: 將房間地上的所有東西吸向你
---
Pulls everything on the room's floor toward you

## How it works
- Every free pickup lying on the floor of the room (coins, hearts, keys, bombs, chests...) is moved straight to your feet.
- Shop items and anything with a price stay where they are. Items on pedestals are not pickups and don't move.
- If there is nothing to affect, nothing happens and you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more.
