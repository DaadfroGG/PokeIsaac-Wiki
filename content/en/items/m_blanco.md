---
title: Ring Target
id: m_blanco
kind: passive
category: shot
family: module
tier: 3
pools:
- treasure
pool_weight: 2
details:
- label: Streak
  value: +10 % per hit, up to ×2
- label: Reset
  value: A shot that ends without hitting, or 4 s without a hit
- label: Counts
  value: First hit of each main shot only
icon: items-ps/hold-item/ring-target.png
sprite: true
names:
  es:
    name: Blanco
    desc: Cada disparo que aciertas seguido sube tu daño, hasta ×2; fallar uno lo reinicia
  fr:
    name: Point de Mire
    desc: Chaque tir réussi d'affilée augmente vos dégâts, jusqu'à ×2 ; en rater un les réinitialise
  de:
    name: Zielscheibe
    desc: Jeder Treffer in Folge erhöht deinen Schaden bis ×2; ein Fehlschuss setzt ihn zurück
  it:
    name: Facilsaglio
    desc: Ogni tiro a segno consecutivo aumenta i tuoi danni, fino a ×2; mancarne uno li azzera
  pt:
    name: Alvo em Anel
    desc: Cada tiro seguido que acerta aumenta seu dano, até ×2; errar um reinicia
  ru:
    name: Мишень
    desc: Каждое попадание подряд повышает твой урон до ×2; промах сбрасывает его
  ja:
    name: ねらいのまと
    desc: 連続で命中するたびにダメージが上がる（最大×2）。外すとリセットされる
  ko:
    name: 겨냥표적
    desc: 연속으로 맞힐 때마다 대미지가 올라 최대 ×2. 빗나가면 초기화
  zh:
    name: 标靶
    desc: 连续命中的每发弹都会提升伤害，最高×2；打空一发则重置
  zt:
    name: 標靶
    desc: 每連續命中一發，傷害就會提升，最高 ×2；落空一發就會重置
---
Each consecutive hit raises your damage, up to ×2; missing one resets it

## How it works
- Each main shot that hits an enemy adds one level, up to 10. Each level is +10 % damage, so ten hits in a row means ×2.
- Only the first hit of a shot counts, and companion, split and other child shots are ignored.
- The streak resets to zero if a main shot ends (wall, rock, end of range) without having hit anything, or if 4 seconds pass without a hit.
- The bonus is applied to your damage like any other multiplier.

## Stacking
- It does not stack: a second copy changes nothing (still +10 % per level, max ×2).
