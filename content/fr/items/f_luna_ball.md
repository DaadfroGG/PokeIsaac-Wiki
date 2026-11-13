---
title: Lune Ball
id: f_luna_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Compagnon
  value: Mélo (Fée)
- label: Orbite
  value: 38 px autour de vous
- label: Dégâts au contact
  value: 0,8 × dégâts du compagnon, toutes les 1/6 s
- label: Bouclier
  value: Détruit les tirs ennemis qu'il touche
icon: items-ps/ball/moon.png
sprite: true
names:
  en:
    name: Moon Ball
    desc: A Cleffa orbits you, blocks enemy shots and hurts whatever it touches
  es:
    name: Luna Ball
    desc: Un Cleffa gira a tu alrededor, para los disparos enemigos y hiere a quien toca
  de:
    name: Mondball
    desc: Ein Pii kreist um dich, hält gegnerische Schüsse auf und verletzt, was es berührt
  it:
    name: Luna Ball
    desc: Un Cleffa gira intorno a te, ferma i tiri nemici e ferisce chi tocca
  pt:
    name: Moon Ball
    desc: Um Cleffa gira ao seu redor, bloqueia os tiros inimigos e fere o que tocar
  ru:
    name: Мунбол
    desc: Клеффа кружит вокруг тебя, блокирует вражеские выстрелы и ранит всех, кого касается
  ja:
    name: ムーンボール
    desc: ピィが周りを回り、敵のショットを止め、触れたものにダメージを与える
  ko:
    name: 문볼
    desc: 삐가 주위를 돌며 적 탄을 막고 닿는 적에게 피해를 준다
  zh:
    name: 月亮球
    desc: 一只皮宝宝绕着你转，可挡下敌人的弹并伤害碰到的敌人
  zt:
    name: 月亮球
    desc: 皮寶寶會繞著你旋轉，擋下敵方的彈並傷害碰到的對象
---
Un Mélo gravite autour de vous, bloque les tirs ennemis et blesse ce qu'il touche

{{< clip >}}

## Fonctionnement

- Il ne tire pas : il tourne autour de vous sur un cercle de 38 px, en faisant un tour complet environ toutes les 1,5 secondes. Tout ennemi qu'il touche subit 0,8 × les dégâts du compagnon (au moins 1), au plus une fois toutes les 1/6 de seconde.
- Il bloque les tirs ennemis : tout projectile ennemi qui arrive à quelques pixels de lui est détruit. Il ne protège que le côté où il se trouve.
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément. Plusieurs satellites du même type se répartissent régulièrement autour de vous.
