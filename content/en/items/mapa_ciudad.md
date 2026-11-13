---
title: Town Map
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
- label: Shows
  value: Every room of the floor and its type
- label: Not shown
  value: Secret and super secret rooms
- label: Lost curse
  value: Cancels the map
icon: items/town-map.png
sprite: true
names:
  es:
    name: Mapa Ciudad
    desc: Muestra todas las salas de cada planta
  fr:
    name: Carte
    desc: Affiche toutes les salles de chaque étage
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
Shows every room on each floor

## How it works
- On every floor, the minimap shows all rooms from the start, with their type (shop, treasure room, boss, etc.), even the ones you have not visited.
- Secret rooms and super secret rooms are not shown. To see the secret room, you need the [Devon Scope](d_detector_devon.html).
- On a floor with the **Lost** [curse](../mechanics/maldiciones.html), the map does not work: you only see the rooms you walk into.
- In co-op, the whole team sees the full map if one player carries it.

## Stacking
- A second copy does nothing more.
