---
title: Solar Shard
id: cs_sol
kind: passive
category: stats
family: cosmic
tier: 1
pools:
- cosmic
pool_weight: 1
details:
- label: At full health
  value: Damage ×1.2
- label: Without full health
  value: Damage ×1.05
- label: Eclipse (with the Lunar Shard)
  value: Damage ×1.15 more
- label: Eclipse total
  value: ×1.38 at full health, ×1.21 otherwise
icon: items-ps/evo-item/sun-stone.png
sprite: true
names:
  es:
    name: Fragmento Solar
    desc: 'Tu daño ×1,2 con la vida llena (×1,05 si no). Con el Fragmento Lunar, ¡eclipse!: otro ×1,15.'
  fr:
    name: Fragment Solaire
    desc: 'Vos dégâts ×1,2 à pleine vie (×1,05 sinon). Avec le Fragment Lunaire, éclipse ! : encore ×1,15.'
  de:
    name: Solar Shard
    desc: 'Your damage ×1,2 at full health (×1,05 otherwise). With the Lunar Shard, eclipse!: another ×1.15.'
  it:
    name: Solar Shard
    desc: 'Your damage ×1,2 at full health (×1,05 otherwise). With the Lunar Shard, eclipse!: another ×1.15.'
  pt:
    name: Solar Shard
    desc: 'Your damage ×1,2 at full health (×1,05 otherwise). With the Lunar Shard, eclipse!: another ×1.15.'
  ru:
    name: Solar Shard
    desc: 'Your damage ×1,2 at full health (×1,05 otherwise). With the Lunar Shard, eclipse!: another ×1.15.'
  ja:
    name: Solar Shard
    desc: 'Your damage ×1.2 at full health (×1.05 otherwise). With the Lunar Shard, eclipse!: another ×1.15.'
  ko:
    name: Solar Shard
    desc: 'Your damage ×1.2 at full health (×1.05 otherwise). With the Lunar Shard, eclipse!: another ×1.15.'
  zh:
    name: Solar Shard
    desc: 'Your damage ×1.2 at full health (×1.05 otherwise). With the Lunar Shard, eclipse!: another ×1.15.'
  zt:
    name: Solar Shard
    desc: 'Your damage ×1.2 at full health (×1.05 otherwise). With the Lunar Shard, eclipse!: another ×1.15.'
---
Your damage ×1.2 at full health (×1.05 otherwise). With the Lunar Shard, eclipse!: another ×1.15.

## How it works
- Always on: ×1.2 Damage while your hearts are full, ×1.05 as soon as you are missing any health (including half a heart).
- **Eclipse:** if you also carry the [Lunar Shard](cs_luna.html), you get an extra ×1.15 on top: ×1.2 × 1.15 = **×1.38** at full health, ×1.05 × 1.15 ≈ **×1.21** otherwise.
- These are damage multipliers: they multiply with your other multipliers and go through the [diminishing returns](../mechanics/rendimientos.html) (full up to ×2.3, then a quarter, never above ×3).
- Found only in the [Observatory](../rooms/observatory.html) (free cosmic item, you pick one of three).

## Stacking
- A second copy does nothing more.
