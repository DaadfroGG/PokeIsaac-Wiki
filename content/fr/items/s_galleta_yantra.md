---
title: Sablé Yantreizh
id: s_galleta_yantra
kind: passive
category: stats
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Dégâts +0,6
  good: true
- text: Chance +1
  good: true
details:
- label: Dégâts
  value: +0,6
- label: Chance
  value: '+1'
- label: Cumul
  value: Chaque exemplaire s'ajoute
icon: items-ps/medicine/shalour-sable.png
sprite: true
names:
  en:
    name: Shalour Sable
    desc: Damage + and luck +1
  es:
    name: Galleta Yantra
    desc: Daño + y suerte +1
  de:
    name: Yantara-Sablé
    desc: Schaden + und Glück +1
  it:
    name: Yantafrollino
    desc: Danni + e fortuna +1
  pt:
    name: Biscoito Shalour
    desc: Dano + e sorte +1
  ru:
    name: Шалурское печенье
    desc: Урон + и удача +1
  ja:
    name: シャラサブレ
    desc: ダメージ+、運+1
  ko:
    name: 사라사블레
    desc: 대미지 +, 행운 +1
  zh:
    name: 娑罗沙布蕾
    desc: 伤害+，幸运+1
  zt:
    name: 娑羅沙布蕾
    desc: 傷害+、幸運+1
---
Dégâts + et chance +1

## Fonctionnement
- Dégâts +0,6 : un bonus fixe ajouté aux Dégâts de base de votre Pokémon. Tous les bonus fixes de Dégâts des objets sont d'abord additionnés ; les 3 premiers points comptent en entier, de +3 à +8 pour moitié, de +8 à +40 pour un quart et au-delà pour 5 % (voir [Rendements décroissants](../mechanics/rendimientos.html)).
- Chance +1 : ajoutée à votre Chance. La Chance compte en entier jusqu'à 10 ; au-delà de 10, seul un quart compte. Elle augmente les chances de butin sur les ennemis et de récompense à la fin d'une salle, les chances de coup critique (+1 % par point) et celles des statuts du passif de type (+2 % par point).

## Cumul
- Chaque exemplaire ajoute à nouveau ses bonus, sans limite de copies. Les rendements décroissants décrits plus haut s'appliquent au total, pas à chaque copie séparément.
