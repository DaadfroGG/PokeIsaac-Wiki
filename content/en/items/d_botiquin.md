---
title: Medicine Pocket
id: d_botiquin
kind: passive
category: defense
family: defense
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Trigger
  value: Each hit that hurts you
- label: Charge
  value: +1 room of charge
icon: items-ps/storage/medicine-pocket.png
sprite: true
names:
  es:
    name: Botiquín
    desc: Cada golpe que recibes carga tu objeto activo
  fr:
    name: Trousse de Soins
    desc: Chaque coup reçu charge votre objet actif
  de:
    name: Medizintasche
    desc: Jeder Treffer, den du einsteckst, lädt dein aktives Item auf
  it:
    name: Tasca rimedi
    desc: Ogni colpo che subisci carica il tuo oggetto attivo
  pt:
    name: Bolso de Remédios
    desc: Cada golpe que você recebe carrega seu item ativo
  ru:
    name: Аптечка
    desc: Каждый полученный удар заряжает твой активный предмет
  ja:
    name: かいふくポケット
    desc: 被弾するたびにアクティブのどうぐがチャージされる
  ko:
    name: 회복포켓
    desc: 피해를 받을 때마다 액티브 아이템이 충전된다
  zh:
    name: 回复口袋
    desc: 每受到一次攻击，你的主动道具就会充能
  zt:
    name: 回復口袋
    desc: 每次受到攻擊都會為主動道具充能
---
Every hit you take charges your active item

## How it works
- Each hit that hurts you adds 1 charge to your active item, the same as clearing a room.
- It does nothing if you have no active item, or if it is already fully charged.
- Hits that are blocked or dodged don't count, but a hit absorbed by a soul heart does.

## Stacking
- It does not stack: a second copy adds nothing.
