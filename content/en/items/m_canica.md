---
title: Marble
id: m_canica
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Chance
  value: 25 % + 1 % per Luck, per attack (no cap)
- label: Extra shots
  value: 1 or 2 (even odds), in random directions
- label: Damage
  value: Full
icon: items-ps/partner-gift/marble.png
sprite: true
names:
  es:
    name: Canica
    desc: A veces disparas además uno o dos disparos en direcciones al azar
  fr:
    name: Bille
    desc: Parfois, vous tirez aussi un ou deux tirs dans des directions aléatoires
  de:
    name: Glasmurmel
    desc: Manchmal feuerst du zusätzlich einen oder zwei Schüsse in zufällige Richtungen
  it:
    name: Biglia
    desc: A volte spari anche uno o due tiri in direzioni a caso
  pt:
    name: Bolinha de Gude
    desc: Às vezes você também atira um ou dois tiros em direções aleatórias
  ru:
    name: Шарик
    desc: Иногда ты также выпускаешь один-два выстрела в случайных направлениях
  ja:
    name: ビーだま
    desc: ときどき、ランダムな方向にもショットを1-2発撃つ
  ko:
    name: 유리구슬
    desc: 가끔 무작위 방향으로 탄을 한두 발 더 쏜다
  zh:
    name: 弹珠
    desc: 有时会额外朝随机方向射出一到两发弹
  zt:
    name: 彈珠
    desc: 有時會額外朝隨機方向射出一到兩發
---
Sometimes you also fire one or two shots in random directions

## How it works
- Each time you attack, there is a 25 % chance, +1 % per point of Luck (no cap), to also fire **1 or 2 shots** (even odds) in completely random directions, all around you.
- It is rolled **once per attack**, not once per shot, and not again for the backward volley of [Destiny Knot](lazo_destino.html).
- The shots deal full damage and roll their own critical hits and effects on hit, but they count as secondary shots: item effects that only work with your main shots don't trigger with them.
- They are added on top of your volley and don't count towards the 9-shot limit. [Go-Goggles](m_gafas_aislantes.html) don't split them.
- Most weapons also get the extra random attacks.
- How all the extra shots add up: [Extra shots](../mechanics/disparos_extra.html).

## Stacking
- A second copy does nothing more: still one roll per attack, same chance.

{{< clip >}}
