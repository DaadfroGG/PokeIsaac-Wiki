---
title: Scanner
id: escaner
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 3
details:
- label: Damage taken
  value: +50 % from your hits
- label: Lasts
  value: Until the enemy dies
- label: Bosses
  value: Affected
icon: items-ps/key-item/scanner.png
sprite: true
names:
  es:
    name: Escáner
    desc: 'Analiza a los enemigos de la sala: reciben un 50 % más de daño'
  fr:
    name: Scanner
    desc: 'Analyse les ennemis de la salle : ils subissent 50 % de dégâts en plus'
  de:
    name: Scanner
    desc: 'Analysiert die Gegner im Raum: Sie erleiden 50 % mehr Schaden'
  it:
    name: Scanner
    desc: 'Analizza i nemici della stanza: subiscono il 50 % di danni in più'
  pt:
    name: Scanner
    desc: 'Analisa os inimigos da sala: recebem 50% a mais de dano'
  ru:
    name: Сканер
    desc: 'Сканирует врагов в комнате: они получают на 50 % больше урона'
  ja:
    name: たんちき
    desc: 部屋の敵を分析：受けるダメージが50%増える
  ko:
    name: 탐지기
    desc: '방에 있는 적을 분석한다: 받는 대미지가 50% 늘어난다'
  zh:
    name: 探测器
    desc: 分析房间内的敌人：它们受到的伤害增加50 %
  zt:
    name: 探測器
    desc: 分析房間內的敵人：使其受到的傷害增加50 %
---
Scans the enemies in the room: they take 50 % more damage

## How it works
- Every enemy in the room, bosses included, is scanned and takes 50 % more damage from your hits for the rest of its life.
- The bonus is applied when you hit, so it isn't shown in your Damage stat and isn't limited by the ×3 cap on damage multipliers.
- Only the enemies in the room when you use it are scanned; enemies that appear later are not.
- If there is nothing to affect, nothing happens and you keep the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: an enemy can only be scanned once.
