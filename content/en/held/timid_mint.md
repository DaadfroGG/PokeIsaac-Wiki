---
title: Timid Mint
id: timid_mint
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/mint/speed.png
details:
- label: Speed
  value: '+0.4'
- label: Damage
  value: −8 %
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
    name: Menta Miedosa
    desc: Andas más rápido, pero tu daño baja un 8 %.
  fr:
    name: Aromate Timide
    desc: Vous avancez plus vite, mais vos dégâts baissent de 8 %.
  pt:
    name: Menta Tímida
    desc: Você anda mais rápido, mas seu dano cai 8%.
  de:
    name: Scheu-Minze
    desc: Du läufst schneller, aber dein Schaden sinkt um 8 %.
  it:
    name: Menta Timida
    desc: Ti muovi più veloce, ma i tuoi danni calano dell'8 %.
  ja:
    name: おくびょうミント
    desc: 移動が速くなるが、ダメージが8%下がる。
  zh:
    name: 胆小薄荷
    desc: 移动更快，但伤害降低8%。
  zt:
    name: 膽小薄荷
    desc: 移動更快，但傷害降低8%。
  ko:
    name: 겁쟁이민트
    desc: 더 빨리 걷지만 대미지가 8% 줄어든다.
  ru:
    name: Мята робости
    desc: Ты ходишь быстрее, но урон падает на 8 %.
---
You move faster, but your damage drops by 8%.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- You gain 0.4 Speed, and your damage is multiplied by 0.92.
- The −8 % is a Damage multiplier: it shows on the HUD.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
- It multiplies with the other held damage effects you have (held one plus fused ones).
