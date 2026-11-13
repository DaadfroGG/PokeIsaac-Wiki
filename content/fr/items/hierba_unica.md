---
title: Herbe Pouvoir
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
- label: Cadence
  value: ×1,67 tir par seconde (temps entre deux tirs ×0,6)
- label: Durée
  value: 4 s à partir de l'entrée dans un combat
- label: Quand
  value: Chaque salle qui a encore des ennemis
icon: items-ps/hold-item/power-herb.png
sprite: true
names:
  en:
    name: Power Herb
    desc: At the start of each fight, very high fire rate for 4 seconds
  es:
    name: Hierba Única
    desc: Al empezar cada combate, cadencia muy alta durante 4 segundos
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
Au début de chaque combat, cadence très élevée pendant 4 secondes

## Fonctionnement
- Chaque fois que vous entrez dans une salle qui a encore des ennemis, le temps entre vos tirs est multiplié par 0,6 pendant 4 secondes : environ 67 % de tirs en plus par seconde.
- Le compte à rebours démarre à l'entrée, pas quand les ennemis apparaissent.
- La limite de cadence s'applique toujours : jamais plus de 12 tirs par seconde.
- Elle se multiplie avec [Vitesse +](velocidad_x.html) : avec les deux, le temps entre les tirs est ×0,48 pendant ces 4 s.

## Cumul
- Un deuxième exemplaire ne fait rien de plus : toujours ×0,6 pendant 4 s.
