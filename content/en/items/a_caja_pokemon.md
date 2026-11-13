---
title: Pokémon Box Link
id: a_caja_pokemon
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Companion
  value: '1 in 9 each: Pichu, Igglybuff, Cleffa, Magby, Natu, Elekid, Zubat, Phanpy, Togepi'
- label: Damage
  value: 2 on the first floor, +0.4 per floor
- label: Lasts
  value: Until you leave the room
icon: items-ps/storage/pokemon-box.png
sprite: true
names:
  es:
    name: Caja de Pokémon
    desc: Sale un compañero al azar que te ayuda en esta sala
  fr:
    name: Boîte Pokémon
    desc: Un compagnon aléatoire apparaît pour vous aider dans cette salle
  de:
    name: Pokémon-Box
    desc: Ein zufälliger Begleiter erscheint und hilft dir in diesem Raum
  it:
    name: Box Pokémon
    desc: Compare un compagno a caso che ti aiuta in questa stanza
  pt:
    name: Link da Caixa Pokémon
    desc: Aparece um companheiro aleatório que ajuda você nesta sala
  ru:
    name: Ящик покемонов
    desc: Появляется случайный спутник и помогает тебе в этой комнате
  ja:
    name: ポケモンボックス
    desc: この部屋であなたを助けるなかまがランダムで現れる
  ko:
    name: 포켓몬 박스
    desc: 이 방에서 도와주는 동료가 무작위로 나온다
  zh:
    name: 宝可梦盒
    desc: 随机出现一名伙伴，在本房间协助你
  zt:
    name: 寶可夢盒
    desc: 隨機出現一個夥伴，在這個房間協助你
---
A random companion appears to help you in this room

## How it works
- A random baby companion appears next to you and fights with its usual behavior (Pichu, Natu and Togepi shoot, Cleffa and Magby circle around you, Elekid fires a laser, Zubat bites, Phanpy charges, Igglybuff shoots harder but slower).
- Its damage doesn't depend on yours: 2 on the first floor, +0.4 per floor after that. Items that boost companions also boost it.
- It is temporary: it doesn't count toward your [companion](../mechanics/companeros.html) limit, and it leaves when you leave the room.
- You can use it again in the same room to get more of them.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two companions appear (each one drawn separately).
