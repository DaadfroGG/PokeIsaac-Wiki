---
title: Shell Bell
id: cascabel
kind: passive
category: defense
family: core
tier: 1
pool_weight: 2
stats:
- text: Hearts +1
  good: true
- text: Heals 1 heart
  good: true
details:
- label: Hearts
  value: +1 heart (and heals it)
- label: Room clear
  value: Heals ½ heart
icon: items/shell-bell.png
sprite: true
names:
  es:
    name: Cascabel Concha
    desc: Corazón +1 y recupera medio corazón al limpiar una sala
  fr:
    name: Grelot Coque
    desc: Cœur +1 et récupère un demi-cœur en nettoyant une salle
  de:
    name: Muschelglocke
    desc: Herz +1 und heilt ein halbes Herz, wenn du einen Raum räumst
  it:
    name: Conchinella
    desc: Cuore +1 e recuperi mezzo cuore quando ripulisci una stanza
  pt:
    name: Concha Sino
    desc: Coração +1 e recupera meio coração ao limpar uma sala
  ru:
    name: Колокольчик-ракушка
    desc: Сердце +1 и полсердца при зачистке комнаты
  ja:
    name: かいがらのすず
    desc: ハート+1、部屋をクリアすると半分のハートを回復
  ko:
    name: 조개껍질방울
    desc: 하트 +1, 방을 클리어하면 하트 반 칸 회복
  zh:
    name: 贝壳之铃
    desc: 心+1，清空房间时回复半颗心
  zt:
    name: 貝殼之鈴
    desc: 愛心 +1，清空房間時回復半顆愛心
---
Heart +1 and recover half a heart when you clear a room

## How it works
- On pickup: +1 max heart, and that heart is filled.
- Every time a room is cleared, you recover half a heart (if you are not at full health).
- The room-clear healing ignores the limit on item healing.

## Stacking
- The max heart is added again with each copy.
- The room-clear healing is the same effect as [Leftovers](restos.html): owning both, or two Shell Bells, still heals only half a heart per room.
