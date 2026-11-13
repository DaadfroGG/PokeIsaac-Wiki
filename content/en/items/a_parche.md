---
title: Ability Patch
id: a_parche
kind: active
family: ability
tier: 3
pools:
- treasure
- devil
pool_weight: 2
charge: 8
details:
- label: Replaced
  value: All your passive items
- label: New items
  value: 70 % treasure pool, 30 % boss pool
- label: Kept
  value: Evolution items, Mega Stones and a few others
icon: items-ps/other-item/ability-patch.png
sprite: true
names:
  es:
    name: Parche Habilidad
    desc: Cambia todos tus objetos pasivos por otros al azar
  fr:
    name: Patch Talent
    desc: Remplace tous vos objets passifs par d'autres au hasard
  de:
    name: Fähigkeiten-Pflaster
    desc: Tauscht alle deine passiven Items gegen zufällige aus
  it:
    name: Cerotto abilità
    desc: Cambia tutti i tuoi oggetti passivi con altri a caso
  pt:
    name: Adesivo de Habilidade
    desc: Troca todos os seus itens passivos por outros aleatórios
  ru:
    name: Патч способности
    desc: Меняет все твои пассивные предметы на случайные
  ja:
    name: とくせいパッチ
    desc: 持っているパッシブのどうぐをすべてランダムに別のものへ入れ替える
  ko:
    name: 특성패치
    desc: 패시브 아이템을 모두 무작위로 바꾼다
  zh:
    name: 特性膏药
    desc: 将你所有的被动道具随机替换为其他道具
  zt:
    name: 特性膏藥
    desc: 將你所有的被動道具隨機換成其他道具
---
Swaps all your passive items for random ones

## How it works
- Each of your passive items is removed and replaced by a random one: 70 % from the treasure room pool, 30 % from the boss pool, drawn separately for each item. You end with the same number of items.
- The new items work as if you had just picked them up.
- Evolution stones, other evolution items, Mega Stones, the [Bottle Cap](chapa_plateada.html), the [White Herb](hierba_blanca.html), the [Sacred Ash](cenizas.html), the [Ether](eter.html) and the [Fluffy Tail](d_cola_skitty.html) are kept.
- With nothing to replace, nothing happens and you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): your items are swapped twice.
