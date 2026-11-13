---
title: Focus Sash
id: cinta
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Effect
  value: Survive one fatal hit
- label: Health left
  value: ½ heart
- label: Uses
  value: '1'
icon: items/focus-sash.png
sprite: true
names:
  es:
    name: Cinta Focus
    desc: Sobrevive una vez a un golpe mortal
  fr:
    name: Ceinture Force
    desc: Vous survivez une fois à un coup fatal
  de:
    name: Fokusgurt
    desc: Überlebe einmal einen tödlichen Treffer
  it:
    name: Focalnastro
    desc: Sopravvivi una volta a un colpo letale
  pt:
    name: Faixa Foco
    desc: Sobrevive uma vez a um golpe fatal
  ru:
    name: Пояс фокуса
    desc: Один раз выдерживаешь смертельный удар
  ja:
    name: きあいのタスキ
    desc: 致命傷を一度だけ耐える
  ko:
    name: 기합의띠
    desc: 치명적인 공격을 한 번 버틴다
  zh:
    name: 气势披带
    desc: 承受一次致命伤害后存活
  zt:
    name: 氣勢披帶
    desc: 能撐過一次致命攻擊
---
Survive a fatal hit once

## How it works
- The first time a hit would bring your red hearts to zero, you survive with half a heart instead.
- It works only once: the item is used up (it stays in your inventory but does nothing more).
- Soul hearts are lost first, as usual. The sash only acts when your red hearts would run out.
- You still get the usual invulnerability after the hit.

## Stacking
- A second copy picked up before the first is used does nothing more: only one fatal hit is saved.
