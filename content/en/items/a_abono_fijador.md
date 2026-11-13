---
title: Stable Mulch
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
- label: Enemies
  value: Turned to stone 4 s
- label: Bosses
  value: Only slowed 4 s (half walking speed)
icon: items-ps/mulch/stable.png
sprite: true
names:
  es:
    name: Abono Fijador
    desc: Los enemigos de la sala se quedan de piedra 4 segundos (los jefes, solo frenados)
  fr:
    name: Fertistable
    desc: Les ennemis de la salle sont pétrifiés 4 secondes (les boss sont seulement ralentis)
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
The room's enemies turn to stone for 4 seconds (bosses are only slowed)

## How it works
- Every enemy in the room is petrified for 4 seconds: it can't move or attack, and it is tinted grey-blue.
- Bosses aren't petrified: they are slowed for 4 seconds instead, which halves their walking speed between attacks.
- Only the enemies already in the room are affected; enemies that appear afterwards move normally.
- If there is nothing to affect, nothing happens and you keep the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: the second effect just restarts the same 4 seconds.
