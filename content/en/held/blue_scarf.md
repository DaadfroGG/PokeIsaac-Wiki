---
title: Blue Scarf
id: blue_scarf
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/scarf/blue.png
details:
- label: Speed
  value: '+0.6'
- label: Where
  value: Rooms with no fight going on
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
    name: Pañuelo Azul
    desc: En las salas ya limpias andas más rápido.
  fr:
    name: Foulard Bleu
    desc: Vous vous déplacez plus vite dans les salles déjà nettoyées.
  pt:
    name: Lenço Azul
    desc: Nas salas já limpas você anda mais rápido.
  de:
    name: Blauer Schal
    desc: In bereits gesäuberten Räumen läufst du schneller.
  it:
    name: Fascia Blu
    desc: Nelle stanze già ripulite ti muovi più veloce.
  ja:
    name: あおいバンダナ
    desc: クリア済みの部屋では移動が速くなる。
  zh:
    name: 蓝色头巾
    desc: 在已清理的房间中移动更快。
  zt:
    name: 藍色頭巾
    desc: 在已清除的房間中移動更快。
  ko:
    name: 파랑밴드
    desc: 이미 클리어한 방에서는 더 빨리 걷는다.
  ru:
    name: Синий шарф
    desc: В уже зачищенных комнатах ты ходишь быстрее.
---
You move faster in rooms already cleared.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- You get +0.6 Speed in any room with no fight going on: combat and boss rooms once cleared, and rooms without a fight (shop, treasure room...). The bonus stops as soon as you walk into a room where a fight starts.
- It is a flat Speed bonus added to your stat.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
