---
title: Super Lure
id: super_lure
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/other-item/super-lure.png
details:
- label: Radius
  value: 150 px
- label: Pulls
  value: Poké Dollars and nuggets
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
    name: Supercolonia
    desc: Los Pokédólares cercanos vuelan hacia ti.
  fr:
    name: Super Parfum
    desc: Les Pokédollars proches volent vers vous.
  pt:
    name: Super Isca
    desc: Os Pokédólares próximos voam até você.
  de:
    name: Super-Lockparfüm
    desc: Pokédollar in der Nähe fliegen zu dir.
  it:
    name: Superprofumo
    desc: I Pokédollari vicini volano verso di te.
  ja:
    name: シルバーコロン
    desc: 近くのポケドルが引き寄せられる。
  zh:
    name: 白银香水
    desc: 附近的宝可币会飞向你。
  zt:
    name: 白銀香水
    desc: 附近的寶可幣會飛向你。
  ko:
    name: 실버코롱
    desc: 가까운 포켓달러가 나에게 날아온다.
  ru:
    name: Супер-приманка
    desc: Ближайшие покедоллары летят к тебе.
---
Nearby Pokédollars fly towards you.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- [Poké Dollars](../world/coin.html) and nuggets lying within 150 px of you slide towards you, faster the closer they get.
- Items for sale in the shop are not pulled.
- In co-op, each coin flies to the nearest player who has it.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
