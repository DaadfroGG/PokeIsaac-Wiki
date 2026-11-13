---
title: Jus de Baie
id: bolsa_sangre
kind: passive
category: stats
family: core
tier: 1
pool_weight: 0
stats:
- text: Cœurs +1
  good: true
- text: Dégâts +0,3
  good: true
- text: Soigne 3 cœurs
  good: true
details:
- label: PV max
  value: +1 cœur
- label: Dégâts
  value: +0,3
- label: Soin
  value: 3 cœurs au ramassage
icon: items-ps/medicine/berry-juice.png
sprite: true
names:
  en:
    name: Berry Juice
    desc: Heart +1, heals you and raises damage a little
  es:
    name: Zumo de Baya
    desc: Corazón +1, te cura y sube un poco el daño
  de:
    name: Beerensaft
    desc: Herz +1, heilt dich und erhöht den Schaden etwas
  it:
    name: Succodibacca
    desc: Cuore +1, ti cura e aumenta un po' i danni
  pt:
    name: Suco de Fruta
    desc: Coração +1, cura e aumenta um pouco o dano
  ru:
    name: Ягодный сок
    desc: Сердце +1, лечит и немного повышает урон
  ja:
    name: きのみジュース
    desc: ハート+1、HPが回復してダメージが少し上がる
  ko:
    name: 나무열매쥬스
    desc: 하트 +1, 회복하고 대미지가 조금 오른다
  zh:
    name: 树果汁
    desc: 心+1，回复生命并略微提升伤害
  zt:
    name: 樹果汁
    desc: 愛心 +1，回復生命並稍微提升傷害
---
Cœur +1, vous soigne et augmente un peu les dégâts

## Fonctionnement
- Un réceptacle de cœur de plus, jusqu'à la limite de 12 cœurs. À 12 cœurs, vous n'en gagnez pas, mais le soin s'applique quand même.
- Le +0,3 en Dégâts est un bonus fixe : il s'ajoute à vos autres bonus fixes et suit les [rendements décroissants](../mechanics/rendimientos.html) (en entier jusqu'à +3 au total, puis de moins en moins).
- Il vous soigne de 3 cœurs en le ramassant ; ce soin ignore la limite de soins.

## Obtention
- Il n'est dans aucune réserve d'objets. Une [machine à dons](../world/blood.html) qui s'use après plusieurs dons peut le laisser : 30 % de chances d'avoir le Jus de Baie (15 % d'[Eau Fraîche](bolsa_suero.html) à la place). Faire exploser la machine avec une bombe ne donne du Jus de Baie que 9 % du temps.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Dégâts) et son soin.
