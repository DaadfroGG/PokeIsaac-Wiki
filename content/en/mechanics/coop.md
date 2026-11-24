---
title: Co-op
id: coop
color: '#5ab0ff'
labels:
- text: MECHANIC
  color: '#5ab0ff'
icon: icons/mechanics/equipo.png
details:
- label: Players
  value: Up to 4, online
- label: Enemy health
  value: ×1.35 / ×1.7 / ×2.05 with 2 / 3 / 4 players
- label: Boss health
  value: ×1.5 / ×2 / ×2.5 with 2 / 3 / 4 players
- label: Shared
  value: Hearts, soul hearts, coins, Voltorbs and keys picked up
- label: If everyone faints
  value: The run is over
names:
  en:
    name: Co-op
    desc: Online runs for up to 4 trainers, with the same floors and a shared team of rules.
  fr:
    name: Coopération
    desc: Parties en ligne pour jusqu'à 4 dresseurs, avec les mêmes étages et des règles partagées.
---
Online runs for up to 4 trainers. Everyone explores the same floor together, with their own Pokémon, items and companions; the enemies get tougher and a few things are shared.

## Playing together
- Entering Co-op creates your room. Share the room code, or invite friends from the Friends list; a friend in a room can ask to join. Up to 4 trainers fit in a room.
- Everyone has to be ready, and the host starts the run. All players need the same game version as the host; if not, they have to reload the page.
- The whole team is always in the same room. The host's game runs the room for everyone.
- A player who loses connection for more than 8 seconds is removed from the run for good: they count as fainted, lose their companions and no longer count when items are shared out. If the host loses connection for a moment, the others wait up to 20 seconds instead of the room closing.

## Difficulty
Enemies and bosses get more health for each extra player. Their attacks do not change.

| Players | Enemy health | Boss health |
|--:|--:|--:|
| 1 | ×1 | ×1 |
| 2 | ×1.35 | ×1.5 |
| 3 | ×1.7 | ×2 |
| 4 | ×2.05 | ×2.5 |

- The multiplier counts everyone who joined the room, even someone who has since left.
- Each enemy goes for the **nearest player who is still standing**.
- Experience only goes to the player who lands the killing blow: teammates get none (a Pokémon's own bench still gets its share, see [Level](niveles_pokemon.html)).

## What is shared
- **Picked up by one player, given to the whole team:** hearts and half hearts (each teammate who is missing health is healed, with their own Mega Stone bonus and ignoring the healing limit), soul hearts (a soul heart each), coins (each teammate's own [Amulet Coin](../items/amuleto.html) or [Top Hat](../items/chistera.html) still counts), Voltorbs, keys and candy. Coins, Voltorbs and keys also reach fainted teammates, up to the usual caps; hearts and soul hearts only reach those who are standing.
- **Not shared:** anything on sale in a shop, items, chests, and your own money when you buy. Each player pays with their own Pokédollars; any player can talk to Meowth to change the shop's stock.
- **Item pools:** an item one player owns is meant to be left out of later offers for everybody, but players have seen a teammate's item come back later (see [Item pools](reservas_objetos.html)).
- **Room rewards:** when a room is cleared, every player who is still in the run rolls the clear reward on their own, with their own Luck. More players means more rolls, and whatever drops is shared as above.

## Rewards and the loot draft
- **Treasure rooms, boss rooms and the Celestial Room** offer one item per player instead of a choice of items for one player. The "choose one of two" rule only applies when playing alone.
- **Bosses** also drop one heart per player, and the boss's coins are split between players: only about 1/n of them drop, but each coin goes to everyone, so every player ends up with about 1/n of what a solo run gets. Mega bosses drop a second item per player.
- **The draft:** when several items are on offer, the players take turns in a random order, 15 seconds each. A player who runs out of time gets a random item. Players who fainted, left or have a full [Bag](mochila100.html) are skipped, and what is left afterwards is free for anyone.
- The boss's trapdoor stays shut until everyone has picked their item.

## Fainting and reviving
- A player at zero health faints and becomes a ghost: they float around the room and can watch, but cannot attack, and enemies ignore them. They also lose their companions.
- The run ends only when **every** player has fainted.
- On the next floor, fainted players come back with **one heart** and 1.5 seconds of invulnerability.
- [Sacred Ash](../items/cenizas.html) revives fainted teammates at once, with 2 hearts. An item that revives you ([Max Revive](../items/d_revivir_maximo.html), for example) works for its owner only.

## Team of 3 in co-op
Every player brings their own team of up to 3 Pokémon and switches between them with keys 1-3, as in a solo run ([Team](equipo.html)).
- **Switching is personal.** Your switch never changes your teammates' Pokémon. The Pokémon you swap out rests 8 seconds, but only while there are enemies in the room; the rest is forgotten as soon as the room is clear. Teammates can see your team and which Pokémon is resting.
- **Health is yours, not the Pokémon's.** Hearts, soul hearts, items and upgrades belong to the player and stay when they switch. Fainting takes down the whole player, whichever Pokémon is out, and a revived player comes back with the Pokémon that was out.
- **Experience stays inside a player's team.** The Pokémon that gets the kill earns the XP, and that player's benched Pokémon get their usual share. Nothing goes to teammates' Pokémon.
- **No random teammates.** The "random team" setting, with its bonus (coins, key, Voltorb, soul heart), only works in solo runs and is ignored in co-op.
- **Type-restricted items count every Pokémon.** A [Plate](../items/x_draco_plate.html), the [Binding Band](../items/banda_atadura.html) or the [Helix Fossil](../items/m_fosil_helix.html) can be offered as soon as **any** Pokémon of **any** player, benched or not, has the right type. The item then goes to whoever picks it, and it only does something while their active Pokémon has that type. See [Item pools](reservas_objetos.html).
- **Luck is the best in the room.** The tier limit of the items on offer uses the highest Luck among all players, not the Luck of whoever opens the room.

## Items that affect the whole team
These items work for everyone as long as **at least one player who is still standing** has them. Copies on different players do not add up: the effect is either on or off.

| Item | What it does for the team |
|---|---|
| [Clear Amulet](../items/amuleto_puro.html) | One enemy less in each normal combat room |
| [Max Lure](../items/cebo_max.html) | One enemy more in each normal combat room, and more coins from kills |
| [Relic Crown](../items/corona_antigua.html) | Enemies sometimes surrender when the team enters a room |
| [Comet Shard](../items/fragmento_cometa.html) | A comet hits the enemies when the team enters a fight |
| [Super Repel](../items/superrepelente.html) | Enemies are slow to react when the team enters a room |
| [Lagging Tail](../items/cola_plumbea.html) | Enemies (not bosses) move 20 % slower |
| [Full Incense](../items/incienso_lento.html) | Enemy shots are 25 % slower |
| [Rock Incense](../items/incienso_roca.html) | Rocks that anyone breaks may drop coins |
| [Shoal Shell](../items/concha_cardumen.html) | A chest may appear when the team clears a room |
| [Pass Orb](../items/pase_orbe.html) | Treasure rooms open without a key |
| [Blue Card](../items/d_tarjeta_azul.html) | Everything in the shop costs half |
| [Resist Feather](../items/d_pluma_aguante.html), [Black Mane Hair](../items/d_crin_negra.html) | Decide which rift opens after a boss |

Some effects stay with their owner: the [Magnet](../items/iman.html) pulls pickups toward the nearest player who has it, and the [Slowpoke Tail](../items/cola_slowpoke.html) slows the enemies near its owner. The [Oval Charm](../items/amuleto_oval.html) adds nothing in co-op, because the extra choice only exists when you are alone.

Held items that work for the team are listed on their own pages; for example the [Chalky Stone](../held/chalky_stone.html) works whoever breaks the object, and the [Aguav Berry](../held/aguav_berry.html) leaves hearts for teammates who need them.

See also: [Dynamax Raid](raid_dinamax.html) (solo or co-op), [Item pools](reservas_objetos.html), [Companions](companeros.html).
