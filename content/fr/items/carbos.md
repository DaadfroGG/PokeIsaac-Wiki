---
title: Carbone
id: carbos
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Vitesse +0,4
  good: true
- text: Cadence +
  good: true
details:
- label: Vitesse
  value: +0,4
- label: Cadence
  value: +1,5 (0,025 s de moins entre les tirs)
icon: items/carbos.png
sprite: true
names:
  en:
    name: Carbos
    desc: Speed + and fire rate +
  es:
    name: Carburante
    desc: Velocidad + y cadencia +
  de:
    name: Carbon
    desc: Tempo + und Feuerrate +
  it:
    name: Carburante
    desc: Velocità + e cadenza +
  pt:
    name: Carbono
    desc: Velocidade + e cadência +
  ru:
    name: Карбос
    desc: Скорость + и темп стрельбы +
  ja:
    name: インドメタシン
    desc: 移動速度+・連射+
  ko:
    name: 알칼로이드
    desc: 속도 +, 연사 +
  zh:
    name: 速度增强剂
    desc: 速度+，射速+
  zt:
    name: 速度增強劑
    desc: 速度+、射速+
---
Vitesse + et cadence +

## Fonctionnement
- La Vitesse +0,4 n'a pas de rendements décroissants. Votre vitesse ne descend jamais sous 1,6.
- Cadence +1,5 : 0,025 s de moins entre deux tirs. Les bonus de cadence suivent les [rendements décroissants](../mechanics/rendimientos.html) : les 3 premiers points au total comptent en entier, les 4 suivants à moitié, le reste au quart. Vous ne tirez jamais plus de 12 fois par seconde.

## Obtention
- Salles au trésor et boutiques.
- En mode Classique, la boutique du dernier étage de chaque chapitre (tous les 10 étages) vend aussi deux vitamines (plus chères que les objets habituels) : PV Plus d'abord si quelqu'un n'est pas à la limite de cœurs, puis deux au hasard parmi Protéine, Calcium, Zinc, Fer, PP Max et Carbone, de préférence celles que vous n'avez pas encore.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Cadence).
