---
title: Pile
id: d_pila
kind: passive
category: utility
family: defense
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Limite de charge
  value: Doublée
- label: Effet
  value: Deux utilisations de suite
icon: items-ps/hold-item/cell-battery.png
sprite: true
names:
  en:
    name: Cell Battery
    desc: 'Your active item can hold double charge: use it twice in a row'
  es:
    name: Pila
    desc: 'Tu objeto activo puede guardar el doble de carga: úsalo dos veces seguidas'
  de:
    name: Akku
    desc: 'Dein aktives Item kann doppelt so viel Ladung speichern: Nutze es zweimal hintereinander'
  it:
    name: Ricaripila
    desc: 'Il tuo oggetto attivo può conservare il doppio della carica: usalo due volte di fila'
  pt:
    name: Pilha
    desc: 'Seu item ativo pode guardar o dobro de carga: use-o duas vezes seguidas'
  ru:
    name: Батарейка
    desc: 'Твой активный предмет вмещает двойной заряд: используй его дважды подряд'
  ja:
    name: じゅうでんち
    desc: アクティブなどうぐのチャージを2倍ためられる：2回連続で使えます
  ko:
    name: 충전지
    desc: '액티브 아이템을 2배까지 충전할 수 있다: 연속으로 2번 사용'
  zh:
    name: 充电电池
    desc: 你的主动道具可储存双倍充能：可连续使用两次
  zt:
    name: 充電電池
    desc: 主動道具可儲存雙倍充能：可以連續使用兩次
---
Votre objet actif peut stocker le double de charge : utilisez-le deux fois de suite

## Fonctionnement
- Votre objet actif peut stocker le double de sa charge habituelle, affichée sous forme d'une seconde barre à côté de la normale.
- Quand vous l'utilisez, il dépense un jeu de charges. Si vous étiez complètement plein (charge double), vous gardez l'autre jeu complet et pouvez le réutiliser aussitôt.
- Si vous étiez entre une charge complète et une charge double, l'utilisation le vide entièrement.
- Les charges viennent toujours de la fin des salles (1 par salle) : remplir la seconde barre demande donc autant de salles que la première.

## Cumul
- C'est un effet tout ou rien : une seconde Pile ne triple pas la limite.
- Il fonctionne avec l'[Élixir Max](elixir_max.html) et l'[Huile](eter.html), qui peuvent aussi remplir la seconde barre.
