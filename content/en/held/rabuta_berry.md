---
title: Rabuta Berry
id: rabuta_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/rabuta.png
details:
- label: Damage
  value: +4 % per kill in the room
- label: Cap
  value: +40 % (10 kills)
- label: Reset
  value: When you enter another room
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
    name: Baya Rautan
    desc: 'Cada baja en la sala: +4 % de daño hasta que salgas (hasta +40 %).'
  fr:
    name: Baie Rabuta
    desc: 'Chaque ennemi vaincu dans la salle : +4 % de dégâts jusqu’à ce que vous sortiez (jusqu’à +40 %).'
  pt:
    name: Baga Rabuta
    desc: 'Cada K.O. na sala: +4% de dano até você sair (até +40%).'
  de:
    name: Rabutabeere
    desc: 'Jedes K.O. im Raum: +4 % Schaden, bis du ihn verlässt (bis +40 %).'
  it:
    name: Baccambutan
    desc: 'Ogni K.O. nella stanza: +4 % di danni finché non esci (fino a +40 %).'
  ja:
    name: ラブタのみ
    desc: 部屋で敵を倒すたび、部屋を出るまでダメージ+4%（最大+40%）。
  zh:
    name: 茸丹果
    desc: 房间内每击败一个敌人：伤害+4%，直到离开（最多+40%）。
  zt:
    name: 茸丹果
    desc: 房間內每擊倒一個敵人：傷害+4%，直到離開（最多+40%）。
  ko:
    name: 라부탐열매
    desc: 방에서 처치할 때마다 방을 나갈 때까지 대미지 +4% (최대 +40%).
  ru:
    name: Ягода Рабута
    desc: 'Каждое поражение врага в комнате: +4 % урона, пока не выйдешь (до +40 %).'
---
Each kill in the room: +4% damage until you leave (up to +40%).

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Every enemy you defeat in the room adds +4 % damage, up to 10 kills.
- The bonus is lost when you enter a room (even one already cleared), so it builds up again in each fight.
- Only kills made while it is active count.
- It is a Damage multiplier, so it shows on the HUD and follows the [diminishing returns](../mechanics/rendimientos.html) of damage multipliers (full up to ×2.3, then a quarter, ×3 at most).

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
- It multiplies with the other held damage effects you have (held one plus fused ones).
