---
title: Moomoo Cheese
id: m_queso_mumu
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
pool_weight: 2
stats:
- text: Hearts +1
  good: true
- text: Heals 1 heart
  good: true
details:
- label: Hearts
  value: +1 (and heals it)
- label: Cloud
  value: Every 0.5 s while standing still in combat
- label: Cloud duration
  value: 2.5 s, radius 30 px
- label: Poison
  value: 2 s, 25 % of your damage every 0.25 s (min. 0.5)
icon: items-ps/curry-ingredient/moomoo-cheese.png
sprite: true
names:
  es:
    name: Queso Mu-mu
    desc: Si te quedas quieto en combate, sueltas nubes apestosas que envenenan a los enemigos; corazón +1
  fr:
    name: Fromage Meumeu
    desc: Si vous restez immobile en combat, vous libérez des nuages puants qui empoisonnent les ennemis ; cœur +1
  de:
    name: Kuhmuh-Käse
    desc: Wenn du im Kampf stillstehst, setzt du stinkende Wolken frei, die Gegner vergiften; Herz +1
  it:
    name: Formaggio Mumu
    desc: Se stai fermo in combattimento, rilasci nubi puzzolenti che avvelenano i nemici; cuore +1
  pt:
    name: Queijo Moomoo
    desc: Se você ficar parado em combate, solta nuvens fedorentas que envenenam os inimigos; coração +1
  ru:
    name: Сыр Мумуу
    desc: Если стоишь на месте в бою, выпускаешь вонючие облака, отравляющие врагов; сердце +1
  ja:
    name: モーモーチーズ
    desc: 戦闘中に立ち止まると、敵をどく状態にする悪臭の雲を出す；ハート+1
  ko:
    name: 튼튼치즈
    desc: 전투 중 가만히 있으면 악취 구름을 내뿜어 적을 독 상태로 만든다. 하트 +1
  zh:
    name: 哞哞乳酪
    desc: 战斗中站着不动，会释放臭气云使敌人中毒；心+1
  zt:
    name: 哞哞乳酪
    desc: 戰鬥中站著不動時，會釋放臭氣雲讓敵人中毒；愛心+1
---
If you stand still in combat, you release stinky clouds that poison enemies; heart +1

## How it works
- You get one more heart, filled.
- While you stand still in a room with enemies, you release a stinky cloud under you every 0.5 s. A cloud lasts 2.5 s and has a radius of 30 px.
- Every 0.25 s each enemy in the cloud, flying ones included, takes 25 % of your damage (at least 0.5) and is poisoned for 2 s (see [status effects](../mechanics/estados.html)).
- At most 24 clouds and puddles exist at once. Moving, or a room without enemies, stops the clouds.

## Stacking
- The cloud does not change; +1 heart is added for each copy.
