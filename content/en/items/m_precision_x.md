---
title: X Accuracy
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
- label: Auto-aim
  value: Locks onto the nearest enemy; your shots fly at it when you shoot
- label: Change target
  value: Shoot toward another enemy
icon: items-ps/battle-item/x-accuracy.png
sprite: true
names:
  es:
    name: Precisión X
    desc: "Una diana se fija sola en el enemigo más cercano y, al disparar, tus disparos van hacia ella; la dirección en que disparas elige otro"
  fr:
    name: Précision +
    desc: "Une cible se fixe toute seule sur l'ennemi le plus proche et, quand vous tirez, vos tirs vont vers elle ; la direction de tir en choisit une autre"
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
A target locks onto the nearest enemy on its own and, when you shoot, your shots fly at it; the direction you shoot in picks another

## How it works
- A target marker locks onto the nearest enemy by itself and follows it. It does not shoot for you: you still press a fire key.
- When you shoot, your shots are aimed straight at the marked enemy, whatever direction you press.
- The direction you press also picks the target: when you shoot in a new direction, the enemy best lined up with it (and close) becomes the marked one. The marker then follows it until it dies, and then goes back to the nearest one.

## Stacking
- It does not stack: a second copy changes nothing.

## Changes
- **1.2.0 (17 Nov 2026):** it no longer shoots by itself. The marker still locks onto the nearest enemy and your shots still fly at it, but you have to press a fire key. *Before:* it kept firing at the marked enemy as long as there were enemies in the room, even with no fire key pressed.
