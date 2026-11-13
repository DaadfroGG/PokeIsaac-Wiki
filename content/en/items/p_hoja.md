---
title: Leaf Stone
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
- text: Evolution stone
  good: true
details:
- label: Evolves
  value: Eevee > Leafeon
- label: Bounce
  value: 60 % of damage, to an enemy within 220 px
- label: Times
  value: Once per shot
icon: items/leaf-stone.png
sprite: true
names:
  es:
    name: Piedra Hoja
    desc: Evoluciona a Eevee. Además, tus disparos rebotan del enemigo que golpean hacia otro cercano
  fr:
    name: Pierre Plante
    desc: Fait évoluer Évoli. De plus, vos tirs rebondissent de l'ennemi touché vers un autre ennemi proche
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
Evolves Eevee. Also, your shots bounce from the enemy they hit to another nearby

## How it works

- Using it on Eevee (before it has evolved) turns it into Leafeon, and its type becomes Grass.
- The first evolution gives +1 heart (and heals it), +1 Damage and makes you a little bigger. This bonus comes from evolving, not from the stone itself.
- Once Eevee has evolved, further stones no longer evolve it, but their effect below stays active.
- Pokémon other than Eevee do not evolve from this stone; they still get its effect.
- The effect works for whatever Pokémon you play and does not depend on having evolved.
- If you carry an [Everstone](piedra_eterna.html), evolution is blocked: you get +0.7 Damage and +1 heart instead, and the effect still works.

## Effect

- When one of your shots hits an enemy, a leaf bounces from that enemy to the nearest other enemy within 220 px. It deals 60 % of the shot's damage, is Grass-type and flies up to 240 px.
- Only once per shot, and only from your main shots: split shots, companion shots and other child shots do not bounce.
- If there is no other enemy within 220 px, nothing happens.

## Stacking

- A second copy of the same stone adds nothing: the effect is just switched on.
- Different stones add their effects together.
