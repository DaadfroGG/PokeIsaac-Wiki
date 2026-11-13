---
title: Maxi Champi
id: maxiseta
kind: active
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
charge: 5
details:
- label: Durée
  value: 8 s
- label: Dégâts
  value: ×2
- label: Taille
  value: ×1,5
icon: items-ps/battle-item/max-mushrooms.png
sprite: true
names:
  en:
    name: Max Mushrooms
    desc: Dynamax! You grow and deal ×2 damage for 8 seconds
  es:
    name: Maxiseta
    desc: ¡Dinamax! Creces y haces ×2 de daño durante 8 segundos
  de:
    name: Dyna-Pilz
    desc: Dynamax! Du wächst und machst 8 Sekunden lang ×2 Schaden
  it:
    name: Fungomax
    desc: Dynamax! Cresci e infliggi danni ×2 per 8 secondi
  pt:
    name: Cogumelos Máximos
    desc: Dynamax! Você cresce e causa ×2 de dano por 8 segundos
  ru:
    name: Макс-грибы
    desc: Динамакс! Ты растешь и наносишь ×2 урона в течение 8 секунд
  ja:
    name: ダイキノコ
    desc: ダイマックス！巨大化して8秒間ダメージ×2
  ko:
    name: 다이버섯
    desc: 다이맥스! 8초 동안 거대화하며 대미지 ×2
  zh:
    name: 极巨菇菇
    desc: 极巨化！体型变大，8秒内伤害×2
  zt:
    name: 極巨菇菇
    desc: 極巨化！體型變大，8秒內傷害×2
---
Dynamax ! Vous grandissez et infligez ×2 dégâts pendant 8 secondes

## Fonctionnement
- Pendant 8 secondes vos Dégâts sont doublés et votre Pokémon grandit à 1,5 fois sa taille.
- Votre zone d'impact grandit avec vous (environ ×1,5, jusqu'à 26 px de rayon) : vous êtes plus facile à toucher pendant l'effet.
- Le ×2 est un multiplicateur de votre stat de Dégâts (affiché sur le HUD), donc il suit les [rendements décroissants](../mechanics/rendimientos.html) des multiplicateurs : seul il compte en entier, mais avec d'autres multiplicateurs le total reste plafonné à ×3.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : le minuteur repart simplement à 8 secondes.
