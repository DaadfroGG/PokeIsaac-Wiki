---
title: Aile Lunaire (Cosmique)
id: cs_alaluna
kind: passive
category: stats
family: cosmic
tier: 1
pools:
- cosmic
pool_weight: 1
details:
- label: Après un coup
  value: '3 s : vitesse +0,9, dégâts ×1,25'
- label: Rafraîchissement
  value: Chaque nouveau coup relance les 3 s
- label: Cumul
  value: Aucun
icon: items-ps/key-item/lunar-wing.png
sprite: true
names:
  en:
    name: Lunar Wing
    desc: After taking a hit, 3 s with speed +0.9 and damage ×1.25.
  es:
    name: Ala Lunar
    desc: Tras recibir un golpe, 3 s con velocidad +0,9 y daño ×1,25.
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
Après un coup reçu, 3 s avec vitesse +0,9 et dégâts ×1,25.

## Fonctionnement
- Chaque fois que vous subissez réellement des dégâts (et survivez), un chrono de 3 s démarre. Pendant ce temps, vous avez **Vitesse +0,9** et **Dégâts ×1,25**.
- Un nouveau coup pendant le chrono le relance à 3 s ; le bonus ne s'applique jamais plus d'une fois.
- Le ×1,25 est un multiplicateur de dégâts comme les autres : il se multiplie avec vos autres multiplicateurs et passe par les [rendements décroissants](../mechanics/rendimientos.html) (complet jusqu'à ×2,3, puis un quart, jamais au-delà de ×3).
- Les coups entièrement bloqués ou annulés (boucliers, esquives) ne lancent pas le chrono.
- Ne se trouve que dans l'[Observatoire](../rooms/observatory.html) (objet cosmique gratuit, un au choix parmi trois).

## Cumul
- Un second exemplaire n'ajoute rien : le chrono reste de 3 s et le bonus reste Vitesse +0,9 et Dégâts ×1,25.
