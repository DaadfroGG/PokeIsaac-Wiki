---
title: Poké Doll
id: muneco
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Duration
  value: 5 s
- label: Placed
  value: 40 px in the direction you last shot
- label: Bosses
  value: Ignore it
icon: items-ps/other-item/poke-doll.png
sprite: true
names:
  es:
    name: Muñeco Poké
    desc: 'Pon un señuelo: los enemigos van a por él unos segundos'
  fr:
    name: Poképoupée
    desc: 'Posez un leurre : les ennemis le prennent pour cible quelques secondes'
  de:
    name: Poképuppe
    desc: 'Stelle eine Puppe auf: Gegner gehen ein paar Sekunden lang auf sie los'
  it:
    name: Poké Bambola
    desc: 'Piazza un diversivo: i nemici lo attaccano per qualche secondo'
  pt:
    name: Boneco Poké
    desc: 'Coloque um chamariz: os inimigos vão atrás dele por alguns segundos'
  ru:
    name: Кукла-покемон
    desc: 'Поставь приманку: враги идут за ней несколько секунд'
  ja:
    name: ピッピにんぎょう
    desc: おとりを置く：敵が数秒間そちらを狙う
  ko:
    name: 삐삐인형
    desc: '미끼를 둔다: 적들이 몇 초 동안 미끼를 노린다'
  zh:
    name: 皮皮玩偶
    desc: 放置诱饵：敌人会追着它跑几秒
  zt:
    name: 皮皮玩偶
    desc: 放置誘餌：敵人會追著它跑幾秒
---
Place a decoy: enemies go after it for a few seconds

## How it works
- A Poké Doll is placed 40 px in the direction you last shot. For 5 seconds, every enemy except bosses targets the doll instead of you: they walk toward it and aim their attacks at it.
- The doll can't be destroyed; it just disappears after 5 seconds (it blinks at the end).
- Bosses and enemies that copy you ignore it.
- In co-op, the doll draws enemies away from all players.
- It always goes off when you press it, even in an empty room, and uses the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two dolls are placed, but only one draws enemies at a time.
