---
title: Wishing Piece
id: pieza_deseo
kind: active
family: core
tier: 3
pools:
- treasure
- shop
pool_weight: 2
charge: 8
details:
- label: Item
  value: 1 from the treasure room pool
- label: Price
  value: Free
- label: Charge
  value: 8 rooms
icon: items-ps/other-item/wishing-piece.png
sprite: true
names:
  es:
    name: Pieza Deseo
    desc: Aparece un objeto de la sala del tesoro
  fr:
    name: Vœu Étoile
    desc: Un objet de salle au trésor apparaît
  de:
    name: Wunschbrocken
    desc: Ein Item aus dem Schatzraum erscheint
  it:
    name: Desioblocco
    desc: Appare un oggetto della stanza del tesoro
  pt:
    name: Peça do Desejo
    desc: Aparece um item da sala do tesouro
  ru:
    name: Осколок желаний
    desc: Появляется предмет из сокровищницы
  ja:
    name: ねがいのかけら
    desc: 宝の部屋のどうぐが出現する
  ko:
    name: 소원의덩어리
    desc: 보물방 아이템이 나타난다
  zh:
    name: 许愿星块
    desc: 出现一件宝藏房的道具
  zt:
    name: 許願星塊
    desc: 出現一件寶物房間的道具
---
A treasure room item appears

## How it works
- A new pedestal appears just above you with a random item from the treasure room pool. It is free to take.
- You can use it in any room, and again every time it is recharged.
- It always goes off when you press it, even in an empty room, and uses the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two items appear.
