---
title: Stardust
id: polvo_estelar
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Damage
  value: +0.2 for every 10 PokéDollars you carry
- label: Cap
  value: +1.8 with 99 P$ (+2 once your wallet holds 100 or more)
icon: items-ps/valuable-item/stardust.png
sprite: true
names:
  es:
    name: Polvo Estelar
    desc: Daño +0.2 por cada 10 Pokédólares que lleves (hasta +1.8)
  fr:
    name: Poussière Étoile
    desc: Dégâts +0,2 par tranche de 10 Pokédollars (jusqu'à +1,8)
  de:
    name: Sternenstaub
    desc: Schaden +0,2 pro 10 Pokédollar, die du trägst (bis +1,8)
  it:
    name: Polvostella
    desc: Danni +0,2 ogni 10 Pokédollari che porti (fino a +1,8)
  pt:
    name: Pó Estelar
    desc: Dano +0,2 a cada 10 Pokédólares que você leva (até +1,8)
  ru:
    name: Звездная пыль
    desc: Урон +0,2 за каждые 10 Покедолларов при себе (до +1,8)
  ja:
    name: ほしのすな
    desc: 所持ポケドル10ごとにダメージ+0.2（最大+1.8）
  ko:
    name: 별의모래
    desc: 포켓달러 10당 대미지 +0.2 (최대 +1.8)
  zh:
    name: 星星沙子
    desc: 每持有10宝可币，伤害+0.2（最多+1.8）
  zt:
    name: 星星沙子
    desc: 每攜帶10寶可幣，傷害+0.2（最多+1.8）
---
Damage +0.2 for every 10 PokéDollars you carry (up to +1.8)

## How it works
- The bonus is counted live from the coins in your wallet: +0.2 for each full 10 PokéDollars. 9 P$ give nothing, 10 to 19 give +0.2, and so on.
- Your wallet holds 99 PokéDollars at first, so the bonus is +1.8 at most. On deeper floors the wallet grows (150, then 250), and the bonus then stops at +2.
- Spending coins lowers the bonus right away.
- It is a normal flat Damage bonus: it shows on the HUD and follows the [diminishing returns](../mechanics/rendimientos.html).

## Stacking
- A second copy does nothing more.
