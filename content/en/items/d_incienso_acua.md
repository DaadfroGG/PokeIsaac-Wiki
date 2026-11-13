---
title: Wave Incense
id: d_incienso_acua
kind: passive
category: defense
family: defense
tier: 1
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Trigger
  value: Each hit that hurts you
- label: Puddle
  value: 34 px radius, 2.7 s
- label: Damage
  value: 25 % of your Damage every 0.25 s (water)
- label: Slow
  value: 1.2 s
icon: items-ps/incense/wave.png
sprite: true
names:
  es:
    name: Incienso Acua
    desc: Al recibir un golpe, dejas un charco que frena y hiere a los enemigos
  fr:
    name: Encens Vague
    desc: Quand vous êtes touché, vous laissez une flaque qui ralentit et blesse les ennemis
  de:
    name: Wellenrauch
    desc: Wirst du getroffen, hinterlässt du eine Pfütze, die Gegner verlangsamt und verletzt
  it:
    name: Ondaroma
    desc: Quando vieni colpito, lasci una pozza che rallenta e ferisce i nemici
  pt:
    name: Incenso Onda
    desc: Ao receber um golpe, você deixa uma poça que retarda e fere os inimigos
  ru:
    name: Благовоние волн
    desc: Получая удар, ты оставляешь лужу, которая замедляет и ранит врагов
  ja:
    name: さざなみのおこう
    desc: 被弾すると、敵を遅くして傷つける水たまりを残す
  ko:
    name: 잔물결향로
    desc: 맞으면 적을 느리게 하고 해치는 웅덩이를 남긴다
  zh:
    name: 涟漪薰香
    desc: 受到攻击时，会留下一片使敌人减速并受伤的水洼
  zt:
    name: 漣漪薰香
    desc: 受到攻擊時，會留下一灘使敵人減速並受傷的水窪
---
When you get hit, you leave a puddle that slows and hurts enemies

## How it works
- After you take a hit, a puddle appears under you. It lasts about 2.7 seconds and has a radius of 34 px.
- Every 0.25 seconds, each enemy standing in it takes Water-type damage equal to 25 % of your Damage (at least 0.5) and is slowed for 1.2 seconds (refreshed as long as it stays inside).
- Flying enemies are not affected. The puddle's hits don't trigger your shot effects.
- Each hit you take makes a new puddle.

## Stacking
- It does not stack: a second copy adds nothing.
