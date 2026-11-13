---
title: Binding Band
id: banda_atadura
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Damage
  value: +30 % to slowed enemies
- label: Slow
  value: Every hit slows 1.5 s
- label: Bosses
  value: Slowed and damaged too
icon: items-ps/hold-item/binding-band.png
sprite: true
names:
  es:
    name: Banda Atadura
    desc: Los enemigos ralentizados reciben un 30 % más de daño (frenar es de los tipos Hielo y Agua)
  fr:
    name: Bande Étreinte
    desc: Les ennemis ralentis subissent 30 % de dégâts en plus (ralentir est propre aux types Glace et Eau)
  de:
    name: Klammerband
    desc: Verlangsamte Gegner erleiden 30 % mehr Schaden (Verlangsamen gehört zu den Typen Eis und Wasser)
  it:
    name: Legafascia
    desc: I nemici rallentati subiscono il 30 % di danni in più (rallentare è dei tipi Ghiaccio e Acqua)
  pt:
    name: Faixa Atadora
    desc: Os inimigos desacelerados recebem 30% a mais de dano (frear é dos tipos Gelo e Água)
  ru:
    name: Связывающая повязка
    desc: Замедленные враги получают на 30 % больше урона (замедление - у типов Лед и Вода)
  ja:
    name: しめつけバンド
    desc: 足止めされた敵は30%多くダメージを受ける（足止めはこおりとみずタイプ）
  ko:
    name: 조임밴드
    desc: 감속된 적은 대미지를 30% 더 받는다(감속은 얼음과 물 타입의 몫)
  zh:
    name: 紧绑束带
    desc: 被减速的敌人受到的伤害+30%（减速属于冰和水属性）
  zt:
    name: 緊綁束帶
    desc: 被減速的敵人會多受到30%傷害（減速屬於冰和水屬性）
---
Slowed enemies take 30% more damage (slowing belongs to the Ice and Water types)

## How it works
- Your shots slow every enemy they hit for 1.5 seconds (the timer restarts on each hit). A slowed enemy walks at half speed.
- Every hit you land on a slowed enemy deals 30 % more damage. In practice, from your second hit onward the bonus is almost always active, because your own shots keep the enemy slowed.
- The slow also comes from [Ice and Water passives](../mechanics/estados.html) and any other source of slow: the 30 % applies to any slowed enemy, whatever slowed it.
- Bosses are slowed too (their walking only, between attacks) and take the extra 30 %.
- The +30 % is applied when the shot lands, so it does not show in your Damage on the HUD and is not limited by the ×3 multiplier cap.

## Stacking
- The slow effect is on/off, and the +30 % is not cumulative: a second Binding Band changes nothing.
- It multiplies with other on-hit bonuses: against a slowed boss, the [Expert Belt](cinta_experto.html) makes it ×1.3 × 1.3 = ×1.69.
