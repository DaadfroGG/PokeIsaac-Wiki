---
title: Fertihumide
id: a_abono_lento
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Durée
  value: 6 s
- label: Ennemis
  value: Marchent à moitié vitesse
- label: Tirs ennemis
  value: Les tirs déjà lancés vont deux fois moins vite
icon: items-ps/mulch/damp.png
sprite: true
names:
  en:
    name: Damp Mulch
    desc: The room's enemies move in slow motion for 6 seconds
  es:
    name: Abono Lento
    desc: Los enemigos de la sala van a cámara lenta 6 segundos
  de:
    name: Feuchtmulch
    desc: Die Gegner im Raum bewegen sich 6 Sekunden in Zeitlupe
  it:
    name: Fertilidro
    desc: I nemici della stanza vanno al rallentatore per 6 secondi
  pt:
    name: Adubo Úmido
    desc: Os inimigos da sala ficam em câmera lenta por 6 segundos
  ru:
    name: Влажная мульча
    desc: Враги в комнате замедляются на 6 секунд
  ja:
    name: じめじめこやし
    desc: 部屋の敵が6秒間スローモーションになる
  ko:
    name: 축축이비료
    desc: 방 안의 적이 6초 동안 슬로 모션이 된다
  zh:
    name: 湿湿肥
    desc: 房间内的敌人进入慢动作6秒
  zt:
    name: 濕濕肥
    desc: 房間內的敵人進入慢動作6秒
---
Les ennemis de la salle passent au ralenti pendant 6 secondes

## Fonctionnement
- Tous les ennemis de la salle, boss compris, sont ralentis 6 secondes : ils marchent à moitié vitesse. Leurs attaques elles-mêmes ne sont pas ralenties.
- Chaque tir ennemi déjà en vol passe à la moitié de sa vitesse jusqu'à la fin de sa course. Les tirs lancés après l'utilisation volent normalement.
- Seuls les ennemis déjà présents sont touchés.
- S'il n'y a rien à affecter, rien ne se passe et vous gardez la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : le ralentissement dure les mêmes 6 secondes, mais les tirs déjà en vol sont ralentis deux fois (un quart de leur vitesse).
