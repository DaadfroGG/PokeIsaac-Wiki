---
title: Poche à Renforts
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
- label: Chance de butin par ennemi
  value: 'Doublée : 12 % à Chance 0 (6 % normalement)'
- label: Chance de clé
  value: 'Doublée : 3 % à Chance 0 (1,5 %)'
- label: Type de butin
  value: 75 % pièce, 25 % demi-cœur
icon: items-ps/storage/power-up-pocket.png
sprite: true
names:
  en:
    name: Power-Up Pocket
    desc: Enemies drop twice as much stuff
  es:
    name: Bolsillo Mejoras
    desc: Los enemigos sueltan el doble de cosas
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
Les ennemis lâchent deux fois plus d'objets

## Fonctionnement
- Chaque ennemi vaincu a deux fois plus de chances que d'habitude de lâcher quelque chose. Normalement, c'est 6 % plus 0,5 % par point de Chance (Chance comptée de −5 à +8) : avec l'objet, 12 % à Chance 0 et jusqu'à 20 % à Chance 8. Le butin est une [pièce](../world/coin.html) 75 % du temps, un demi-cœur sinon.
- La chance de lâcher une clé est doublée aussi : 1,5 % plus 0,3 % par point de Chance normalement, soit 3 % plus 0,6 % par point avec l'objet.
- Il ne concerne que le butin des ennemis vaincus, pas la récompense de fin de salle.

## Cumul
- C'est un effet tout ou rien : une seconde Poche à Renforts ne double pas la chance une deuxième fois.
