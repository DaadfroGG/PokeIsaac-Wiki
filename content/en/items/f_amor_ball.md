---
title: Love Ball
id: f_amor_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Companion
  value: Igglybuff (Fairy)
- label: Fire interval
  value: 0.67 s
- label: Damage per shot
  value: (2 + 0.4 per floor) ×1.8
- label: Damage bonus
  value: ×1.8 compared to other companions
icon: items-ps/ball/love.png
sprite: true
names:
  es:
    name: Amor Ball
    desc: Un Igglybuff te acompaña y dispara más fuerte que otros compañeros
  fr:
    name: Love Ball
    desc: Un Toudoudou vous accompagne et tire plus fort que les autres compagnons
  de:
    name: Sympaball
    desc: Ein Fluffeluff begleitet dich und schießt stärker als andere Begleiter
  it:
    name: Love Ball
    desc: Un Igglybuff ti accompagna e tira più forte degli altri compagni
  pt:
    name: Bola Amor
    desc: Um Igglybuff te acompanha e atira mais forte que os outros companheiros
  ru:
    name: Лавбол
    desc: Игглибафф следует за тобой и стреляет сильнее других спутников
  ja:
    name: ラブラブボール
    desc: ププリンがついてきて、ほかのなかまより強く撃つ
  ko:
    name: 러브러브볼
    desc: 푸푸린이 함께 다니며 다른 동료보다 센 탄을 쏜다
  zh:
    name: 甜蜜球
    desc: 一只宝宝丁跟随你，射击威力比其他伙伴更强
  zt:
    name: 甜蜜球
    desc: 寶寶丁會跟著你，射擊威力比其他夥伴更強
---
An Igglybuff follows you and shoots harder than other companions

{{< clip >}}

## How it works

- Igglybuff follows just behind you and shoots at the nearest enemy within 380 px, once every 0.67 seconds. Its shots travel up to 360 px and carry its type (Fairy).
- Its shots hit 1.8 times as hard as a normal companion's (3.6 on the first floor).
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Its shots are not boosted by your shot upgrades (no extra shots, no crits) and do not trigger your on-hit items.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
