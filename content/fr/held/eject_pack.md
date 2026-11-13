---
title: Sac Fuite
id: eject_pack
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/hold-item/eject-pack.png
details:
- label: Attente de retour
  value: 4 s au lieu de 8 s
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
    name: Mochila Escape
    desc: Cuando este Pokémon sale del campo, su espera para volver es la mitad.
  en:
    name: Eject Pack
    desc: When this Pokémon leaves the field, its wait to come back is halved.
  pt:
    name: Mochila Ejetora
    desc: Quando este Pokémon sai de campo, a espera para voltar cai pela metade.
  de:
    name: Fluchttasche
    desc: Verlässt dieses Pokémon das Feld, halbiert sich seine Wartezeit bis zur Rückkehr.
  it:
    name: Zainofuga
    desc: Quando questo Pokémon esce dal campo, la sua attesa per tornare si dimezza.
  ja:
    name: だっしゅつパック
    desc: このポケモンが場を離れると、戻れるまでの待ち時間が半分になる。
  zh:
    name: 避难背包
    desc: 该宝可梦离场后，再次上场的等待时间减半。
  zt:
    name: 避難背包
    desc: 這隻寶可夢離場後，返場等待時間減半。
  ko:
    name: 탈출팩
    desc: 이 포켓몬이 필드에서 나가면 복귀 대기 시간이 절반이 된다.
  ru:
    name: Эвакуационный рюкзак
    desc: Когда этот покемон уходит с поля, его ожидание до возвращения вдвое короче.
---
Quand ce Pokémon quitte le terrain, son attente avant de revenir est réduite de moitié.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Quand vous retirez du terrain le Pokémon qui le tient pendant un combat, il peut revenir au bout de 4 secondes au lieu des 8 habituelles. Voir [Équipe de 3 Pokémon](../mechanics/equipo.html).
- Hors combat, le changement est de toute façon libre.
- C'est le Pokémon qui quitte le terrain qui compte : le tenir sur le Pokémon qui arrive ne change rien pour ce changement.
- Fusionné, il réduit de moitié l'attente de tous les Pokémon de l'équipe.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'attente est divisée par deux une fois, jamais par quatre. Fusionné, il couvre déjà toute l'équipe : un exemplaire tenu en plus n'ajoute rien. Le jeu refuse de fusionner deux objets identiques.
