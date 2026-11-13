---
title: Ressort Détendu
id: m_muelle
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Cadence +
  good: true
details:
- label: Cadence
  value: -2 (plus rapide, par exemplaire)
- label: Attente
  value: Jusqu'à 4 s
- label: Libération
  value: Quand vous arrêtez de tirer
icon: items-ps/partner-gift/stretchy-spring.png
sprite: true
names:
  en:
    name: Stretchy Spring
    desc: While you fire, your shots hang still in the air; on release, they all fly at once
  es:
    name: Muelle Estirado
    desc: Mientras disparas, tus disparos se quedan quietos en el aire; al soltar, salen todos a la vez
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
Pendant que vous tirez, vos tirs restent figés dans l'air ; en relâchant, ils partent tous à la fois

{{< clip >}}

## Fonctionnement
- Tant que vous continuez à tirer, vos tirs ralentissent et s'immobilisent en l'air peu après leur départ (environ 0,1 s). Ils restent là, toujours dangereux.
- Quand vous arrêtez de tirer, ou après 4 s en suspens, tous repartent d'un coup avec leur vitesse et leur direction d'origine.
- Un tir en suspens garde au moins la moitié de sa portée. Les tirs suspendus forment un mur de tirs ; les tirs des compagnons ne sont pas touchés.

## Cumul
- L'effet de suspension ne change pas ; le bonus de cadence s'ajoute à chaque exemplaire.
