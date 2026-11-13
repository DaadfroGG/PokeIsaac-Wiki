---
title: Card Key
id: a_llave_magnetica
kind: active
family: ability
tier: 2
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Fire rate
  value: One shot every 0.43 s
- label: Damage
  value: Your Damage ×0.8 (min. 2), Electric
- label: Reach
  value: Enemies within 520 px
- label: Lasts
  value: Until you leave the room
icon: items-ps/key-item/card-key.png
sprite: true
names:
  es:
    name: Llave Magnética
    desc: Dejas un Magnemite que dispara a los enemigos hasta que sales de la sala
  fr:
    name: Carte Magnétique
    desc: Vous posez un Magnéti qui tire sur les ennemis jusqu'à ce que vous quittiez la salle
  de:
    name: Schlüsselkarte
    desc: Du setzt ein Magnetilo, das Gegner beschießt, bis du den Raum verlässt
  it:
    name: Apriporta
    desc: Lasci un Magnemite che spara ai nemici finché non esci dalla stanza
  pt:
    name: Chave-Cartão
    desc: Você deixa um Magnemite que atira nos inimigos até você sair da sala
  ru:
    name: Ключ-карта
    desc: Ты ставишь Магнемайта, который стреляет во врагов, пока ты не выйдешь из комнаты
  ja:
    name: カードキー
    desc: コイルを置いていく。部屋を出るまで敵を撃ち続ける
  ko:
    name: 카드키
    desc: 방을 나갈 때까지 적을 쏘는 코일을 놓는다
  zh:
    name: 钥匙卡
    desc: 你放下一只小磁怪，它会向敌人射击，直到你离开房间
  zt:
    name: 鑰匙卡
    desc: 你會放下一隻小磁怪，牠會射擊敵人，直到你離開房間
---
You place a Magnemite that shoots enemies until you leave the room

## How it works
- A big Magnemite is placed 30 px in front of you. It never moves.
- It shoots the nearest enemy within 520 px every 0.43 seconds. Each shot deals 0.8 times your Damage when you place it (at least 2), as Electric damage; items that boost companions boost it too. Its shots don't carry your items' effects.
- It is temporary: it doesn't count toward your [companion](../mechanics/companeros.html) limit and goes away when you leave the room. Each use in the same room adds another Magnemite.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two Magnemite are placed.
