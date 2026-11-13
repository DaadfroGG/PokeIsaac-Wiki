---
title: Metal Powder
id: metal_powder
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/hold-item/metal-powder.png
details:
- label: Reduction
  value: −half a heart while still
- label: Still for
  value: 0.5 s
- label: Minimum
  value: Half a heart
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
    name: Polvo Metálico
    desc: Mientras estás quieto, los golpes te quitan medio corazón menos (como poco, medio).
  fr:
    name: Poudre Métal
    desc: Quand vous êtes immobile, les coups vous retirent un demi-cœur de moins (un demi au minimum).
  pt:
    name: Pó Metálico
    desc: Enquanto você está parado, os golpes tiram meio coração a menos (no mínimo meio).
  de:
    name: Metallstaub
    desc: Solange du stillstehst, nehmen Treffer ein halbes Herz weniger (mindestens ein halbes).
  it:
    name: Metalpolvere
    desc: Mentre stai fermo, i colpi ti tolgono mezzo cuore in meno (almeno mezzo).
  ja:
    name: メタルパウダー
    desc: 立ち止まっている間、受けるダメージが半分のハート減る（最低でも半分）。
  zh:
    name: 金属粉
    desc: 静止不动时，受到的攻击少扣半颗心（最少扣半颗）。
  zt:
    name: 金屬粉
    desc: 靜止不動時，受到的攻擊少扣半顆愛心（最少半顆）。
  ko:
    name: 금속파우더
    desc: 가만히 있는 동안 받는 대미지가 하트 반 칸 줄어든다(최소 반 칸).
  ru:
    name: Металлический порошок
    desc: Пока ты стоишь на месте, удары отнимают на полсердца меньше (минимум полсердца).
---
While standing still, hits take half a heart less (half at minimum).

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- After you have stood still for half a second, every hit takes half a heart less. Shooting doesn't count as moving.
- It works on any kind of hit: enemy shots, contact, bosses, explosions and ground effects.
- A hit always deals at least half a heart, so hits of half a heart are not reduced.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
- It adds up with the other held reductions ([Protective Pads](protective_pads.html), [Bold Mint](bold_mint.html)), each taking off half a heart, but a hit never goes below half a heart.
