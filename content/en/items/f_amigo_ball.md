---
title: Friend Ball
id: f_amigo_ball
kind: passive
category: familiar
family: familiar
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Companion
  value: Pichu (Electric)
- label: Fire interval
  value: 0.5 s
- label: Damage per shot
  value: 2 + 0.4 per floor
icon: items-ps/ball/friend.png
sprite: true
names:
  es:
    name: Amigo Ball
    desc: Un Pichu te acompaña y dispara a los enemigos
  fr:
    name: Copain Ball
    desc: Un Pichu vous accompagne et tire sur les ennemis
  de:
    name: Freundesball
    desc: Ein Pichu begleitet dich und schießt auf Gegner
  it:
    name: Friend Ball
    desc: Un Pichu ti accompagna e tira contro i nemici
  pt:
    name: Bola Amizade
    desc: Um Pichu te acompanha e atira nos inimigos
  ru:
    name: Френдбол
    desc: Пичу следует за тобой и стреляет во врагов
  ja:
    name: フレンドボール
    desc: ピチューがついてきて、敵を撃つ
  ko:
    name: 프렌드볼
    desc: 피츄가 함께 다니며 적에게 탄을 쏜다
  zh:
    name: 友友球
    desc: 皮丘跟随你并射击敌人
  zt:
    name: 友友球
    desc: 皮丘會跟著你，並射擊敵人
---
A Pichu follows you and shoots enemies

{{< clip >}}

## How it works

- Pichu follows just behind you and shoots at the nearest enemy within 380 px, once every 0.5 seconds. Its shots travel up to 360 px and carry its type (Electric).

- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Its shots are not boosted by your shot upgrades (no extra shots, no crits) and do not trigger your on-hit items.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
