---
title: Lunettes Filtre
id: gafas_protectoras
kind: passive
category: utility
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Bloque
  value: Flaques, gaz, pics, trous, feux, chutes de rochers, tirs en cloche
- label: Ne bloque pas
  value: Tirs ennemis normaux, contact, explosions
icon: items-ps/hold-item/safety-goggles.png
sprite: true
names:
  en:
    name: Safety Goggles
    desc: Puddles, gas and falling rocks don't hurt you
  es:
    name: Gafas Protectoras
    desc: No te dañan los charcos, el gas ni las rocas que caen
  de:
    name: Schutzbrille
    desc: Pfützen, Gas und herabfallende Felsen schaden dir nicht
  it:
    name: Visierantisabbia
    desc: Pozze, gas e massi in caduta non ti feriscono
  pt:
    name: Óculos de Proteção
    desc: Poças, gás e rochas que caem não machucam você
  ru:
    name: Защитные очки
    desc: Лужи, газ и падающие камни не ранят тебя
  ja:
    name: ぼうじんゴーグル
    desc: 水たまり・ガス・落石でダメージを受けない
  ko:
    name: 방진고글
    desc: 웅덩이, 가스, 떨어지는 바위에 대미지를 받지 않는다
  zh:
    name: 防尘护目镜
    desc: 水洼、毒气和落石伤不到你
  zt:
    name: 防塵護目鏡
    desc: 水窪、毒氣和落石都不會傷害你
---
Les flaques, le gaz et les rochers qui tombent ne vous blessent pas

## Fonctionnement
- Tous les dégâts qui viennent du sol ou de la salle elle-même sont annulés complètement :
  - les flaques et les nuages de gaz laissés par les ennemis (aussi le gaz que certains ennemis lâchent en mourant), et les zones au sol des attaques de boss ;
  - les cases à pics et les pics de la salle d'épreuve ;
  - les feux au sol ;
  - les chutes dans un trou : vous tombez quand même et revenez au bord, mais sans perdre de PV ;
  - les attaques de boss marquées au sol qui font tomber des rochers, de la glace ou des os ;
  - les tirs ennemis qui volent en cloche et retombent d'en haut (chutes de rochers, tirs en cloche).
- Elles ne protègent **pas** des tirs ennemis normaux, du contact avec les ennemis ni des explosions (pour celles-ci, voir la [Pierre Magma](d_piedra_magma.html)).

## Cumul
- Un deuxième exemplaire ne fait rien de plus.
