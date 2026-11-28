---
title: Mirror (affix)
id: afijo_espejo
color: '#ff9ae0'
labels:
- text: MECHANIC
  color: '#ff9ae0'
icon: icons/mechanics/afijos.png
details:
- label: Chance
  value: 10 % for each of your shots that hits
- label: Your damage
  value: Still dealt
- label: League bosses
  value: Never get it
names:
  es:
    name: Espejo
    desc: ''
---
A Mirror boss sends back about one in ten of your shots that hit it.

## Effect
- Each of your shots that hits it has a 10 % chance to fire a pink shot from the spot it hit, flying away from the boss: often straight back toward you.
- Your shot still deals its damage: the mirror doesn't block anything.
- Shots stopped by a Barrier attack aren't sent back.
- The returned shot hurts like the boss's own basic shot.
- League bosses never get this affix.

## Measured

Against 12 bosses (floors 4 to 25, 1 minute each, 12 hearts, standing still and shooting), with and without the Mirror affix:

| Build | Shots sent back per minute | Hearts lost per minute, no Mirror | With Mirror | With Mirror + [Rusted Shield](../items/escudo_oxidado.html) | With Mirror + [Iron](../items/hierro.html) |
|---|---|---|---|---|---|
| One shot at a time, 4.3/s | about 25 | 34.9 | 37.6 | 26.3 | 25.6 |
| Full volley at 12 shots/s | about 460 | 38.5 | 54 | 17.7 | 34.9 |
| Full volley + 6 Dittos | about 3,600 | 42.8 | 69.8 | 19.3 | 47 |

- The chance is per shot that hits, with no limit, so the number of returned shots follows your shot count: with Dittos, the Mirror alone adds 27 hearts per minute, enough to empty 12 hearts in about 10 seconds.
- **[Rusted Shield](../items/escudo_oxidado.html) stops most of it.** The returned shots start where your shots hit, right in your stream of shots, so your next shots destroy most of them. Some still get through, more deep in the run.
- Deeper floors and moving, with 6 Dittos (8 bosses per floor, hearts lost per minute, total / from returned shots):

| | No shield, standing | Shield, standing | No shield, moving around the boss | Shield, moving around the boss |
|---|---|---|---|---|
| Floor 10 | 67 / 51 | 34 / 6 | 56 / 45 | 11 / 1 |
| Floor 50 | 73 / 57 | 49 / 10 | 54 to 60 / 42 to 49 | 11.5 / 3 to 5 |

- Moving around the boss with the shield is by far the best: the boss's own shots miss more, and the shield still catches almost every returned shot. Faster shots (shot speed 9 to 33) and [Nikodule](../items/w_acromaquina.html) changed nothing measurable.
- Iron, Rusted Shield and [Broken Mirror](../items/cu_espejo.html) together: 10.4 hearts per minute with the full volley, 12.1 with Dittos.

## Tips
- With a fast-firing build, take [Rusted Shield](../items/escudo_oxidado.html) and keep moving around the boss: together they cut the damage by about 80 %.
- Fast-firing builds see many more returned shots: keep moving sideways instead of standing in front of the boss.

All affixes and which bosses get them: [Boss affixes](afijos.html).
