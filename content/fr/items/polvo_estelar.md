---
title: Poussière Étoile
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
- label: Dégâts
  value: +0,2 pour chaque tranche de 10 Pokédollars portés
- label: Plafond
  value: +1,8 avec 99 P$ (+2 quand le porte-monnaie dépasse 100)
icon: items-ps/valuable-item/stardust.png
sprite: true
names:
  en:
    name: Stardust
    desc: Damage +0.2 for every 10 PokéDollars you carry (up to +1.8)
  es:
    name: Polvo Estelar
    desc: Daño +0.2 por cada 10 Pokédólares que lleves (hasta +1.8)
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
Dégâts +0,2 par tranche de 10 Pokédollars (jusqu'à +1,8)

## Fonctionnement
- Le bonus se calcule en direct d'après les pièces de votre porte-monnaie : +0,2 pour chaque tranche complète de 10 Pokédollars. 9 P$ ne donnent rien, 10 à 19 donnent +0,2, et ainsi de suite.
- Le porte-monnaie contient 99 Pokédollars au début, donc le bonus est de +1,8 au maximum. Sur les étages profonds le porte-monnaie grandit (150, puis 250), et le bonus s'arrête alors à +2.
- Dépenser des pièces baisse le bonus tout de suite.
- C'est un bonus de Dégâts fixe normal : il apparaît dans le HUD et suit les [rendements décroissants](../mechanics/rendimientos.html).

## Cumul
- Un deuxième exemplaire ne fait rien de plus.
