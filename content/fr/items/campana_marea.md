---
title: Cloche Marée
id: campana_marea
kind: passive
category: utility
family: core
tier: 1
pools:
- angel
pool_weight: 2
details:
- label: Intervalle
  value: Toutes les 10 s de combat
- label: Rayon
  value: 220 px
- label: Effet
  value: Repousse les ennemis et les étourdit 0,5 s
- label: Dégâts
  value: Aucun
- label: Boss
  value: Non affectés
icon: items-ps/key-item/tidal-bell.png
sprite: true
names:
  en:
    name: Tide Bell
    desc: Every 10 seconds, a wave pushes away nearby enemies
  es:
    name: Campana Marea
    desc: Cada 10 segundos, una ola aparta a los enemigos que tienes cerca
  de:
    name: Gezeitenglocke
    desc: Alle 10 Sekunden stößt eine Welle Gegner in deiner Nähe weg
  it:
    name: Campana Marea
    desc: Ogni 10 secondi, un'onda respinge i nemici vicini
  pt:
    name: Sino da Maré
    desc: A cada 10 segundos, uma onda afasta os inimigos próximos
  ru:
    name: Колокол прилива
    desc: Каждые 10 секунд волна отталкивает ближайших врагов
  ja:
    name: しおのすず
    desc: 10秒ごとに、衝撃波が近くの敵を押しのける
  ko:
    name: 해명의방울
    desc: 10초마다 파도가 주변의 적을 밀어낸다
  zh:
    name: 海声铃铛
    desc: 每10秒，一道冲击波会推开你身边的敌人
  zt:
    name: 潮汐之鈴
    desc: 每10秒，一道波浪會推開你身邊的敵人
---
Toutes les 10 secondes, une vague repousse les ennemis proches

## Fonctionnement
- Tant qu'une salle contient encore des ennemis, un minuteur tourne. Au bout de 10 secondes, une vague repousse tous les ennemis non-boss à moins de 220 px de vous et les étourdit pendant 0,5 seconde.
- La vague n'inflige aucun dégât : elle vous donne seulement de l'espace.
- Si aucun ennemi n'est à moins de 220 px quand le minuteur arrive au bout, la vague attend et se déclenche dès qu'un ennemi entre dans la zone, puis le minuteur repart.
- Les boss ne sont ni repoussés ni étourdis.
- Le minuteur ne tourne que dans les salles non nettoyées.

## Cumul
- C'est un effet tout ou rien : une seconde Cloche Marée ne rend pas les vagues plus fréquentes ni plus fortes.
