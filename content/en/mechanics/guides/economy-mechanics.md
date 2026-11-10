---
title: Economy, type chart and credits
layout: guide
weight: 2
text_lang: en
---

## Pickups

| Pickup | Name | Value |
|---|---|---|
| heart | Oran Berry | 2 |
| halfheart | Sitrus Berry | 1 |
| soul | Oran Berry | 2 |
| coin | PokéDollar | 1 |
| nugget | Nugget | 5 |
| bomb | Voltorb | 1 |
| key | Key | 1 |
| chest | Chest | 0 |
| goldchest | Golden chest | 0 |

## Base shop prices (before scaling)

| Thing | Price |
|---|---|
| item | 15 |
| active | 15 |
| heart | 3 |
| halfheart | 2 |
| soul | 5 |
| bomb | 5 |
| key | 5 |
| nugget | 10 |
| chest | 7 |
| secret | 20 |

## Economy formulas (`ECON`, line 32122)

- Wallet cap: 99 coins, 150 from floor 10, 250 from floor 30.
- Price multiplier per floor f: `1 + 0.035·f` below floor 30, then `min(6, 2.05 + 0.04·(f−29))`.
- Coin drop chance on kill: `6% + 0.5%·luck` (luck clamped −5…8).
- Room-clear reward chance: `40% + 2%·luck`.
- Boss coins: `3 + floor(f/5)`, doubled in some cases.
- Shop reroll cost: `max(2, ceil(3 · 1.45^n · priceMult))` for the n-th reroll.

## Type chart (attacker → defender multipliers; unlisted = ×1)

| Attacker | normal | fire | water | electric | grass | ice | fighting | poison | ground | flying | psychic | bug | rock | ghost | dragon | dark | steel | fairy |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| normal |  |  |  |  |  |  |  |  |  |  |  |  | 0.5 | 0.5 |  |  | 0.5 |  |
| fire |  | 0.5 | 0.5 |  | 2 | 2 |  |  |  |  |  | 2 | 0.5 |  | 0.5 |  | 2 |  |
| water |  | 2 | 0.5 |  | 0.5 |  |  |  | 2 |  |  |  | 2 |  | 0.5 |  |  |  |
| electric |  |  | 2 | 0.5 | 0.5 |  |  |  | 0.5 | 2 |  |  |  |  | 0.5 |  |  |  |
| grass |  | 0.5 | 2 |  | 0.5 |  |  | 0.5 | 2 | 0.5 |  | 0.5 | 2 |  | 0.5 |  | 0.5 |  |
| ice |  | 0.5 | 0.5 |  | 2 | 0.5 |  |  | 2 | 2 |  |  |  |  | 2 |  | 0.5 |  |
| fighting | 2 |  |  |  |  | 2 |  | 0.5 |  | 0.5 | 0.5 | 0.5 | 2 | 0.5 |  | 2 | 2 | 0.5 |
| poison |  |  |  |  | 2 |  |  | 0.5 | 0.5 |  |  |  | 0.5 | 0.5 |  |  | 0.5 | 2 |
| ground |  | 2 |  | 2 | 0.5 |  |  | 2 |  | 0.5 |  | 0.5 | 2 |  |  |  | 2 |  |
| flying |  |  |  | 0.5 | 2 |  | 2 |  |  |  |  | 2 | 0.5 |  |  |  | 0.5 |  |
| psychic |  |  |  |  |  |  | 2 | 2 |  |  | 0.5 |  |  |  |  | 0.5 | 0.5 |  |
| bug |  | 0.5 |  |  | 2 |  | 0.5 | 0.5 |  | 0.5 | 2 |  |  | 0.5 |  | 2 | 0.5 | 0.5 |
| rock |  | 2 |  |  |  | 2 | 0.5 |  | 0.5 | 2 |  | 2 |  |  |  |  | 0.5 |  |
| ghost | 0.5 |  |  |  |  |  |  |  |  |  | 2 |  |  | 2 |  | 0.5 |  |  |
| dragon |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 2 |  | 0.5 | 0.5 |
| dark |  |  |  |  |  |  | 0.5 |  |  |  | 2 |  |  | 2 |  | 0.5 |  | 0.5 |
| steel |  | 0.5 | 0.5 | 0.5 |  | 2 |  |  |  |  |  |  | 2 |  |  |  | 0.5 | 2 |
| fairy |  | 0.5 |  |  |  |  | 2 | 0.5 |  |  |  |  |  |  | 2 | 2 | 0.5 |  |

## Music credits

| Slot | Track | Artist | License | Source |
|---|---|---|---|---|
| menu | Journey of the Heroes | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| dex | Library Theme · Mysterious | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| gacha | Bit of Silliness | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| market | Little Shoppe Tune | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| rocket | Stealth Quest 1 | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| profile | Light-Morning Village | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| calm | Summer is Behind Us | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| credits | Journeys End | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| team | Stout Hero | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| social | Homestead | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| menu_old | Journey of the Heroes | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| floor1 | Little Woods | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| floor2 | First Dungeon | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| floor3 | Metal City | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| floor4 | Journeys in the Dark | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| floor5 | Flying Ship · Raised Stakes | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| boss | Evil Guy Theme · Battle | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| final | Evil Guy Theme 2 · Eviler Battlemode | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| shop | Royal Town Simple | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| win | Short Victory Trill · Extended | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| dead | Game Over | Aureolus_Omicron | CC0 | https://opengameart.org/content/15-melodic-rpg-chiptunes |
| secret | Narrative Stairs | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| treasure | Item Room · Ambient Vers · Extended Tune | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| heal | Temple Save Spot | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| boss2 | Relentless Battlemode | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |
| abyss | Underworld Extended | Blake Speers | CC BY 4.0 | https://opengameart.org/content/full-8-bit-jrpg-soundtrack-downloadable-and-editable-music-pack |

## Store packs (premium currency)

| id | Price | Contents |
|---|---|---|
| pack_fichas_s | 10 | {"fichas": 500} |
| pack_fichas_m | 25 | {"fichas": 1500} |
| pack_fichas_l | 60 | {"fichas": 4000} |
| pack_mega_s | 15 | {"mega_tickets": 3} |
| pack_mega_m | 40 | {"mega_tickets": 9} |
| pack_mixto | 40 | {"fichas": 1000, "mega_tickets": 5} |
| pack_dorados_s | 600 | {"gold": 5, "pay": "fichas"} |
| pack_dorados_m | 1650 | {"gold": 15, "pay": "fichas"} |
| pack_dorados_l | 4000 | {"gold": 40, "pay": "fichas"} |
| eleccion | 120 | {"n": 1} |
| < | x | "p" |
| < | x | "p" |
| < | x | "p" |
| < | x | "p" |
| < | x | "p" |
| < | x | "p" |
