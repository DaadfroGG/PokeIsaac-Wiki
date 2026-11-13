---
title: Hyper Ball
id: f_ultra_ball
kind: passive
category: familiar
family: familiar
tier: 3
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Compagnon
  value: Archéomire (Acier)
- label: Orbite
  value: 54 px autour de vous
- label: Dégâts au contact
  value: 0,6 × dégâts du compagnon, toutes les 1/6 s
- label: Prisme
  value: Vos tirs qui le traversent se divisent en deux de plus
icon: items-ps/ball/ultra.png
sprite: true
names:
  en:
    name: Ultra Ball
    desc: A Bronzor orbits you; shots passing through it split into three
  es:
    name: Ultra Ball
    desc: Un Bronzor gira a tu alrededor; los disparos que lo atraviesan se parten en tres
  de:
    name: Hyperball
    desc: Ein Bronzel kreist um dich; Schüsse, die es durchqueren, teilen sich in drei
  it:
    name: Ultra Ball
    desc: Un Bronzor gira intorno a te; i tiri che lo attraversano si dividono in tre
  pt:
    name: Ultra Bola
    desc: Um Bronzor gira ao seu redor; os tiros que o atravessam se dividem em três
  ru:
    name: Ультрабол
    desc: Бронзор кружит вокруг тебя; выстрелы, пролетающие сквозь него, делятся на три
  ja:
    name: ハイパーボール
    desc: ドーミラーが周りを回る。通過したショットは3つに分かれる
  ko:
    name: 하이퍼볼
    desc: 동미러가 주위를 돈다. 동미러를 지나는 탄은 셋으로 나뉜다
  zh:
    name: 高级球
    desc: 一只铜镜怪绕着你转；穿过它的弹会分裂成三发
  zt:
    name: 高級球
    desc: 銅鏡怪會繞著你旋轉；穿過它的彈會分裂成三發
---
Un Archéomire gravite autour de vous ; les tirs qui le traversent se divisent en trois

{{< clip >}}

## Fonctionnement

- Il ne tire pas : il tourne autour de vous sur un cercle de 54 px, en faisant un tour complet environ toutes les 2,1 secondes. Tout ennemi qu'il touche subit 0,6 × les dégâts du compagnon (au moins 1), au plus une fois toutes les 1/6 de seconde.
- Prisme : quand un de vos tirs passe à moins de 16 px de lui, deux tirs supplémentaires (environ 20° de chaque côté) apparaissent : un tir devient trois. Chaque tir supplémentaire inflige 60 % des dégâts de l'original, est un peu plus petit, et a le même type mais aucun autre effet.
- Cela ne marche qu'une fois par tir, et seulement sur vos tirs principaux (pas sur les tirs divisés ni autres tirs enfants).
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément. Plusieurs satellites du même type se répartissent régulièrement autour de vous.
