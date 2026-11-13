---
title: Dubious Disc
id: disco_extrano
kind: passive
category: shot
family: core
tier: 1
pool_weight: 2
stats:
- text: Damage +0.4
  good: true
details:
- label: Damage
  value: '+0.4'
- label: Shot type
  value: Random among the 18 types
icon: items-ps/evo-item/dubious-disc.png
sprite: true
names:
  es:
    name: Disco Extraño
    desc: Cada disparo es de un tipo al azar
  fr:
    name: CD Douteux
    desc: Chaque tir est d'un type aléatoire
  de:
    name: Dubiosdisc
    desc: Jeder Schuss hat einen zufälligen Typ
  it:
    name: Dubbiodisco
    desc: Ogni tiro è di un tipo a caso
  pt:
    name: Disco Duvidoso
    desc: Cada tiro é de um tipo aleatório
  ru:
    name: Сомнительный диск
    desc: Каждый выстрел случайного типа
  ja:
    name: あやしいパッチ
    desc: ショットのタイプが毎回ランダムになる
  ko:
    name: 괴상한패치
    desc: 탄마다 무작위 타입
  zh:
    name: 可疑补丁
    desc: 每发弹的属性随机
  zt:
    name: 可疑修正檔
    desc: 每發子彈的屬性隨機
---
Each shot is of a random type

{{< clip >}}

## How it works

- Adds +0.4 Damage.
- Each shot you fire gets a random type out of the 18 (equal chances), with its color. The shot uses that type on the [type chart](../mechanics/tabla_tipos.html) and for the type's status chance on hit.
- This item no longer appears in the regular item pools.

## Stacking

- Each copy adds +0.4 Damage. The random type is just switched on.
