---
title: CT Vive-Attaque
id: mt_rapido
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
  value: +2 (0,033 s de moins entre les tirs)
icon: items/tm-flying.png
sprite: true
names:
  en:
    name: TM Quick Attack
    desc: Speed and fire rate +
  es:
    name: MT Ataque Rápido
    desc: Velocidad y cadencia +
  de:
    name: TM Ruckzuckhieb
    desc: Tempo und Feuerrate +
  it:
    name: MT Attacco Rapido
    desc: Velocità e cadenza +
  pt:
    name: MT Ataque Rápido
    desc: Velocidade e cadência +
  ru:
    name: ТМ Быстрая атака
    desc: Скорость и темп стрельбы +
  ja:
    name: わざマシン・でんこうせっか
    desc: 移動速度・連射+
  ko:
    name: 기술머신 전광석화
    desc: 속도와 연사 +
  zh:
    name: 招式机器 电光一闪
    desc: 速度和射速+
  zt:
    name: 招式學習器 電光一閃
    desc: 速度和射速+
---
Vitesse et cadence +

## Fonctionnement
- La Vitesse +0,4 n'a pas de rendements décroissants. Votre vitesse ne descend jamais sous 1,6.
- Cadence +2 : 0,033 s de moins entre deux tirs. Les bonus de cadence suivent les [rendements décroissants](../mechanics/rendimientos.html) : les 3 premiers points au total comptent en entier, les 4 suivants à moitié, le reste au quart. Vous ne tirez jamais plus de 12 fois par seconde.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Cadence).
