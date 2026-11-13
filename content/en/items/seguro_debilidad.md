---
title: Weakness Policy
id: seguro_debilidad
kind: passive
category: defense
family: core
tier: 4
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Trigger
  value: Each hit that hurts you
- label: Damage
  value: ×2
- label: Duration
  value: 5 seconds (renewed by each hit)
icon: items-ps/hold-item/weakness-policy.png
sprite: true
names:
  es:
    name: Seguro Debilidad
    desc: Al recibir un golpe, daño ×2 durante 5 segundos
  fr:
    name: Vulné-Assurance
    desc: Quand vous êtes touché, dégâts ×2 pendant 5 secondes
  de:
    name: Schwächenschutz
    desc: Wirst du getroffen, Schaden ×2 für 5 Sekunden
  it:
    name: Vulneropolizza
    desc: Quando vieni colpito, danni ×2 per 5 secondi
  pt:
    name: Seguro de Fraqueza
    desc: Ao receber um golpe, dano ×2 por 5 segundos
  ru:
    name: Страховка от слабости
    desc: При получении удара - урон ×2 на 5 секунд
  ja:
    name: じゃくてんほけん
    desc: 被弾すると、5秒間ダメージ×2
  ko:
    name: 약점보험
    desc: 맞으면 5초 동안 대미지 ×2
  zh:
    name: 弱点保险
    desc: 受到攻击时，伤害×2，持续5秒
  zt:
    name: 弱點保險
    desc: 受到攻擊時，傷害×2，持續5秒
---
When you get hit, damage ×2 for 5 seconds

## How it works
- After you take a hit, your Damage is multiplied by 2 for 5 seconds.
- Another hit during this time restarts the 5 seconds; the bonus never goes above ×2.
- It is a damage multiplier, so it counts toward the multiplier limits (see [Diminishing returns](../mechanics/rendimientos.html)).
- Hits that are blocked or dodged don't trigger it.

## Stacking
- It does not stack: a second copy adds nothing.
