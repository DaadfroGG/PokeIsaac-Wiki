---
title: Module Choc
id: w_fulgorom
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Utilisation
  value: Touche d'arme (Maj/F, clic droit, LB)
- label: Éclair
  value: ×0,7 Dégâts à la première cible ; portée 0,95 × Portée (180-560 px)
- label: Sauts
  value: 3 (+ perforation et chaîne, max 7), à moins de 150 px (+12 par Taille), chacun ×0,85
- label: Éclairs
  value: Jusqu'à 5 avec tirs multiples, 12,6° d'écart
- label: Paralysie
  value: 'Type Électrik seulement : 28 % (+1 % par Chance) par cible, 0,5 s ; boss ralentis 0,8 s'
- label: Récupération
  value: 1,5 × votre délai entre deux tirs
- label: Équilibrage
  value: ×1 (pas de réduction)
- label: Si secondaire
  value: 'Toutes les 3 attaques : éclair ×0,35 sur l''ennemi le plus proche à moins de 220 px, 1 saut'
icon: items-ps/hold-item/shock-drive.png
sprite: true
names:
  en:
    name: Shock Drive
    desc: Your shots are bolts that jump from one enemy to another (up to 4 jumps, each weaker); if you are Electric-type, they also paralyze
  es:
    name: FulgoROM
    desc: Tus disparos son rayos que saltan de un enemigo a otro (hasta 4 saltos, cada uno más flojo); si eres de tipo Eléctrico, además paralizan
  de:
    name: Blitzmodul
    desc: Deine Schüsse sind Strahlen, die von Gegner zu Gegner springen (bis zu 4 Sprünge, jeder schwächer); bist du vom Typ Elektro, lähmen sie zusätzlich
  it:
    name: Voltmodulo
    desc: I tuoi tiri sono raggi che saltano da un nemico all'altro (fino a 4 salti, ognuno più debole); se sei di tipo Elettro, paralizzano anche
  pt:
    name: Shock Drive
    desc: Seus tiros são raios que saltam de inimigo em inimigo (até 4 saltos, cada um mais fraco); se você for do tipo Elétrico, também paralisam
  ru:
    name: Шок-картридж
    desc: Твои выстрелы - лучи, прыгающие от врага к врагу (до 4 прыжков, каждый слабее); если ты типа Электро, еще и парализуют
  ja:
    name: イナズマカセット
    desc: ショットが敵から敵へ飛び移る稲妻になる（最大4回、回ごとに弱まる）。でんきタイプなら、さらに麻痺させる
  ko:
    name: 번개카세트
    desc: 탄이 적에서 적으로 튀는 번개가 된다(최대 4번, 갈수록 약해짐). 전기 타입이면 마비도 건다
  zh:
    name: 闪电卡带
    desc: 你的弹是在敌人之间跳跃的闪电（最多4次跳跃，每次更弱）；若你是电属性，还会麻痹敌人
  zt:
    name: 閃電卡帶
    desc: 你的彈是會在敵人之間跳躍的電流（最多4次跳躍，每次減弱）；如果你是電屬性，還會使其麻痺
---
Vos tirs sont des éclairs qui sautent d'un ennemi à l'autre (jusqu'à 4 sauts, chacun plus faible) ; si vous êtes de type Électrik, ils paralysent aussi

## Fonctionnement
- C'est une **arme** : elle ne marche que comme arme équipée ([Arme équipée](../mechanics/arma_principal.html)) ; avec une autre arme principale, elle n'ajoute que le petit effet indiqué à « Si secondaire ». Vos tirs normaux ne sont pas remplacés.
- Équilibrage : quand c'est votre arme équipée, les dégâts qu'elle inflige sont encore multipliés par ×1. Les multiplicateurs ci-dessous s'appliquent avant.
- Après chaque attaque, l'arme est de nouveau prête après 1,5 fois votre délai normal entre deux tirs.
- Les critiques, la brûlure, le poison, le ralentissement et les autres effets de vos objets s'appliquent à ses coups, qui portent le type de votre Pokémon. Voir [Armes et effets de tir](../mechanics/armas.html).
- Chaque attaque lance un éclair dans votre direction de visée. Il choisit l'ennemi le plus proche de l'axe de visée dans un cône étroit (environ 17° de chaque côté, 52° avec tête chercheuse), jusqu'à 0,95 × votre Portée (entre 180 et 560 px). Sans cible, il file droit et n'abîme que les caisses.
- La première cible subit ×0,7 de vos Dégâts. L'éclair saute ensuite vers l'ennemi le plus proche pas encore touché à moins de 150 px (+12 px par Taille) : 3 sauts par défaut, +1 par perforation et +1 par chaîne, jusqu'à 7. Chaque saut inflige ×0,85 du précédent (0,7, 0,6, 0,5, 0,43 de vos Dégâts au départ).
- Les tirs multiples ajoutent des éclairs (jusqu'à 5, 12,6° d'écart) ; les objets de direction supplémentaire en ajoutent d'autres. Chaque éclair tire son propre critique.
- La Croissance rend le premier coup jusqu'à 60 % plus fort selon la distance de la cible ; la Division laisse un tir divisé sur la dernière cible.
- **Paralysie :** seulement si vous êtes de type Électrik : chaque cible touchée a 28 % de chances (+1 % par Chance) d'être étourdie 0,5 s ; les boss sont seulement ralentis environ 0,8 s.
- **Si secondaire :** toutes les 3 attaques, un court éclair frappe l'ennemi le plus proche à moins de 220 px pour ×0,35 de vos Dégâts et saute une fois (×0,3).

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
