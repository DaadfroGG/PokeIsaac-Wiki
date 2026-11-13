---
title: Encens Vague
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
- label: Déclencheur
  value: Chaque coup qui vous blesse
- label: Flaque
  value: 34 px de rayon, 2,7 s
- label: Dégâts
  value: 25 % de vos Dégâts toutes les 0,25 s (eau)
- label: Ralentissement
  value: 1,2 s
icon: items-ps/incense/wave.png
sprite: true
names:
  en:
    name: Wave Incense
    desc: When you get hit, you leave a puddle that slows and hurts enemies
  es:
    name: Incienso Acua
    desc: Al recibir un golpe, dejas un charco que frena y hiere a los enemigos
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
Quand vous êtes touché, vous laissez une flaque qui ralentit et blesse les ennemis

## Fonctionnement
- Après un coup reçu, une flaque apparaît sous vous. Elle dure environ 2,7 secondes et a un rayon de 34 px.
- Toutes les 0,25 seconde, chaque ennemi qui s'y trouve subit des dégâts de type Eau égaux à 25 % de vos Dégâts (au moins 0,5) et est ralenti 1,2 seconde (renouvelé tant qu'il reste dedans).
- Les ennemis volants ne sont pas affectés. Les coups de la flaque ne déclenchent pas vos effets de tir.
- Chaque coup que vous recevez crée une nouvelle flaque.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien.
