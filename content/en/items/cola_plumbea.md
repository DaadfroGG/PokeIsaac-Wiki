---
title: Lagging Tail
id: cola_plumbea
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Enemy speed
  value: −20 % (walking)
- label: Bosses
  value: Not affected
icon: items-ps/hold-item/lagging-tail.png
sprite: true
names:
  es:
    name: Cola Plúmbea
    desc: Los enemigos (no los jefes) se mueven un 20 % más despacio
  fr:
    name: Ralentiqueue
    desc: Les ennemis (pas les boss) se déplacent 20 % plus lentement
  de:
    name: Schwerschweif
    desc: Gegner (keine Bosse) bewegen sich 20 % langsamer
  it:
    name: Rallentocoda
    desc: I nemici (non i boss) si muovono più lentamente del 20 %
  pt:
    name: Cauda Pesada
    desc: Os inimigos (não os chefes) se movem 20% mais devagar
  ru:
    name: Свинцовый хвост
    desc: Враги (не боссы) двигаются на 20 % медленнее
  ja:
    name: こうこうのしっぽ
    desc: 敵（ボス以外）の移動が20%遅くなる
  ko:
    name: 느림보꼬리
    desc: 적(보스 제외)이 20% 느리게 움직인다
  zh:
    name: 后攻之尾
    desc: 敌人（首领除外）的移动速度降低20 %
  zt:
    name: 後攻之尾
    desc: 敵人（頭目除外）的移動速度降低20 %
---
Enemies (not bosses) move 20 % slower

## How it works
- All regular enemies walk 20 % slower, in every room, from the moment you pick it up.
- It only slows how fast enemies walk: their attacks, projectiles and dashes are not slowed.
- Bosses are not affected.
- It multiplies with other slows: a slowed enemy (half speed) near a [Slowpoke Tail](cola_slowpoke.html) walks at 0.8 × 0.5 × 0.5 of its normal speed.

## Stacking
- It is an on/off effect: a second Lagging Tail does not slow enemies further. If a teammate in co-op also has one, it still counts only once.
