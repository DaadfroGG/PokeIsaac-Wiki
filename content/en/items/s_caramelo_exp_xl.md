---
title: Exp. Candy XL
id: s_caramelo_exp_xl
kind: passive
category: stats
family: core
tier: 3
pools:
- boss
pool_weight: 2
stats:
- text: Damage +0.5
  good: true
- text: Fire rate +
  good: true
- text: Speed +0.2
  good: true
- text: Range +40
  good: true
- text: Hearts +1
  good: true
- text: Heals 1 heart
  good: true
details:
- label: Damage
  value: '+0.5'
- label: Fire rate
  value: +1 (0.017 s less between shots)
- label: Speed
  value: '+0.2'
- label: Range
  value: +40 px
- label: Max HP
  value: +1 heart
- label: Healing
  value: 1 heart when picked up
icon: items-ps/exp-candy/xl.png
sprite: true
names:
  es:
    name: Caramelo Exp. XL
    desc: 'Un poco de todo: daño, cadencia, velocidad, alcance y un corazón'
  fr:
    name: Bonbon Exp. XL
    desc: 'Un peu de tout : dégâts, cadence, vitesse, portée et un cœur'
  de:
    name: EP-Bonbon XL
    desc: 'Ein bisschen von allem: Schaden, Feuerrate, Tempo, Reichweite und ein Herz'
  it:
    name: Caram. Esp. XL
    desc: 'Un po'' di tutto: danni, cadenza, velocità, gittata e un cuore'
  pt:
    name: Doce Exp. XL
    desc: 'Um pouco de tudo: dano, cadência, velocidade, alcance e um coração'
  ru:
    name: Конфета опыта XL
    desc: 'Всего понемногу: урон, темп стрельбы, скорость, дальность и сердце'
  ja:
    name: けいけんアメＸＬ
    desc: 全部少しずつ：ダメージ、連射、速度、射程、ハート1つ
  ko:
    name: 경험사탕XL
    desc: '조금씩 전부: 대미지, 연사, 속도, 사거리, 하트 1칸'
  zh:
    name: 经验糖果ＸＬ
    desc: 全面小幅提升：伤害、射速、速度、射程和一颗心
  zt:
    name: 經驗糖果ＸＬ
    desc: 樣樣都有：傷害、射速、速度、射程和一顆愛心
---
A bit of everything: damage, fire rate, speed, range and a heart

## How it works
- The +0.5 Damage is a flat bonus: it adds up with your other flat bonuses and follows the [diminishing returns](../mechanics/rendimientos.html) (in full up to +3 in total, then less and less).
- Fire rate +1: 0.017 s less between shots. Fire-rate bonuses follow the [diminishing returns](../mechanics/rendimientos.html): the first 3 points in total count in full, the next 4 at half, the rest at a quarter. You never shoot more than 12 times per second.
- Speed +0.2 has no diminishing returns. Your speed never goes below 1.6.
- Range +40: your shots travel 40 px farther, with no diminishing returns.
- One more heart container, up to the limit of 12 hearts. At 12 hearts you get no container, but the heal still applies.
- It heals 1 heart when you pick it up; this heal ignores the healing limit.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Damage and Fire rate) and its heal.
