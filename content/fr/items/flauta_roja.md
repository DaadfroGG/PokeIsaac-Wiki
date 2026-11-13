---
title: Flûte Rouge
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
- label: Soin
  value: Un demi-cœur par ennemi dans la salle
- label: Plafond
  value: 3 cœurs
- label: Limite de soin
  value: L'ignore
icon: items-ps/flute/red.png
sprite: true
names:
  en:
    name: Red Flute
    desc: You recover half a heart for each enemy in the room (up to 3 hearts)
  es:
    name: Flauta Roja
    desc: Recuperas medio corazón por cada enemigo de la sala (hasta 3 corazones)
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
Vous récupérez un demi-cœur par ennemi dans la salle (jusqu'à 3 cœurs)

## Fonctionnement
- Vous soignez un demi-cœur pour chaque ennemi vivant dans la salle, boss compris, jusqu'à 6 demi-cœurs (3 cœurs).
- Ce soin ignore la limite de soin des objets sur 10 secondes.
- Sans ennemi dans la salle, ou avec tous vos PV, il est inutilisable et vous gardez la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : vous êtes soigné deux fois (jusqu'à 6 cœurs).
