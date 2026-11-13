---
title: Carapace Mue
id: shed_shell
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/hold-item/shed-shell.png
details:
- label: Invulnérabilité
  value: 2 s
- label: Déclencheur
  value: Entrée de ce Pokémon sur le terrain
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
    name: Muda Concha
    desc: Al entrar al campo este Pokémon, 2 s de invulnerabilidad.
  en:
    name: Shed Shell
    desc: When this Pokémon enters the field, 2 s of invulnerability.
  pt:
    name: Casca Mudada
    desc: Quando este Pokémon entra em campo, 2 s de invulnerabilidade.
  de:
    name: Wechselhülle
    desc: Betritt dieses Pokémon das Feld, 2 s Unverwundbarkeit.
  it:
    name: Disfoguscio
    desc: Quando questo Pokémon entra in campo, 2 s di invulnerabilità.
  ja:
    name: きれいなぬけがら
    desc: このポケモンが場に出たとき、2秒間無敵。
  zh:
    name: 美丽空壳
    desc: 该宝可梦上场时，获得2秒无敌。
  zt:
    name: 美麗空殼
    desc: 這隻寶可夢上場時，獲得2秒無敵。
  ko:
    name: 아름다운허물
    desc: 이 포켓몬이 필드에 나오면 2초간 무적.
  ru:
    name: Сброшенная оболочка
    desc: 'Когда этот покемон выходит на поле: 2 с неуязвимости.'
---
Quand ce Pokémon entre sur le terrain, 2 s d’invulnérabilité.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Il se déclenche quand le Pokémon qui le tient entre sur le terrain par un changement (voir [Équipe de 3 Pokémon](../mechanics/equipo.html)), en combat ou non. Fusionné, il se déclenche à chaque changement, quel que soit le Pokémon qui entre.
- Vous ne pouvez pas être blessé pendant 2 secondes (tout changement donne déjà un très court instant d'invulnérabilité ; il passe à 2 s).
- Les règles de changement ne changent pas : le Pokémon sorti doit toujours attendre avant de revenir.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
