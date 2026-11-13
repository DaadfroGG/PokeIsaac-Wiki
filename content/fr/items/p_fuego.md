---
title: Pierre Feu
id: p_fuego
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
  value: Évoli > Pyroli
- label: Chaleur
  value: Brûle les ennemis à moins de 90 px
- label: Rythme
  value: Toutes les 0,5 s, seulement s'il reste des ennemis
icon: items/fire-stone.png
sprite: true
names:
  en:
    name: Fire Stone
    desc: Evolves Eevee. Also, enemies that come close to you start burning
  es:
    name: Piedra Fuego
    desc: Evoluciona a Eevee. Además, los enemigos que se te acercan empiezan a arder
  de:
    name: Feuerstein
    desc: Entwickelt Evoli. Außerdem fangen Gegner, die dir nahekommen, Feuer
  it:
    name: Pietrafocaia
    desc: Fa evolvere Eevee. Inoltre, i nemici che ti si avvicinano iniziano a bruciare
  pt:
    name: Pedra do Fogo
    desc: Evolui o Eevee. Além disso, os inimigos que se aproximam de você começam a queimar
  ru:
    name: Огненный камень
    desc: Эволюционирует Иви. Кроме того, враги, подошедшие к тебе, начинают гореть
  ja:
    name: ほのおのいし
    desc: イーブイを進化させる。さらに、近づいてきた敵が燃え始める
  ko:
    name: 불꽃의돌
    desc: 이브이를 진화시킨다. 또한 다가오는 적이 불타기 시작한다
  zh:
    name: 火之石
    desc: 使伊布进化。此外，靠近你的敌人会开始燃烧
  zt:
    name: 火之石
    desc: 讓伊布進化。此外，靠近你的敵人會開始燃燒
---
Fait évoluer Évoli. De plus, les ennemis qui s'approchent de vous commencent à brûler

## Fonctionnement

- Utilisée sur Évoli (avant son évolution), elle le transforme en Pyroli, et son type devient Feu.
- La première évolution donne +1 cœur (et le soigne), +1 Dégâts et vous grossit un peu. Ce bonus vient de l'évolution, pas de la pierre elle-même.
- Une fois Évoli évolué, les pierres suivantes ne le font plus évoluer, mais leur effet ci-dessous reste actif.
- Les Pokémon autres qu'Évoli n'évoluent pas avec cette pierre ; ils profitent quand même de son effet.
- L'effet fonctionne quel que soit le Pokémon joué et ne dépend pas d'une évolution.
- Si vous avez une [Pierre Éternelle](piedra_eterna.html), l'évolution est bloquée : vous gagnez +0,7 Dégâts et +1 cœur à la place, et l'effet reste actif.

## Effet

- Tant qu'il reste des ennemis dans la salle, toutes les 0,5 seconde, chaque ennemi à moins de 90 px de vous (mesuré à son bord) prend feu pendant au moins 0,7 seconde. Rester près d'eux les maintient en feu.
- Cela marche aussi sur les boss.
- La brûlure suit les règles habituelles ; voir [Effets de statut](../mechanics/estados.html).

## Cumul

- Un deuxième exemplaire de la même pierre n'ajoute rien : l'effet est simplement activé.
- Des pierres différentes cumulent leurs effets.
