---
title: Leftovers
id: restos
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Trigger
  value: Clearing a room
- label: Heal
  value: ½ heart
icon: items/leftovers.png
sprite: true
names:
  es:
    name: Restos
    desc: Recupera medio corazón al limpiar una sala
  fr:
    name: Restes
    desc: Récupère un demi-cœur à chaque salle nettoyée
  de:
    name: Überreste
    desc: Du erholst ein halbes Herz, wenn du einen Raum säuberst
  it:
    name: Avanzi
    desc: Recupera mezzo cuore quando ripulisci una stanza
  pt:
    name: Restos
    desc: Recupera meio coração ao limpar uma sala
  ru:
    name: Остатки
    desc: Восстанавливает полсердца при зачистке комнаты
  ja:
    name: たべのこし
    desc: 部屋をクリアすると半分のハートを回復
  ko:
    name: 먹다남은음식
    desc: 방을 클리어하면 하트 반 칸을 회복한다
  zh:
    name: 吃剩的东西
    desc: 清空房间时恢复半颗心
  zt:
    name: 吃剩的東西
    desc: 清除房間時回復半顆愛心
---
Recover half a heart when you clear a room

## How it works
- Every time a room is cleared, you recover half a heart (if you are not at full health).
- It works in every room type. The healing ignores the limit on item healing.

## Stacking
- It does not stack, and it is the same effect as the one on [Shell Bell](cascabel.html): owning both still heals only half a heart per room.
