---
title: Full Incense
id: incienso_lento
kind: passive
category: shot
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Enemy shots
  value: 25 % slower
- label: Applies to
  value: Every enemy shot in the room, bosses included
icon: items-ps/incense/lax.png
sprite: true
names:
  es:
    name: Incienso Lento
    desc: Los disparos enemigos van un 25 % más lentos
  fr:
    name: Encens Plein
    desc: Les tirs ennemis sont 25 % plus lents
  de:
    name: Lahmrauch
    desc: Gegnerische Schüsse sind 25 % langsamer
  it:
    name: Gonfioaroma
    desc: I tiri nemici sono più lenti del 25 %
  pt:
    name: Incenso Cheio
    desc: Os tiros inimigos ficam 25% mais lentos
  ru:
    name: Благовоние сытости
    desc: Выстрелы врагов на 25 % медленнее
  ja:
    name: まんぷくおこう
    desc: 敵の弾が25%遅くなる
  ko:
    name: 만복향로
    desc: 적의 탄이 25% 느려진다
  zh:
    name: 饱腹薰香
    desc: 敌方弹的速度降低25 %
  zt:
    name: 飽腹薰香
    desc: 敵方彈的速度降低25 %
---
Enemy shots are 25 % slower

## How it works
- Every enemy projectile in the room has its speed cut by 25 % as soon as it appears (once: it does not keep slowing down).
- It affects bosses' projectiles too. It does not slow the enemies themselves, only their shots.
- It works in any room, and for the whole team if one player has it.

## Stacking
- It does not stack: a second copy does not slow shots further.
