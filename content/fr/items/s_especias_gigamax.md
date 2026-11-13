---
title: Poudre Gigamax
id: s_especias_gigamax
kind: passive
category: stats
family: core
tier: 4
pools:
- boss
pool_weight: 1
stats:
- text: Dégâts +1
  good: true
- text: Vitesse +0,3
  good: true
- text: Portée +60
  good: true
- text: Cœurs +1
  good: true
- text: Soin complet
  good: true
details:
- label: Dégâts
  value: '+1'
- label: Vitesse
  value: +0,3
- label: Portée
  value: +60 px
- label: PV max
  value: +1 cœur
- label: Soin
  value: Tous vos PV
- label: Taille des tirs
  value: +2,5 de rayon
icon: items-ps/curry-ingredient/gigantamix.png
sprite: true
names:
  en:
    name: Gigantamix
    desc: Gigantamax! Damage +1, speed +, range +, bigger shots, heart +1 and fully healed
  es:
    name: Especias Gigamax
    desc: ¡Gigamax! Daño +1, velocidad +, alcance +, disparos más grandes, corazón +1 y te cura entero
  de:
    name: Giga-Pulver
    desc: Gigadynamax! Schaden +1, Tempo +, Reichweite +, größere Schüsse, Herz +1 und volle Heilung
  it:
    name: Gigaspezia
    desc: Gigamax! Danni +1, velocità +, gittata +, tiri più grandi, cuore +1 e ti cura del tutto
  pt:
    name: Gigamistura
    desc: Gigantamax! Dano +1, velocidade +, alcance +, tiros maiores, coração +1 e cura tudo
  ru:
    name: Гигамакс-смесь
    desc: Гигантамакс! Урон +1, скорость +, дальность +, выстрелы крупнее, сердце +1 и полное лечение
  ja:
    name: キョダイパウダー
    desc: キョダイマックス！ダメージ+1、移動速度+、射程+、ショット拡大、ハート+1、HP全回復
  ko:
    name: 거대파우더
    desc: 거다이맥스! 대미지 +1, 속도 +, 사거리 +, 탄이 커지고 하트 +1, 체력 완전 회복
  zh:
    name: 超极粉
    desc: 超极巨化！伤害+1，速度提升，射程提升，弹变大，心之容器+1并完全回复生命
  zt:
    name: 超極粉
    desc: 超極巨化！傷害+1，速度+，射程+，彈更大，愛心+1並完全治癒
---
Gigamax ! Dégâts +1, vitesse +, portée +, tirs plus gros, cœur +1 et soin complet

## Fonctionnement
- Le +1 en Dégâts est un bonus fixe : il s'ajoute à vos autres bonus fixes et suit les [rendements décroissants](../mechanics/rendimientos.html) (en entier jusqu'à +3 au total, puis de moins en moins).
- La Vitesse +0,3 n'a pas de rendements décroissants. Votre vitesse ne descend jamais sous 1,6.
- Portée +60 : vos tirs vont 60 px plus loin, sans rendements décroissants.
- Un réceptacle de cœur de plus, jusqu'à la limite de 12 cœurs. À 12 cœurs, vous n'en gagnez pas, mais le soin s'applique quand même.
- Il vous soigne entièrement en le ramassant ; ce soin ignore la limite de soins.
- Tirs plus gros : +2,5 de rayon (un tir normal en a 7), ils touchent donc plus facilement. Les explosions comme celle de l'[Orbe Toxique](m_toxisfera.html) grossissent un peu aussi.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur les Dégâts), les tirs grossissent encore, et il vous soigne à nouveau entièrement.
