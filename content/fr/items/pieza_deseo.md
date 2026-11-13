---
title: Vœu Étoile
id: pieza_deseo
kind: active
family: core
tier: 3
pools:
- treasure
- shop
pool_weight: 2
charge: 8
details:
- label: Objet
  value: 1 de la réserve du trésor
- label: Prix
  value: Gratuit
- label: Charge
  value: 8 salles
icon: items-ps/other-item/wishing-piece.png
sprite: true
names:
  en:
    name: Wishing Piece
    desc: A treasure room item appears
  es:
    name: Pieza Deseo
    desc: Aparece un objeto de la sala del tesoro
  de:
    name: Wunschbrocken
    desc: Ein Item aus dem Schatzraum erscheint
  it:
    name: Desioblocco
    desc: Appare un oggetto della stanza del tesoro
  pt:
    name: Peça do Desejo
    desc: Aparece um item da sala do tesouro
  ru:
    name: Осколок желаний
    desc: Появляется предмет из сокровищницы
  ja:
    name: ねがいのかけら
    desc: 宝の部屋のどうぐが出現する
  ko:
    name: 소원의덩어리
    desc: 보물방 아이템이 나타난다
  zh:
    name: 许愿星块
    desc: 出现一件宝藏房的道具
  zt:
    name: 許願星塊
    desc: 出現一件寶物房間的道具
---
Un objet de salle au trésor apparaît

## Fonctionnement
- Un nouveau piédestal apparaît juste au-dessus de vous avec un objet au hasard de la réserve du trésor. Il est gratuit.
- Vous pouvez l'utiliser dans n'importe quelle salle, et à nouveau à chaque recharge.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux objets apparaissent.
