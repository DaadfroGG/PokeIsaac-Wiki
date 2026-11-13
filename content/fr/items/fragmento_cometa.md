---
title: Morceau Comète
id: fragmento_cometa
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Dégâts
  value: '25 % des PV max de chaque ennemi (boss : 8 %), au moins 3'
- label: Quand
  value: Une fois par salle, en entrant dans un combat
- label: Délai
  value: Environ 0,4 s, une fois tous les ennemis apparus (5 s au plus)
icon: items-ps/valuable-item/comet-shard.png
sprite: true
names:
  en:
    name: Comet Shard
    desc: When you enter each fight, a comet falls and hurts all enemies
  es:
    name: Fragmento Cometa
    desc: Al entrar en cada combate cae un cometa que hiere a todos los enemigos
  de:
    name: Kometstück
    desc: Zu Beginn jedes Kampfes fällt ein Komet, der alle Gegner verletzt
  it:
    name: Pezzo Cometa
    desc: Entrando in ogni scontro, cade una cometa che ferisce tutti i nemici
  pt:
    name: Fragmento de Cometa
    desc: Ao entrar em cada combate, um cometa cai e fere todos os inimigos
  ru:
    name: Осколок кометы
    desc: При входе в каждый бой падает комета и ранит всех врагов
  ja:
    name: すいせいのかけら
    desc: 戦闘に入るたび、彗星が落ちて敵全員にダメージを与える
  ko:
    name: 혜성조각
    desc: 전투에 들어갈 때마다 혜성이 떨어져 모든 적에게 대미지를 준다
  zh:
    name: 彗星碎片
    desc: 每次进入战斗时会落下一颗彗星，伤害所有敌人
  zt:
    name: 彗星碎片
    desc: 每場戰鬥開始時，會落下一顆彗星，傷害所有敵人
---
À chaque combat, une comète tombe et blesse tous les ennemis

## Fonctionnement
- Quand vous entrez dans une salle qui a encore des ennemis, une comète est programmée. Elle tombe environ 0,4 s plus tard, mais elle attend que tous les ennemis aient fini d'apparaître et puissent être touchés (au plus tard après 5 s).
- Elle frappe **tous les ennemis de la salle**, où qu'ils soient : chacun perd 25 % de ses PV maximum (au moins 3 dégâts). Les boss ne perdent que 8 % de leurs PV maximum.
- C'est un pourcentage : ça ne dépend ni de vos Dégâts, ni de votre type, ni de vos objets, et ça ne fait jamais de coup critique.
- Une seule comète par salle : sortir puis revenir dans une salle pas finie n'en amène pas une deuxième.
- En coop, une comète tombe si quelqu'un dans l'équipe la porte.

## Cumul
- Un deuxième exemplaire ne fait rien de plus : toujours une comète par salle.
