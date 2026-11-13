---
title: Nectar Jaune
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
- label: Ennemis
  value: Deviennent des ennemis au hasard de cet étage
- label: PV
  value: Le nouvel ennemi commence avec tous ses PV
- label: Boss
  value: Pas touchés
icon: items-ps/other-item/yellow-nectar.png
sprite: true
names:
  en:
    name: Yellow Nectar
    desc: The room's enemies transform into others from the floor
  es:
    name: Néctar Amarillo
    desc: Los enemigos de la sala se transforman en otros de la planta
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
Les ennemis de la salle se transforment en d'autres de l'étage

## Fonctionnement
- Chaque ennemi de la salle (sauf les boss) se transforme en un ennemi au hasard de la liste de cet étage, au même endroit.
- Le nouvel ennemi commence avec tous ses PV, avec le même renfort que l'ancien, donc un ennemi blessé revient soigné.
- S'il n'y a rien à affecter, rien ne se passe et vous gardez la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : les ennemis se transforment deux fois.
