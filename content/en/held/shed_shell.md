---
title: Shed Shell
id: shed_shell
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/hold-item/shed-shell.png
details:
- label: Invulnerability
  value: 2 s
- label: Trigger
  value: This Pokémon switching in
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
    name: Muda Concha
    desc: Al entrar al campo este Pokémon, 2 s de invulnerabilidad.
  fr:
    name: Carapace Mue
    desc: Quand ce Pokémon entre sur le terrain, 2 s d’invulnérabilité.
  pt:
    name: Casca Mudada
    desc: Quando este Pokémon entra em campo, 2 s de invulnerabilidade.
  de:
    name: Wechselhülle
    desc: Betritt dieses Pokémon das Feld, 2 s Unverwundbarkeit.
  it:
    name: Disfoguscio
    desc: Quando questo Pokémon entra in campo, 2 s di invulnerabilità.
  ja:
    name: きれいなぬけがら
    desc: このポケモンが場に出たとき、2秒間無敵。
  zh:
    name: 美丽空壳
    desc: 该宝可梦上场时，获得2秒无敌。
  zt:
    name: 美麗空殼
    desc: 這隻寶可夢上場時，獲得2秒無敵。
  ko:
    name: 아름다운허물
    desc: 이 포켓몬이 필드에 나오면 2초간 무적.
  ru:
    name: Сброшенная оболочка
    desc: 'Когда этот покемон выходит на поле: 2 с неуязвимости.'
---
When this Pokémon enters the field, 2 s of invulnerability.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- It triggers when the Pokémon holding it comes onto the field by a switch (see [Team of 3 Pokémon](../mechanics/equipo.html)), in or out of combat. Fused, it triggers on every switch, whichever Pokémon comes in.
- You can't be hurt for 2 seconds (any switch already gives a very short moment of invulnerability; this replaces it with 2 s).
- The team's switch rules don't change: the Pokémon that left still has to wait before coming back.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
