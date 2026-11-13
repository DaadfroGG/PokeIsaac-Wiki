---
title: Water Stone
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
- text: Evolution stone
  good: true
details:
- label: Evolves
  value: Eevee > Vaporeon
- label: Radius
  value: 130 px around the enemy you hit
- label: Bosses
  value: They are not pulled
icon: items/water-stone.png
sprite: true
names:
  es:
    name: Piedra Agua
    desc: Evoluciona a Eevee. Además, cada golpe arrastra hacia el enemigo golpeado a los que tiene cerca (los agrupa)
  fr:
    name: Pierre Eau
    desc: Fait évoluer Évoli. De plus, chaque coup attire vers l'ennemi touché ceux qui sont à proximité (il les regroupe)
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
Evolves Eevee. Also, each hit pulls nearby enemies toward the one hit (groups them up)

## How it works

- Using it on Eevee (before it has evolved) turns it into Vaporeon, and its type becomes Water.
- The first evolution gives +1 heart (and heals it), +1 Damage and makes you a little bigger. This bonus comes from evolving, not from the stone itself.
- Once Eevee has evolved, further stones no longer evolve it, but their effect below stays active.
- Pokémon other than Eevee do not evolve from this stone; they still get its effect.
- The effect works for whatever Pokémon you play and does not depend on having evolved.
- If you carry an [Everstone](piedra_eterna.html), evolution is blocked: you get +0.7 Damage and +1 heart instead, and the effect still works.

## Effect

- Each time one of your shots hits an enemy, every other non-boss enemy within 130 px of it is pulled toward it, which bunches groups together.
- Split shots and other child shots do not pull.
- [Bosses](../mechanics/jefes_adaptativos.html) are never pulled.

## Stacking

- A second copy of the same stone adds nothing: the effect is just switched on.
- Different stones add their effects together.
