---
title: Silver Powder
id: polvo_plata
kind: passive
category: shot
family: core
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Split
  value: 2 shots on the first hit
- label: Damage
  value: 50 % of the shot that hit
- label: Angle
  value: About 34° to each side
- label: Range
  value: 160 px
icon: items-ps/hold-item/silver-powder.png
sprite: true
names:
  es:
    name: Polvo Plata
    desc: Al tocar a un enemigo, tus disparos se dividen en dos
  fr:
    name: Poudre Argentée
    desc: Quand ils touchent un ennemi, vos tirs se divisent en deux
  de:
    name: Silberstaub
    desc: Treffen deine Schüsse einen Gegner, teilen sie sich in zwei
  it:
    name: Argenpolvere
    desc: Quando colpiscono un nemico, i tuoi tiri si dividono in due
  pt:
    name: Pó de Prata
    desc: Ao atingir um inimigo, seus tiros se dividem em dois
  ru:
    name: Серебряный порошок
    desc: При попадании во врага твои выстрелы раздваиваются
  ja:
    name: ぎんのこな
    desc: 敵に当たると、弾が2つに分かれる
  ko:
    name: 은빛가루
    desc: 적에게 닿으면 탄이 둘로 갈라진다
  zh:
    name: 银粉
    desc: 击中敌人时，你的弹会分裂为二
  zt:
    name: 銀粉
    desc: 你的彈擊中敵人時，會分裂成兩顆
---
When they hit an enemy, your shots split in two

{{< clip >}}

## How it works
- The first time one of your own shots hits an enemy, two smaller shots burst out of that enemy, about 34° to each side of the shot's path.
- Each new shot deals 50 % of the damage of the shot that hit, is 30 % smaller and 10 % slower, flies 160 px at most and keeps the shot's type. They can't hit the enemy that made them.
- The new shots keep your shot effects (statuses, knockback, piercing…), but they never split again and don't trigger items that need your own shots.
- A piercing shot only splits on its first hit. Companion shots and other side shots never split. With a special weapon, at most one split per fire delay.

## Stacking
- A second copy does nothing more: still two shots.
