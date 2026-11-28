---
title: Iron
id: hierro
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- boss
- shop
pool_weight: 2
stats:
- text: Hearts +1
  good: true
- text: Heals 1 heart
  good: true
details:
- label: Hearts
  value: +1 heart (and heals it)
- label: Strong hits
  value: 1 half heart less
icon: items/iron.png
sprite: true
names:
  es:
    name: Hierro
    desc: Corazón +1; los golpes fuertes te quitan medio corazón menos
  fr:
    name: Fer
    desc: Cœur +1 ; les coups violents vous retirent un demi-cœur de moins
  de:
    name: Eisen
    desc: Herz +1; harte Treffer ziehen ein halbes Herz weniger ab
  it:
    name: Ferro
    desc: Cuore +1; i colpi forti ti tolgono mezzo cuore in meno
  pt:
    name: Ferro
    desc: Coração +1; os golpes fortes tiram meio coração a menos
  ru:
    name: Железо
    desc: Сердце +1; сильные удары отнимают на полсердца меньше
  ja:
    name: ブロムヘキシン
    desc: ハート+1。強い攻撃で受けるダメージが半分のハート分減る
  ko:
    name: 사포닌
    desc: 하트 +1. 강한 공격에 받는 대미지가 하트 반 칸 줄어든다
  zh:
    name: 防御增强剂
    desc: 心+1；受到重击时少损失半颗心
  zt:
    name: 防禦增強劑
    desc: 愛心 +1；受到強力攻擊時少扣半顆愛心
---
Heart +1; strong hits take half a heart less

## How it works
- On pickup: +1 max heart, and that heart is filled.
- Any hit that would cost you a full heart or more (2 half hearts or more) costs half a heart less. Hits of half a heart are not reduced.
- The reduction applies before soul hearts absorb the damage.
- **Real effect** for a typical Pokémon (4 damage, 4.3 shots/s, speed 4, range 350 px, shot speed 9, 4 hearts), first copy only: Max health +1 heart: 4 → 5 hearts. See [Stats in practice](../mechanics/estadisticas_reales.html) for how the totals behave.
- Measured against 12 bosses (floors 4 to 25, 1 minute each, 12 hearts, standing still and shooting): −32 % damage taken (33.9 to 23.2 hearts per minute): most boss hits cost a full heart or more, so most of them are reduced.

## Stacking
- The max heart is added again with each copy. The damage reduction does not stack.
