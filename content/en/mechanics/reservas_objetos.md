---
title: Item pools and spawning
id: reservas_objetos
color: '#ffd23c'
labels:
- text: MECHANIC
  color: '#ffd23c'
icon: icons/mechanics/niveles_objetos.png
details:
- label: Pools
  value: Treasure, Boss, Shop, Distortion, Celestial, Secret, Super secret, Cursed, Cosmic
- label: No repeats
  value: An item shown is not offered again by that pool until its bag is refilled
- label: Tiers
  value: Floor 1 / 4 / 9 / 15, earlier with Luck
- label: Locks
  value: Achievements, plus 3 in 10 locked each run
names:
  en:
    name: Item pools and spawning
    desc: Every item on a pedestal is drawn from a pool tied to a kind of room. Where items come from, how the draw works (no repeats, floor limits, locked items), and the exceptions.
  es:
    name: Reservas y aparición de objetos
    desc: Cada objeto de un pedestal sale de una reserva ligada a un tipo de sala. De dónde salen los objetos, cómo funciona el sorteo (sin repetidos, límites por planta, objetos bloqueados) y las excepciones.
  fr:
    name: Pools et apparition des objets
    desc: Chaque objet d'un piédestal vient d'un pool lié à un type de salle. D'où viennent les objets, comment fonctionne le tirage (pas de doublons, limites d'étage, objets verrouillés) et les exceptions.
  de:
    name: Item-Pools und Erscheinen
    desc: Jedes Item auf einem Sockel stammt aus einem Pool, der an eine Raumart gebunden ist. Woher Items kommen, wie die Ziehung funktioniert (keine Doppelten, Etagenlimits, gesperrte Items) und die Ausnahmen.
  it:
    name: Pool e comparsa degli oggetti
    desc: Ogni oggetto su un piedistallo viene da un pool legato a un tipo di stanza. Da dove arrivano gli oggetti, come funziona l'estrazione (niente doppioni, limiti di piano, oggetti bloccati) e le eccezioni.
  pt:
    name: Pools e surgimento de itens
    desc: Cada item num pedestal vem de um pool ligado a um tipo de sala. De onde vêm os itens, como funciona o sorteio (sem repetidos, limites por andar, itens bloqueados) e as exceções.
  ru:
    name: Пулы и появление предметов
    desc: Каждый предмет на пьедестале берется из пула, связанного с типом комнаты. Откуда берутся предметы, как работает выбор (без повторов, ограничения по этажам, заблокированные предметы) и исключения.
  ja:
    name: どうぐプールと出現
    desc: 台座のどうぐはすべて、部屋の種類ごとのプールから抽選されます。どうぐの入手元、抽選のしくみ（重複なし・階の制限・ロック）と例外を解説します。
  ko:
    name: 아이템 풀과 등장
    desc: 받침대 위의 아이템은 모두 방 종류에 묶인 풀에서 뽑힌다. 아이템이 나오는 곳, 뽑기 규칙(중복 없음, 층 제한, 잠긴 아이템)과 예외를 설명한다.
  zh:
    name: 道具池与出现规则
    desc: 底座上的每件道具都来自与房间类型绑定的道具池。介绍道具的来源、抽取规则（不重复、楼层限制、锁定道具）以及各种例外。
  zt:
    name: 道具池與出現規則
    desc: 台座上的每件道具都來自與房間類型綁定的道具池。介紹道具的來源、抽取規則（不重複、樓層限制、鎖定道具）以及各種例外。
---
Every item you find on a pedestal comes from a **pool**: a list tied to a kind of room. The game draws from it with a few rules (no repeats, floor limits, locked items), and some rooms and items bend them. Each item page shows its pools; the [item list](../items/) can be filtered by pool.

## The pools
| Pool | Used by | Passive items | By tier (1 / 2 / 3 / 4) |
|---|---|---|---|
| Treasure | [Treasure room](../rooms/treasure.html), chests, Wishing Piece, many special rooms | 224 | 94 / 93 / 28 / 9 |
| Boss | Boss rewards, [Battle Tower](../rooms/tower.html), [Hall of the Four](../rooms/four.html), rival | 110 | 19 / 48 / 25 / 18 |
| Shop | [Shop](../rooms/shop.html) | 116 | 72 / 40 / 4 / 0 |
| Distortion | [Distortion Room](../rooms/devil.html) (Darkrai's deals) | 22 | 4 / 8 / 6 / 4 |
| Celestial | [Celestial Room](../rooms/angel.html) (Jirachi) | 22 | 8 / 6 / 5 / 3 |
| Secret | [Secret rooms](../rooms/secret.html), [Kecleon](../world/kecleon.html) | 23 | 14 / 3 / 3 / 3 |
| Super secret | [Super secret room](../rooms/supersecret.html) | 6 | 6 / 0 / 0 / 0 |
| Cursed | [Gengar's room](../rooms/gengar.html) | 6 | 6 / 0 / 0 / 0 |
| Cosmic | [Observatory](../rooms/observatory.html) | 6 | 6 / 0 / 0 / 0 |

- Many items sit in several pools (a treasure item can also be in the boss pool, for instance).
- **Active items** have their own pool, used by the shop and the [Professor's Lab](../rooms/lab.html). See [Active items](#active-items).
- Items that are in no pool never drop: they come from special sources (starting items, event rewards, a fixed gift).

## Where items appear
| Source | Pool | What you get |
|---|---|---|
| Treasure room | Treasure | 1 free item; **2 to choose from** from floor 6 in Classic ([choose one of two](elegir_uno.html)); +1 choice with the [Oval Charm](../items/amuleto_oval.html). 1 per player in co-op |
| Boss | Boss | 1 free item, 2 to choose from floor 6; +1 choice with the Oval Charm. Mega bosses add a second free item. 1 per player in co-op |
| Shop | Shop | 2 guaranteed item slots (1 from floor 31, 3 in Liga); the other slots are an active, hearts, bombs, keys, souls or chests, at random. 6 slots, 4 to 8 with some items. The first shop of a run is free. On every 10th floor it also sells vitamins (see [exceptions](#exceptions-what-ignores-the-rules)) |
| [Chest](../world/chest.html) | Treasure | 12 % of normal chests hold an item instead of loot |
| [Golden chest](../world/goldchest.html) | Treasure | Always an item |
| [Wishing Piece](../items/pieza_deseo.html) (active) | Treasure | A free item pedestal appears just above you |
| Devil's deal | Distortion | 2 items (+1 per extra player, max 4) for hearts. Once per run, a 10 % chance that the room is a Darkrai trap instead (beat him: a Carbon item, or a boss item if you already own it) |
| Celestial Room | Celestial | 1 free item (1 per player, max 4) |
| Secret room | Secret | 15 % [Kecleon](../world/kecleon.html) with 2 items for PokéDollars; 12 % an altar with 1 free item. In every secret room, 15 % to find one more free secret item |
| Super secret room | Super secret | One Halloween item (altar, miniboss reward or trick-or-treat) |
| [Gengar's room](../rooms/gengar.html) | Cursed | 2 cursed items, you pick one |
| [Observatory](../rooms/observatory.html) | Cosmic | 3 free items, you pick one |
| [Trainer Room](../rooms/trainer.html) | Treasure, Boss from floor 9 (hard fight) | 1 item if you win |
| [Rival](../rooms/rival.html) and [Battle Tower](../rooms/tower.html) | Boss | Boss item(s) as a reward |
| [Hall of the Four](../rooms/four.html) | 2 Boss + 2 Treasure | 4 items, you pick one |
| [Unown Ruins](../rooms/ruins.html) | Treasure | An item if you make 0 or 1 mistakes |
| [Mystery Trade](../rooms/trade.html) | Shop, Treasure, Boss or Secret | 3 items, you pick one; each roll swaps them for items of the pool the die shows (1 shop, 2–3 treasure, 4–5 boss, 6 secret) |
| [Casino vendors](../rooms/casino.html) | Pikachu: Treasure; Mimikyu: Boss | Each try raises the chance of an item (Pikachu: 2 % + 0.5 % per try, max 12 %; Mimikyu: 8 % + 4 % per try, max 40 %); Luck helps. Once they give one they leave |
| Slot machine | Treasure | Three Poké Balls (1 % of spins, +1 % per Luck) give an item |
| [MissingNo. Room](../rooms/glitch.html) | Treasure, Boss | Two corrupted items, or a free boss item |
| [Diglett Burrow](../rooms/burrow.html) | Treasure | Best prize tier |

## How a draw works
Each time a room shows an item, the game makes a **draw** in that room's pool. Two things are kept apart:
- **The bag**: the list of items a pool still holds this run. Once built, it only shrinks (see below).
- **The filters**: the rules that say which items are allowed *right now*. An item that fails a filter is only skipped: it stays in the bag for a later draw.

A draw goes like this:
1. **Build the bag (first use only).** The game puts in every item of the pool that is allowed at that moment. An item with weight 2 goes in twice, a weight 1 item once (most items weigh 2; a few rarer ones weigh 1, very few 3 or 5). The bag is shuffled, so heavy items come up sooner on average.
2. **Choose a kind** (treasure, boss and shop pools only). The game first decides what *kind* of item to give, using target shares:

| Pool | Stats | Shot | Companion | Defense | Utility | Weapon | Voltorb | Evolution |
|---|---|---|---|---|---|---|---|---|
| Treasure | 21 % | 26 % | 13 % | 12 % | 9 % | 8 % | 5 % | 6 % |
| Boss | 30 % | 22 % | 11 % | 11 % | 4 % | 15 % | 3 % | 4 % |
| Shop | 28 % | 15 % | 8 % | 17 % | 19 % | 4 % | 6 % | 3 % |

   - A kind that has been under-represented so far is boosted (up to ×4) and one that came up too often is reduced, so over a long run the mix follows the table.
   - After a Voltorb, weapon, companion or evolution item, that kind is about 8 times less likely on the next draw.
3. **Take the first allowed item** of that kind in the bag (other pools: the first allowed item of the bag).
4. **Remove it from the bag.** All its copies leave that pool's bag the moment the room shows it, even if you never take it. The bags of other pools keep it.

## The filters
An item fails a draw (and stays in the bag) if:
- **Tier too high.** Tier 2 needs floor 4, tier 3 floor 9, tier 4 floor 15. Luck brings tiers sooner: each point counts as 2 floors, using the highest positive Luck in the team, or the worst negative one if nobody has positive Luck. See [Item tiers](niveles_objetos.html). Distortion, Celestial, Secret, Super secret, Cursed and Cosmic have no tier limit.
- **Already owned** by a player, or **already on a pedestal** somewhere on the floor (so two pedestals never show the same item).
- **Dropped.** An item you drop, or an active you swap for another, is out of the draws for the rest of the run.
- **Locked.** Many items are locked behind [achievements](logros.html). On top of that, 3 out of 10 of the remaining treasure, boss and shop items start each run locked; each boss you beat unlocks 4 of them (8 for a mega boss), picked among the ones up to one tier above your current limit, and they join the bags at random places. Items that are also in the Distortion, Celestial or secret pools are never run-locked, nor are evolution items.
- **Companion item while every living player's companions are full**, or an item that raises the companion limit while you have no permanent companion.
- **Type item your team can't use** (reserved for a type nobody on your team has).
- **Evolution item once everyone is fully evolved** (items that evolve by stone excepted).
- **Rare item that missed its roll.** Mega Stones only enter a bag with a 20 % chance each, when the bag is built or refilled.

## When the bag runs out
"Runs out" means no item in the bag passes the filters (the bag itself may still hold items that are too high a tier, for example). Then, in order:
1. **Refill.** The game puts a new batch in front of the bag: every item of that pool that passes the filters now. This includes items already shown earlier but not owned, such as the one you left behind in a choose-one. So **"no repeats" only lasts until the next refill**. Items you own, dropped, or that sit on a pedestal never come back this way.
2. **Nothing in the pool passes at all**: the game draws from another pool: the boss pool for the Liga shop, the treasure pool for every other pool.
3. **Still nothing: last resort.** A random passive item from any pool, within your tier limit, preferring items that aren't pure stat boosts and aren't on a pedestal. **This step ignores ownership and drops**: you can be offered an item you own or one you dropped. If even that fails, a Protein.

## Exceptions: what ignores the rules
| What | What it does |
|---|---|
| **Shop vitamins** | In Classic, on every 10th floor (10, 20, 30…) or the last floor of each chapter, the shop swaps up to 2 of its slots for **vitamins** (Protein, Calcium, Zinc, Iron, PP Max, Carbos), at 1.5 × the item price. They don't come from the shop pool: no bag, no no-repeat rule, no "dropped" filter. The shop prefers vitamins nobody owns, but if you own them all it sells them again. That is why a Protein you dropped can show up in the shop. If a living player's max health is under the game's limit, PV Plus comes first (1.8 × the price). They replace pickup slots (hearts, bombs…) before extra item slots, and never the first two item slots |
| **Shop reroll** | Stand next to the shopkeeper and press the interaction key: the shop's goods are redrawn, for a price that grows with each reroll (3 × 1.45 per reroll, scaled by floor, at least 2). Not in Liga or free shops. The old items are used up, the new ones come from the bags as usual, and the vitamin swap happens again |
| **Fixed items** | Some rewards are a specific item, not a draw: for example the Carbon after beating the fake Darkrai (a boss item instead if you already own it) |
| **Last resort** | See above: ignores ownership and drops |
| **Refill** | See above: brings back items already shown but not owned |

## Active items
Actives are drawn from their own bag, used by the [shop](../rooms/shop.html) and the [Professor's Lab](../rooms/lab.html). An active you carry or have swapped away can't come up again, and the tier limit applies to them too. Swapping an active for one on a pedestal leaves yours there; it is out of the draws from then on.

## Items that change drops
- [Oval Charm](../items/amuleto_oval.html): one more item to choose from in treasure rooms and after bosses.
- [Ability Capsule](../items/a_capsula.html): rerolls every item on the room's pedestals from that room's own pool.
- [Ability Patch](../items/a_parche.html): swaps all your passive items for random ones (70 % treasure pool, 30 % boss pool).
- [Wishing Piece](../items/pieza_deseo.html): a free treasure pool item on demand.
- Luck: raises the tier cap (above).
- Live event "items": one extra treasure room item.

## Co-op and modes
- The pools are **shared by the whole team**: an item one player owns is never offered to the others.
- Treasure rooms, boss rooms and the Celestial Room give **one item per player**. All players pick in a random order, 15 seconds each; if time runs out, a random item is taken. The "choose one of two" rule only applies when playing solo.
- **Liga**: the shop sells items from the shop and treasure pools together; the treasure room offers two items to choose from from the third floor.

See also: [Item tiers](niveles_objetos.html), [Choose one of two items](elegir_uno.html), [Achievements and items](logros.html).
