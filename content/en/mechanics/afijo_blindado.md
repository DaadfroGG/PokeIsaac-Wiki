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

## Tips
- Only total damage counts against the shield: many small shots and a few big ones break it just as well.
- Your type advantage only starts to matter once the shield is gone.

All affixes and which bosses get them: [Boss affixes](afijos.html).
