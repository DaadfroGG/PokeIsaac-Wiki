---
title: Icy Rock
id: icy_rock
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/hold-item/icy-rock.png
details:
- label: Shards
  value: 3 per shot that hits a wall
- label: Shard damage
  value: 35 % of your Damage (at least 0.5)
- label: Shard range
  value: '120'
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
    name: Roca Helada
    desc: Tus disparos que chocan con la pared se rompen en tres esquirlas.
  fr:
    name: Roche Glace
    desc: Vos tirs qui touchent un mur se brisent en trois éclats.
  pt:
    name: Rocha Gélida
    desc: Seus tiros que batem na parede se partem em três estilhaços.
  de:
    name: Eisbrocken
    desc: Deine Schüsse, die eine Wand treffen, zerbrechen in drei Splitter.
  it:
    name: Rocciafredda
    desc: I tuoi tiri che colpiscono il muro si spezzano in tre schegge.
  ja:
    name: つめたいいわ
    desc: 壁に当たったショットが3つのかけらに砕ける。
  zh:
    name: 冰冷岩石
    desc: 你的弹撞墙后会碎成三块碎片。
  zt:
    name: 冰冷岩石
    desc: 你的彈撞到牆壁時會碎裂成三塊碎片。
  ko:
    name: 차가운바위
    desc: 벽에 부딪힌 탄은 파편 3개로 부서진다.
  ru:
    name: Морозный камень
    desc: Твои выстрелы, попавшие в стену, разлетаются на три осколка.
---
Your shots that hit a wall break into three shards.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Each of your shots that ends on a wall bursts into 3 small shards that fly back into the room, one straight back and two about 30° to each side. Your companions' shots that hit a wall shatter too.
- Shards are small, fast (speed 7) and short-lived (range 120). They keep your shot's type, so type matchups apply.
- Their damage is 35 % of your Damage stat, not of the shot that broke: it ignores the shot's own bonuses.
- Shards are secondary shots, like split shots: they don't trigger most item effects and don't break into more shards, but the on-hit damage bonuses of held items (such as the [Wiki Berry](wiki_berry.html)) still apply to them. Split shots and other secondary shots hitting a wall don't make shards.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
