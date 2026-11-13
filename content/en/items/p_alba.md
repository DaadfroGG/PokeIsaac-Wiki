---
title: Dawn Stone
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
- text: Evolution stone
  good: true
details:
- label: Evolves
  value: Eevee > Sylveon
- label: Tether
  value: 30 % of your damage every 1/3 s, up to 150 px
- label: Minimum
  value: 0.5 per tick
icon: items-ps/evo-item/dawn-stone.png
sprite: true
names:
  es:
    name: Piedra Alba
    desc: Evoluciona a Eevee (Sylveon). Además, un lazo te une al enemigo más cercano y le quita vida mientras sigue cerca
  fr:
    name: Pierre Aube
    desc: Fait évoluer Évoli (Nymphali). De plus, un ruban vous lie à l'ennemi le plus proche et draine sa vie tant qu'il reste près
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
Evolves Eevee (Sylveon). Also, a ribbon links you to the nearest enemy and drains its health while it stays close

## How it works

- Using it on Eevee (before it has evolved) turns it into Sylveon, and its type becomes Fairy.
- The first evolution gives +1 heart (and heals it), +1 Damage and makes you a little bigger. This bonus comes from evolving, not from the stone itself.
- Once Eevee has evolved, further stones no longer evolve it, but their effect below stays active.
- Pokémon other than Eevee do not evolve from this stone; they still get its effect.
- The effect works for whatever Pokémon you play and does not depend on having evolved.
- If you carry an [Everstone](piedra_eterna.html), evolution is blocked: you get +0.7 Damage and +1 heart instead, and the effect still works.

## Effect

- While enemies are alive, a ribbon links you to the nearest enemy within 150 px. Every third of a second it deals 30 % of your damage to it (at least 0.5).
- The ribbon breaks if no enemy is within 150 px and reconnects to the nearest one when one comes close.
- It works on bosses too. The tick is not a shot, so it does not trigger on-hit items.

## Stacking

- A second copy of the same stone adds nothing: the effect is just switched on.
- Different stones add their effects together.
