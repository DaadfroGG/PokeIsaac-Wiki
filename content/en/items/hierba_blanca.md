---
title: White Herb
id: hierba_blanca
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Effect
  value: Cancels the stat drops of your items
- label: Range
  value: The ones you carry and the ones you pick up later
- label: Stats
  value: Damage, Fire rate, Speed, Range, Shot speed, Luck, max health
- label: Max health
  value: Also restores it (up to the 12-heart cap)
icon: items-ps/hold-item/white-herb.png
sprite: true
names:
  es:
    name: Hierba Blanca
    desc: Las estadísticas que te bajan los objetos dejan de bajar (también las de los que ya llevas)
  fr:
    name: Herbe Blanche
    desc: Les statistiques réduites par vos objets ne baissent plus (y compris pour ceux que vous portez déjà)
  de:
    name: Schlohkraut
    desc: Werte, die dir Items senken, werden nicht mehr gesenkt (auch bei denen, die du schon trägst)
  it:
    name: Erbachiara
    desc: Le statistiche abbassate dagli oggetti smettono di calare (anche quelle degli oggetti che già porti)
  pt:
    name: Erva Branca
    desc: As estatísticas que seus itens reduzem deixam de ser reduzidas (inclusive as dos que você já leva)
  ru:
    name: Белая трава
    desc: Характеристики, которые снижают твои предметы, больше не снижаются (и у тех, что уже есть)
  ja:
    name: しろいハーブ
    desc: どうぐによるステータスの低下がなくなる（すでに持っているどうぐの分も）
  ko:
    name: 하양허브
    desc: 아이템으로 내려가는 능력치가 더는 내려가지 않는다(이미 가진 아이템도 포함)
  zh:
    name: 白色香草
    desc: 道具带来的数据降低不再生效（已携带的道具也包括在内）
  zt:
    name: 白色香草
    desc: 道具造成的能力下降不再生效（已攜帶的道具也包括在內）
---
Stats lowered by your items stop being lowered (also for the ones you already carry)

## How it works
- When you pick it up, it goes through every item you already carry and removes each **negative stat line**: lower Damage, lower Speed, lower Range, lower Shot speed, lower Luck, fewer hearts, and slower Fire rate. The good lines of those items stay.
- From then on, every item you pick up arrives without its negative stat lines.
- Lost hearts of max health come back (never above the 12-heart cap), but they come back empty.
- It only touches the stat lines shown on the item sheet. Damage multipliers below ×1 and other drawbacks that are part of an item's effect stay.
- If you later lose an item, the herb is taken into account: you don't lose a drop that was never applied.

## Stacking
- A second copy does nothing more.
