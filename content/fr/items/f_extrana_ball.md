---
title: Étrange Ball
id: f_extrana_ball
kind: passive
category: familiar
family: familiar
tier: 1
pools:
- treasure
- devil
pool_weight: 2
details:
- label: Compagnon
  value: Skelénox (Spectre)
- label: Cadence de tir
  value: 0,57 s
- label: Dégâts par tir
  value: 2 + 0,4 par étage
- label: Tirs
  value: Traversent les rochers
icon: items-ps/ball/strange.png
sprite: true
names:
  en:
    name: Strange Ball
    desc: A Duskull follows you; its shots pass through rocks
  es:
    name: Extraña Ball
    desc: Un Duskull te acompaña; sus disparos atraviesan las rocas
  de:
    name: Rätselball
    desc: Ein Zwirrlicht begleitet dich; seine Schüsse durchdringen Felsen
  it:
    name: Strange Ball
    desc: Un Duskull ti accompagna; i suoi tiri attraversano i massi
  pt:
    name: Strange Ball
    desc: Um Duskull te acompanha; os tiros dele atravessam as rochas
  ru:
    name: Стрейнджбол
    desc: Даскулл следует за тобой; его выстрелы проходят сквозь валуны
  ja:
    name: ストレンジボール
    desc: ヨマワルがついてくる。そのショットは岩を貫通する
  ko:
    name: 스트레인지볼
    desc: 해골몽이 함께 다닌다. 탄이 바위를 통과한다
  zh:
    name: 奇异球
    desc: 一只夜巡灵跟随你；它的弹可穿过石块
  zt:
    name: 奇異球
    desc: 夜巡靈會跟著你；它的彈會穿過岩石
---
Un Skelénox vous accompagne ; ses tirs traversent les rochers

{{< clip >}}

## Fonctionnement

- Skelénox vous suit de près et tire sur l'ennemi le plus proche à moins de 380 px, une fois toutes les 0,57 secondes. Ses tirs portent jusqu'à 360 px et ont son type (Spectre).
- Ses tirs traversent les rochers et les obstacles.
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Ses tirs ne profitent pas de vos améliorations de tir (pas de tirs supplémentaires, pas de coups critiques) et ne déclenchent pas vos objets à effet sur coup.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
