---
title: Électriseur
id: electrizador
kind: passive
category: utility
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Intervalle
  value: Toutes les 5 s de combat
- label: Dégâts
  value: 2× vos Dégâts (3 au minimum)
- label: Cible
  value: Un ennemi au hasard pouvant être blessé, boss compris
icon: items-ps/evo-item/electirizer.png
sprite: true
names:
  en:
    name: Electirizer
    desc: Every 5 seconds, lightning strikes an enemy
  es:
    name: Electrizador
    desc: Cada 5 segundos, un rayo cae sobre un enemigo
  de:
    name: Stromisierer
    desc: Alle 5 Sekunden schlägt ein Blitz in einen Gegner ein
  it:
    name: Elettritore
    desc: Ogni 5 secondi, un fulmine colpisce un nemico
  pt:
    name: Electirizer
    desc: A cada 5 segundos, um raio cai sobre um inimigo
  ru:
    name: Электрайзер
    desc: Каждые 5 секунд молния бьет во врага
  ja:
    name: エレキブースター
    desc: 5秒ごとに、敵1体に雷が落ちる
  ko:
    name: 에레키부스터
    desc: 5초마다 적 하나에 번개가 떨어진다
  zh:
    name: 电力增幅器
    desc: 每5秒，一道落雷劈向一个敌人
  zt:
    name: 電力增幅器
    desc: 每5秒，一道閃電劈向一個敵人
---
Toutes les 5 secondes, la foudre frappe un ennemi

## Fonctionnement
- Tant qu'une salle contient encore des ennemis, un minuteur tourne. Toutes les 5 secondes, un éclair frappe un ennemi au hasard pouvant être blessé à cet instant (boss compris) et inflige le double de vos Dégâts, avec un minimum de 3.
- Si aucun ennemi ne peut être blessé à ce moment (par exemple un ennemi enterré), l'éclair attend et frappe dès qu'un ennemi le peut.
- Le minuteur ne tourne que dans les salles non nettoyées.

## Cumul
- C'est un effet tout ou rien : un second Électriseur ne frappe pas plus souvent.
