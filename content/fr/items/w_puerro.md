---
title: Poireau
id: w_puerro
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Entaille
  value: ×0,5 Dégâts en arc, 75 px (+6 par Taille), environ 63° de chaque côté ; plus une onde ×0,4
- label: Taillade
  value: 'Chaque entaille qui touche : +15 % de dégâts, +6 px, 5 % plus rapide (jusqu''à 4)'
- label: Rotation
  value: 'À la série de 4 : 360°, ×1,6 Dégâts, plus des ondes ×2 Dégâts ; puis la série retombe'
- label: Série
  value: Retombe sur un raté ou après 0,9 s sans toucher
- label: Récupération
  value: 1,5 × votre délai (au moins 0,3 s)
- label: Équilibrage
  value: ×0,31
- label: Aussi
  value: Annule les tirs ennemis dans l'arc
- label: Si secondaire
  value: Entaille (×0,5 + onde) une fois par seconde sur un ennemi à moins de 72 px
icon: items-ps/hold-item/stick.png
sprite: true
names:
  en:
    name: Leek
    desc: 'Chained leek slashes: every slash that hits raises your Fury Cutter (more damage, reach and speed, up to 4); the next one is a full spin. Missing resets it'
  es:
    name: Puerro
    desc: 'Tajos de puerro encadenados: cada tajo que acierta sube tu Corte Furia (más daño, alcance y velocidad, hasta 4); el siguiente es un giro completo. Fallar lo reinicia'
  de:
    name: Lauchstange
    desc: 'Verkettete Lauchstangen-Hiebe: Jeder Treffer erhöht deine Zornklinge (mehr Schaden, Reichweite und Tempo, bis zu 4); der nächste ist eine volle Drehung. Ein Fehlschlag setzt sie zurück'
  it:
    name: Gambo
    desc: 'Fendenti di porro concatenati: ogni fendente che va a segno aumenta il tuo Tagliofuria (più danni, gittata e velocità, fino a 4); il successivo è un giro completo. Mancare lo azzera'
  pt:
    name: Alho-poró
    desc: 'Cortes de alho-poró encadeados: cada corte que acerta aumenta o seu Corte Fúria (mais dano, alcance e velocidade, até 4); o seguinte é um giro completo. Errar reinicia'
  ru:
    name: Порей
    desc: 'Цепочка взмахов пореем: каждый попавший взмах повышает Яростный разрез (больше урона, дальности и скорости, до 4); следующий - полный оборот. Промах сбрасывает его'
  ja:
    name: ながねぎ
    desc: 連なるネギの斬撃：当たるたびにれんぞくぎりが上がり（ダメージ・射程・速度が増加、最大4）、次は一回転斬り。外すとリセットされます
  ko:
    name: 대파
    desc: '대파 연속 베기: 맞힐 때마다 연속자르기가 올라간다(대미지, 사거리, 속도 증가, 최대 4). 그다음 공격은 한 바퀴 회전 베기. 빗나가면 초기화'
  zh:
    name: 大葱
    desc: 连续的大葱斩击：每次命中都会提升你的连斩（更高伤害、范围和速度，最多4层）；下一击是完整回旋。未命中会重置
  zt:
    name: 大蔥
    desc: 連續的大蔥斬擊：每次命中都會提升你的連斬（傷害、距離和速度提高，最多4層）；下一擊會是完整的迴旋斬。沒打中就會重置
---
Coups de poireau enchaînés : chaque coup réussi augmente votre Taillade (plus de dégâts, de portée et de vitesse, jusqu'à 4) ; le suivant est une rotation complète. Rater la réinitialise

## Fonctionnement
- C'est une **arme** : elle ne marche que comme arme équipée ([Arme équipée](../mechanics/arma_principal.html)) ; avec une autre arme principale, elle n'ajoute que le petit effet indiqué à « Si secondaire ». Vos tirs normaux ne sont pas remplacés.
- Équilibrage : quand c'est votre arme équipée, les dégâts qu'elle inflige sont encore multipliés par ×0,31. Les multiplicateurs ci-dessous s'appliquent avant.
- Après chaque attaque, l'arme est de nouveau prête après 1,5 fois votre délai normal entre deux tirs, et jamais moins de 0,3 s.
- Les critiques, la brûlure, le poison, le ralentissement et les autres effets de vos objets s'appliquent à ses coups, qui portent le type de votre Pokémon. Voir [Armes et effets de tir](../mechanics/armas.html).
- Chaque attaque est une entaille en arc devant vous : portée 75 px (+6 par Taille), environ 63° de chaque côté. Elle touche tous les ennemis de l'arc pour ×0,5 de vos Dégâts, brise les caisses, détruit les tirs ennemis dans l'arc et envoie une courte onde (×0,4 Dégâts, portée 0,6 × votre Portée, perfore 1 + votre perforation).
- **Taillade :** chaque entaille qui touche au moins un ennemi augmente la série (max 4). Chaque niveau ajoute +15 % de dégâts (entaille et onde), +6 px de portée et rend l'attaque suivante 5 % plus rapide.
- **Rotation :** avec la série à 4, l'attaque suivante est une rotation complète à 360° (portée +24 px, ×1,6 Dégâts) qui envoie aussi des ondes de ×2 Dégâts (rayon de 16 px, portée 1,1 × Portée, transperce tout). La série retombe ensuite à 0.
- Une entaille qui ne touche rien, ou 0,9 s sans toucher, remet la série à zéro.
- Les tirs multiples élargissent l'arc et ajoutent des ondes (jusqu'à 3, 20° d'écart pour la rotation).
- **Si secondaire :** quand un ennemi est à moins de 72 px (+6 par Taille), vous l'entaillez automatiquement (×0,5 Dégâts et une onde), au plus une fois par seconde.

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
