---
title: Amaze Mulch
id: a_abono_insolito
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Radius
  value: 150 px around you
- label: Stun
  value: 0.67 s (not bosses)
- label: Damage
  value: 1 to every enemy in range
- label: Enemy shots
  value: Turned away from you
icon: items-ps/mulch/amaze.png
sprite: true
names:
  es:
    name: Abono Insólito
    desc: Empujas lejos a los enemigos y disparos cercanos, y aturdes a los enemigos
  fr:
    name: Fertiprodige
    desc: Vous repoussez au loin les ennemis et les tirs proches, et étourdissez les ennemis
  de:
    name: Ultramulch
    desc: Du stößt nahe Gegner und Schüsse weit weg und betäubst die Gegner
  it:
    name: Fertilprodigio
    desc: Spingi lontano i nemici e i tiri vicini, e stordisci i nemici
  pt:
    name: Adubo Incrível
    desc: Você empurra para longe inimigos e tiros próximos, e atordoa os inimigos
  ru:
    name: Чудесная мульча
    desc: Отбрасываешь ближних врагов и выстрелы и оглушаешь врагов
  ja:
    name: とんでもこやし
    desc: 近くの敵とショットを遠くへ押し飛ばし、敵を気絶させる
  ko:
    name: 기절초풍비료
    desc: 주변의 적과 탄을 멀리 밀어내고 적을 기절시킨다
  zh:
    name: 超效肥
    desc: 你会将附近的敌人和弹击退，并使敌人眩晕
  zt:
    name: 超效肥
    desc: 擊退附近的敵人和彈，並使敵人暈眩
---
You knock back nearby enemies and shots, and stun the enemies

## How it works
- Every enemy within 150 px is hit for 1 damage. This hit doesn't trigger your items or statuses.
- Enemies in range (not bosses) are thrown back hard and stunned for 0.67 seconds.
- Bosses in range only take the 1 damage: they are neither pushed nor stunned.
- Enemy shots within 150 px are turned around to fly straight away from you, at the same speed. They stay enemy shots.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): the blast goes off twice in a row (2 damage, pushed again).
