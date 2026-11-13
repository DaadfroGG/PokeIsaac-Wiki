---
title: Aromate Rigide
id: adamant_mint
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/mint/attack.png
details:
- label: Dégâts
  value: +15 %
- label: Vitesse
  value: −0,25
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
    name: Menta Firme
    desc: Daño +15 %, pero andas algo más despacio.
  en:
    name: Adamant Mint
    desc: Damage +15%, but you move a little slower.
  pt:
    name: Menta Firme
    desc: Dano +15%, mas você anda um pouco mais devagar.
  de:
    name: Hart-Minze
    desc: Schaden +15 %, aber du läufst etwas langsamer.
  it:
    name: Menta Decisa
    desc: Danni +15 %, ma ti muovi un po' più lentamente.
  ja:
    name: いじっぱりミント
    desc: ダメージ+15%、ただし移動が少し遅くなる。
  zh:
    name: 固执薄荷
    desc: 伤害+15%，但移动稍慢。
  zt:
    name: 固執薄荷
    desc: 傷害+15%，但移動稍慢。
  ko:
    name: 고집민트
    desc: 대미지 +15%, 대신 조금 느리게 걷는다.
  ru:
    name: Мята упрямства
    desc: Урон +15 %, но ты ходишь чуть медленнее.
---
Dégâts +15 %, mais vous avancez un peu plus lentement.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Vos dégâts sont multipliés par 1,15 et vous perdez 0,25 de Vitesse.
- C'est un multiplicateur de Dégâts : il apparaît dans le HUD et suit les [rendements décroissants](../mechanics/rendimientos.html) des multiplicateurs de dégâts (plein jusqu'à ×2,3, puis un quart, ×3 au maximum).

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
- Il se multiplie avec les autres effets de dégâts d'objets tenus que vous avez (celui tenu et ceux fusionnés).
