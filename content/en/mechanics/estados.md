---
title: Status effects
id: estados
color: '#b45cf0'
labels:
- text: MECHANIC
  color: '#b45cf0'
icon: icons/mechanics/efectos_suelo.png
details:
- label: Burn
  value: 10 % of the shot's damage every ⅓ s for 2 s (60 % in total)
- label: Poison
  value: 12 % of the shot's damage every ½ s for 2.5 s (60 % in total)
- label: Slow
  value: Half speed for 1.5 s
- label: Stun, freeze, sleep
  value: The enemy can't move or attack
- label: Charm, confusion, fear
  value: The enemy can't attack; it fights for you, wanders or runs away
- label: Reapplying
  value: Puts the timer back to full; never adds time, never stacks
- label: Bosses
  value: Burn, poison and slow only (slow only between their attacks)
---
Your shots and items can burn, poison, slow, stun, charm, confuse, scare or put enemies to sleep. Each effect has a fixed length; hitting again only puts the timer back to full.

## General rules
- Effects are rolled **on every hit**: each projectile, and each enemy a piercing projectile goes through, is a new chance (see [Projectiles and damage](proyectiles.html)).
- Reapplying an effect that is already running **resets it to its full length**. It never adds time, and two copies of an effect never run at once.
- Chances given as "+2 % per Luck" or "+1 % per Luck" use your Luck after [diminishing returns](rendimientos.html). Type passive chances are ×1.5 for a single-type Pokémon and grow with the [passive's rank](pasivas_escalan.html).
- Burn and poison damage ignores the [type chart](tabla_tipos.html) and item damage bonuses.
- **Bosses** can be burned, poisoned and slowed, but never stunned, frozen, charmed, confused, scared, stuck or put to sleep. When an effect would do that to a boss, it slows it instead, or does nothing (see each effect).

## Damage over time

### Burn
- **Every ⅓ second** for **2 seconds**: 10 % of the damage of the shot that burned the enemy (at least 1 per tick). That is 30 % per second, 60 % in total.
- If a stronger shot burns the enemy again, the ticks use the stronger shot; a weaker shot only resets the timer.
- [Heat Rock](../items/roca_calor.html) doubles the length: **4 seconds**. Higher Fire and Dragon passive ranks make burns last longer and hurt more.
- Works on bosses.
- Sources: [Fire](pasiva_fire.html) and [Dragon](pasiva_dragon.html) passives (15 % per hit + 2 % per Luck), [Charcoal](../items/carbon.html) and [Heat Rock](../items/roca_calor.html) (25 % + 2 % per Luck), the flame of [Red Nectar](../items/m_nectar_rojo.html) (always), [Lava Cookie](../items/m_galleta_lava.html) and [Magmarizer](../items/magmatizador.html) (Fire-type Pokémon only), [Heavy Ball](../items/f_peso_ball.html), [Fire Stone](../items/p_fuego.html), [Odd Incense](../items/incienso_raro.html).
- With [Charcoal](../items/carbon.html) or [Heat Rock](../items/roca_calor.html), an enemy that dies while burning sets every enemy within 120 px on fire for 2 seconds (4 with Heat Rock).

### Poison
- **Every ½ second** for **2.5 seconds**: 12 % of the damage of the shot that poisoned the enemy (at least 1.5 per tick). That is 24 % per second, 60 % in total.
- Same rule as burn: a stronger shot replaces the tick damage, a weaker one only resets the timer. Higher Poison passive ranks make it last longer, hurt more, and spread to other enemies.
- Works on bosses.
- Sources: [Poison](pasiva_poison.html) passive (20 % + 2 % per Luck), [Green Apricorn](../items/m_bonguri_verde.html) (every hit), [Poison Barb](../items/flecha_venenosa.html) (33 % + 2 % per Luck, and poisoned enemies take ×1.5 from your shots), [Purple Nectar](../items/m_nectar_violeta.html) (every enemy when you enter a room, for 6 s), [Moomoo Cheese](../items/m_queso_mumu.html), [Boiled Egg](../items/a_huevo_duro.html), [Toxic Orb](../items/m_toxisfera.html) (Poison-type Pokémon only).

### Stuck
- [Grubby Hanky](../items/m_panuelo_sucio.html): 20 % + 1 % per Luck per hit, the shot sticks for **2 seconds** and deals 20 % of that hit's damage every ⅓ second (6 ticks, 120 % in total). It doesn't slow the enemy.
- Never on bosses.

## Slowing down

### Slow
- The enemy walks at **half speed** for **1.5 seconds**. It still attacks normally.
- Bosses: only their walking between attacks is halved.
- Sources: [Ice](pasiva_ice.html) passive (25 % + 2 % per Luck), [Blue Apricorn](../items/m_bonguri_azul.html) (every hit), [White Apricorn](../items/m_bonguri_blanco.html) (30 % + 2 % per Luck), [Fairy](pasiva_fairy.html) charm (1 s), [Honey](../items/m_miel.html) puddles, [Damp Mulch](../items/a_abono_lento.html) (6 s).
- [Binding Band](../items/banda_atadura.html): slowed enemies take 30 % more damage.
- Always on, no hit needed: [Lagging Tail](../items/cola_plumbea.html) (all enemies 20 % slower) and [Slowpoke Tail](../items/cola_slowpoke.html) (half speed within 150 px of you). Neither works on bosses; both stack with a slow.

## Stopping the enemy

### Stun (paralysis)
- The enemy **can't move or attack**. Never on bosses.
- Sources: [Steel](pasiva_steel.html) passive (15 % + 2 % per Luck, 0.6 s), [King's Rock](../items/roca_rey.html) (10 % + 2 % per Luck, 0.75 s), [Black Glasses](../items/gafas_sol.html) (every critical hit, 0.75 s), [Fairy](pasiva_fairy.html) charm (0.8 s), [Grass](pasiva_grass.html) passive from rank 3 (0.5 s; a boss is slowed instead), [Rock](pasiva_rock.html) and [Ground](pasiva_ground.html) passives from rank 3 (0.4 s), [DNA Splicers](../items/punta_adn.html) (1.5 s), [Galarica Twig](../items/a_rama_galanuez.html).

### Freeze
- Like a stun (the enemy is stuck in ice), but it **needs an enemy that is already slowed**.
- [White Apricorn](../items/m_bonguri_blanco.html): on a slowed enemy, 25 % + 2 % per Luck to freeze it for **1.8 seconds**; otherwise 30 % + 2 % per Luck to slow it.
- [Ice](pasiva_ice.html) passive from rank 3: frozen for 1.2 s; a boss is slowed for 2 s instead.
- [Stable Mulch](../items/a_abono_fijador.html): turns every enemy to stone for **4 seconds**; bosses are only slowed for 4 s.

### Sleep
- [Poké Flute](../items/poke_flauta.html): every enemy (not bosses) falls asleep for **5 seconds** and can't move or attack.
- The **first hit** on a sleeping enemy deals **×3** and wakes it up.

## Changing the enemy's behaviour
None of these work on bosses.

| Effect | What the enemy does | Sources |
|---|---|---|
| **Charm** (Fairy) | Stunned 0.8 s and slowed 1 s; a boss is only slowed | [Fairy](pasiva_fairy.html) passive (18 % + 2 % per Luck) |
| **Turned** | Walks to the nearest other enemy and hits it every ½ s (3 times its contact damage, at least 2); it doesn't hurt you on contact | [Pink Apricorn](../items/m_bonguri_rosa.html) (12 % + 1 % per Luck, 5 s), [Pink Nectar](../items/m_nectar_rosa.html) (enemies within 70 px, about half the time for each second they stay there, 4 s), [Fairy](pasiva_fairy.html) passive from rank 4 (1.5 s) |
| **Confusion** | Wanders in a random direction (a new one every ½ s) at 70 % speed and doesn't attack | [Rose Incense](../items/m_incienso_floral.html) (12 % + 1 % per Luck, 3 s), [Psychic](pasiva_psychic.html) passive from rank 4 (1.5 s) |
| **Fear** | Runs away from you at 110 % speed and doesn't attack | [Dark Stone](../items/m_orbe_oscuro.html) (15 % + 1 % per Luck, 2.5 s), [Ghost](pasiva_ghost.html) passive (1.5 s), companions that scare (25 %, 2 s) |
| **Push** | Pushed back by the hit | [Water](pasiva_water.html) passive (every hit), [Rock](pasiva_rock.html) and [Ground](pasiva_ground.html) passives (50 %); bosses are never pushed |

- A turned enemy is not turned again until its effect ends. Fear wins over confusion when an enemy has both.

## Against bosses

| Effect | On a boss |
|---|---|
| Burn, poison | Full effect |
| Slow | Only slows its walking between attacks |
| Charm (Fairy), Ice passive freeze, Grass passive stun, Stable Mulch | Becomes a simple slow |
| Other stuns, White Apricorn freeze, sleep, stuck, turned, confusion, fear, push | Nothing |

## Effects on you
- In a normal run, enemies **never** burn, poison, stun or charm you: their attacks and contact only cost you health.
- What can slow you down or push you are floor hazards and zone rules: see [Ground effects](efectos_suelo.html), [Infinite zones](zonas_infinito.html) and [Curses](maldiciones.html).
- In the [Trainer Battle](batalla.html) arena, the effects of your rivals' shots do reach you, weaker: burn and poison last half as long; slow, confusion, fear and charm only slow you (×0.62 speed); stun, freeze and sleep hold you still for 1 s at most, and then you can't be held again for 3 s.

Related pages: [Projectiles and damage](proyectiles.html) · [Scaling type passives](pasivas_escalan.html) · [Extra shots](disparos_extra.html) · [Item stacking](acumulacion.html)
