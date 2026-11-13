---
title: Baie Maron
id: chesto_berry
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/berry/chesto.png
details:
- label: Soin
  value: Un demi-cœur
- label: Condition
  value: Rester immobile 2 s après avoir nettoyé une salle
- label: Limite
  value: Une fois par salle
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
    name: Baya Atania
    desc: Tras limpiar una sala, quédate quieto 2 s para curar medio corazón (una vez por sala).
  en:
    name: Chesto Berry
    desc: After clearing a room, stand still for 2 s to heal half a heart (once per room).
  pt:
    name: Baga Chesto
    desc: Após limpar uma sala, fique parado 2 s para curar meio coração (uma vez por sala).
  de:
    name: Maronbeere
    desc: Bleib nach dem Säubern eines Raums 2 s stehen, um ein halbes Herz zu heilen (einmal pro Raum).
  it:
    name: Baccastagna
    desc: Dopo aver ripulito una stanza, resta fermo 2 s per recuperare mezzo cuore (una volta per stanza).
  ja:
    name: カゴのみ
    desc: 部屋をクリアしたあと2秒間じっとしていると、半分のハートを回復（1部屋1回）。
  zh:
    name: 零余果
    desc: 清理房间后，静止2秒可回复半颗心（每个房间一次）。
  zt:
    name: 零餘果
    desc: 清除房間後，靜止不動2秒可回復半顆愛心（每個房間一次）。
  ko:
    name: 유루열매
    desc: 방을 클리어한 뒤 2초간 가만히 있으면 하트 반 칸을 회복한다(방마다 1번).
  ru:
    name: Ягода Често
    desc: После зачистки комнаты постой на месте 2 с, чтобы вылечить полсердца (раз за комнату).
---
Après avoir nettoyé une salle, restez immobile 2 s pour soigner un demi-cœur (une fois par salle).

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Quand vous nettoyez une salle pendant qu'elle est active, restez immobile 2 secondes dans cette salle pour soigner un demi-cœur.
- Les 2 secondes comptent depuis le moment où vous vous êtes arrêté : si vous étiez déjà immobile à la mort du dernier ennemi, le soin peut être immédiat. Tirer ne compte pas comme bouger.
- Il fonctionne une fois par salle nettoyée. Sortir et revenir ne donne pas un second soin.
- Si votre vie est pleine au bout des 2 secondes, rien n'est soigné et l'occasion est perdue pour cette salle.
- Ce soin ignore la limite de soins des objets.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
