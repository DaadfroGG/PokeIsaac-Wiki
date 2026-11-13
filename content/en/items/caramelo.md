---
title: Rare Candy
id: caramelo
kind: passive
category: evo
family: core
tier: 1
pools:
- boss
pool_weight: 5
stats:
- text: Damage +0.3
  good: true
- text: Speed +0.2
  good: true
- text: Evolves
  good: true
details:
- label: Evolution
  value: Next form (random if there are several)
- label: Stats
  value: Damage +0.3, Speed +0.2
- label: Evolution bonus
  value: Hearts +1, Damage +1 (then +1.5)
- label: No evolution left
  value: Damage +0.7, Hearts +1
icon: items/rare-candy.png
sprite: true
names:
  es:
    name: Caramelo Raro
    desc: '¡Evoluciona! (si ya no puede: daño y vida +)'
  fr:
    name: Super Bonbon
    desc: 'Évolution ! (sinon : dégâts et vie +)'
  de:
    name: Sonderbonbon
    desc: 'Entwickle dich! (falls nicht mehr möglich: Schaden und Leben +)'
  it:
    name: Caramella rara
    desc: 'Si evolve! (se non può più: danni e vita +)'
  pt:
    name: Doce Raro
    desc: 'Evolui! (se não puder mais: dano e vida +)'
  ru:
    name: Редкая конфета
    desc: 'Эволюция! (если некуда: урон и здоровье +)'
  ja:
    name: ふしぎなアメ
    desc: 進化する！（進化できない場合：ダメージとHP+）
  ko:
    name: 이상한사탕
    desc: '진화! (더 진화할 수 없으면: 대미지와 체력 +)'
  zh:
    name: 神奇糖果
    desc: 进化！（若无法再进化：伤害和生命提升）
  zt:
    name: 神奇糖果
    desc: 進化！（若無法進化：傷害與生命提升）
---
Evolve! (if it can't: damage and health +)

## How it works

- Evolves your current Pokémon one stage as soon as you pick it up. If it can evolve into several forms, one is chosen at random (Eevee turns into one of its eight evolutions).
- The 1st evolution gives +1 heart (healed), +1 Damage and a little extra size. The 2nd gives +1 heart, +1.5 Damage and a bit more size, but -0.2 Speed.
- The Rare Candy's own +0.3 Damage and +0.2 Speed are added on top, every time.
- If your Pokémon is already fully evolved (or Eevee has already evolved), nothing evolves: you get +0.7 Damage and +1 heart (healed) instead.
- With an [Everstone](piedra_eterna.html) you never evolve: you get the same +0.7 Damage and +1 heart.
- Your type changes to match the new form when it differs. See [Levels and evolution](../mechanics/niveles_pokemon.html) for how Pokémon also evolve by leveling.

## Stacking

- Each Rare Candy acts when picked up: a second one evolves you again (or gives the +0.7 Damage and +1 heart bonus if there is nothing left).
