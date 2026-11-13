---
title: Comet Shard
id: fragmento_cometa
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Damage
  value: '25 % of each enemy''s max health (bosses: 8 %), at least 3'
- label: When
  value: Once per room, when you enter a fight
- label: Delay
  value: About 0.4 s, once all enemies have appeared (5 s at most)
icon: items-ps/valuable-item/comet-shard.png
sprite: true
names:
  es:
    name: Fragmento Cometa
    desc: Al entrar en cada combate cae un cometa que hiere a todos los enemigos
  fr:
    name: Morceau Comète
    desc: À chaque combat, une comète tombe et blesse tous les ennemis
  de:
    name: Kometstück
    desc: Zu Beginn jedes Kampfes fällt ein Komet, der alle Gegner verletzt
  it:
    name: Pezzo Cometa
    desc: Entrando in ogni scontro, cade una cometa che ferisce tutti i nemici
  pt:
    name: Fragmento de Cometa
    desc: Ao entrar em cada combate, um cometa cai e fere todos os inimigos
  ru:
    name: Осколок кометы
    desc: При входе в каждый бой падает комета и ранит всех врагов
  ja:
    name: すいせいのかけら
    desc: 戦闘に入るたび、彗星が落ちて敵全員にダメージを与える
  ko:
    name: 혜성조각
    desc: 전투에 들어갈 때마다 혜성이 떨어져 모든 적에게 대미지를 준다
  zh:
    name: 彗星碎片
    desc: 每次进入战斗时会落下一颗彗星，伤害所有敌人
  zt:
    name: 彗星碎片
    desc: 每場戰鬥開始時，會落下一顆彗星，傷害所有敵人
---
When you enter each fight, a comet falls and hurts all enemies

## How it works
- When you walk into a room that still has enemies, a comet is scheduled. It falls about 0.4 s later, but it waits until every enemy has finished appearing and can be hit (it falls after 5 s at the latest).
- It hits **every enemy in the room**, wherever it is: each one loses 25 % of its maximum health (at least 3 damage). Bosses only lose 8 % of their maximum health.
- It is a percentage, so it does not depend on your Damage, your type or your items, and it never crits.
- Only one comet per room: leaving and coming back to an unfinished room does not bring a second one.
- In co-op, one comet falls if anyone on the team carries it.

## Stacking
- A second copy does nothing more: still one comet per room.
