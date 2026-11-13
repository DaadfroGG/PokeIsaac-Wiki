---
title: Sun Flute
id: flauta_solar
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 2
details:
- label: Shots
  value: Up to 40, now yours
- label: Damage
  value: Your Damage (at least 2)
- label: Aim
  value: Each one at the nearest enemy
icon: items-ps/key-item/sun-flute.png
sprite: true
names:
  es:
    name: Flauta Solar
    desc: Los disparos enemigos de la sala cambian de bando y van a por los enemigos
  fr:
    name: Flûte du Soleil
    desc: Les tirs ennemis de la salle changent de camp et visent les ennemis
  de:
    name: Sonnenflöte
    desc: Gegnerische Schüsse im Raum wechseln die Seite und gehen auf die Gegner los
  it:
    name: Flauto solare
    desc: I tiri nemici della stanza cambiano schieramento e vanno contro i nemici
  pt:
    name: Flauta Solar
    desc: Os tiros inimigos da sala mudam de lado e vão atrás dos inimigos
  ru:
    name: Солнечная флейта
    desc: Выстрелы врагов в комнате переходят на твою сторону и летят во врагов
  ja:
    name: たいようのふえ
    desc: 部屋の敵の弾が寝返って、敵を狙う
  ko:
    name: 태양의피리
    desc: 방 안의 적 탄이 편을 바꿔 적을 노린다
  zh:
    name: 太阳之笛
    desc: 房间内的敌方弹会倒戈，转而攻击敌人
  zt:
    name: 太陽之笛
    desc: 房間內的敵方彈會倒戈，轉而攻擊敵人
---
Enemy shots in the room switch sides and go after enemies

## How it works
- Up to 40 enemy shots in the room become your shots. Each one turns toward the enemy nearest to it and flies there.
- Each converted shot deals your Damage (at least 2) with your type, carries your shot bonuses and statuses, and flies up to 520 px. Its size depends on the original shot.
- They count as extra shots, so effects that only work on your main shots don't trigger on them.
- They hit bosses too, so a boss's bullet pattern can be sent back at it.
- With no enemy shot in the room, nothing happens and you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): a second wave converts up to 40 more enemy shots, if there are any left.
