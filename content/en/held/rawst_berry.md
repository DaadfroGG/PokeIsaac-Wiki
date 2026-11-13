---
title: Rawst Berry
id: rawst_berry
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/berry/rawst.png
details:
- label: Fire rate
  value: +40 % for 2 s
- label: Trigger
  value: Each time you lose health
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
    name: Baya Safre
    desc: Al recibir un golpe, 2 s de cadencia +40 %.
  fr:
    name: Baie Fraive
    desc: Quand vous êtes touché, 2 s de cadence +40 %.
  pt:
    name: Baga Rawst
    desc: Ao levar um golpe, 2 s de cadência +40%.
  de:
    name: Fragiabeere
    desc: Nach einem Treffer 2 s lang +40 % Feuerrate.
  it:
    name: Baccafrago
    desc: Quando vieni colpito, 2 s di cadenza +40 %.
  ja:
    name: チーゴのみ
    desc: ダメージを受けると、2秒間連射速度+40%。
  zh:
    name: 莓莓果
    desc: 受到攻击时，2秒内射速+40%。
  zt:
    name: 莓莓果
    desc: 受到攻擊時，2秒內射速+40%。
  ko:
    name: 복분열매
    desc: 공격을 받으면 2초간 연사 +40%.
  ru:
    name: Ягода Роуст
    desc: 'При получении удара: 2 с темпа стрельбы +40 %.'
---
When you take a hit, 2 s of +40% fire rate.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Each time a hit actually hurts you (red or soul hearts), you shoot 40 % faster for 2 seconds. A new hit restarts the 2 seconds.
- Hits that are blocked, dodged or reduced to nothing don't trigger it.
- Fire rate can never go above 12 shots per second whatever the bonus.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
- It multiplies with the other held fire-rate effects.
