---
title: Explorer Kit
id: kit_explorador
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Breaks
  value: Every rock, crate and barrel in the room
- label: Needs
  value: At least one rock
icon: items-ps/key-item/explorer-kit.png
sprite: true
names:
  es:
    name: Kit Explorador
    desc: Rompe todas las rocas, cajas y barriles de la sala
  fr:
    name: Explorakit
    desc: Brise tous les rochers, caisses et tonneaux de la salle
  de:
    name: Erkundungs-Set
    desc: Zerstört alle Felsen, Kisten und Fässer im Raum
  it:
    name: Esplorokit
    desc: Rompe tutti i massi, le casse e i barili della stanza
  pt:
    name: Kit Explorador
    desc: Quebra todas as rochas, caixas e barris da sala
  ru:
    name: Набор исследователя
    desc: Разбивает все валуны, ящики и бочки в комнате
  ja:
    name: たんけんセット
    desc: 部屋の岩、箱、樽をすべて壊す
  ko:
    name: 탐험세트
    desc: 방의 바위, 상자, 통을 모두 부순다
  zh:
    name: 探险套装
    desc: 打碎房间内所有石块、箱子和木桶
  zt:
    name: 探險組合
    desc: 打破房間內所有岩石、箱子和木桶
---
Breaks all rocks, crates and barrels in the room

## How it works
- Every rock in the room breaks at once, along with every crate and barrel, wherever they are. What they hide or drop comes out as if you had broken them yourself (see [breakable loot](../mechanics/botin_rompibles.html)).
- It needs at least one rock in the room: with only crates or barrels, nothing happens and you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more.
