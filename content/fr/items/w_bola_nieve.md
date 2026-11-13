---
title: Boule de Neige
id: w_bola_nieve
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
pool_weight: 2
details:
- label: Boule
  value: ×0,68 à ×1,43 Dégâts et de 9 à 33 px au fil de sa course
- label: Touche
  value: Transperce tout ; le même ennemi de nouveau toutes les 0,23 s
- label: Type Glace seulement
  value: Ralentit 1,3 s à chaque coup
- label: Éclatement
  value: 6 morceaux de glace (×0,28 des dégâts de base de la boule, 110 px)
- label: Boules
  value: Jusqu'à 3 avec tirs multiples (17° d'écart)
- label: Récupération
  value: 1,5 × 1,8 × votre délai (au moins 0,55 s)
- label: Équilibrage
  value: ×0,45
- label: Si secondaire
  value: Une petite boule de neige rebondit seule dans la salle (×0,8)
icon: items-ps/hold-item/snowball.png
sprite: true
names:
  en:
    name: Snowball
    desc: 'You throw snowballs that roll and GROW as they travel: bigger and stronger (if you are Ice-type, they also slow); they shatter into pieces on hitting a wall'
  es:
    name: Bola de Nieve
    desc: 'Lanzas bolas de nieve que ruedan y CRECEN al avanzar: más grandes y con más daño (si eres de tipo Hielo, además ralentizan); al chocar con una pared se rompen en trozos'
  de:
    name: Schneeball
    desc: 'Du wirfst Schneebälle, die rollen und beim Vorankommen WACHSEN: größer und stärker (bist du vom Typ Eis, verlangsamen sie zusätzlich); beim Aufprall auf eine Wand zerspringen sie in Stücke'
  it:
    name: Palla di neve
    desc: 'Lanci palle di neve che rotolano e CRESCONO avanzando: più grandi e con più danni (se sei di tipo Ghiaccio, rallentano anche); contro un muro si spezzano in pezzi'
  pt:
    name: Bola de Neve
    desc: 'Você lança bolas de neve que rolam e CRESCEM ao avançar: maiores e com mais dano (se você for do tipo Gelo, também deixam lento); ao bater numa parede, se quebram em pedaços'
  ru:
    name: Снежок
    desc: 'Ты бросаешь снежки, которые катятся и РАСТУТ на ходу: становятся больше и сильнее (если ты типа Лед, еще и замедляют); при ударе о стену разлетаются на куски'
  ja:
    name: ゆきだま
    desc: 転がりながら育つ雪玉を投げる：進むほど大きく強くなり（こおりタイプなら、さらに動きを遅くする）、壁に当たると破片に砕ける
  ko:
    name: 눈덩이
    desc: '굴러가며 커지는 눈덩이를 던진다: 갈수록 커지고 강해진다(얼음 타입이면 감속도 건다). 벽에 부딪히면 조각으로 깨진다'
  zh:
    name: 雪球
    desc: 你投出会滚动并在前进中「变大」的雪球：更大、伤害更高（若你是冰属性，还会减速）；撞到墙壁时会碎成碎片
  zt:
    name: 雪球
    desc: 你會投出滾動並隨前進而「變大」的雪球：變得更大、更強（如果你是冰屬性，還會減速）；撞到牆壁會碎成小塊
---
Vous lancez des boules de neige qui roulent et GRANDISSENT en avançant : plus grosses et plus fortes (si vous êtes de type Glace, elles ralentissent aussi) ; elles éclatent en morceaux contre un mur

## Fonctionnement
- C'est une **arme** : elle ne marche que comme arme équipée ([Arme équipée](../mechanics/arma_principal.html)) ; avec une autre arme principale, elle n'ajoute que le petit effet indiqué à « Si secondaire ». Vos tirs normaux ne sont pas remplacés.
- Équilibrage : quand c'est votre arme équipée, les dégâts qu'elle inflige sont encore multipliés par ×0,45. Les multiplicateurs ci-dessous s'appliquent avant.
- Après chaque attaque, l'arme est de nouveau prête après 1,8 fois votre délai normal entre deux tirs multiplié par 1,5, et jamais moins de 0,55 s.
- Les critiques, la brûlure, le poison, le ralentissement et les autres effets de vos objets s'appliquent à ses coups, qui portent le type de votre Pokémon. Voir [Armes et effets de tir](../mechanics/armas.html).
- Chaque attaque lance une boule de neige lente (0,55 × la vitesse de tir, portée 1,1 × votre Portée). Elle transperce tous les ennemis et frappe le même ennemi de nouveau toutes les 0,23 s. Les tirs multiples ajoutent des boules (jusqu'à 3, 17° d'écart). Le rebond et la tête chercheuse ne s'appliquent pas.
- Elle commence avec un rayon de 9 px (+2 par Taille) et des dégâts ×0,68, et grossit avec la distance parcourue (taille maximale après 85 % de la portée) : jusqu'à +24 px de rayon et ×1,43 de dégâts.
- **Type Glace seulement :** chaque coup ralentit l'ennemi 1,3 s.
- Quand la boule heurte un mur ou arrive au bout de sa portée, elle éclate en 6 morceaux de glace (×0,28 des dégâts de base de la boule chacun, volant sur 110 px).
- Les critiques et les autres effets de vos objets s'appliquent à la boule.
- **Si secondaire :** une petite boule de neige (10 px +2 par Taille, ×0,8 Dégâts, frappe chaque ennemi toutes les 0,2 s) roule et rebondit seule dans la salle, tant qu'il reste des ennemis.

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
