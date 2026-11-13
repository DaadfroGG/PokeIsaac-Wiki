---
title: Gemme Rouge
id: w_prisma_rojo
kind: passive
category: weapon
family: weapon
tier: 4
pools:
- boss
- devil
pool_weight: 1
stats:
- text: Cadence -
  good: false
details:
- label: Jauge
  value: +6,25 % par coup (au plus une fois par délai entre deux tirs) et +6 % par K.O.
- label: Ultralaser
  value: 0,6 s, 12 touches (toutes les 0,05 s) de ×2,3 Dégâts
- label: Rayons
  value: Jusqu'à 5 avec tirs multiples, 15° d'écart ; largeur 22 px (+5 par Taille)
- label: Repos
  value: 0,57 s sans attaquer après le rayon
- label: Effets
  value: Rebond (max 4), tête chercheuse, critiques, croissance et effets de vos objets
- label: Équilibrage
  value: ×0,33 (≈ ×0,76 par touche)
- label: Stat
  value: Cadence -
- label: Module
  value: Marche avec toute arme
icon: items-ps/hold-item/red-orb.png
sprite: true
names:
  en:
    name: Red Orb
    desc: Your hits fill a meter; when it is full, your next attack unleashes a huge Hyper Beam that pierces everything (then you rest for a moment). Works with any weapon
  es:
    name: Prisma Rojo
    desc: Tus golpes cargan un medidor; lleno, tu siguiente ataque suelta un Hiperrayo enorme que lo atraviesa todo (y luego descansas un instante). Vale con cualquier arma
  de:
    name: Roter Edelstein
    desc: Deine Treffer laden eine Leiste; ist sie voll, entfesselt dein nächster Angriff einen riesigen Hyperstrahl, der alles durchbohrt (danach ruhst du kurz). Funktioniert mit jeder Waffe
  it:
    name: Gemma rossa
    desc: I tuoi colpi caricano un indicatore; quando è pieno, il tuo prossimo attacco scatena un enorme Iper Raggio che trapassa tutto (poi riposi un istante). Vale con qualsiasi arma
  pt:
    name: Esfera Vermelha
    desc: Seus golpes carregam um medidor; cheio, seu próximo ataque solta um Hiper Raio enorme que atravessa tudo (e depois você descansa um instante). Vale com qualquer arma
  ru:
    name: Красная сфера
    desc: Твои удары заполняют шкалу; когда она полна, следующая атака выпускает огромный Гипер-луч, пробивающий все (потом ты на миг переводишь дух). Работает с любым оружием
  ja:
    name: べにいろのたま
    desc: 攻撃が当たるとゲージがたまり、満タンで次の攻撃が全てを貫く巨大なはかいこうせんになる（その後、一瞬休む）。どんな武器でも使える
  ko:
    name: 주홍구슬
    desc: 공격하면 게이지가 찬다. 가득 차면 다음 공격이 모든 것을 관통하는 거대한 파괴광선을 쏜다(이후 잠깐 쉰다). 어떤 무기와도 쓸 수 있다
  zh:
    name: 朱红色宝珠
    desc: 你的攻击会填充计量槽；填满后，下一次攻击会释放一道贯穿一切的巨大破坏光线（随后短暂休息）。适用于任何武器
  zt:
    name: 朱紅色寶珠
    desc: 你的攻擊會累積量表；量表滿時，下一次攻擊會放出貫穿一切的巨大破壞光線（之後需要稍作休息）。任何武器都適用
---
Vos coups remplissent une jauge ; pleine, votre prochaine attaque libère un énorme Ultralaser qui transperce tout (puis vous soufflez un instant). Fonctionne avec n'importe quelle arme

## Fonctionnement
- C'est un **module** : il marche avec toute arme et ne la remplace pas. Il dégrade légèrement votre cadence (+2 points entre deux tirs, environ 0,03 s).
- **Jauge :** chaque coup de vos tirs normaux et armes la remplit de 6,25 % (au plus une fois par délai entre deux tirs), et chaque K.O. ajoute 6 %. Elle ne se remplit pas pendant le rayon ni le repos, et les touches du rayon ne comptent pas.
- **Déclenchement :** quand la jauge est pleine, votre prochain tir (appui sur les touches de tir) lance l'Ultralaser à la place. Le rayon suit votre visée, en tournant d'au plus 5° par tick, transperce tous les ennemis et brise les caisses. Il dure 0,6 s et touche 12 fois (toutes les 0,05 s) pour ×2,3 de vos Dégâts, multipliés par un facteur d'équilibrage ×0,33 (environ ×0,76 par touche, ×9 sur tout le rayon pour un ennemi).
- Les tirs multiples ajoutent des rayons (jusqu'à 5, 15° d'écart) ; chaque rayon fait 22 px de large (+5 par Taille). Le rebond (jusqu'à 4 sur les murs), la tête chercheuse (le rayon se courbe vers les ennemis), la Croissance, les critiques (tirés à chaque touche) et les effets de vos autres objets s'appliquent.
- Après le rayon, vous ne pouvez pas attaquer pendant 0,57 s.

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
