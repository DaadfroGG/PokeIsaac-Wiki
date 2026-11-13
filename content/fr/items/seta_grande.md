---
title: Gros Champi
id: seta_grande
kind: passive
category: defense
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Cœurs +1
  good: true
- text: Dégâts +0,5
  good: true
- text: Soigne 1 cœur
  good: true
details:
- label: Cœurs
  value: +1 réceptacle
- label: Dégâts
  value: +0,5
- label: Soin
  value: 1 cœur au ramassage
- label: Taille
  value: Votre sprite grandit de 20 %
icon: items-ps/valuable-item/big-mushroom.png
sprite: true
names:
  en:
    name: Big Mushroom
    desc: 'You grow: heart +1 and damage +0.5'
  es:
    name: Seta Grande
    desc: 'Creces: corazón +1 y daño +0.5'
  de:
    name: Riesenpilz
    desc: 'Du wächst: Herz +1 und Schaden +0,5'
  it:
    name: Grande Fungo
    desc: 'Cresci: cuore +1 e danni +0,5'
  pt:
    name: Cogumelo Grande
    desc: 'Você cresce: coração +1 e dano +0,5'
  ru:
    name: Большой гриб
    desc: 'Ты растешь: сердце +1 и урон +0,5'
  ja:
    name: おおきなキノコ
    desc: 成長：ハート+1、ダメージ+0.5
  ko:
    name: 큰버섯
    desc: '커진다: 하트 +1, 대미지 +0.5'
  zh:
    name: 大蘑菇
    desc: 你成长了：心+1，伤害+0.5
  zt:
    name: 大蘑菇
    desc: 你成長了：愛心+1，傷害+0.5
---
Vous grandissez : cœur +1 et dégâts +0,5

## Fonctionnement

- Ajoute un réceptacle de cœur, +0,5 Dégâts et soigne 1 cœur dès le ramassage.
- Le +0,5 est un bonus de Dégâts fixe : il subit les [rendements décroissants](../mechanics/rendimientos.html) une fois vos bonus fixes au-delà de +3.
- Votre sprite est dessiné 20 % plus grand jusqu'à la fin de la partie. Le [Mini Champi](mini_seta.html) fait l'inverse (20 % plus petit) ; avec les deux, vous êtes à ×0,96.

## Cumul

- Chaque exemplaire ajoute un autre réceptacle, un autre +0,5 Dégâts et un autre soin.
- L'agrandissement est un ×1,2 unique : les exemplaires suivants ne vous agrandissent pas davantage.
