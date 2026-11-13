---
title: Great Ball
id: f_super_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Companion
  value: Staryu (Water)
- label: Fire interval
  value: 0.73 s
- label: Damage per shot
  value: 2 + 0.4 per floor
- label: Shots
  value: 4 directions per volley
icon: items-ps/ball/great.png
sprite: true
names:
  es:
    name: Super Ball
    desc: Un Staryu te acompaña y dispara en las cuatro direcciones
  fr:
    name: Super Ball
    desc: Un Stari vous accompagne et tire dans les quatre directions
  de:
    name: Superball
    desc: Ein Sterndu begleitet dich und schießt in alle vier Richtungen
  it:
    name: Mega Ball
    desc: Uno Staryu ti accompagna e tira nelle quattro direzioni
  pt:
    name: Great Ball
    desc: Um Staryu te acompanha e atira nas quatro direções
  ru:
    name: Грейтбол
    desc: Старью следует за тобой и стреляет в четыре стороны
  ja:
    name: スーパーボール
    desc: ヒトデマンがついてきて、四方向に撃つ
  ko:
    name: 슈퍼볼
    desc: 별가사리가 함께 다니며 네 방향으로 탄을 쏜다
  zh:
    name: 超级球
    desc: 海星星跟随你，向四个方向射击
  zt:
    name: 超級球
    desc: 海星星會跟著你，朝四個方向射擊
---
A Staryu follows you and fires in all four directions

{{< clip >}}

## How it works

- Staryu follows just behind you and shoots at the nearest enemy within 380 px, once every 0.73 seconds. Its shots travel up to 360 px and carry its type (Water).
- It fires four shots at once: one at the target and one in each of the other three directions (left, right and behind that line). Each shot deals the full companion damage.
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Its shots are not boosted by your shot upgrades (no extra shots, no crits) and do not trigger your on-hit items.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
