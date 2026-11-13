---
title: TM Explosion
id: mt_explosion
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 4
details:
- label: Radius
  value: 160 px around you
- label: Damage
  value: Your Damage ×14 (at least 28)
- label: You
  value: Not hurt
icon: items-ps/tm/normal.png
sprite: true
names:
  es:
    name: MT Explosión
    desc: Una gran explosión a tu alrededor que no te hace daño
  fr:
    name: CT Explosion
    desc: Une grosse explosion autour de vous qui ne vous blesse pas
  de:
    name: TM Explosion
    desc: Eine große Explosion um dich herum, die dir nicht schadet
  it:
    name: MT Esplosione
    desc: Una grande esplosione intorno a te che non ti ferisce
  pt:
    name: MT Explosão
    desc: Uma grande explosão ao seu redor que não te causa dano
  ru:
    name: ТМ Взрыв
    desc: Мощный взрыв вокруг тебя, который тебя не ранит
  ja:
    name: わざマシン・だいばくはつ
    desc: 自分にダメージのない、周囲への大爆発
  ko:
    name: 기술머신 대폭발
    desc: 주위에 큰 폭발을 일으킨다(나는 피해 없음)
  zh:
    name: 招式机器 大爆炸
    desc: 在你周围引发一场大爆炸，不会伤到你
  zt:
    name: 招式學習器 大爆炸
    desc: 在你周圍引發不會傷害你的大爆炸
---
A big explosion around you that doesn't hurt you

## How it works
- A big explosion goes off around you. Every enemy within 160 px takes 14 times your Damage (at least 28), bosses included.
- It can be a [critical hit](../mechanics/criticos.html) and triggers your items' on-hit effects.
- It never hurts you. It breaks every rock, crate and barrel within 160 px and opens hidden secret-room doors close to you.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two explosions go off.
