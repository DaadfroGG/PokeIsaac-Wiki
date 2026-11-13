---
title: Gigantamix
id: s_especias_gigamax
kind: passive
category: stats
family: core
tier: 4
pools:
- boss
pool_weight: 1
stats:
- text: Damage +1
  good: true
- text: Speed +0.3
  good: true
- text: Range +60
  good: true
- text: Hearts +1
  good: true
- text: Full heal
  good: true
details:
- label: Damage
  value: '+1'
- label: Speed
  value: '+0.3'
- label: Range
  value: +60 px
- label: Max HP
  value: +1 heart
- label: Healing
  value: Full heal
- label: Shot size
  value: +2.5 radius
icon: items-ps/curry-ingredient/gigantamix.png
sprite: true
names:
  es:
    name: Especias Gigamax
    desc: ¡Gigamax! Daño +1, velocidad +, alcance +, disparos más grandes, corazón +1 y te cura entero
  fr:
    name: Poudre Gigamax
    desc: Gigamax ! Dégâts +1, vitesse +, portée +, tirs plus gros, cœur +1 et soin complet
  de:
    name: Giga-Pulver
    desc: Gigadynamax! Schaden +1, Tempo +, Reichweite +, größere Schüsse, Herz +1 und volle Heilung
  it:
    name: Gigaspezia
    desc: Gigamax! Danni +1, velocità +, gittata +, tiri più grandi, cuore +1 e ti cura del tutto
  pt:
    name: Gigamistura
    desc: Gigantamax! Dano +1, velocidade +, alcance +, tiros maiores, coração +1 e cura tudo
  ru:
    name: Гигамакс-смесь
    desc: Гигантамакс! Урон +1, скорость +, дальность +, выстрелы крупнее, сердце +1 и полное лечение
  ja:
    name: キョダイパウダー
    desc: キョダイマックス！ダメージ+1、移動速度+、射程+、ショット拡大、ハート+1、HP全回復
  ko:
    name: 거대파우더
    desc: 거다이맥스! 대미지 +1, 속도 +, 사거리 +, 탄이 커지고 하트 +1, 체력 완전 회복
  zh:
    name: 超极粉
    desc: 超极巨化！伤害+1，速度提升，射程提升，弹变大，心之容器+1并完全回复生命
  zt:
    name: 超極粉
    desc: 超極巨化！傷害+1，速度+，射程+，彈更大，愛心+1並完全治癒
---
Gigantamax! Damage +1, speed +, range +, bigger shots, heart +1 and fully healed

## How it works
- The +1 Damage is a flat bonus: it adds up with your other flat bonuses and follows the [diminishing returns](../mechanics/rendimientos.html) (in full up to +3 in total, then less and less).
- Speed +0.3 has no diminishing returns. Your speed never goes below 1.6.
- Range +60: your shots travel 60 px farther, with no diminishing returns.
- One more heart container, up to the limit of 12 hearts. At 12 hearts you get no container, but the heal still applies.
- It heals you fully when you pick it up; this heal ignores the healing limit.
- Bigger shots: +2.5 to their radius (a normal shot has 7), so they hit enemies more easily. It also makes blasts like the [Toxic Orb](m_toxisfera.html)'s a bit larger.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Damage), shots get bigger again, and it heals you fully again.
