---
title: Nikodule
id: w_acromaquina
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Utilisation
  value: Touche d'arme (Maj/F, clic droit, LB)
- label: Voltorbes
  value: Une salve normale (jusqu'à 9 avec tirs multiples), vitesse ×0,6, mèche 1,3 s (1,75 s avec la Canne à Pêche)
- label: Frôlement
  value: ×0,45 des dégâts du tir toutes les 0,2 s par ennemi
- label: Rebond
  value: +20 % de dégâts, +12 % de vitesse ; explose au 3e choc contre un mur
- label: Détonation
  value: ×0,6 des dégâts du tir (+25 % par rebond), 60 px (+8 par Taille)
- label: Récupération
  value: 1,5 × 1,6 × votre délai (au moins 0,6 s)
- label: Équilibrage
  value: ×0,8
- label: Avec objets de Voltorbes
  value: Feu, flaques, croix, petites explosions, rayons, butin, plus gros, tête chercheuse
- label: Si secondaire
  value: '15 % (+1 % par Chance) par coup, une fois par 0,2 s : explosion ×0,6, 45 px'
icon: items-ps/key-item/colress-machine.png
sprite: true
names:
  en:
    name: Colress Machine
    desc: You fire Voltorbs that roll, graze enemies and gain strength with every bounce; on the third wall hit, or soon after, they explode (they do not hurt you)
  es:
    name: Acromáquina
    desc: Disparas Voltorbs que ruedan, rozan a los enemigos y ganan fuerza al rebotar; al tercer choque contra una pared o al poco, estallan (no te hieren)
  de:
    name: Achromat
    desc: Du schießt Voltobals, die rollen, Gegner streifen und beim Abprallen stärker werden; beim dritten Aufprall an einer Wand oder kurz danach explodieren sie (sie verletzen dich nicht)
  it:
    name: Acrocongegno
    desc: Spari Voltorb che rotolano, sfiorano i nemici e acquistano forza a ogni rimbalzo; al terzo urto contro una parete, o poco dopo, esplodono (non ti feriscono)
  pt:
    name: Máquina Colress
    desc: Você atira Voltorbs que rolam, raspam nos inimigos e ganham força a cada quique; na terceira batida numa parede, ou logo depois, explodem (eles não te ferem)
  ru:
    name: Машина Колресса
    desc: 'Ты стреляешь катящимися Вольторбами: они задевают врагов и набирают силу при отскоках; при третьем ударе о стену или вскоре после вылета взрываются (тебя не ранят)'
  ja:
    name: アクロママシーン
    desc: 転がって敵をかすめ、バウンドするたびに強くなるビリリダマを撃つ。壁に3回当たるか、しばらくすると爆発する（自分は傷つかない）
  ko:
    name: 아크로마머신
    desc: '구르는 찌리리공을 쏜다: 적을 스치고 튕길 때마다 강해지며, 벽에 세 번째로 부딪히거나 잠시 뒤 터진다 (나는 다치지 않는다)'
  zh:
    name: 阿克罗玛机器
    desc: 你射出会滚动的霹雳电球，擦过敌人，每次反弹都会变强；撞墙第三次或不久后便会爆炸（不会伤到你）
  zt:
    name: 阿克羅瑪機器
    desc: 你射出會滾動的霹靂電球，擦過敵人，每次反彈都會變強；第三次撞牆或不久後就會爆炸（不會傷到你）
---
Vous tirez des Voltorbes qui roulent, frôlent les ennemis et gagnent en puissance à chaque rebond ; au troisième choc contre un mur, ou peu après, ils explosent (sans vous blesser)

## Fonctionnement
- C'est une **arme** : elle ne marche que comme arme équipée ([Arme équipée](../mechanics/arma_principal.html)) ; avec une autre arme principale, elle n'ajoute que le petit effet indiqué à « Si secondaire ». Vos tirs normaux ne sont pas remplacés.
- Équilibrage : quand c'est votre arme équipée, les dégâts qu'elle inflige sont encore multipliés par ×0,8. Les multiplicateurs ci-dessous s'appliquent avant.
- Après chaque attaque, l'arme est de nouveau prête après 1,6 fois votre délai normal entre deux tirs, multiplié par 1,5, et jamais moins de 0,6 s.
- Les critiques, la brûlure, le poison, le ralentissement et les autres effets de vos objets s'appliquent à ses coups, qui portent le type de votre Pokémon. Voir [Armes et effets de tir](../mechanics/armas.html).
- Chaque attaque tire une salve normale (les tirs multiples s'appliquent, jusqu'à 9) de Voltorbes qui roulent à 0,6 fois la vitesse de tir, transpercent tout et rebondissent sur les murs. Ils explosent à la fin de la mèche (1,3 s, ou 1,75 s avec la [Canne à Pêche](d_cana.html)) ou au 3e choc contre un mur.
- En roulant, ils frôlent chaque ennemi touché pour ×0,45 des dégâts du tir, toutes les 0,2 s par ennemi.
- Chaque rebond sur un mur rend le Voltorbe 20 % plus fort et 12 % plus rapide (et +25 % pour l'explosion finale).
- L'explosion a un rayon de 60 px (+8 par Taille) et inflige ×0,6 des dégâts du tir (+25 % par rebond). Elle ne vous blesse jamais et brise les rochers proches.
- **Les objets de Voltorbes** marchent sur ces Voltorbes : le [Poké Plumet](b_pokesenuelo.html) les fait poursuivre les ennemis, la [Canne à Pêche](d_cana.html) les ralentit mais allonge la mèche, le [Dynamaxium](b_maxinium.html) les agrandit (taille ×1,5, rayon ×1,4, dégâts ×1,35), et chaque explosion compte aussi pour le [Module Pyro](b_pirorom.html) et le [Module Aqua](b_hidrorom.html) (une sur 3), le [Champ'Duit](b_cubresuelos.html), la [Bonbonnière](b_tarro.html), l'[Orbe Frousse](b_nerviosfera.html) (une sur 6) et la [Perle Triple](b_sarta.html).
- **Si secondaire :** quand l'un de vos coups touche, 15 % de chances (+1 % par Chance) d'une petite explosion sur l'ennemi touché (rayon de 45 px, ×0,6 de vos Dégâts), au plus une fois toutes les 0,2 s.

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
