---
title: Galarica Wreath
id: m_corona_galanuez
kind: passive
category: shot
family: module
tier: 4
pools:
- angel
- boss
pool_weight: 1
stats:
- text: Damage +0.5
  good: true
- text: Fire rate -
  good: false
details:
- label: Damage
  value: '+0.5'
- label: Fire rate
  value: -3 (slower)
- label: Aura
  value: 15 % of your damage, 12 times per second, within 40 px + shot size
icon: items-ps/evo-item/galarica-wreath.png
sprite: true
names:
  es:
    name: Corona Galanuez
    desc: Cada disparo lleva un aura de luz que hiere a los enemigos cercanos
  fr:
    name: Couronne Galanoa
    desc: Chaque tir porte une aura de lumière qui blesse les ennemis proches
  de:
    name: Galarnuss-Kranz
    desc: Jeder Schuss trägt eine Lichtaura, die nahe Gegner verletzt
  it:
    name: Corona Galarnoce
    desc: Ogni tiro porta un'aura di luce che ferisce i nemici vicini
  pt:
    name: Coroa de Galárica
    desc: Cada tiro leva uma aura de luz que fere os inimigos próximos
  ru:
    name: Галарикский венок
    desc: Каждый выстрел несет ауру света, которая ранит ближайших врагов
  ja:
    name: ガラナツリース
    desc: 各ショットが、近くの敵にダメージを与える光のオーラをまとう
  ko:
    name: 가라두구머리장식
    desc: 모든 탄에 주변 적을 해치는 빛의 오라가 붙는다
  zh:
    name: 伽勒豆蔻花圈
    desc: 每发弹都带有光环，会伤害附近的敌人
  zt:
    name: 伽勒荳蔻花圈
    desc: 每發彈都帶有光環，會傷害附近的敵人
---
Each shot carries an aura of light that hurts nearby enemies

{{< clip >}}

## How it works
- Each shot carries an aura of light. Every 1/12 s, every enemy within 40 px of the shot (plus its size) takes 15 % of your damage. These aura hits do not trigger item effects.
- An enemy that stays near a shot takes about 1.8 times your damage per second from that shot; several shots overlapping add up.
- The aura works on every shot, including child and extra shots, and on beam weapons.

## Stacking
- The aura does not change with more copies; Damage +0.5 and the slower fire rate are added for each copy.
