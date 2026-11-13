---
title: Bonbon Force M
id: mighty_candy_l
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/av-candy/mighty-l.png
details:
- label: Dégâts
  value: +30 % pendant 4 s
- label: Déclencheur
  value: Chaque montée de niveau
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
    name: Caramelo Músculo +
    desc: Al subir de nivel, 4 s de daño +30 %.
  en:
    name: Mighty Candy L
    desc: When you level up, 4 s of +30% damage.
  pt:
    name: Doce Poder L
    desc: Ao subir de nível, 4 s de dano +30%.
  de:
    name: Stärkebonbon+
    desc: Beim Level-Aufstieg 4 s lang +30 % Schaden.
  it:
    name: Caramella potenza M
    desc: Quando sali di livello, 4 s di danni +30 %.
  ja:
    name: ちからのアメＬ
    desc: レベルアップすると、4秒間ダメージ+30%。
  zh:
    name: 力量糖果Ｌ
    desc: 升级时，4秒内伤害+30%。
  zt:
    name: 力量糖果Ｌ
    desc: 升級時，4秒內傷害+30%。
  ko:
    name: 힘의사탕L
    desc: 레벨 업하면 4초간 대미지 +30%.
  ru:
    name: Конфета силы +
    desc: 'При повышении уровня: 4 с урона +30 %.'
---
Quand vous montez de niveau, 4 s de dégâts +30 %.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- À chaque fois que votre Pokémon [monte de niveau](../mechanics/niveles_pokemon.html), vous infligez 30 % de dégâts en plus pendant 4 secondes. Une autre montée de niveau relance les 4 secondes.
- C'est un multiplicateur de Dégâts : il apparaît dans le HUD et suit les [rendements décroissants](../mechanics/rendimientos.html) des multiplicateurs de dégâts (plein jusqu'à ×2,3, puis un quart, ×3 au maximum).

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
- Il se multiplie avec les autres effets de dégâts d'objets tenus que vous avez (celui tenu et ceux fusionnés).
