---
title: Surprise Mulch
id: a_abono_sorpresa
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 4
details:
- label: Coin
  value: 25 %
- label: Half heart, heart, key, bomb, soul heart, nugget
  value: 12.5 % each
- label: Not changed
  value: Shop items, chests
icon: items-ps/mulch/surprise.png
sprite: true
names:
  es:
    name: Abono Sorpresa
    desc: Cambia los recogibles del suelo de la sala por otros al azar
  fr:
    name: Fertistantané
    desc: Remplace les objets au sol de la salle par d'autres au hasard
  de:
    name: Wundermulch
    desc: Tauscht die Sammelobjekte am Boden des Raums gegen zufällige aus
  it:
    name: Fertilsorpresa
    desc: Cambia i raccoglibili sul pavimento della stanza con altri a caso
  pt:
    name: Adubo Surpresa
    desc: Troca os coletáveis do chão da sala por outros aleatórios
  ru:
    name: Мульча-сюрприз
    desc: Меняет подбираемое на полу комнаты на случайное
  ja:
    name: びっくりこやし
    desc: 部屋の床に落ちている拾い物をランダムに別のものへ入れ替える
  ko:
    name: 깜놀비료
    desc: 방 바닥의 줍는 아이템을 무작위로 바꾼다
  zh:
    name: 吃惊肥
    desc: 将房间地面上的拾取物随机替换为其他物品
  zt:
    name: 吃驚肥
    desc: 將房間地上的拾取物隨機換成其他東西
---
Swaps the pickups on the room's floor for random ones

## How it works
- Every free pickup lying on the floor of the room is replaced, in the same spot, by a random one.
- Each new pickup is drawn separately: coin 25 %, then half heart, heart, key, bomb, soul heart and nugget 12.5 % each. Luck doesn't change these odds.
- Shop items, anything with a price and chests are left alone.
- If there is nothing to affect, nothing happens and you keep the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): the pickups are rerolled twice; you keep the second result.
