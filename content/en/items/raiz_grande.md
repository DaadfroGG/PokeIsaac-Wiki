---
title: Big Root
id: raiz_grande
kind: passive
category: defense
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Healing
  value: ½ heart per 40 damage dealt
- label: Limit
  value: Items heal at most 30 % of max health per 10 s
icon: items-ps/hold-item/big-root.png
sprite: true
names:
  es:
    name: Raíz Grande
    desc: Por cada 40 de daño que haces, recuperas medio corazón
  fr:
    name: Grosse Racine
    desc: Tous les 40 dégâts infligés, vous récupérez un demi-cœur
  de:
    name: Großwurzel
    desc: Für je 40 verursachten Schaden erholst du ein halbes Herz
  it:
    name: Granradice
    desc: Ogni 40 danni inflitti, recuperi mezzo cuore
  pt:
    name: Raiz Grande
    desc: A cada 40 de dano que você causa, recupera meio coração
  ru:
    name: Большой корень
    desc: За каждые 40 урона, что ты наносишь, восстанавливаешь полсердца
  ja:
    name: おおきなねっこ
    desc: 40ダメージ与えるごとに、半分のハートを回復
  ko:
    name: 큰뿌리
    desc: 대미지를 40 줄 때마다 하트 반 칸을 회복한다
  zh:
    name: 大根茎
    desc: 每造成40点伤害，恢复半颗心
  zt:
    name: 大根莖
    desc: 每造成40點傷害，回復半顆愛心
---
For every 40 damage you deal, you recover half a heart

## How it works
- All the damage your shots deal to enemies is added up. Every time the total reaches 40, you recover half a heart and the counter goes down by 40.
- The counter keeps filling at full health, but the heart is only given if you are missing health.
- This healing counts toward the limit on item healing: items can heal at most 30 % of your max health (minimum 2 hearts) per 10 seconds.

## Stacking
- It does not stack: a second copy adds nothing.
