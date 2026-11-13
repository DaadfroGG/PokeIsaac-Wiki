---
title: Pétale Éclat
id: petalo_radiante
kind: passive
category: utility
family: core
tier: 1
pools:
- angel
pool_weight: 2
details:
- label: Dégâts
  value: +0,2 par salle terminée sans être touché
- label: Plafond
  value: +3 (15 salles)
- label: Salles
  value: Salles de combat et salles de boss
icon: items-ps/key-item/radiant-petal.png
sprite: true
names:
  en:
    name: Radiant Petal
    desc: 'Each room you clear without getting hurt: damage +0.2 (up to +3)'
  es:
    name: Pétalo Radiante
    desc: 'Cada sala que limpias sin que te hieran: daño +0.2 (hasta +3)'
  de:
    name: Kronblatt
    desc: 'Jeder Raum, den du unverletzt räumst: Schaden +0,2 (bis +3)'
  it:
    name: Petalo Lucente
    desc: 'Ogni stanza che liberi senza subire colpi: danni +0,2 (fino a +3)'
  pt:
    name: Pétala Radiante
    desc: 'Cada sala que você limpa sem ser ferido: Dano +0,2 (até +3)'
  ru:
    name: Сияющий лепесток
    desc: 'Каждая комната, зачищенная без ранений: урон +0,2 (до +3)'
  ja:
    name: かがやくはなびら
    desc: ダメージを受けずに部屋をクリアするたびにダメージ+0.2（最大+3）
  ko:
    name: 빛나는꽃잎
    desc: 피해 없이 방을 클리어할 때마다 대미지 +0.2(최대 +3)
  zh:
    name: 光辉花瓣
    desc: 每清空一个房间且未受伤：伤害+0.2（最高+3）
  zt:
    name: 光輝花瓣
    desc: 每在不受傷的情況下清空一個房間：傷害 +0.2（最多 +3）
---
Chaque salle nettoyée sans être blessé : dégâts +0,2 (jusqu'à +3)

## Fonctionnement
- Chaque fois que vous terminez une salle de combat ou une salle de boss sans avoir été touché depuis votre entrée, vous gagnez Dégâts +0,2 pour le reste de la partie.
- Jusqu'à 15 salles : +3.
- Être touché ne gâche que la salle en cours : le bonus déjà gagné reste.
- C'est un bonus de Dégâts fixe normal : il apparaît dans le HUD et suit les [rendements décroissants](../mechanics/rendimientos.html).

## Cumul
- Un deuxième exemplaire ne fait rien de plus : même compteur, même plafond de +3.
