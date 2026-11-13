---
title: Black Glasses
id: gafas_sol
kind: passive
category: shot
family: core
tier: 2
pool_weight: 2
stats:
- text: Damage +0.3
  good: true
details:
- label: Damage
  value: '+0.3'
- label: Crit chance
  value: +8 % (per copy)
- label: Stun
  value: 0.75 s on a critical hit, not bosses
icon: items/black-glasses.png
sprite: true
names:
  es:
    name: Gafas de Sol
    desc: 'Golpes críticos que deslumbran: el enemigo se queda quieto'
  fr:
    name: Lunettes Noires
    desc: 'Coups critiques éblouissants : l''ennemi reste immobile'
  de:
    name: Schattenbrille
    desc: 'Volltreffer, die blenden: Der Gegner bleibt stehen'
  it:
    name: Occhialineri
    desc: 'Colpi critici che abbagliano: il nemico resta fermo'
  pt:
    name: Óculos Escuros
    desc: 'Golpes críticos que ofuscam: o inimigo fica parado'
  ru:
    name: Черные очки
    desc: 'Ослепляющие криты: враг замирает на месте'
  ja:
    name: くろいメガネ
    desc: まぶしい急所攻撃：敵が動きを止める
  ko:
    name: 검은안경
    desc: '눈부신 급소: 적이 그 자리에 멈춘다'
  zh:
    name: 黑色眼镜
    desc: 令敌人目眩的暴击：敌人会愣在原地
  zt:
    name: 黑色眼鏡
    desc: 會心一擊令敵人目眩：敵人會定住不動
---
Dazzling critical hits: the enemy freezes in place

## How it works
- It gives the usual +8 % chance of a critical hit, on top of the Fighting/Dark and Luck bonuses (see [critical hits](../mechanics/criticos.html)).
- Any enemy hit by a critical shot is stunned for 0.75 s: it stops moving and attacking. The stun is applied on the hit itself, so it works with every source of crits (including the guaranteed crit of the [Normal Gem](gema_normal.html)).
- Bosses are never stunned; they still take the crit damage.
- Only crits from your shots count; burn, poison and chain bolts do not stun.

## Stacking
- Damage +0.3 and +8 % crit chance are added for each copy.
- The stun is on or off: more copies do not make it last longer.
