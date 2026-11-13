---
title: Lettre Mer
id: bubble_mail
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/mail/bubble-mail.png
details:
- label: Rayon
  value: 130 px
- label: Dégâts
  value: 1,5 × vos Dégâts (au moins 2)
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
    name: Carta Pompas
    desc: Al entrar al campo este Pokémon, una onda aparta y daña a los enemigos cercanos.
  en:
    name: Bubble Mail
    desc: When this Pokémon enters the field, a wave pushes back and damages nearby enemies.
  pt:
    name: Carta Bolha
    desc: Quando este Pokémon entra em campo, uma onda afasta e fere os inimigos próximos.
  de:
    name: Wasserbrief
    desc: Betritt dieses Pokémon das Feld, stößt eine Welle nahe Gegner zurück und verletzt sie.
  it:
    name: Mess. Bolla
    desc: Quando questo Pokémon entra in campo, un'onda respinge e danneggia i nemici vicini.
  ja:
    name: ブルーメール
    desc: このポケモンが場に出たとき、衝撃波で近くの敵をはじき飛ばしてダメージを与える。
  zh:
    name: 泡泡邮件
    desc: 该宝可梦上场时，发出冲击波击退并伤害附近的敌人。
  zt:
    name: 泡泡郵件
    desc: 這隻寶可夢上場時，會放出衝擊波擊退並傷害附近的敵人。
  ko:
    name: 버블메일
    desc: 이 포켓몬이 필드에 나오면 파동이 주변 적을 밀어내고 대미지를 준다.
  ru:
    name: Пузырьковое письмо
    desc: Когда этот покемон выходит на поле, волна отбрасывает и ранит ближайших врагов.
---
Quand ce Pokémon entre sur le terrain, une onde repousse et blesse les ennemis proches.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Il se déclenche quand le Pokémon qui le tient entre sur le terrain par un changement (voir [Équipe de 3 Pokémon](../mechanics/equipo.html)), en combat ou non. Fusionné, il se déclenche à chaque changement, quel que soit le Pokémon qui entre.
- Une onde touche tous les ennemis à moins de 130 px (mesurés jusqu'au bord de l'ennemi) : elle inflige 1,5 × vos Dégâts, au moins 2, et les repousse.
- Les boss subissent les dégâts mais ne sont pas repoussés.
- L'onde n'a pas de type : les affinités de type et les effets d'objets à l'impact ne s'y appliquent pas.
- Sans ennemis autour, elle ne fait que l'effet visuel.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
