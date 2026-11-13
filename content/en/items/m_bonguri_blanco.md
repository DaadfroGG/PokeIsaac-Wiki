---
title: White Apricorn
id: m_bonguri_blanco
kind: passive
category: shot
family: module
tier: 1
pool_weight: 2
details:
- label: Slow
  value: 30 % per hit (+2 % per Luck), 1.5 s
- label: Freeze
  value: 25 % (+2 % per Luck) on an already slowed enemy, 1.8 s
- label: Bosses
  value: Never affected
icon: items-ps/apricorn/white.png
sprite: true
names:
  es:
    name: Bonguri Blanco
    desc: A veces tus disparos congelan a los enemigos
  fr:
    name: Noigrume Blanc
    desc: Parfois, vos tirs gèlent les ennemis
  de:
    name: Aprikoko Weiß
    desc: Manchmal frieren deine Schüsse Gegner ein
  it:
    name: Ghicocca Bianca
    desc: A volte i tuoi tiri congelano i nemici
  pt:
    name: Apricorn Branco
    desc: Às vezes seus tiros congelam os inimigos
  ru:
    name: Белый абрикорн
    desc: Иногда твои выстрелы замораживают врагов
  ja:
    name: しろぼんぐり
    desc: ときどきショットが敵を凍らせる
  ko:
    name: 하얀규토리
    desc: 가끔 탄이 적을 얼린다
  zh:
    name: 白球果
    desc: 你的弹有时会冰冻敌人
  zt:
    name: 白球果
    desc: 你的射擊有時會冰凍敵人
---
Sometimes your shots freeze enemies

## How it works
- On a hit against an enemy that is not slowed, there is a 30 % chance (+2 % per point of Luck) to slow it for 1.5 s (see [status effects](../mechanics/estados.html)).
- On a hit against an enemy that is already slowed, there is a 25 % chance (+2 % per Luck) to freeze it: it is stunned and stands still for about 1.8 s. Freezing can therefore happen on the second hit.
- Bosses are never slowed or frozen by this.
- If you have Ice-type shots or a Blue Apricorn, those slows count as the first step.

## Stacking
- It does not stack: a second copy does not raise the chances.
