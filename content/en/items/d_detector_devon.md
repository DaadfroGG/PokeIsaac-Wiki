---
title: Devon Scope
id: d_detector_devon
kind: passive
category: utility
family: defense
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Reveals
  value: The secret room of each floor, on the map
- label: Never
  value: Super secret rooms; floors cursed with Lost
icon: items-ps/key-item/devon-scope.png
sprite: true
names:
  es:
    name: Detector Devon
    desc: Ves en el mapa dónde está la sala secreta de cada planta
  fr:
    name: Devon Scope
    desc: Vous voyez sur la carte où se trouve la salle secrète de chaque étage
  de:
    name: Devon-Scope
    desc: Du siehst auf der Karte, wo der Geheimraum jeder Etage liegt
  it:
    name: Devonscopio
    desc: Vedi sulla mappa dov'è la stanza segreta di ogni piano
  pt:
    name: Scope Devon
    desc: Você vê no mapa onde fica a sala secreta de cada andar
  ru:
    name: Девон-скоп
    desc: Ты видишь на карте, где тайная комната каждого этажа
  ja:
    name: デボンスコープ
    desc: 各階の隠し部屋の場所がマップに表示される
  ko:
    name: 데봉스코프
    desc: 층마다 비밀의 방 위치가 지도에 보인다
  zh:
    name: 得文侦测镜
    desc: 在地图上可以看到每层密室的位置
  zt:
    name: 得文偵測鏡
    desc: 你能在地圖上看到每層祕密房間的位置
---
You see on the map where each floor's secret room is

## How it works
- On every floor, the [secret room](../rooms/secret.html) is shown on the map from the start, without you having to find it.
- It does not reveal the [super secret room](../rooms/supersecret.html).
- It does nothing on a floor under the Lost [curse](../mechanics/maldiciones.html), where the map is hidden.
- You still have to open the way in (for example with a bomb) to enter the room.

## Stacking
- It is an on/off effect: a second Devon Scope changes nothing. In co-op, one teammate carrying it is enough for the shared map.
