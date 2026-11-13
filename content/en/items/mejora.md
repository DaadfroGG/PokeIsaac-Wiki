---
title: Upgrade
id: mejora
kind: passive
category: utility
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Damage
  value: +0.3 per floor you go down after picking it up
- label: Cap
  value: +4 (reached after 14 floors)
icon: items-ps/evo-item/up-grade.png
sprite: true
names:
  es:
    name: Mejora
    desc: Daño +0.3 cada vez que bajas de planta
  fr:
    name: Améliorator
    desc: Dégâts +0,3 à chaque étage descendu
  de:
    name: Upgrade
    desc: Schaden +0,3 bei jedem Abstieg in eine tiefere Etage
  it:
    name: Upgrade
    desc: Danni +0,3 ogni volta che scendi di piano
  pt:
    name: Melhora
    desc: Dano +0,3 cada vez que você desce de andar
  ru:
    name: Апгрейд
    desc: Урон +0,3 при каждом спуске на этаж ниже
  ja:
    name: アップグレード
    desc: 階を下りるたびにダメージ+0.3
  ko:
    name: 업그레이드
    desc: 층을 내려갈 때마다 대미지 +0.3
  zh:
    name: 升级数据
    desc: 每下一层，伤害+0.3
  zt:
    name: 升級資料
    desc: 每往下一層，傷害+0.3
---
Damage +0.3 each time you go down a floor

## How it works
- It gives nothing right away: each time you go down a floor after picking it up, you gain Damage +0.3.
- The bonus stops at +4, after 14 floors.
- It is a normal flat Damage bonus: it shows on the HUD and follows the [diminishing returns](../mechanics/rendimientos.html), so the later points count for less.

## Stacking
- A second copy does nothing more: same counter, same +4 cap.
