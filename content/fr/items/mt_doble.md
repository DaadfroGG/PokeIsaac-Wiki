---
title: CT Reflet
id: mt_doble
kind: passive
category: shot
family: core
tier: 4
pools:
- treasure
- boss
pool_weight: 1
stats:
- text: Dégâts -0,3
  good: false
details:
- label: Tirs
  value: +1 par salve
- label: Écart
  value: Environ 7° de chaque côté de la visée
- label: Dégâts
  value: -0,3
- label: Plafond
  value: 9 tirs par salve
icon: items/tm-normal.png
sprite: true
names:
  en:
    name: TM Double Team
    desc: Double shot
  es:
    name: MT Doble Equipo
    desc: Disparo doble
  de:
    name: TM Doppelteam
    desc: Doppelschuss
  it:
    name: MT Doppioteam
    desc: Tiro doppio
  pt:
    name: MT Equipe Dupla
    desc: Tiro duplo
  ru:
    name: ТМ Двойная команда
    desc: Двойной выстрел
  ja:
    name: わざマシン・かげぶんしん
    desc: ダブルショット
  ko:
    name: 기술머신 그림자분신
    desc: 더블 샷
  zh:
    name: 招式机器 影子分身
    desc: 双发射击
  zt:
    name: 招式學習器 影子分身
    desc: 雙發射擊
---
Tir double

{{< clip >}}

## Fonctionnement
- Vous tirez un tir de plus par salve : sans autre tir en plus, ça fait 2 tirs côte à côte, à environ 7° de chaque côté de votre visée.
- Chaque tir inflige vos dégâts complets. Le -0,3 est retiré de votre stat Dégâts (les pénalités comptent en entier).
- Avec plus de tirs, la salve s'ouvre en éventail.

## Cumul
- Il se cumule : chaque exemplaire ajoute un tir par salve et encore -0,3 en Dégâts. Une salve ne peut pas dépasser 9 tirs (voir [tirs supplémentaires](../mechanics/disparos_extra.html)).
