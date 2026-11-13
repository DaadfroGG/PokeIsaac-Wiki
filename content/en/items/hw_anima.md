---
title: Anima Stone
id: hw_anima
kind: passive
category: defense
family: supersecret
tier: 1
pools:
- supersecret
pool_weight: 1
details:
- label: When you defeat an enemy
  value: Its soul strikes the nearest one
- label: Damage
  value: 10 % of its max health (bosses 2 %), at least your damage
- label: Range
  value: 300 px
icon: items-ps/key-item/dark-stone.png
sprite: true
names:
  es:
    name: Piedra Ánima
    desc: Cuando un enemigo cae, su alma salta al enemigo más cercano y le quita un 10 % de su vida máxima (a los jefes, un 2 %).
  fr:
    name: Pierre Anima
    desc: Quand un ennemi tombe, son âme bondit sur l'ennemi le plus proche et lui retire 10 % de sa vie max (2 % aux boss).
  de:
    name: Animastein
    desc: Fällt ein Gegner, springt seine Seele auf den nächsten Gegner und nimmt ihm 10 % seines max. Lebens (Bossen 2 %).
  it:
    name: Pietra Anima
    desc: Quando un nemico cade, la sua anima salta sul nemico più vicino e gli toglie il 10 % della vita massima (ai Boss, il 2 %).
  pt:
    name: Pedra Ânima
    desc: Quando um inimigo cai, a alma dele salta para o inimigo mais próximo e tira 10% da vida máxima dele (dos chefes, 2%).
  ru:
    name: Камень анимы
    desc: Когда враг падает, его душа перепрыгивает на ближайшего врага и отнимает 10 % его максимального здоровья (у боссов 2 %).
  ja:
    name: たましいのいし
    desc: 敵が倒れると、その魂が最も近い敵に飛び移り、最大HPの10%を奪います（ボスは2%）。
  ko:
    name: 영혼의 돌
    desc: 적이 쓰러지면 그 영혼이 가장 가까운 적에게 옮겨 가 최대 체력의 10%를 깎는다(보스는 2%).
  zh:
    name: 灵魂石
    desc: 敌人倒下时，其灵魂会跳向最近的敌人，夺走其最大生命的10%（首领为2%）。
  zt:
    name: 魂魄石
    desc: 敵人倒下時，牠的靈魂會跳到最近的敵人身上，奪走其最大生命的10%（頭目為2%）。
---
When an enemy falls, its soul leaps to the nearest enemy and takes 10% of its max health (2% from bosses).

## How it works
- Each time you defeat an enemy, its soul leaps to the nearest enemy within 300 px of where it fell.
- The soul deals 10 % of that enemy's max health (2 % for a boss), or your Damage if that is higher.

## Stacking
- It does not stack: a second copy adds nothing.
