---
title: Bubble Mail
id: bubble_mail
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/mail/bubble-mail.png
details:
- label: Radius
  value: 130 px
- label: Damage
  value: 1.5 × your Damage (at least 2)
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
    name: Carta Pompas
    desc: Al entrar al campo este Pokémon, una onda aparta y daña a los enemigos cercanos.
  fr:
    name: Lettre Mer
    desc: Quand ce Pokémon entre sur le terrain, une onde repousse et blesse les ennemis proches.
  pt:
    name: Carta Bolha
    desc: Quando este Pokémon entra em campo, uma onda afasta e fere os inimigos próximos.
  de:
    name: Wasserbrief
    desc: Betritt dieses Pokémon das Feld, stößt eine Welle nahe Gegner zurück und verletzt sie.
  it:
    name: Mess. Bolla
    desc: Quando questo Pokémon entra in campo, un'onda respinge e danneggia i nemici vicini.
  ja:
    name: ブルーメール
    desc: このポケモンが場に出たとき、衝撃波で近くの敵をはじき飛ばしてダメージを与える。
  zh:
    name: 泡泡邮件
    desc: 该宝可梦上场时，发出冲击波击退并伤害附近的敌人。
  zt:
    name: 泡泡郵件
    desc: 這隻寶可夢上場時，會放出衝擊波擊退並傷害附近的敵人。
  ko:
    name: 버블메일
    desc: 이 포켓몬이 필드에 나오면 파동이 주변 적을 밀어내고 대미지를 준다.
  ru:
    name: Пузырьковое письмо
    desc: Когда этот покемон выходит на поле, волна отбрасывает и ранит ближайших врагов.
---
When this Pokémon enters the field, a wave pushes back and damages nearby enemies.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- It triggers when the Pokémon holding it comes onto the field by a switch (see [Team of 3 Pokémon](../mechanics/equipo.html)), in or out of combat. Fused, it triggers on every switch, whichever Pokémon comes in.
- A wave hits every enemy within 130 px (measured to the edge of the enemy): it deals 1.5 × your Damage, at least 2, and pushes them away.
- Bosses take the damage but are not pushed.
- The wave has no type: type matchups and item effects on hit don't apply to it.
- With no enemies around, it does nothing but the splash.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
