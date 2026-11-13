---
title: Cloche Cristal
id: campana_clara
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 4
details:
- label: Durée
  value: 6 secondes
- label: Chaque coup
  value: Vous soigne d'un demi-cœur au lieu de vous blesser
- label: Après chaque coup
  value: 1,17 s d'invulnérabilité
- label: Vous seul
  value: Ne soigne pas vos coéquipiers
icon: items-ps/key-item/clear-bell.png
sprite: true
names:
  en:
    name: Clear Bell
    desc: For 6 seconds, hits you take heal you half a heart instead of hurting you
  es:
    name: Campana Clara
    desc: Durante 6 segundos, los golpes que recibes te curan medio corazón en vez de herirte
  de:
    name: Klarglocke
    desc: 6 Sekunden lang heilen dich erlittene Treffer um ein halbes Herz, statt dich zu verletzen
  it:
    name: Campana Chiara
    desc: Per 6 secondi, i colpi che subisci ti curano di mezzo cuore invece di ferirti
  pt:
    name: Sino Cristalino
    desc: Por 6 segundos, os golpes que você recebe te curam meio coração em vez de ferir
  ru:
    name: Чистый колокольчик
    desc: На 6 секунд получаемые удары лечат тебя на полсердца вместо урона
  ja:
    name: とうめいなすず
    desc: 6秒間、受けた攻撃がダメージではなく半分のハートの回復になる
  ko:
    name: 크리스탈방울
    desc: 6초 동안 받는 공격이 피해 대신 하트 반 칸을 회복시킨다
  zh:
    name: 透明铃铛
    desc: 6秒内，你受到的攻击会为你回复半颗心，而不是伤害你
  zt:
    name: 透明鈴鐺
    desc: 6秒內，你受到的攻擊會為你回復半顆愛心，而不是傷害你
---
Pendant 6 secondes, les coups reçus vous rendent un demi-cœur au lieu de vous blesser

## Fonctionnement
- Pendant 6 secondes, chaque coup qui devrait vous blesser (tirs, contact, explosions, pièges) ne fait aucun dégât et vous soigne d'un demi-cœur à la place.
- Après chacun de ces coups vous êtes invulnérable 1,17 seconde, donc environ 5 coups au plus peuvent vous soigner.
- Ce soin compte dans la limite de soin des objets sur 10 secondes : une fois la limite atteinte, les coups ne font toujours rien mais ne soignent plus.
- En coopération, il ne protège que le joueur qui l'a utilisé.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : le minuteur repart simplement à 6 secondes.
