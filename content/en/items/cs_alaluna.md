---
title: Lunar Wing (Cosmic)
id: cs_alaluna
kind: passive
category: stats
family: cosmic
tier: 1
pools:
- cosmic
pool_weight: 1
details:
- label: After a hit
  value: '3 s: speed +0.9, damage ×1.25'
- label: Refresh
  value: Every new hit restarts the 3 s
- label: Stacking
  value: None
icon: items-ps/key-item/lunar-wing.png
sprite: true
names:
  es:
    name: Ala Lunar
    desc: Tras recibir un golpe, 3 s con velocidad +0,9 y daño ×1,25.
  fr:
    name: Aile Lunaire
    desc: Après un coup reçu, 3 s avec vitesse +0,9 et dégâts ×1,25.
  de:
    name: Lunar Wing
    desc: After taking a hit, 3 s with speed +0,9 and damage ×1.25.
  it:
    name: Lunar Wing
    desc: After taking a hit, 3 s with speed +0,9 and damage ×1.25.
  pt:
    name: Lunar Wing
    desc: After taking a hit, 3 s with speed +0,9 and damage ×1.25.
  ru:
    name: Lunar Wing
    desc: After taking a hit, 3 s with speed +0,9 and damage ×1.25.
  ja:
    name: Lunar Wing
    desc: After taking a hit, 3 s with speed +0.9 and damage ×1.25.
  ko:
    name: Lunar Wing
    desc: After taking a hit, 3 s with speed +0.9 and damage ×1.25.
  zh:
    name: Lunar Wing
    desc: After taking a hit, 3 s with speed +0.9 and damage ×1.25.
  zt:
    name: Lunar Wing
    desc: After taking a hit, 3 s with speed +0.9 and damage ×1.25.
---
After taking a hit, 3 s with speed +0.9 and damage ×1.25.

## How it works
- Each time you actually take damage (and survive), a 3 s timer starts. While it runs you get **Speed +0.9** and **Damage ×1.25**.
- A new hit during the timer restarts it at 3 s; the bonus never goes above one application.
- The ×1.25 is a damage multiplier like the others: it is multiplied with your other multipliers and goes through the [diminishing returns](../mechanics/rendimientos.html) (full up to ×2.3, then a quarter, never above ×3).
- Hits that are completely blocked or cancelled (shields, dodges) do not start the timer.
- Found only in the [Observatory](../rooms/observatory.html) (free cosmic item, you pick one of three).

## Stacking
- A second copy does nothing more: the timer is still 3 s and the bonus is still +0.9 Speed and ×1.25 Damage.
