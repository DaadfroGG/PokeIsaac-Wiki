---
title: Vive Griffe
id: garra_rapida
kind: passive
category: stats
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Cadence +
  good: true
- text: Dégâts -0,3
  good: false
details:
- label: Cadence
  value: +4 (0,067 s de moins entre les tirs)
- label: Dégâts
  value: -0,3
icon: items/quick-claw.png
sprite: true
names:
  en:
    name: Quick Claw
    desc: Fire rate ++, damage -0.3
  es:
    name: Garra Rápida
    desc: Cadencia ++, daño -0.3
  de:
    name: Flinkklaue
    desc: Feuerrate ++, Schaden -0,3
  it:
    name: Rapidartigli
    desc: Cadenza ++, danni -0,3
  pt:
    name: Garra Rápida
    desc: Cadência ++, dano -0,3
  ru:
    name: Быстрый коготь
    desc: Темп стрельбы ++, урон -0,3
  ja:
    name: せんせいのツメ
    desc: 連射速度++、ダメージ-0.3
  ko:
    name: 선제공격손톱
    desc: 연사 ++, 대미지 -0.3
  zh:
    name: 先制之爪
    desc: 射速++，伤害-0.3
  zt:
    name: 先制之爪
    desc: 射速 ++，傷害 -0.3
---
Cadence ++, dégâts -0,3

## Fonctionnement
- Cadence +4 : 0,067 s de moins entre deux tirs. Les bonus de cadence suivent les [rendements décroissants](../mechanics/rendimientos.html) : les 3 premiers points au total comptent en entier, les 4 suivants à moitié, le reste au quart. Vous ne tirez jamais plus de 12 fois par seconde.
- Le -0,3 en Dégâts est retiré de vos bonus fixes ; les pénalités comptent en entier. Vos Dégâts ne descendent jamais sous 0,5.
- Seule, la Cadence +4 compte pour +3,5 (le 4e point est déjà à moitié) ; avec d'autres objets de cadence, elle compte pour moins.
- **Effet réel** pour un Pokémon typique (4 dégâts, 4,3 tirs/s, vitesse 4, portée 350 px, vitesse des tirs 9, 4 cœurs), première copie seulement: Cadence +4: 4,3 → 5,7 tirs/s (+33 %) · Dégâts −0,3: 4 → 3,7 (−8 %). Voir [Statistiques en pratique](../mechanics/estadisticas_reales.html) pour le comportement des totaux.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Cadence).
