---
title: Poké Radar
id: poke_radar
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 4
details:
- label: Charge
  value: 4 rooms
- label: Targets
  value: All non-boss enemies in the room
- label: Reward
  value: 3 coins per marked enemy killed
- label: Bosses
  value: Not affected
icon: items-ps/key-item/poke-radar.png
sprite: true
names:
  es:
    name: Poké Radar
    desc: Los enemigos de la sala se vuelven shiny y sueltan monedas
  fr:
    name: Poké Radar
    desc: Les ennemis de la salle deviennent chromatiques et lâchent des pièces
  de:
    name: Pokéradar
    desc: Die Gegner im Raum werden schillernd und lassen Münzen fallen
  it:
    name: Poké Radar
    desc: I nemici della stanza diventano cromatici e lasciano monete
  pt:
    name: Poké Radar
    desc: Os inimigos da sala viram shiny e soltam moedas
  ru:
    name: Покерадар
    desc: Враги в комнате становятся шайни и роняют монеты
  ja:
    name: ポケトレ
    desc: 部屋の敵が色違いになり、コインを落とす
  ko:
    name: 포켓트레
    desc: 방 안의 적이 이로치가 되어 동전을 떨어뜨린다
  zh:
    name: 宝可追踪
    desc: 房间内的敌人变成闪光并掉落硬币
  zt:
    name: 寶可追蹤
    desc: 房間內的敵人會變成異色並掉落金幣
---
Enemies in the room turn shiny and drop coins

## How it works
- Charge: 4 rooms. Every room you clear gives 1 charge.
- Every living enemy in the room that is not a boss turns shiny.
- Each shiny enemy drops 3 coins when it dies, whatever kills it (your shots, bombs, other enemies, hazards).
- The effect has no time limit: it lasts until the enemy dies or you leave the room.
- Bosses are not affected. It can't be used when no non-boss enemy is left, and then no charge is spent.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With a [Cell Battery](d_pila.html) the item can store twice its charge.
