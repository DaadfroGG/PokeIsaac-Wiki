---
title: Grelot Zen
id: campana_alivio
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Condition
  value: Terminer une salle sans être touché
- label: Récompense
  value: Un cœur ou une pièce
- label: Cœur
  value: 50 % si vous n'avez pas tous vos PV
- label: Pièce
  value: Sinon, si votre bourse est remplie à moins de 60 %
icon: items-ps/other-item/soothe-bell.png
sprite: true
names:
  en:
    name: Soothe Bell
    desc: Clear a room without getting hurt and a heart or coin appears
  es:
    name: Campana Alivio
    desc: Si limpias una sala sin que te hieran, sale un corazón o una moneda
  de:
    name: Sanftglocke
    desc: Wenn du einen Raum räumst, ohne getroffen zu werden, erscheint ein Herz oder eine Münze
  it:
    name: Calmanella
    desc: Se ripulisci una stanza senza essere ferito, compare un cuore o una moneta
  pt:
    name: Sino Calmante
    desc: Se você limpar uma sala sem ser ferido, aparece um coração ou uma moeda
  ru:
    name: Колокольчик спокойствия
    desc: Если зачистишь комнату без ранений, появится сердце или монета
  ja:
    name: やすらぎのすず
    desc: 攻撃を受けずに部屋をクリアすると、ハートかコインが出る
  ko:
    name: 평온의방울
    desc: 피격 없이 방을 클리어하면 하트나 동전이 나온다
  zh:
    name: 安抚之铃
    desc: 不受伤地清空房间，会出现一颗心或一枚硬币
  zt:
    name: 安撫之鈴
    desc: 沒受傷就清除房間時，會出現一顆愛心或一枚金幣
---
Videz une salle sans être touché et un cœur ou une pièce apparaît

## Fonctionnement
- Elle vérifie les salles qui commencent avec des ennemis (salles normales et salles de boss). Si vous en terminez une sans recevoir un seul coup, une récompense apparaît à côté de vous.
- Si vous n'avez pas tous vos PV, il y a 50 % de chances que la récompense soit un cœur. Sinon, c'est une pièce.
- La pièce n'apparaît que si votre bourse est remplie à moins de 60 %.
- Les coups entièrement bloqués ou esquivés ne comptent pas comme des coups.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien.
