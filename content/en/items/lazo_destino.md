---
title: Destiny Knot (Core)
id: lazo_destino
kind: passive
category: shot
family: core
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Extra shots
  value: A full second volley backwards (same number of shots, up to 9)
- label: Damage
  value: Same as your forward shots
- label: Second copy
  value: Nothing more
icon: items-ps/hold-item/destiny-knot.png
sprite: true
names:
  es:
    name: Lazo Destino
    desc: Disparas también hacia atrás
  fr:
    name: Nœud Destin
    desc: Vous tirez aussi vers l'arrière
  de:
    name: Fatumknoten
    desc: Du schießt auch nach hinten
  it:
    name: Destincomune
    desc: Spari anche all'indietro
  pt:
    name: Laço do Destino
    desc: Você também atira para trás
  ru:
    name: Узел судьбы
    desc: Ты стреляешь еще и назад
  ja:
    name: あかいいと
    desc: 後ろにも撃つ
  ko:
    name: 빨간실
    desc: 뒤쪽으로도 쏜다
  zh:
    name: 红线
    desc: 你也会向后方射击
  zt:
    name: 紅線
    desc: 你也會向後方射擊
---
You also shoot backwards

## How it works
- Every time you attack, you also fire a second volley in the exact opposite direction: same number of shots (1 + multishot, up to 9), same damage, same effects. With a full 9-shot volley, that is **18 shots** per attack.
- Each shot of the backward volley rolls its own critical hit, homing, pierce and effects, like any other shot.
- The backward volley doesn't get the extra shot of the Burst mastery talent, and the chance items ([Dragon Skull](m_craneo_dragon.html), [Marble](m_canica.html), [Red Nectar](m_nectar_rojo.html)) roll once per attack, not again for the backward volley.
- [Go-Goggles](m_gafas_aislantes.html) split the backward shots too (9 + 9 = 18 become 36), and the Ditto of the [Repeat Ball](f_acopio_ball.html) copies the backward volley too.
- If you use a weapon instead of normal shots, most weapons also attack backwards.
- How all the extra shots add up: [Extra shots](../mechanics/disparos_extra.html).

## Stacking
- A second copy does nothing: there is still only one backward volley.
- Not to be confused with [Destiny Knot (Cursed)](cu_nudo.html), a fire-rate item that adds no shots.

{{< clip >}}
