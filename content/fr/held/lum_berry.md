---
title: Baie Prine
id: lum_berry
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/berry/lum.png
details:
- label: Bloque
  value: 1 coup venant du sol par salle
- label: Sol
  value: Trous, pics, feu, flaques et zones au sol
- label: Remise à zéro
  value: À chaque entrée dans une salle
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
    name: Baya Ziuela
    desc: Una vez por sala, ignoras un golpe de una zona del suelo (charcos, fuego, pinchos...).
  en:
    name: Lum Berry
    desc: Once per room, you ignore one hit from a floor hazard (puddles, fire, spikes...).
  pt:
    name: Baga Lum
    desc: Uma vez por sala, você ignora um golpe de uma zona do chão (poças, fogo, espinhos...).
  de:
    name: Prunusbeere
    desc: Einmal pro Raum ignorierst du einen Treffer einer Bodenzone (Pfützen, Feuer, Stacheln...).
  it:
    name: Baccaprugna
    desc: Una volta per stanza, ignori un colpo di una zona del suolo (pozze, fuoco, spine...).
  ja:
    name: ラムのみ
    desc: 1部屋につき1回、床の危険（水たまり、炎、トゲ…）のダメージを無効化する。
  zh:
    name: 木子果
    desc: 每个房间一次，你可以无视一次地面危害的伤害（水洼、火焰、尖刺...）。
  zt:
    name: 木子果
    desc: 每個房間一次，免疫一次地面危害的傷害（水窪、火焰、尖刺……）。
  ko:
    name: 리샘열매
    desc: 방마다 1번, 바닥 위험 지대(웅덩이, 불, 가시...)의 피격을 무시한다.
  ru:
    name: Ягода Лам
    desc: Раз за комнату ты игнорируешь один удар от опасной зоны пола (лужи, огонь, шипы...).
---
Une fois par salle, vous ignorez un coup d’une zone au sol (flaques, feu, pics...).

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- La première fois qu'un [effet au sol](../mechanics/efectos_suelo.html) devrait vous blesser dans une salle, le coup est annulé et vous gagnez 1/3 s d'invulnérabilité.
- Il couvre les chutes dans un trou, les pics, le feu, ainsi que les flaques, gaz et zones dangereuses laissés au sol par les ennemis et les boss.
- Il ne couvre pas les tirs ennemis, le contact avec les ennemis ni les explosions.
- Il se recharge à chaque entrée dans une salle, même déjà nettoyée ou sans ennemis.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
