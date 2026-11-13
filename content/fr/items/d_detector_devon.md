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
- label: Révèle
  value: La salle secrète de chaque étage, sur la carte
- label: Jamais
  value: Salles ultra-secrètes ; étages sous la malédiction de l'Égarement
icon: items-ps/key-item/devon-scope.png
sprite: true
names:
  en:
    name: Devon Scope
    desc: You see on the map where each floor's secret room is
  es:
    name: Detector Devon
    desc: Ves en el mapa dónde está la sala secreta de cada planta
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
Vous voyez sur la carte où se trouve la salle secrète de chaque étage

## Fonctionnement
- À chaque étage, la [salle secrète](../rooms/secret.html) est affichée sur la carte dès le départ, sans que vous ayez à la trouver.
- Il ne révèle pas la [salle ultra-secrète](../rooms/supersecret.html).
- Il ne fait rien sur un étage sous la [malédiction](../mechanics/maldiciones.html) de l'Égarement, où la carte est cachée.
- Vous devez toujours ouvrir le passage (par exemple avec une bombe) pour entrer dans la salle.

## Cumul
- C'est un effet tout ou rien : un second Devon Scope ne change rien. En coop, un seul coéquipier qui l'a suffit pour la carte partagée.
