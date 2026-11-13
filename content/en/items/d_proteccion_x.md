---
title: Guard Spec.
id: d_proteccion_x
kind: passive
category: defense
family: defense
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Block
  value: 50 % of enemy shots from the front
- label: Front
  value: Within 60° of the direction you face
icon: items-ps/battle-item/guard-spec.png
sprite: true
names:
  es:
    name: Protección X
    desc: La mitad de los disparos enemigos que te llegan de frente no te hacen nada
  fr:
    name: Garde-Stats
    desc: La moitié des tirs ennemis qui vous arrivent de face ne vous font rien
  de:
    name: Megablock
    desc: Die Hälfte der gegnerischen Schüsse, die dich von vorn treffen, richtet nichts an
  it:
    name: Superguardia
    desc: Metà dei tiri nemici che ti arrivano di fronte non ti fanno nulla
  pt:
    name: Proteção X
    desc: Metade dos tiros inimigos que acertam você de frente não causa nada
  ru:
    name: Охрана X
    desc: Половина вражеских выстрелов, летящих в тебя спереди, не причиняет вреда
  ja:
    name: エフェクトガード
    desc: 正面から当たる敵の弾の半分は無効になる
  ko:
    name: 이펙트가드
    desc: 정면에서 날아오는 적의 탄 절반을 무효로 한다
  zh:
    name: 能力防守
    desc: 从正面射来的敌方弹有一半对你无效
  zt:
    name: 能力防守
    desc: 從正面射來的敵方彈有一半對你無效
---
Half of the enemy shots that hit you from the front do nothing

## How it works
- Each enemy shot that is about to hit you has a 50 % chance to be destroyed, but only if it comes from the front: within 60° of the direction you are aiming (or, if you aren't shooting, the direction you are moving; or the last one you aimed).
- The blocked shot disappears and you take no damage.
- It only affects shots. Enemy bodies and hazards are not blocked.

## Stacking
- It does not stack: a second copy adds nothing.
