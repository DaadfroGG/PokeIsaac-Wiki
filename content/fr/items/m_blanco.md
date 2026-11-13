---
title: Point de Mire
id: m_blanco
kind: passive
category: shot
family: module
tier: 3
pools:
- treasure
pool_weight: 2
details:
- label: Série
  value: +10 % par coup, jusqu'à ×2
- label: Remise à zéro
  value: Un tir qui finit sans toucher, ou 4 s sans coup au but
- label: Compte
  value: Seulement le premier coup de chaque tir principal
icon: items-ps/hold-item/ring-target.png
sprite: true
names:
  en:
    name: Ring Target
    desc: Each consecutive hit raises your damage, up to ×2; missing one resets it
  es:
    name: Blanco
    desc: Cada disparo que aciertas seguido sube tu daño, hasta ×2; fallar uno lo reinicia
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
Chaque tir réussi d'affilée augmente vos dégâts, jusqu'à ×2 ; en rater un les réinitialise

## Fonctionnement
- Chaque tir principal qui touche un ennemi ajoute un niveau, jusqu'à 10. Chaque niveau vaut +10 % de dégâts : dix coups d'affilée donnent donc ×2.
- Seul le premier coup d'un tir compte ; les tirs de compagnons, fragmentés et autres tirs secondaires sont ignorés.
- La série retombe à zéro si un tir principal se termine (mur, rocher, bout de portée) sans avoir touché quoi que ce soit, ou si 4 secondes passent sans coup au but.
- Le bonus s'applique à vos dégâts comme n'importe quel multiplicateur.

## Cumul
- Il ne se cumule pas : un second exemplaire ne change rien (toujours +10 % par niveau, max ×2).
