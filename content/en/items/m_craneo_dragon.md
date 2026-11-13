---
title: Dragon Skull
id: m_craneo_dragon
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
- devil
pool_weight: 2
details:
- label: Chance
  value: 15 % + 1 % per Luck, per attack (max 50 %)
- label: Extra shots
  value: '3: right, back and left of your first shot'
- label: Damage
  value: Full
- label: Max chance
  value: 50 % at 35 Luck after diminishing returns
icon: items-ps/key-item/dragon-skull.png
sprite: true
names:
  es:
    name: Cráneo Dragón
    desc: A veces disparas en las cuatro direcciones a la vez
  fr:
    name: Crâne Dragon
    desc: Parfois, vous tirez dans les quatre directions à la fois
  de:
    name: Drakoschädel
    desc: Manchmal schießt du in alle vier Richtungen gleichzeitig
  it:
    name: Teschio
    desc: A volte spari nelle quattro direzioni insieme
  pt:
    name: Crânio de Dragão
    desc: Às vezes você atira nas quatro direções ao mesmo tempo
  ru:
    name: Череп дракона
    desc: Иногда ты стреляешь во все четыре стороны сразу
  ja:
    name: ドラゴンのホネ
    desc: ときどき、4方向に同時にショットを撃つ
  ko:
    name: 드래곤의뼈
    desc: 가끔 네 방향으로 동시에 쏜다
  zh:
    name: 龙之骨
    desc: 有时会同时向四个方向射击
  zt:
    name: 龍之骨
    desc: 有時會同時朝四個方向射擊
---
Sometimes you fire in all four directions at once

## How it works
- Each time you attack, there is a 15 % chance, +1 % per point of Luck (50 % at most), to also fire **3 shots** at 90°, 180° and 270° from your first shot: you fire in all four directions.
- It is rolled **once per attack**, whatever the number of shots in your volley; the backward volley of [Destiny Knot](lazo_destino.html) doesn't roll again.
- The 3 shots are normal shots: full damage, with your item effects, and each rolls its own critical hit and effects.
- They are added on top of your volley and don't count towards the 9-shot limit. [Go-Goggles](m_gafas_aislantes.html) don't split them.
- Most weapons also attack in the four directions when it triggers.
- The 50 % cap needs 35 Luck after [diminishing returns](../mechanics/rendimientos.html) (110 on paper). Negative Luck lowers the chance.
- How all the extra shots add up: [Extra shots](../mechanics/disparos_extra.html).

## Stacking
- A second copy does nothing more: still one roll per attack, same chance.

{{< clip >}}
