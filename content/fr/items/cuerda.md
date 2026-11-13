---
title: Corde Sortie
id: cuerda
kind: active
family: core
tier: 1
pools:
- treasure
- shop
charge: 3
details:
- label: Destination
  value: La salle de départ de l'étage
- label: Pas pendant
  value: Un combat de boss ou d'arène
icon: items/escape-rope.png
sprite: true
names:
  en:
    name: Escape Rope
    desc: Returns to the starting room
  es:
    name: Cuerda Huida
    desc: Vuelve a la sala inicial
  de:
    name: Fluchtseil
    desc: Bringt dich zurück in den Startraum
  it:
    name: Fune di fuga
    desc: Torna alla stanza iniziale
  pt:
    name: Corda de Fuga
    desc: Volta à sala inicial
  ru:
    name: Веревка побега
    desc: Возвращает в стартовую комнату
  ja:
    name: あなぬけのヒモ
    desc: 最初の部屋にもどる
  ko:
    name: 동굴탈출로프
    desc: 시작 방으로 돌아간다
  zh:
    name: 离洞绳
    desc: 返回起始房
  zt:
    name: 離洞繩
    desc: 回到起始房間
---
Ramène à la salle de départ

## Fonctionnement
- Vous êtes ramené dans la salle de départ de l'étage actuel.
- Il ne fait rien si vous êtes déjà dans la salle de départ, tant qu'un boss est en vie dans la salle ou pendant un combat d'arène ; vous gardez la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : vous ne voyagez qu'une fois.
