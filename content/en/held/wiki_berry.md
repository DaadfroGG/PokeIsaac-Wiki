---
title: Wiki Berry
id: wiki_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/wiki.png
details:
- label: Damage
  value: +30 % on enemies at full health
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
    name: Baya Wiki
    desc: Los enemigos que aún tienen la vida entera reciben un 30 % más de daño.
  fr:
    name: Baie Wiki
    desc: Les ennemis encore en pleine santé subissent 30 % de dégâts en plus.
  pt:
    name: Baga Wiki
    desc: Inimigos ainda com a vida cheia recebem 30% mais dano.
  de:
    name: Wikibeere
    desc: Gegner mit vollem Leben erleiden 30 % mehr Schaden.
  it:
    name: Baccakiwi
    desc: I nemici con la vita ancora piena subiscono il 30 % di danni in più.
  ja:
    name: ウイのみ
    desc: HPが満タンの敵へのダメージ+30%。
  zh:
    name: 异奇果
    desc: 仍是满血的敌人受到的伤害增加30%。
  zt:
    name: 異奇果
    desc: 生命仍全滿的敵人受到的傷害增加30%。
  ko:
    name: 위키열매
    desc: 체력이 가득한 적은 대미지를 30% 더 받는다.
  ru:
    name: Ягода Вики
    desc: Враги с полным здоровьем получают на 30 % больше урона.
---
Enemies still at full health take 30% more damage.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Any hit on an enemy that still has all its health deals 30 % more. In practice it is the first hit on each enemy (or every hit on an enemy that heals back to full).
- It works on bosses too (their first hit).
- It works on every hit of your shots, including split shots, [Icy Rock](icy_rock.html) shards and your [companions](../mechanics/companeros.html)' shots. It also works on your weapon hits and on your companions' touch, laser and bite hits. Burn and poison ticks, chain lightning and Voltorb explosions don't get it.
- It is applied when the shot hits, so it does not show in your Damage stat on the HUD and is not limited by the ×3 cap on damage multipliers.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
