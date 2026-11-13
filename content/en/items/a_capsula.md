---
title: Ability Capsule
id: a_capsula
kind: active
family: ability
tier: 2
pools:
- treasure
- shop
pool_weight: 2
charge: 6
details:
- label: Pedestals
  value: All the items not yet taken
- label: New items
  value: From the pool of the room you are in
- label: Shop prices
  value: Kept
icon: items-ps/medicine/ability-capsule.png
sprite: true
names:
  es:
    name: Cápsula Habilidad
    desc: Cambia los objetos de los pedestales de la sala por otros
  fr:
    name: Pilule Talent
    desc: Remplace les objets des piédestaux de la salle par d'autres
  de:
    name: Fähigkeiten-Kapsel
    desc: Tauscht die Items auf den Sockeln des Raums gegen andere aus
  it:
    name: Capsula Abilità
    desc: Cambia gli oggetti dei piedistalli della stanza con altri
  pt:
    name: Cápsula de Habilidade
    desc: Troca os itens dos pedestais da sala por outros
  ru:
    name: Капсула способности
    desc: Меняет предметы на пьедесталах комнаты на другие
  ja:
    name: とくせいカプセル
    desc: 部屋の台座のどうぐを別のものに入れ替える
  ko:
    name: 특성캡슐
    desc: 방의 받침대 아이템을 다른 것으로 바꾼다
  zh:
    name: 特性胶囊
    desc: 将房间底座上的道具替换为其他道具
  zt:
    name: 特性膠囊
    desc: 將房間台座上的道具換成其他道具
---
Rerolls the items on the room's pedestals

## How it works
- Every item still on a pedestal in the room is replaced by another one.
- Passive items are drawn from the pool of the room you are in (treasure, boss, shop, devil, angel, secret or super secret room; any other room uses the treasure pool). Active items are replaced by another random active item.
- A shop item keeps its price. A devil deal gets a new health price that matches the new item.
- With no item on a pedestal, nothing happens and you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): the items are rerolled twice; you keep the second result.
