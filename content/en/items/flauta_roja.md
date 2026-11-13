---
title: Red Flute
id: flauta_roja
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 4
details:
- label: Heal
  value: Half a heart per enemy in the room
- label: Cap
  value: 3 hearts
- label: Healing limit
  value: Ignores it
icon: items-ps/flute/red.png
sprite: true
names:
  es:
    name: Flauta Roja
    desc: Recuperas medio corazón por cada enemigo de la sala (hasta 3 corazones)
  fr:
    name: Flûte Rouge
    desc: Vous récupérez un demi-cœur par ennemi dans la salle (jusqu'à 3 cœurs)
  de:
    name: Rote Flöte
    desc: Du erholst ein halbes Herz pro Gegner im Raum (bis zu 3 Herzen)
  it:
    name: Flauto Rosso
    desc: Recuperi mezzo cuore per ogni nemico della stanza (fino a 3 cuori)
  pt:
    name: Flauta Vermelha
    desc: Você recupera meio coração por cada inimigo da sala (até 3 corações)
  ru:
    name: Красная флейта
    desc: Восстанавливаешь полсердца за каждого врага в комнате (до 3 сердец)
  ja:
    name: あかいビードロ
    desc: 部屋の敵1体につき半分のハートを回復（最大ハート3個分）
  ko:
    name: 빨강비드로
    desc: 방 안의 적 1마리당 하트 반 칸을 회복한다(최대 하트 3칸)
  zh:
    name: 红色玻璃哨
    desc: 房间里每有一个敌人，你就恢复半颗心（最多3颗心）
  zt:
    name: 紅色玻璃哨
    desc: 房間裡每有一個敵人，就回復半顆愛心（最多3顆愛心）
---
You recover half a heart for each enemy in the room (up to 3 hearts)

## How it works
- You heal half a heart for each living enemy in the room, bosses included, up to 6 half-hearts (3 hearts).
- This heal ignores the limit on item healing over 10 seconds.
- With no enemy in the room, or at full health, it can't be used and you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): you heal twice (up to 6 hearts).
