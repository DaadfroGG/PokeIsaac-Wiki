---
title: Charbon
id: carbon
kind: passive
category: shot
family: core
tier: 2
pool_weight: 2
stats:
- text: Dégâts +0,3
  good: true
details:
- label: Chance
  value: 25 % par coup, +2 % par point de Chance
- label: Brûlure
  value: 2 secondes
- label: Propagation
  value: Un ennemi qui meurt en feu enflamme ceux à moins de 120 px
icon: items/charcoal.png
sprite: true
names:
  en:
    name: Charcoal
    desc: Sometimes burn; enemies that die burning set their neighbors on fire
  es:
    name: Carbón
    desc: A veces queman; quien cae quemado prende fuego a los de al lado
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
Brûlent parfois ; un ennemi qui meurt en brûlant enflamme ses voisins

## Fonctionnement

- Ajoute +0,3 Dégâts.
- Chaque coup a 25 % de chances (+2 % par point de Chance) d'enflammer l'ennemi pendant 2 secondes. Les boss peuvent brûler aussi. Voir [Effets de statut](../mechanics/estados.html).
- Un ennemi touché par vos tirs qui meurt en feu enflamme tous les autres ennemis à moins de 120 px pendant 2 secondes. Les ennemis enflammés ainsi peuvent propager le feu à leur tour s'ils meurent en feu.
- Cet objet n'apparaît plus dans les réserves d'objets habituelles.

## Cumul

- Chaque exemplaire ajoute +0,3 Dégâts. La chance de brûlure et la propagation n'augmentent pas avec les exemplaires supplémentaires.
