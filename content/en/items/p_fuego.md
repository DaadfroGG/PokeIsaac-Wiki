---
title: Fire Stone
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
- text: Evolution stone
  good: true
details:
- label: Evolves
  value: Eevee > Flareon
- label: Heat
  value: Burns enemies within 90 px
- label: Rhythm
  value: Every 0.5 s, only while enemies are alive
icon: items/fire-stone.png
sprite: true
names:
  es:
    name: Piedra Fuego
    desc: Evoluciona a Eevee. Además, los enemigos que se te acercan empiezan a arder
  fr:
    name: Pierre Feu
    desc: Fait évoluer Évoli. De plus, les ennemis qui s'approchent de vous commencent à brûler
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
Evolves Eevee. Also, enemies that come close to you start burning

## How it works

- Using it on Eevee (before it has evolved) turns it into Flareon, and its type becomes Fire.
- The first evolution gives +1 heart (and heals it), +1 Damage and makes you a little bigger. This bonus comes from evolving, not from the stone itself.
- Once Eevee has evolved, further stones no longer evolve it, but their effect below stays active.
- Pokémon other than Eevee do not evolve from this stone; they still get its effect.
- The effect works for whatever Pokémon you play and does not depend on having evolved.
- If you carry an [Everstone](piedra_eterna.html), evolution is blocked: you get +0.7 Damage and +1 heart instead, and the effect still works.

## Effect

- While a room still has enemies, every 0.5 seconds each enemy within 90 px of you (measured to its edge) is set on fire for at least 0.7 seconds. Staying close keeps them burning.
- It works on bosses too.
- Burn follows the usual rules; see [Status effects](../mechanics/estados.html).

## Stacking

- A second copy of the same stone adds nothing: the effect is just switched on.
- Different stones add their effects together.
