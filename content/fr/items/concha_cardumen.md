---
title: CoquilleTréfonds
id: concha_cardumen
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Chance
  value: 25 % à chaque salle normale nettoyée
- label: Récompense
  value: Un coffre
icon: items-ps/valuable-item/shoal-shell.png
sprite: true
names:
  en:
    name: Shoal Shell
    desc: When you clear a room, a chest sometimes appears
  es:
    name: Concha Cardumen
    desc: Al limpiar una sala, a veces aparece un cofre
  de:
    name: Küstenschale
    desc: Nach dem Säubern eines Raums erscheint manchmal eine Truhe
  it:
    name: Gusciondoso
    desc: Quando ripulisci una stanza, a volte appare un forziere
  pt:
    name: Concha do Cardume
    desc: Ao limpar uma sala, às vezes aparece um baú
  ru:
    name: Ракушка отмели
    desc: Когда зачищаешь комнату, иногда появляется сундук
  ja:
    name: あさせのかいがら
    desc: 部屋をクリアすると、ときどき宝箱が出る
  ko:
    name: 여울조개껍질
    desc: 방을 클리어하면 가끔 상자가 나타난다
  zh:
    name: 浅滩贝壳
    desc: 清空房间后，有时会出现宝箱
  zt:
    name: 淺灘貝殼
    desc: 清空房間時，有時會出現寶箱
---
Quand vous nettoyez une salle, un coffre apparaît parfois

## Fonctionnement
- Chaque fois que vous nettoyez une salle de combat normale, il y a 25 % de chances qu'un [coffre](../world/chest.html) apparaisse dans la salle, à un endroit libre à au moins 60 px de vous. La Chance ne change pas cette probabilité.
- Ce coffre s'ajoute à la récompense normale de fin de salle.
- Les salles de boss et les autres types de salle ne donnent pas de coffre.

## Cumul
- C'est un effet tout ou rien : une seconde Coquille Tréfonds ne donne pas un second tirage.
