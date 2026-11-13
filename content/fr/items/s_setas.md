---
title: Champignons
id: s_setas
kind: passive
category: stats
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Dégâts +0,7
  good: true
- text: Cœurs +1
  good: true
- text: Vitesse -0,2
  good: false
- text: Soigne 1 cœur
  good: true
details:
- label: Dégâts
  value: +0,7
- label: PV max
  value: +1 cœur
- label: Soin
  value: 1 cœur à la prise
- label: Vitesse
  value: −0,2
- label: Cumul
  value: Chaque exemplaire s'ajoute
icon: items-ps/curry-ingredient/mixed-mushrooms.png
sprite: true
names:
  en:
    name: Mixed Mushrooms
    desc: Damage +0.7 and heart +1, speed -
  es:
    name: Setas
    desc: Daño +0,7 y corazón +1, velocidad -
  de:
    name: Pilzmix
    desc: Schaden +0,7 und Herz +1, Tempo -
  it:
    name: Funghi
    desc: Danni +0,7 e cuore +1, velocità -
  pt:
    name: Cogumelos Variados
    desc: Dano +0,7 e coração +1, velocidade -
  ru:
    name: Грибное ассорти
    desc: Урон +0,7 и сердце +1, скорость -
  ja:
    name: キノコパック
    desc: ダメージ+0.7とハート+1、移動速度-
  ko:
    name: 버섯팩
    desc: 대미지 +0.7, 하트 +1, 속도 -
  zh:
    name: 袋装蕈菇
    desc: 伤害+0.7，心+1，速度-
  zt:
    name: 袋裝蕈菇
    desc: 傷害+0.7、愛心+1，速度下降
---
Dégâts +0,7 et cœur +1, vitesse -

## Fonctionnement
- Dégâts +0,7 : un bonus fixe ajouté aux Dégâts de base de votre Pokémon. Tous les bonus fixes de Dégâts des objets sont d'abord additionnés ; les 3 premiers points comptent en entier, de +3 à +8 pour moitié, de +8 à +40 pour un quart et au-delà pour 5 % (voir [Rendements décroissants](../mechanics/rendimientos.html)).
- PV max +1 cœur : augmente vos PV maximum de 1 cœur (jusqu'à la limite de 12 cœurs ; les cœurs d'âme sont à part). Il soigne aussi 1 cœur dès que vous le ramassez. À 12 cœurs, le maximum n'augmente plus, mais vous êtes quand même soigné.
- Vitesse −0,2 : retirée en entier de votre vitesse de déplacement. Votre vitesse ne peut jamais descendre sous le minimum de 1,6.

## Cumul
- Chaque exemplaire ajoute à nouveau ses bonus, sans limite de copies. Les rendements décroissants décrits plus haut s'appliquent au total, pas à chaque copie séparément.
