---
title: Talisman Sain
id: amuleto_puro
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Effet
  value: 1 ennemi de moins par salle de combat
- label: Jamais
  value: Salles à un seul ennemi, salles de boss
icon: items-ps/hold-item/cleanse-tag.png
sprite: true
names:
  en:
    name: Clear Amulet
    desc: One less enemy in each combat room
  es:
    name: Amuleto Puro
    desc: Un enemigo menos en cada sala de combate
  de:
    name: Neutralschmuck
    desc: Ein Gegner weniger in jedem Kampfraum
  it:
    name: Ciondolochiaro
    desc: Un nemico in meno in ogni stanza di combattimento
  pt:
    name: Amuleto Puro
    desc: Um inimigo a menos em cada sala de combate
  ru:
    name: Чистый амулет
    desc: На одного врага меньше в каждой боевой комнате
  ja:
    name: クリアチャーム
    desc: 戦闘の部屋ごとに敵が1体減る
  ko:
    name: 클리어참
    desc: 전투방마다 적이 1마리 줄어든다
  zh:
    name: 清净坠饰
    desc: 每个战斗房间减少一名敌人
  zt:
    name: 清淨墜飾
    desc: 每個戰鬥房間少一個敵人
---
Un ennemi de moins dans chaque salle de combat

## Fonctionnement
- Quand une salle de combat normale se remplit, un ennemi en est retiré, tant que la salle en compte plus d'un. Une salle avec un seul ennemi n'est pas touchée : elle n'est donc jamais vidée.
- Il n'affecte ni les salles de boss ni les autres types de salle.
- Moins d'ennemis signifie aussi moins de butin à la mort, mais la récompense de fin de salle reste la même.

## Cumul
- C'est un effet tout ou rien : un second exemplaire ne retire pas un deuxième ennemi.
- Il annule le [Max Leurre](cebo_max.html), qui ajoute un ennemi dans les mêmes salles.
