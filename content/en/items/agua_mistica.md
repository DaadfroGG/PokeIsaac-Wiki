---
title: Mystic Water
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
- text: Range +40
  good: true
details:
- label: Range
  value: '+40'
- label: Droplets
  value: 3 per wall or rock hit
- label: Droplet damage
  value: 50 % of the shot
- label: Droplet range
  value: 120 px
icon: items/mystic-water.png
sprite: true
names:
  es:
    name: Agua Mística
    desc: Al chocar con paredes y rocas, los disparos salpican tres gotas
  fr:
    name: Eau Mystique
    desc: En heurtant murs et rochers, les tirs éclaboussent trois gouttes
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
When hitting walls and rocks, shots splash three droplets

## How it works

- Adds +40 Range.
- When one of your shots hits a wall or a rock, it bursts into three droplets that fly back toward you in a fan (about 30° to each side). Each droplet deals 50 % of the shot's damage, is smaller than the shot, keeps its type and travels up to 120 px.
- Droplets carry no other effects and cannot splash again. Split shots and other child shots do not splash.

## Stacking

- Each copy adds another +40 Range. The splash itself is just switched on: more copies do not add droplets.
