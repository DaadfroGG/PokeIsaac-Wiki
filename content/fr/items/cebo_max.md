---
title: Max Leurre
id: cebo_max
kind: passive
category: utility
family: core
tier: 1
pools:
- shop
pool_weight: 2
details:
- label: Ennemis
  value: +1 par salle de combat
- label: Pièce en plus
  value: 20 % par ennemi vaincu
- label: Limite de pièces
  value: 3 par salle, 6 + ½ étage par étage
icon: items-ps/other-item/max-lure.png
sprite: true
names:
  en:
    name: Max Lure
    desc: More enemies in each room, but they drop more coins
  es:
    name: Cebo Máximo
    desc: Más enemigos en cada sala, pero sueltan más monedas
  de:
    name: Top-Lockparfüm
    desc: Mehr Gegner in jedem Raum, aber sie lassen mehr Münzen fallen
  it:
    name: Profumo Max
    desc: Più nemici in ogni stanza, ma lasciano più monete
  pt:
    name: Isca Máxima
    desc: Mais inimigos em cada sala, mas eles soltam mais moedas
  ru:
    name: Макс-приманка
    desc: Больше врагов в каждой комнате, но они роняют больше монет
  ja:
    name: マックスルアー
    desc: 部屋ごとの敵が増えますが、コインをより多く落とします
  ko:
    name: 골드코롱
    desc: 방마다 적이 늘어나지만 동전을 더 많이 떨어뜨린다
  zh:
    name: 黄金香水
    desc: 每个房间敌人更多，但掉落更多硬币
  zt:
    name: 黃金香水
    desc: 每個房間的敵人更多，但會掉落更多金幣
---
Plus d'ennemis dans chaque salle, mais ils lâchent plus de pièces

## Fonctionnement
- Quand une salle de combat normale se remplit, un ennemi supplémentaire apparaît : une copie d'un ennemi au hasard déjà présent, avec les mêmes PV, la même vitesse et les mêmes dégâts, placée à au moins 170 px de vous.
- Chaque ennemi vaincu a 20 % de chances de lâcher une [pièce](../world/coin.html) de plus, en plus de son butin normal (6 % + 0,5 % par point de Chance, voir [Butin des ennemis](../mechanics/botin_enemigos.html)). Les deux sont tirés séparément : un ennemi peut lâcher les deux. Il marche pour tous les joueurs dès qu'un joueur de l'équipe l'a.
- Ces pièces en plus sont limitées : 3 au maximum par salle et, par étage, 6 plus la moitié du numéro d'étage (arrondi).
- Il n'affecte ni les salles de boss ni les autres types de salle.

## Cumul
- C'est un effet tout ou rien : un second exemplaire n'ajoute pas un deuxième ennemi et n'augmente pas la chance de pièce.
- Il annule le [Talisman Sain](amuleto_puro.html), qui retire un ennemi des mêmes salles.
