---
title: Atq. Spé. +
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
- text: Dégâts +0,5
  good: true
details:
- label: Dégâts
  value: ×1,5 et +0,5
icon: items-ps/battle-item/x-sp-atk.png
sprite: true
names:
  en:
    name: X Sp. Atk
    desc: Damage ×1.5 and +0.5
  es:
    name: Ataque Especial X
    desc: Daño ×1,5 y +0,5
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
Dégâts ×1,5 et +0,5

## Cumul

- **Le ×1,5 ne se cumule pas.** Un second exemplaire donne toujours ×1,5, pas ×2,25.
- **Le +0,5 de Dégâts se cumule.** Chaque exemplaire ajoute +0,5 à vos Dégâts, donc deux exemplaires donnent +1.
- Avec deux exemplaires, vous avez ×1,5 une seule fois et +1 de Dégâts.

## Comment ça s'additionne

- Le ×1,5 est multiplié avec vos autres multiplicateurs de dégâts venant d'objets. Le total passe ensuite par les [rendements décroissants](../mechanics/rendimientos.html) : il compte en entier jusqu'à ×2,3, seulement un quart de ce qui dépasse compte, et le total ne dépasse jamais ×3.
- Le +0,5 s'ajoute à vos autres bonus de dégâts fixes venant d'objets, qui passent aussi par les [rendements décroissants](../mechanics/rendimientos.html) : les +3 premiers comptent en entier, puis la moitié jusqu'à +8, puis un quart jusqu'à +40, puis 5 %.
