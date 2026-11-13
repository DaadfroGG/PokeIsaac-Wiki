---
title: Ralentiqueue
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
- label: Vitesse des ennemis
  value: −20 % (marche)
- label: Boss
  value: Non affectés
icon: items-ps/hold-item/lagging-tail.png
sprite: true
names:
  en:
    name: Lagging Tail
    desc: Enemies (not bosses) move 20 % slower
  es:
    name: Cola Plúmbea
    desc: Los enemigos (no los jefes) se mueven un 20 % más despacio
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
Les ennemis (pas les boss) se déplacent 20 % plus lentement

## Fonctionnement
- Tous les ennemis ordinaires marchent 20 % plus lentement, dans toutes les salles, dès que vous le ramassez.
- Il ne ralentit que leur vitesse de marche : leurs attaques, projectiles et charges ne sont pas ralentis.
- Les boss ne sont pas affectés.
- Il se multiplie avec les autres ralentissements : un ennemi ralenti (mi-vitesse) près d'une [Queue Ramoloss](cola_slowpoke.html) marche à 0,8 × 0,5 × 0,5 de sa vitesse normale.

## Cumul
- C'est un effet tout ou rien : un second Ralentiqueue ne ralentit pas davantage les ennemis. Si un coéquipier en coop en a un aussi, cela ne compte qu'une fois.
