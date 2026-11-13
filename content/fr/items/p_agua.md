---
title: Pierre Eau
id: p_agua
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
  value: Évoli > Aquali
- label: Rayon
  value: 130 px autour de l'ennemi touché
- label: Boss
  value: Ils ne sont pas attirés
icon: items/water-stone.png
sprite: true
names:
  en:
    name: Water Stone
    desc: Evolves Eevee. Also, each hit pulls nearby enemies toward the one hit (groups them up)
  es:
    name: Piedra Agua
    desc: Evoluciona a Eevee. Además, cada golpe arrastra hacia el enemigo golpeado a los que tiene cerca (los agrupa)
  de:
    name: Wasserstein
    desc: Entwickelt Evoli. Außerdem zieht jeder Treffer Gegner in der Nähe zum getroffenen Gegner (gruppiert sie)
  it:
    name: Pietraidrica
    desc: Fa evolvere Eevee. Inoltre, ogni colpo attira verso il nemico colpito quelli che ha vicino (li raggruppa)
  pt:
    name: Pedra da Água
    desc: Evolui o Eevee. Além disso, cada golpe puxa para o inimigo atingido os que estão por perto (agrupa-os)
  ru:
    name: Водный камень
    desc: Эволюционирует Иви. Кроме того, каждый удар притягивает ближних врагов к пораженному (собирает их в кучу)
  ja:
    name: みずのいし
    desc: イーブイを進化させる。さらに、攻撃が当たるたび、当たった敵の近くにいる敵がそちらへ引き寄せられる（敵が集まる）
  ko:
    name: 물의돌
    desc: 이브이를 진화시킨다. 또한 공격할 때마다 맞힌 적 근처의 적을 그쪽으로 끌어당긴다(한데 모은다)
  zh:
    name: 水之石
    desc: 使伊布进化。此外，每次命中都会把周围的敌人拉向被击中的敌人（将它们聚拢）
  zt:
    name: 水之石
    desc: 讓伊布進化。此外，每次命中都會把附近的敵人拉向被擊中的敵人（將牠們聚集起來）
---
Fait évoluer Évoli. De plus, chaque coup attire vers l'ennemi touché ceux qui sont à proximité (il les regroupe)

## Fonctionnement

- Utilisée sur Évoli (avant son évolution), elle le transforme en Aquali, et son type devient Eau.
- La première évolution donne +1 cœur (et le soigne), +1 Dégâts et vous grossit un peu. Ce bonus vient de l'évolution, pas de la pierre elle-même.
- Une fois Évoli évolué, les pierres suivantes ne le font plus évoluer, mais leur effet ci-dessous reste actif.
- Les Pokémon autres qu'Évoli n'évoluent pas avec cette pierre ; ils profitent quand même de son effet.
- L'effet fonctionne quel que soit le Pokémon joué et ne dépend pas d'une évolution.
- Si vous avez une [Pierre Éternelle](piedra_eterna.html), l'évolution est bloquée : vous gagnez +0,7 Dégâts et +1 cœur à la place, et l'effet reste actif.

## Effet

- Chaque fois qu'un de vos tirs touche un ennemi, tous les autres ennemis non-boss à moins de 130 px de lui sont attirés vers lui, ce qui regroupe les ennemis.
- Les tirs divisés et autres tirs enfants n'attirent pas.
- Les [boss](../mechanics/jefes_adaptativos.html) ne sont jamais attirés.

## Cumul

- Un deuxième exemplaire de la même pierre n'ajoute rien : l'effet est simplement activé.
- Des pierres différentes cumulent leurs effets.
