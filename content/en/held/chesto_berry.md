---
title: Chesto Berry
id: chesto_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/chesto.png
details:
- label: Heal
  value: Half a heart
- label: Condition
  value: Stand still 2 s after clearing a room
- label: Limit
  value: Once per room
- label: Held by
  value: One Pokémon on the team; works while that Pokémon is on the field
- label: Where to find it
  value: By clearing rooms, in chests, by breaking objects in the room, in secret rooms and in the shop
- label: Which one drops
  value: Picked at random among the held items nobody has yet (held by the team, fused, or lying in the room)
- label: Fuse
  value: 'From the Bag: 15 Poké Dollars on floor 1, +3.5 % per floor after that. It then works with any Pokémon on the team, for good. Up to 5 fused, never two alike'
names:
  es:
    name: Baya Atania
    desc: Tras limpiar una sala, quédate quieto 2 s para curar medio corazón (una vez por sala).
  fr:
    name: Baie Maron
    desc: Après avoir nettoyé une salle, restez immobile 2 s pour soigner un demi-cœur (une fois par salle).
  pt:
    name: Baga Chesto
    desc: Após limpar uma sala, fique parado 2 s para curar meio coração (uma vez por sala).
  de:
    name: Maronbeere
    desc: Bleib nach dem Säubern eines Raums 2 s stehen, um ein halbes Herz zu heilen (einmal pro Raum).
  it:
    name: Baccastagna
    desc: Dopo aver ripulito una stanza, resta fermo 2 s per recuperare mezzo cuore (una volta per stanza).
  ja:
    name: カゴのみ
    desc: 部屋をクリアしたあと2秒間じっとしていると、半分のハートを回復（1部屋1回）。
  zh:
    name: 零余果
    desc: 清理房间后，静止2秒可回复半颗心（每个房间一次）。
  zt:
    name: 零餘果
    desc: 清除房間後，靜止不動2秒可回復半顆愛心（每個房間一次）。
  ko:
    name: 유루열매
    desc: 방을 클리어한 뒤 2초간 가만히 있으면 하트 반 칸을 회복한다(방마다 1번).
  ru:
    name: Ягода Често
    desc: После зачистки комнаты постой на месте 2 с, чтобы вылечить полсердца (раз за комнату).
---
After clearing a room, stand still for 2 s to heal half a heart (once per room).

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- When you clear a room while it is active, stand still for 2 seconds in that room to heal half a heart.
- The 2 seconds count from the moment you stopped moving: if you were already standing still when the last enemy died, it can heal right away. Shooting doesn't count as moving.
- It works once per cleared room. Leaving and coming back doesn't give a second heal.
- If your health is full when the 2 seconds are up, nothing is healed and the chance is used up for that room.
- This heal ignores the limit on item healing.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
