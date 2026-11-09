---
title: 100-item endless build (theorycraft, partly measured)
layout: guide
weight: 5
text_lang: en
---
Worked out from how the game behaves (update of 2026-11-06), not from play sessions. **Where a calculation here disagrees with [Measured in the headless sim](#measured-in-the-headless-sim-2026-11-07), the measurement wins.**

## Update of 2026-11-06: what changed for builds (verified)

Items, characters, enemies and bosses are unchanged from the previous update, and so is floor generation. So the build rankings below still stand. The in-game patch note calls this update 1.1.2.

- **Mastery side abilities exist but are off on the live site.** `MasteryUI.enabled` needs `query.mastery`, and the live site deletes all URL flags. Details and numbers: [How player stats are computed](stat-modifiers.html).
- **Upgrade shop no longer adds slots.** Each vitamin replaces a shop pickup first, then any pedestal after the first 2 regular ones (`upgradeStock`). If nothing is left to replace, that vitamin isn't offered.
- **Held-item drop in shops no longer adds a slot.** It replaces a random shop pickup, and doesn't appear if there's none.
- **Shop size is now `shopSlots`, default 6, limited to 4–8**. No item defines `shopSlots` in this build, so it's always 6 (only 3 references in the bundle). Base stock per run mode is unchanged: 3, 5 and 4 random fills at 6 slots.
- **Enigma Stone and Galactic Key are blocked during boss and League fights**: with a live boss in the room or `ligaHold` set, you get "You cannot teleport in the middle of a fight!" and the active isn't used (`le()`).
- **Gated rooms check their requirement only before the first visit**, so you can always go back in (`h.visited`).
- **Coins, bombs and keys stop drifting towards a player who's full** (wallet cap, or 99 bombs or keys).
- **Stuck enemies get moved** every 20 frames (`rescueEnemies`): an enemy outside the room, or on a tile other than floor or spikes, goes to the nearest floor or spike tile. Bosses move only from outside the room or from void. Flying and intangible enemies are skipped.

## Endless on the chapter structure (read this first)

New runs use `struct = 2`, the chapter layout (`e.STRUCT`). Earlier sections of this page were written as if the displayed floor drove scaling. It doesn't: enemy HP, damage and boss rules use an **effective floor**, and floor-based maths on older notes is off by 13 floors.

**Displayed floor vs effective floor** (`chapterAt` / `chapterPostEff`; `scaleFloor`; `chapterProgress`)
- Endless starts at floor index 16 whichever way you get there: leaving a chapter with `runInf` set jumps the index straight there.
- That floor displays as 31 but has effective floor 18. From there, **effective = displayed − 13**.
- Chapters 5–7 therefore cost nothing in scaling. They use effective floors 14–17, and endless still starts at 18. They're up to 4 extra floors of loot and XP.

**How you reach endless depends on your unlocks** (`askRoute`; `askInfinite`; chapter finals)

| Beaten | Next chapter unlocked? | Options |
|---|---|---|
| Armored Mewtwo (chapter 4) | No: fewer than 3 wins (`e.CAP5_WINS`) | Endless or end the run |
| Armored Mewtwo (chapter 4) | Yes | Chapter 5 or end the run. **No direct endless option** |
| Chapter 5 final | No | Endless or end the run |
| Chapter 5 final | Yes | Trapdoor to chapter 6 |
| Chapter 6 final | No | Endless or end the run |
| Chapter 6 final | Yes | Trapdoor to the Void (chapter 7) |
| Necrozma (chapter 7) | n/a | Endless (Ultra Space) or end the run |

So once chapter 5 is unlocked, each endless attempt has to beat that chapter's final boss first, and the same goes for each later unlock.

**HP multipliers.** Calculated from `classicHp`, `HP_TUNE`, `harden` (boss HP ×2 from effective floor 5) and `BOSS_CURVE` (normal ×18 and mega ×3 from effective floor 29). They exclude each monster's base HP, its `abyss` factor, `BOSS_TUNE`, zone `hpK` and the adaptation below.

| Displayed | Effective | Enemy × | Floor boss × | Mega boss × | What changes here |
|---|---|---|---|---|---|
| 31 | 18 | 22 | 74 | 20 | Endless starts; packs and speed already at endless level |
| 33 | 20 | 23 | 108 | 27 | Enemy contact damage +2 |
| 42 | 29 | 92 | 422 | 70 | Last floor with boss adaptation up to ×10 |
| 43 | 30 | 105 | 467 | 78 | `infTier` starts; adaptation limit drops to ×2 |
| 53 | 40 | 390 | 1,266 | 211 | Tier 2: +1 damage |
| 72 | 59 | 4,705 | 8,442 | 1,407 | Growth changes: enemies ×1.14 and bosses ×1.105 per floor before this, both ×1.07 after |
| 73 | 60 | 5,034 | 9,033 | 1,506 | Tier 4: damage bonus reaches its maximum |
| 100 | 87 | 31,283 | 56,133 | 9,355 | |
| 120 | 107 | 121,057 | 217,215 | 36,203 | |
| 150 | 137 | 921,518 | 1,653,497 | 275,583 | |
| 184 | 171 | 9,195,014 | 16,498,785 | 2,749,797 | |
| 200 | 187 | 27,145,186 | 48,707,114 | 8,117,852 | Deepest run on the ladder (snapshot 2026-11-06) |

Past displayed 72, each doubling of damage buys about 10 floors against everything.

**Boss adaptation** (`adapt`; `RunEval.plan`; `bossKMax`)
- Boss HP is multiplied by your measured performance compared with an expected curve: `(measured ÷ expected)^0.9`, weighted by how confident the measurement is.
- The limit is ×10 on effective floors below 30 and ×2 from 30 on (in endless). With no measurement yet, a separate estimate from your stats goes up to ×2.4.
- Result for a strong build: floor bosses can have **less** HP at displayed 43 than at displayed 42, since 467 × 2 is well below 422 × 10.
- **Deep in endless, the multiplier drops to ×0.5**, its lower limit. The expected curve keeps growing ×1.105 per floor (`RunEval.grow`) while boss HP grows ×1.07, so every build eventually falls far below it. By my arithmetic with Mega Hawlucha's stats, 1 million measured DPS hits the limit around displayed 109, and 10 million around displayed 132. Chapter finals go down to ×0.3. The shield is set after this adjustment (then), so it shrinks too.
- Above expectations, bosses can also attack faster and gain up to +2 damage and an affix.
- Normal enemies don't adapt (`BAL.enemyAdapt: false`).

**What happens to you** (`makeEnemy`; boss spawn; `bossHit`; `heavy`; `healCap`)
- Post-game floors are `heavy`: any hit below a full heart becomes a full heart, except your own explosions.
- Enemy bonus damage is `floorDmgAdd` (+2 from effective 20) plus `floor(tier / 2)` up to +2, with a total limit of +4. Enemy contact damage is 1–2 half-hearts at base, so contact tops out at **3 hearts per hit from displayed 73**. Whether enemy shots follow the same numbers is unverified.
- Boss hits are ×1.5, limited to **half your max HP per hit**, with the limit applied before type resistance.
- Max HP is 12 hearts, so from displayed 73 a full bar takes about 4 contact hits or 2 big boss hits, plus any soul hearts. This stops getting worse, while enemy HP keeps growing. Healing is limited to 3.5 hearts per 10 s at 12 hearts.
- Tier adds boss affixes: floor bosses get `min(3, 1 + tier)` from effective 20, and mega bosses get up to 4 by depth. The HUD's "LEVEL n" follows the displayed floor, so it shows a level on displayed 31–42 even though `infTier` is still 0.

**Zones and milestones** (`zoneOf`; `pickBoss`)
- Each 10 displayed floors is one zone. The 8 zones in [the world guide](world.html) run in order, then repeat forever in shuffled order with The Void last. Repeats add pack size and speed. No final floor exists in the code path read here.
- Enemy speed starts at ×1.4 and rises 0.08 per level, up to ×1.8 on the first cycle. Packs gain 4+ enemies. These use the displayed floor, so they arrive before the HP does.
- Displayed floors ending in 0 have a mega guardian. The victory banner tells you to choose a zone piece; the patch notes say it's 1 of 3, and the choice code hasn't been read.
- Fixed fights: floor 50 `mega_0384`, floor 80 `mega_0380+mega_0381`, floor 100 `mega_0150`. Then every 50 floors past 100 they repeat in rotation.

**Boss shields** (`Boss.takeDamage`; `absorb`; `Enemy.takeDamage`)
- The `blindado` affix adds a shield worth 15% of the boss's max HP, on top of its HP. No regen was found. It's 1 of 6 random affixes, so with the slots above it's on about 50% of floor bosses from displayed 53 and about 67% of megas from displayed 103.
- **Shields take raw damage.** `absorb` runs before type multipliers, `onHitEnemy` and `Weapons.onHit`. Against a shield, only what's already in shot damage counts: level, the ×3 cap, crit, Gold Teeth and Metronome. Type advantage, Razor Fang, Leek, needle, Muscle Band and Dragon Fang don't.
- A fully absorbed hit returns before those functions run, so on-hit stacks don't build until the shield breaks.
- Shield time ÷ HP time = 0.15 × your on-hit multiplier. **Past about ×6.7 on-hit, the shield takes longer than the HP.** The Max-DPS build below (×12.6 on-hit, about 32,000 DPS against shields) would spend 40 s on the shield and 21 s on HP at displayed 72, and 4.4 min and 2.3 min at displayed 100.
- Light Stone rays don't fire while the shield is up, because they come from `Weapons.onHit`. An earlier version of this page predicted a shield would take about 9× as long as its HP. **Measured, it's 0.74× to 2.4×** (see the measured section), because the effect limit drops most rays. On `blindado` bosses the shield is still a large share of the fight, and on two of four builds it's the longer part.
- Armored Mewtwo can't roll `blindado`. Its armor splits and reduces damage but doesn't block it.

The `barrier` move is separate: for 260 ticks, it destroys shots hitting a roughly 132° arc that tracks you. The check uses the shot's position, so side and back hits should pass, and damage with no shot object passes too. It's mostly on psychic move sets.

## Measured in the headless sim (2026-11-07)

The game running in a headless browser, replaying ladder item lists against real bosses at their real depth, with god mode and an auto-aiming pilot that doesn't dodge. Every fight used the ×0.5 boss adaptation deep runs reach, which the replays confirmed.

**What these numbers don't include.** Ladder runs record final items but not levels, stats gained during the run or actives, so a replay uses the starting character at max level. They're the build's output, not a re-creation of the run. Hit rate is best case: nothing dodges. Most tests used one boss and few seeds, so treat small differences as noise. The distance and shield tables used the real hitbox. The other tests ran without loaded sprites, which gives a boss a small circular hitbox at its feet: at close range that matched the real hitbox within about 10% on three builds, and read ×1.6 high on floor 184's at 40 px.

**The floor 176 build, one item group removed at a time** (plain Butterfree at effective 163, 1.18B HP, 178M shield, close range, late-fight rate so one-off hits don't count; `hw_talisman` and `hw_anima` left out):

| Removed | DPS on HP | Damage on shield | Effect |
|---|---|---|---|
| Nothing | 7.57M | 0.76M | |
| White Herb | 0.56M | 0.034M | ÷13.6 HP, ÷22 shield (fire rate falls from 5 to 115 ticks per shot) |
| Lens Case (all 4) | 2.50M | 0.18M | ÷3.0, ÷4.3 |
| Repeat Ball + Apricorn Box | 3.36M | 0.31M | ÷2.25, ÷2.5 |
| Muscle Band | 4.16M | no change | ÷1.8, on-hit only |
| Gold Teeth | 4.54M | 0.47M | ÷1.7, ÷1.6 |
| Power Lens (all 6) | 4.75M | not measured close | ÷1.6 close, but about zero from far away (below) |
| Metronome | 4.84M | 0.48M | ÷1.6, ÷1.6 |
| Expert Belt | 5.38M | no change | ÷1.4, on-hit only |
| Dragon Scale | about 5.5M | 0.64M | ÷1.4, ÷1.2 |
| Go-Goggles | 6.24M | 0.64M | ÷1.2, ÷1.2 |
| Light Stone | 7.09M | no change | ÷1.07 |

Removal results depend on what else the build has, and White Herb's size comes from this build's 6 Power Lenses and 4 Lens Cases. The shield rule above holds: on-hit items change HP damage and leave shield damage alone; shot items change both.

**Distance decides damage on many-shot builds.** At most 450 player shots exist at once, and `capShots` removes the oldest. Fire enough shots from far enough and they're removed before they land.

| Distance to hitbox center | Floor 176 build | Same, no Power Lens | Floor 199 build | Floor 200 build |
|---|---|---|---|---|
| About 185 px | 1.7M (cap full) | about 0 | 0.8M | 5.3M |
| 150 px | 6.9M | 0.01M | 0.68M | 5.3M |
| 100 px | 7.7M | 4.3M | 1.13M | 5.3M |
| 70 px | 7.6M | 4.8M | 1.10M | 5.5M |
| 40 px | 7.8M | 4.6M | 1.15M | 4.5M |

- **Stand within about 100 px of the hitbox.** The hitbox sits on the sprite, up to about 85 px above the boss's position, so standing "near" its feet can still be far from its center.
- Staying close was worth ×4.5 on the floor 176 build, and nothing on floor 200's.
- Without Power Lens, the floor 176 build lands almost nothing past 150 px, with the shot limit full. Why wasn't traced.

**The effect limit eats Light Stone.** Rays need a slot in the room's effect list, and `FX.push` drops them once the list is over 650 entries. On the floor 176 build only 3.5% of rolled rays fired (2,526 of 72,984).

- Removing Light Stone cost: ÷1.07 (floor 176), about no change (floor 199), ÷1.2 (floor 184), ÷2.5 (floor 200's build on its own boss). The calculated ×4.7 only survives with a free list.
- With the limit removed, which a player can't do, DPS rose ×1.6 to ×2.75, so that's the damage being lost.
- Turning off the particles setting didn't help. Forcing the performance level from full to lowest (limit 650 down to 130) cost nothing on floor 199's build, 3% on 176's, 11% on 200's and 26% on 184's. One long-range run on the real loop lost a third, so keep quality on full if your machine can. What fills the list is mostly one cosmetic particle class, and it wasn't traced further.

**Shield time compared with HP time** (plain Butterfree at each build's own floor, real hitbox, 100 px from its center, 15 s of each, one run):

| Build, ladder floor | Boss HP / shield | HP | Shield | Shield ÷ HP time |
|---|---|---|---|---|
| Floor 176 | 1.18B / 178M | 7.71M/s, 2.6 min | 0.83M/s, 3.6 min | 1.4× |
| Floor 184 | 2.03B / 305M | 0.53M/s, 64 min | 0.11M/s, 48 min | 0.74× |
| Floor 199 | 7.01B / 1.05B | 1.12M/s, 104 min | 0.069M/s, 253 min | 2.4× |
| Floor 200 | 7.5B / 1.13B | 5.43M/s, 23 min | 0.35M/s, 54 min | 2.3× |

Comet Shard is confirmed: 54.5M of non-shot damage to a boss with 681M HP and a 102M shield, exactly 8% of HP and 53% of the shield.

**`hw_anima` is very strong, but narrow.** On Vileplume, which summons adds:

- Adding it to the floor 184 build took 0.5M DPS to a 1.6B-HP kill in about 14 s. A 240M shield fell in 11–18 s rather than about 44 minutes.
- **Kill time stays flat with depth.** From floor 176 to 500, boss HP grows from 1.6B to 5.3 quintillion, about 3 billion times, yet kills take about 6–37 s without a shield and 6–47 s with one. Median 8 add kills per boss.
- **Only 3 of 93 bosses gave add kills within 30 s** (Muk, Spiritomb, Vileplume), and none of the 39 mega bosses. Forcing the `invocador` affix still gave only 3. That's one build, one seed and 30 s, so slow summoners may be missed. Adds did appear on a few other bosses in longer fights.
- It's still obtainable after Halloween: the `supersecret` pool isn't date-gated, and runs finishing 11-06 still carry it.

So it isn't a route through endless by itself, because a boss without adds stops it. It's in 4 of the top 10 recent runs and none of the top 5 overall, which fits.

**Replays against ladder depth.** Floor 200: 6.6–9.6M early on a two-boss mega room (5.4B HP), so about 10 minutes. Floor 176: 7.5–88M depending on adds. Floor 190: 1.6–2.3M on 1.8–2.4B, about 15–25 minutes. These are plausible fight lengths for real runs.

**Still unexplained.** Floor 199's build does about 1M on 7–10B HP, so hours per boss, and about 0.09M against a 1.5B shield. Floor 184 is similar. Either those runs had a lot that the item list doesn't show, or they got lucky with bosses. Survival wasn't tested at all: everything here ran in god mode.

**Floor numbers.** The ladder records `progFloor`, which is index + 15 in endless (`chapterProgress`). The in-game HUD shows index + 1, so **HUD floor = ladder floor − 14**: ladder 176 shows "FLOOR 162". Effective floor is ladder − 13. "Displayed" elsewhere on this page means the ladder number.

## Plan for endless (untested)

**Goal.** Endless can't be finished, so "beating" it means going as deep as possible. The ladder sorts by win, floor, megas, kills, then speed (`pi_best_run`), and the game says a run that falls after continuing still counts as a win (the prompt's text, the code behind it hasn't been read). The target to beat is displayed floor 200 (ladder snapshot 2026-11-06).

**Stages**
1. **Chapters 1–4: assemble the core.** Multishot, fire rate to the 5-tick floor, damage multipliers to the ×3 cap, and flat damage to about +8 (priority table below). The in-game text says hidden alt routes give one more boss item per floor; this hasn't been checked in code.
2. **Chapters 5–7, as unlocked: required loot floors.** They don't raise endless difficulty, but you can't skip an unlocked chapter (table above), so the build must beat its final boss. Each chapter you complete can unlock the next for later runs, which adds another required boss. Weigh this before opening more of them on the account you push depth with.
3. **Displayed 31–42: the cheap floors.** Enemy HP is low and you can still farm items, but enemy speed and pack size are already at endless levels. Expect tanky floor bosses here, up to the ×10 adaptation limit.
4. **Displayed 43–72: the steep part.** Enemy HP grows ×1.14 per floor, about 4× every 10 floors, and you won't gain much new damage. If your clear speed collapses before 72, the build is short on the multipliers outside the cap.
5. **Displayed 73 on: an endurance race.** Incoming damage stops rising and HP grows ×1.07 per floor. Every source of area damage and every multiplier outside the cap counts. Avoid hits rather than absorbing them: 12 hearts is about 4 hits.

**What to add beyond the priority table**
- **Shot damage before on-hit damage.** Because of shields, multishot, fire rate, flat damage, the ×3 cap, crit, Gold Teeth and Metronome count on every boss, while on-hit items wait until the shield breaks.
- **Comet Shard** (`fragmento_cometa`, Secret pool, in 72 of 242 ladder best runs). On entering a combat room, it deals 25% of max HP to each enemy and 8% to bosses. It **ignores HP scaling**: the percentage is the same at any depth, though it fires once per room and misses ambush waves. Its damage also goes through `absorb`, removing over half of a boss's shield on entry, which makes it the best shield tool found.
- **Wise Glasses** (`gafas_especiales`). Shots that leave a non-boss below 15% HP kill it. With the comet, shots only need to remove 60% of a normal enemy's HP, which is worth about 7 floors of growth at ×1.07.
- **Deep Sea Tooth.** At most one needle per second, but it kills non-bosses at or below 50% HP.
- **Not obtainable:** Venusaurite (0.3% of boss HP per second, 2% for others) and Tyranitarite (0.3% / 1.5%) would ignore HP scaling, but they stay retired. The `x_` restore skips them, neither is on a `plus` list, and none of the 47 mega stones appear in 242 ladder runs. Black Flute (−30% HP) is on the blacklist. Server `ItemEdits` could change this; check `inRotation` in F9 → Export items.

**The gap, mostly explained.** An earlier version of this page had floor 176 taking 6.6 hours per boss. That used ×2 adaptation and left out several multipliers. The table below is a calculation with a 500 base-HP floor boss, ×0.5 adaptation and every shot landing. **Real builds measured higher: the actual floor 176 build does 7.57M on HP and 0.76M raw, well above the "Max-DPS + rays" column** (see the measured section). Keep the table only as a sense of how HP grows:

| Displayed | Boss HP | Shield | Max-DPS + rays: HP / shield | Full stack: HP / shield |
|---|---|---|---|---|
| 150 | 413 million | 62 million | 3.6 min / 32 min | 17 s / 2.4 min |
| 176 | 2.4 billion | 360 million | 21 min / 3.1 hours | 96 s / 14 min |
| 200 | 12.2 billion | 1.83 billion | 1.8 hours / 16 hours | 8 min / 72 min |

- **Max-DPS + rays** is about 1.9 million DPS on HP and 32,000 raw: the build below plus Light Stone at 10 luck.
- **Full stack** is about 25 million on HP and 424,000 raw. It adds 6 Dittos (×3.14), 9 shots (×2.25), Dragon Scale (×1.25) and about +40 flat damage (×1.5). No recorded run is confirmed to have all of it.
- Comet Shard cuts each shield time about in half. Only some bosses have a shield (see above).

So a fight at floor 176 is minutes to tens of minutes rather than hours, and replays agree (floor 190's build takes about 15–25 minutes). What the 2026-11-06 snapshot (242 best runs) rules out:

- **Not game version.** Floor 176 finished 2026-11-05, after the Deep Sea Tooth nerf, and 5 capped runs since 11-04 reached floor 150+. `BAL`, `HP_TUNE`, `BOSS_CURVE`, `HARD`, `CH_EFF` and `RunEval.plan` match across our builds of 11-02, 11-03 and 11-06. Anything before 11-02 and server `ItemEdits` can't be checked.
- **Not the item cap.** All 48 runs over 100 items finished by 11-01, except one on 11-06 (249 items, unexplained). The six deepest runs all have exactly 100.
- **Not duplicates alone.** Floors 190 and 184 have no duplicate items, with one each of Lens Case, TM Double Team, Repeat Ball and Go-Goggles. Duplicates do help other runs (see below).
- **Not weapons alone.** Floor 178 has no `w_` item. Weapons remain only partly read.

Other things to know:

- **Run times are unreliable.** 55 runs show exactly 360 minutes and none show more, with floors from 77 to 200. The client sends uncapped `runT / 60`, so this is a limit outside that code, and those runs may have lasted longer. Which kind of limit is unverified.
- **Pace looks flat, but that's weak evidence.** Median time per floor is about 2.2 minutes in every band from floor 40 to 200. Most of a run's time goes to early floors, and the 360-minute limit hides slow deep floors.
- **Displayed floor can overcount bosses.** The Labyrinth curse skips a floor, but it only rolls on the first floor of a chapter with 3+ floors, so it shouldn't appear past the chapters.

Capped runs at floor 150+ compared with floor under 100 favor Go-Goggles (83% vs 21%), Repeat Ball (93% vs 47%), Lens Case (87% vs 47%), Gold Teeth (93% vs 55%) and Dragon Scale (97% vs 56%). These are mostly shot-count and shot-damage items, which fits the shield rule, though it's a correlation.

**Tests**

Done in the headless sim (see the measured section): real damage of deep builds; boss HP at depth; shield against HP time; the comet's 8% on bosses; Light Stone on and off (far below the predicted ×4.7); `hw_anima` by depth; Ditto count; White Herb.

Still open:
1. Comet Shard's 25% on normal enemies.
2. How much weapons add.
3. Repeatable depth comparisons between builds in endless, with survival included.
4. Which bosses summon adds given a longer fight and a build that kills adds faster.

## Uncapped and depth-independent damage (combat code audit)

Read from the code, not tested in game. Three read-only sweeps covered the damage pipeline, weapons and side systems. Entries marked *(sweep)* have line references that weren't re-read by hand. **No single infinite-damage source was found.** Every plain stat has a limit, but these escape them:

**Percent-of-HP effects, the same at any depth**

| Source | Effect | Limit | Shield |
|---|---|---|---|
| `hw_anima` | On any kill, nearest enemy within 300 px takes 2% max HP (boss) or 10% (others), or your damage if higher | One per kill | Goes through it |
| Comet Shard | 8% max HP (boss), 25% (others) | Once per room | Goes through it |
| `cu_vudu` | On a non-minion kill, 30% chance to cut a random other enemy's current HP by 25%. Bosses aren't excluded | Can't kill | **Skips it**, doesn't reduce it |
| `hw_talisman` | Boss loses 8% current HP | Once per boss | **Skips it**, doesn't reduce it |
| Black Flute | All enemies lose 30% current HP | Blacklisted | Skips it |

**`hw_anima` is the only uncapped source confirmed by measurement, but few bosses enable it.** Its damage goes through `Weapons.hitShot` and then `takeDamage` with a real shot object, so on-shot and on-hit multipliers multiply the percentage, and procs like rays can fire from it. It counts as Ghost type, which loses plates and possibly type advantage. Measured kill time stays flat from floor 176 to 500, but only 3 of 93 bosses gave add kills in a 30 s test, and no mega boss did (see the measured section). It's in 4 of the top 10 recent runs, but in none of the five deepest overall.

**Multipliers that stack without a shared limit**
- **The on-hit chain**: the only check is `isFinite`. The ×3 cap only covers the `dmg` getter.
- **Light Stone rays**: each hit has a `0.1 + 0.01 × luck` chance to call a ray doing `3 × l`, where `l` already includes the on-hit chain. The ray goes through `takeDamage` again, so it's multiplied twice. There's no frame limit and it rolls per hit, Ditto shots included.
  - One ray is worth about 18.5 plain hits (3 × type 1.5 × Expert 1.3 × plate 1.15 × Muscle Band 1.6 × Dragon Fang 1.72).
  - On paper, average DPS is ×2.85 at 0 luck, ×4.7 at 10 luck and ×5.2 at 20 raw luck. Luck past 10 counts at 25%. **In practice the effect limit drops most rays: measured ×1.0 to ×1.2 on three builds and ×2.5 on one.**
  - Rays have `noProc`, so they don't chain into more rays.
- **Fire Mind blast** (flag `mente_fuego`): same pattern at `0.8 × l` around the target. The blast path wasn't read.
- **Echo double-dip** *(sweep)*: weapon hits queue echoes at 50% of already-multiplied damage, then go through `takeDamage` again. Limit of 40 queued.

**Multipliers on shot count**
- **Ditto**: each copies the whole volley at 75%, and each has hooks, so its shots can proc. `FAM_CAP` is 3, each Apricorn Box adds 2, and `FAM_MAX` is 6. Two boxes reach the limit, despite the item text saying 5. **Measured on the floor 176 build:** 0 Repeat Balls 3.36M, full stack 7.57M, so ×2.25. Other companions take slots too: 1 and 2 Repeat Balls scored the same at the base limit of 3, and so did 4 and 6 at the limit of 6. Check you have room before taking another Repeat Ball.
- **Bronzor**: a shot passing through splits, adding 2 at 60% once per shot.
- The limit is 450 live player shots. **It costs up to ×4.5 at long range on many-shot builds** (see the measured section).

**Not as good as they look**
- **Weapons:** none escapes the ×3 cap or `absorb`, and none is uncapped *(sweep)*. Secondary weapons skip the tuning scale, so Knife at 1.2× and Ludo at 0.8× hit harder than as main weapons *(sweep)*.
- **Burn and poison:** a small share of shot damage, with no stacking *(sweep)*.
- **Dynamax Candy:** ×10 on one shot, 2 charges. **Adventure Rules:** `16 × dmg` to all enemies, 4 charges. Neither scales with depth.
- **Normal shots can't re-hit**. Only special shots clear their hit set: hole 10 frames, ludo 12, roll 12, snow 14, saturn 30 *(sweep)*.
- **Flat damage:** past +40, each point is worth 0.05. Upgrade stops at +4.

## What recent top runs do

Sample: 45 capped runs finished since 2026-11-04, after the needle nerf. Runs don't record a build, and only 10 finished on 11-06, so this is by date. Top floors: 176, 160, 151, 151, 150. All of this is correlation.

| Item | Recent runs (of 45) | Top 10 |
|---|---|---|
| Light Stone | 34 | 10 |
| Repeat Ball | 37 | 9 |
| Power Lens | 33 | 8 |
| `hw_talisman` | 10 | 6 |
| White Herb | 15 | 5 |
| `hw_anima` | 9 | 4 |
| Apricorn Box | 11 | 3 |
| Comet Shard | 12 | 2 |

1. **Ditto stack.** Floor 176 has 4 Repeat Balls and 2 Apricorn Boxes, and floor 159 (11-03) has 6 and 2. Across all capped runs, median floor by Ditto count is 72 (none, 50 runs), 131 (1, 126 runs), 142 (2, 9 runs) and 160 (4, 2 runs).
2. **White Herb removes penalties.** It cancels every positive `rate` and negative stat, past and future. That includes +8 per Lens Case, +16 per Power Lens and Gold Leaf's slowdown. It makes stacking both free, leaving Power Lens as +4 damage and +3 size per copy. 6 of the 7 runs with 6+ Power Lenses have it. With exactly one lens, median floor is 139 with it (55 runs) and 101 without (63 runs). Early Power Lens copies are worth far more than later ones, because of the flat damage limit.
3. **Mono-type sets.** Floor 200 is Mew with 4 Psychic Gems, 4 Mind Plates and 2 Psychium Z. Floor 199 uses the Dragon set. Gem (×1.3) and plate (×1.15) flags only count once, but copies still add +0.3 and +0.4 flat, and each Z adds +0.6 and +1 crit *(sweep for per-copy stats)*.
4. **Duplicates come from an empty pool.** When nothing eligible remains unowned, the final pick ignores what you own. Plain stat items are avoided there. So duplicates appear late in deep runs, and they can't be planned early. Why Power Lens dominates them isn't explained. Eon Ticket also copies pedestals, except heart-priced ones *(sweep)*.
5. **Survival is shared.** All six deepest capped runs carry Metal Coat (coins absorb hits), Rusted Shield (shots cancel enemy shots) and Destiny Knot (rear shots). `cu_espejo` (20% chance to ignore a hit) is in 8 of the top 15 recent runs.
6. **Unexplained fast run.** Floor 151 in 216 minutes on 11-06 (`mega0718`) is the fastest deep pace in the sample, but it holds 249 items, 244 unique, past the 100-item check. How is unknown, so don't copy it as a build.

**Suggested build, from the measurements.** White Herb once you carry Lens Cases or Power Lenses, Lens Cases to 9 shots, Repeat Balls with 2 Apricorn Boxes, then Gold Teeth and Metronome because they also work on shields. Comet Shard for shields, and `hw_anima` if it shows up. Add Muscle Band and Expert Belt for HP damage. Light Stone is low priority on many-shot builds. Add Metal Coat and Rusted Shield for survival, which wasn't tested. **Stay within about 100 px of the hitbox.**

## What's actually in rotation (corrected and verified)

At startup the game retires all legacy items, then **restores every one except a 39-item blacklist**. A first version of this write-up missed the restore step.

Light Ball, Lustrous Orb, Relic Statue, Weakness Policy, Liechi Berry, Relic Band, Upgrade, Stardust, Luminous Moss and Radiant Petal are back in rotation. Each has a unique effect flag, so the duplicate-removal step doesn't hide them.

Blacklisted examples:
- the elemental TMs (Thunderbolt, Flamethrower…)
- Thick Club
- Assault Vest
- Shell Bell
- Flame Orb
- the flutes
- X Attack+ (active)


All these extra multipliers sit inside the same ×3 cap, so they only fill it faster. Depth still comes from what's outside the cap (next section).

## What's outside the ×3 cap

1. **Razor Fang Defense Down.** Applied per hit as it lands: ×(1 + 0.12 per stack), about +36% at 3 stacks. Boosts every hit, including procs and companions.
2. **On-hit bonuses** in the same function: Large Leek ×2.2 up close, Deep Sea Tooth ×2 on bosses.
3. **Extra shots and copies**: each extra hit deals your full capped damage.
4. **Character multipliers**: level, shiny and skin.
5. **X Attack+ active**: a separate ×2 for the room. It's blacklisted, so no normal run can get it.

## Rules that decide the build

**Endless scaling** (floors here are effective floors, displayed − 13)
- Normal enemy HP grows ×1.14 per floor from 30 to 59, then ×1.07 per floor. Enemies don't adapt to you.
- Bosses grow ×1.105 per floor from 30 to 59, then also ×1.07. They also gain up to ×2 HP when you're overperforming (×10 below effective floor 30).
- Past effective floor 59, every doubling of your damage buys about 10 floors against both. Depth comes down to how many independent ×2 sources you can stack.

**Fire rate floor**
- The minimum is 5 ticks between shots, which is 12 shots per second.
- Flat fire-rate items get most of the way: base 14 with about −16 flat becomes 14 − 7.25 = 6.75. Swift Feather (up to ×2) then reaches 5.
- Anything beyond that is wasted. Whipped Dream is a trap: its ×3.5 fire rate is lost to the floor, but its ×0.45 damage still applies.

**Damage multipliers share one cap** (full value up to ×2.3, then a quarter, hard cap ×3)
- Always on: Gold Leaf ×1.8 and X Sp. Atk ×1.5 give ×2.7 raw, which becomes ×2.4 effective.
- Conditional: Honor of Kalos ×2 (until hit), Cherish Ball aura ×1.5, Red Apricorn up to ×1.6, Ring Target up to ×2, Jaboca Berry up to ×1.6.
- Once the raw product passes about ×5.1, extra multipliers add nothing.

**Things that skip the cap**
- Extra shots:
  - Lens Case: triple shot, but +8 fire delay
  - TM Double Team: double shot
  - Go-Goggles: double diagonal shots
  - Vs. Recorder: an echo of each shot at 50% damage
  - Repeat Ball: a Ditto copies every shot at 75% damage
  - Silver Powder: shots split in two on hit
  - Dragon Scale: every 4th shot deals ×2
- On-hit effects:
  - Razor Fang Defense Down: +12% per stack, up to 3 stacks, applied after the cap
  - Large Leek: ×2.2 up close
  - Deep Sea Tooth: needle, ×2 on bosses; on others, ×3 or an instant kill at ≤50% HP
- Character multipliers:
  - level, up to ×1.47
  - shiny, up to ×1.12
  - skin
  - type tiers

## Build: about 100 slots, by priority

| Priority | Items | Purpose |
|---|---|---|
| 1. Extra shots (~8) | Lens Case, TM Double Team, Go-Goggles, Vs. Recorder, Silver Powder, Dragon Scale, Repeat Ball, Marble | Multiplies damage outside every cap. Test whether shot counts stack multiplicatively. |
| 2. Fire rate to 5 ticks (~8) | PP Max, Calcium, Coconut Milk, Courage Candy, Exp. Candy S/XL, Pungent Root, Swift Feather | Stop once you're at 5 |
| 3. Multipliers (~5) | Gold Leaf, X Sp. Atk, Honor of Kalos, Ring Target, Red Apricorn | Reaches the ×3 cap |
| 4. Flat damage (~8) | Protein, Muscle Feather, Mixed Mushrooms, Gigantamix, Dark Stone, Instant Noodles, Spice Mix, Mighty Candy | Fills the full and half-value range of about +8; a 2-stage evolution adds +2.5 |
| 5. Weapon (1–2) | Razor Fang, optionally Red Orb or Shock Drive | Defense Down applies to every hit after the cap |
| 6. Per-hit procs (~10) | Light Stone, Gold Teeth, Deep Sea Tooth, Lava Cookie, Green/Yellow Apricorn, Helix Fossil, Love Sweet, Catching Charm, Brittle Bones, TM Tri Attack | More hits mean more procs; pierce and homing keep bosses taking damage |
| 7. Companions (6) | Apricorn Box plus Repeat Ball, Ultra Ball (Bronzor splits shots ×3), Cherish Ball, Dream Ball, Fast Ball | 5 slots |
| 8. Survival (~15) | Eviolite, Armor Fossil, Guard Spec., Acro Bike, Max Revive, Health Feather, Dusk Ball, Jaw Fossil, Iron, HP Up, Bread, Fresh Cream, Root Fossil, Power Weight | Max HP caps at 12 hearts and healing at 30% per 10 s, so avoiding hits matters more than HP |
| 9. Active slot | Dynamax Candy (×10 piercing shot, charge 2) with Devon Scuba Gear (effect twice), Devon Goods (+1 charge on use), Cell Battery, Medicine Pocket | Boss burst, which counters the boss ×2 adaptation |
| 10. Filler | Luck up to 10 (Zinc, Golden Pinap Berry, Fancy Apple), Power-Up Pocket, Blue Card | Luck raises Deep Sea Tooth and Gold Teeth rates |

**Skip:**
- Whipped Dream.
- Power Lens (+16 fire delay) and Toxic Orb (+10) once you're near 5 ticks.
- Precooked Burger, unless you're short on flat damage.
- Ability Patch: it rerolls your whole build.
- Fluffy Tail, unless you play the variant below.
- Luck past 10, multipliers past about ×5 raw, flat damage past +10.

**Glass-cannon variant (untested):** Fluffy Tail sets you to 1 heart with 9 extra lives.
- At 1 max heart you're always at full health entering a room, so Honor of Kalos's ×2 should trigger every room.
- Crown Pass (×1.5 fire rate at 1 heart or less) also stays active.
- That pair gives cap budget for free, but any hit costs a life.

**Possible 6th companion (unchecked):** Eon Ticket duplicates the items on the room's pedestals. Used on an Apricorn Box pedestal, it might give a second box, raising the limit from 5 to the hard ceiling of 6.

**Unverified:**
- whether shot-count items stack multiplicatively
- the Metronome hook
- how much companion damage scales with yours

**Resolved:** the level bonus does apply in endless. `Level.on` is true for `classic`, and `continueInfinite` only sets `runInf`, so `runMode` stays `classic`.

## Per-hit multipliers outside the cap (verified in code)

Shot creation (weapon shots and other shots) and hit resolution (`v.onHit`):

| Item (flag) | Effect | Chance / condition |
|---|---|---|
| Razor Fang (bite stacks) | hit ×(1 + 0.12 × stacks), max 3 stacks | Always while stacks last. Applied first, and also to companion hits |
| Gold Teeth (`diente`) | shot damage ×3.2 | `min(50%, 10% + 2% per luck)`, rolled when the shot is created |
| Deep Sea Tooth (`eutanasia`) | Needle: ×2 on bosses. Others: at ≤50% HP, instant kill plus 6 shots at 35%; otherwise ×3 | `min(10%, 3% + 0.5% per luck)`. Max 1 needle per 60 ticks on all shots |
| Large Leek (`proptosis`) | hit ×`max(0.4, 2.2 − 1.8 × d)`, where d = distance travelled / range | ×2.2 point-blank, about ×1.3 at half range, ×0.4 at max range. Not companions; child shots only if from a weapon |

These multiply together, after the capped stat damage.
- **Best single hit on a boss:** 3.2 × 2 × 2.2 × 1.36 ≈ **×19**.
- **Average at 10 effective luck, point-blank, against a boss:** Gold Teeth ×1.66 × needle ×1.08 × Leek ×2.2 × Defense Down ×1.36 ≈ **×5.4**.
- Luck above 10 counts at only 25%. Maxing Gold Teeth needs 20 effective luck (about 50 raw); maxing the needle needs 14 (about 26 raw).
- Reliable parts: Defense Down and Gold Teeth. Leek only pays off if you stay up close.

## Max-DPS single-target build (agent theorycraft, key steps verified)

- **Character: Mega Hawlucha** (`?char=mega0701`). Pure Fighting, damage 6.7, fire rate 11. Fighting and Dark can crit without help, and pure type gets ×1.5 crit chance. Other types can crit with any `mods.crit`, at 8% per point.
- **Damage stat:**
  - About +9 flat damage, which diminishing returns turn into +5.75.
  - X Sp. Atk ×1.5, Gold Leaf ×1.8 and Honor of Kalos ×2 together reach the **×3 cap**.
  - Level 60 ×1.47 and shiny ×1.06 apply outside the cap.
  - Result: **about 58 per shot**.
- **Fire rate:**
  - About −16 flat speed-up, offset by +12 slowdown from Lens Case and Gold Leaf.
  - Level and shiny bonuses on top.
  - Swift Feather ×0.5 brings it to the **5-frame floor, 12 volleys/s**.
- **When each shot is created** (about ×5.26 on average):
  - crit: 40% chance of ×3
  - Fighting type tier: ×1.1
  - Gold Teeth: 30% chance of ×3.2
  - Metronome: ×1.6
- **On hit, against a boss** (about ×12.6 on average):

  | Effect | Value |
  |---|---|
  | Super-effective | ×1.5 (`Types.mul`, verified: the chart's 2 means ×1.5, ½ means ×0.67, no immunities) |
  | Expert Belt vs bosses | ×1.3 |
  | Muscle Band up close | ×1.6 |
  | Dragon Fang at 10 stacks | ×1.72 |
  | Fist Plate | ×1.15 |
  | Large Leek at 60 px | ×1.89 |
  | Deep Sea Tooth needle | about ×1.08 on average |

- **Volleys:**
  - Multishot gives 4 shots (TM Double Team + Lens Case; capped at 9, verified).
  - Repeat Ball's Ditto adds 75%.
  - Vs. Recorder echoes add 50%, limited to 24 queued echoes.
  - Total: about 105 shot-equivalents per second.
- **About 405,000 DPS on a boss**, at level 60, point-blank, super-effective, every shot landing. This leaves out Light Stone rays and extra Dittos, so it's well below what's possible. See "The gap" above.
- **Seen in practice:** Expert Belt (227), Muscle Band (176), Dragon Fang (126), Lens Case (183), TM Double Team (210) and Repeat Ball (159) all appear in the 242 ladder best runs, so they can be obtained, at least on the builds those runs used.
- **Unverified:**
  - whether all 4 shots land at 60 px
  - how weapons interact with all this

## Why no build is "infinite"

Every stacking effect has a hard maximum:

| Item | Stacks by | Max | Line |
|---|---|---|---|
| Metronome | +5% per consecutive shot | ×1.6 (12 stacks) | 72550 |
| Dragon Fang | +8% per hit on the same enemy | ×1.72 (10) | 105300 |
| Razor Fang | +12% per bite | ×1.36 (3) | 108521 |
| Ring Target | +10% per consecutive hit | ×2, inside the ×3 cap | 110621 |
| Red Apricorn | +6% per kill in the room | ×1.6, inside the cap | 110628 |
| Jaboca Berry | +10% per hit taken | ×1.6, inside the cap | 110626 |
| Moss, Upgrade, Relic Band, Stardust, Petal | flat damage | +2 to +4 each, then diminishing returns | 105111 |
| Swift Feather | fire rate | ×2, then the 5-frame floor | 110638 |

**Copies mostly don't stack.** Item effects are on/off checks (`!!flags[x]`, verified). Only `mods` (multishot, crit) and stats add up per copy. Duplicates do happen: ladder runs hold up to 24 Power Lenses, 6 Repeat Balls and 5 Lens Cases. How they got them is unverified, though Eon Ticket's text says it duplicates pedestal items. By those rules, each Lens Case adds 2 shots up to the 9-shot limit and +8 fire delay in full, and each Power Lens adds +16 fire delay. `mods.size` only changes shot radius, so why players stack Power Lens is unexplained.

**Endless enemy HP has no maximum** (`infMult`, verified). Full totals by floor are in the table at the top of this page. `infMult` alone, by **effective** floor:
- Normal enemies: ×1.14 per floor from 30 to 59, then ×1.07 per floor forever.
- Bosses: ×1.105 per floor from 30 to 59, then also ×1.07. They can also gain up to ×2 when you're overperforming.
- Examples:
  - Effective 100 (displayed 113): normal enemies have about **×815** from `infMult` (1.14³⁰ × 1.07⁴¹).
  - Effective 200 (displayed 213): about **×700,000**.
  - Each extra ×2 of damage lasts about 10 more floors.

So stacking damage alone eventually loses. Depth is set by how many separate capped stages you multiply together, plus HP-percentage damage like Comet Shard, which doesn't lose value with depth. The weapon system (about 6,000 lines) hasn't been fully read and might contain an uncapped source, though floor 178 was reached with no weapon item, so it can't be the whole answer.

## Deep Sea Tooth nerf, update of 2026-11-03 (verified)

The numbers on this page already include it.
- **Needle chance:** `min(10%, 3% + 0.5% per luck)`, at most one per second. It was `min(25%, 4% + 1%)`.
- **Boss hit:** ×2 (was ×3).
- **Normal enemies:** the instant kill only happens at ≤50% HP. It then releases 6 shots at 35% damage (was 10 at 50%). Above 50% HP, the needle hits for ×3.

At 10 luck, the average needle multiplier on bosses dropped from about ×1.28 to about ×1.08, which took the Max-DPS estimate from about 480,000 to about 405,000.
