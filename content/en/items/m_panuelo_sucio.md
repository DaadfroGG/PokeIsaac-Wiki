---
title: Grubby Hanky
id: m_panuelo_sucio
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Stuck
  value: 20 % per hit (+1 % per Luck), 2 s
- label: Damage
  value: 20 % of the hit (min. 0.5) every 0.33 s
- label: Bosses
  value: Never
icon: items-ps/key-item/grubby-hanky.png
sprite: true
names:
  es:
    name: Pañuelo Sucio
    desc: A veces un disparo se queda pegado al enemigo y le sigue haciendo daño unos segundos
  fr:
    name: Mouchoir Sale
    desc: Parfois, un tir reste collé à l'ennemi et continue de le blesser quelques secondes
  de:
    name: Schnäuztuch
    desc: Manchmal bleibt ein Schuss am Gegner haften und verletzt ihn noch ein paar Sekunden lang
  it:
    name: Pezza Sporca
    desc: A volte un tiro resta attaccato al nemico e continua a ferirlo per qualche secondo
  pt:
    name: Lenço Sujo
    desc: Às vezes um tiro gruda no inimigo e continua causando dano por alguns segundos
  ru:
    name: Грязный платок
    desc: Иногда выстрел прилипает к врагу и еще несколько секунд наносит урон
  ja:
    name: よごれたハンカチ
    desc: ときどきショットが敵にくっつき、数秒間ダメージを与え続ける
  ko:
    name: 더러운손수건
    desc: 가끔 탄이 적에게 달라붙어 몇 초 동안 계속 대미지를 준다
  zh:
    name: 脏手帕
    desc: 有时弹会黏在敌人身上，持续造成几秒伤害
  zt:
    name: 髒手帕
    desc: 有時射擊會黏在敵人身上，持續造成幾秒傷害
---
Sometimes a shot sticks to the enemy and keeps damaging it for a few seconds

## How it works
- Each hit on a non-boss enemy has a 20 % chance (+1 % per Luck) to stick to it for 2 s.
- While stuck, the enemy takes 20 % of that hit's damage (at least 0.5) every 0.33 s, 6 times: about 1.2 times the hit in total.

## Stacking
- It does not stack: a second copy does not raise the chance.
