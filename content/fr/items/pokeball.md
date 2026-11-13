---
title: Poké Ball
id: pokeball
kind: active
family: core
tier: 1
pools:
- treasure
- shop
charge: 4
details:
- label: Charge
  value: 4 salles
- label: Cible
  value: Ennemi non-boss à 40 % de PV ou moins
- label: Portée
  value: 220 px
- label: Compagnon
  value: Permanent ; dégâts 2 + 0,4 par étage passé, comme tout compagnon
icon: items/poke-ball.png
sprite: true
names:
  en:
    name: Poké Ball
    desc: 'Captures a weak enemy: it will follow you'
  es:
    name: Poké Ball
    desc: 'Captura un enemigo débil: te acompañará'
  de:
    name: Pokéball
    desc: 'Fängt einen schwachen Gegner: Er begleitet dich'
  it:
    name: Poké Ball
    desc: 'Cattura un nemico debole: ti accompagnerà'
  pt:
    name: Poké Bola
    desc: 'Captura um inimigo fraco: ele acompanhará você'
  ru:
    name: Покебол
    desc: 'Ловит ослабленного врага: он пойдет с тобой'
  ja:
    name: モンスターボール
    desc: 弱った敵を捕まえる。なかまになってついてくる
  ko:
    name: 몬스터볼
    desc: '약해진 적을 포획한다: 동료가 된다'
  zh:
    name: 精灵球
    desc: 捕获一个虚弱的敌人：它会跟随你
  zt:
    name: 精靈球
    desc: 捕捉一個虛弱的敵人：牠會跟著你
---
Capture un ennemi affaibli : il vous accompagnera

## Fonctionnement
- Charge : 4 salles. Chaque salle terminée donne 1 charge.
- Il capture l'ennemi le plus proche à moins de 220 px qui n'est pas un boss et qui a 40 % de ses PV max ou moins. S'il n'y en a pas, rien ne se passe et aucune charge n'est dépensée.
- Il est inutilisable si vos [compagnons](../mechanics/companeros.html) sont déjà à leur maximum.
- L'ennemi capturé disparaît et vous rejoint comme compagnon permanent de sa propre espèce. Il tire pour vous jusqu'à la fin de la partie, avec le style d'attaque de cette espèce.
- Le compagnon inflige les mêmes dégâts que tous les autres compagnons : 2, plus 0,4 par étage déjà passé (2 au premier étage, 5,6 à l'étage 10). Ils continuent de grandir quand vous descendez, quel que soit l'étage de la capture (voir [Compagnons](../mechanics/companeros.html)).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec une [Pile Cellulaire](d_pila.html), l'objet peut stocker le double de charge.
