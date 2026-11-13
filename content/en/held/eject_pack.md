---
title: Eject Pack
id: eject_pack
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/hold-item/eject-pack.png
details:
- label: Return wait
  value: 4 s instead of 8 s
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
    name: Mochila Escape
    desc: Cuando este Pokémon sale del campo, su espera para volver es la mitad.
  fr:
    name: Sac Fuite
    desc: Quand ce Pokémon quitte le terrain, son attente avant de revenir est réduite de moitié.
  pt:
    name: Mochila Ejetora
    desc: Quando este Pokémon sai de campo, a espera para voltar cai pela metade.
  de:
    name: Fluchttasche
    desc: Verlässt dieses Pokémon das Feld, halbiert sich seine Wartezeit bis zur Rückkehr.
  it:
    name: Zainofuga
    desc: Quando questo Pokémon esce dal campo, la sua attesa per tornare si dimezza.
  ja:
    name: だっしゅつパック
    desc: このポケモンが場を離れると、戻れるまでの待ち時間が半分になる。
  zh:
    name: 避难背包
    desc: 该宝可梦离场后，再次上场的等待时间减半。
  zt:
    name: 避難背包
    desc: 這隻寶可夢離場後，返場等待時間減半。
  ko:
    name: 탈출팩
    desc: 이 포켓몬이 필드에서 나가면 복귀 대기 시간이 절반이 된다.
  ru:
    name: Эвакуационный рюкзак
    desc: Когда этот покемон уходит с поля, его ожидание до возвращения вдвое короче.
---
When this Pokémon leaves the field, its wait to come back is halved.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- When you switch out the Pokémon holding it during a fight, it can come back after 4 seconds instead of the usual 8. See [Team of 3 Pokémon](../mechanics/equipo.html).
- Out of combat, switching is free anyway.
- It is the Pokémon leaving the field that counts: holding it on the Pokémon that comes in does nothing for that switch.
- Fused, it halves the wait for every Pokémon of the team.

## Stacking
- A second copy does nothing more: the wait is halved once, never quartered. Fusing it already covers the whole team, so a held copy on top adds nothing. The game won't let you fuse two alike.
