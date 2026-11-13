---
title: Radiant Petal
id: petalo_radiante
kind: passive
category: utility
family: core
tier: 1
pools:
- angel
pool_weight: 2
details:
- label: Damage
  value: +0.2 per room cleared without getting hit
- label: Cap
  value: +3 (15 rooms)
- label: Rooms
  value: Combat rooms and boss rooms
icon: items-ps/key-item/radiant-petal.png
sprite: true
names:
  es:
    name: Pétalo Radiante
    desc: 'Cada sala que limpias sin que te hieran: daño +0.2 (hasta +3)'
  fr:
    name: Pétale Éclat
    desc: 'Chaque salle nettoyée sans être blessé : dégâts +0,2 (jusqu''à +3)'
  de:
    name: Kronblatt
    desc: 'Jeder Raum, den du unverletzt räumst: Schaden +0,2 (bis +3)'
  it:
    name: Petalo Lucente
    desc: 'Ogni stanza che liberi senza subire colpi: danni +0,2 (fino a +3)'
  pt:
    name: Pétala Radiante
    desc: 'Cada sala que você limpa sem ser ferido: Dano +0,2 (até +3)'
  ru:
    name: Сияющий лепесток
    desc: 'Каждая комната, зачищенная без ранений: урон +0,2 (до +3)'
  ja:
    name: かがやくはなびら
    desc: ダメージを受けずに部屋をクリアするたびにダメージ+0.2（最大+3）
  ko:
    name: 빛나는꽃잎
    desc: 피해 없이 방을 클리어할 때마다 대미지 +0.2(최대 +3)
  zh:
    name: 光辉花瓣
    desc: 每清空一个房间且未受伤：伤害+0.2（最高+3）
  zt:
    name: 光輝花瓣
    desc: 每在不受傷的情況下清空一個房間：傷害 +0.2（最多 +3）
---
Each room you clear without getting hurt: damage +0.2 (up to +3)

## How it works
- Each time you clear a combat room or a boss room without having been hit since you entered it, you gain Damage +0.2 for the rest of the run.
- Up to 15 rooms: +3.
- Getting hit only spoils the current room: the bonus already earned stays.
- It is a normal flat Damage bonus: it shows on the HUD and follows the [diminishing returns](../mechanics/rendimientos.html).

## Stacking
- A second copy does nothing more: same counter, same +3 cap.
