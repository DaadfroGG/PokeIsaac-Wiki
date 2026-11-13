---
title: Lone Earring
id: lone_earring
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/partner-gift/lone-earring.png
details:
- label: Damage
  value: +25 %
- label: Window
  value: The first 2 s of each enemy's life
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
    name: Pendiente
    desc: Los enemigos que acaban de aparecer (2 s) reciben un 25 % más de daño.
  fr:
    name: Boucle d’Oreille
    desc: Les ennemis qui viennent d’apparaître (2 s) subissent 25 % de dégâts en plus.
  pt:
    name: Brinco Solitário
    desc: Inimigos que acabaram de aparecer (2 s) recebem 25% mais dano.
  de:
    name: Ohrring
    desc: Gerade erschienene Gegner (2 s) erleiden 25 % mehr Schaden.
  it:
    name: Orecchino
    desc: I nemici appena apparsi (2 s) subiscono il 25 % di danni in più.
  ja:
    name: かたっぽピアス
    desc: 出現したばかり（2秒）の敵へのダメージ+25%。
  zh:
    name: 一边的耳环
    desc: 刚出现的敌人（2秒内）受到的伤害增加25%。
  zt:
    name: 一邊的耳環
    desc: 剛出現（2秒內）的敵人受到的傷害增加25%。
  ko:
    name: 한쪽귀고리
    desc: 막 나타난 적(2초)은 대미지를 25% 더 받는다.
  ru:
    name: Серьга
    desc: Только что появившиеся враги (2 с) получают на 25 % больше урона.
---
Enemies that just appeared (2 s) take 25% more damage.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- An enemy takes 25 % more damage during its first 2 seconds after it appears. Enemies appear when you walk into the room, so it covers the opening 2 seconds of each fight, plus anything summoned or spawned later.
- It works on bosses too, during their first 2 seconds.
- It works on every hit of your shots, including split shots, [Icy Rock](icy_rock.html) shards and your [companions](../mechanics/companeros.html)' shots. It also works on your weapon hits and on your companions' touch, laser and bite hits. Burn and poison ticks, chain lightning and Voltorb explosions don't get it.
- It is applied when the shot hits, so it does not show in your Damage stat on the HUD and is not limited by the ×3 cap on damage multipliers.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
