---
title: Élixir Max
id: elixir_max
kind: passive
category: utility
family: core
tier: 2
pools:
- shop
pool_weight: 2
details:
- label: Recharge
  value: +1 charge en plus par salle nettoyée
- label: Salles
  value: Salles normales et de boss
icon: items-ps/medicine/max-elixir.png
sprite: true
names:
  en:
    name: Max Elixir
    desc: Your active item recharges twice as fast
  es:
    name: Elixir Máximo
    desc: Tu objeto activo se recarga el doble de rápido
  de:
    name: Top-Elixier
    desc: Dein aktives Item lädt sich doppelt so schnell auf
  it:
    name: Elisir Max
    desc: Il tuo oggetto attivo si ricarica il doppio più in fretta
  pt:
    name: Elixir Máximo
    desc: Seu item ativo recarrega duas vezes mais rápido
  ru:
    name: Макс-эликсир
    desc: Твой активный предмет перезаряжается вдвое быстрее
  ja:
    name: ピーピーマックス
    desc: アクティブなどうぐが2倍の速さでチャージされる
  ko:
    name: PP맥스
    desc: 액티브 아이템 충전 속도가 2배
  zh:
    name: ＰＰ多项全补剂
    desc: 你的主动道具充能速度加倍
  zt:
    name: ＰＰ多項全補劑
    desc: 主動道具的充能速度加倍
---
Votre objet actif se recharge deux fois plus vite

## Fonctionnement
- Votre objet actif gagne normalement 1 charge à chaque salle nettoyée. Avec l'Élixir Max, nettoyer une salle normale ou une salle de boss donne 1 charge supplémentaire, soit 2 au total.
- Il ne dépasse jamais la limite de charge de votre objet actif.
- Il ne fait rien si vous n'avez pas d'objet actif.

## Cumul
- C'est un effet tout ou rien : un second Élixir Max ne donne pas une troisième charge par salle.
- Avec la [Pile](d_pila.html), la charge en plus aide aussi à remplir la seconde barre.
