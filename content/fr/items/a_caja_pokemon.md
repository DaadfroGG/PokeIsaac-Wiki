---
title: Boîte Pokémon
id: a_caja_pokemon
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Compagnon
  value: '1 sur 9 chacun : Pichu, Toudoudou, Mélo, Magby, Natu, Élekid, Nosferapti, Phanpy, Togepi'
- label: Dégâts
  value: 2 au premier étage, +0,4 par étage
- label: Durée
  value: Jusqu'à ce que vous quittiez la salle
icon: items-ps/storage/pokemon-box.png
sprite: true
names:
  en:
    name: Pokémon Box Link
    desc: A random companion appears to help you in this room
  es:
    name: Caja de Pokémon
    desc: Sale un compañero al azar que te ayuda en esta sala
  de:
    name: Pokémon-Box
    desc: Ein zufälliger Begleiter erscheint und hilft dir in diesem Raum
  it:
    name: Box Pokémon
    desc: Compare un compagno a caso che ti aiuta in questa stanza
  pt:
    name: Link da Caixa Pokémon
    desc: Aparece um companheiro aleatório que ajuda você nesta sala
  ru:
    name: Ящик покемонов
    desc: Появляется случайный спутник и помогает тебе в этой комнате
  ja:
    name: ポケモンボックス
    desc: この部屋であなたを助けるなかまがランダムで現れる
  ko:
    name: 포켓몬 박스
    desc: 이 방에서 도와주는 동료가 무작위로 나온다
  zh:
    name: 宝可梦盒
    desc: 随机出现一名伙伴，在本房间协助你
  zt:
    name: 寶可夢盒
    desc: 隨機出現一個夥伴，在這個房間協助你
---
Un compagnon aléatoire apparaît pour vous aider dans cette salle

## Fonctionnement
- Un bébé compagnon au hasard apparaît à côté de vous et se bat comme d'habitude (Pichu, Natu et Togepi tirent, Mélo et Magby tournent autour de vous, Élekid lance un laser, Nosferapti mord, Phanpy charge, Toudoudou tire plus fort mais plus lentement).
- Ses dégâts ne dépendent pas des vôtres : 2 au premier étage, +0,4 par étage ensuite. Les objets qui renforcent les compagnons le renforcent aussi.
- Il est temporaire : il ne compte pas dans votre limite de [compagnons](../mechanics/companeros.html) et s'en va quand vous quittez la salle.
- Vous pouvez le réutiliser dans la même salle pour en avoir plusieurs.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux compagnons apparaissent (tirés séparément).
