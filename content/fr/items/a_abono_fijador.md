---
title: Fertistable
id: a_abono_fijador
kind: active
family: ability
tier: 2
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Ennemis
  value: Changés en pierre 4 s
- label: Boss
  value: Seulement ralentis 4 s (moitié de la vitesse de marche)
icon: items-ps/mulch/stable.png
sprite: true
names:
  en:
    name: Stable Mulch
    desc: The room's enemies turn to stone for 4 seconds (bosses are only slowed)
  es:
    name: Abono Fijador
    desc: Los enemigos de la sala se quedan de piedra 4 segundos (los jefes, solo frenados)
  de:
    name: Stabilmulch
    desc: Die Gegner im Raum erstarren 4 Sekunden zu Stein (Bosse werden nur verlangsamt)
  it:
    name: Fertilsaldo
    desc: I nemici della stanza si pietrificano per 4 secondi (i boss vengono solo rallentati)
  pt:
    name: Adubo Estável
    desc: Os inimigos da sala viram pedra por 4 segundos (os chefes só ficam lentos)
  ru:
    name: Стойкая мульча
    desc: Враги в комнате каменеют на 4 секунды (боссы только замедляются)
  ja:
    name: ながながこやし
    desc: 部屋の敵が4秒間石になる（ボスは減速のみ）
  ko:
    name: 오래오래비료
    desc: 방 안의 적이 4초 동안 돌처럼 굳는다(보스는 느려지기만 한다)
  zh:
    name: 久久肥
    desc: 房间内的敌人石化4秒（首领仅减速）
  zt:
    name: 久久肥
    desc: 房間內的敵人石化4秒（頭目僅減速）
---
Les ennemis de la salle sont pétrifiés 4 secondes (les boss sont seulement ralentis)

## Fonctionnement
- Tous les ennemis de la salle sont pétrifiés pendant 4 secondes : ils ne peuvent ni bouger ni attaquer, et prennent une teinte gris-bleu.
- Les boss ne sont pas pétrifiés : ils sont ralentis 4 secondes à la place, ce qui divise par deux leur vitesse de marche entre leurs attaques.
- Seuls les ennemis déjà présents sont touchés ; ceux qui apparaissent ensuite bougent normalement.
- S'il n'y a rien à affecter, rien ne se passe et vous gardez la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : le second effet relance juste les mêmes 4 secondes.
