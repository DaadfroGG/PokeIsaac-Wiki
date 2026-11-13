---
title: Vieux Vase
id: vasija_antigua
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Garde
  value: 1 pièce par salle de combat terminée (max. 15)
- label: Étage suivant
  value: Lâche deux fois les pièces gardées, 20 pièces au plus
- label: Pas comptées
  value: Salles de boss
icon: items-ps/valuable-item/relic-vase.png
sprite: true
names:
  en:
    name: Relic Vase
    desc: Saves a coin for each room you clear and gives you double when you go down a floor
  es:
    name: Vasija Antigua
    desc: Guarda una moneda por cada sala que limpias y te da el doble al bajar de planta
  de:
    name: Alte Vase
    desc: Spart eine Münze für jeden geräumten Raum und gibt dir beim Wechsel zur nächsten Etage das Doppelte
  it:
    name: Vasantico
    desc: Mette da parte una moneta per ogni stanza che ripulisci e te ne dà il doppio quando scendi di piano
  pt:
    name: Vaso Antigo
    desc: Guarda uma moeda por cada sala que você limpa e devolve o dobro ao descer de andar
  ru:
    name: Древняя ваза
    desc: Откладывает монету за каждую зачищенную комнату и отдает вдвое больше при спуске на следующий этаж
  ja:
    name: こだいのつぼ
    desc: クリアした部屋ごとにコインを1枚ためて、階を降りると2倍にして渡してくれる
  ko:
    name: 고대의항아리
    desc: 방을 클리어할 때마다 동전을 1개씩 모아 두고, 다음 층으로 내려가면 2배로 준다
  zh:
    name: 古代之壶
    desc: 每清理一个房间就存入一枚硬币，下楼时返还双倍
  zt:
    name: 古代之壺
    desc: 每清空一個房間存下一枚金幣，前往下一層時加倍返還
---
Met une pièce de côté par salle nettoyée et vous rend le double en changeant d'étage

## Fonctionnement
- Chaque salle de combat que vous terminez (les arènes comptent aussi) met une pièce dans le vase, jusqu'à 15. Il faut être en vie quand la salle est terminée.
- Les salles de boss n'ajoutent rien.
- Quand vous descendez d'un étage, le vase se vide : il lâche deux fois les pièces gardées autour de vous, puis recommence à 0.
- Il ne lâche jamais plus de 20 pièces d'un coup : garder plus de 10 salles sur un même étage ne rapporte rien de plus.

## Cumul
- Un deuxième exemplaire ne fait rien de plus : même vase.
