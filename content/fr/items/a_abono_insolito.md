---
title: Fertiprodige
id: a_abono_insolito
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Rayon
  value: 150 px autour de vous
- label: Étourdissement
  value: 0,67 s (pas les boss)
- label: Dégâts
  value: 1 à chaque ennemi touché
- label: Tirs ennemis
  value: Renvoyés loin de vous
icon: items-ps/mulch/amaze.png
sprite: true
names:
  en:
    name: Amaze Mulch
    desc: You knock back nearby enemies and shots, and stun the enemies
  es:
    name: Abono Insólito
    desc: Empujas lejos a los enemigos y disparos cercanos, y aturdes a los enemigos
  de:
    name: Ultramulch
    desc: Du stößt nahe Gegner und Schüsse weit weg und betäubst die Gegner
  it:
    name: Fertilprodigio
    desc: Spingi lontano i nemici e i tiri vicini, e stordisci i nemici
  pt:
    name: Adubo Incrível
    desc: Você empurra para longe inimigos e tiros próximos, e atordoa os inimigos
  ru:
    name: Чудесная мульча
    desc: Отбрасываешь ближних врагов и выстрелы и оглушаешь врагов
  ja:
    name: とんでもこやし
    desc: 近くの敵とショットを遠くへ押し飛ばし、敵を気絶させる
  ko:
    name: 기절초풍비료
    desc: 주변의 적과 탄을 멀리 밀어내고 적을 기절시킨다
  zh:
    name: 超效肥
    desc: 你会将附近的敌人和弹击退，并使敌人眩晕
  zt:
    name: 超效肥
    desc: 擊退附近的敵人和彈，並使敵人暈眩
---
Vous repoussez au loin les ennemis et les tirs proches, et étourdissez les ennemis

## Fonctionnement
- Chaque ennemi à moins de 150 px subit 1 point de dégâts. Ce coup ne déclenche ni vos objets ni vos statuts.
- Les ennemis à portée (sauf les boss) sont projetés loin et étourdis 0,67 seconde.
- Les boss à portée ne subissent que ce point de dégâts : ils ne sont ni repoussés ni étourdis.
- Les tirs ennemis à moins de 150 px sont retournés pour filer droit loin de vous, à la même vitesse. Ils restent des tirs ennemis.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : la vague part deux fois de suite (2 dégâts, nouvelle poussée).
