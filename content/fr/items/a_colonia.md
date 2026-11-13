---
title: Parfum
id: a_colonia
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Statitik
  value: 4 à 6
- label: Dégâts
  value: Vos Dégâts ×2 (min. 2) par coup, type Insecte
- label: Chaque Statitik
  value: 2 coups, ou 10 s
- label: Durée
  value: Jusqu'à ce que vous quittiez la salle
icon: items-ps/other-item/lure.png
sprite: true
names:
  en:
    name: Lure
    desc: 4 to 6 Joltik appear and charge at the room's enemies
  es:
    name: Colonia
    desc: Aparecen de 4 a 6 Joltik que se lanzan contra los enemigos de la sala
  de:
    name: Lockparfüm
    desc: 4 bis 6 Wattzapf erscheinen und stürzen sich auf die Gegner im Raum
  it:
    name: Profumo invito
    desc: Compaiono da 4 a 6 Joltik che si scagliano contro i nemici della stanza
  pt:
    name: Isca
    desc: Aparecem de 4 a 6 Joltik que se lançam contra os inimigos da sala
  ru:
    name: Приманка
    desc: Появляются от 4 до 6 Джолтиков и бросаются на врагов в комнате
  ja:
    name: むしよせコロン
    desc: バチュルが4〜6匹現れ、部屋の敵に飛びかかる
  ko:
    name: 벌레유인코롱
    desc: 파쪼옥 4~6마리가 나타나 방 안의 적에게 돌진한다
  zh:
    name: 引虫香水
    desc: 出现4至6只电电虫，扑向房间内的敌人
  zt:
    name: 引蟲香水
    desc: 出現4至6隻電電蟲，衝向房間裡的敵人
---
De 4 à 6 Statitik apparaissent et foncent sur les ennemis de la salle

## Fonctionnement
- 4 à 6 gros Statitik apparaissent autour de vous (même chance pour chaque nombre).
- Chacun court vers l'ennemi le plus proche à moins de 600 px et le mord pour deux fois vos Dégâts (au moins 2), en dégâts Insecte. Il mord deux fois puis disparaît. Ses morsures ne déclenchent pas vos objets.
- Chaque Statitik disparaît au bout de 10 secondes au plus (sans rien à mordre, il tourne autour de vous). Ils s'en vont aussi quand vous quittez la salle.
- Ils attaquent aussi les boss. Ils ne comptent pas dans votre limite de [compagnons](../mechanics/companeros.html).
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux nuées apparaissent (8 à 12 Statitik).
