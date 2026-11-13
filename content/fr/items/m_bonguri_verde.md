---
title: Noigrume Vert
id: m_bonguri_verde
kind: passive
category: shot
family: module
tier: 1
pool_weight: 2
details:
- label: Poison
  value: À chaque coup, 2,5 s
- label: Dégâts du poison
  value: 12 % du tir toutes les 0,5 s (min. 1,5)
icon: items-ps/apricorn/green.png
sprite: true
names:
  en:
    name: Green Apricorn
    desc: Your shots poison
  es:
    name: Bonguri Verde
    desc: Tus disparos envenenan
  de:
    name: Aprikoko Grün
    desc: Deine Schüsse vergiften
  it:
    name: Ghicocca Verde
    desc: I tuoi tiri avvelenano
  pt:
    name: Apricorn Verde
    desc: Seus tiros envenenam
  ru:
    name: Зеленый абрикорн
    desc: Твои выстрелы отравляют
  ja:
    name: みどぼんぐり
    desc: ショットが毒を与える
  ko:
    name: 초록규토리
    desc: 탄이 독을 입힌다
  zh:
    name: 绿球果
    desc: 你的弹会使敌人中毒
  zt:
    name: 綠球果
    desc: 你的彈會讓敵人中毒
---
Vos tirs empoisonnent

## Fonctionnement
- Chaque coup empoisonne l'ennemi pendant 2,5 s (voir [effets de statut](../mechanics/estados.html)). Le poison inflige des dégâts toutes les 0,5 s : 12 % des dégâts du tir qui l'a appliqué, jamais moins de 1,5. Cela fait 5 ticks.
- Frapper de nouveau relance la durée ; un tir plus fort augmente les dégâts par tick.
- Le poison est garanti : aucun tirage. Il marche aussi sur les boss.

## Cumul
- Il ne se cumule pas : un second exemplaire n'empoisonne ni plus longtemps ni plus fort.
