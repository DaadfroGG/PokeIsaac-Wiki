---
title: Nest Ball
id: f_nido_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Companion
  value: Natu (Psychic)
- label: Fire interval
  value: 0.6 s
- label: Damage per shot
  value: 2 + 0.4 per floor
- label: Shots
  value: Home in on enemies
icon: items-ps/ball/nest.png
sprite: true
names:
  es:
    name: Nido Ball
    desc: Un Natu te acompaña y sus disparos persiguen a los enemigos
  fr:
    name: Faiblo Ball
    desc: Un Natu vous accompagne et ses tirs poursuivent les ennemis
  de:
    name: Nestball
    desc: Ein Natu begleitet dich und seine Schüsse verfolgen Gegner
  it:
    name: Minor Ball
    desc: Un Natu ti accompagna e i suoi tiri inseguono i nemici
  pt:
    name: Nest Ball
    desc: Um Natu te acompanha e os tiros dele perseguem os inimigos
  ru:
    name: Нестбол
    desc: Нату следует за тобой, и его выстрелы преследуют врагов
  ja:
    name: ネストボール
    desc: ネイティがついてきて、そのショットは敵を追尾する
  ko:
    name: 네스트볼
    desc: 네이티가 함께 다니며 탄이 적을 추적한다
  zh:
    name: 巢穴球
    desc: 天然雀跟随你，它的弹会追踪敌人
  zt:
    name: 巢穴球
    desc: 天然雀會跟著你，它的彈會追蹤敵人
---
A Natu follows you and its shots home in on enemies

{{< clip >}}

## How it works

- Natu follows just behind you and shoots at the nearest enemy within 380 px, once every 0.6 seconds. Its shots travel up to 360 px and carry its type (Psychic).
- Its shots are homing: they curve toward enemies.
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Its shots are not boosted by your shot upgrades (no extra shots, no crits) and do not trigger your on-hit items.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
