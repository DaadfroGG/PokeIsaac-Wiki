---
title: Grassy Seed
id: m_semilla_hierba
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Vine
  value: 15 % of your damage, 15 times per second
- label: Length
  value: Up to 160 px between shots
- label: Per second
  value: Up to 225 % of your damage to an enemy standing on it
- label: Item effects
  value: Never
icon: items-ps/hold-item/grassy-seed.png
sprite: true
names:
  es:
    name: Semilla Hierba
    desc: Tus disparos van unidos por una enredadera que hiere a los enemigos que la cruzan
  fr:
    name: Graine Herbe
    desc: Vos tirs sont reliés par une liane qui blesse les ennemis qui la traversent
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
Your shots are linked by a vine that hurts enemies crossing it

## How it works
- Each of your shots is tied by a vine to the shot you fired just before it, as long as the two are less than 160 px apart. A shot farther away has no vine.
- 15 times per second, every enemy touching a vine takes 15 % of your Damage. An enemy that stays on a vine for a full second takes up to 225 % of your Damage.
- The vine uses your type: the [type chart](../mechanics/tabla_tipos.html) applies, and its hits can trigger your [type passive](../mechanics/pasivas_escalan.html) status.
- Vine hits never trigger item effects and never crit.
- It hurts bosses too. The more shots you have in the air (fast fire rate, several shots per volley), the more vines there are.

## Stacking
- A second copy does nothing more.
