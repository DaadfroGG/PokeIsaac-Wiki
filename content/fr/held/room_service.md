---
title: Chariot Distordu
id: room_service
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/hold-item/room-service.png
details:
- label: Charge
  value: Objet actif chargé entièrement
- label: Quand
  value: À la victoire contre un boss (salle du boss nettoyée)
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
    name: Servicio Raro
    desc: Al vencer al jefe, tu activo se carga entero.
  en:
    name: Room Service
    desc: When you defeat the boss, your active item fully recharges.
  pt:
    name: Serviço de Quarto
    desc: Ao vencer o chefe, seu item ativo recarrega por completo.
  de:
    name: Bizarroservice
    desc: Besiegst du den Boss, lädt sich dein aktives Item ganz auf.
  it:
    name: Distorservizio
    desc: Quando sconfiggi il Boss, il tuo attivo si ricarica del tutto.
  ja:
    name: ルームサービス
    desc: ボスを倒すと、アクティブどうぐのチャージが満タンになる。
  zh:
    name: 客房服务
    desc: 击败首领后，你的主动道具充满能量。
  zt:
    name: 客房服務
    desc: 打倒頭目時，主動道具充能全滿。
  ko:
    name: 룸서비스
    desc: 보스를 쓰러뜨리면 액티브가 완전히 충전된다.
  ru:
    name: Рум-сервис
    desc: Когда ты побеждаешь босса, активный предмет заряжается полностью.
---
Quand vous battez le boss, votre objet actif se recharge entièrement.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Quand la [salle du boss](../rooms/boss.html) est nettoyée, votre objet actif est instantanément chargé à fond.
- Rien ne se passe si vous n'avez pas d'objet actif. Les autres salles ne le déclenchent pas.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
