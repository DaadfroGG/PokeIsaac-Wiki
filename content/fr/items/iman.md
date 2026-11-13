---
title: Aimant
id: iman
kind: passive
category: utility
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Dégâts +0,3
  good: true
details:
- label: Portée
  value: 260 px
- label: Attire
  value: Pièces, pépites, clés, Voltorbs, cœurs, cœurs d'âme
- label: Jamais
  value: Articles de boutique, coffres, objets tenus
- label: Stat
  value: Dégâts +0,3
icon: items/magnet.png
sprite: true
names:
  en:
    name: Magnet
    desc: Pulls coins, keys, Voltorbs and hearts on the floor toward you; damage +0.3
  es:
    name: Imán
    desc: Atrae hacia ti las monedas, llaves, Voltorbs y corazones del suelo; daño +0.3
  de:
    name: Magnet
    desc: Zieht Münzen, Schlüssel, Voltobals und Herzen vom Boden zu dir; Schaden +0,3
  it:
    name: Calamita
    desc: Attira a te monete, chiavi, Voltorb e cuori sul suolo; danni +0,3
  pt:
    name: Ímã
    desc: Atrai para você as moedas, chaves, Voltorbs e corações do chão; dano +0,3
  ru:
    name: Магнит
    desc: Притягивает к тебе монеты, ключи, Вольторбов и сердца с пола; урон +0,3
  ja:
    name: じしゃく
    desc: 床のコイン、カギ、ビリリダマ、ハートを自分に引き寄せる。ダメージ+0.3
  ko:
    name: 자석
    desc: 바닥의 동전, 열쇠, 찌리리공, 하트를 끌어당긴다; 대미지 +0.3
  zh:
    name: 磁铁
    desc: 将地面上的硬币、钥匙、霹雳电球和心吸向你；伤害+0.3
  zt:
    name: 磁鐵
    desc: 將地上的金幣、鑰匙、霹靂電球和愛心吸向你；傷害+0.3
---
Attire vers vous les pièces, clés, Voltorbes et cœurs au sol ; dégâts +0,3

## Fonctionnement
- Chaque objet au sol à moins de 260 px glisse vers vous, d'autant plus vite qu'il est proche.
- Il ignore ce que vous ne pourriez pas prendre : les cœurs quand vos PV sont pleins, les cœurs d'âme quand vous en avez 12, les pièces quand votre porte-monnaie est plein, les Voltorbs ou les clés quand vous en avez 99.
- Il ne déplace jamais les articles de boutique, les coffres ou coffres dorés, ni les objets tenus posés au sol.
- En coop, chaque objet va vers le joueur le plus proche qui a un Aimant et peut le prendre.
- Le Dégâts +0,3 est un bonus de stat normal qui suit les [rendements décroissants](../mechanics/rendimientos.html).

## Cumul
- Un deuxième exemplaire ajoute encore Dégâts +0,3 ; l'attraction reste la même.
