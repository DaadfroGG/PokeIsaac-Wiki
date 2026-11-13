---
title: Steak Haché
id: s_hamburguesas
kind: passive
category: stats
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Dégâts +1,5
  good: true
- text: Cadence -
  good: false
details:
- label: Dégâts
  value: +1,5
- label: Cadence
  value: +0,05 s entre deux tirs (moins bien)
- label: Cumul
  value: Chaque exemplaire s'ajoute
icon: items-ps/curry-ingredient/precooked-burger.png
sprite: true
names:
  en:
    name: Precooked Burger
    desc: Damage +1.5, fire rate -
  es:
    name: Hamburguesas
    desc: Daño +1,5, cadencia -
  de:
    name: Frikadellen
    desc: Schaden +1,5, Feuerrate -
  it:
    name: Hamburger
    desc: Danni +1,5, cadenza -
  pt:
    name: Hambúrguer Pré-Cozido
    desc: Dano +1,5, cadência -
  ru:
    name: Бургеры
    desc: Урон +1,5, темп стрельбы -
  ja:
    name: レトルトバーグ
    desc: ダメージ+1.5、連射-
  ko:
    name: 레토르트햄버그
    desc: 대미지 +1.5, 연사 -
  zh:
    name: 即食肉排
    desc: 伤害+1.5，射速-
  zt:
    name: 即食肉排
    desc: 傷害+1.5、射速-
---
Dégâts +1,5, cadence -

## Fonctionnement
- Dégâts +1,5 : un bonus fixe ajouté aux Dégâts de base de votre Pokémon. Tous les bonus fixes de Dégâts des objets sont d'abord additionnés ; les 3 premiers points comptent en entier, de +3 à +8 pour moitié, de +8 à +40 pour un quart et au-delà pour 5 % (voir [Rendements décroissants](../mechanics/rendimientos.html)).
- Malus de cadence : allonge le délai entre deux tirs de 0,05 s. Le malus s'ajoute au total de vos autres objets de cadence, et un ralentissement net compte toujours en entier, sans réduction.

## Cumul
- Chaque exemplaire ajoute à nouveau ses bonus, sans limite de copies. Les rendements décroissants décrits plus haut s'appliquent au total, pas à chaque copie séparément.
