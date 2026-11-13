---
title: Slowpoke Tail
id: cola_slowpoke
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Radius
  value: 150 px around you
- label: Enemy speed
  value: Halved (walking)
- label: Bosses
  value: Not affected
icon: items-ps/valuable-item/slowpoke-tail.png
sprite: true
names:
  es:
    name: Cola Slowpoke
    desc: Los enemigos que se acercan a ti (no los jefes) van a cámara lenta
  fr:
    name: Queue Ramoloss
    desc: Les ennemis qui s'approchent de vous (pas les boss) passent au ralenti
  de:
    name: Flegmon-Rute
    desc: Gegner, die dir nahe kommen (keine Bosse), bewegen sich in Zeitlupe
  it:
    name: Coda Slowpoke
    desc: I nemici che si avvicinano a te (non i boss) vanno al rallentatore
  pt:
    name: Cauda de Slowpoke
    desc: Os inimigos que se aproximam de você (não os chefes) ficam em câmera lenta
  ru:
    name: Хвост Слоупока
    desc: Враги, подходящие к тебе (не боссы), замедляются
  ja:
    name: おいしいシッポ
    desc: 近づいてきた敵（ボス以外）がスローモーションになる
  ko:
    name: 맛있는꼬리
    desc: 가까이 다가온 적(보스 제외)이 슬로 모션이 된다
  zh:
    name: 美味尾巴
    desc: 靠近你的敌人（首领除外）进入慢动作
  zt:
    name: 美味尾巴
    desc: 靠近你的敵人（頭目除外）會進入慢動作
---
Enemies that get close to you (not bosses) move in slow motion

## How it works
- Every regular enemy within 150 px of you walks at half speed. As soon as it is farther away, it walks normally again.
- It only slows how fast enemies walk: their attacks, projectiles and dashes are not slowed.
- Bosses are not affected.
- In co-op it works around any living player who carries it, and benefits the whole team near that player.
- It multiplies with other slows: next to a [Lagging Tail](cola_plumbea.html) an enemy walks at 0.5 × 0.8 of its normal speed, and at a quarter of it if it is also slowed.

## Stacking
- It is an on/off effect: a second Slowpoke Tail does not slow enemies further.
