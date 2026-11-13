---
title: Old Gateau
id: a_barrita_plus
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 4
details:
- label: Heal
  value: 1 heart
- label: Healing limit
  value: Ignores it
- label: At full health
  value: Can't be used
icon: items-ps/medicine/old-gateau.png
sprite: true
names:
  es:
    name: Barrita Plus
    desc: Te cura un corazón
  fr:
    name: Vieux Gâteau
    desc: Vous soigne d'un cœur
  de:
    name: Spezialität
    desc: Heilt dich um ein Herz
  it:
    name: Dolce Gateau
    desc: Ti cura di un cuore
  pt:
    name: Bolo Velho
    desc: Cura um coração
  ru:
    name: Старинный пирог
    desc: Лечит тебе одно сердце
  ja:
    name: もりのヨウカン
    desc: ハートを1個回復する
  ko:
    name: 숲의양갱
    desc: 하트 1칸을 회복한다
  zh:
    name: 森之羊羹
    desc: 为你恢复一颗心
  zt:
    name: 森之羊羹
    desc: 恢復你一顆愛心
---
Heals you one heart

## How it works
- Heals you 1 heart (two half-hearts) at once.
- This heal ignores the limit on item healing over 10 seconds.
- At full health it can't be used, and you keep the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): you heal 2 hearts.
