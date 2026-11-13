---
title: Capsule d’Argent
id: chapa_plateada
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Chance
  value: 1 sur 6 chacun (environ 17 %)
- label: Bonus possibles
  value: Dégâts +1,5 · Cadence ++ · Vitesse +0,7 · Portée +160 · Chance +3 · Vitesse des tirs +3
- label: Bonus de cadence
  value: −0,07 s entre deux tirs
icon: items-ps/other-item/bottle-cap.png
sprite: true
names:
  en:
    name: Bottle Cap
    desc: One random stat improves a lot
  es:
    name: Chapa Plateada
    desc: Una estadística al azar mejora mucho
  de:
    name: Silberkronkorken
    desc: Ein zufälliger Wert verbessert sich stark
  it:
    name: Tappo d’argento
    desc: Una statistica a caso migliora molto
  pt:
    name: Tampinha
    desc: Um atributo aleatório melhora muito
  ru:
    name: Серебряная крышка
    desc: Случайная характеристика сильно растет
  ja:
    name: ぎんのおうかん
    desc: ランダムなステータスが大きく上がる
  ko:
    name: 은색병뚜껑
    desc: 무작위 능력치 하나가 크게 오른다
  zh:
    name: 银色王冠
    desc: 随机一项数据大幅提升
  zt:
    name: 銀色王冠
    desc: 隨機一項能力數值大幅提升
---
Une statistique aléatoire s'améliore beaucoup

## Fonctionnement
- Au moment où vous le ramassez, le jeu tire au hasard l'un de six bonus de statistique, chacun avec la même chance (1 sur 6), et l'applique définitivement. Un message vous indique lequel vous avez obtenu.
- Les six bonus possibles : Dégâts +1,5, Cadence ++ (tirs espacés d'environ 0,07 s de moins), Vitesse +0,7, Portée +160 px, Chance +3, Vitesse des tirs +3.
- Le bonus est un bonus de statistique normal : les Dégâts suivent les [rendements décroissants](../mechanics/rendimientos.html) des Dégâts fixes, la cadence et la Chance suivent les leurs, tandis que la Vitesse, la Portée et la Vitesse des tirs s'ajoutent telles quelles.
- Le tirage est fait une seule fois, quand vous ramassez l'objet, et le résultat ne change plus ensuite.

## Cumul
- Chaque exemplaire tire son propre bonus à la prise : deux exemplaires peuvent donner deux bonus différents ou deux fois le même.
