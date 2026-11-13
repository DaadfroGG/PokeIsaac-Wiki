---
title: Zinc
id: zinc
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Dégâts +0,4
  good: true
- text: Cadence +
  good: true
details:
- label: Dégâts
  value: +0,4
- label: Cadence
  value: −0,02 s entre deux tirs
- label: Cumul
  value: Chaque exemplaire s'ajoute
icon: items/zinc.png
sprite: true
names:
  en:
    name: Zinc
    desc: Damage + and fire rate +
  es:
    name: Zinc
    desc: Daño + y cadencia +
  de:
    name: Zink
    desc: Schaden + und Feuerrate +
  it:
    name: Zinco
    desc: Danni + e cadenza +
  pt:
    name: Zinco
    desc: Dano + e cadência +
  ru:
    name: Цинк
    desc: Урон + и темп стрельбы +
  ja:
    name: キトサン
    desc: ダメージ+、連射+
  ko:
    name: 키토산
    desc: 대미지 +, 연사 +
  zh:
    name: 特防增强剂
    desc: 伤害+，射速+
  zt:
    name: 特防增強劑
    desc: 傷害+、射速+
---
Dégâts + et cadence +

## Fonctionnement
- Dégâts +0,4 : un bonus fixe ajouté aux Dégâts de base de votre Pokémon. Tous les bonus fixes de Dégâts des objets sont d'abord additionnés ; les 3 premiers points comptent en entier, de +3 à +8 pour moitié, de +8 à +40 pour un quart et au-delà pour 5 % (voir [Rendements décroissants](../mechanics/rendimientos.html)).
- Cadence : raccourcit le délai entre deux tirs de 0,02 s. Les bonus de cadence de tous vos objets sont additionnés : les 3 premiers points comptent en entier, les 4 suivants pour moitié et le reste pour un quart. Quoi que vous fassiez, vous ne pouvez jamais tirer plus de 12 fois par seconde.

## Cumul
- Chaque exemplaire ajoute à nouveau ses bonus, sans limite de copies. Les rendements décroissants décrits plus haut s'appliquent au total, pas à chaque copie séparément.
