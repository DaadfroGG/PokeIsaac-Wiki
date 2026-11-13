---
title: Queue Ramoloss
id: cola_slowpoke
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Rayon
  value: 150 px autour de vous
- label: Vitesse des ennemis
  value: Divisée par 2 (marche)
- label: Boss
  value: Non affectés
icon: items-ps/valuable-item/slowpoke-tail.png
sprite: true
names:
  en:
    name: Slowpoke Tail
    desc: Enemies that get close to you (not bosses) move in slow motion
  es:
    name: Cola Slowpoke
    desc: Los enemigos que se acercan a ti (no los jefes) van a cámara lenta
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
Les ennemis qui s'approchent de vous (pas les boss) passent au ralenti

## Fonctionnement
- Tout ennemi ordinaire à moins de 150 px de vous marche à mi-vitesse. Dès qu'il s'éloigne, il remarche normalement.
- Il ne ralentit que leur vitesse de marche : leurs attaques, projectiles et charges ne sont pas ralentis.
- Les boss ne sont pas affectés.
- En coop, il agit autour de tout joueur en vie qui le porte, au profit de toute l'équipe proche de ce joueur.
- Il se multiplie avec les autres ralentissements : avec un [Ralentiqueue](cola_plumbea.html), un ennemi marche à 0,5 × 0,8 de sa vitesse normale, et à un quart s'il est aussi ralenti.

## Cumul
- C'est un effet tout ou rien : une seconde Queue Ramoloss ne ralentit pas davantage les ennemis.
