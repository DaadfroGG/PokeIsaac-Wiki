---
title: Boulette de Boue
id: m_bola_arcilla
kind: passive
category: shot
family: module
tier: 4
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Cadence -
  good: false
- text: Dégâts +1
  good: true
details:
- label: Dégâts
  value: '+1'
- label: Cadence
  value: -5 (plus lente)
- label: Éclats
  value: 8 par boule (+2 par tir supplémentaire dans la salve)
- label: Dégâts des éclats
  value: 11 % des dégâts de la boule chacun
- label: Portée des éclats
  value: 90 à 180 px
icon: items-ps/partner-gift/polished-mud-ball.png
sprite: true
names:
  en:
    name: Polished Mud Ball
    desc: Your shots fly in an arc and, on landing, burst into a shower of fragments
  es:
    name: Bola de Arcilla
    desc: Tus disparos vuelan en arco y, al caer, revientan en una lluvia de trozos
  de:
    name: Glanzkugel
    desc: Deine Schüsse fliegen im Bogen und zerplatzen beim Aufprall in einen Splitterregen
  it:
    name: Pallina di fango
    desc: I tuoi tiri volano ad arco e, atterrando, si frantumano in una pioggia di frammenti
  pt:
    name: Bola de Lama Polida
    desc: Seus tiros voam em arco e, ao cair, estouram numa chuva de fragmentos
  ru:
    name: Глиняный шар
    desc: Твои выстрелы летят по дуге и при падении разлетаются дождем осколков
  ja:
    name: ピカピカだんご
    desc: ショットが放物線を描いて飛び、着地すると破片の雨になって砕ける
  ko:
    name: 반짝반짝경단
    desc: 탄이 포물선을 그리며 날아가, 떨어지면 파편 비로 터진다
  zh:
    name: 光滑泥球
    desc: 你的弹以弧线飞行，落地时碎裂成一阵碎片雨
  zt:
    name: 光滑泥球
    desc: 你的彈會以拋物線飛行，落地時炸成一陣碎片雨
---
Vos tirs volent en arc et, en retombant, éclatent en une pluie de fragments

{{< clip >}}

## Fonctionnement
- Vos tirs sont lancés en cloche. Ils passent au-dessus des rochers et des obstacles et retombent en bout de portée.
- Quand la boule retombe, ou dès qu'elle touche un ennemi, elle explose en 8 éclats qui partent dans toutes les directions. Chaque tir supplémentaire de votre salve ajoute 2 éclats à chaque explosion (jamais moins de 2 éclats).
- La boule inflige ses dégâts normaux en touche directe. Chaque éclat inflige 11 % des dégâts de la boule, est plus petit qu'elle et vole de 90 à 180 px.
- Les éclats sont des tirs secondaires : ils ne déclenchent pas les effets d'objets au contact.

## Cumul
- L'arc et l'explosion ne changent pas avec plus d'exemplaires, mais les stats si : +1 Dégâts et -5 Cadence par exemplaire.
