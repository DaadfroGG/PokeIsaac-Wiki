---
title: Ether
id: eter
kind: passive
category: utility
family: core
tier: 1
pools:
- shop
pool_weight: 2
details:
- label: Effect
  value: Fully recharges the active item
- label: When
  value: Once, on pickup
icon: items-ps/medicine/ether.png
sprite: true
names:
  es:
    name: Éter
    desc: Recarga del todo tu objeto activo
  fr:
    name: Huile
    desc: Recharge entièrement votre objet actif
  de:
    name: Äther
    desc: Lädt dein aktives Item vollständig auf
  it:
    name: Etere
    desc: Ricarica completamente il tuo oggetto attivo
  pt:
    name: Éter
    desc: Recarrega totalmente o seu item ativo
  ru:
    name: Эфир
    desc: Полностью заряжает твой активный предмет
  ja:
    name: ピーピーエイド
    desc: アクティブのどうぐを完全にチャージする
  ko:
    name: PP에이드
    desc: 액티브 아이템을 완전히 충전한다
  zh:
    name: ＰＰ单项小补剂
    desc: 完全充满你的主动道具
  zt:
    name: ＰＰ單項小補劑
    desc: 讓你的主動道具完全充能
---
Fully recharges your active item

## How it works
- The moment you pick it up, your active item is recharged to its full charge limit (the doubled limit if you have a [Cell Battery](d_pila.html)).
- It only works once, at that moment: it does nothing afterwards.
- It does nothing if you have no active item at that time.

## Stacking
- Each copy fully recharges your active item when you pick it up.
