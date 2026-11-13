---
title: Pretty Feather
id: pluma_bella
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Speed
  value: Up to +1, grows over 15 s without getting hit
- label: Reset
  value: To 0 every time you get hit
icon: items-ps/valuable-item/pretty-wing.png
sprite: true
names:
  es:
    name: Pluma Bella
    desc: Cuanto más tiempo pasas sin recibir daño, más rápido vas
  fr:
    name: Jolie Plume
    desc: Plus vous restez longtemps sans subir de dégâts, plus vous allez vite
  de:
    name: Prachtfeder
    desc: Je länger du keinen Schaden nimmst, desto schneller bist du
  it:
    name: Piumabella
    desc: Più a lungo resti senza subire danni, più sei veloce
  pt:
    name: Pluma Bela
    desc: Quanto mais tempo você passa sem levar dano, mais rápido você vai
  ru:
    name: Красивое перо
    desc: Чем дольше ты не получаешь урона, тем быстрее двигаешься
  ja:
    name: きれいなハネ
    desc: ノーダメージの時間が長いほど、移動が速くなる
  ko:
    name: 고운깃털
    desc: 대미지를 받지 않는 시간이 길수록 빨라진다
  zh:
    name: 美丽之羽
    desc: 越久没受伤，移动越快
  zt:
    name: 美麗之羽
    desc: 越久沒受到傷害，移動越快
---
The longer you go without taking damage, the faster you move

## How it works
- From the last time you were hit, your Speed rises steadily: +0.07 per second, up to +1 after 15 seconds.
- The timer keeps running everywhere, also between rooms and in cleared rooms.
- Any hit you take puts the bonus back to 0.

## Stacking
- A second copy does nothing more: still +1 at most.
