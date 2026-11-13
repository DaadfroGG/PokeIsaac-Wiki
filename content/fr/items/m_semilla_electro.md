---
title: Graine Électrik
id: m_semilla_electro
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Portée +40
  good: true
details:
- label: Portée
  value: '+40'
- label: Attraction
  value: Ennemis à moins de 100 px d'un tir
- label: Force
  value: Environ 40 px par seconde
- label: Boss
  value: Jamais attirés
icon: items-ps/hold-item/electric-seed.png
sprite: true
names:
  en:
    name: Electric Seed
    desc: Your shots pull nearby enemies in as they pass
  es:
    name: Semilla Electro
    desc: Tus disparos atraen a su paso a los enemigos cercanos
  de:
    name: Elektro-Samen
    desc: Deine Schüsse ziehen Gegner in der Nähe im Vorbeiflug an
  it:
    name: Elettroseme
    desc: I tuoi tiri attirano al loro passaggio i nemici vicini
  pt:
    name: Semente Elétrica
    desc: Seus tiros atraem os inimigos próximos por onde passam
  ru:
    name: Электрическое семя
    desc: Твои выстрелы притягивают ближних врагов на своем пути
  ja:
    name: エレキシード
    desc: ショットが通り道の近くの敵を引き寄せる
  ko:
    name: 일렉트릭시드
    desc: 탄이 지나가며 주변 적을 끌어당긴다
  zh:
    name: 电气种子
    desc: 你的弹会在经过时吸引附近的敌人
  zt:
    name: 電氣種子
    desc: 你的彈會把沿途附近的敵人吸過去
---
Vos tirs attirent les ennemis proches sur leur passage

## Fonctionnement
- Pendant qu'un tir vole, chaque ennemi à moins de 100 px est tiré vers lui, à environ 40 px par seconde.
- Ça marche sur tous vos tirs à la fois : une salve de plusieurs tirs attire plus fort les ennemis proches de plusieurs tirs.
- Les boss ne sont jamais attirés. Les ennemis au sol s'arrêtent quand même contre les murs et les rochers ; les ennemis volants non.
- L'attraction n'inflige aucun dégât en elle-même.

## Cumul
- L'attraction n'est pas plus forte avec un deuxième exemplaire. Les +40 de Portée s'ajoutent à nouveau.
