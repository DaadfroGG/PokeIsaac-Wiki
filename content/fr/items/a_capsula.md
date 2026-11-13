---
title: Pilule Talent
id: a_capsula
kind: active
family: ability
tier: 2
pools:
- treasure
- shop
pool_weight: 2
charge: 6
details:
- label: Piédestaux
  value: Tous les objets pas encore pris
- label: Nouveaux objets
  value: De la réserve de la salle où vous êtes
- label: Prix en boutique
  value: Conservés
icon: items-ps/medicine/ability-capsule.png
sprite: true
names:
  en:
    name: Ability Capsule
    desc: Rerolls the items on the room's pedestals
  es:
    name: Cápsula Habilidad
    desc: Cambia los objetos de los pedestales de la sala por otros
  de:
    name: Fähigkeiten-Kapsel
    desc: Tauscht die Items auf den Sockeln des Raums gegen andere aus
  it:
    name: Capsula Abilità
    desc: Cambia gli oggetti dei piedistalli della stanza con altri
  pt:
    name: Cápsula de Habilidade
    desc: Troca os itens dos pedestais da sala por outros
  ru:
    name: Капсула способности
    desc: Меняет предметы на пьедесталах комнаты на другие
  ja:
    name: とくせいカプセル
    desc: 部屋の台座のどうぐを別のものに入れ替える
  ko:
    name: 특성캡슐
    desc: 방의 받침대 아이템을 다른 것으로 바꾼다
  zh:
    name: 特性胶囊
    desc: 将房间底座上的道具替换为其他道具
  zt:
    name: 特性膠囊
    desc: 將房間台座上的道具換成其他道具
---
Remplace les objets des piédestaux de la salle par d'autres

## Fonctionnement
- Chaque objet encore sur un piédestal de la salle est remplacé par un autre.
- Les objets passifs sont tirés de la réserve de la salle où vous êtes (trésor, boss, boutique, démon, ange, salle secrète ou super secrète ; toute autre salle utilise la réserve du trésor). Les objets actifs sont remplacés par un autre objet actif au hasard.
- Un article de boutique garde son prix. Un pacte du démon reçoit un nouveau prix en PV adapté au nouvel objet.
- Sans objet sur un piédestal, rien ne se passe et vous gardez la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : les objets sont changés deux fois ; vous gardez le second résultat.
