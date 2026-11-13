---
title: Graine Herbe
id: m_semilla_hierba
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Liane
  value: 15 % de vos dégâts, 15 fois par seconde
- label: Longueur
  value: Jusqu'à 160 px entre deux tirs
- label: Par seconde
  value: Jusqu'à 225 % de vos dégâts à un ennemi qui reste dessus
- label: Effets d'objets
  value: Jamais
icon: items-ps/hold-item/grassy-seed.png
sprite: true
names:
  en:
    name: Grassy Seed
    desc: Your shots are linked by a vine that hurts enemies crossing it
  es:
    name: Semilla Hierba
    desc: Tus disparos van unidos por una enredadera que hiere a los enemigos que la cruzan
  de:
    name: Gras-Samen
    desc: Deine Schüsse sind durch eine Ranke verbunden, die Gegner verletzt, die sie kreuzen
  it:
    name: Erbaseme
    desc: I tuoi tiri sono uniti da un rampicante che ferisce i nemici che lo attraversano
  pt:
    name: Semente da Relva
    desc: Seus tiros vão unidos por uma trepadeira que fere os inimigos que a cruzam
  ru:
    name: Травяное семя
    desc: Твои выстрелы соединены лианой, которая ранит пересекающих ее врагов
  ja:
    name: グラスシード
    desc: ショットがつる草でつながり、横切った敵にダメージを与える
  ko:
    name: 그래스시드
    desc: 탄들이 덩굴로 이어져, 덩굴을 지나는 적에게 피해를 준다
  zh:
    name: 青草种子
    desc: 你的弹之间由藤蔓相连，会伤害穿过藤蔓的敌人
  zt:
    name: 青草種子
    desc: 你的彈之間有藤蔓相連，會傷害穿過的敵人
---
Vos tirs sont reliés par une liane qui blesse les ennemis qui la traversent

## Fonctionnement
- Chacun de vos tirs est relié par une liane au tir lancé juste avant, tant que les deux sont à moins de 160 px. Un tir plus éloigné n'a pas de liane.
- 15 fois par seconde, chaque ennemi qui touche une liane prend 15 % de vos Dégâts. Un ennemi qui reste une seconde entière sur une liane prend jusqu'à 225 % de vos Dégâts.
- La liane a votre type : la [table des types](../mechanics/tabla_tipos.html) s'applique, et ses coups peuvent déclencher le statut de votre [passif de type](../mechanics/pasivas_escalan.html).
- Les coups de liane ne déclenchent jamais d'effets d'objets et ne font jamais de coup critique.
- Elle blesse aussi les boss. Plus vous avez de tirs en l'air (cadence rapide, plusieurs tirs par salve), plus il y a de lianes.

## Cumul
- Un deuxième exemplaire n'apporte rien de plus.
