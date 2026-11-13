---
title: Yellow Apricorn
id: m_bonguri_amarillo
kind: passive
category: shot
family: module
tier: 2
pool_weight: 2
details:
- label: Bolts
  value: 1 per hit
- label: Reach
  value: Enemies within 180 px of the one hit
- label: Bolt damage
  value: 60 % of the shot
icon: items-ps/apricorn/yellow.png
sprite: true
names:
  es:
    name: Bonguri Amarillo
    desc: Tus disparos sueltan rayos que saltan a los enemigos cercanos
  fr:
    name: Noigrume Jaune
    desc: Vos tirs libèrent des éclairs qui sautent sur les ennemis proches
  de:
    name: Aprikoko Gelb
    desc: Deine Schüsse setzen Blitze frei, die auf Gegner in der Nähe überspringen
  it:
    name: Ghicocca Gialla
    desc: I tuoi tiri sprigionano fulmini che saltano ai nemici vicini
  pt:
    name: Apricorn Amarelo
    desc: Seus tiros soltam raios que saltam para os inimigos próximos
  ru:
    name: Желтый абрикорн
    desc: Твои выстрелы выпускают молнии, прыгающие на ближайших врагов
  ja:
    name: きぼんぐり
    desc: ショットが、近くの敵へ飛び移る稲妻を放つ
  ko:
    name: 노랑규토리
    desc: 탄이 주변 적에게 튀는 번개를 내뿜는다
  zh:
    name: 黄球果
    desc: 你的弹会释放跳向附近敌人的闪电
  zt:
    name: 黃球果
    desc: 你的彈會放出跳向附近敵人的電弧
---
Your shots release bolts that jump to nearby enemies

## How it works
- Every hit on an enemy sends a lightning bolt to another enemy within 180 px of it. The bolt deals 60 % of the shot's damage.
- The bolt is instant. It does not trigger item effects and cannot chain again, and it does not hurt the enemy that was hit.
- If there is no other enemy near, nothing happens. Bolts are electric damage and show up as a flash of lightning.

## Stacking
- Each extra copy adds one more bolt per hit (up to the number of enemies within reach), each still at 60 % damage.
