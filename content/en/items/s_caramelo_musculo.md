---
title: Mighty Candy
id: s_caramelo_musculo
kind: passive
category: stats
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Damage +0.6
  good: true
- text: Speed +0.3
  good: true
details:
- label: Damage
  value: '+0.6'
- label: Speed
  value: '+0.3'
icon: items-ps/av-candy/mighty.png
sprite: true
names:
  es:
    name: Caramelo Músculo
    desc: Daño + y velocidad +
  fr:
    name: Bonbon Force S
    desc: Dégâts + et vitesse +
  de:
    name: Stärkebonbon
    desc: Schaden + und Tempo +
  it:
    name: Caramella potenza S
    desc: Danni + e velocità +
  pt:
    name: Doce Poder
    desc: Dano + e velocidade +
  ru:
    name: Конфета силы
    desc: Урон + и скорость +
  ja:
    name: ちからのアメ
    desc: ダメージ+、移動速度+
  ko:
    name: 힘의사탕
    desc: 대미지 +, 속도 +
  zh:
    name: 力量糖果
    desc: 伤害+，速度+
  zt:
    name: 力量糖果
    desc: 傷害+、速度+
---
Damage + and speed +

## How it works
- The +0.6 Damage is a flat bonus: it adds up with your other flat bonuses and follows the [diminishing returns](../mechanics/rendimientos.html) (in full up to +3 in total, then less and less).
- Speed +0.3 has no diminishing returns. Your speed never goes below 1.6.
- **Real effect** for a typical Pokémon (4 damage, 4.3 shots/s, speed 4, range 350 px, shot speed 9, 4 hearts), first copy only: Damage +0.6: 4 → 4.6 (+15 %) · Speed +0.3: 4 → 4.3 (+8 %). See [Stats in practice](../mechanics/estadisticas_reales.html) for how the totals behave.

## Stacking
- Everything stacks: each copy adds its stats again (with the diminishing returns on Damage).
