---
title: Nouilles
id: s_fideos
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Dégâts +0,5
  good: true
- text: Portée +60
  good: true
- text: Vit. tir +2
  good: true
details:
- label: Dégâts
  value: +0,5
- label: Portée
  value: +60 px
- label: Vitesse des tirs
  value: '+2'
icon: items-ps/curry-ingredient/instant-noodles.png
sprite: true
names:
  en:
    name: Instant Noodles
    desc: Damage +0.5, range + and faster shots
  es:
    name: Fideos de Bote
    desc: Daño +0,5, alcance + y disparos más rápidos
  de:
    name: Fertignudeln
    desc: Schaden +0,5, Reichweite + und schnellere Schüsse
  it:
    name: Noodle precotti
    desc: Danni +0,5, gittata + e tiri più veloci
  pt:
    name: Macarrão Instantâneo
    desc: Dano +0,5, alcance + e tiros mais rápidos
  ru:
    name: Лапша в стакане
    desc: Урон +0,5, дальность + и более быстрые выстрелы
  ja:
    name: レトルトめん
    desc: ダメージ+0.5、射程+、弾が速くなる
  ko:
    name: 레토르트면
    desc: 대미지 +0.5, 사거리 +, 더 빠른 탄
  zh:
    name: 即食面
    desc: 伤害+0.5，射程+，射弹更快
  zt:
    name: 即食麵
    desc: 傷害+0.5、射程+、彈速更快
---
Dégâts +0,5, portée + et tirs plus rapides

## Fonctionnement
- Le +0,5 en Dégâts est un bonus fixe : il s'ajoute à vos autres bonus fixes et suit les [rendements décroissants](../mechanics/rendimientos.html) (en entier jusqu'à +3 au total, puis de moins en moins).
- Portée +60 : vos tirs vont 60 px plus loin, sans rendements décroissants.
- Vitesse des tirs +2 : vos tirs volent plus vite (ils atteignent leur portée plus tôt). Elle ne descend jamais sous 4.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Dégâts).
