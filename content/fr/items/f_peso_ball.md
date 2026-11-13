---
title: Masse Ball
id: f_peso_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
- devil
pool_weight: 2
details:
- label: Compagnon
  value: Magby (Feu)
- label: Orbite
  value: 80 px autour de vous
- label: Dégâts au contact
  value: 1,6 × dégâts du compagnon, toutes les 1/6 s
- label: Brûlure
  value: 1,5 s à chaque contact
icon: items-ps/ball/heavy.png
sprite: true
names:
  en:
    name: Heavy Ball
    desc: A Magby orbits far from you and burns enemies it touches
  es:
    name: Peso Ball
    desc: Un Magby gira lejos de ti y quema a los enemigos que toca
  de:
    name: Schwerball
    desc: Ein Magby kreist weit von dir entfernt und verbrennt Gegner, die es berührt
  it:
    name: Peso Ball
    desc: Un Magby gira lontano da te e brucia i nemici che tocca
  pt:
    name: Bola Pesada
    desc: Um Magby gira longe de você e queima os inimigos que toca
  ru:
    name: Хевибол
    desc: Магби кружит вдали от тебя и поджигает врагов, которых касается
  ja:
    name: ヘビーボール
    desc: ブビィが離れて回り、触れた敵を燃やす
  ko:
    name: 헤비볼
    desc: 마그비가 멀리서 주위를 돌며 닿는 적에게 화상을 입힌다
  zh:
    name: 沉重球
    desc: 鸭嘴宝宝在远处绕着你旋转，灼伤碰到的敌人
  zt:
    name: 沉重球
    desc: 鴨嘴寶寶會在離你較遠處旋轉，灼傷碰到的敵人
---
Un Magby gravite loin de vous et brûle les ennemis qu'il touche

{{< clip >}}

## Fonctionnement

- Il ne tire pas : il tourne autour de vous sur un cercle de 80 px, en faisant un tour complet environ toutes les 2,3 secondes. Tout ennemi qu'il touche subit 1,6 × les dégâts du compagnon (au moins 1), au plus une fois toutes les 1/6 de seconde.
- Tout ennemi qu'il touche prend aussi feu pendant 1,5 seconde. Il orbite loin de vous : il faut bouger pour qu'il atteigne les ennemis.
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément. Plusieurs satellites du même type se répartissent régulièrement autour de vous.
