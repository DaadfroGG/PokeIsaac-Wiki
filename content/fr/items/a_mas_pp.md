---
title: PP Plus
id: a_mas_pp
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Copie
  value: 1 bonus au hasard au sol
- label: Pas copiés
  value: Articles de boutique, coffres
icon: items-ps/medicine/pp-up.png
sprite: true
names:
  en:
    name: PP Up
    desc: Duplicates a random pickup on the floor
  es:
    name: Más PP
    desc: Duplica un recogible al azar del suelo
  de:
    name: AP-Plus
    desc: Verdoppelt ein zufälliges Sammelobjekt am Boden
  it:
    name: PP-Su
    desc: Duplica un oggetto raccoglibile a caso dal pavimento
  pt:
    name: PP Up
    desc: Duplica um coletável aleatório do chão
  ru:
    name: Плюс ПП
    desc: Удваивает случайную находку на полу
  ja:
    name: ポイントアップ
    desc: 床に落ちている拾えるものを1つランダムに複製する
  ko:
    name: 포인트업
    desc: 바닥에 떨어진 아이템 하나를 무작위로 복제한다
  zh:
    name: ＰＰ提升剂
    desc: 复制地上一个随机的拾取物
  zt:
    name: ＰＰ提升劑
    desc: 複製地上一個隨機的掉落物
---
Duplique au hasard un objet ramassable au sol

## Fonctionnement
- Un bonus gratuit posé au sol de la salle, choisi au hasard, est copié ; la copie apparaît juste à côté.
- Les articles de boutique, tout ce qui a un prix et les coffres ne peuvent pas être choisis.
- S'il n'y a rien à affecter, rien ne se passe et vous gardez la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux bonus sont copiés (tirés séparément, donc ça peut être le même ou la première copie).
