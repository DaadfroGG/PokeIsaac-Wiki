---
title: Boîte Lentilles
id: m_portalentillas
kind: passive
category: shot
family: module
tier: 3
pools:
- treasure
pool_weight: 2
stats:
- text: Cadence -
  good: false
details:
- label: Tirs par salve
  value: 3 (+2 par exemplaire en plus, max 9)
- label: Cadence
  value: -8 (plus lente)
icon: items-ps/key-item/lens-case.png
sprite: true
names:
  en:
    name: Lens Case
    desc: Triple shot, but you fire slower
  es:
    name: Portalentillas
    desc: Disparo triple, pero disparas más despacio
  de:
    name: Linsenetui
    desc: Dreifachschuss, aber du schießt langsamer
  it:
    name: Portalenti
    desc: Tiro triplo, ma spari più lentamente
  pt:
    name: Estojo de Lentes
    desc: Tiro triplo, mas você atira mais devagar
  ru:
    name: Футляр для линз
    desc: Тройной выстрел, но стреляешь медленнее
  ja:
    name: レンズケース
    desc: トリプルショットだが、連射が遅くなる
  ko:
    name: 렌즈케이스
    desc: 트리플 샷, 대신 연사가 느려진다
  zh:
    name: 隐形眼镜盒
    desc: 三发射击，但射击更慢
  zt:
    name: 隱形眼鏡盒
    desc: 三發射擊，但射擊變慢
---
Tir triple, mais vous tirez plus lentement

{{< clip >}}

## Fonctionnement
- Chaque salve tire 3 tirs au lieu d'un seul, en éventail. Vous tirez plus lentement.
- Le nombre total de tirs d'une salve est plafonné à 9 (voir [Tirs supplémentaires](../mechanics/disparos_extra.html)).
- **Effet réel** pour un Pokémon typique (4 dégâts, 4,3 tirs/s, vitesse 4, portée 350 px, vitesse des tirs 9, 4 cœurs), première copie seulement: Cadence −8: 4,3 → 2,7 tirs/s (−36 %). Voir [Statistiques en pratique](../mechanics/estadisticas_reales.html) pour le comportement des totaux.

## Cumul
- Chaque exemplaire ajoute 2 tirs de plus par salve (5 avec deux exemplaires, jusqu'à 9) et -8 de Cadence.
