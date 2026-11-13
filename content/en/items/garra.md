---
title: Razor Claw
id: garra
kind: passive
category: shot
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Per hit
  value: +4 % damage (max +40 % with 10 in a row)
- label: On a miss
  value: A shot that hits a wall or a rock without having hit anyone resets the streak
- label: Counts
  value: First hit of each main shot only
icon: items/razor-claw.png
sprite: true
names:
  es:
    name: Garra Afilada
    desc: 'Cada disparo que acierta afila la garra: +4 % de daño, hasta +40 %. Si un disparo se pierde contra la pared, la racha vuelve a cero'
  fr:
    name: Griffe Rasoir
    desc: 'Chaque tir qui touche aiguise la griffe : +4 % de dégâts, jusqu''à +40 %. Si un tir se perd contre un mur, la série retombe à zéro'
  de:
    name: Scharfklaue
    desc: ''
  it:
    name: Affilartigli
    desc: ''
  pt:
    name: Garra Afiada
    desc: ''
  ru:
    name: Острый коготь
    desc: ''
  ja:
    name: するどいツメ
    desc: ''
  ko:
    name: 예리한손톱
    desc: ''
  zh:
    name: 锐利之爪
    desc: ''
  zt:
    name: 銳利之爪
    desc: ''
---
Every shot that hits sharpens the claw: +4% damage, up to +40%. If a shot is wasted against a wall, the streak resets to zero

## How it works
- Each main shot that hits an enemy adds one level to the claw, up to 10. Each level is +4 % damage (+40 % at 10), applied to all your damage like a multiplier.
- Only the first hit of a shot counts: a piercing shot that hits three enemies adds one level, not three.
- Companion shots, split shots and other child shots do not add levels and do not break the streak.
- A main shot that ends against a wall, a rock or another obstacle without having hit any enemy resets the claw to 0. A shot that simply runs out of range does not reset it.
- The streak is kept between rooms.

## Stacking
- It does not stack: a second copy changes nothing (still +4 % per level, max +40 %).
