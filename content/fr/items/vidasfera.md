---
title: Orbe Vie
id: vidasfera
kind: passive
category: stats
family: core
tier: 3
pools:
- boss
- devil
pool_weight: 2
stats:
- text: Dégâts +1,8
  good: true
- text: Chance -2
  good: false
details:
- label: Dégâts
  value: +1,8
- label: Chance
  value: −2
- label: Cumul
  value: Chaque exemplaire s'ajoute
icon: items/life-orb.png
sprite: true
names:
  en:
    name: Life Orb
    desc: Damage +1.8, luck -2
  es:
    name: Vidasfera
    desc: Daño +1.8, suerte -2
  de:
    name: Leben-Orb
    desc: Schaden +1,8, Glück -2
  it:
    name: Assorbisfera
    desc: Danni +1,8, fortuna -2
  pt:
    name: Orbe da Vida
    desc: Dano +1,8, sorte -2
  ru:
    name: Сфера жизни
    desc: Урон +1,8, удача -2
  ja:
    name: いのちのたま
    desc: ダメージ+1.8、運-2
  ko:
    name: 생명의구슬
    desc: 대미지 +1.8, 행운 -2
  zh:
    name: 生命宝珠
    desc: 伤害+1.8，幸运-2
  zt:
    name: 生命寶珠
    desc: 傷害+1.8、幸運-2
---
Dégâts +1,8, chance -2

## Fonctionnement
- Dégâts +1,8 : un bonus fixe ajouté aux Dégâts de base de votre Pokémon. Tous les bonus fixes de Dégâts des objets sont d'abord additionnés ; les 3 premiers points comptent en entier, de +3 à +8 pour moitié, de +8 à +40 pour un quart et au-delà pour 5 % (voir [Rendements décroissants](../mechanics/rendimientos.html)).
- Chance −2 : réduit votre Chance : le butin des ennemis, les récompenses de fin de salle, les coups critiques et les statuts du passif de type deviennent moins probables. Un malus de Chance compte en entier. Les mêmes −1 % de critique et −2 % de statut par point s'appliquent, et les chances de butin des ennemis ne baissent plus au-delà de −5.

## Cumul
- Chaque exemplaire ajoute à nouveau ses bonus, sans limite de copies. Les rendements décroissants décrits plus haut s'appliquent au total, pas à chaque copie séparément.
