---
title: Baie Nanab
id: nanab_berry
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/berry/nanab.png
details:
- label: Dégâts
  value: +12 % en mouvement
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
    name: Baya Latano
    desc: +12 % de daño mientras te mueves.
  en:
    name: Nanab Berry
    desc: +12% damage while moving.
  pt:
    name: Baga Nanab
    desc: +12% de dano enquanto você se move.
  de:
    name: Nanabbeere
    desc: +12 % Schaden, während du dich bewegst.
  it:
    name: Baccabana
    desc: +12 % di danni mentre ti muovi.
  ja:
    name: ナナのみ
    desc: 移動中はダメージ+12%。
  zh:
    name: 蕉香果
    desc: 移动时伤害+12%。
  zt:
    name: 蕉香果
    desc: 移動時傷害+12%。
  ko:
    name: 나나열매
    desc: 이동하는 동안 대미지 +12%.
  ru:
    name: Ягода Нанаб
    desc: +12 % урона, пока ты двигаешься.
---
+12 % de dégâts pendant que vous bougez.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Actif à chaque instant où votre Pokémon bouge ; il s'arrête dès que vous vous immobilisez. Être repoussé compte aussi comme bouger.
- C'est un multiplicateur de Dégâts : il apparaît dans le HUD et suit les [rendements décroissants](../mechanics/rendimientos.html) des multiplicateurs de dégâts (plein jusqu'à ×2,3, puis un quart, ×3 au maximum).

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
- Il se multiplie avec les autres effets de dégâts d'objets tenus que vous avez (celui tenu et ceux fusionnés).
- C'est l'inverse de la [Poudre Métal](metal_powder.html) et de la [Baie Maron](chesto_berry.html), qui demandent de rester immobile.
