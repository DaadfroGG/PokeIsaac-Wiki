---
title: PokéDollar
id: coin
color: '#ffd23c'
labels:
- text: PICKUP
  color: '#c8b0ff'
icon: icons/world/coin.png
details:
- label: Where
  value: Everywhere.
- label: Wallet
  value: Up to 99; 150 from floor 10; 250 from floor 30
- label: Drop on kill
  value: 6 % chance, +0.5 % per point of Luck (10 % at most); 3 in 4 are coins
names:
  es:
    name: Pokédólar
    desc: 'La moneda del juego: sirve en la tienda.'
  fr:
    name: Pokédollar
    desc: 'La monnaie du jeu : à dépenser à la boutique.'
  de:
    name: Pokédollar
    desc: 'Die Währung des Spiels: Damit zahlst du im Laden.'
  it:
    name: Pokédollaro
    desc: 'La valuta del gioco: si usa nel negozio.'
  pt:
    name: Pokédólar
    desc: 'A moeda do jogo: serve na loja.'
  ru:
    name: Покедоллар
    desc: 'Игровая валюта: тратится в магазине.'
  ja:
    name: ポケドル
    desc: ゲーム内のお金：ショップで使えます。
  ko:
    name: 포켓달러
    desc: '게임 화폐: 상점에서 쓴다.'
  zh:
    name: 宝可币
    desc: 游戏中的货币：可在商店使用。
  zt:
    name: 寶可幣
    desc: 遊戲中的貨幣：可在商店使用。
---
The game's currency: spend it in the shop.

## Drops from enemies
- Each defeated enemy has a 6 % chance, +0.5 % per point of Luck, to drop something: a coin 3 times out of 4, otherwise a half heart. Luck counts from −5 to 8 here, so the chance goes from 3.5 % to 10 %.
- If it drops nothing, it still has a 1.5 % chance, +0.3 % per point of Luck, to drop a [key](key.html).
- [Power-Up Pocket](../items/d_bolsillo_mejoras.html) doubles both chances.
- [Max Lure](../items/cebo_max.html) adds a separate 20 % chance of one more coin.
- The chances use the Luck of the player who gets the kill. Full details: [Enemy drops](../mechanics/botin_enemigos.html).
