---
title: Baie Figuy
id: figy_berry
color: '#c8b0ff'
labels:
- text: OBJET TENU
  color: '#7ee0c0'
icon: items-ps/berry/figy.png
details:
- label: Dégâts
  value: +10 % par cœur manquant
- label: Plafond
  value: +40 % (4 cœurs manquants)
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
    name: Baya Higog
    desc: +10 % de daño por cada corazón que te falte (hasta +40 %).
  en:
    name: Figy Berry
    desc: +10% damage for each missing heart (up to +40%).
  pt:
    name: Baga Figy
    desc: +10% de dano por cada coração que faltar (até +40%).
  de:
    name: Giefebeere
    desc: +10 % Schaden pro fehlendem Herz (bis +40 %).
  it:
    name: Baccafico
    desc: +10 % di danni per ogni cuore che ti manca (fino a +40 %).
  ja:
    name: フィラのみ
    desc: 足りないハート1つにつきダメージ+10%（最大+40%）。
  zh:
    name: 勿花果
    desc: 每少一颗心，伤害+10%（最多+40%）。
  zt:
    name: 勿花果
    desc: 每少一顆愛心，傷害+10%（最多+40%）。
  ko:
    name: 무화열매
    desc: 잃은 하트 1칸마다 대미지 +10% (최대 +40%).
  ru:
    name: Ягода Фиги
    desc: +10 % урона за каждое недостающее сердце (до +40 %).
---
+10 % de dégâts par cœur manquant (jusqu’à +40 %).

Un Pokémon de votre équipe le tient, et il ne fonctionne que lorsque ce Pokémon est sur le terrain. Fusionnez-le depuis le Sac pour qu'il fonctionne avec toute l'équipe. Voir [Objets tenus](../mechanics/equipados.html).

## Fonctionnement
- Ne compte que les cœurs entiers manquants par rapport à votre vie maximale : un demi-cœur manquant ne donne rien, un cœur et demi donne +10 %.
- Les cœurs d'âme ne comptent pas : seule votre vie rouge par rapport à votre maximum.
- C'est un multiplicateur de Dégâts : il apparaît dans le HUD et suit les [rendements décroissants](../mechanics/rendimientos.html) des multiplicateurs de dégâts (plein jusqu'à ×2,3, puis un quart, ×3 au maximum).

## Cumul
- Un deuxième exemplaire n'apporte rien : l'effet est actif ou non. L'avoir tenu et fusionné, ou tenu par deux Pokémon de l'équipe, revient à l'avoir une seule fois. Le jeu refuse de fusionner deux objets identiques, et les nouveaux objets tenus évitent ceux que vous avez déjà.
- Il se multiplie avec les autres effets de dégâts d'objets tenus que vous avez (celui tenu et ceux fusionnés).
