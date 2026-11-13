---
title: Blue Apricorn
id: m_bonguri_azul
kind: passive
category: shot
family: module
tier: 1
pool_weight: 2
details:
- label: Slow
  value: Every hit, 1.5 s
- label: Bosses
  value: Also slowed
icon: items-ps/apricorn/blue.png
sprite: true
names:
  es:
    name: Bonguri Azul
    desc: Tus disparos frenan a los enemigos
  fr:
    name: Noigrume Bleu
    desc: Vos tirs ralentissent les ennemis
  de:
    name: Aprikoko Blau
    desc: Deine Schüsse bremsen Gegner
  it:
    name: Ghicocca Blu
    desc: I tuoi tiri rallentano i nemici
  pt:
    name: Apricorn Azul
    desc: Seus tiros retardam os inimigos
  ru:
    name: Синий абрикорн
    desc: Твои выстрелы замедляют врагов
  ja:
    name: あおぼんぐり
    desc: ショットが敵を遅くする
  ko:
    name: 파란규토리
    desc: 탄이 적을 느리게 한다
  zh:
    name: 蓝球果
    desc: 你的弹会使敌人减速
  zt:
    name: 藍球果
    desc: 你的彈會讓敵人減速
---
Your shots slow enemies

## How it works
- Every hit slows the enemy for 1.5 s (see [status effects](../mechanics/estados.html)). The timer is refreshed on each hit.
- Bosses are slowed too, which only halves their walking speed between attacks.
- The slow is guaranteed: there is no chance roll. It adds to the slow chance of Ice-type shots.

## Stacking
- It does not stack: a second copy does not slow longer or harder.
