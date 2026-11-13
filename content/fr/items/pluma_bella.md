---
title: Jolie Plume
id: pluma_bella
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Vitesse
  value: Jusqu'à +1, monte en 15 s sans être touché
- label: Remise à zéro
  value: À chaque fois que vous êtes touché
icon: items-ps/valuable-item/pretty-wing.png
sprite: true
names:
  en:
    name: Pretty Feather
    desc: The longer you go without taking damage, the faster you move
  es:
    name: Pluma Bella
    desc: Cuanto más tiempo pasas sin recibir daño, más rápido vas
  de:
    name: Prachtfeder
    desc: Je länger du keinen Schaden nimmst, desto schneller bist du
  it:
    name: Piumabella
    desc: Più a lungo resti senza subire danni, più sei veloce
  pt:
    name: Pluma Bela
    desc: Quanto mais tempo você passa sem levar dano, mais rápido você vai
  ru:
    name: Красивое перо
    desc: Чем дольше ты не получаешь урона, тем быстрее двигаешься
  ja:
    name: きれいなハネ
    desc: ノーダメージの時間が長いほど、移動が速くなる
  ko:
    name: 고운깃털
    desc: 대미지를 받지 않는 시간이 길수록 빨라진다
  zh:
    name: 美丽之羽
    desc: 越久没受伤，移动越快
  zt:
    name: 美麗之羽
    desc: 越久沒受到傷害，移動越快
---
Plus vous restez longtemps sans subir de dégâts, plus vous allez vite

## Fonctionnement
- Depuis la dernière fois que vous avez été touché, votre Vitesse monte régulièrement : +0,07 par seconde, jusqu'à +1 au bout de 15 secondes.
- Le compteur tourne partout, aussi entre les salles et dans les salles déjà finies.
- Le moindre coup reçu remet le bonus à 0.

## Cumul
- Un deuxième exemplaire ne fait rien de plus : toujours +1 au maximum.
