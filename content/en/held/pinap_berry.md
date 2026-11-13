---
title: Pinap Berry
id: pinap_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/pinap.png
details:
- label: Damage
  value: +25 %
- label: Distance
  value: Enemy more than 300 px from you
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
    name: Baya Pinia
    desc: Los enemigos a más de 300 px reciben un 25 % más de daño.
  fr:
    name: Baie Nanana
    desc: Les ennemis à plus de 300 px subissent 25 % de dégâts en plus.
  pt:
    name: Baga Pinap
    desc: Inimigos a mais de 300 px recebem 25% mais dano.
  de:
    name: Sananabeere
    desc: Gegner, die mehr als 300 px entfernt sind, erleiden 25 % mehr Schaden.
  it:
    name: Baccananas
    desc: I nemici a più di 300 px subiscono il 25 % di danni in più.
  ja:
    name: パイルのみ
    desc: 300px以上離れた敵へのダメージ+25%。
  zh:
    name: 凰梨果
    desc: 距离超过300px的敌人受到的伤害增加25%。
  zt:
    name: 凰梨果
    desc: 距離超過300 px的敵人受到的傷害增加25%。
  ko:
    name: 파인열매
    desc: 300 px보다 먼 적은 대미지를 25% 더 받는다.
  ru:
    name: Ягода Пинап
    desc: Враги дальше 300 px получают на 25 % больше урона.
---
Enemies more than 300 px away take 25% more damage.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- The distance is measured between you and the enemy at the moment of the hit, not from where the shot was fired. Companion shots count too, still measured from you.
- It works on bosses too.
- You need enough Range for your shots to travel that far.
- It works on every hit of your shots, including split shots, [Icy Rock](icy_rock.html) shards and your [companions](../mechanics/companeros.html)' shots. Burn and poison ticks, chain lightning, explosions and contact damage don't get it.
- It is applied when the shot hits, so it does not show in your Damage stat on the HUD and is not limited by the ×3 cap on damage multipliers.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
