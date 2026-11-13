---
title: Soothe Bell
id: campana_alivio
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Condition
  value: Clear a room without taking a hit
- label: Reward
  value: A heart or a coin
- label: Heart
  value: 50 % if you are missing health
- label: Coin
  value: Otherwise, if your wallet is under 60 % full
icon: items-ps/other-item/soothe-bell.png
sprite: true
names:
  es:
    name: Campana Alivio
    desc: Si limpias una sala sin que te hieran, sale un corazón o una moneda
  fr:
    name: Grelot Zen
    desc: Videz une salle sans être touché et un cœur ou une pièce apparaît
  de:
    name: Sanftglocke
    desc: Wenn du einen Raum räumst, ohne getroffen zu werden, erscheint ein Herz oder eine Münze
  it:
    name: Calmanella
    desc: Se ripulisci una stanza senza essere ferito, compare un cuore o una moneta
  pt:
    name: Sino Calmante
    desc: Se você limpar uma sala sem ser ferido, aparece um coração ou uma moeda
  ru:
    name: Колокольчик спокойствия
    desc: Если зачистишь комнату без ранений, появится сердце или монета
  ja:
    name: やすらぎのすず
    desc: 攻撃を受けずに部屋をクリアすると、ハートかコインが出る
  ko:
    name: 평온의방울
    desc: 피격 없이 방을 클리어하면 하트나 동전이 나온다
  zh:
    name: 安抚之铃
    desc: 不受伤地清空房间，会出现一颗心或一枚硬币
  zt:
    name: 安撫之鈴
    desc: 沒受傷就清除房間時，會出現一顆愛心或一枚金幣
---
Clear a room without getting hurt and a heart or coin appears

## How it works
- It checks rooms that start with enemies in them (normal rooms and boss rooms). If you clear one without taking a single hit, a reward appears next to you.
- If you are missing health, there is a 50 % chance that the reward is a heart. Otherwise, it is a coin.
- The coin only appears if your wallet is less than 60 % full.
- Hits that are fully blocked or dodged don't count as hits.

## Stacking
- It does not stack: a second copy adds nothing.
