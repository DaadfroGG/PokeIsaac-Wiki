---
title: Baie Rabuta
id: rabuta_berry
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/berry/rabuta.png
details:
- label: Dégâts
  value: +4 % par ennemi vaincu dans la salle
- label: Plafond
  value: +40 % (10 ennemis)
- label: Remise à zéro
  value: En entrant dans une autre salle
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
    name: Baya Rautan
    desc: 'Cada baja en la sala: +4 % de daño hasta que salgas (hasta +40 %).'
  en:
    name: Rabuta Berry
    desc: 'Each kill in the room: +4% damage until you leave (up to +40%).'
  pt:
    name: Baga Rabuta
    desc: 'Cada K.O. na sala: +4% de dano até você sair (até +40%).'
  de:
    name: Rabutabeere
    desc: 'Jedes K.O. im Raum: +4 % Schaden, bis du ihn verlässt (bis +40 %).'
  it:
    name: Baccambutan
    desc: 'Ogni K.O. nella stanza: +4 % di danni finché non esci (fino a +40 %).'
  ja:
    name: ラブタのみ
    desc: 部屋で敵を倒すたび、部屋を出るまでダメージ+4%（最大+40%）。
  zh:
    name: 茸丹果
    desc: 房间内每击败一个敌人：伤害+4%，直到离开（最多+40%）。
  zt:
    name: 茸丹果
    desc: 房間內每擊倒一個敵人：傷害+4%，直到離開（最多+40%）。
  ko:
    name: 라부탐열매
    desc: 방에서 처치할 때마다 방을 나갈 때까지 대미지 +4% (최대 +40%).
  ru:
    name: Ягода Рабута
    desc: 'Каждое поражение врага в комнате: +4 % урона, пока не выйдешь (до +40 %).'
---
Chaque ennemi vaincu dans la salle : +4 % de dégâts jusqu’à ce que vous sortiez (jusqu’à +40 %).

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Chaque ennemi vaincu dans la salle ajoute +4 % de dégâts, jusqu'à 10 ennemis.
- Le bonus est perdu quand vous entrez dans une salle (même déjà nettoyée) : il se reconstruit à chaque combat.
- Seuls les ennemis vaincus pendant qu'il est actif comptent.
- C'est un multiplicateur de Dégâts : il apparaît dans le HUD et suit les [rendements décroissants](../mechanics/rendimientos.html) des multiplicateurs de dégâts (plein jusqu'à ×2,3, puis un quart, ×3 au maximum).

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
- Il se multiplie avec les autres effets de dégâts d'objets tenus que vous avez (celui tenu et ceux fusionnés).
