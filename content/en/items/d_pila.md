---
title: Cell Battery
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
- label: Charge limit
  value: Doubled
- label: Effect
  value: Two uses in a row
icon: items-ps/hold-item/cell-battery.png
sprite: true
names:
  es:
    name: Pila
    desc: 'Tu objeto activo puede guardar el doble de carga: úsalo dos veces seguidas'
  fr:
    name: Pile
    desc: 'Votre objet actif peut stocker le double de charge : utilisez-le deux fois de suite'
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
Your active item can hold double charge: use it twice in a row

## How it works
- Your active item can hold twice its usual charge, shown as a second bar next to the normal one.
- When you use it, it spends one set of charges. If you were completely full (double charge), you keep the other full set and can use it again right away.
- If you were between one full charge and a double charge, the use empties it completely.
- Charges still come from clearing rooms (1 per room), so filling the second bar takes as many rooms as the first.

## Stacking
- It is an on/off effect: a second Cell Battery does not triple the limit.
- It works with the [Max Elixir](elixir_max.html) and [Ether](eter.html), which can fill the second bar too.
