---
title: Basement Key
id: llave_sotano
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Gain
  value: 1 key
- label: Cap
  value: 99 keys
icon: items-ps/key-item/basement-key.png
sprite: true
names:
  es:
    name: Llave Sótano
    desc: Te da una llave
  fr:
    name: Clé Sous-Sol
    desc: Vous donne une clé
  de:
    name: Kelleröffner
    desc: Gibt dir einen Schlüssel
  it:
    name: Chiave sotterr.
    desc: Ti dà una chiave
  pt:
    name: Chave do Porão
    desc: Dá uma chave
  ru:
    name: Подвальный ключ
    desc: Дает тебе ключ
  ja:
    name: ちかのかぎ
    desc: カギを1個もらえる
  ko:
    name: 지하의열쇠
    desc: 열쇠를 1개 준다
  zh:
    name: 地下钥匙
    desc: 给你一把钥匙
  zt:
    name: 地下鑰匙
    desc: 給你一把鑰匙
---
Gives you a key

## How it works
- You get one key.
- At 99 keys it can't be used and you keep the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): you get 2 keys.
