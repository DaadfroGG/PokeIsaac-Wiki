---
title: Blunder Policy
id: seguro_fallo
kind: passive
category: shot
family: core
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Trigger
  value: A shot dies against a wall, rock or obstacle
- label: Next shot
  value: ×2 damage and 30 % bigger
- label: Charges
  value: 1 at a time
icon: items-ps/hold-item/blunder-policy.png
sprite: true
names:
  es:
    name: Seguro Fallo
    desc: Si un disparo choca con la pared, el siguiente pega el doble
  fr:
    name: Assurance Échec
    desc: Si un tir touche un mur, le suivant inflige le double de dégâts
  de:
    name: Fehlschlagschutz
    desc: Wenn ein Schuss gegen die Wand trifft, richtet der nächste doppelten Schaden an
  it:
    name: Fiascopolizza
    desc: Se un tiro colpisce la parete, il successivo infligge il doppio dei danni
  pt:
    name: Seguro de Falha
    desc: Se um tiro bater na parede, o próximo causa o dobro de dano
  ru:
    name: Страховка от промаха
    desc: Если выстрел попадает в стену, следующий бьет вдвое сильнее
  ja:
    name: からぶりほけん
    desc: ショットが壁に当たると、次のショットのダメージが2倍になる
  ko:
    name: 허탕보험
    desc: 탄이 벽에 맞으면 다음 탄의 대미지가 2배가 된다
  zh:
    name: 打空保险
    desc: 弹撞上墙壁后，下一发伤害翻倍
  zt:
    name: 打空保險
    desc: 彈撞到牆壁後，下一發傷害加倍
---
If a shot hits a wall, the next one deals double damage

## How it works
- When one of your shots is stopped by a wall, a rock or an obstacle, the next shot you fire deals double damage and is 30 % bigger.
- A shot that simply reaches the end of its range doesn't count, and neither do split shots and other side shots.
- Only one shot is boosted, even if several shots hit a wall before it: misses don't add up.
- The ×2 is applied when the shot is fired, so it doesn't show in the Damage stat on the HUD and is not limited by the ×3 cap on damage multipliers.

## Stacking
- A second copy does nothing more: still ×2 on one shot.
