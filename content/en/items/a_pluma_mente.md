---
title: Clever Feather
id: a_pluma_mente
kind: active
family: ability
tier: 2
pools:
- treasure
- angel
pool_weight: 2
charge: 3
details:
- label: Targets
  value: Up to 5 random enemies
- label: Damage
  value: Your Damage ×3 (min. 6), within 30 px
- label: Type
  value: Your type
icon: items-ps/medicine/clever-wing.png
sprite: true
names:
  es:
    name: Pluma Mente
    desc: Caen rayos de luz sobre hasta cinco enemigos (×3 de daño)
  fr:
    name: Plume Mental
    desc: Des rayons de lumière frappent jusqu'à cinq ennemis (×3 dégâts)
  de:
    name: Espritfeder
    desc: Lichtstrahlen fallen auf bis zu fünf Gegner (×3 Schaden)
  it:
    name: Piumintuito
    desc: Raggi di luce colpiscono fino a cinque nemici (danni ×3)
  pt:
    name: Pluma da Mente
    desc: Raios de luz caem sobre até cinco inimigos (×3 de dano)
  ru:
    name: Перо духа
    desc: Лучи света бьют до пяти врагов (×3 урона)
  ja:
    name: せいしんのハネ
    desc: 最大5体の敵に光線が降り注ぐ（ダメージ×3）
  ko:
    name: 정신력깃털
    desc: 최대 5마리의 적에게 빛줄기가 떨어진다 (대미지 ×3)
  zh:
    name: 精神之羽
    desc: 光束落在最多五个敌人身上（伤害×3）
  zt:
    name: 精神之羽
    desc: 光束落在最多五個敵人身上（×3傷害）
---
Beams of light strike up to five enemies (×3 damage)

## How it works
- A beam of light falls on up to 5 enemies chosen at random (all of them if there are 5 or fewer), bosses included.
- 0.1 seconds later, each beam hits every enemy within 30 px of that spot for 3 times your Damage (at least 6), with your type. Enemies close together can be hit by several beams.
- The beams can't be critical hits and don't trigger your items or statuses.
- If there is nothing to affect, nothing happens and you keep the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two rounds of beams fall (up to 10).
