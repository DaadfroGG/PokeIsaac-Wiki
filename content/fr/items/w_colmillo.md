---
title: Croc Rasoir
id: w_colmillo
kind: passive
category: weapon
family: weapon
tier: 4
pools:
- treasure
- boss
pool_weight: 1
details:
- label: Utilisation
  value: Touche d'arme (Maj/F, clic droit, LB)
- label: Morsure
  value: ×1,1 Dégâts à tous les ennemis d'un cône, 60 px (+7 par Taille)
- label: Morsures
  value: Jusqu'à 3 avec tirs multiples (40° d'écart)
- label: Défense baissée
  value: +12 % de dégâts subis par cumul, 3 cumuls max (+36 %), 4 s, relancé à chaque morsure
- label: Récupération
  value: 1,5 × votre délai (au moins 0,35 s)
- label: Équilibrage
  value: ×0,37
- label: Si secondaire
  value: 'Un croc tourne autour de vous : ×1,2 Dégâts, chaque ennemi au plus toutes les 0,2 s'
icon: items-ps/evo-item/razor-fang.png
sprite: true
names:
  en:
    name: Razor Fang
    desc: 'You bite whatever is in front of you; each bite leaves Defense Down: the enemy takes more damage from everything you do (up to +36 %)'
  es:
    name: Colmillo Agudo
    desc: 'Muerdes lo que tienes delante; cada mordisco deja Defensa baja: el enemigo recibe más daño de todo lo que hagas (hasta +36 %)'
  de:
    name: Scharfzahn
    desc: 'Du beißt in alles vor dir; jeder Biss hinterlässt Verteidigung gesenkt: Der Gegner erleidet mehr Schaden von allem, was du tust (bis zu +36 %)'
  it:
    name: Affilodente
    desc: 'Mordi ciò che hai davanti; ogni morso lascia Difesa bassa: il nemico subisce più danni da tutto ciò che fai (fino a +36 %)'
  pt:
    name: Presa Afiada
    desc: 'Você morde o que estiver à frente; cada mordida deixa Defesa baixa: o inimigo recebe mais dano de tudo que você fizer (até +36%)'
  ru:
    name: Острый клык
    desc: 'Кусаешь все, что перед тобой; каждый укус оставляет пониженную Защиту: враг получает больше урона от всего, что ты делаешь (до +36 %)'
  ja:
    name: するどいキバ
    desc: 目の前の相手にかみつきます。かみつくたびに防御ダウンが付き、敵が受ける全ダメージが増えます（最大+36%）
  ko:
    name: 예리한이빨
    desc: 앞에 있는 것을 깨문다. 깨물 때마다 방어 하락이 쌓여 적이 모든 공격에 더 큰 대미지를 받는다(최대 +36%)
  zh:
    name: 锐利之牙
    desc: 你会咬住面前的目标；每次咬击都会附加防御下降：敌人受到你所有攻击的伤害都会增加（最多+36%）
  zt:
    name: 銳利之牙
    desc: 啃咬前方的目標；每次啃咬都會造成「防禦降低」：敵人受到你所有攻擊的傷害都會提高（最多+36 %）
---
Vous mordez ce qui est devant vous ; chaque morsure inflige Défense baissée : l'ennemi subit plus de dégâts de tout ce que vous faites (jusqu'à +36 %)

## Fonctionnement
- C'est une **arme** : elle ne marche que comme arme équipée ([Arme équipée](../mechanics/arma_principal.html)) ; avec une autre arme principale, elle n'ajoute que le petit effet indiqué à « Si secondaire ». Vos tirs normaux ne sont pas remplacés.
- Équilibrage : quand c'est votre arme équipée, les dégâts qu'elle inflige sont encore multipliés par ×0,37. Les multiplicateurs ci-dessous s'appliquent avant.
- Après chaque attaque, l'arme est de nouveau prête après 1,5 fois votre délai normal entre deux tirs, et jamais moins de 0,35 s.
- Les critiques, la brûlure, le poison, le ralentissement et les autres effets de vos objets s'appliquent à ses coups, qui portent le type de votre Pokémon. Voir [Armes et effets de tir](../mechanics/armas.html).
- Chaque attaque est une morsure en cône devant vous : portée 60 px (+7 par Taille), environ 49° de chaque côté. Elle touche tous les ennemis du cône pour ×1,1 de vos Dégâts et brise les caisses devant vous.
- Les tirs multiples ajoutent des morsures (jusqu'à 3, 40° d'écart) ; les objets de direction supplémentaire en ajoutent d'autres.
- **Défense baissée :** chaque morsure sur un ennemi qui survit ajoute un cumul : +12 % de dégâts subis venant de vos coups, jusqu'à 3 cumuls (+36 %). Les cumuls durent 4 s et chaque nouvelle morsure relance les 4 s ; une fois expirés, on repart à un cumul.
- **Si secondaire :** un croc tourne autour de vous environ une fois par seconde et frappe les ennemis qu'il touche (14 px +3 par Taille) pour ×1,2 Dégâts, chaque ennemi au plus toutes les 0,2 s. Il n'applique pas Défense baissée.

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
