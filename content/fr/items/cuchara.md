---
title: Cuillère Tordue
id: cuchara
kind: passive
category: stats
family: core
tier: 2
pools:
- boss
- shop
pool_weight: 2
stats:
- text: Dégâts +1,2
  good: true
- text: Vitesse -0,3
  good: false
details:
- label: Dégâts
  value: +1,2
- label: Vitesse
  value: -0,3
icon: items/twisted-spoon.png
sprite: true
names:
  en:
    name: Twisted Spoon
    desc: Damage +1.2, speed -
  es:
    name: Cuchara Torcida
    desc: Daño +1.2, velocidad -
  de:
    name: Krummlöffel
    desc: Schaden +1,2, Tempo -
  it:
    name: Cucchiaio Torto
    desc: Danni +1,2, velocità -
  pt:
    name: Colher Torta
    desc: Dano +1,2, velocidade -
  ru:
    name: Гнутая ложка
    desc: Урон +1,2, скорость -
  ja:
    name: まがったスプーン
    desc: ダメージ+1.2、移動速度-
  ko:
    name: 휘어진스푼
    desc: 대미지 +1.2, 속도 -
  zh:
    name: 弯曲的汤匙
    desc: 伤害+1.2，速度-
  zt:
    name: 彎曲的湯匙
    desc: 傷害+1.2，速度下降
---
Dégâts +1,2, vitesse -

## Fonctionnement
- Le +1,2 en Dégâts est un bonus fixe : il s'ajoute à vos autres bonus fixes et suit les [rendements décroissants](../mechanics/rendimientos.html) (en entier jusqu'à +3 au total, puis de moins en moins).
- La Vitesse -0,3 n'a pas de rendements décroissants. Votre vitesse ne descend jamais sous 1,6.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Dégâts).
