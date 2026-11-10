---
title: Armored (affix)
id: afijo_blindado
color: '#a3a8c0'
labels:
- text: MECHANIC
  color: '#a3a8c0'
icon: icons/mechanics/afijos.png
details:
- label: Shield
  value: 15 % of its maximum health
- label: League bosses
  value: 12 % of their maximum health
- label: Counts against it
  value: Crits, burn, poison
- label: Ignored by it
  value: Type effectiveness, on-hit item effects
names:
  es:
    name: Blindado
    desc: ''
---
An Armored boss has a shield bar on top of its health: until you break it, your hits don't touch its health.

## How the shield takes damage
- The shield holds 15 % of the boss's maximum health (12 % for League bosses). When the boss gets more health (co-op, Colossal bosses, endless mode), the shield grows with it.
- Each hit goes into the shield with the damage it left your Pokémon with. [Crits](criticos.html) count, but [type effectiveness](tabla_tipos.html), item effects that trigger on a hit and the [penalty for carrying many items](rendimientos.html) don't: a super effective type does nothing extra against the shield.
- When a hit breaks the shield, the rest of its damage goes into the boss's health straight away, with all the usual bonuses.
- Burn and poison wear the shield down too.
- "Shield broken!" shows when it breaks. It doesn't come back.

## Shield vs health
The shield works like a second health bar, but a hit on it skips most of what a hit on health goes through:

| | Shield | Health |
|---|---|---|
| Crits and growing shots | Count | Count |
| Type effectiveness | Ignored | Applied (×0.45 to ×2.25) |
| Venom (+50 % on poisoned targets) | Ignored | Applied |
| Item and weapon effects on hit | Don't trigger | Trigger |
| [Penalty for carrying many items](rendimientos.html) | Not applied | Applied |
| Burn, poison, slow and other effects of your shots | Not applied | Applied |
| Damage numbers and hit sound | None | Shown |
| Counts toward phase changes | No | Yes |
| Counted by [adaptive bosses](jefes_adaptativos.html) | No | Yes |
| Heals back | Never | With [Vampire](afijo_vampiro.html) |

The hit that breaks the shield counts as a health hit for what's left of it. Example: a 10-damage Electric shot on a Water boss (×2) takes 10 off the shield, but 20 off its health once the shield is gone. If the shield only has 4 left, the shield loses 4 and the boss's health loses (10 − 4) × 2 = 12.

## Tips
- Only total damage counts against the shield: many small shots and a few big ones break it just as well.
- With a super effective type, the shield costs you as much as 30 % of the boss's health would. With a resisted type (×0.5), it's cheaper than the same amount of health.
- Burn, poison, slow and charm only start working once the shield is gone.

All affixes and which bosses get them: [Boss affixes](afijos.html).
