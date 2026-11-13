---
title: Relic Band
id: brazalete_antiguo
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Damage
  value: +0.15 per item carried
- label: Cap
  value: +3 (at 20 items)
icon: items-ps/valuable-item/relic-band.png
sprite: true
names:
  es:
    name: Brazalete Antiguo
    desc: Daño +0.15 por cada objeto que llevas (hasta +3)
  fr:
    name: Vieux Bijou
    desc: Dégâts +0,15 par objet porté (jusqu'à +3)
  de:
    name: Alter Reif
    desc: Schaden +0,15 für jedes Item, das du trägst (bis +3)
  it:
    name: Bracciantico
    desc: Danni +0,15 per ogni oggetto che porti (fino a +3)
  pt:
    name: Bracelete Antigo
    desc: Dano +0,15 por item que você leva (até +3)
  ru:
    name: Древний браслет
    desc: Урон +0,15 за каждый твой предмет (до +3)
  ja:
    name: こだいのうでわ
    desc: 持っているどうぐ1個ごとにダメージ+0.15（最大+3）
  ko:
    name: 고대의팔찌
    desc: 지닌 아이템 1개당 대미지 +0.15 (최대 +3)
  zh:
    name: 古代手镯
    desc: 每持有一件道具，伤害+0.15（最多+3）
  zt:
    name: 古代手鐲
    desc: 每攜帶一個道具，傷害+0.15（最多+3）
---
Damage +0.15 for each item you carry (up to +3)

## How it works
- You gain Damage +0.15 for each passive item you carry, the Relic Band itself included, up to a maximum of +3 (reached with 20 items).
- The bonus grows by itself as you pick up more items and shrinks if you lose any.
- It is a flat Damage bonus: it is added to the flat Damage from your other items, and the total follows the [diminishing returns](../mechanics/rendimientos.html) (full up to +3, half to +8, a quarter to +40, then 5 %).

## Stacking
- The effect is on/off: a second Relic Band does not give a second +3. It does count as one more item (+0.15) towards the bonus.
