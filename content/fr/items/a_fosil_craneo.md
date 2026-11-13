---
title: Fossile Crâne
id: a_fosil_craneo
kind: active
family: ability
tier: 3
pools:
- treasure
- devil
pool_weight: 2
charge: 4
details:
- label: Rayons
  value: 4, en croix
- label: Durée
  value: 0,6 s
- label: Dégâts
  value: Vos Dégâts ×1,2 toutes les 0,05 s (jusqu'à ×14,4 par ennemi)
- label: Largeur
  value: 26 px (+5 par bonus de taille)
icon: items-ps/fossil/skull.png
sprite: true
names:
  en:
    name: Skull Fossil
    desc: You fire four beams in a cross that pierce everything
  es:
    name: Fósil Cráneo
    desc: Lanzas cuatro rayos en cruz que lo atraviesan todo
  de:
    name: Kopffossil
    desc: Du feuerst vier Strahlen im Kreuz ab, die alles durchdringen
  it:
    name: Fossilcranio
    desc: Lanci quattro raggi a croce che trapassano tutto
  pt:
    name: Fóssil Crânio
    desc: Você lança quatro raios em cruz que atravessam tudo
  ru:
    name: Окаменелость-череп
    desc: Выпускаешь четыре луча крестом, пробивающие все
  ja:
    name: ずがいのカセキ
    desc: 全てを貫く光線を十字に4本放つ
  ko:
    name: 두개의화석
    desc: 모든 것을 관통하는 십자 빔 4개를 쏜다
  zh:
    name: 头盖化石
    desc: 发射十字形的四道光束，贯穿一切
  zt:
    name: 頭蓋化石
    desc: 發射十字形的四道光束，貫穿一切
---
Vous lancez quatre rayons en croix qui transpercent tout

## Fonctionnement
- Quatre rayons partent de vous en croix (un vers où vous regardez, les trois autres à angle droit) pendant 0,6 seconde. Ils vont jusqu'aux murs et traversent les rochers et tous les ennemis.
- Toutes les 0,05 seconde, chaque ennemi dans un rayon subit 1,2 fois vos Dégâts : jusqu'à 12 coups, environ 14,4 fois vos Dégâts, pour un ennemi qui y reste tout le temps. Les boss aussi.
- Chaque coup utilise votre type et peut être un [coup critique](../mechanics/criticos.html). Les effets de tirs de vos objets s'appliquent aussi.
- Les rayons ne rebondissent pas. Ils cassent les caisses et les tonneaux sur leur route.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : la seconde croix remplace la première.
