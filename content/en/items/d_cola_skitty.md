---
title: Fluffy Tail
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
- label: Max health
  value: 1 heart (when picked up)
- label: Lives
  value: '9'
- label: On revive
  value: 1 heart, 2.5 s invulnerable
icon: items-ps/other-item/fluffy-tail.png
sprite: true
names:
  es:
    name: Cola Skitty
    desc: Te quedas con un solo corazón, pero al caer vuelves a la vida, hasta 9 veces
  fr:
    name: Queue Skitty
    desc: Il ne vous reste qu'un seul cœur, mais quand vous tombez, vous revenez à la vie, jusqu'à 9 fois
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
You're left with a single heart, but when you fall you come back to life, up to 9 times

## How it works
- On pickup your max health drops to a single heart, and you get 9 lives.
- Each time you would die, you come back to life with 1 heart and 2.5 seconds of invulnerability, and lose one life. A message tells you how many are left.
- You can get hearts again later (pickups, items): max health only drops the moment you pick the item up.
- If you also have [Max Revive](d_revivir_maximo.html), it is used first.

## Stacking
- A second copy does not give 9 more lives and does not lower your health again.
