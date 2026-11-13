---
title: Heat Rock
id: roca_calor
kind: passive
category: shot
family: core
tier: 2
pool_weight: 2
details:
- label: Burn chance
  value: 25 % per hit (+2 % per Luck)
- label: Burn length
  value: ×2 (4 s instead of 2 s on shots)
- label: Spread
  value: A burning enemy that dies sets enemies within 120 px on fire
- label: Where
  value: Not in any item pool right now
icon: items-ps/hold-item/heat-rock.png
sprite: true
names:
  es:
    name: Roca Calor
    desc: Las quemaduras duran el doble y tus disparos queman a veces
  fr:
    name: Roche Chaude
    desc: Les brûlures durent deux fois plus longtemps et vos tirs brûlent parfois
  de:
    name: Heißbrocken
    desc: Verbrennungen dauern doppelt so lang und deine Schüsse verbrennen manchmal
  it:
    name: Rocciacalda
    desc: Le ustioni durano il doppio e i tuoi tiri a volte ustionano
  pt:
    name: Rocha Calor
    desc: As queimaduras duram o dobro e seus tiros às vezes queimam
  ru:
    name: Жаркий камень
    desc: Ожоги длятся вдвое дольше, а твои выстрелы иногда поджигают
  ja:
    name: あついいわ
    desc: やけどの持続時間が2倍になり、ショットがときどきやけどを与える
  ko:
    name: 뜨거운바위
    desc: 화상이 2배 오래가고 탄이 가끔 화상을 입힌다
  zh:
    name: 炽热岩石
    desc: 灼伤持续时间加倍，你的弹有时会造成灼伤
  zt:
    name: 熾熱岩石
    desc: 灼傷持續時間加倍，你的彈有時會造成灼傷
---
Burns last twice as long and your shots sometimes burn

## How it works
- Every hit of your shots has a 25 % chance (+2 % per point of Luck) to [burn](../mechanics/estados.html) the enemy, whatever your type. Bosses can be burned.
- All burns from your shots last twice as long: 4 s instead of 2 s. That includes the [Fire passive](../mechanics/pasiva_fire.html) and other burning shots.
- Other burns you cause also last longer: burning explosions 4 s instead of 2 s, flames on the ground 2 s instead of 1 s, burns from fire bursts ×1.5.
- An enemy you have hit that dies while burning sets every enemy within 120 px on fire, for 4 s.

## How to get it
- It is not in any item pool at the moment: treasure rooms, shops and bosses don't offer it.

## Stacking
- A second copy does nothing more: same chance, burns still ×2.
