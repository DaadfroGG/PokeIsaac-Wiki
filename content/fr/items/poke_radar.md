---
title: Poké Radar
id: poke_radar
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 4
details:
- label: Charge
  value: 4 salles
- label: Cibles
  value: Tous les ennemis non-boss de la salle
- label: Récompense
  value: 3 pièces par ennemi marqué vaincu
- label: Boss
  value: Non affectés
icon: items-ps/key-item/poke-radar.png
sprite: true
names:
  en:
    name: Poké Radar
    desc: Enemies in the room turn shiny and drop coins
  es:
    name: Poké Radar
    desc: Los enemigos de la sala se vuelven shiny y sueltan monedas
  de:
    name: Pokéradar
    desc: Die Gegner im Raum werden schillernd und lassen Münzen fallen
  it:
    name: Poké Radar
    desc: I nemici della stanza diventano cromatici e lasciano monete
  pt:
    name: Poké Radar
    desc: Os inimigos da sala viram shiny e soltam moedas
  ru:
    name: Покерадар
    desc: Враги в комнате становятся шайни и роняют монеты
  ja:
    name: ポケトレ
    desc: 部屋の敵が色違いになり、コインを落とす
  ko:
    name: 포켓트레
    desc: 방 안의 적이 이로치가 되어 동전을 떨어뜨린다
  zh:
    name: 宝可追踪
    desc: 房间内的敌人变成闪光并掉落硬币
  zt:
    name: 寶可追蹤
    desc: 房間內的敵人會變成異色並掉落金幣
---
Les ennemis de la salle deviennent chromatiques et lâchent des pièces

## Fonctionnement
- Charge : 4 salles. Chaque salle terminée donne 1 charge.
- Tous les ennemis vivants de la salle qui ne sont pas des boss deviennent chromatiques.
- Chaque ennemi chromatique lâche 3 pièces à sa mort, quelle que soit la cause (vos tirs, bombes, autres ennemis, pièges).
- L'effet n'a pas de limite de temps : il dure jusqu'à la mort de l'ennemi ou jusqu'à ce que vous quittiez la salle.
- Les boss ne sont pas affectés. Il est inutilisable quand il ne reste aucun ennemi non-boss, et aucune charge n'est alors dépensée.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec une [Pile Cellulaire](d_pila.html), l'objet peut stocker le double de charge.
