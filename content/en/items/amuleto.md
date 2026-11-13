---
title: Amulet Coin
id: amuleto
kind: passive
category: utility
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: +10 PokéDollars
  good: true
details:
- label: On pickup
  value: +10 PokéDollars
- label: Coin pickups
  value: 2 instead of 1
- label: Nugget pickups
  value: 7 instead of 5
- label: Wallet cap
  value: 99 (150 from floor 10, 250 from floor 30)
icon: items/amulet-coin.png
sprite: true
names:
  es:
    name: Amuleto Moneda
    desc: Más dinero y 10 P$
  fr:
    name: Pièce Rune
    desc: Plus d'argent et 10 P$
  de:
    name: Münzamulett
    desc: Mehr Geld und 10 P$
  it:
    name: Monetamuleto
    desc: Più denaro e 10 P$
  pt:
    name: Moeda Amuleto
    desc: Mais dinheiro e 10 P$
  ru:
    name: Монета-амулет
    desc: Больше денег и 10 P$
  ja:
    name: おまもりこばん
    desc: お金が増加、さらに10$
  ko:
    name: 부적금화
    desc: 돈 증가, 10 $
  zh:
    name: 护符金币
    desc: 宝可币收益增加，另得10 P$
  zt:
    name: 護符金幣
    desc: 更多金錢與10寶可幣
---
More money and 10 $

## How it works
- The moment you pick it up you gain 10 PokéDollars.
- From then on every [coin](../world/coin.html) you pick up is worth 2 instead of 1, and every nugget 7 instead of 5. This covers coins from enemy drops, chests, rewards and props: anything that lands in your wallet as a coin pickup.
- It does not change shop prices, and it does not make more coins appear: it only makes each one worth more.
- Your wallet is capped (99, rising to 150 from floor 10 and 250 from floor 30); anything above the cap is lost.

## Stacking
- The double value is an on/off effect: a second Amulet Coin does not make coins worth 3. You still get its 10 PokéDollars again when you pick it up.
- The [Top Hat](chistera.html) gives the same effect, so holding both is no better than holding one.
