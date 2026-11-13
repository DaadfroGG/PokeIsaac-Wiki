---
title: Capsule d’Or
id: chapa_dorada
kind: passive
category: stats
family: core
tier: 3
pools:
- boss
- shop
pool_weight: 2
stats:
- text: Dégâts +0,5
  good: true
- text: Cadence +
  good: true
- text: Vitesse +0,2
  good: true
- text: Vit. tir +1
  good: true
- text: Portée +40
  good: true
- text: Chance +1
  good: true
details:
- label: Dégâts
  value: +0,5
- label: Cadence
  value: +1 (0,017 s de moins entre les tirs)
- label: Vitesse
  value: +0,2
- label: Vitesse des tirs
  value: '+1'
- label: Portée
  value: +40 px
- label: Chance
  value: '+1'
icon: items-ps/other-item/gold-bottle-cap.png
sprite: true
names:
  en:
    name: Gold Bottle Cap
    desc: All stats improve a little
  es:
    name: Chapa Dorada
    desc: Todas las estadísticas mejoran un poco
  de:
    name: Goldkronkorken
    desc: Alle Werte verbessern sich ein wenig
  it:
    name: Tappo d’oro
    desc: Tutte le statistiche migliorano un po'
  pt:
    name: Tampinha Dourada
    desc: Todos os atributos melhoram um pouco
  ru:
    name: Золотая крышка
    desc: Все характеристики немного улучшаются
  ja:
    name: きんのおうかん
    desc: すべてのステータスが少し上がる
  ko:
    name: 금색병뚜껑
    desc: 모든 능력치가 조금 오른다
  zh:
    name: 金色王冠
    desc: 所有数据略有提升
  zt:
    name: 金色王冠
    desc: 所有能力數值都稍微提升
---
Toutes les statistiques augmentent un peu

## Fonctionnement
- Le +0,5 en Dégâts est un bonus fixe : il s'ajoute à vos autres bonus fixes et suit les [rendements décroissants](../mechanics/rendimientos.html) (en entier jusqu'à +3 au total, puis de moins en moins).
- Cadence +1 : 0,017 s de moins entre deux tirs. Les bonus de cadence suivent les [rendements décroissants](../mechanics/rendimientos.html) : les 3 premiers points au total comptent en entier, les 4 suivants à moitié, le reste au quart. Vous ne tirez jamais plus de 12 fois par seconde.
- La Vitesse +0,2 n'a pas de rendements décroissants. Votre vitesse ne descend jamais sous 1,6.
- Vitesse des tirs +1 : vos tirs volent plus vite (ils atteignent leur portée plus tôt). Elle ne descend jamais sous 4.
- Portée +40 : vos tirs vont 40 px plus loin, sans rendements décroissants.
- Chance +1 : chaque point donne +1 % de [coup critique](../mechanics/criticos.html), +2 % aux statuts de votre passif de type et améliore les autres chances liées à la Chance. Votre Chance totale compte en entier jusqu'à 10, puis au quart.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Dégâts et Cadence).
