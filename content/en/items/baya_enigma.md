---
title: Enigma Berry
id: baya_enigma
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Chance
  value: 30 % each time you are hit
- label: Heal
  value: ½ heart
- label: Limit
  value: Items heal at most 30 % of max health per 10 s
icon: items-ps/berry/enigma.png
sprite: true
names:
  es:
    name: Baya Enigma
    desc: Al recibir un golpe, a veces recuperas medio corazón
  fr:
    name: Baie Enigma
    desc: Quand vous êtes touché, vous récupérez parfois un demi-cœur
  de:
    name: Enigmabeere
    desc: Wirst du getroffen, erholst du dich manchmal um ein halbes Herz
  it:
    name: Baccaenigma
    desc: Quando vieni colpito, a volte recuperi mezzo cuore
  pt:
    name: Baga Enigma
    desc: Ao receber um golpe, às vezes você recupera meio coração
  ru:
    name: Ягода Энигма
    desc: Получая удар, ты иногда восстанавливаешь полсердца
  ja:
    name: ナゾのみ
    desc: 被弾すると、ときどき半分のハートを回復する
  ko:
    name: 의문열매
    desc: 맞으면 가끔 하트 반 칸을 회복한다
  zh:
    name: 谜芝果
    desc: 受到攻击时，有时会恢复半颗心
  zt:
    name: 謎芝果
    desc: 受到攻擊時，有時會恢復半顆愛心
---
When you get hit, you sometimes recover half a heart

## How it works
- Each time you take a hit that hurts you (even if a soul heart absorbs it), there is a 30 % chance to heal half a heart. Luck does not change the chance.
- It does nothing if the hit kills you.
- This healing counts toward the limit on item healing: items can heal at most 30 % of your max health (minimum 2 hearts) per 10 seconds.
- Hits that are blocked or dodged don't trigger it.

## Stacking
- It does not stack: a second copy adds nothing.
