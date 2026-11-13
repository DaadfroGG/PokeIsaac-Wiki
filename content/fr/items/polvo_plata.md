---
title: Poudre Argentée
id: polvo_plata
kind: passive
category: shot
family: core
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Division
  value: 2 tirs au premier coup
- label: Dégâts
  value: 50 % du tir qui a touché
- label: Angle
  value: Environ 34° de chaque côté
- label: Portée
  value: 160 px
icon: items-ps/hold-item/silver-powder.png
sprite: true
names:
  en:
    name: Silver Powder
    desc: When they hit an enemy, your shots split in two
  es:
    name: Polvo Plata
    desc: Al tocar a un enemigo, tus disparos se dividen en dos
  de:
    name: Silberstaub
    desc: Treffen deine Schüsse einen Gegner, teilen sie sich in zwei
  it:
    name: Argenpolvere
    desc: Quando colpiscono un nemico, i tuoi tiri si dividono in due
  pt:
    name: Pó de Prata
    desc: Ao atingir um inimigo, seus tiros se dividem em dois
  ru:
    name: Серебряный порошок
    desc: При попадании во врага твои выстрелы раздваиваются
  ja:
    name: ぎんのこな
    desc: 敵に当たると、弾が2つに分かれる
  ko:
    name: 은빛가루
    desc: 적에게 닿으면 탄이 둘로 갈라진다
  zh:
    name: 银粉
    desc: 击中敌人时，你的弹会分裂为二
  zt:
    name: 銀粉
    desc: 你的彈擊中敵人時，會分裂成兩顆
---
Quand ils touchent un ennemi, vos tirs se divisent en deux

{{< clip >}}

## Fonctionnement
- La première fois qu'un de vos propres tirs touche un ennemi, deux tirs plus petits jaillissent de cet ennemi, à environ 34° de chaque côté de la trajectoire.
- Chaque nouveau tir inflige 50 % des dégâts du tir qui a touché, est 30 % plus petit et 10 % plus lent, va à 160 px au plus et garde le type du tir. Ils ne peuvent pas toucher l'ennemi qui les a créés.
- Les nouveaux tirs gardent vos effets de tir (statuts, recul, perforation…), mais ne se divisent jamais à nouveau et ne déclenchent pas les objets qui demandent vos propres tirs.
- Un tir perforant ne se divise qu'à son premier coup. Les tirs des compagnons et autres tirs secondaires ne se divisent jamais. Avec une arme spéciale, au plus une division par délai de tir.

## Cumul
- Un deuxième exemplaire n'apporte rien de plus : toujours deux tirs.
