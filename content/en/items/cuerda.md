---
title: Escape Rope
id: cuerda
kind: active
family: core
tier: 1
pools:
- treasure
- shop
charge: 3
details:
- label: Goes to
  value: The floor's starting room
- label: Not during
  value: A boss fight or a gym battle
icon: items/escape-rope.png
sprite: true
names:
  es:
    name: Cuerda Huida
    desc: Vuelve a la sala inicial
  fr:
    name: Corde Sortie
    desc: Ramène à la salle de départ
  de:
    name: Fluchtseil
    desc: Bringt dich zurück in den Startraum
  it:
    name: Fune di fuga
    desc: Torna alla stanza iniziale
  pt:
    name: Corda de Fuga
    desc: Volta à sala inicial
  ru:
    name: Веревка побега
    desc: Возвращает в стартовую комнату
  ja:
    name: あなぬけのヒモ
    desc: 最初の部屋にもどる
  ko:
    name: 동굴탈출로프
    desc: 시작 방으로 돌아간다
  zh:
    name: 离洞绳
    desc: 返回起始房
  zt:
    name: 離洞繩
    desc: 回到起始房間
---
Returns to the starting room

## How it works
- You are taken back to the starting room of the current floor.
- It does nothing if you are already in the starting room, while a boss is alive in the room, or during a gym battle; you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: you only travel once.
