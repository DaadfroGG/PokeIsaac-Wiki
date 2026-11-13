---
title: Holokit
id: a_holomisor
kind: active
family: ability
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 2
details:
- label: Cible
  value: L'ennemi le plus proche
- label: Délai
  value: 0,57 s
- label: Explosion
  value: 80 px, vos Dégâts ×10 (min. 20)
icon: items-ps/key-item/holo-caster.png
sprite: true
names:
  en:
    name: Holo Caster
    desc: 'You call in an air strike: a meteor falls on the nearest enemy'
  es:
    name: Holomisor
    desc: 'Pides un ataque aéreo: cae un meteorito sobre el enemigo más cercano'
  de:
    name: Holo-Log
    desc: 'Du forderst einen Luftangriff an: Ein Meteorit fällt auf den nächsten Gegner'
  it:
    name: Holovox
    desc: 'Chiami un attacco aereo: un meteorite cade sul nemico più vicino'
  pt:
    name: Holo Caster
    desc: 'Você pede um ataque aéreo: cai um meteoro sobre o inimigo mais próximo'
  ru:
    name: Голокастер
    desc: 'Вызываешь авиаудар: метеорит падает на ближайшего врага'
  ja:
    name: ホロキャスター
    desc: 空爆を要請：いちばん近い敵に隕石が落ちる
  ko:
    name: 홀로캐스터
    desc: '공습 요청: 가장 가까운 적에게 운석이 떨어진다'
  zh:
    name: 全息影像通讯器
    desc: 呼叫空袭：一颗陨石落在最近的敌人身上
  zt:
    name: 全像投影通訊器
    desc: 呼叫空襲：一顆隕石會落在最近的敵人身上
---
Vous appelez une frappe aérienne : un météore tombe sur l'ennemi le plus proche

## Fonctionnement
- Une cible apparaît sur l'ennemi le plus proche de vous, et un météore y tombe 0,57 seconde plus tard. Il tombe là où était l'ennemi, donc un ennemi rapide peut s'en écarter.
- L'explosion touche chaque ennemi à moins de 80 px pour 10 fois vos Dégâts (au moins 20). Elle peut être un [coup critique](../mechanics/criticos.html) et déclenche les effets au toucher de vos objets. Les boss aussi la subissent.
- Elle ne vous blesse pas. Comme une bombe, elle casse les rochers et les caisses proches et ouvre les portes de salle secrète cachées juste à côté.
- S'il n'y a rien à affecter, rien ne se passe et vous gardez la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux météores tombent sur la même cible.
