---
title: Carte Magnétique
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
- label: Cadence
  value: Un tir toutes les 0,43 s
- label: Dégâts
  value: Vos Dégâts ×0,8 (min. 2), Électrik
- label: Portée
  value: Ennemis à moins de 520 px
- label: Durée
  value: Jusqu'à ce que vous quittiez la salle
icon: items-ps/key-item/card-key.png
sprite: true
names:
  en:
    name: Card Key
    desc: You place a Magnemite that shoots enemies until you leave the room
  es:
    name: Llave Magnética
    desc: Dejas un Magnemite que dispara a los enemigos hasta que sales de la sala
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
Vous posez un Magnéti qui tire sur les ennemis jusqu'à ce que vous quittiez la salle

## Fonctionnement
- Un gros Magnéti est posé à 30 px devant vous. Il ne bouge jamais.
- Il tire sur l'ennemi le plus proche à moins de 520 px toutes les 0,43 seconde. Chaque tir inflige 0,8 fois vos Dégâts au moment où vous le posez (au moins 2), en dégâts Électrik ; les objets qui renforcent les compagnons le renforcent aussi. Ses tirs ne portent pas les effets de vos objets.
- Il est temporaire : il ne compte pas dans votre limite de [compagnons](../mechanics/companeros.html) et part quand vous quittez la salle. Chaque utilisation dans la même salle ajoute un Magnéti.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux Magnéti sont posés.
