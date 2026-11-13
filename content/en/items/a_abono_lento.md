---
title: Damp Mulch
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
- label: Duration
  value: 6 s
- label: Enemies
  value: Walk at half speed
- label: Enemy shots
  value: Shots already flying go half as fast
icon: items-ps/mulch/damp.png
sprite: true
names:
  es:
    name: Abono Lento
    desc: Los enemigos de la sala van a cámara lenta 6 segundos
  fr:
    name: Fertihumide
    desc: Les ennemis de la salle passent au ralenti pendant 6 secondes
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
The room's enemies move in slow motion for 6 seconds

## How it works
- Every enemy in the room, bosses included, is slowed for 6 seconds: it walks at half speed. Their attacks themselves are not slowed.
- Every enemy shot already in the air is slowed to half its speed for the rest of its flight. Shots fired after you use it fly at normal speed.
- Only the enemies already in the room are affected.
- If there is nothing to affect, nothing happens and you keep the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): the slow lasts the same 6 seconds, but shots already in the air are slowed twice (a quarter of their speed).
