---
title: Red Scarf
id: red_scarf
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/scarf/red.png
details:
- label: Damage
  value: ×1.5 on your Voltorb blasts
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
    name: Pañuelo Rojo
    desc: Tus Voltorbs hacen un 50 % más de daño al estallar.
  fr:
    name: Foulard Rouge
    desc: Vos Voltorbe infligent 50 % de dégâts en plus en explosant.
  pt:
    name: Lenço Vermelho
    desc: Seus Voltorbs causam 50% mais dano ao explodir.
  de:
    name: Roter Schal
    desc: Deine Voltobals machen beim Explodieren 50 % mehr Schaden.
  it:
    name: Fascia Rossa
    desc: I tuoi Voltorb fanno il 50 % di danni in più quando esplodono.
  ja:
    name: あかいバンダナ
    desc: ビリリダマの爆発ダメージ+50%。
  zh:
    name: 红色头巾
    desc: 你的霹雳电球爆炸时伤害增加50%。
  zt:
    name: 紅色頭巾
    desc: 你的霹靂電球爆炸時傷害增加50%。
  ko:
    name: 빨강밴드
    desc: 찌리리공이 폭발할 때 대미지가 50% 늘어난다.
  ru:
    name: Красный шарф
    desc: Твои Вольторбы наносят на 50 % больше урона при взрыве.
---
Your Voltorbs deal 50% more damage when they explode.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- The [Voltorbs (bombs)](../world/bomb.html) you place deal 50 % more blast damage to enemies. A bomb normally deals 7 × your Damage, at least 25, before other bomb bonuses.
- It checks who placed the bomb when it explodes: if you switch to a Pokémon without the scarf before the blast, the bonus is lost (unless it is fused).
- It does not change the damage your own bombs deal to you, nor their radius.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
