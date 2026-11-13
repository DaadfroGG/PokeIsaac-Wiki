---
title: Devon Goods
id: d_piezas_devon
kind: passive
category: utility
family: defense
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Effect
  value: Regain 1 charge right after using the active
- label: Requires
  value: An active item of 2+ charges
icon: items-ps/key-item/devon-parts.png
sprite: true
names:
  es:
    name: Piezas Devon
    desc: Al usar tu objeto activo, recupera una carga al momento
  fr:
    name: Pack Devon
    desc: Quand vous utilisez votre objet actif, il récupère aussitôt une charge
  de:
    name: Devon-Waren
    desc: Beim Einsatz deines aktiven Items lädt es sofort eine Ladung auf
  it:
    name: Merce Devon
    desc: Quando usi il tuo oggetto attivo, recupera subito una carica
  pt:
    name: Peças Devon
    desc: Ao usar seu item ativo, ele recupera uma carga na hora
  ru:
    name: Товары Девона
    desc: При использовании активного предмета он сразу восстанавливает один заряд
  ja:
    name: デボンのにもつ
    desc: アクティブどうぐを使うと、チャージが1つすぐ戻る
  ko:
    name: 데봉화물
    desc: 액티브 아이템을 쓰면 즉시 충전 1칸을 되찾는다
  zh:
    name: 得文的物品
    desc: 使用主动道具时，立刻恢复一点充能
  zt:
    name: 得文的物品
    desc: 使用主動道具時，會立即回復一點充能
---
When you use your active item, it instantly regains one charge

## How it works
- Each time you use your active item, you immediately get 1 charge back (never beyond your charge limit).
- It only works if the active item needs at least 2 charges. An active item that charges in a single room gets nothing.
- Active items that need no charge are not affected.

## Stacking
- It is an on/off effect: a second Devon Goods does not give back a second charge.
- It works with the [Cell Battery](d_pila.html), which raises the charge limit.
