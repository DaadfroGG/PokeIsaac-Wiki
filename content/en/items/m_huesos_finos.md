---
title: Brittle Bones
id: m_huesos_finos
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Bones
  value: 3 shots at 50 % damage
- label: Trigger
  value: Your shot defeats an enemy (main shots only)
- label: Spread
  value: About ±34°
icon: items-ps/curry-ingredient/brittle-bones.png
sprite: true
names:
  es:
    name: Huesos Finos
    desc: Cuando un disparo derrota a un enemigo, se rompe en tres huesos que siguen
  fr:
    name: Os à Moelle
    desc: Quand un tir vainc un ennemi, il se brise en trois os qui poursuivent leur route
  de:
    name: Feine Knochen
    desc: Besiegt ein Schuss einen Gegner, zerfällt er in drei Knochen, die weiterfliegen
  it:
    name: Ossi sottili
    desc: Quando un tiro sconfigge un nemico, si spezza in tre ossa che proseguono
  pt:
    name: Ossos Frágeis
    desc: Quando um tiro derrota um inimigo, ele se parte em três ossos que seguem em frente
  ru:
    name: Хрупкие кости
    desc: Когда выстрел побеждает врага, он раскалывается на три кости, летящие дальше
  ja:
    name: かぼそいホネ
    desc: ショットが敵を倒すと、3本の骨に分かれて飛び続ける
  ko:
    name: 가느다란뼈
    desc: 탄이 적을 쓰러뜨리면 뼈 3개로 갈라져 계속 날아간다
  zh:
    name: 细骨
    desc: 弹击败敌人时，会裂成三根继续飞行的骨头
  zt:
    name: 細骨
    desc: 彈擊敗敵人時，會分裂成三根繼續飛行的骨頭
---
When a shot defeats an enemy, it splits into three bones that keep going

## How it works
- When a main shot defeats an enemy, three bones come out of it: one straight and two angled about 34° either side, each with 50 % of the shot's damage.
- The bones cannot hit the enemy just defeated. They are child shots, so they do not trigger on-hit effects or make new bones.
- It is guaranteed: no chance roll.

## Stacking
- It does not stack: a second copy changes nothing.
