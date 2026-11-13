---
title: Bande Étreinte
id: banda_atadura
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Dégâts
  value: +30 % aux ennemis ralentis
- label: Ralentissement
  value: Chaque coup ralentit 1,5 s
- label: Boss
  value: Ralentis et touchés aussi
icon: items-ps/hold-item/binding-band.png
sprite: true
names:
  en:
    name: Binding Band
    desc: Slowed enemies take 30% more damage (slowing belongs to the Ice and Water types)
  es:
    name: Banda Atadura
    desc: Los enemigos ralentizados reciben un 30 % más de daño (frenar es de los tipos Hielo y Agua)
  de:
    name: Klammerband
    desc: Verlangsamte Gegner erleiden 30 % mehr Schaden (Verlangsamen gehört zu den Typen Eis und Wasser)
  it:
    name: Legafascia
    desc: I nemici rallentati subiscono il 30 % di danni in più (rallentare è dei tipi Ghiaccio e Acqua)
  pt:
    name: Faixa Atadora
    desc: Os inimigos desacelerados recebem 30% a mais de dano (frear é dos tipos Gelo e Água)
  ru:
    name: Связывающая повязка
    desc: Замедленные враги получают на 30 % больше урона (замедление - у типов Лед и Вода)
  ja:
    name: しめつけバンド
    desc: 足止めされた敵は30%多くダメージを受ける（足止めはこおりとみずタイプ）
  ko:
    name: 조임밴드
    desc: 감속된 적은 대미지를 30% 더 받는다(감속은 얼음과 물 타입의 몫)
  zh:
    name: 紧绑束带
    desc: 被减速的敌人受到的伤害+30%（减速属于冰和水属性）
  zt:
    name: 緊綁束帶
    desc: 被減速的敵人會多受到30%傷害（減速屬於冰和水屬性）
---
Les ennemis ralentis subissent 30 % de dégâts en plus (ralentir est propre aux types Glace et Eau)

## Fonctionnement
- Vos tirs ralentissent chaque ennemi touché pendant 1,5 seconde (le compte repart à chaque coup). Un ennemi ralenti marche à mi-vitesse.
- Chaque coup porté à un ennemi ralenti inflige 30 % de dégâts en plus. En pratique, dès votre deuxième coup le bonus est presque toujours actif, car vos propres tirs maintiennent le ralentissement.
- Le ralentissement vient aussi des [passifs Glace et Eau](../mechanics/estados.html) et de toute autre source : les 30 % s'appliquent à tout ennemi ralenti, quelle que soit la cause.
- Les boss sont ralentis aussi (seulement leur marche, entre deux attaques) et subissent les 30 % en plus.
- Les +30 % sont appliqués à l'impact du tir : ils n'apparaissent donc pas dans vos Dégâts affichés et ne sont pas limités par le plafond de ×3 des multiplicateurs.

## Cumul
- L'effet de ralentissement est tout ou rien et les +30 % ne se cumulent pas : une seconde Bande Étreinte ne change rien.
- Il se multiplie avec les autres bonus à l'impact : contre un boss ralenti, la [Ceinture Pro](cinta_experto.html) donne ×1,3 × 1,3 = ×1,69.
