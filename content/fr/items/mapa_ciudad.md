---
title: Carte
id: mapa_ciudad
kind: passive
category: utility
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Montre
  value: Toutes les salles de l'étage et leur type
- label: Pas montrées
  value: Salles secrètes et supersecrètes
- label: Malédiction Égaré
  value: Annule la carte
icon: items/town-map.png
sprite: true
names:
  en:
    name: Town Map
    desc: Shows every room on each floor
  es:
    name: Mapa Ciudad
    desc: Muestra todas las salas de cada planta
  de:
    name: Karte
    desc: Zeigt alle Räume jeder Etage
  it:
    name: Mappa città
    desc: Mostra tutte le stanze di ogni piano
  pt:
    name: Mapa da Cidade
    desc: Mostra todas as salas de cada andar
  ru:
    name: Карта города
    desc: Показывает все комнаты каждого этажа
  ja:
    name: タウンマップ
    desc: 各フロアの全ての部屋を表示
  ko:
    name: 타운맵
    desc: 각 층의 방을 모두 보여 준다
  zh:
    name: 城镇地图
    desc: 显示每层的所有房间
  zt:
    name: 城鎮地圖
    desc: 顯示每層的所有房間
---
Affiche toutes les salles de chaque étage

## Fonctionnement
- À chaque étage, la mini-carte montre toutes les salles dès le début, avec leur type (boutique, salle au trésor, boss, etc.), même celles que vous n'avez pas visitées.
- Les salles secrètes et supersecrètes ne sont pas montrées. Pour voir la salle secrète, il faut le [Devon Scope](d_detector_devon.html).
- Sur un étage avec la [malédiction](../mechanics/maldiciones.html) **Égaré**, la carte ne marche pas : vous ne voyez que les salles où vous entrez.
- En coop, toute l'équipe voit la carte complète si un joueur la porte.

## Cumul
- Un deuxième exemplaire ne fait rien de plus.
