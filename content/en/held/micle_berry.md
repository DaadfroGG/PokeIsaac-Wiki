---
title: Micle Berry
id: micle_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/micle.png
details:
- label: Damage
  value: ×2 on the last enemy
- label: Bosses
  value: Never
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
    name: Baya Lagro
    desc: El último enemigo de la sala (no los jefes) recibe el doble de daño.
  fr:
    name: Baie Micle
    desc: Le dernier ennemi de la salle (pas les boss) subit le double de dégâts.
  pt:
    name: Baga Micle
    desc: O último inimigo da sala (exceto chefes) recebe o dobro de dano.
  de:
    name: Wunfrubeere
    desc: Der letzte Gegner im Raum (keine Bosse) erleidet doppelten Schaden.
  it:
    name: Baccaracolo
    desc: L'ultimo nemico della stanza (non i Boss) subisce danni doppi.
  ja:
    name: ミクルのみ
    desc: 部屋の最後の敵（ボス以外）は2倍のダメージを受ける。
  zh:
    name: 奇秘果
    desc: 房间里最后一个敌人（首领除外）受到双倍伤害。
  zt:
    name: 奇秘果
    desc: 房間中的最後一個敵人（頭目除外）受到雙倍傷害。
  ko:
    name: 미클열매
    desc: 방의 마지막 적(보스 제외)은 대미지를 2배로 받는다.
  ru:
    name: Ягода Микл
    desc: Последний враг в комнате (не боссы) получает двойной урон.
---
The last enemy in the room (not bosses) takes double damage.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- When only one enemy is left alive in the room, it takes double damage from your hits.
- It never applies to bosses, even when the boss is alone.
- It works on every hit of your shots, including split shots, [Icy Rock](icy_rock.html) shards and your [companions](../mechanics/companeros.html)' shots. It also works on your weapon hits and on your companions' touch, laser and bite hits. Burn and poison ticks, chain lightning and Voltorb explosions don't get it.
- It is applied when the shot hits, so it does not show in your Damage stat on the HUD and is not limited by the ×3 cap on damage multipliers.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
