---
title: Nœud Destin (Maudit)
id: cu_nudo
kind: passive
category: stats
family: cursed
tier: 1
pools:
- cursed
pool_weight: 1
stats:
- text: Cadence +
  good: true
- text: Vitesse -0,4
  good: false
details:
- label: Cadence
  value: + (0,05 s de moins entre les tirs)
- label: Vitesse
  value: -0,4
- label: Tirs en plus
  value: Aucun
icon: items-ps/hold-item/destiny-knot.png
sprite: true
names:
  en:
    name: Destiny Knot
    desc: You shoot much faster, but you move slower.
  es:
    name: Nudo del Destino
    desc: Disparas mucho más deprisa, pero te mueves más despacio.
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
Vous tirez bien plus vite, mais vous vous déplacez plus lentement.

## Fonctionnement
- Cadence +3 points : 0,05 s de moins entre deux tirs. Elle suit les [rendements décroissants](../mechanics/rendimientos.html) de la cadence : seule, elle compte en entier ; en plus d'autres objets de cadence, elle compte moins. Vous ne pouvez toujours pas attaquer plus de 12 fois par seconde.
- Vitesse −0,4.
- Malgré son nom, il ne vous fait pas tirer vers l'arrière et n'ajoute aucun tir : c'est le [Nœud Destin](lazo_destino.html) de base (voir [Tirs supplémentaires](../mechanics/disparos_extra.html)).

## Cumul
- Un deuxième exemplaire ajoute encore Cadence +3 et Vitesse −0,4 : les stats s'additionnent pour chaque exemplaire, puis les rendements décroissants s'appliquent (voir [Cumul des objets](../mechanics/acumulacion.html)).
