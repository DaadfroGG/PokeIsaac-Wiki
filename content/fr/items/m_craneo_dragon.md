---
title: Crâne Dragon
id: m_craneo_dragon
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
- devil
pool_weight: 2
details:
- label: Chance
  value: 15 % + 1 % par point de Chance, par attaque (50 % max)
- label: Tirs en plus
  value: '3 : à droite, derrière et à gauche de votre premier tir'
- label: Dégâts
  value: Pleins
- label: Chance max
  value: 50 % à 35 de Chance après rendements décroissants
icon: items-ps/key-item/dragon-skull.png
sprite: true
names:
  en:
    name: Dragon Skull
    desc: Sometimes you fire in all four directions at once
  es:
    name: Cráneo Dragón
    desc: A veces disparas en las cuatro direcciones a la vez
  de:
    name: Drakoschädel
    desc: Manchmal schießt du in alle vier Richtungen gleichzeitig
  it:
    name: Teschio
    desc: A volte spari nelle quattro direzioni insieme
  pt:
    name: Crânio de Dragão
    desc: Às vezes você atira nas quatro direções ao mesmo tempo
  ru:
    name: Череп дракона
    desc: Иногда ты стреляешь во все четыре стороны сразу
  ja:
    name: ドラゴンのホネ
    desc: ときどき、4方向に同時にショットを撃つ
  ko:
    name: 드래곤의뼈
    desc: 가끔 네 방향으로 동시에 쏜다
  zh:
    name: 龙之骨
    desc: 有时会同时向四个方向射击
  zt:
    name: 龍之骨
    desc: 有時會同時朝四個方向射擊
---
Parfois, vous tirez dans les quatre directions à la fois

## Fonctionnement
- À chaque attaque, il y a 15 % de chance, +1 % par point de Chance (50 % au maximum), de tirer aussi **3 tirs** à 90°, 180° et 270° de votre premier tir : vous tirez dans les quatre directions.
- C'est tiré au sort **une fois par attaque**, quel que soit le nombre de tirs de votre salve ; la salve arrière du [Nœud Destin](lazo_destino.html) ne relance pas le tirage.
- Les 3 tirs sont des tirs normaux : dégâts pleins, avec les effets de vos objets, et chacun tire au sort son propre coup critique et ses effets.
- Ils s'ajoutent à votre salve et ne comptent pas dans la limite de 9 tirs. Les [Lunettes Sable](m_gafas_aislantes.html) ne les divisent pas.
- La plupart des armes attaquent aussi dans les quatre directions quand il se déclenche.
- Le plafond de 50 % demande 35 de Chance après les [rendements décroissants](../mechanics/rendimientos.html) (110 sur le papier). Une Chance négative baisse la chance.
- Comment tous les tirs en plus s'additionnent : [Tirs supplémentaires](../mechanics/disparos_extra.html).

## Cumul
- Un deuxième exemplaire ne fait rien de plus : toujours un seul tirage par attaque, même chance.

{{< clip >}}
