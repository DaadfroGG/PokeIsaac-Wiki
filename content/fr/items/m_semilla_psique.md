---
title: Graine Psychique
id: m_semilla_psique
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Détection
  value: Ennemis à moins de 95 px du tir
- label: Virage
  value: Seulement s'il faut tourner de plus de 40° environ
- label: Fois
  value: Une fois par tir
icon: items-ps/hold-item/psychic-seed.png
sprite: true
names:
  en:
    name: Psychic Seed
    desc: When a shot passes by an enemy, it snaps toward it
  es:
    name: Semilla Psique
    desc: Cuando un disparo pasa al lado de un enemigo, gira de golpe hacia él
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
Quand un tir passe près d'un ennemi, il vire brusquement vers lui

## Fonctionnement
- Quand un tir en vol passe à moins de 95 px d'un ennemi qu'il n'a pas encore touché, il tourne d'un coup pour foncer droit sur lui.
- Il ne pivote que si l'ennemi est vraiment hors trajectoire (à plus de 40° environ de la direction du tir). Un tir qui va déjà vers l'ennemi continue tout droit.
- Chaque tir ne pivote qu'une fois. Ensuite il vole tout droit.
- Ça marche aussi sur les boss.
- Sans effet sur les tirs en spirale ([Sachet Senteur](m_saquito.html)).

## Cumul
- Un deuxième exemplaire n'apporte rien de plus.
