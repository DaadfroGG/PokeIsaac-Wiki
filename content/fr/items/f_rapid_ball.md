---
title: Speed Ball
id: f_rapid_ball
kind: passive
category: familiar
family: familiar
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Compagnon
  value: Élekid (Électrik)
- label: Cadence de tir
  value: 1,4 s
- label: Dégâts par rayon
  value: 1,5 × dégâts du compagnon (au moins 2)
- label: Portée
  value: Cible à moins de 420 px
icon: items-ps/ball/fast.png
sprite: true
names:
  en:
    name: Fast Ball
    desc: An Elekid follows you and fires electric lasers that pierce enemies
  es:
    name: Rapid Ball
    desc: Un Elekid te acompaña y lanza láseres eléctricos que atraviesan a los enemigos
  de:
    name: Turboball
    desc: Ein Elekid begleitet dich und feuert Elektro-Laser, die Gegner durchbohren
  it:
    name: Rapid Ball
    desc: Un Elekid ti accompagna e lancia laser elettrici che trapassano i nemici
  pt:
    name: Bola Veloz
    desc: Um Elekid te acompanha e lança lasers elétricos que atravessam os inimigos
  ru:
    name: Фастбол
    desc: Элекид следует за тобой и стреляет электрическими лазерами, пронзающими врагов
  ja:
    name: スピードボール
    desc: エレキッドがついてきて、敵を貫く電気レーザーを放つ
  ko:
    name: 스피드볼
    desc: 에레키드가 함께 다니며 적을 관통하는 전기 레이저를 쏜다
  zh:
    name: 速度球
    desc: 一只电击怪跟随你，发射能穿透敌人的电击激光
  zt:
    name: 速度球
    desc: 電擊怪會跟著你，發射能貫穿敵人的電擊雷射
---
Un Élekid vous accompagne et lance des lasers électriques qui transpercent les ennemis

{{< clip >}}

## Fonctionnement

- Élekid vous suit de près. Toutes les 1,4 secondes, si un ennemi est à moins de 420 px, il tire un laser Électrik en ligne droite vers lui.
- Le laser touche tous les ennemis sur son trajet (il perce), une fois chacun, pour 1,5 fois les dégâts du compagnon (au moins 2).
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Ses tirs ne profitent pas de vos améliorations de tir (pas de tirs supplémentaires, pas de coups critiques) et ne déclenchent pas vos objets à effet sur coup.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
