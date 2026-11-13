---
title: Skull Fossil
id: a_fosil_craneo
kind: active
family: ability
tier: 3
pools:
- treasure
- devil
pool_weight: 2
charge: 4
details:
- label: Beams
  value: 4, in a cross
- label: Duration
  value: 0.6 s
- label: Damage
  value: Your Damage ×1.2 every 0.05 s (up to ×14.4 per enemy)
- label: Width
  value: 26 px (+5 per Size bonus)
icon: items-ps/fossil/skull.png
sprite: true
names:
  es:
    name: Fósil Cráneo
    desc: Lanzas cuatro rayos en cruz que lo atraviesan todo
  fr:
    name: Fossile Crâne
    desc: Vous lancez quatre rayons en croix qui transpercent tout
  de:
    name: Kopffossil
    desc: Du feuerst vier Strahlen im Kreuz ab, die alles durchdringen
  it:
    name: Fossilcranio
    desc: Lanci quattro raggi a croce che trapassano tutto
  pt:
    name: Fóssil Crânio
    desc: Você lança quatro raios em cruz que atravessam tudo
  ru:
    name: Окаменелость-череп
    desc: Выпускаешь четыре луча крестом, пробивающие все
  ja:
    name: ずがいのカセキ
    desc: 全てを貫く光線を十字に4本放つ
  ko:
    name: 두개의화석
    desc: 모든 것을 관통하는 십자 빔 4개를 쏜다
  zh:
    name: 头盖化石
    desc: 发射十字形的四道光束，贯穿一切
  zt:
    name: 頭蓋化石
    desc: 發射十字形的四道光束，貫穿一切
---
You fire four beams in a cross that pierce everything

## How it works
- Four beams shoot out from you in a cross (one toward where you are facing, and the other three at right angles) for 0.6 seconds. They reach the walls and go through rocks and every enemy.
- Every 0.05 seconds, each enemy in a beam takes 1.2 times your Damage: up to 12 hits, about 14.4 times your Damage, for an enemy that stays in a beam the whole time. Bosses take it too.
- Each tick uses your type and can be a [critical hit](../mechanics/criticos.html). Your items' shot effects also apply.
- The beams don't bounce. They break crates and barrels on their path.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: the second cross replaces the first.
