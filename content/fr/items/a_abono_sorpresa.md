---
title: Fertistantané
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
- label: Pièce
  value: 25 %
- label: Demi-cœur, cœur, clé, bombe, cœur d'âme, pépite
  value: 12,5 % chacun
- label: Pas changés
  value: Articles de boutique, coffres
icon: items-ps/mulch/surprise.png
sprite: true
names:
  en:
    name: Surprise Mulch
    desc: Swaps the pickups on the room's floor for random ones
  es:
    name: Abono Sorpresa
    desc: Cambia los recogibles del suelo de la sala por otros al azar
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
Remplace les objets au sol de la salle par d'autres au hasard

## Fonctionnement
- Chaque bonus gratuit posé au sol de la salle est remplacé, au même endroit, par un bonus au hasard.
- Chaque nouveau bonus est tiré séparément : pièce 25 %, puis demi-cœur, cœur, clé, bombe, cœur d'âme et pépite 12,5 % chacun. La Chance ne change pas ces probabilités.
- Les articles de boutique, tout ce qui a un prix et les coffres ne sont pas touchés.
- S'il n'y a rien à affecter, rien ne se passe et vous gardez la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : les bonus sont retirés deux fois ; vous gardez le second résultat.
