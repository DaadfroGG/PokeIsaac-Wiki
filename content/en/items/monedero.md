---
title: Coin Case
id: monedero
kind: active
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
charge: 6
details:
- label: Gain
  value: As many PokéDollars as you have, up to +25
- label: Wallet cap
  value: 99 (150 from floor 10, 250 from floor 30)
icon: items-ps/key-item/coin-case.png
sprite: true
names:
  es:
    name: Monedero
    desc: Duplica tus Pokédólares (hasta +25)
  fr:
    name: Boîte Jetons
    desc: Double vos Pokédollars (jusqu'à +25)
  de:
    name: Münzkorb
    desc: Verdoppelt deine Pokédollar (bis zu +25)
  it:
    name: Salvadanaio
    desc: Raddoppia i tuoi Pokédollari (fino a +25)
  pt:
    name: Porta-Moedas
    desc: Dobra seus Pokédólares (até +25)
  ru:
    name: Монетница
    desc: Удваивает твои покедоллары (до +25)
  ja:
    name: コインケース
    desc: 所持ポケドルを2倍にする（最大+25）
  ko:
    name: 동전케이스
    desc: 포켓달러 2배 (최대 +25)
  zh:
    name: 代币盒
    desc: 宝可币翻倍（最多+25）
  zt:
    name: 代幣盒
    desc: 讓你的寶可幣加倍（最多+25）
---
Doubles your PokéDollars (up to +25)

## How it works
- You gain as many PokéDollars as you already have, but never more than 25 at once: 10 becomes 20, 40 becomes 65.
- You can't go above your wallet's cap: 99, then 150 from floor 10 and 250 from floor 30.
- With 0 PokéDollars, or with a full wallet, it can't be used and you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): your money is doubled twice (+25 at most each time).
