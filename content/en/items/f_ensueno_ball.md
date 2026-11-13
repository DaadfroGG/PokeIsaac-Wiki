---
title: Dream Ball
id: f_ensueno_ball
kind: passive
category: familiar
family: familiar
tier: 3
pools:
- angel
- boss
pool_weight: 2
details:
- label: Companion
  value: Togepi (Fairy)
- label: Fire interval
  value: 0.63 s
- label: Damage per shot
  value: 2 + 0.4 per floor
- label: Shots
  value: 3 per volley, about 17° apart
icon: items-ps/ball/dream.png
sprite: true
names:
  es:
    name: Ensueño Ball
    desc: Un Togepi te acompaña y dispara de tres en tres
  fr:
    name: Rêve Ball
    desc: Un Togepi vous accompagne et tire par trois
  de:
    name: Traumball
    desc: Ein Togepi begleitet dich und schießt im Dreierpack
  it:
    name: Dream Ball
    desc: Un Togepi ti accompagna e tira tre alla volta
  pt:
    name: Dream Ball
    desc: Um Togepi te acompanha e atira de três em três
  ru:
    name: Дримбол
    desc: Тогепи следует за тобой и стреляет по три выстрела
  ja:
    name: ドリームボール
    desc: トゲピーがついてきて、3発ずつ撃つ
  ko:
    name: 드림볼
    desc: 토게피가 함께 다니며 탄을 3발씩 쏜다
  zh:
    name: 梦境球
    desc: 波克比跟随你，每次射出三发
  zt:
    name: 夢境球
    desc: 波克比會跟著你，每次射出三發
---
A Togepi follows you and fires three at a time

{{< clip >}}

## How it works

- Togepi follows just behind you and shoots at the nearest enemy within 380 px, once every 0.63 seconds. Its shots travel up to 360 px and carry its type (Fairy).
- It fires three shots at once: one at the target and one on each side (about 17° apart). Each shot deals the full companion damage.
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Its shots are not boosted by your shot upgrades (no extra shots, no crits) and do not trigger your on-hit items.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
