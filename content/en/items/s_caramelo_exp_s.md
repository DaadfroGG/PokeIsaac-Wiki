---
title: Exp. Candy S
id: s_caramelo_exp_s
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Fire rate +
  good: true
- text: Speed +0.3
  good: true
- text: Damage -0.3
  good: false
details:
- label: Fire rate
  value: +3 (0.05 s less between shots)
- label: Speed
  value: '+0.3'
- label: Damage
  value: '-0.3'
icon: items-ps/exp-candy/s.png
sprite: true
names:
  es:
    name: Caramelo Exp. S
    desc: Cadencia y velocidad +, daño -
  fr:
    name: Bonbon Exp. S
    desc: Cadence et vitesse +, dégâts -
  de:
    name: EP-Bonbon S
    desc: Feuerrate und Tempo +, Schaden -
  it:
    name: Caram. Esp. S
    desc: Cadenza e velocità +, danni -
  pt:
    name: Doce Exp. S
    desc: Cadência e velocidade +, dano -
  ru:
    name: Конфета опыта S
    desc: Темп стрельбы и скорость +, урон -
  ja:
    name: けいけんアメＳ
    desc: 連射速度と移動速度+、ダメージ-
  ko:
    name: 경험사탕S
    desc: 연사·속도 +, 대미지 -
  zh:
    name: 经验糖果Ｓ
    desc: 射速和速度+，伤害-
  zt:
    name: 經驗糖果Ｓ
    desc: 射速和速度 +，傷害 -
---
Fire rate and speed +, damage -

## How it works
- Fire rate +3: 0.05 s less between shots. Fire-rate bonuses follow the [diminishing returns](../mechanics/rendimientos.html): the first 3 points in total count in full, the next 4 at half, the rest at a quarter. You never shoot more than 12 times per second.
- Speed +0.3 has no diminishing returns. Your speed never goes below 1.6.
- The -0.3 Damage is taken off your flat bonuses; penalties count in full. Your Damage never goes below 0.5.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Fire rate).
