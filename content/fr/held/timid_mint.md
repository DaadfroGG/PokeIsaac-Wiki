---
title: Aromate Timide
id: timid_mint
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/mint/speed.png
details:
- label: Vitesse
  value: +0,4
- label: Dégâts
  value: −8 %
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
    name: Menta Miedosa
    desc: Andas más rápido, pero tu daño baja un 8 %.
  en:
    name: Timid Mint
    desc: You move faster, but your damage drops by 8%.
  pt:
    name: Menta Tímida
    desc: Você anda mais rápido, mas seu dano cai 8%.
  de:
    name: Scheu-Minze
    desc: Du läufst schneller, aber dein Schaden sinkt um 8 %.
  it:
    name: Menta Timida
    desc: Ti muovi più veloce, ma i tuoi danni calano dell'8 %.
  ja:
    name: おくびょうミント
    desc: 移動が速くなるが、ダメージが8%下がる。
  zh:
    name: 胆小薄荷
    desc: 移动更快，但伤害降低8%。
  zt:
    name: 膽小薄荷
    desc: 移動更快，但傷害降低8%。
  ko:
    name: 겁쟁이민트
    desc: 더 빨리 걷지만 대미지가 8% 줄어든다.
  ru:
    name: Мята робости
    desc: Ты ходишь быстрее, но урон падает на 8 %.
---
Vous avancez plus vite, mais vos dégâts baissent de 8 %.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Vous gagnez 0,4 de Vitesse, et vos dégâts sont multipliés par 0,92.
- Le −8 % est un multiplicateur de Dégâts : il apparaît dans le HUD.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
- Il se multiplie avec les autres effets de dégâts d'objets tenus que vous avez (celui tenu et ceux fusionnés).
