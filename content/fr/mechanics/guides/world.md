---
title: Floors, modes and rooms
layout: guide
weight: 3
text_lang: en
---
_Written for PokéIsaac build 1.1.1 (108d03b1)._

## Base floors

| id | Name | Rooms | Bosses | Enemies (spawn weight) |
|---|---|---|---|---|
| bosque | Viridian Forest | 8 | beedrill, butterfree, pinsir, scyther, venomoth, vileplume | caterpie×3, weedle×3, pidgey×2, oddish×2, bellsprout×1, paras×2, rattata×3, spearow×2, metapod×1, kakuna×1, venonat×2, ekans×2, sentret×2, hoothoot×2, ledyba×2, spinarak×2, wurmple×2, shroomish×1, nincada×1, seedot×2, bidoof×2, budew×2 |
| cueva | Mt. Moon | 10 | onix, golem, kabutops, steelix, aerodactyl, tyranitar | zubat×3, geodude×2, diglett×2, sandshrew×2, machop×1, paras×1, clefairy×2, graveler×1, rhyhorn×1, kabuto×2, omanyte×2, aron×2, nosepass×1, larvitar×2, phanpy×2, swinub×2, woobat×2, roggenrola×1, drilbur×1, trapinch×1 |
| torre | Pokémon Tower | 11 | gengar, marowak, dusknoir, chandelure, spiritomb | gastly×3, haunter×2, drowzee×2, cubone×2, misdreavus×2, zubat×1, duskull×2, shuppet×2, hypno×1, sableye×2, banette×1, litwick×2, yamask×2, murkrow×2, natu×1, spoink×2, phantump×2, golett×1, dusclops×1, mismagius×1 |
| mansion | Cinnabar Mansion | 12 | muk, weezing, arcanine, magmortar, electivire, houndoom | grimer×2, koffing×3, growlithe×2, magmar×2, ditto×1, machop×1, ponyta×2, vulpix×2, slugma×2, houndour×2, porygon×1, electabuzz×1, magnemite×2, electrode×1, numel×2, torkoal×1, croagunk×2, stunky×2, rotom×1, litleo×2, trubbish×2, elekid×1 |
| celeste | Cerulean Cave | 12 | mewtwo | golbat×3, machoke×2, kadabra×2, haunter×2, magmar×1, growlithe×1, machamp×1, arbok×2, alakazam×1, dragonair×2, rhydon×1, golduck×2, gligar×2, sneasel×2, lairon×1, gabite×1, skarmory×1, shelgon×1, metang×1, lucario×1, zangoose×1, seviper×1, hippopotas×1 |

## Chapters and alternate floors

| Chapter | Floors | Rooms | Alt floor | Rule | Alt bosses |
|---|---|---|---|---|---|
| 1 | 3 | 9 | Great Marsh | esporas | vileplume, venomoth, butterfree, muk |
| 2 | 3 | 11 | Mt. Chimney | lava | magmortar, golem, onix, steelix |
| 3 | 3 | 12 | Mt. Pyre | oscuridad | dusknoir, spiritomb, chandelure, gengar |
| 4 | 3 | 13 |  |  |  |
| 5 | 2 | 14 |  |  |  |
| 6 | 1 | 14 |  |  |  |
| 7 | 1 | 18 |  |  |  |

## Post-game zones

| Zone | Theme | Rule | Types |
|---|---|---|---|
| Frozen Foothills | Ice, water and wind | ventisca | ice×4, water×3, flying×2 |
| Sky Pillar | Dragons and birds in the wind | viento | dragon×4, flying×4 |
| Ashen Crater | Fire, earth and rock | lava | fire×4, ground×3, rock×3 |
| Spore Jungle | Plants, bugs and poison | esporas | grass×3, bug×3, poison×4 |
| Observatory | Mind, steel and electricity | apagon | psychic×3, steel×3, electric×3 |
| Eternal Graveyard | Ghosts and shadows | oscuridad | ghost×4, dark×3 |
| Distorted Sanctum | Every type, no fixed rules | mezcla |  |
| The Void | What is left after every zone | vacio |  |

## Curses

| Curse | Effect |
|---|---|
| Curse of the Fog | The floor is dark: you only see what is close |
| Curse of the Labyrinth | Double floor: more rooms, double boss loot and you skip the next floor |
| Curse of the Lost | No map: you only remember the rooms you walk into |
| Curse of Unown | Items stay hidden until you pick them up |

## League mode: gyms

| City | Leader | Type | Boss | Weak to |
|---|---|---|---|---|
| Pewter City | Brock | rock | onix | water, grass |
| Cerulean City | Misty | water | lg_starmie | grass, electric |
| Vermilion City | Teniente Surge | electric | lg_raichu | ground |
| Celadon City | Erika | grass | vileplume | fire, ice, flying |
| Fuchsia City | Koga | poison | weezing | ground, psychic |
| Saffron City | Sabrina | psychic | lg_alakazam | ghost, dark, bug |
| Cinnabar Island | Blaine | fire | arcanine | water, ground, rock |
| Viridian City | Giovanni | ground | lg_rhydon | water, grass, ice |

Elite Four: Lorelei (ice, boss lg_lapras); Bruno (fighting, boss lg_machamp); Agatha (ghost, boss gengar); Lance (dragon, boss dragonite). Champion Azul with lg_pidgeot, gyarados, lg_charizard. 6 waves per gym.

## Mt. Silver mode

| id | Name | Rooms | Enemies |
|---|---|---|---|
| plateado1 | Mt. Silver Foothills | 9 | mp_teddiursa, mp_ursaring, mp_piloswine, mp_donphan, phanpy, sneasel, swinub, mp_snorunt, mp_delibird, golbat, mp_dewgong, skarmory |
| plateado2 | Mt. Silver Cave | 10 | golbat, larvitar, mp_pupitar, graveler, machoke, lairon, misdreavus, mp_jynx, mp_glalie, mp_cloyster, mp_weavile, mp_froslass, gligar, metang |
| plateado3 | Mt. Silver Summit | 6 | mp_mamoswine, mp_weavile, mp_ursaring, mp_glalie, mp_cloyster, mp_froslass, sneasel, mp_delibird, dragonair, mp_jynx |

Final team: mp_pikachu, mp_espeon, mp_snorlax, mp_venusaur, mp_charizard, mp_blastoise

## Room types

| id | Room | What it does | Where |
|---|---|---|---|
| normal | Combat room | The floor's enemies. Clear it to open the doors and sometimes get a reward. From floor 16, one in five hides an ambush: clearing it brings a second wave with the doors shut (and double coins when it's over). | Almost every room on the map. |
| start | Starting room | Where you start each floor. Never has enemies. | Your first room on each floor. |
| treasure | Treasure room | A free item on a pedestal (one per player in co-op). Its door is locked. | One per floor: you need a key. |
| shop | Shop | Six slots: items (some only sold here), actives, hearts, bombs, keys and chests for PokéDollars. The first one of the run is free. | Locked door (except the free shop). |
| heal | Healing room | A Chansey heals you: free hearts and sometimes a soul heart. | Doesn't always appear. |
| secret | Secret room | It may be Kecleon's black market, an altar with a treasure, a chest vault, fainted Meowth, slot machines or loose loot. Its treasures are only found here. | Revealed by an explosion next to a cracked wall. |
| boss | Boss room | The floor's boss. Beat it for a boss item, the trapdoor to the next floor and sometimes a rift. | At the end of each floor. |
| angel | Celestial Room | Jirachi grants a wish: free holy items (one per player) and sometimes a soul heart. Replaces the Distortion Room. | After a boss (golden rift), only if nobody made a deal with Darkrai this run. |
| supersecret | Super secret room | Hidden, with no cracks to give it away. Inside: trick or treat with Pumpkaboo, an altar with a Halloween item, or a ghost miniboss guarding one. At Halloween it is decorated with pumpkins. | One per floor from the 2nd: look for a gap on the map that touches a single room and put a Voltorb against that wall. |
| devil | Distortion Room | Darkrai offers very strong items paid with health: heart containers or three soul hearts. Sometimes it's a trap. | Appears after a boss, more likely if you take no damage (violet rift). |

## Obstacles and objects

| id | Object | Behaviour | Where |
|---|---|---|---|
| crate | Crate | Breaks with shots and explosions (takes 2 hits). Sometimes drops loot. | Combat rooms. |
| barrel | Barrel | Takes 2 hits. Holds the most bombs. | Combat rooms. |
| bush | Bush | Breaks in one hit. Drops the most hearts. | Combat rooms. |
| vase | Vase | Breaks in one hit. Holds the most coins and keys. | Combat rooms. |
| blood | Donation machine | Touch it to donate half a heart (a full one from floor 7) and it drops coins. After several donations it may burst and leave a bag. It never leaves you without health. | Sometimes in combat rooms. |
| slot | Slot machine | Spend coins on a spin: sometimes a prize, sometimes it breaks. | Secret rooms. |
| fainted | Fainted Meowth | Blow it up with a Voltorb for coins, nuggets and sometimes a key. | Secret rooms. |
| trapdoor | Trapdoor | Appears when you beat the boss and leads down to the next floor. | Boss room. |
| rift | Violet rift | A portal next to the trapdoor leading to Darkrai's Distortion Room. | After a boss, with luck. |
| jirachi | Jirachi | Guardian of the Celestial Room: grants wishes in the form of holy items. | Celestial Room. |
| grieta_dorada | Golden rift | A portal next to the trapdoor leading to the Celestial Room. | After a boss, if you've never made a deal with Darkrai. |
| kecleon | Kecleon | Sells two treasures in secret rooms that appear nowhere else, for 20 PokéDollars each. | Secret rooms. |
| darkrai | Darkrai | The dealer of the Distortion Room: deals in exchange for health. One time in ten, it attacks you. | Distortion Room. |
| heart | Heart | Heals one heart. | Rooms, bosses and shops. |
| halfheart | Half heart | Heals half a heart. | Loot from enemies and items. |
| soul | Soul heart | Extra health (blue): lost first and can't be healed. | Shop and items. |
| coin | PokéDollar | The game's currency: spend it in the shop. | Everywhere. |
| bomb | Voltorb (bomb) | Place it with Q: it explodes after a few seconds, breaks rocks and objects and opens secret rooms. | Loot and shop. |
| key | Key | Opens treasure rooms, shops and golden chests. | Reward for clearing rooms, from chests, crates and vases, sometimes from enemies, the starting room of each floor and the shop. |
| chest | Chest | Opens on touch: coins, bombs, keys or, rarely, an item. | Combat rooms. |
| goldchest | Golden chest | Needs a key; almost always gives an item. | Combat rooms. |
