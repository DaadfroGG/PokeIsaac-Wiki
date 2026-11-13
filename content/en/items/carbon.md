---
title: Charcoal
id: carbon
kind: passive
category: shot
family: core
tier: 2
pool_weight: 2
stats:
- text: Damage +0.3
  good: true
details:
- label: Chance
  value: 25 % per hit, +2 % per Luck
- label: Burn
  value: 2 seconds
- label: Spread
  value: Dying burning enemies ignite others within 120 px
icon: items/charcoal.png
sprite: true
names:
  es:
    name: Carbón
    desc: A veces queman; quien cae quemado prende fuego a los de al lado
  fr:
    name: Charbon
    desc: Brûlent parfois ; un ennemi qui meurt en brûlant enflamme ses voisins
  de:
    name: Holzkohle
    desc: Manchmal brennen sie; wer brennend fällt, setzt seine Nachbarn in Brand
  it:
    name: Carbonella
    desc: A volte bruciano; chi muore bruciando dà fuoco a quelli accanto
  pt:
    name: Carvão
    desc: Às vezes queimam; quem morre queimado incendeia os que estão ao lado
  ru:
    name: Уголь
    desc: Иногда поджигают; враг, павший в огне, поджигает соседей
  ja:
    name: もくたん
    desc: ときどきやけどを与える。やけど状態で倒れた敵は、隣の敵にも火をつける
  ko:
    name: 목탄
    desc: 가끔 화상을 입힌다; 화상 상태로 쓰러진 적은 옆의 적에게 불을 옮긴다
  zh:
    name: 木炭
    desc: 有时造成灼伤；带着灼伤倒下的敌人会点燃身边的敌人
  zt:
    name: 木炭
    desc: 有時造成灼傷；帶著灼傷倒下的敵人會點燃身旁的敵人
---
Sometimes burn; enemies that die burning set their neighbors on fire

## How it works

- Adds +0.3 Damage.
- Each hit has a 25 % chance (+2 % per Luck) to set the enemy on fire for 2 seconds. Bosses can burn too. See [Status effects](../mechanics/estados.html).
- An enemy hit by your shots that dies while burning sets every other enemy within 120 px on fire for 2 seconds. Enemies set alight this way can spread it further if they die burning.
- This item no longer appears in the regular item pools.

## Stacking

- Each copy adds +0.3 Damage. The burn chance and the spread are not increased by extra copies.
