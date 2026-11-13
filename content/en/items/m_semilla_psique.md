---
title: Psychic Seed
id: m_semilla_psique
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Detection
  value: Enemies within 95 px of the shot
- label: Turn
  value: Only if it needs more than about 40°
- label: Times
  value: Once per shot
icon: items-ps/hold-item/psychic-seed.png
sprite: true
names:
  es:
    name: Semilla Psique
    desc: Cuando un disparo pasa al lado de un enemigo, gira de golpe hacia él
  fr:
    name: Graine Psychique
    desc: Quand un tir passe près d'un ennemi, il vire brusquement vers lui
  de:
    name: Psycho-Samen
    desc: Fliegt ein Schuss an einem Gegner vorbei, schwenkt er abrupt auf ihn zu
  it:
    name: Psicoseme
    desc: Quando un tiro passa accanto a un nemico, vira di scatto verso di lui
  pt:
    name: Semente Psíquica
    desc: Quando um tiro passa ao lado de um inimigo, ele vira de repente na direção dele
  ru:
    name: Психическое семя
    desc: Когда выстрел пролетает рядом с врагом, он резко поворачивает к нему
  ja:
    name: サイコシード
    desc: ショットが敵のそばを通ると、急に敵の方へ向きを変える
  ko:
    name: 사이코시드
    desc: 탄이 적 옆을 지나가면 그 적 쪽으로 홱 꺾인다
  zh:
    name: 精神种子
    desc: 弹从敌人身旁经过时，会突然转向敌人
  zt:
    name: 精神種子
    desc: 彈從敵人身旁經過時，會突然轉向牠
---
When a shot passes by an enemy, it snaps toward it

## How it works
- When a flying shot passes within 95 px of an enemy it hasn't hit yet, it instantly turns to fly straight at that enemy.
- It only snaps if the enemy is clearly off course (more than about 40° away from where the shot is going). A shot already heading at the enemy keeps going.
- Each shot snaps only once. After that it flies straight.
- It works on bosses too.
- It doesn't work on spiral shots ([Sachet](m_saquito.html)).

## Stacking
- A second copy does nothing more.
