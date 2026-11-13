---
title: Full Restore
id: restaurar_todo
kind: active
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
charge: 10
details:
- label: Charge
  value: 10 rooms
- label: Heal
  value: All your health
- label: At full health
  value: Can't be used
icon: items-ps/medicine/full-restore.png
sprite: true
names:
  es:
    name: Restaurar Todo
    desc: Te cura toda la vida
  fr:
    name: Guérison
    desc: Restaure toute votre vie
  de:
    name: Top-Genesung
    desc: Stellt dein ganzes Leben wieder her
  it:
    name: Ricarica totale
    desc: Ti ripristina tutta la vita
  pt:
    name: Restaurar Tudo
    desc: Restaura toda a sua vida
  ru:
    name: Полное восстановление
    desc: Восстанавливает все здоровье
  ja:
    name: かいふくのくすり
    desc: HPを全回復する
  ko:
    name: 회복약
    desc: 체력을 모두 회복한다
  zh:
    name: 全复药
    desc: 为你恢复全部生命
  zt:
    name: 全復藥
    desc: 完全恢復你的生命
---
Fully restores your health

## How it works
- Charge: 10 rooms. Every room you clear gives 1 charge, so a full charge takes 10 cleared rooms.
- Restores all your red hearts at once. The healing limit on items does not apply to it.
- It can't be used while your health is already full, and then no charge is spent. Soul hearts don't count as health for this.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With a [Cell Battery](d_pila.html) the item can store twice its charge.
