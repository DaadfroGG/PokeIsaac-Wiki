---
title: Red Nectar
id: m_nectar_rojo
kind: passive
category: shot
family: module
tier: 1
pool_weight: 2
details:
- label: Chance
  value: 12 % + 1 % per Luck, per attack (max 50 %)
- label: Flame
  value: 1 extra Fire-type shot, ×1.2 damage
- label: Pierce
  value: Goes through every enemy
- label: Burn
  value: Every enemy it hits (2 s)
- label: Speed and range
  value: 65 % of your shot speed, 70 % of your range
icon: items-ps/other-item/red-nectar.png
sprite: true
names:
  es:
    name: Néctar Rojo
    desc: A veces, además de tu disparo, lanzas una llamarada que atraviesa a los enemigos y los quema
  fr:
    name: Nectar Rouge
    desc: Parfois, en plus de votre tir, vous crachez une flamme qui transperce les ennemis et les brûle
  de:
    name: Roter Nektar
    desc: Manchmal stößt du zusätzlich zu deinem Schuss eine Feuerwoge aus, die Gegner durchdringt und verbrennt
  it:
    name: Nettare rosso
    desc: A volte, oltre al tiro, sputi una vampata che trapassa i nemici e li brucia
  pt:
    name: Néctar Vermelho
    desc: Às vezes, além do seu tiro, você lança uma labareda que atravessa os inimigos e os queima
  ru:
    name: Красный нектар
    desc: Иногда вместе с выстрелом ты выпускаешь пламя, которое пробивает врагов и поджигает их
  ja:
    name: くれないのミツ
    desc: ときどき、ショットに加えて、敵を貫通して燃やす炎を吐く
  ko:
    name: 다홍꿀
    desc: 가끔 탄과 함께 적을 꿰뚫고 화상을 입히는 불꽃을 뿜는다
  zh:
    name: 朱红色花蜜
    desc: 有时除了你的弹，还会喷出一道贯穿敌人并灼烧它们的火焰
  zt:
    name: 朱紅色花蜜
    desc: 有時除了射擊，還會噴出一道貫穿敵人並使其灼傷的火焰
---
Sometimes, along with your shot, you breathe a flame that pierces enemies and burns them

## How it works
- Each time you attack, there is a 12 % chance, +1 % per point of Luck (50 % at most), to also breathe **one flame** in the direction of your first shot.
- The flame is a **Fire-type** projectile whatever your Pokémon's type (the [type chart](../mechanics/tabla_tipos.html) uses Fire), deals **×1.2** the damage of that shot (critical hit included) and is big (at least 12 px radius).
- It goes through every enemy in its path and **burns every enemy it hits**: 10 % of its damage every ⅓ s for 2 s, 4 s with [Heat Rock](roca_calor.html) (see [Status effects](../mechanics/estados.html)).
- It is slower (65 % of your shot speed) and doesn't go as far (70 % of your range).
- It keeps your shot modifiers (homing, bounce…) but doesn't trigger the item effects that happen when you fire.
- Rolled once per attack; it is added on top of your volley, doesn't count towards the 9-shot limit, and [Go-Goggles](m_gafas_aislantes.html) don't split it.
- The 50 % cap needs 38 Luck after [diminishing returns](../mechanics/rendimientos.html) (122 on paper).
- How all the extra shots add up: [Extra shots](../mechanics/disparos_extra.html).

## Stacking
- A second copy does nothing more: still one roll per attack, same chance.

{{< clip >}}
