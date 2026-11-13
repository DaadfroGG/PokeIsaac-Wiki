---
title: Roche Glace
id: icy_rock
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/hold-item/icy-rock.png
details:
- label: Éclats
  value: 3 par tir qui touche un mur
- label: Dégâts des éclats
  value: 35 % de vos Dégâts (au moins 0,5)
- label: Portée des éclats
  value: '120'
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
    name: Roca Helada
    desc: Tus disparos que chocan con la pared se rompen en tres esquirlas.
  en:
    name: Icy Rock
    desc: Your shots that hit a wall break into three shards.
  pt:
    name: Rocha Gélida
    desc: Seus tiros que batem na parede se partem em três estilhaços.
  de:
    name: Eisbrocken
    desc: Deine Schüsse, die eine Wand treffen, zerbrechen in drei Splitter.
  it:
    name: Rocciafredda
    desc: I tuoi tiri che colpiscono il muro si spezzano in tre schegge.
  ja:
    name: つめたいいわ
    desc: 壁に当たったショットが3つのかけらに砕ける。
  zh:
    name: 冰冷岩石
    desc: 你的弹撞墙后会碎成三块碎片。
  zt:
    name: 冰冷岩石
    desc: 你的彈撞到牆壁時會碎裂成三塊碎片。
  ko:
    name: 차가운바위
    desc: 벽에 부딪힌 탄은 파편 3개로 부서진다.
  ru:
    name: Морозный камень
    desc: Твои выстрелы, попавшие в стену, разлетаются на три осколка.
---
Vos tirs qui touchent un mur se brisent en trois éclats.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Chacun de vos tirs qui finit sur un mur se brise en 3 petits éclats qui repartent dans la salle, un tout droit en arrière et deux à environ 30° de chaque côté. Les tirs de vos compagnons qui touchent un mur se brisent aussi.
- Les éclats sont petits, rapides (vitesse 7) et de courte durée (portée 120). Ils gardent le type de votre tir : les affinités de type s'appliquent.
- Leurs dégâts valent 35 % de votre stat Dégâts, pas du tir brisé : ils ignorent les bonus propres au tir.
- Les éclats sont des tirs secondaires, comme les tirs divisés : ils ne déclenchent pas la plupart des effets d'objets et ne se brisent pas à leur tour, mais les bonus de dégâts à l'impact des objets tenus (comme la [Baie Wiki](wiki_berry.html)) s'y appliquent. Les tirs divisés et autres tirs secondaires qui touchent un mur ne font pas d'éclats.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
