---
title: Destiny Knot (Cursed)
id: cu_nudo
kind: passive
category: stats
family: cursed
tier: 1
pools:
- cursed
pool_weight: 1
stats:
- text: Fire rate +
  good: true
- text: Speed -0.4
  good: false
details:
- label: Fire rate
  value: + (0.05 s less between shots)
- label: Speed
  value: '-0.4'
- label: Extra shots
  value: None
icon: items-ps/hold-item/destiny-knot.png
sprite: true
names:
  es:
    name: Nudo del Destino
    desc: Disparas mucho más deprisa, pero te mueves más despacio.
  fr:
    name: Nœud Destin
    desc: Vous tirez bien plus vite, mais vous vous déplacez plus lentement.
  de:
    name: Destiny Knot
    desc: You shoot much faster, but you move slower.
  it:
    name: Destiny Knot
    desc: You shoot much faster, but you move slower.
  pt:
    name: Destiny Knot
    desc: You shoot much faster, but you move slower.
  ru:
    name: Destiny Knot
    desc: You shoot much faster, but you move slower.
  ja:
    name: Destiny Knot
    desc: You shoot much faster, but you move slower.
  ko:
    name: Destiny Knot
    desc: You shoot much faster, but you move slower.
  zh:
    name: Destiny Knot
    desc: You shoot much faster, but you move slower.
  zt:
    name: Destiny Knot
    desc: You shoot much faster, but you move slower.
---
You shoot much faster, but you move slower.

## How it works
- Fire rate +3 points: 0.05 s less between two shots. It follows the [diminishing returns](../mechanics/rendimientos.html) on fire rate: on its own it counts in full, on top of other fire-rate items it counts less. You still can't attack more than 12 times per second.
- Speed −0.4.
- Despite its name, it doesn't make you shoot backwards and adds no shots: that is the core [Destiny Knot](lazo_destino.html) (see [Extra shots](../mechanics/disparos_extra.html)).
- **Real effect** for a typical Pokémon (4 damage, 4.3 shots/s, speed 4, range 350 px, shot speed 9, 4 hearts), first copy only: Fire rate +3: 4.3 → 5.5 shots/s (+27 %) · Speed −0.4: 4 → 3.6 (−10 %). See [Stats in practice](../mechanics/estadisticas_reales.html) for how the totals behave.

## Stacking
- A second copy adds another +3 fire rate and −0.4 speed: stats add up for every copy, then diminishing returns apply (see [Item stacking](../mechanics/acumulacion.html)).
