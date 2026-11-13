---
title: RSVP Mail
id: rsvp_mail
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/mail/rsvp-mail.png
details:
- label: Fire rate
  value: +50 % for 3 s
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
    name: Carta Invitar
    desc: Al entrar al campo este Pokémon, 3 s de cadencia +50 %.
  fr:
    name: Lettre Invit
    desc: Quand ce Pokémon entre sur le terrain, 3 s de cadence +50 %.
  pt:
    name: Carta Convite
    desc: Quando este Pokémon entra em campo, 3 s de cadência +50%.
  de:
    name: Einladebrief
    desc: Betritt dieses Pokémon das Feld, 3 s lang +50 % Feuerrate.
  it:
    name: Messaggio Invito
    desc: Quando questo Pokémon entra in campo, 3 s di cadenza +50 %.
  ja:
    name: おさそいメール
    desc: このポケモンが場に出たとき、3秒間連射速度+50%。
  zh:
    name: 邀请邮件
    desc: 该宝可梦上场时，3秒内射速+50%。
  zt:
    name: 邀請郵件
    desc: 這隻寶可夢上場時，3秒內射速+50%。
  ko:
    name: 권유메일
    desc: 이 포켓몬이 필드에 나오면 3초간 연사 +50%.
  ru:
    name: Письмо-приглашение
    desc: 'Когда этот покемон выходит на поле: 3 с темпа стрельбы +50 %.'
---
When this Pokémon enters the field, 3 s of +50% fire rate.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- It triggers when the Pokémon holding it comes onto the field by a switch (see [Team of 3 Pokémon](../mechanics/equipo.html)), in or out of combat. Fused, it triggers on every switch, whichever Pokémon comes in.
- For 3 seconds you shoot 50 % faster. Another switch-in restarts the 3 seconds.
- Fire rate can never go above 12 shots per second whatever the bonus.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
- It multiplies with the other held fire-rate effects.
