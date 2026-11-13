---
title: Poche de Combat
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
- label: Ramassable
  value: 35 % par coup reçu
- label: Possibles
  value: Pièce 40 %, clé, bombe ou demi-cœur 20 % chacun
- label: Jamais
  value: Si le coup vous tue
icon: items-ps/storage/battle-pocket.png
sprite: true
names:
  en:
    name: Battle Pocket
    desc: When you get hit, you sometimes drop a pickup
  es:
    name: Bolsillo Combate
    desc: Al recibir un golpe, a veces se te cae un recogible
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
Quand vous êtes touché, vous perdez parfois un objet ramassable

## Fonctionnement
- Chaque fois qu'un ennemi ou un projectile vous blesse, il y a 35 % de chances qu'un ramassable tombe près de vous (à moins de 30 px). La Chance ne change pas cette probabilité.
- Le ramassable est tiré au hasard parmi cinq cases égales : pièce, pièce, clé, bombe, demi-cœur. Par coup reçu, vous obtenez donc : une pièce environ 14 % du temps, et une clé, une bombe ou un demi-cœur environ 7 % chacun.
- Il ne se déclenche pas si le coup est fatal.

## Cumul
- C'est un effet tout ou rien : une seconde Poche de Combat n'augmente ni la chance ni le nombre de ramassables.
