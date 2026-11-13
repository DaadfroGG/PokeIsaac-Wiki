---
title: Cheri Berry
id: cheri_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/cheri.png
details:
- label: Damage
  value: ×3 on the first hit
- label: When
  value: Once per room with enemies, each time you enter it
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
    name: Baya Zreza
    desc: Tu primer disparo de cada sala con enemigos hace el triple de daño.
  fr:
    name: Baie Ceriz
    desc: Votre premier tir dans chaque salle avec des ennemis inflige le triple de dégâts.
  pt:
    name: Baga Cheri
    desc: Seu primeiro tiro em cada sala com inimigos causa o triplo de dano.
  de:
    name: Amrenabeere
    desc: Dein erster Schuss in jedem Raum mit Gegnern macht dreifachen Schaden.
  it:
    name: Baccaliegia
    desc: Il tuo primo tiro in ogni stanza con nemici fa danni tripli.
  ja:
    name: クラボのみ
    desc: 敵のいる各部屋で最初のショットは3倍のダメージ。
  zh:
    name: 樱子果
    desc: 每个有敌人的房间里，你的第一发弹造成三倍伤害。
  zt:
    name: 櫻子果
    desc: 在每個有敵人的房間中，你的第一發彈造成三倍傷害。
  ko:
    name: 버치열매
    desc: 적이 있는 방에서 첫 탄은 대미지가 3배다.
  ru:
    name: Ягода Чери
    desc: Твой первый выстрел в каждой комнате с врагами наносит тройной урон.
---
Your first shot in each room with enemies deals triple damage.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Each time you enter a room that still has enemies, your next shot that **hits** an enemy deals triple damage. Shots that miss don't use it up.
- Only your own shots trigger it: companion shots, split shots and other extra child shots never use it.
- It works on bosses too.
- It is applied when the shot hits, so it does not show in your Damage stat on the HUD and is not limited by the ×3 cap on damage multipliers.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
- It multiplies with other on-hit bonuses, for example [Wiki Berry](wiki_berry.html) on an enemy at full health: ×3 × 1.3 = ×3.9.
