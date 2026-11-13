---
title: Blue Card
id: d_tarjeta_azul
kind: passive
category: utility
family: defense
tier: 2
pools:
- shop
- secret
pool_weight: 2
details:
- label: Shop prices
  value: Halved
- label: Rounding
  value: Rounded up, minimum 1
icon: items-ps/key-item/blue-card.png
sprite: true
names:
  es:
    name: Tarjeta Azul
    desc: Todo en la tienda cuesta la mitad
  fr:
    name: Carte Bleue
    desc: Tout coûte moitié prix en boutique
  de:
    name: Blaue Karte
    desc: Alles im Laden kostet die Hälfte
  it:
    name: Carta Blu
    desc: Tutto nel negozio costa la metà
  pt:
    name: Cartão Azul
    desc: Tudo na loja custa metade
  ru:
    name: Синяя карта
    desc: Все в магазине стоит вдвое дешевле
  ja:
    name: ブルーカード
    desc: ショップのすべてが半額
  ko:
    name: 블루카드
    desc: 상점의 모든 것이 반값
  zh:
    name: 蓝卡
    desc: 商店内所有商品半价
  zt:
    name: 藍卡
    desc: 商店裡所有東西半價
---
Everything in the shop costs half

## How it works
- Everything for sale in the [shop](../rooms/shop.html) costs half the price (rounded up, never below 1 PokéDollar).
- When you pick it up, the items and pickups already on sale in shops of the run are halved straight away; the shops you visit later are priced at half too.
- It only changes shop prices.

## Stacking
- It is an on/off effect: a second Blue Card does not make prices a quarter.
