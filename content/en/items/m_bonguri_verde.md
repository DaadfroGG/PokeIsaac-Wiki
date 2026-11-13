---
title: Green Apricorn
id: m_bonguri_verde
kind: passive
category: shot
family: module
tier: 1
pool_weight: 2
details:
- label: Poison
  value: Every hit, 2.5 s
- label: Poison damage
  value: 12 % of the shot every 0.5 s (min. 1.5)
icon: items-ps/apricorn/green.png
sprite: true
names:
  es:
    name: Bonguri Verde
    desc: Tus disparos envenenan
  fr:
    name: Noigrume Vert
    desc: Vos tirs empoisonnent
  de:
    name: Aprikoko Grün
    desc: Deine Schüsse vergiften
  it:
    name: Ghicocca Verde
    desc: I tuoi tiri avvelenano
  pt:
    name: Apricorn Verde
    desc: Seus tiros envenenam
  ru:
    name: Зеленый абрикорн
    desc: Твои выстрелы отравляют
  ja:
    name: みどぼんぐり
    desc: ショットが毒を与える
  ko:
    name: 초록규토리
    desc: 탄이 독을 입힌다
  zh:
    name: 绿球果
    desc: 你的弹会使敌人中毒
  zt:
    name: 綠球果
    desc: 你的彈會讓敵人中毒
---
Your shots poison

## How it works
- Every hit poisons the enemy for 2.5 s (see [status effects](../mechanics/estados.html)). The poison deals damage every 0.5 s: 12 % of the damage of the shot that applied it, never less than 1.5. That is 5 ticks.
- Hitting again refreshes the duration; a stronger shot raises the damage per tick.
- The poison is guaranteed: no chance roll. It also works on bosses.

## Stacking
- It does not stack: a second copy does not poison longer or harder.
