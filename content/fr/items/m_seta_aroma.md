---
title: Champi Suave
id: m_seta_aroma
kind: passive
category: shot
family: module
tier: 3
pools:
- treasure
pool_weight: 2
details:
- label: Statitik
  value: 10 % par coup (+1 % par point de Chance), 4 max. à la fois
- label: Morsure
  value: 2× vos Dégâts (au moins 2), type Insecte
- label: Durée
  value: 2 morsures ou 10 s, disparaît quand vous quittez la salle
icon: items-ps/valuable-item/balm-mushroom.png
sprite: true
names:
  en:
    name: Balm Mushroom
    desc: Sometimes, on hitting an enemy, a Joltik hatches and attacks the others (up to four)
  es:
    name: Seta Aroma
    desc: A veces, al golpear a un enemigo, nace un Joltik que ataca a los demás (hasta cuatro)
  de:
    name: Duftpilz
    desc: Manchmal schlüpft beim Treffen eines Gegners ein Wattzapf, der die anderen angreift (bis zu vier)
  it:
    name: Profumfungo
    desc: A volte, colpendo un nemico, nasce un Joltik che attacca gli altri (fino a quattro)
  pt:
    name: Cogumelo Aromático
    desc: Às vezes, ao acertar um inimigo, nasce um Joltik que ataca os outros (até quatro)
  ru:
    name: Ароматный гриб
    desc: Иногда при ударе по врагу вылупляется Джолтик и атакует остальных (до четырех)
  ja:
    name: かおるキノコ
    desc: ときどき、敵に命中するとバチュルが生まれ、他の敵を攻撃する（最大4匹）
  ko:
    name: 향기버섯
    desc: 가끔 적을 맞히면 다른 적을 공격하는 파쪼옥이 태어난다 (최대 4마리)
  zh:
    name: 芳香蘑菇
    desc: 有时击中敌人时会孵出一只电电虫，攻击其他敌人（最多四只）
  zt:
    name: 芳香蘑菇
    desc: 有時命中敵人時會孵出一隻電電蟲攻擊其他敵人（最多四隻）
---
Parfois, en touchant un ennemi, un Statitik éclot et attaque les autres (jusqu'à quatre)

## Fonctionnement
- Chaque fois qu'un de vos tirs touche un ennemi, il y a 10 % de chances (+1 % par point de Chance) qu'un Statitik éclose sur lui.
- Le Statitik court vers l'ennemi le plus proche (jusqu'à 600 px) et le mord pour deux fois vos Dégâts (au moins 2), en coup de type Insecte. Après sa deuxième morsure, ou au bout de 10 secondes, il disparaît.
- Vous pouvez avoir au plus 4 Statitik en même temps. Ce sont des [compagnons](../mechanics/companeros.html) temporaires : ils ne comptent pas dans votre limite de compagnons et disparaissent quand vous quittez la salle.
- N'importe quel coup peut en faire éclore un, y compris les tirs divisés, mais pas les coups de compagnon ni les coups qui ne déclenchent jamais d'objets (rebonds, lianes, éclairs en chaîne).
- Le [Multi Exp](repartir_exp.html) ne double pas les morsures des Statitik.

## Cumul
- Un deuxième exemplaire n'apporte rien de plus : même chance, même limite de 4.
