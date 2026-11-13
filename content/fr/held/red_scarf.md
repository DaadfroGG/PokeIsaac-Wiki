---
title: Foulard Rouge
id: red_scarf
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/scarf/red.png
details:
- label: Dégâts
  value: ×1,5 sur l'explosion de vos Voltorbe
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
    name: Pañuelo Rojo
    desc: Tus Voltorbs hacen un 50 % más de daño al estallar.
  en:
    name: Red Scarf
    desc: Your Voltorbs deal 50% more damage when they explode.
  pt:
    name: Lenço Vermelho
    desc: Seus Voltorbs causam 50% mais dano ao explodir.
  de:
    name: Roter Schal
    desc: Deine Voltobals machen beim Explodieren 50 % mehr Schaden.
  it:
    name: Fascia Rossa
    desc: I tuoi Voltorb fanno il 50 % di danni in più quando esplodono.
  ja:
    name: あかいバンダナ
    desc: ビリリダマの爆発ダメージ+50%。
  zh:
    name: 红色头巾
    desc: 你的霹雳电球爆炸时伤害增加50%。
  zt:
    name: 紅色頭巾
    desc: 你的霹靂電球爆炸時傷害增加50%。
  ko:
    name: 빨강밴드
    desc: 찌리리공이 폭발할 때 대미지가 50% 늘어난다.
  ru:
    name: Красный шарф
    desc: Твои Вольторбы наносят на 50 % больше урона при взрыве.
---
Vos Voltorbe infligent 50 % de dégâts en plus en explosant.

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Les [Voltorbe (bombes)](../world/bomb.html) que vous posez infligent 50 % de dégâts d'explosion en plus aux ennemis. Une bombe inflige normalement 7 × vos Dégâts, au moins 25, avant les autres bonus de bombe.
- Le jeu vérifie au moment de l'explosion : si vous passez à un Pokémon sans le foulard avant l'explosion, le bonus est perdu (sauf s'il est fusionné).
- Il ne change ni les dégâts que vos bombes vous infligent, ni leur rayon.

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
