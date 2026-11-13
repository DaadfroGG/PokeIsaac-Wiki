---
title: Nanab Berry
id: nanab_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/nanab.png
details:
- label: Damage
  value: +12 % while moving
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
    name: Baya Latano
    desc: +12 % de daño mientras te mueves.
  fr:
    name: Baie Nanab
    desc: +12 % de dégâts pendant que vous bougez.
  pt:
    name: Baga Nanab
    desc: +12% de dano enquanto você se move.
  de:
    name: Nanabbeere
    desc: +12 % Schaden, während du dich bewegst.
  it:
    name: Baccabana
    desc: +12 % di danni mentre ti muovi.
  ja:
    name: ナナのみ
    desc: 移動中はダメージ+12%。
  zh:
    name: 蕉香果
    desc: 移动时伤害+12%。
  zt:
    name: 蕉香果
    desc: 移動時傷害+12%。
  ko:
    name: 나나열매
    desc: 이동하는 동안 대미지 +12%.
  ru:
    name: Ягода Нанаб
    desc: +12 % урона, пока ты двигаешься.
---
+12% damage while moving.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Active whenever your Pokémon is moving; it switches off as soon as you stop. Being pushed also counts as moving.
- It is a Damage multiplier, so it shows on the HUD and follows the [diminishing returns](../mechanics/rendimientos.html) of damage multipliers (full up to ×2.3, then a quarter, ×3 at most).

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
- It multiplies with the other held damage effects you have (held one plus fused ones).
- It is the opposite of [Metal Powder](metal_powder.html) and [Chesto Berry](chesto_berry.html), which want you to stand still.
