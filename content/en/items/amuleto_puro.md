---
title: Clear Amulet
id: amuleto_puro
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Effect
  value: 1 enemy fewer per combat room
- label: Never
  value: Rooms with a single enemy, boss rooms
icon: items-ps/hold-item/cleanse-tag.png
sprite: true
names:
  es:
    name: Amuleto Puro
    desc: Un enemigo menos en cada sala de combate
  fr:
    name: Talisman Sain
    desc: Un ennemi de moins dans chaque salle de combat
  de:
    name: Neutralschmuck
    desc: Ein Gegner weniger in jedem Kampfraum
  it:
    name: Ciondolochiaro
    desc: Un nemico in meno in ogni stanza di combattimento
  pt:
    name: Amuleto Puro
    desc: Um inimigo a menos em cada sala de combate
  ru:
    name: Чистый амулет
    desc: На одного врага меньше в каждой боевой комнате
  ja:
    name: クリアチャーム
    desc: 戦闘の部屋ごとに敵が1体減る
  ko:
    name: 클리어참
    desc: 전투방마다 적이 1마리 줄어든다
  zh:
    name: 清净坠饰
    desc: 每个战斗房间减少一名敌人
  zt:
    name: 清淨墜飾
    desc: 每個戰鬥房間少一個敵人
---
One less enemy in each combat room

## How it works
- When a normal combat room is filled, one enemy is removed from it, as long as the room has more than one. A room with a single enemy is left alone, so the room is never emptied.
- It does not affect boss rooms or any other kind of room.
- Fewer enemies also means fewer kill drops, but the reward for clearing the room is the same.

## Stacking
- It is an on/off effect: a second copy does not remove a second enemy.
- It cancels out the [Max Lure](cebo_max.html), which adds one enemy to the same rooms.
