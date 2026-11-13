---
title: Go-Goggles
id: m_gafas_aislantes
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Shots
  value: Each shot of your volleys becomes 2, 26° to each side of your aim
- label: Damage
  value: Full, for both shots
- label: Rocks
  value: Both shots go through rocks
- label: With Destiny Knot
  value: 9 + 9 shots become 36
icon: items-ps/key-item/go-goggles.png
sprite: true
names:
  es:
    name: Gafas Aislantes
    desc: Cada disparo sale doble y en diagonal
  fr:
    name: Lunettes Sable
    desc: Chaque tir sort en double et en diagonale
  de:
    name: Wüstenbrille
    desc: Jeder Schuss kommt doppelt und diagonal
  it:
    name: Occhialoni
    desc: Ogni tiro esce doppio e in diagonale
  pt:
    name: Go-Goggles
    desc: Cada tiro sai duplo e na diagonal
  ru:
    name: Гоу-очки
    desc: Каждый выстрел идет двойным и по диагонали
  ja:
    name: ゴーゴーゴーグル
    desc: ショットが2発になり、斜めに発射される
  ko:
    name: 고고고글
    desc: 탄이 두 발씩 대각선으로 나간다
  zh:
    name: ＧＯＧＯ护目镜
    desc: 每发弹变为两发斜向射出
  zt:
    name: ＧＯＧＯ護目鏡
    desc: 每發彈變成雙發，並斜向射出
---
Each shot comes out double and diagonal

## How it works
- Each shot of your volley is turned 26° to one side, and a copy goes 26° to the other side. No shot goes straight where you aim any more: with a single shot, you fire a V.
- The copy has exactly the damage of the original shot, critical hit included, and gets your item effects when fired. On hit, each of the two rolls its effects separately.
- Both shots go through rocks and obstacles.
- It splits both volleys of [Destiny Knot](lazo_destino.html): 9 forward + 9 backward = 18 shots become **36**.
- It doesn't split the extra shots of [Dragon Skull](m_craneo_dragon.html), [Marble](m_canica.html), [Red Nectar](m_nectar_rojo.html) or [Tropical Shell](m_concha_tropical.html), nor the copies fired by the Ditto of the [Repeat Ball](f_acopio_ball.html).
- How all the extra shots add up: [Extra shots](../mechanics/disparos_extra.html).

## Stacking
- A second copy does nothing more: each shot is still split in 2.

{{< clip >}}
