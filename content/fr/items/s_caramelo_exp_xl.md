---
title: Bonbon Exp. XL
id: s_caramelo_exp_xl
kind: passive
category: stats
family: core
tier: 3
pools:
- boss
pool_weight: 2
stats:
- text: Dégâts +0,5
  good: true
- text: Cadence +
  good: true
- text: Vitesse +0,2
  good: true
- text: Portée +40
  good: true
- text: Cœurs +1
  good: true
- text: Soigne 1 cœur
  good: true
details:
- label: Dégâts
  value: +0,5
- label: Cadence
  value: +1 (0,017 s de moins entre les tirs)
- label: Vitesse
  value: +0,2
- label: Portée
  value: +40 px
- label: PV max
  value: +1 cœur
- label: Soin
  value: 1 cœur au ramassage
icon: items-ps/exp-candy/xl.png
sprite: true
names:
  en:
    name: Exp. Candy XL
    desc: 'A bit of everything: damage, fire rate, speed, range and a heart'
  es:
    name: Caramelo Exp. XL
    desc: 'Un poco de todo: daño, cadencia, velocidad, alcance y un corazón'
  de:
    name: EP-Bonbon XL
    desc: 'Ein bisschen von allem: Schaden, Feuerrate, Tempo, Reichweite und ein Herz'
  it:
    name: Caram. Esp. XL
    desc: 'Un po'' di tutto: danni, cadenza, velocità, gittata e un cuore'
  pt:
    name: Doce Exp. XL
    desc: 'Um pouco de tudo: dano, cadência, velocidade, alcance e um coração'
  ru:
    name: Конфета опыта XL
    desc: 'Всего понемногу: урон, темп стрельбы, скорость, дальность и сердце'
  ja:
    name: けいけんアメＸＬ
    desc: 全部少しずつ：ダメージ、連射、速度、射程、ハート1つ
  ko:
    name: 경험사탕XL
    desc: '조금씩 전부: 대미지, 연사, 속도, 사거리, 하트 1칸'
  zh:
    name: 经验糖果ＸＬ
    desc: 全面小幅提升：伤害、射速、速度、射程和一颗心
  zt:
    name: 經驗糖果ＸＬ
    desc: 樣樣都有：傷害、射速、速度、射程和一顆愛心
---
Un peu de tout : dégâts, cadence, vitesse, portée et un cœur

## Fonctionnement
- Le +0,5 en Dégâts est un bonus fixe : il s'ajoute à vos autres bonus fixes et suit les [rendements décroissants](../mechanics/rendimientos.html) (en entier jusqu'à +3 au total, puis de moins en moins).
- Cadence +1 : 0,017 s de moins entre deux tirs. Les bonus de cadence suivent les [rendements décroissants](../mechanics/rendimientos.html) : les 3 premiers points au total comptent en entier, les 4 suivants à moitié, le reste au quart. Vous ne tirez jamais plus de 12 fois par seconde.
- La Vitesse +0,2 n'a pas de rendements décroissants. Votre vitesse ne descend jamais sous 1,6.
- Portée +40 : vos tirs vont 40 px plus loin, sans rendements décroissants.
- Un réceptacle de cœur de plus, jusqu'à la limite de 12 cœurs. À 12 cœurs, vous n'en gagnez pas, mais le soin s'applique quand même.
- Il vous soigne de 1 cœur en le ramassant ; ce soin ignore la limite de soins.
- **Effet réel** pour un Pokémon typique (4 dégâts, 4,3 tirs/s, vitesse 4, portée 350 px, vitesse des tirs 9, 4 cœurs), première copie seulement: Dégâts +0,5: 4 → 4,5 (+12 %) · Cadence +1: 4,3 → 4,6 tirs/s (+8 %) · Vitesse +0,2: 4 → 4,2 (+5 %) · Portée +40 px: 350 → 390 px (+11 %) · PV max +1 cœur: 4 → 5 cœurs. Voir [Statistiques en pratique](../mechanics/estadisticas_reales.html) pour le comportement des totaux.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Dégâts et Cadence) et son soin.
