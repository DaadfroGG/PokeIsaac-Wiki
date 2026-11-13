---
title: Sitrus Berry
id: sitrus_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/sitrus.png
details:
- label: Heal
  value: 1 heart
- label: When
  value: Arriving on each new floor (from floor 2)
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
    name: Baya Zidra
    desc: Al empezar cada planta, curas un corazón.
  fr:
    name: Baie Sitrus
    desc: Au début de chaque étage, vous soignez un cœur.
  pt:
    name: Baga Sitrus
    desc: No início de cada andar, você cura um coração.
  de:
    name: Tsitrubeere
    desc: Zu Beginn jeder Etage heilst du ein Herz.
  it:
    name: Baccacedro
    desc: All'inizio di ogni piano, recuperi un cuore.
  ja:
    name: オボンのみ
    desc: 各階のはじめにハートを1つ回復する。
  zh:
    name: 文柚果
    desc: 每层开始时，回复一颗心。
  zt:
    name: 文柚果
    desc: 每層開始時，回復一顆愛心。
  ko:
    name: 자뭉열매
    desc: 각 층을 시작할 때 하트 1칸을 회복한다.
  ru:
    name: Ягода Ситрус
    desc: В начале каждого этажа ты лечишь одно сердце.
---
At the start of each floor, you heal one heart.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Each time you reach a new floor, you heal one heart. It does not trigger at the start of the run (floor 1).
- This heal ignores the limit on item healing.
- If your health is already full, the extra is wasted; with [Moomoo Milk](../items/leche_mumu.html) it turns into soul health instead (up to one soul heart).
- It heals before the [Wave Mail](wave_mail.html) checks your health, so with both (one held, one fused) it can top you up and give you the Wave Mail's soul heart.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
