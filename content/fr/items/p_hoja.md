---
title: Pierre Plante
id: p_hoja
kind: passive
category: evo
family: core
tier: 1
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Pierre d'évolution
  good: true
details:
- label: Évolue
  value: Évoli > Phyllali
- label: Ricochet
  value: 60 % des dégâts, vers un ennemi à moins de 220 px
- label: Fois
  value: Une par tir
icon: items/leaf-stone.png
sprite: true
names:
  en:
    name: Leaf Stone
    desc: Evolves Eevee. Also, your shots bounce from the enemy they hit to another nearby
  es:
    name: Piedra Hoja
    desc: Evoluciona a Eevee. Además, tus disparos rebotan del enemigo que golpean hacia otro cercano
  de:
    name: Blattstein
    desc: Entwickelt Evoli. Außerdem prallen deine Schüsse vom getroffenen Gegner auf einen anderen in der Nähe ab
  it:
    name: Pietrafoglia
    desc: Fa evolvere Eevee. Inoltre, i tuoi tiri rimbalzano dal nemico colpito verso un altro vicino
  pt:
    name: Pedra da Folha
    desc: Evolui o Eevee. Além disso, seus tiros ricocheteiam do inimigo atingido para outro próximo
  ru:
    name: Лиственный камень
    desc: Эволюционирует Иви. Кроме того, твои выстрелы отскакивают от пораженного врага к другому поблизости
  ja:
    name: リーフのいし
    desc: イーブイを進化させる。さらに、ショットが当たった敵から近くの別の敵へはね返る
  ko:
    name: 리프의돌
    desc: 이브이를 진화시킨다. 또한 탄이 맞힌 적에게서 근처의 다른 적에게 튕긴다
  zh:
    name: 叶之石
    desc: 使伊布进化。此外，你的弹会从命中的敌人身上弹向附近的另一个敌人
  zt:
    name: 葉之石
    desc: 讓伊布進化。此外，你的彈會從擊中的敵人反彈到附近的另一個敵人
---
Fait évoluer Évoli. De plus, vos tirs rebondissent de l'ennemi touché vers un autre ennemi proche

## Fonctionnement

- Utilisée sur Évoli (avant son évolution), elle le transforme en Phyllali, et son type devient Plante.
- La première évolution donne +1 cœur (et le soigne), +1 Dégâts et vous grossit un peu. Ce bonus vient de l'évolution, pas de la pierre elle-même.
- Une fois Évoli évolué, les pierres suivantes ne le font plus évoluer, mais leur effet ci-dessous reste actif.
- Les Pokémon autres qu'Évoli n'évoluent pas avec cette pierre ; ils profitent quand même de son effet.
- L'effet fonctionne quel que soit le Pokémon joué et ne dépend pas d'une évolution.
- Si vous avez une [Pierre Éternelle](piedra_eterna.html), l'évolution est bloquée : vous gagnez +0,7 Dégâts et +1 cœur à la place, et l'effet reste actif.

## Effet

- Quand un de vos tirs touche un ennemi, une feuille rebondit de cet ennemi vers l'ennemi le plus proche à moins de 220 px. Elle inflige 60 % des dégâts du tir, est de type Plante et vole jusqu'à 240 px.
- Une seule fois par tir, et seulement pour vos tirs principaux : les tirs divisés, tirs de compagnons et autres tirs enfants ne rebondissent pas.
- S'il n'y a pas d'autre ennemi à moins de 220 px, il ne se passe rien.

## Cumul

- Un deuxième exemplaire de la même pierre n'ajoute rien : l'effet est simplement activé.
- Des pierres différentes cumulent leurs effets.
