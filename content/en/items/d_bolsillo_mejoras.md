---
title: Power-Up Pocket
id: d_bolsillo_mejoras
kind: passive
category: utility
family: defense
tier: 3
pools:
- devil
- secret
pool_weight: 2
details:
- label: Drop chance per kill
  value: 'Doubled: 12 % at Luck 0 (6 % normally)'
- label: Key chance
  value: 'Doubled: 3 % at Luck 0 (1.5 %)'
- label: Drop type
  value: 75 % coin, 25 % half heart
icon: items-ps/storage/power-up-pocket.png
sprite: true
names:
  es:
    name: Bolsillo Mejoras
    desc: Los enemigos sueltan el doble de cosas
  fr:
    name: Poche à Renforts
    desc: Les ennemis lâchent deux fois plus d'objets
  de:
    name: Stärkungstasche
    desc: Gegner lassen doppelt so viel fallen
  it:
    name: Tasca potenziam.
    desc: I nemici lasciano il doppio del bottino
  pt:
    name: Bolso de Melhorias
    desc: Os inimigos soltam o dobro de coisas
  ru:
    name: Карман усилений
    desc: Враги роняют вдвое больше
  ja:
    name: きょうかポケット
    desc: 敵のドロップが2倍になる
  ko:
    name: 강화포켓
    desc: 적이 떨어뜨리는 물건이 2배가 된다
  zh:
    name: 强化口袋
    desc: 敌人掉落的物品翻倍
  zt:
    name: 強化口袋
    desc: 敵人掉落的物品加倍
---
Enemies drop twice as much stuff

## How it works
- Every enemy you defeat has twice the usual chance of dropping something. Normally that is 6 % plus 0.5 % per Luck (Luck counted from −5 to +8), so 12 % at Luck 0 and up to 20 % at Luck 8 with the item. The drop is a [coin](../world/coin.html) 75 % of the time and a half heart otherwise.
- The chance of a key drop is doubled as well: 1.5 % plus 0.3 % per Luck normally, so 3 % plus 0.6 % per Luck with the item.
- It only affects drops from defeated enemies, not the reward for clearing a room.

## Stacking
- It is an on/off effect: a second Power-Up Pocket does not double the chance again.
