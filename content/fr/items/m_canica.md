---
title: Bille
id: m_canica
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Chance
  value: 25 % + 1 % par point de Chance, par attaque (sans plafond)
- label: Tirs en plus
  value: 1 ou 2 (une chance sur deux), dans des directions aléatoires
- label: Dégâts
  value: Pleins
icon: items-ps/partner-gift/marble.png
sprite: true
names:
  en:
    name: Marble
    desc: Sometimes you also fire one or two shots in random directions
  es:
    name: Canica
    desc: A veces disparas además uno o dos disparos en direcciones al azar
  de:
    name: Glasmurmel
    desc: Manchmal feuerst du zusätzlich einen oder zwei Schüsse in zufällige Richtungen
  it:
    name: Biglia
    desc: A volte spari anche uno o due tiri in direzioni a caso
  pt:
    name: Bolinha de Gude
    desc: Às vezes você também atira um ou dois tiros em direções aleatórias
  ru:
    name: Шарик
    desc: Иногда ты также выпускаешь один-два выстрела в случайных направлениях
  ja:
    name: ビーだま
    desc: ときどき、ランダムな方向にもショットを1-2発撃つ
  ko:
    name: 유리구슬
    desc: 가끔 무작위 방향으로 탄을 한두 발 더 쏜다
  zh:
    name: 弹珠
    desc: 有时会额外朝随机方向射出一到两发弹
  zt:
    name: 彈珠
    desc: 有時會額外朝隨機方向射出一到兩發
---
Parfois, vous tirez aussi un ou deux tirs dans des directions aléatoires

## Fonctionnement
- À chaque attaque, il y a 25 % de chance, +1 % par point de Chance (sans plafond), de tirer aussi **1 ou 2 tirs** (une chance sur deux) dans des directions complètement aléatoires, tout autour de vous.
- C'est tiré au sort **une fois par attaque**, pas une fois par tir, et pas une deuxième fois pour la salve arrière du [Nœud Destin](lazo_destino.html).
- Les tirs infligent des dégâts pleins et tirent au sort leurs propres coups critiques et effets au toucher, mais ils comptent comme des tirs secondaires : les effets d'objets qui ne marchent qu'avec vos tirs principaux ne se déclenchent pas avec eux.
- Ils s'ajoutent à votre salve et ne comptent pas dans la limite de 9 tirs. Les [Lunettes Sable](m_gafas_aislantes.html) ne les divisent pas.
- La plupart des armes ont aussi droit aux attaques aléatoires en plus.
- Comment tous les tirs en plus s'additionnent : [Tirs supplémentaires](../mechanics/disparos_extra.html).

## Cumul
- Un deuxième exemplaire ne fait rien de plus : toujours un seul tirage par attaque, même chance.

{{< clip >}}
