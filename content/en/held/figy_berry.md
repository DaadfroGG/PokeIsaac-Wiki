---
title: Figy Berry
id: figy_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/figy.png
details:
- label: Damage
  value: +10 % per missing heart
- label: Cap
  value: +40 % (4 hearts missing)
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
    name: Baya Higog
    desc: +10 % de daño por cada corazón que te falte (hasta +40 %).
  fr:
    name: Baie Figuy
    desc: +10 % de dégâts par cœur manquant (jusqu’à +40 %).
  pt:
    name: Baga Figy
    desc: +10% de dano por cada coração que faltar (até +40%).
  de:
    name: Giefebeere
    desc: +10 % Schaden pro fehlendem Herz (bis +40 %).
  it:
    name: Baccafico
    desc: +10 % di danni per ogni cuore che ti manca (fino a +40 %).
  ja:
    name: フィラのみ
    desc: 足りないハート1つにつきダメージ+10%（最大+40%）。
  zh:
    name: 勿花果
    desc: 每少一颗心，伤害+10%（最多+40%）。
  zt:
    name: 勿花果
    desc: 每少一顆愛心，傷害+10%（最多+40%）。
  ko:
    name: 무화열매
    desc: 잃은 하트 1칸마다 대미지 +10% (최대 +40%).
  ru:
    name: Ягода Фиги
    desc: +10 % урона за каждое недостающее сердце (до +40 %).
---
+10% damage for each missing heart (up to +40%).

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Counts only whole missing hearts of your maximum health: half a heart missing gives nothing, 1.5 hearts missing gives +10 %.
- Soul hearts don't count: only your red health compared with your maximum.
- It is a Damage multiplier, so it shows on the HUD and follows the [diminishing returns](../mechanics/rendimientos.html) of damage multipliers (full up to ×2.3, then a quarter, ×3 at most).

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
- It multiplies with the other held damage effects you have (held one plus fused ones).
