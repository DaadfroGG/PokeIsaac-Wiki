---
title: Projectiles and damage
id: proyectiles
color: '#ff9a3c'
labels:
- text: MECHANIC
  color: '#ff9a3c'
icon: icons/mechanics/criticos.png
---
Your Pokémon attacks by firing projectiles. Most of what an attack does (critical hits, status effects, type passives) is decided for each projectile, not once per attack.

## From attack to projectile
- Your fire rate sets how often you attack, at most 12 times per second.
- Each attack fires 1 projectile, plus 1 for each point of multishot, up to 9.
- Each projectile rolls on its own, when it is fired: critical hit, homing, pierce, and the bonuses of its type passive.
- A dual-type Pokémon alternates its two types: one projectile in two uses each type.

## When a projectile hits
- A projectile hits each enemy only once. It disappears after its first hit, unless it can pierce: it then goes through as many enemies as it can pierce.
- The effects below are rolled again for each enemy it hits, so a piercing projectile rolls on each enemy it goes through.
- With several projectiles per attack, a target gets one roll per projectile that hits it. Three projectiles that all hit mean three rolls.

## What happens in a hit, in order
1. If the enemy is poisoned and your shot has the venom modifier, the damage is ×1.5.
2. The [type chart](tabla_tipos.html) multiplies the damage (between ×0.45 and ×2.25). Only your own projectiles use it.
3. Item and weapon effects that change the damage on hit.
4. The damage is dealt, and the enemy is pushed back a little (not bosses).
5. Status effects are rolled after the damage: burn, poison, slow, stun, charm, push, chain lightning, and the [type passive](pasivas_escalan.html) effects.

## Which effects are rolled where
- **Every hit, no condition:** burn, poison, slow, stun, charm, knockback and chain lightning from your type and your items. A success never adds time to an effect that is already running, it only resets it to its full length.
- **Every hit, with a condition:** freezing needs an enemy that is already slowed. Passive effects that start at a rank (spread, splash, turning an enemy) only work from that rank.
- **Once per projectile:** some item effects only trigger on the first enemy a projectile hits.
- **Bosses:** stun, confusion, fear and turning don't work on bosses. Charm, freeze and root become a simple slow.

## Projectiles that do less
- Projectiles created by an effect (the small ones from split shots, chain lightning, companions, some weapons) don't use most of your item effects.
- Split shots deal half damage and don't carry your item modifiers or your type passive.
- Burn and poison ticks are not projectiles: they ignore the type chart and don't trigger on-hit effects.

## Limits
- At most 450 of your projectiles can exist in a room. Beyond that, the oldest are removed first, starting with the ones created by other projectiles.
- A projectile disappears when it has travelled its range (300 by default), when it leaves the room, or when it hits a rock, an obstacle or a pit, unless it can bounce. Ghost projectiles go through rocks.

Related pages: [Diminishing returns](rendimientos.html), [Critical hits](criticos.html), [Type chart](tabla_tipos.html), [Scaling type passives](pasivas_escalan.html).
