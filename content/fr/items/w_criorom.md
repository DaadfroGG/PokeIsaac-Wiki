---
title: Module Cryo
id: w_criorom
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Charge
  value: 2 × votre délai entre deux tirs, 0,37 à 1,2 s (min 25 % pour lâcher)
- label: Blizzard
  value: ×0,38 à ×0,78 Dégâts toutes les 0,25 s, pendant 2,5 à 5,3 s
- label: Zone
  value: À 90-240 px devant ; rayon de 46 à 98 px (+7 par Taille)
- label: Type Glace seulement
  value: Ralentit 0,8 s à chaque coup ; un tick sur 3 peut geler
- label: Zones
  value: Jusqu'à 4 avec tirs multiples (31° d'écart), 6 max à l'écran
- label: Récupération
  value: 1,5 × votre délai (au moins 0,5 s)
- label: Équilibrage
  value: ×0,72
- label: Si secondaire
  value: 'Toutes les 4 attaques : petit blizzard (×0,4, 44 px, 1,8 s) sur l''ennemi le plus proche à moins de 320 px'
icon: items-ps/hold-item/chill-drive.png
sprite: true
names:
  en:
    name: Chill Drive
    desc: 'Charge and release a blizzard in front of you: an ice zone that damages whoever is inside; if you are Ice-type, it also slows and freezes'
  es:
    name: CrioROM
    desc: 'Carga y suelta una ventisca delante de ti: una zona de hielo que daña a quien esté dentro; si eres de tipo Hielo, además ralentiza y congela'
  de:
    name: Gefriermodul
    desc: 'Lade einen Eissturm vor dir auf und lass ihn los: eine Eiszone, die jeden darin verletzt; bist du vom Typ Eis, verlangsamt und gefriert sie zusätzlich'
  it:
    name: Gelomodulo
    desc: 'Carica e scatena una bufera davanti a te: una zona di ghiaccio che danneggia chi vi si trova; se sei di tipo Ghiaccio, rallenta e congela anche'
  pt:
    name: Chill Drive
    desc: 'Carrega e solta uma nevasca à sua frente: uma zona de gelo que fere quem estiver dentro; se você for do tipo Gelo, também deixa lento e congela'
  ru:
    name: Крио-картридж
    desc: 'Заряди и выпусти перед собой метель: ледяная зона, которая ранит всех внутри; если ты типа Лед, еще и замедляет и замораживает'
  ja:
    name: フリーズカセット
    desc: チャージして目の前に吹雪を放つ：中にいる敵にダメージを与える氷のゾーン。こおりタイプなら、さらに動きを遅くして凍らせる
  ko:
    name: 프리즈카세트
    desc: '앞에 눈보라를 모아 터뜨린다: 안에 있는 적에게 대미지를 주는 얼음 구역. 얼음 타입이면 감속과 빙결도 건다'
  zh:
    name: 冰冻卡带
    desc: 蓄力并在面前释放暴风雪：一片冰区，会伤害其中的敌人；若你是冰属性，还会减速并冰冻
  zt:
    name: 冰凍卡帶
    desc: 蓄力後在面前釋放暴風雪：一片冰凍區域，會傷害範圍內的所有人；如果你是冰屬性，還會使其減速並冰凍
---
Chargez et lâchez un blizzard devant vous : une zone de glace qui blesse quiconque s'y trouve ; si vous êtes de type Glace, elle ralentit et gèle aussi

## Fonctionnement
- C'est une **arme** : elle ne marche que comme arme équipée ([Arme équipée](../mechanics/arma_principal.html)) ; avec une autre arme principale, elle n'ajoute que le petit effet indiqué à « Si secondaire ». Vos tirs normaux ne sont pas remplacés.
- Équilibrage : quand c'est votre arme équipée, les dégâts qu'elle inflige sont encore multipliés par ×0,72. Les multiplicateurs ci-dessous s'appliquent avant.
- Après chaque attaque, l'arme est de nouveau prête après 1,5 fois votre délai normal entre deux tirs, et jamais moins de 0,5 s.
- Les critiques, la brûlure, le poison, le ralentissement et les autres effets de vos objets s'appliquent à ses coups, qui portent le type de votre Pokémon. Voir [Armes et effets de tir](../mechanics/armas.html).
- Maintenez la touche d'arme pour charger (2 × votre délai entre deux tirs, de 0,37 s à 1,2 s pour une charge complète), relâchez pour poser le blizzard (au moins 25 % de charge requis). La zone apparaît à 90-240 px devant vous selon la charge, avec un rayon de 46 à 98 px (+7 px par Taille), et dure de 2,5 s (petite charge) à 5,3 s (complète).
- Toutes les 0,25 s, elle inflige ×0,38 à ×0,78 de vos Dégâts (selon la charge) à chaque ennemi dedans ; un même ennemi n'est pas touché deux fois en moins de 0,2 s.
- **Type Glace seulement :** chaque coup ralentit l'ennemi environ 0,8 s, et un tick sur 3 ajoute une chance de gel. Les autres types n'ont que les dégâts. Plusieurs blizzards ne cumulent ni gel ni ralentissement.
- Les tirs multiples posent jusqu'à 4 zones en éventail à 31° ; 6 blizzards au maximum peuvent exister en même temps.
- **Si secondaire :** toutes les 4 attaques, un petit blizzard (×0,4 Dégâts, rayon de 44 px +5 par Taille, 1,8 s) tombe sur l'ennemi le plus proche à moins de 320 px.

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
