---
title: Star Piece
id: trozo_estrella
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
stats:
- text: Luck +1
  good: true
details:
- label: On pickup
  value: Luck +1
- label: Each secret room
  value: Luck +1 the first time you enter it
- label: Not counted
  value: Super secret rooms
icon: items-ps/valuable-item/star-piece.png
sprite: true
names:
  es:
    name: Trozo Estrella
    desc: Suerte +1 por cada sala secreta que encuentres
  fr:
    name: Morceau d’Étoile
    desc: Chance +1 pour chaque salle secrète trouvée
  de:
    name: Sternenstück
    desc: Glück +1 für jeden gefundenen Geheimraum
  it:
    name: Pezzo Stella
    desc: Fortuna +1 per ogni stanza segreta che trovi
  pt:
    name: Pedaço de Estrela
    desc: Sorte +1 por cada sala secreta que você encontrar
  ru:
    name: Осколок звезды
    desc: Удача +1 за каждую найденную тайную комнату
  ja:
    name: ほしのかけら
    desc: 見つけた隠し部屋1つにつき運+1
  ko:
    name: 별의조각
    desc: 비밀의 방을 찾을 때마다 행운 +1
  zh:
    name: 星星碎片
    desc: 每发现一间密室，幸运+1
  zt:
    name: 星星碎片
    desc: 每找到一間祕密房間，幸運+1
---
Luck +1 for each secret room you find

## How it works
- Luck +1 when you pick it up.
- Then, each time you walk into a secret room for the first time, you gain Luck +1 for the rest of the run. Going back into the same room gives nothing.
- Super secret rooms don't count.
- Luck follows the [diminishing returns](../mechanics/rendimientos.html): full up to 10, then a quarter.

## Stacking
- A second copy adds its Luck +1, but the secret room bonus stays at +1 per room.
