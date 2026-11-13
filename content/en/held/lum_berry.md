---
title: Lum Berry
id: lum_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/lum.png
details:
- label: Blocks
  value: 1 hit from the ground per room
- label: Ground
  value: Pits, spikes, fire, puddles and ground zones
- label: Reset
  value: Each time you enter a room
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
    name: Baya Ziuela
    desc: Una vez por sala, ignoras un golpe de una zona del suelo (charcos, fuego, pinchos...).
  fr:
    name: Baie Prine
    desc: Une fois par salle, vous ignorez un coup d’une zone au sol (flaques, feu, pics...).
  pt:
    name: Baga Lum
    desc: Uma vez por sala, você ignora um golpe de uma zona do chão (poças, fogo, espinhos...).
  de:
    name: Prunusbeere
    desc: Einmal pro Raum ignorierst du einen Treffer einer Bodenzone (Pfützen, Feuer, Stacheln...).
  it:
    name: Baccaprugna
    desc: Una volta per stanza, ignori un colpo di una zona del suolo (pozze, fuoco, spine...).
  ja:
    name: ラムのみ
    desc: 1部屋につき1回、床の危険（水たまり、炎、トゲ…）のダメージを無効化する。
  zh:
    name: 木子果
    desc: 每个房间一次，你可以无视一次地面危害的伤害（水洼、火焰、尖刺...）。
  zt:
    name: 木子果
    desc: 每個房間一次，免疫一次地面危害的傷害（水窪、火焰、尖刺……）。
  ko:
    name: 리샘열매
    desc: 방마다 1번, 바닥 위험 지대(웅덩이, 불, 가시...)의 피격을 무시한다.
  ru:
    name: Ягода Лам
    desc: Раз за комнату ты игнорируешь один удар от опасной зоны пола (лужи, огонь, шипы...).
---
Once per room, you ignore one hit from a floor hazard (puddles, fire, spikes...).

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- The first time a [ground effect](../mechanics/efectos_suelo.html) would hurt you in a room, the hit is cancelled and you get 1/3 s of invulnerability.
- It covers falling into a pit, spikes, fire, and the puddles, gas and danger zones left on the ground by enemies and bosses.
- It does not cover enemy shots, contact with enemies or explosions.
- It recharges each time you enter a room, even one already cleared or with no enemies.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
