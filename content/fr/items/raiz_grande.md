---
title: Grosse Racine
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
- label: Soin
  value: ½ cœur par 40 dégâts infligés
- label: Limite
  value: Les objets soignent au plus 30 % des PV max par 10 s
icon: items-ps/hold-item/big-root.png
sprite: true
names:
  en:
    name: Big Root
    desc: For every 40 damage you deal, you recover half a heart
  es:
    name: Raíz Grande
    desc: Por cada 40 de daño que haces, recuperas medio corazón
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
Tous les 40 dégâts infligés, vous récupérez un demi-cœur

## Fonctionnement
- Tous les dégâts que vos tirs infligent aux ennemis sont additionnés. Chaque fois que le total atteint 40, vous récupérez un demi-cœur et le compteur baisse de 40.
- Le compteur continue de se remplir à PV pleins, mais le cœur n'est donné que s'il vous manque des PV.
- Ce soin compte dans la limite de soin des objets : les objets ne soignent au plus que 30 % de vos PV max (minimum 2 cœurs) par tranche de 10 secondes.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien.
