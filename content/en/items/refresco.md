---
title: Soda Pop
id: refresco
kind: passive
category: utility
family: core
tier: 1
pools:
- shop
pool_weight: 2
details:
- label: Speed
  value: +0.1 per purchase after you pick it up
- label: Cap
  value: +1.5 (15 purchases)
icon: items-ps/medicine/soda-pop.png
sprite: true
names:
  es:
    name: Refresco
    desc: Cada compra en la tienda te da velocidad +0.1
  fr:
    name: Soda Cool
    desc: Chaque achat en boutique vous donne vitesse +0,1
  de:
    name: Sprudel
    desc: Jeder Kauf im Laden gibt dir Tempo +0,1
  it:
    name: Gassosa
    desc: Ogni acquisto nel negozio ti dà velocità +0,1
  pt:
    name: Refrigerante
    desc: Cada compra na loja dá Velocidade +0,1
  ru:
    name: Газировка
    desc: Каждая покупка в магазине дает скорость +0,1
  ja:
    name: サイコソーダ
    desc: ショップで買い物するたびに移動速度+0.1
  ko:
    name: 미네랄사이다
    desc: 상점에서 살 때마다 속도 +0.1
  zh:
    name: 劲爽汽水
    desc: 每在商店购买一次，速度+0.1
  zt:
    name: 勁爽汽水
    desc: 每在商店購買一次，速度 +0.1
---
Each shop purchase gives you speed +0.1

## How it works
- Each purchase paid with PokéDollars after you pick it up (shop items, shop pickups, golden chests for sale) gives Speed +0.1 for the rest of the run.
- Purchases made before you had it don't count.
- It stops at +1.5, after 15 purchases.
- Deals paid with hearts are not purchases.

## Stacking
- A second copy gives no extra speed. Worse, picking up another copy starts the count again from that moment, so the bonus already earned is lost.
