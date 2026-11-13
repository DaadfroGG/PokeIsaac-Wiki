---
title: Holo Caster
id: a_holomisor
kind: active
family: ability
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 2
details:
- label: Target
  value: The nearest enemy
- label: Delay
  value: 0.57 s
- label: Explosion
  value: 80 px, your Damage ×10 (min. 20)
icon: items-ps/key-item/holo-caster.png
sprite: true
names:
  es:
    name: Holomisor
    desc: 'Pides un ataque aéreo: cae un meteorito sobre el enemigo más cercano'
  fr:
    name: Holokit
    desc: 'Vous appelez une frappe aérienne : un météore tombe sur l''ennemi le plus proche'
  de:
    name: Holo-Log
    desc: 'Du forderst einen Luftangriff an: Ein Meteorit fällt auf den nächsten Gegner'
  it:
    name: Holovox
    desc: 'Chiami un attacco aereo: un meteorite cade sul nemico più vicino'
  pt:
    name: Holo Caster
    desc: 'Você pede um ataque aéreo: cai um meteoro sobre o inimigo mais próximo'
  ru:
    name: Голокастер
    desc: 'Вызываешь авиаудар: метеорит падает на ближайшего врага'
  ja:
    name: ホロキャスター
    desc: 空爆を要請：いちばん近い敵に隕石が落ちる
  ko:
    name: 홀로캐스터
    desc: '공습 요청: 가장 가까운 적에게 운석이 떨어진다'
  zh:
    name: 全息影像通讯器
    desc: 呼叫空袭：一颗陨石落在最近的敌人身上
  zt:
    name: 全像投影通訊器
    desc: 呼叫空襲：一顆隕石會落在最近的敵人身上
---
You call in an air strike: a meteor falls on the nearest enemy

## How it works
- A target appears on the enemy nearest to you, and a meteor lands there 0.57 seconds later. It falls where the enemy stood, so a fast enemy can walk out of it.
- The explosion hits every enemy within 80 px for 10 times your Damage (at least 20). It can be a [critical hit](../mechanics/criticos.html) and triggers your items' on-hit effects. Bosses take it too.
- It doesn't hurt you. Like a bomb, it breaks rocks and crates nearby and opens hidden secret-room doors next to it.
- If there is nothing to affect, nothing happens and you keep the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two meteors fall on the same target.
