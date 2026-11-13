---
title: Master Ball
id: master_ball
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 10
details:
- label: Target
  value: The nearest non-boss enemy within 320 px
- label: Health
  value: Doesn't matter
- label: Companion damage
  value: 1.5 on the first floor, +0.4 per floor
icon: items-ps/ball/master.png
sprite: true
names:
  es:
    name: Master Ball
    desc: Captura a cualquier enemigo que no sea jefe, aunque esté sano
  fr:
    name: Master Ball
    desc: Capture n'importe quel ennemi hors boss, même en pleine santé
  de:
    name: Meisterball
    desc: Fängt jeden Gegner außer Bossen, auch bei voller Gesundheit
  it:
    name: Master Ball
    desc: Cattura qualsiasi nemico che non sia un Boss, anche se in piena salute
  pt:
    name: Bola Mestra
    desc: Captura qualquer inimigo que não seja chefe, mesmo com a vida cheia
  ru:
    name: Мастербол
    desc: Ловит любого врага, кроме босса, даже со всем здоровьем
  ja:
    name: マスターボール
    desc: ボス以外の敵なら、HPが満タンでも捕まえられる
  ko:
    name: 마스터볼
    desc: 보스가 아닌 적이라면 체력이 가득해도 포획한다
  zh:
    name: 大师球
    desc: 可以捕获任何非首领敌人，即使其生命值充足
  zt:
    name: 大師球
    desc: 可捕捉任何非頭目的敵人，即使牠體力全滿
---
Captures any non-boss enemy, even at full health

## How it works
- The nearest enemy within 320 px that isn't a boss is caught at once, whatever its health, and becomes a permanent [companion](../mechanics/companeros.html) that follows you and shoots.
- Its damage depends on the floor where you catch it: 1.5 on the first floor, +0.4 per floor after that.
- It counts toward your companion limit (3, or 5 with the [Apricorn Box](m_caja_bonguri.html)). With the limit reached, or with no valid enemy within 320 px, nothing happens and you keep the charge.
- Bosses can never be caught.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two enemies are caught (if you have room for two companions).
