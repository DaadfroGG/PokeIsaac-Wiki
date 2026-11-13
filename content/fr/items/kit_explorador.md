---
title: Explorakit
id: kit_explorador
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Casse
  value: Tous les rochers, caisses et tonneaux de la salle
- label: Condition
  value: Au moins un rocher
icon: items-ps/key-item/explorer-kit.png
sprite: true
names:
  en:
    name: Explorer Kit
    desc: Breaks all rocks, crates and barrels in the room
  es:
    name: Kit Explorador
    desc: Rompe todas las rocas, cajas y barriles de la sala
  de:
    name: Erkundungs-Set
    desc: Zerstört alle Felsen, Kisten und Fässer im Raum
  it:
    name: Esplorokit
    desc: Rompe tutti i massi, le casse e i barili della stanza
  pt:
    name: Kit Explorador
    desc: Quebra todas as rochas, caixas e barris da sala
  ru:
    name: Набор исследователя
    desc: Разбивает все валуны, ящики и бочки в комнате
  ja:
    name: たんけんセット
    desc: 部屋の岩、箱、樽をすべて壊す
  ko:
    name: 탐험세트
    desc: 방의 바위, 상자, 통을 모두 부순다
  zh:
    name: 探险套装
    desc: 打碎房间内所有石块、箱子和木桶
  zt:
    name: 探險組合
    desc: 打破房間內所有岩石、箱子和木桶
---
Brise tous les rochers, caisses et tonneaux de la salle

## Fonctionnement
- Tous les rochers de la salle se cassent d'un coup, avec toutes les caisses et tous les tonneaux, où qu'ils soient. Ce qu'ils cachent ou lâchent sort comme si vous les aviez cassés vous-même (voir [butin des objets cassables](../mechanics/botin_rompibles.html)).
- Il faut au moins un rocher dans la salle : avec seulement des caisses ou des tonneaux, rien ne se passe et vous gardez la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus.
