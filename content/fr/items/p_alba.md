---
title: Pierre Aube
id: p_alba
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
  value: Évoli > Nymphali
- label: Lien
  value: 30 % de vos dégâts toutes les 1/3 s, jusqu'à 150 px
- label: Minimum
  value: 0,5 par tick
icon: items-ps/evo-item/dawn-stone.png
sprite: true
names:
  en:
    name: Dawn Stone
    desc: Evolves Eevee (Sylveon). Also, a ribbon links you to the nearest enemy and drains its health while it stays close
  es:
    name: Piedra Alba
    desc: Evoluciona a Eevee (Sylveon). Además, un lazo te une al enemigo más cercano y le quita vida mientras sigue cerca
  de:
    name: Funkelstein
    desc: Entwickelt Evoli (zu Feelinara). Außerdem verbindet dich ein Band mit dem nächsten Gegner und entzieht ihm Leben, solange er in der Nähe bleibt
  it:
    name: Pietralbore
    desc: Fa evolvere Eevee (Sylveon). Inoltre, un nastro ti lega al nemico più vicino e gli toglie vita finché resta vicino
  pt:
    name: Pedra da Alvorada
    desc: Evolui o Eevee (Sylveon). Além disso, um laço liga você ao inimigo mais próximo e drena a vida dele enquanto ele continuar perto
  ru:
    name: Камень рассвета
    desc: Эволюционирует Иви (в Сильвеона). Кроме того, лента связывает тебя с ближайшим врагом и вытягивает из него здоровье, пока он рядом
  ja:
    name: めざめいし
    desc: イーブイをニンフィアに進化させる。さらに、リボンで最も近い敵と結ばれ、近くにいる間その敵のHPを奪う
  ko:
    name: 각성의돌
    desc: 이브이를 진화시킨다(님피아). 또한 리본이 가장 가까운 적과 연결되어, 가까이 있는 동안 체력을 빼앗는다
  zh:
    name: 觉醒之石
    desc: 使伊布进化（仙子伊布）。此外，一条缎带会把你和最近的敌人连在一起，在它保持靠近时持续吸取其生命
  zt:
    name: 覺醒之石
    desc: 讓伊布進化（仙子伊布）。另外，會有一條緞帶把你和最近的敵人連在一起，只要牠還在附近就會持續吸取牠的生命
---
Fait évoluer Évoli (Nymphali). De plus, un ruban vous lie à l'ennemi le plus proche et draine sa vie tant qu'il reste près

## Fonctionnement

- Utilisée sur Évoli (avant son évolution), elle le transforme en Nymphali, et son type devient Fée.
- La première évolution donne +1 cœur (et le soigne), +1 Dégâts et vous grossit un peu. Ce bonus vient de l'évolution, pas de la pierre elle-même.
- Une fois Évoli évolué, les pierres suivantes ne le font plus évoluer, mais leur effet ci-dessous reste actif.
- Les Pokémon autres qu'Évoli n'évoluent pas avec cette pierre ; ils profitent quand même de son effet.
- L'effet fonctionne quel que soit le Pokémon joué et ne dépend pas d'une évolution.
- Si vous avez une [Pierre Éternelle](piedra_eterna.html), l'évolution est bloquée : vous gagnez +0,7 Dégâts et +1 cœur à la place, et l'effet reste actif.

## Effet

- Tant qu'il y a des ennemis, un ruban vous relie à l'ennemi le plus proche à moins de 150 px. Toutes les 1/3 de seconde, il lui inflige 30 % de vos dégâts (au moins 0,5).
- Le ruban se rompt si aucun ennemi n'est à moins de 150 px et se reconnecte au plus proche quand un ennemi approche.
- Cela marche aussi sur les boss. Le tick n'est pas un tir : il ne déclenche pas les objets à effet sur coup.

## Cumul

- Un deuxième exemplaire de la même pierre n'ajoute rien : l'effet est simplement activé.
- Des pierres différentes cumulent leurs effets.
