---
title: Roche Humide
id: w_roca_lluvia
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
  value: 3,2 × votre délai entre deux tirs, 0,6 à 1,8 s (min 30 % pour lâcher)
- label: Éboulement
  value: 4 à 7 rochers par ligne, le premier à 50 px puis tous les 52 px ; un tombe toutes les 0,08 s
- label: Roche
  value: ×0,97 à ×1,4 Dégâts, rayon de 38 px (+5 par Taille), étourdit 0,4 s
- label: Lignes
  value: Jusqu'à 3 avec tirs multiples (24° d'écart), 24 rochers max
- label: Récupération
  value: 0,3 s après le lâcher
- label: Équilibrage
  value: ×0,36
- label: Si secondaire
  value: 'Toutes les 5 attaques : 2 rochers sur les ennemis les plus proches (×0,8, 30 px)'
icon: items-ps/hold-item/damp-rock.png
sprite: true
names:
  en:
    name: Damp Rock
    desc: 'Charge and release an avalanche: a line of rocks falls one after another where you aim and stuns whoever it hits'
  es:
    name: Roca Lluvia
    desc: 'Carga y suelta una avalancha: una fila de rocas cae una tras otra hacia donde apuntas y aturde a quien alcanza'
  de:
    name: Nassbrocken
    desc: 'Lade auf und lass eine Lawine los: Eine Reihe Felsen fällt nacheinander dorthin, wohin du zielst, und betäubt, wen sie trifft'
  it:
    name: Rocciaumida
    desc: 'Carica e rilascia una valanga: una fila di rocce cade una dopo l''altra dove mira e stordisce chi colpisce'
  pt:
    name: Rocha da Chuva
    desc: 'Carregue e solte uma avalanche: uma fila de rochas cai uma após a outra para onde você mira e atordoa quem atingir'
  ru:
    name: Влажный камень
    desc: 'Заряди и отпусти лавину: ряд камней падает один за другим туда, куда ты целишься, и оглушает задетых'
  ja:
    name: しめったいわ
    desc: チャージして放つと岩なだれが発生：狙った方向へ岩が1列に次々と落ち、当たった相手をスタンさせる
  ko:
    name: 축축한바위
    desc: '충전 후 발사하면 눈사태: 조준한 방향으로 바위가 줄줄이 떨어져 맞은 적을 기절시킨다'
  zh:
    name: 潮湿岩石
    desc: 蓄力并释放岩崩：一排岩石朝你瞄准的方向接连落下，并使命中的目标眩晕
  zt:
    name: 潮濕岩石
    desc: 蓄力後放出雪崩：一排岩石朝你瞄準的方向接連落下，被砸中的會暈眩
---
Chargez et relâchez une avalanche : une rangée de rochers tombe l'un après l'autre là où vous visez et étourdit ceux qu'elle touche

## Fonctionnement
- C'est une **arme** : elle ne marche que comme arme équipée ([Arme équipée](../mechanics/arma_principal.html)) ; avec une autre arme principale, elle n'ajoute que le petit effet indiqué à « Si secondaire ». Vos tirs normaux ne sont pas remplacés.
- Équilibrage : quand c'est votre arme équipée, les dégâts qu'elle inflige sont encore multipliés par ×0,36. Les multiplicateurs ci-dessous s'appliquent avant.
- Après chaque attaque, l'arme est de nouveau prête après 0,3 s.
- Les critiques, la brûlure, le poison, le ralentissement et les autres effets de vos objets s'appliquent à ses coups, qui portent le type de votre Pokémon. Voir [Armes et effets de tir](../mechanics/armas.html).
- Maintenez la touche d'arme pour charger (3,2 × votre délai entre deux tirs, 0,6 à 1,8 s pour une charge complète), relâchez pour lancer l'avalanche (au moins 30 % de charge). La ligne part dans votre direction de visée et s'arrête au bord de la salle.
- 4 à 7 rochers par ligne (selon la charge). Le premier tombe à 50 px, puis un tous les 52 px, chacun 0,08 s après le précédent.
- Chaque rocher explose à l'impact : rayon de 38 px (+5 par Taille), ×0,97 à ×1,4 de vos Dégâts (selon la charge), étourdit les non-boss 0,4 s. Les ennemis volants sont touchés aussi.
- Les tirs multiples ajoutent des lignes (jusqu'à 3, 24° d'écart) ; les objets de direction supplémentaire ajoutent des lignes de 3 rochers. 24 rochers au maximum par lâcher.
- **Si secondaire :** toutes les 5 attaques, des rochers tombent sur les 2 ennemis les plus proches (rayon de 30 px +4 par Taille, ×0,8 Dégâts, étourdissement 0,4 s).

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
