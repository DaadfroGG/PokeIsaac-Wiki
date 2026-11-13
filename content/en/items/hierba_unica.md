---
title: Power Herb
id: hierba_unica
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Fire rate
  value: ×1.67 shots per second (time between shots ×0.6)
- label: Duration
  value: 4 s from the moment you enter a fight
- label: When
  value: Every room that still has enemies
icon: items-ps/hold-item/power-herb.png
sprite: true
names:
  es:
    name: Hierba Única
    desc: Al empezar cada combate, cadencia muy alta durante 4 segundos
  fr:
    name: Herbe Pouvoir
    desc: Au début de chaque combat, cadence très élevée pendant 4 secondes
  de:
    name: Energiekraut
    desc: Zu Beginn jedes Kampfes 4 Sekunden lang sehr hohe Feuerrate
  it:
    name: Vigorerba
    desc: All'inizio di ogni scontro, cadenza altissima per 4 secondi
  pt:
    name: Erva do Poder
    desc: No início de cada combate, cadência altíssima por 4 segundos
  ru:
    name: Трава силы
    desc: В начале каждого боя очень высокий темп стрельбы на 4 секунды
  ja:
    name: パワフルハーブ
    desc: 戦闘開始時、4秒間連射速度が大幅に上がる
  ko:
    name: 파워풀허브
    desc: 전투가 시작될 때마다 4초 동안 연사가 매우 빨라진다
  zh:
    name: 强力香草
    desc: 每场战斗开始时，射速大幅提升，持续4秒
  zt:
    name: 強力香草
    desc: 每場戰鬥開始時，射速大幅提升，持續4秒
---
At the start of each fight, very high fire rate for 4 seconds

## How it works
- Each time you walk into a room that still has enemies, the time between your shots is multiplied by 0.6 for 4 seconds: about 67 % more shots per second.
- The timer starts when you enter, not when the enemies appear.
- The fire rate limit still applies: never more than 12 shots per second.
- It multiplies with [X Speed](velocidad_x.html): with both, the time between shots is ×0.48 during those 4 s.

## Stacking
- A second copy does nothing more: still ×0.6 for 4 s.
