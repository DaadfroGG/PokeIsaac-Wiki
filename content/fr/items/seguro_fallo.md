---
title: Assurance Échec
id: seguro_fallo
kind: passive
category: shot
family: core
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Déclencheur
  value: Un tir s'arrête contre un mur, un rocher ou un obstacle
- label: Tir suivant
  value: ×2 dégâts et 30 % plus gros
- label: Charges
  value: 1 à la fois
icon: items-ps/hold-item/blunder-policy.png
sprite: true
names:
  en:
    name: Blunder Policy
    desc: If a shot hits a wall, the next one deals double damage
  es:
    name: Seguro Fallo
    desc: Si un disparo choca con la pared, el siguiente pega el doble
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
Si un tir touche un mur, le suivant inflige le double de dégâts

## Fonctionnement
- Quand un de vos tirs est arrêté par un mur, un rocher ou un obstacle, le prochain tir que vous lancez inflige le double de dégâts et est 30 % plus gros.
- Un tir qui arrive simplement au bout de sa portée ne compte pas, pas plus que les tirs divisés et autres tirs secondaires.
- Un seul tir est renforcé, même si plusieurs tirs ont touché un mur avant : les ratés ne s'additionnent pas.
- Le ×2 s'applique quand le tir part : il n'apparaît donc pas dans la stat Dégâts du HUD et n'est pas limité par le plafond de ×3 des multiplicateurs de dégâts.

## Cumul
- Un deuxième exemplaire n'apporte rien de plus : toujours ×2 sur un tir.
