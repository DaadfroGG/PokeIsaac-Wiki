---
title: Rocky Helmet
id: casco_dentado
kind: passive
category: defense
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Trigger
  value: Each hit that hurts you
- label: Radius
  value: 120 px
- label: Damage
  value: Twice your Damage (at least 3)
icon: items-ps/hold-item/rocky-helmet.png
sprite: true
names:
  es:
    name: Casco Dentado
    desc: Al recibir un golpe, dañas a todos los enemigos cercanos
  fr:
    name: Casque Brut
    desc: Quand vous êtes touché, vous blessez tous les ennemis proches
  de:
    name: Beulenhelm
    desc: Wirst du getroffen, verletzt du alle Gegner in der Nähe
  it:
    name: Bitorzolelmo
    desc: Quando vieni colpito, danneggi tutti i nemici vicini
  pt:
    name: Capacete Rochoso
    desc: Ao receber um golpe, você fere todos os inimigos próximos
  ru:
    name: Шипастый шлем
    desc: Получая удар, ты ранишь всех врагов рядом
  ja:
    name: ゴツゴツメット
    desc: 被弾すると、近くの敵全員にダメージを与える
  ko:
    name: 울퉁불퉁멧
    desc: 맞으면 근처 모든 적에게 대미지를 준다
  zh:
    name: 凸凸头盔
    desc: 受到攻击时，会伤害周围所有敌人
  zt:
    name: 凸凸頭盔
    desc: 受到攻擊時，對附近所有敵人造成傷害
---
When you get hit, you damage all nearby enemies

## How it works
- After you take a hit, a burst hits every enemy within 120 px of you, bosses included.
- Each one takes twice your Damage (at least 3).
- It triggers on every hit and has no cooldown. It does not trigger if the hit was blocked or dodged.
- These are plain damage hits: they don't apply your shot effects or type bonuses.

## Stacking
- It does not stack: a second copy adds nothing.
