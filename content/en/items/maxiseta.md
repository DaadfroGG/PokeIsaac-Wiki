---
title: Max Mushrooms
id: maxiseta
kind: active
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
charge: 5
details:
- label: Duration
  value: 8 s
- label: Damage
  value: ×2
- label: Size
  value: ×1.5
icon: items-ps/battle-item/max-mushrooms.png
sprite: true
names:
  es:
    name: Maxiseta
    desc: ¡Dinamax! Creces y haces ×2 de daño durante 8 segundos
  fr:
    name: Maxi Champi
    desc: Dynamax ! Vous grandissez et infligez ×2 dégâts pendant 8 secondes
  de:
    name: Dyna-Pilz
    desc: Dynamax! Du wächst und machst 8 Sekunden lang ×2 Schaden
  it:
    name: Fungomax
    desc: Dynamax! Cresci e infliggi danni ×2 per 8 secondi
  pt:
    name: Cogumelos Máximos
    desc: Dynamax! Você cresce e causa ×2 de dano por 8 segundos
  ru:
    name: Макс-грибы
    desc: Динамакс! Ты растешь и наносишь ×2 урона в течение 8 секунд
  ja:
    name: ダイキノコ
    desc: ダイマックス！巨大化して8秒間ダメージ×2
  ko:
    name: 다이버섯
    desc: 다이맥스! 8초 동안 거대화하며 대미지 ×2
  zh:
    name: 极巨菇菇
    desc: 极巨化！体型变大，8秒内伤害×2
  zt:
    name: 極巨菇菇
    desc: 極巨化！體型變大，8秒內傷害×2
---
Dynamax! You grow and deal ×2 damage for 8 seconds

## How it works
- For 8 seconds your Damage is doubled and your Pokémon grows to 1.5 times its size.
- Your hitbox grows with you (about ×1.5, up to a 26 px radius), so you are easier to hit while it lasts.
- The ×2 is a multiplier on your Damage stat (shown on the HUD), so it follows the [diminishing returns](../mechanics/rendimientos.html) on multipliers: on its own it counts in full, but together with other multipliers the total is still capped at ×3.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: the timer just restarts at 8 seconds.
