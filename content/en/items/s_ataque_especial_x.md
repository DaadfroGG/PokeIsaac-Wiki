---
title: X Sp. Atk
id: s_ataque_especial_x
kind: passive
category: stats
family: core
tier: 4
pools:
- treasure
- boss
pool_weight: 1
stats:
- text: Damage +0.5
  good: true
details:
- label: Damage
  value: ×1.5 and +0.5
icon: items-ps/battle-item/x-sp-atk.png
sprite: true
names:
  es:
    name: Ataque Especial X
    desc: Daño ×1,5 y +0,5
  fr:
    name: Atq. Spé. +
    desc: Dégâts ×1,5 et +0,5
  de:
    name: X-Sp.-Ang.
    desc: Schaden ×1,5 und +0,5
  it:
    name: Att. Speciale X
    desc: Danni ×1,5 e +0,5
  pt:
    name: Ataque Especial X
    desc: Dano ×1,5 e +0,5
  ru:
    name: Спец. атака X
    desc: Урон ×1,5 и +0,5
  ja:
    name: とくこうアップ
    desc: ダメージ×1.5と+0.5
  ko:
    name: 스페셜업
    desc: 대미지 ×1.5, +0.5
  zh:
    name: 特攻强化
    desc: 伤害×1.5并+0.5
  zt:
    name: 特攻強化
    desc: 傷害×1.5並+0.5
---
Damage ×1.5 and +0.5

## Stacking

- **The ×1.5 does not stack.** A second copy still gives ×1.5, not ×2.25.
- **The +0.5 Damage stacks.** Each copy adds +0.5 to your Damage, so two copies give +1.
- With two copies, you get ×1.5 once and +1 Damage.

## How it adds up

- The ×1.5 is multiplied with your other damage multipliers from items. The total then goes through [diminishing returns](../mechanics/rendimientos.html): it counts in full up to ×2.3, only a quarter of anything above that counts, and the total never goes past ×3.
- The +0.5 is added to your other flat damage bonuses from items, which also go through [diminishing returns](../mechanics/rendimientos.html): the first +3 counts in full, then half up to +8, then a quarter up to +40, then 5 %.
