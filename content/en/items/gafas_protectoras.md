---
title: Safety Goggles
id: gafas_protectoras
kind: passive
category: utility
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Blocks
  value: Puddles, gas, spikes, pits, fires, falling rocks, lobbed shots
- label: Does not block
  value: Normal enemy shots, contact, explosions
icon: items-ps/hold-item/safety-goggles.png
sprite: true
names:
  es:
    name: Gafas Protectoras
    desc: No te dañan los charcos, el gas ni las rocas que caen
  fr:
    name: Lunettes Filtre
    desc: Les flaques, le gaz et les rochers qui tombent ne vous blessent pas
  de:
    name: Schutzbrille
    desc: Pfützen, Gas und herabfallende Felsen schaden dir nicht
  it:
    name: Visierantisabbia
    desc: Pozze, gas e massi in caduta non ti feriscono
  pt:
    name: Óculos de Proteção
    desc: Poças, gás e rochas que caem não machucam você
  ru:
    name: Защитные очки
    desc: Лужи, газ и падающие камни не ранят тебя
  ja:
    name: ぼうじんゴーグル
    desc: 水たまり・ガス・落石でダメージを受けない
  ko:
    name: 방진고글
    desc: 웅덩이, 가스, 떨어지는 바위에 대미지를 받지 않는다
  zh:
    name: 防尘护目镜
    desc: 水洼、毒气和落石伤不到你
  zt:
    name: 防塵護目鏡
    desc: 水窪、毒氣和落石都不會傷害你
---
Puddles, gas and falling rocks don't hurt you

## How it works
- Any damage that comes from the ground or from the room itself is cancelled completely:
  - puddles and gas clouds that enemies leave (also the gas some enemies release when they die), and the ground zones of boss attacks;
  - spike tiles and the spikes of the spike trial room;
  - fires on the floor;
  - falling into a pit: you still fall and come back at the edge, but you lose no health;
  - boss attacks marked on the ground that drop rocks, ice or bones;
  - enemy shots that fly in an arc and fall from above (falling rocks, lobbed shots).
- It does **not** protect from normal enemy shots, from touching enemies, or from explosions (for those, see [Magma Stone](d_piedra_magma.html)).

## Stacking
- A second copy does nothing more.
