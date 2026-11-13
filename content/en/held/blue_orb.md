---
title: Blue Orb
id: blue_orb
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/hold-item/blue-orb.png
details:
- label: Protection
  value: 'First hit of each room: half a heart at most'
- label: When
  value: Each time you enter a room with enemies
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
    name: Prisma Azul
    desc: El primer golpe de cada sala te quita como mucho medio corazón.
  fr:
    name: Gemme Bleue
    desc: Le premier coup de chaque salle vous retire au plus un demi-cœur.
  pt:
    name: Esfera Azul
    desc: O primeiro golpe de cada sala tira no máximo meio coração.
  de:
    name: Blauer Edelstein
    desc: Der erste Treffer in jedem Raum nimmt dir höchstens ein halbes Herz.
  it:
    name: Gemma blu
    desc: Il primo colpo di ogni stanza ti toglie al massimo mezzo cuore.
  ja:
    name: あいいろのたま
    desc: 各部屋で最初に受けるダメージは最大でも半分のハート。
  zh:
    name: 靛蓝色宝珠
    desc: 每个房间受到的第一次攻击最多只扣半颗心。
  zt:
    name: 靛藍色寶珠
    desc: 每個房間受到的第一次攻擊最多只扣半顆愛心。
  ko:
    name: 쪽빛구슬
    desc: 방마다 첫 피격은 최대 하트 반 칸만 잃는다.
  ru:
    name: Синяя сфера
    desc: Первый удар в каждой комнате отнимает не больше полсердца.
---
The first hit in each room takes at most half a heart.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Each time you enter a room that still has enemies, the first hit that reaches you is reduced to half a heart, whatever it should have dealt.
- That first hit uses the protection up even if it only dealt half a heart anyway.
- It applies after the other reductions of held items ([Protective Pads](protective_pads.html), [Metal Powder](metal_powder.html), [Bold Mint](bold_mint.html)). Hits blocked by the [Lum Berry](lum_berry.html), dodged, or taken while invulnerable don't use it up.
- It works against bosses too.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
