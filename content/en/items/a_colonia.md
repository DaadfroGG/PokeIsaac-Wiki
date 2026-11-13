---
title: Lure
id: a_colonia
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Joltik
  value: 4 to 6
- label: Damage
  value: Your Damage ×2 (min. 2) per hit, Bug type
- label: Each Joltik
  value: 2 hits, or 10 s
- label: Lasts
  value: Until you leave the room
icon: items-ps/other-item/lure.png
sprite: true
names:
  es:
    name: Colonia
    desc: Aparecen de 4 a 6 Joltik que se lanzan contra los enemigos de la sala
  fr:
    name: Parfum
    desc: De 4 à 6 Statitik apparaissent et foncent sur les ennemis de la salle
  de:
    name: Lockparfüm
    desc: 4 bis 6 Wattzapf erscheinen und stürzen sich auf die Gegner im Raum
  it:
    name: Profumo invito
    desc: Compaiono da 4 a 6 Joltik che si scagliano contro i nemici della stanza
  pt:
    name: Isca
    desc: Aparecem de 4 a 6 Joltik que se lançam contra os inimigos da sala
  ru:
    name: Приманка
    desc: Появляются от 4 до 6 Джолтиков и бросаются на врагов в комнате
  ja:
    name: むしよせコロン
    desc: バチュルが4〜6匹現れ、部屋の敵に飛びかかる
  ko:
    name: 벌레유인코롱
    desc: 파쪼옥 4~6마리가 나타나 방 안의 적에게 돌진한다
  zh:
    name: 引虫香水
    desc: 出现4至6只电电虫，扑向房间内的敌人
  zt:
    name: 引蟲香水
    desc: 出現4至6隻電電蟲，衝向房間裡的敵人
---
4 to 6 Joltik appear and charge at the room's enemies

## How it works
- 4 to 6 big Joltik appear around you (same chance for each number).
- Each one runs at the nearest enemy within 600 px and bites it for twice your Damage (at least 2), as Bug damage. It bites twice, then disappears. Its bites don't trigger your items.
- Each Joltik disappears after 10 seconds at most (a Joltik with nothing to bite circles around you). They also leave when you leave the room.
- They attack bosses too. They don't count toward your [companion](../mechanics/companeros.html) limit.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two swarms appear (8 to 12 Joltik).
