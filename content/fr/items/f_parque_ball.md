---
title: Parc Ball
id: f_parque_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Compagnon
  value: Porygon (Normal (tirs aléatoires))
- label: Cadence de tir
  value: 0,53 s
- label: Dégâts par tir
  value: 2 + 0,4 par étage
- label: Type des tirs
  value: Aléatoire parmi les 18 types
icon: items-ps/ball/park.png
sprite: true
names:
  en:
    name: Park Ball
    desc: A Porygon follows you; each of its shots is a random type
  es:
    name: Parque Ball
    desc: Un Porygon te acompaña; cada disparo suyo es de un tipo al azar
  de:
    name: Parkball
    desc: Ein Porygon begleitet dich; jeder seiner Schüsse hat einen zufälligen Typ
  it:
    name: Parco Ball
    desc: Un Porygon ti accompagna; ogni suo tiro è di un tipo a caso
  pt:
    name: Bola do Parque
    desc: Um Porygon te acompanha; cada tiro dele é de um tipo aleatório
  ru:
    name: Паркбол
    desc: Поригон следует за тобой; каждый его выстрел случайного типа
  ja:
    name: パークボール
    desc: ポリゴンがついてくる。ショットはそれぞれランダムなタイプ
  ko:
    name: 파크볼
    desc: 폴리곤이 함께 다닌다. 탄마다 타입이 무작위다
  zh:
    name: 公园球
    desc: 多边兽跟随你；它的每发弹都是随机属性
  zt:
    name: 公園球
    desc: 多邊獸會跟著你；它的每發彈都是隨機屬性
---
Un Porygon vous accompagne ; chacun de ses tirs est d'un type aléatoire

{{< clip >}}

## Fonctionnement

- Porygon vous suit de près et tire sur l'ennemi le plus proche à moins de 380 px, une fois toutes les 0,53 secondes. Ses tirs portent jusqu'à 360 px et ont son type (Normal (tirs aléatoires)).
- Chaque tir est d'un des 18 types au hasard (chances égales) : il prend la couleur de ce type et la [table des types](../mechanics/tabla_tipos.html) pour ce tir.
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Ses tirs ne profitent pas de vos améliorations de tir (pas de tirs supplémentaires, pas de coups critiques) et ne déclenchent pas vos objets à effet sur coup.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
