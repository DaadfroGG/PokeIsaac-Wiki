---
title: Enigma Stone
id: a_misticristal
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Goes to
  value: A random room of the floor
- label: Never
  value: Secret or super secret rooms
- label: Not during
  value: A boss fight or a gym battle
icon: items-ps/key-item/enigma-stone.png
sprite: true
names:
  es:
    name: Misticristal
    desc: Te lleva a una sala al azar de la planta
  fr:
    name: Mystécristal
    desc: Vous emmène dans une salle au hasard de l'étage
  de:
    name: Mytokristall
    desc: Bringt dich in einen zufälligen Raum der Etage
  it:
    name: Misticristal
    desc: Ti porta in una stanza a caso del piano
  pt:
    name: Pedra Enigma
    desc: Leva você a uma sala aleatória do andar
  ru:
    name: Загадочный камень
    desc: Переносит в случайную комнату этажа
  ja:
    name: なぞのすいしょう
    desc: その階のランダムな部屋へ移動
  ko:
    name: 수수께끼의수정
    desc: 층의 무작위 방으로 이동한다
  zh:
    name: 谜之水晶
    desc: 前往本层的随机房间
  zt:
    name: 謎之水晶
    desc: 帶你前往本層的隨機房間
---
Takes you to a random room on the floor

## How it works
- You are taken to a random room of the floor other than the one you are in. It can be any room, explored or not, including the boss room, the shop or the treasure room, but never a secret or super secret room.
- It doesn't work while a boss is alive in the room or during a gym battle; you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: you only travel once.
