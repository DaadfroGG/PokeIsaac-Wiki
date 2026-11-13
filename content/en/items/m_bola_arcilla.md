---
title: Polished Mud Ball
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
- text: Fire rate -
  good: false
- text: Damage +1
  good: true
details:
- label: Damage
  value: '+1'
- label: Fire rate
  value: -5 (slower)
- label: Fragments
  value: 8 per ball (+2 per extra shot in the volley)
- label: Fragment damage
  value: 11 % of the ball's damage each
- label: Fragment range
  value: 90 to 180 px
icon: items-ps/partner-gift/polished-mud-ball.png
sprite: true
names:
  es:
    name: Bola de Arcilla
    desc: Tus disparos vuelan en arco y, al caer, revientan en una lluvia de trozos
  fr:
    name: Boulette de Boue
    desc: Vos tirs volent en arc et, en retombant, éclatent en une pluie de fragments
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
Your shots fly in an arc and, on landing, burst into a shower of fragments

{{< clip >}}

## How it works
- Your shots are lobbed in an arc. They fly over rocks and obstacles and land at the end of their range.
- When the ball lands, or as soon as it touches an enemy, it bursts into 8 fragments flying in all directions. Each extra shot in your volley adds 2 fragments to every burst (never fewer than 2 fragments).
- The ball deals its normal damage on a direct hit. Each fragment deals 11 % of the ball's damage, is smaller than the ball and flies 90 to 180 px.
- Fragments are child shots: they do not trigger on-hit item effects.

## Stacking
- The arc and burst do not change with more copies, but the stats do: +1 Damage and -5 Fire rate per copy.
