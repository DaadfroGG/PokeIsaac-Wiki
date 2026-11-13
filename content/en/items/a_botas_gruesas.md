---
title: Heavy-Duty Boots
id: a_botas_gruesas
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Dash
  value: About 150 px in 0.27 s
- label: Damage
  value: Your Damage ×2.5 to each enemy you go through
- label: During the dash
  value: Nothing hurts you
icon: items-ps/hold-item/heavy-duty-boots.png
sprite: true
names:
  es:
    name: Botas Gruesas
    desc: Embistes hacia donde te mueves sin que te hieran, golpeando a todo lo que atraviesas
  fr:
    name: Grosses Bottes
    desc: Vous chargez dans la direction où vous bougez sans être blessé, en frappant tout ce que vous traversez
  de:
    name: Plateauschuhe
    desc: Du stürmst in deine Bewegungsrichtung, ohne verletzt zu werden, und triffst alles, was du durchquerst
  it:
    name: Scarponi robusti
    desc: Ti lanci nella direzione in cui ti muovi senza farti male, colpendo tutto ciò che attraversi
  pt:
    name: Botas Reforçadas
    desc: Você avança na direção em que se move sem se ferir, atingindo tudo que atravessa
  ru:
    name: Тяжелые ботинки
    desc: Делаешь рывок в сторону движения, не получая урона, и бьешь всех на пути
  ja:
    name: あつぞこブーツ
    desc: 移動方向に突進する。ダメージを受けず、通り抜けた敵すべてにダメージを与える
  ko:
    name: 통굽부츠
    desc: 움직이는 방향으로 다치지 않고 돌진해, 지나가는 모든 것을 공격한다
  zh:
    name: 厚底靴
    desc: 你会朝移动方向冲撞，不会受伤，并击中沿途的一切
  zt:
    name: 厚底靴
    desc: 朝移動方向衝撞且不會受傷，撞擊沿途的一切
---
You dash where you're moving without getting hurt, hitting everything you pass through

## How it works
- You dash in the direction you are moving (if you aren't moving, the way you last shot), about 150 px in 0.27 seconds. Walls and rocks stop you.
- Nothing can hurt you during the dash.
- Each enemy you touch on the way takes 2.5 times your Damage, once per dash, and is knocked back. Bosses take the damage but are not knocked back.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: the second dash replaces the first.
