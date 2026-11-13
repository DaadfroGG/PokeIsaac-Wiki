---
title: Yellow Nectar
id: a_nectar_amarillo
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Enemies
  value: Become random enemies of this floor
- label: Health
  value: The new enemy starts full
- label: Bosses
  value: Not affected
icon: items-ps/other-item/yellow-nectar.png
sprite: true
names:
  es:
    name: Néctar Amarillo
    desc: Los enemigos de la sala se transforman en otros de la planta
  fr:
    name: Nectar Jaune
    desc: Les ennemis de la salle se transforment en d'autres de l'étage
  de:
    name: Gelber Nektar
    desc: Die Gegner im Raum verwandeln sich in andere der Etage
  it:
    name: Nettare giallo
    desc: I nemici della stanza si trasformano in altri del piano
  pt:
    name: Néctar Amarelo
    desc: Os inimigos da sala se transformam em outros do andar
  ru:
    name: Желтый нектар
    desc: Враги в комнате превращаются в других врагов этажа
  ja:
    name: やまぶきのミツ
    desc: 部屋の敵が、その階の別の敵に変身する
  ko:
    name: 진노랑꿀
    desc: 방 안의 적이 그 층의 다른 적으로 변한다
  zh:
    name: 金黄色花蜜
    desc: 房间内的敌人变成本层的其他敌人
  zt:
    name: 金黃色花蜜
    desc: 房間內的敵人會變成本層的其他敵人
---
The room's enemies transform into others from the floor

## How it works
- Every enemy in the room (not bosses) turns into a random enemy from this floor's list, in the same spot.
- The new enemy starts with full health, scaled like the old one, so a wounded enemy comes back healed.
- If there is nothing to affect, nothing happens and you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): the enemies transform twice.
