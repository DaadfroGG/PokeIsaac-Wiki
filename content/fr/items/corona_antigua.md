---
title: Vieux Tortil
id: corona_antigua
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Chance
  value: 15 % par ennemi, en entrant dans une salle normale
- label: Récompense
  value: L'ennemi s'en va et laisse 1 pièce
- label: Jamais
  value: Les boss, ni le dernier ennemi de la salle
icon: items-ps/valuable-item/relic-crown.png
sprite: true
names:
  en:
    name: Relic Crown
    desc: 'You''re the king: sometimes, when you enter a room, an enemy surrenders and leaves you a coin'
  es:
    name: Corona Antigua
    desc: 'Eres el rey: a veces, al entrar en una sala, algún enemigo se rinde y te deja una moneda'
  de:
    name: Alte Krone
    desc: 'Du bist der König: Manchmal ergibt sich beim Betreten eines Raums ein Gegner und lässt dir eine Münze da'
  it:
    name: Coronantica
    desc: 'Sei il re: a volte, entrando in una stanza, un nemico si arrende e ti lascia una moneta'
  pt:
    name: Coroa Antiga
    desc: 'Você é o rei: às vezes, ao entrar em uma sala, algum inimigo se rende e deixa uma moeda para você'
  ru:
    name: Древняя корона
    desc: 'Ты король: иногда при входе в комнату какой-нибудь враг сдается и оставляет тебе монету'
  ja:
    name: こだいのおうかん
    desc: 王者の風格：部屋に入ると、ときどき敵が降参してコインを置いていく
  ko:
    name: 고대의왕관
    desc: '왕이 된다: 가끔 방에 들어가면 적이 항복하고 동전을 남긴다'
  zh:
    name: 古代王冠
    desc: 你就是王者：有时进入房间时，会有敌人投降并留下一枚硬币
  zt:
    name: 古代王冠
    desc: 你就是國王：有時進入房間時，會有敵人投降並留下一枚金幣給你
---
Vous êtes le roi : parfois, en entrant dans une salle, un ennemi se rend et vous laisse une pièce

## Fonctionnement
- Quand vous entrez dans une salle de combat normale, chaque ennemi a 15 % de chances de se rendre : il quitte la salle et laisse 1 [pièce](../world/coin.html) à l'endroit où il se trouvait.
- Il ne prend jamais les boss, ni le dernier ennemi de la salle : la salle n'est donc jamais vidée.
- Ces pièces comptent dans la limite des pièces lâchées par les objets : 3 au maximum par salle et, par étage, 6 plus la moitié du numéro d'étage (arrondi).

## Cumul
- C'est un effet tout ou rien : un second Vieux Tortil ne donne pas un second tirage.
