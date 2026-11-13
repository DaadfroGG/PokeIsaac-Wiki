---
title: Adamant Mint
id: adamant_mint
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/mint/attack.png
details:
- label: Damage
  value: +15 %
- label: Speed
  value: −0.25
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
    name: Menta Firme
    desc: Daño +15 %, pero andas algo más despacio.
  fr:
    name: Aromate Rigide
    desc: Dégâts +15 %, mais vous avancez un peu plus lentement.
  pt:
    name: Menta Firme
    desc: Dano +15%, mas você anda um pouco mais devagar.
  de:
    name: Hart-Minze
    desc: Schaden +15 %, aber du läufst etwas langsamer.
  it:
    name: Menta Decisa
    desc: Danni +15 %, ma ti muovi un po' più lentamente.
  ja:
    name: いじっぱりミント
    desc: ダメージ+15%、ただし移動が少し遅くなる。
  zh:
    name: 固执薄荷
    desc: 伤害+15%，但移动稍慢。
  zt:
    name: 固執薄荷
    desc: 傷害+15%，但移動稍慢。
  ko:
    name: 고집민트
    desc: 대미지 +15%, 대신 조금 느리게 걷는다.
  ru:
    name: Мята упрямства
    desc: Урон +15 %, но ты ходишь чуть медленнее.
---
Damage +15%, but you move a little slower.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Your damage is multiplied by 1.15 and you lose 0.25 Speed.
- It is a Damage multiplier, so it shows on the HUD and follows the [diminishing returns](../mechanics/rendimientos.html) of damage multipliers (full up to ×2.3, then a quarter, ×3 at most).

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
- It multiplies with the other held damage effects you have (held one plus fused ones).
