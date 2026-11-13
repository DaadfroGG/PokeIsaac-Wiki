---
title: Bonbon Exp. S
id: s_caramelo_exp_s
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Cadence +
  good: true
- text: Vitesse +0,3
  good: true
- text: Dégâts -0,3
  good: false
details:
- label: Cadence
  value: +3 (0,05 s de moins entre les tirs)
- label: Vitesse
  value: +0,3
- label: Dégâts
  value: -0,3
icon: items-ps/exp-candy/s.png
sprite: true
names:
  en:
    name: Exp. Candy S
    desc: Fire rate and speed +, damage -
  es:
    name: Caramelo Exp. S
    desc: Cadencia y velocidad +, daño -
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
Cadence et vitesse +, dégâts -

## Fonctionnement
- Cadence +3 : 0,05 s de moins entre deux tirs. Les bonus de cadence suivent les [rendements décroissants](../mechanics/rendimientos.html) : les 3 premiers points au total comptent en entier, les 4 suivants à moitié, le reste au quart. Vous ne tirez jamais plus de 12 fois par seconde.
- La Vitesse +0,3 n'a pas de rendements décroissants. Votre vitesse ne descend jamais sous 1,6.
- Le -0,3 en Dégâts est retiré de vos bonus fixes ; les pénalités comptent en entier. Vos Dégâts ne descendent jamais sous 0,5.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Cadence).
