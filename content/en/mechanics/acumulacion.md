---
title: Item stacking
id: acumulacion
color: '#6fdc5a'
labels:
- text: MECHANIC
  color: '#6fdc5a'
icon: icons/mechanics/mochila100.png
details:
- label: Stats
  value: Added for every copy, then diminishing returns
- label: Number bonuses
  value: 'Added for every copy: extra shots, size, crit chance, pierce, bounce, push, lightning bolts'
- label: Special effects
  value: Switched on once; a second copy adds nothing
- label: Damage multipliers (×)
  value: Don't stack with a copy of the same item; different items multiply, up to ×3
- label: Companions
  value: One per copy, 3 at most (5 with the Apricorn Box)
---
Picking up the same item twice doesn't always give you twice the effect: it depends on what kind of bonus it gives.

## The rules

| What the item gives | A second copy | Example |
|---|---|---|
| **Stats** (Damage, Fire rate, Speed, Range, Shot speed, Luck, hearts) | Adds again, then [diminishing returns](rendimientos.html) apply to the total | Two Damage +1 = Damage +2 |
| **Extra shots** (multishot) | +1 shot per point, never more than 9 per volley | [Lens Case](../items/m_portalentillas.html) twice = 5 shots |
| **Shot size** | +2.5 px radius per point | |
| **Critical hit chance** | +8 % per item | [Wide Lens](../items/lupa.html) + [Black Glasses](../items/gafas_sol.html) + [King's Rock](../items/roca_rey.html) = 24 % |
| **Pierce** | +1 enemy pierced per copy | |
| **Bounce** | +1 bounce per copy | |
| **Push** | 3 + 3 per copy of push strength | [Hard Stone](../items/piedra_dura.html) twice pushes 9 instead of 6 |
| **Chain lightning** | +1 enemy hit by the bolts per copy | |
| **Special effect** (homing, burn, poison, slow, freeze, extra shots from an item, a chance on hit…) | Nothing more | Two [Go-Goggles](../items/m_gafas_aislantes.html) still split each shot in 2 |
| **Damage multiplier ×** | Nothing more | Two [Gold Leaf](../items/m_hoja_oro.html) are still ×1.8 |
| **Companion** | One more companion | Two [Repeat Balls](../items/f_acopio_ball.html) = two Dittos |

## Details
- **Stats**: every copy adds its stats, good and bad. The total goes through the [diminishing returns](rendimientos.html): Damage counts in full up to +3, Fire rate up to 3 points, Luck up to 10. Max health never goes past 12 hearts.
- **Number bonuses** add up per copy. Some have a limit: the volley stops at 9 shots (see [Extra shots](disparos_extra.html)), and the bonus crit damage of [Wide Lens](../items/lupa.html) (crits ×3 instead of ×2) only counts once.
- **Special effects** are on or off. A second copy of the item doesn't raise the chance, the length or the strength. This includes items that share the same effect: [Charcoal](../items/carbon.html) and [Heat Rock](../items/roca_calor.html) both give the same 25 % burn chance, and having both is still 25 % (Heat Rock still doubles burn length).
- If you lose one copy, the effect stays as long as you still hold another item that gives it.
- **Damage multipliers** (×1.5, ×1.8…) are special effects too: two copies of the same item count once. Multipliers from **different** items do multiply together, then the total is capped (full up to ×2.3, a quarter beyond, never more than ×3). Example: [Gold Leaf](../items/m_hoja_oro.html) ×1.8 and [Power Lens](../items/m_lente_recia.html) ×1.6 = ×2.88 on paper, ×2.45 in practice.
- Type bonuses applied on hit (Gems, Plates, Z-Crystals) are not part of that cap; whether they stack is on each item's page.
- **Companions**: each Ball gives its companion, so two copies give two companions (for example two Dittos that both copy your shots). You can have **3** at once, **5** with the [Apricorn Box](../items/m_caja_bonguri.html), never more than 6. More companions wait in your bag (see [Companions](companeros.html)).
- **One-time gains** (hearts healed, coins, bombs, keys, soul hearts) are given again with every copy.

## Examples
- [TM Double Team](../items/mt_doble.html) + [Lens Case](../items/m_portalentillas.html): 1 + 1 + 2 = **4 shots**. Three Lens Cases: 1 + 6 = 7 shots; a fourth: 9 (not 10).
- Two [Destiny Knots](../items/lazo_destino.html): still one volley backwards.
- Two [Dragon Skulls](../items/m_craneo_dragon.html): still 15 % + 1 % per Luck.
- Two [Wide Lens](../items/lupa.html): 16 % crit chance, crits still ×3.
- Two [Gold Leaf](../items/m_hoja_oro.html): Damage +2 and two more hearts, but still ×1.8.

Related pages: [Diminishing returns](rendimientos.html) · [Extra shots](disparos_extra.html) · [Status effects](estados.html) · [Companions](companeros.html) · [Critical hits](criticos.html)
