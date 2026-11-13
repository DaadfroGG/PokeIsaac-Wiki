---
title: Max Elixir
id: elixir_max
kind: passive
category: utility
family: core
tier: 2
pools:
- shop
pool_weight: 2
details:
- label: Recharge
  value: +1 extra charge per cleared room
- label: Rooms
  value: Normal and boss rooms
icon: items-ps/medicine/max-elixir.png
sprite: true
names:
  es:
    name: Elixir Máximo
    desc: Tu objeto activo se recarga el doble de rápido
  fr:
    name: Élixir Max
    desc: Votre objet actif se recharge deux fois plus vite
  de:
    name: Top-Elixier
    desc: Dein aktives Item lädt sich doppelt so schnell auf
  it:
    name: Elisir Max
    desc: Il tuo oggetto attivo si ricarica il doppio più in fretta
  pt:
    name: Elixir Máximo
    desc: Seu item ativo recarrega duas vezes mais rápido
  ru:
    name: Макс-эликсир
    desc: Твой активный предмет перезаряжается вдвое быстрее
  ja:
    name: ピーピーマックス
    desc: アクティブなどうぐが2倍の速さでチャージされる
  ko:
    name: PP맥스
    desc: 액티브 아이템 충전 속도가 2배
  zh:
    name: ＰＰ多项全补剂
    desc: 你的主动道具充能速度加倍
  zt:
    name: ＰＰ多項全補劑
    desc: 主動道具的充能速度加倍
---
Your active item recharges twice as fast

## How it works
- Your active item normally gains 1 charge each time you clear a room. With the Max Elixir, clearing a normal room or a boss room gives 1 additional charge, so 2 in total.
- It never goes above the charge limit of your active item.
- It does nothing if you have no active item.

## Stacking
- It is an on/off effect: a second Max Elixir does not give a third charge per room.
- With the [Cell Battery](d_pila.html) the extra charge also helps fill the second bar.
