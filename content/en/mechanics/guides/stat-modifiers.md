---
title: PokéIsaac — How player stats are computed (v1.1.1-108d03b1)
layout: guide
weight: 1
text_lang: en
---

Every player has `base` stats (from the character) and `bonus` stats (summed from items and evolutions).
Picking up an item does `bonus[stat] += item.stats[stat]` (`addItem`). HP goes straight to `maxHp`.
The final value is computed live by getters on `Player`, which apply diminishing returns and multipliers.

## Diminishing-returns function `NERF.dr(x, A, B, C)`

| Portion of the bonus | Counts as |
|---|---|
| 0 → A | 100 % |
| A → B | 50 % |
| B → C (C=∞ if absent) | 25 % |
| above C | 5 % |

## Damage (`get dmg`)

```
bonus = items/evos dmg + conditional adds (ItemFX.dmgAdd)
if bonus > 0: bonus = dr(bonus, 3, 8, 40)       # negatives apply in full
dmg = (base.dmg + bonus)
    × tempDmgMult
    × mulDr(product of conditional multipliers)  # ≤2.3 full, above that ×0.25, hard cap ×3
    × shiny (1.06, or 1.12 if dmg is the character's "focus" stat)
    × skin multiplier
    × level (1 + 0.008 × (lv-1))                 # classic & league modes only
    × weapon scale
dmg = max(0.5, dmg)
```

Example: Pikachu base 3.5 with +10 flat damage from items has an effective bonus of 3 + 2.5 + 0.5 = 6, so 9.5 damage instead of 13.5.

Conditional flat adds (`ItemFX.dmgAdd`): Stardust +0.2 per 10 coins (code cap 2; the item text says 1.8), Luminous Moss +0.3 per hit taken (max 3), Upgrade +0.3 per floor (max 4), Relic Band +0.15 per item held (max 3), Radiant Petal +0.2 per clean room (max 3).

**Rotation status (verified):**
- At startup the game retires all legacy items, then restores every one except a 39-item blacklist.
- Light Ball, Lustrous Orb, Relic Statue, Weakness Policy, Liechi Berry, Relic Band, Upgrade, Stardust, Luminous Moss and Radiant Petal are **in rotation**.
- Each of them has a unique effect flag, so the duplicate-removal step (line ~48360) doesn't drop them either.
- Server-side `ItemEdits` can still change pools at runtime; that's not visible offline.

Other multipliers in rotation (Gold Leaf, Power Lens, X Sp. Atk, Honor of Kalos, Ring Target…) are in [build-theorycraft.md](build-theorycraft.html).

Conditional multipliers (`ItemFX.dmgMul`), all multiplied together then passed through `mulDr`:
Liechi Berry ×1.5 (when its condition holds), Weakness Policy ×2 while triggered, Dynamax ×2, Light Ball ×2 if Electric type, Statue ×2 after standing still 0.5 s, Lustrous ×1.25, holding your own Mega Stone ×1.2, plus weapon multipliers and some module items (momentum: up to ×1.4 from speed, Lunar: ×1.2 on even floors).
Example: two ×2 effects = ×4 raw, which becomes 2.3 + 0.25 × 1.7 = ×2.725.

## Fire rate (`get rate`)

`rate` = ticks between shots, so **lower is faster**. Calcium gives `rate: -2` (a rebalance applied when the game loads replaces the `-3` of its table entry).

```
bonus = items rate
if bonus < 0: bonus = -dr(-bonus, 3, 7)          # speed-ups: 3 full, next 4 half, rest quarter
                                                 # slow-downs (positive) apply in full
rate = (base.rate + bonus)
     × ItemFX.rateMul  (Fury ×0.5, Spray ×0.67, X Speed ×0.8, etc.; weapons)
     × TypeScale (Bug: ×(1 - 0.012 × tier))
     × shiny 0.94 (0.88 if focus)
     × skin
     × level (1 - 0.004 × (lv-1))
rate = max(5, rate)
```

## Other stats

- **Speed**: `max(1.6, base + bonus + ItemFX adds + TypeScale adds) × shiny(1.03/1.06) × skin × level(1+0.002·(lv-1)) × boss slow`. No diminishing returns.
- **Shot speed**: `max(4, base + bonus)`.
- **Range**: `max(120, base + 50 + bonus)`. A global +50 (`RANGE_BONUS`) is added to every character.
- **Luck**: `base + bonus + skin + Normal-type tier bonus`. Up to 10 counts in full; above 10 only 25 % counts.
- **Max HP**: units are half-hearts. Clamped to between 2 and 24 (12 hearts). Shedinja is locked at ½ heart.

## Mastery side abilities (`MasterySkill`): off on the live site

New in build 1.1.1-108d03b1, but gated: `MasteryUI.enabled = !!query.mastery` and the live site deletes URL flags. The patch notes don't mention it. Treat it as upcoming: **it doesn't apply to any live run today**.

When on, each Pokémon (first 4 digits of `dex`, `MASTERY.ABIL`, 971 entries) has one ability, which you switch on by hand at rank VIII (`MasterySkill.RANK`), meaning 1700 points or more (`RANKS`). It only works solo in Classic and League, without race, bot, co-op or gameplay mods (`MasteryRun.on`).

The menu text says "nunca suma poder" (never adds power). The code does add power, in exchange for a flat cost (`SKILL_COST`; `masteryK`):

| Class | Cost | Abilities |
|---|---|---|
| atk | speed ×0.92 | fuerza, racha, tenacidad, aprieto, punteria, rafaga, rompedefensas, potencia, contacto, temperamento, impulso, madrugador, clima, apoyo |
| def | damage ×0.92 | intimidar, aguante, regenerar, absorber, aislante, escudo, espejo, mimetico, purificar |
| uti | damage ×0.97 | recolector, suerte, iman, presion, clon, levitar, premonicion |

Attack abilities:

| Id | Effect |
|---|---|
| potencia | Damage ×1.1, always on |
| racha | Damage +2% per kill in the room, up to +16%, reset on entering a room |
| tenacidad | Damage ×1.2 for 300 frames after being hit |
| apoyo | Damage ×1.25 for 240 frames after switching in |
| temperamento | One room-long bonus at random: damage ×1.15, fire rate ×1.15, or speed +15% of base |
| aprieto | Fire rate ×1.3 at `hp + soul <= max(2, maxHp / 3)` |
| madrugador | Fire delay ×0.8 for the first 300 frames of a room |
| clima | Fire rate ×1.1 for the first 600 frames of a room |
| fuerza | Every 5th primary shot deals ×2 |
| rafaga | Every 4th volley fires 1 extra shot, still under the 9-shot limit |
| punteria | Range +25% of base, shot speed +15% of base, ×1.1 on hits after 55% of range |
| rompedefensas | ×1.15 against bosses and enemies with an affix |
| contacto | Enemies that hurt you take `max(2, 2 × dmg)`, once per 60 frames for each enemy |
| impulso | Speed +4% of base per kill, up to 5 stacks, for 240 frames |

Damage and fire rate bonuses join `ItemFX.dmgMul` / `rateMul`, so damage goes through `NERF.mulDr` like other item multipliers.

Measured in the headless sim, with no items: Marill with potencia, damage 3.7 → 4.07 and speed 4.11 → 3.78. How much of the ×1.1 survives `mulDr` at full build depth is unmeasured.

## Global penalties

- **Backpack cap: 100 items per run** (`ITEM_CAP`, added in 1.1.0 on 26/10/2026). When the backpack is full, pedestal pickups are refused ("¡Mochila llena!") until you drop an item from the Inventory. Actives and consumable pickups don't count. The check lives in `fullMsg`/`pickUp`.
  - A few paths add items without the check: a Mega colour-variant perk item (+1), and save/co-op state restore. Patch (`a_parche`) only swaps items 1-for-1. So in practice you stay at about 100.
- **Item hoarding penalty** (`NERF.itemK`): in code, holding more than 130 *offensive* items (anything except defense, utility and evo) multiplies all your damage by `exp(-0.022 × (n − 130))`.
  - This was added in 1.0.11/1.0.13, before the 100-item cap existed. Since the cap, **it is effectively unreachable in normal play**. It's a leftover safety net.
  - The 1.0.13 patch note says "each one yields half", but the code uses this exponential curve.
  - The HUD still shows an `OFENSIVOS n/130` counter in the backpack.
- **Heal cap**: within a 600-tick window, healing is capped at `max(4, 30 % of max HP)` half-hearts.
- Other limits: familiars capped at 3 per type and 6 total, 450 player shots on screen.

## Evolution (`EVO_BONUS`)

| Stage | Max HP | Damage (bonus, so subject to DR) | Size | Speed |
|---|---|---|---|---|
| 1st evo | +2 (and heals 2) | +1 | +3 | – |
| 2nd evo | +2 (and heals 2) | +1.5 | +4 (+2 extra) | −0.2 |

The level thresholds are 14 (20 for short chains) and 32.

## Levels (classic and league modes only)

The XP needed for the next level is `4 + 2 × lv`. The max level is 60.
At level 60 the multipliers are: damage ×1.472, rate ×0.764, speed ×1.118.

## Type scaling (`TypeScale`)

In level modes, tier = `floor((lv - 1) / 8)`, plus up to +3 after floor 30. In other modes, tier = `floor(floor / 10)`, max 3. The cap is 10. Holding the matching "alt_&lt;type>" item adds +2.

| Type | Per tier |
|---|---|
| Bug | rate ×(1 − 1.2 %), speed +0.02 |
| Flying | speed +0.04, dodge +1.5 % (max 10 %) |
| Normal | luck +0.35 |
| Rock / Ground | damage +3 %, bigger shots, +10 % knockback |
| Dragon | damage +2 % |
| Fighting | damage +1 %, crit +1.5 %, crit damage +10 % |
| Dark | crit +1.5 %, crit damage +10 % |
| Grass | 3 % chance of extra pierce |
| Psychic | 4 % chance of homing |
| Steel | armor at tier 4 or higher |
| Fire / Poison | burn/poison duration +10 %, DoT strength up |
| Electric (verified: shot elem electric → "chain", plus a chain bonus) | extra chain targets at tiers 3 and 6, chain damage +4 %/tier (max 40 %) |

## Shiny (`SHINY`, `shinyK`)

Damage ×1.06, rate ×0.94, speed ×1.03. The stat where the character is strongest relative to the roster average (its "focus") gets double the bonus: ×1.12, ×0.88 or ×1.06.

## Character base stats (gacha roster)

`power` is 0 for common, 1 rare, 2 epic, 3 legendary, and megas get +1. `jitter` is a deterministic ±5 % per Pokédex number (sin hash).

```
hp    = max(4, 6 + 2·power + typeHp)
dmg   = (3.2 + 0.8·power + typeDmg) · jitter
rate  = max(7, round((15 − 1.2·power + typeRate) · jitter))
range = (300 + typeRange) · jitter
speed = (3.9 + 0.15·power + typeSpeed) · jitter
shotSpeed = 9 + typeShotSpeed,  luck = typeLuck
```

Type modifiers: Fire dmg +0.6 / rate +2; Water hp +2 / dmg −0.4; Grass range +100; Electric rate −2 / dmg −0.2; Psychic shotSpeed +1 / luck +1; Ghost speed +0.3 / hp −2; Poison luck +1; Rock hp +2 / speed −0.5 / dmg +0.4; Ground hp +2 / speed −0.4 / dmg +0.3; Fighting dmg +0.8 / range −60; Flying speed +0.6; Bug rate −1 / speed +0.2; Normal luck +2; Dark dmg +0.4 / luck +1; Dragon dmg +0.6 / hp +2; Steel hp +2 / dmg +0.4 / speed −0.3; Fairy luck +2 / hp +1; Ice nothing.
