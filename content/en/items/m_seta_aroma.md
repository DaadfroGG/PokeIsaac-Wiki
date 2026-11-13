---
title: Balm Mushroom
id: m_seta_aroma
kind: passive
category: shot
family: module
tier: 3
pools:
- treasure
pool_weight: 2
details:
- label: Joltik
  value: 10 % per hit (+1 % per Luck), up to 4 at a time
- label: Bite
  value: 2× your Damage (at least 2), Bug type
- label: Lifetime
  value: 2 bites or 10 s, gone when you leave the room
icon: items-ps/valuable-item/balm-mushroom.png
sprite: true
names:
  es:
    name: Seta Aroma
    desc: A veces, al golpear a un enemigo, nace un Joltik que ataca a los demás (hasta cuatro)
  fr:
    name: Champi Suave
    desc: Parfois, en touchant un ennemi, un Statitik éclot et attaque les autres (jusqu'à quatre)
  de:
    name: Duftpilz
    desc: Manchmal schlüpft beim Treffen eines Gegners ein Wattzapf, der die anderen angreift (bis zu vier)
  it:
    name: Profumfungo
    desc: A volte, colpendo un nemico, nasce un Joltik che attacca gli altri (fino a quattro)
  pt:
    name: Cogumelo Aromático
    desc: Às vezes, ao acertar um inimigo, nasce um Joltik que ataca os outros (até quatro)
  ru:
    name: Ароматный гриб
    desc: Иногда при ударе по врагу вылупляется Джолтик и атакует остальных (до четырех)
  ja:
    name: かおるキノコ
    desc: ときどき、敵に命中するとバチュルが生まれ、他の敵を攻撃する（最大4匹）
  ko:
    name: 향기버섯
    desc: 가끔 적을 맞히면 다른 적을 공격하는 파쪼옥이 태어난다 (최대 4마리)
  zh:
    name: 芳香蘑菇
    desc: 有时击中敌人时会孵出一只电电虫，攻击其他敌人（最多四只）
  zt:
    name: 芳香蘑菇
    desc: 有時命中敵人時會孵出一隻電電蟲攻擊其他敵人（最多四隻）
---
Sometimes, on hitting an enemy, a Joltik hatches and attacks the others (up to four)

## How it works
- Each time one of your shots hits an enemy, there is a 10 % chance (+1 % per point of Luck) that a Joltik hatches on it.
- The Joltik runs at the nearest enemy (up to 600 px away) and bites it for twice your Damage (at least 2), as a Bug-type hit. After its second bite, or after 10 seconds, it disappears.
- You can have at most 4 Joltiks at the same time. They are temporary [companions](../mechanics/companeros.html): they don't count toward your companion limit and they vanish when you leave the room.
- Any hit can hatch one, including split shots, but not companion hits or hits that never trigger items (bounces, vines, chain lightning).
- [Exp. Share](repartir_exp.html) doesn't double the Joltik bites.

## Stacking
- A second copy does nothing more: same chance, same limit of 4.
