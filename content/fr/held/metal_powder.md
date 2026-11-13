---
title: Poudre Métal
id: metal_powder
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/hold-item/metal-powder.png
details:
- label: Réduction
  value: −un demi-cœur immobile
- label: Immobile depuis
  value: 0,5 s
- label: Minimum
  value: Un demi-cœur
- label: Tenu par
  value: Un Pokémon de l'équipe ; fonctionne quand ce Pokémon est sur le terrain
- label: Où le trouver
  value: En nettoyant des salles, dans les coffres, en cassant des objets de la salle, dans les salles secrètes et à la boutique
- label: Lequel tombe
  value: Tiré au hasard parmi les objets tenus que personne n'a encore (tenus par l'équipe, fusionnés ou au sol dans la salle)
- label: Fusionner
  value: 'Depuis le Sac : 15 Pokédollars à l''étage 1, puis +3,5 % par étage. Il fonctionne alors avec n''importe quel Pokémon de l''équipe, pour toujours. Jusqu''à 5 fusionnés, jamais deux identiques'
names:
  es:
    name: Polvo Metálico
    desc: Mientras estás quieto, los golpes te quitan medio corazón menos (como poco, medio).
  en:
    name: Metal Powder
    desc: While standing still, hits take half a heart less (half at minimum).
  pt:
    name: Pó Metálico
    desc: Enquanto você está parado, os golpes tiram meio coração a menos (no mínimo meio).
  de:
    name: Metallstaub
    desc: Solange du stillstehst, nehmen Treffer ein halbes Herz weniger (mindestens ein halbes).
  it:
    name: Metalpolvere
    desc: Mentre stai fermo, i colpi ti tolgono mezzo cuore in meno (almeno mezzo).
  ja:
    name: メタルパウダー
    desc: 立ち止まっている間、受けるダメージが半分のハート減る（最低でも半分）。
  zh:
    name: 金属粉
    desc: 静止不动时，受到的攻击少扣半颗心（最少扣半颗）。
  zt:
    name: 金屬粉
    desc: 靜止不動時，受到的攻擊少扣半顆愛心（最少半顆）。
  ko:
    name: 금속파우더
    desc: 가만히 있는 동안 받는 대미지가 하트 반 칸 줄어든다(최소 반 칸).
  ru:
    name: Металлический порошок
    desc: Пока ты стоишь на месте, удары отнимают на полсердца меньше (минимум полсердца).
---
Quand vous êtes immobile, les coups vous retirent un demi-cœur de moins (un demi au minimum).

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Après une demi-seconde immobile, chaque coup vous retire un demi-cœur de moins. Tirer ne compte pas comme bouger.
- Il fonctionne sur tous les coups : tirs ennemis, contact, boss, explosions et effets au sol.
- Un coup inflige toujours au moins un demi-cœur : les coups d'un demi-cœur ne sont pas réduits.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
- Il s'additionne avec les autres réductions d'objets tenus ([Pare-Effet](protective_pads.html), [Aromate Assuré](bold_mint.html)), chacune retirant un demi-cœur, mais un coup ne descend jamais sous un demi-cœur.
