---
title: Précision +
id: m_precision_x
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Visée auto
  value: Se fixe sur l'ennemi le plus proche ; vos tirs partent vers lui quand vous tirez
- label: Changer de cible
  value: Tirer vers un autre ennemi
icon: items-ps/battle-item/x-accuracy.png
sprite: true
names:
  en:
    name: X Accuracy
    desc: "A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another"
  es:
    name: Precisión X
    desc: "Una diana se fija sola en el enemigo más cercano y, al disparar, tus disparos van hacia ella; la dirección en que disparas elige otro"
  de:
    name: X-Genauigkeit
    desc: "A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another"
  it:
    name: Precisione X
    desc: "A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another"
  pt:
    name: Precisão X
    desc: "A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another"
  ru:
    name: Точность X
    desc: "A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another"
  ja:
    name: ヨクアタール
    desc: "A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another"
  ko:
    name: 잘-맞히기
    desc: "A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another"
  zh:
    name: 命中强化
    desc: "A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another"
  zt:
    name: 命中強化
    desc: "A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another"
---
Une cible se fixe toute seule sur l'ennemi le plus proche et, quand vous tirez, vos tirs vont vers elle ; la direction de tir en choisit une autre

## Fonctionnement
- Un marqueur se fixe tout seul sur l'ennemi le plus proche et le suit. Il ne tire pas à votre place : vous devez toujours appuyer sur une touche de tir.
- Quand vous tirez, vos tirs partent tout droit vers l'ennemi marqué, quelle que soit la direction choisie.
- La direction de tir choisit aussi la cible : quand vous tirez dans une nouvelle direction, l'ennemi le mieux aligné avec elle (et proche) devient l'ennemi marqué. Le marqueur le suit ensuite jusqu'à sa mort, puis revient au plus proche.

## Cumul
- Il ne se cumule pas : un second exemplaire ne change rien.

## Changements
- **1.2.0 (17 nov. 2026) :** il ne tire plus tout seul. Le marqueur se fixe toujours sur l'ennemi le plus proche et vos tirs partent toujours vers lui, mais il faut appuyer sur une touche de tir. *Avant :* il tirait sans arrêt sur l'ennemi marqué tant qu'il restait des ennemis dans la salle, même sans appuyer sur une touche de tir.
