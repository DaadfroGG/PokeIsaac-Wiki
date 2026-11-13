---
title: Battle Pocket
id: d_bolsillo
kind: passive
category: utility
family: defense
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Pickup
  value: 35 % per hit
- label: Possible drops
  value: Coin 40 %, key, bomb or half heart 20 % each
- label: Never
  value: If the hit kills you
icon: items-ps/storage/battle-pocket.png
sprite: true
names:
  es:
    name: Bolsillo Combate
    desc: Al recibir un golpe, a veces se te cae un recogible
  fr:
    name: Poche de Combat
    desc: Quand vous êtes touché, vous perdez parfois un objet ramassable
  de:
    name: Kampftasche
    desc: Wirst du getroffen, lässt du manchmal ein Pickup fallen
  it:
    name: Tasca lotta
    desc: Quando vieni colpito, a volte ti cade un oggetto raccoglibile
  pt:
    name: Bolso de Batalha
    desc: Ao receber um golpe, às vezes você derruba um coletável
  ru:
    name: Боевой карман
    desc: Получая удар, ты иногда роняешь припас
  ja:
    name: バトルポケット
    desc: 被弾すると、ときどき拾えるものを落とす
  ko:
    name: 배틀포켓
    desc: 맞으면 가끔 줍는 아이템을 떨어뜨린다
  zh:
    name: 对战口袋
    desc: 受到攻击时，有时会掉落一件拾取物
  zt:
    name: 對戰口袋
    desc: 受到攻擊時，有時會掉出一個可拾取物
---
When you get hit, you sometimes drop a pickup

## How it works
- Each time an enemy or a projectile hurts you, there is a 35 % chance that a pickup falls near you (within 30 px). Luck does not change the chance.
- The pickup is chosen at random among five equal slots: coin, coin, key, bomb, half heart. So per hit you get: a coin about 14 % of the time, and a key, a bomb or a half heart about 7 % each.
- It does not trigger if the hit is fatal.

## Stacking
- It is an on/off effect: a second Battle Pocket does not raise the chance or give a second pickup.
