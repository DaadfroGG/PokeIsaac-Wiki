---
title: Eau Mystique
id: agua_mistica
kind: passive
category: shot
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Portée +40
  good: true
details:
- label: Portée
  value: '+40'
- label: Gouttelettes
  value: 3 par impact sur un mur ou un rocher
- label: Dégâts des gouttelettes
  value: 50 % du tir
- label: Portée des gouttelettes
  value: 120 px
icon: items/mystic-water.png
sprite: true
names:
  en:
    name: Mystic Water
    desc: When hitting walls and rocks, shots splash three droplets
  es:
    name: Agua Mística
    desc: Al chocar con paredes y rocas, los disparos salpican tres gotas
  de:
    name: Zauberwasser
    desc: Treffen Schüsse auf Wände und Felsen, spritzen drei Tropfen
  it:
    name: Acqua Magica
    desc: Quando colpiscono pareti e massi, i tiri schizzano tre gocce
  pt:
    name: Água Mística
    desc: Ao bater em paredes e rochas, os tiros espirram três gotas
  ru:
    name: Мистическая вода
    desc: При ударе о стены и валуны выстрелы разбрызгивают три капли
  ja:
    name: しんぴのしずく
    desc: 壁や岩に当たると、弾がしずくを3つ飛び散らせる
  ko:
    name: 신비의물방울
    desc: 벽이나 바위에 부딪히면 탄이 물방울 3개를 튀긴다
  zh:
    name: 神秘水滴
    desc: 弹撞到墙壁和石块时会溅出三滴飞沫
  zt:
    name: 神秘水滴
    desc: 彈撞上牆壁和岩石時，會濺出三滴水珠
---
En heurtant murs et rochers, les tirs éclaboussent trois gouttes

## Fonctionnement

- Ajoute +40 de Portée.
- Quand un de vos tirs touche un mur ou un rocher, il éclate en trois gouttelettes qui repartent vers vous en éventail (environ 30° de chaque côté). Chaque gouttelette inflige 50 % des dégâts du tir, est plus petite que le tir, garde son type et parcourt jusqu'à 120 px.
- Les gouttelettes n'ont aucun autre effet et ne peuvent pas éclabousser à nouveau. Les tirs divisés et autres tirs enfants n'éclaboussent pas.

## Cumul

- Chaque exemplaire ajoute encore +40 de Portée. L'éclaboussure est simplement activée : plus d'exemplaires n'ajoutent pas de gouttelettes.
