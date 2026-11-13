---
title: Pack Devon
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
- label: Effet
  value: Regagne 1 charge juste après l'utilisation de l'actif
- label: Condition
  value: Un objet actif de 2 charges ou plus
icon: items-ps/key-item/devon-parts.png
sprite: true
names:
  en:
    name: Devon Goods
    desc: When you use your active item, it instantly regains one charge
  es:
    name: Piezas Devon
    desc: Al usar tu objeto activo, recupera una carga al momento
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
Quand vous utilisez votre objet actif, il récupère aussitôt une charge

## Fonctionnement
- Chaque fois que vous utilisez votre objet actif, vous récupérez immédiatement 1 charge (sans jamais dépasser votre limite de charge).
- Cela ne fonctionne que si l'objet actif demande au moins 2 charges. Un objet actif qui se recharge en une seule salle ne reçoit rien.
- Les objets actifs qui n'ont besoin d'aucune charge ne sont pas concernés.

## Cumul
- C'est un effet tout ou rien : un second Pack Devon ne rend pas une seconde charge.
- Il fonctionne avec la [Pile](d_pila.html), qui augmente la limite de charge.
