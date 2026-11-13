---
title: Running Shoes
id: botas
kind: passive
category: utility
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: Speed +0.3
  good: true
details:
- label: Speed
  value: '+0.3'
- label: In a cleared room
  value: Speed ×1.3
icon: items-ps/hold-item/quick-powder.png
sprite: true
names:
  es:
    name: Botas de Correr
    desc: Velocidad +, y mucha más en las salas ya limpias
  fr:
    name: Chaussures de Course
    desc: Vitesse +, et bien plus dans les salles déjà nettoyées
  de:
    name: Sportschuhe
    desc: Tempo +, und viel mehr in bereits geräumten Räumen
  it:
    name: Scarpe da Corsa
    desc: Velocità +, e molta di più nelle stanze già ripulite
  pt:
    name: Tênis de Corrida
    desc: Velocidade +, e muito mais nas salas já limpas
  ru:
    name: Беговые кроссовки
    desc: Скорость +, и намного больше в зачищенных комнатах
  ja:
    name: ランニングシューズ
    desc: 移動速度+。クリア済みの部屋ではさらに大きく上がる
  ko:
    name: 러닝슈즈
    desc: 속도 +, 클리어한 방에서는 훨씬 더 +
  zh:
    name: 跑鞋
    desc: 速度+，在已清空的房间中大幅提升
  zt:
    name: 跑鞋
    desc: 速度+，在已清空的房間中大幅提升
---
Speed +, and much more in cleared rooms

## How it works
- Speed +0.3, added straight to your movement speed (no diminishing returns).
- On top of that, in a room where every enemy has been defeated, your movement speed is multiplied by 1.3. It applies again as soon as the next room is cleared, and it does not work in a room you have not cleared yet.

## Stacking
- Each copy adds another +0.3 Speed. The ×1.3 in cleared rooms is an on/off effect: more copies do not make it larger.
