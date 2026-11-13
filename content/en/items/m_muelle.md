---
title: Stretchy Spring
id: m_muelle
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Fire rate +
  good: true
details:
- label: Fire rate
  value: -2 (faster, per copy)
- label: Hold time
  value: Up to 4 s
- label: Release
  value: When you stop firing
icon: items-ps/partner-gift/stretchy-spring.png
sprite: true
names:
  es:
    name: Muelle Estirado
    desc: Mientras disparas, tus disparos se quedan quietos en el aire; al soltar, salen todos a la vez
  fr:
    name: Ressort Détendu
    desc: Pendant que vous tirez, vos tirs restent figés dans l'air ; en relâchant, ils partent tous à la fois
  de:
    name: Spiralfeder
    desc: Während du schießt, bleiben deine Schüsse regungslos in der Luft stehen; beim Loslassen fliegen alle gleichzeitig los
  it:
    name: Molla elastica
    desc: Mentre spari, i tuoi tiri restano fermi in aria; quando rilasci, partono tutti insieme
  pt:
    name: Mola Elástica
    desc: Enquanto você atira, seus tiros ficam parados no ar; ao soltar, todos saem de uma vez
  ru:
    name: Растянутая пружина
    desc: Пока стреляешь, выстрелы зависают в воздухе; когда отпускаешь, все летят разом
  ja:
    name: のびたバネ
    desc: ショット中、弾は空中で止まったままになり、離すと一斉に飛び出します
  ko:
    name: 늘어난용수철
    desc: 발사하는 동안 탄이 공중에 멈춰 있다가, 버튼을 놓으면 한꺼번에 날아간다
  zh:
    name: 松掉的弹簧
    desc: 射击时，你的弹会悬停在空中；松开后，全部一齐飞出
  zt:
    name: 鬆掉的彈簧
    desc: 射擊時彈會停在半空中；放開後全部一起飛出
---
While you fire, your shots hang still in the air; on release, they all fly at once

{{< clip >}}

## How it works
- While you keep firing, your shots slow down and stop in the air a short distance from you (after about 0.1 s). They stay there, still dangerous.
- When you stop firing, or after 4 s of hanging, all of them fly off again at once with their original speed and direction.
- A hanging shot has at least half of its range left. Shots that hang pile up into a wall of shots; companion shots are not affected.

## Stacking
- The hanging effect does not change; the fire rate bonus is added for each copy.
