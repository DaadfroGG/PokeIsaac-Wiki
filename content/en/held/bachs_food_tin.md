---
title: Bach’s Food Tin
id: bachs_food_tin
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/curry-ingredient/bachs-food-tin.png
details:
- label: Drop
  value: 1 Poké Dollar every 8 kills
- label: Count
  value: Carries over between rooms
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
    name: Lata de Bach
    desc: Una de cada ocho bajas deja un Pokédólar.
  fr:
    name: Conserve de Bach
    desc: Un ennemi vaincu sur huit laisse un Pokédollar.
  pt:
    name: Lata de Comida do Bach
    desc: Um a cada oito K.O. solta um Pokédólar.
  de:
    name: Bachs Feinkost
    desc: Jedes achte K.O. lässt einen Pokédollar fallen.
  it:
    name: Scatoletta Bach
    desc: Un K.O. ogni otto lascia un Pokédollaro.
  ja:
    name: バックのかんづめ
    desc: 倒した敵の8体に1体が1ポケドルを落とす。
  zh:
    name: 巴哈罐头
    desc: 每击败8个敌人掉落1宝可币。
  zt:
    name: 巴哈罐頭
    desc: 每擊倒八個敵人掉落1寶可幣。
  ko:
    name: 바크의통조림
    desc: 처치 8번마다 1번 포켓달러가 나온다.
  ru:
    name: Консервы Баха
    desc: Каждое восьмое поражение врага дает покедоллар.
---
One in every eight kills drops a Pokédollar.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- Every 8th enemy you defeat while it is active drops a [Poké Dollar](../world/coin.html) where it died, on top of the normal coin drops.
- It is a fixed count, not a chance: kills 8, 16, 24 and so on. The count keeps going from room to room and floor to floor, and pauses while the item is not active.
- Every kill counts, whatever finished the enemy: your shots, your companions, bombs, burns. In co-op a kill goes to the player who last hit the enemy with a shot or an attack (player 1 if nobody did). Bosses don't count.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
