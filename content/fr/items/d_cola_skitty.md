---
title: Queue Skitty
id: d_cola_skitty
kind: passive
category: defense
family: defense
tier: 3
pools:
- devil
- secret
pool_weight: 1
details:
- label: PV max
  value: 1 cœur (au ramassage)
- label: Vies
  value: '9'
- label: À la résurrection
  value: 1 cœur, 2,5 s d'invulnérabilité
icon: items-ps/other-item/fluffy-tail.png
sprite: true
names:
  en:
    name: Fluffy Tail
    desc: You're left with a single heart, but when you fall you come back to life, up to 9 times
  es:
    name: Cola Skitty
    desc: Te quedas con un solo corazón, pero al caer vuelves a la vida, hasta 9 veces
  de:
    name: Eneco-Rute
    desc: Du behältst nur ein Herz, kehrst aber nach jedem Sturz bis zu 9-mal ins Leben zurück
  it:
    name: Coda Skitty
    desc: Resti con un solo cuore, ma quando cadi torni in vita, fino a 9 volte
  pt:
    name: Cauda Fofa
    desc: Você fica com um só coração, mas ao cair volta à vida, até 9 vezes
  ru:
    name: Хвост Скитти
    desc: У тебя остается одно сердце, но, упав, ты возвращаешься к жизни, до 9 раз
  ja:
    name: エネコのシッポ
    desc: ハートが1つだけ残りますが、倒れても最大9回まで復活します
  ko:
    name: 에나비꼬리
    desc: 하트가 1칸만 남지만, 쓰러지면 부활한다 (최대 9번)
  zh:
    name: 向尾喵的尾巴
    desc: 你只剩一颗心，但倒下后会复活，最多9次
  zt:
    name: 向尾喵的尾巴
    desc: 你只會剩下一顆愛心，但倒下時會復活，最多9次
---
Il ne vous reste qu'un seul cœur, mais quand vous tombez, vous revenez à la vie, jusqu'à 9 fois

## Fonctionnement
- Au ramassage, vos PV max tombent à un seul cœur, et vous obtenez 9 vies.
- Chaque fois que vous devriez mourir, vous revenez à la vie avec 1 cœur et 2,5 secondes d'invulnérabilité, et perdez une vie. Un message indique combien il en reste.
- Vous pouvez regagner des cœurs ensuite (ramassages, objets) : les PV max ne baissent qu'au moment où vous ramassez l'objet.
- Si vous avez aussi le [Rappel Max](d_revivir_maximo.html), il est utilisé en premier.

## Cumul
- Un second exemplaire ne donne pas 9 vies de plus et ne baisse pas de nouveau vos PV.
