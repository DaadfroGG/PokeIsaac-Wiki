---
title: Lettre Invit
id: rsvp_mail
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/mail/rsvp-mail.png
details:
- label: Cadence
  value: +50 % pendant 3 s
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
    name: Carta Invitar
    desc: Al entrar al campo este Pokémon, 3 s de cadencia +50 %.
  en:
    name: RSVP Mail
    desc: When this Pokémon enters the field, 3 s of +50% fire rate.
  pt:
    name: Carta Convite
    desc: Quando este Pokémon entra em campo, 3 s de cadência +50%.
  de:
    name: Einladebrief
    desc: Betritt dieses Pokémon das Feld, 3 s lang +50 % Feuerrate.
  it:
    name: Messaggio Invito
    desc: Quando questo Pokémon entra in campo, 3 s di cadenza +50 %.
  ja:
    name: おさそいメール
    desc: このポケモンが場に出たとき、3秒間連射速度+50%。
  zh:
    name: 邀请邮件
    desc: 该宝可梦上场时，3秒内射速+50%。
  zt:
    name: 邀請郵件
    desc: 這隻寶可夢上場時，3秒內射速+50%。
  ko:
    name: 권유메일
    desc: 이 포켓몬이 필드에 나오면 3초간 연사 +50%.
  ru:
    name: Письмо-приглашение
    desc: 'Когда этот покемон выходит на поле: 3 с темпа стрельбы +50 %.'
---
Quand ce Pokémon entre sur le terrain, 3 s de cadence +50 %.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Il se déclenche quand le Pokémon qui le tient entre sur le terrain par un changement (voir [Équipe de 3 Pokémon](../mechanics/equipo.html)), en combat ou non. Fusionné, il se déclenche à chaque changement, quel que soit le Pokémon qui entre.
- Pendant 3 secondes, vous tirez 50 % plus vite. Une nouvelle entrée relance les 3 secondes.
- La Cadence ne peut jamais dépasser 12 tirs par seconde quel que soit le bonus.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
- Il se multiplie avec les autres effets de cadence d'objets tenus.
