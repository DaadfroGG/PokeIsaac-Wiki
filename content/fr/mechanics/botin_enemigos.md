---
title: Butin des ennemis
id: botin_enemigos
color: '#ffd23c'
labels:
- text: MÉCANIQUE
  color: '#ffd23c'
icon: icons/world/coin.png
details:
- label: Chance de butin
  value: 6 % + 0,5 % par point de Chance (3,5 % à 10 %)
- label: Ce qui tombe
  value: Pièce 75 %, demi-cœur 25 %
- label: Clé
  value: 1,5 % + 0,3 % par point de Chance, seulement si rien d'autre n'est tombé
- label: Boss
  value: Pas de butin normal
- label: Butin d'objets
  value: Au plus 3 pièces et 6 autres ramassables par salle
names:
  es:
    name: Botín de los enemigos
    desc: Cada enemigo vencido puede soltar una moneda, medio corazón o una llave. La Suerte y algunos objetos cambian las probabilidades.
  fr:
    name: Butin des ennemis
    desc: Chaque ennemi vaincu peut lâcher une pièce, un demi-cœur ou une clé. La Chance et certains objets changent les chances.
  de:
    name: Beute von Gegnern
    desc: Jeder besiegte Gegner kann eine Münze, ein halbes Herz oder einen Schlüssel fallen lassen. Glück und einige Items ändern die Chancen.
  it:
    name: Bottino dei nemici
    desc: Ogni nemico sconfitto può lasciare una moneta, mezzo cuore o una chiave. La Fortuna e alcuni strumenti cambiano le probabilità.
  pt:
    name: Saque dos inimigos
    desc: Cada inimigo derrotado pode soltar uma moeda, meio coração ou uma chave. A Sorte e alguns itens mudam as chances.
  ru:
    name: Добыча с врагов
    desc: Каждый побеждённый враг может выронить монету, полсердца или ключ. Удача и некоторые предметы меняют шансы.
  ja:
    name: 敵のドロップ
    desc: 倒した敵はコイン、ハート半分、カギを落とすことがあります。運と一部の道具で確率が変わります。
  ko:
    name: 적 전리품
    desc: 쓰러뜨린 적은 동전, 하트 반 칸, 열쇠를 떨어뜨릴 수 있다. 행운과 일부 도구가 확률을 바꾼다.
  zh:
    name: 敌人掉落
    desc: 每个被击败的敌人都可能掉落硬币、半颗心或钥匙。幸运和部分道具会改变概率。
  zt:
    name: 敵人掉落
    desc: 每個被擊敗的敵人都可能掉落金幣、半顆愛心或鑰匙。幸運和部分道具會改變機率。
---
Chaque ennemi vaincu peut lâcher une pièce, un demi-cœur ou une clé. La Chance et certains objets changent les chances.

## Butin normal
- Chaque ennemi vaincu fait un seul tirage : **6 % + 0,5 % par point de Chance** de lâcher quelque chose. Ici la Chance ne compte que de −5 à 8, donc la chance va de 3,5 % à 10 %.
- Quand il lâche quelque chose, c'est une [pièce](../world/coin.html) 3 fois sur 4, sinon un [demi-cœur](../world/halfheart.html).
- Quand il ne lâche rien, il a un second tirage : **1,5 % + 0,3 % par point de Chance** de lâcher une [clé](../world/key.html).
- Le butin apparaît là où l'ennemi est mort.
- Les chances utilisent la Chance du joueur à qui revient l'ennemi : le dernier joueur qui l'a touché avec un tir ou une attaque (le joueur 1 si personne ne l'a touché). Les ennemis vaincus par les compagnons, les bombes ou la brûlure comptent comme les autres.
- Les ennemis invoqués par d'autres ennemis lâchent du butin comme les autres.

| Chance | −5 | 0 | 2 | 4 | 6 | 8 ou plus |
|---|---|---|---|---|---|---|
| Quelque chose tombe | 3,5 % | 6 % | 7 % | 8 % | 9 % | 10 % |
| Pièce | 2,6 % | 4,5 % | 5,3 % | 6 % | 6,8 % | 7,5 % |
| Demi-cœur | 0,9 % | 1,5 % | 1,8 % | 2 % | 2,3 % | 2,5 % |

## Boss
- Les boss ne font jamais le tirage du butin normal, et vaincre un boss ne déclenche pas les objets qui réagissent aux ennemis vaincus (pièces en plus, compteurs, soins). Les boss donnent leurs propres récompenses.

## Objets qui changent le butin
| Objet | Effet |
|---|---|
| [Poche à Renforts](../items/d_bolsillo_mejoras.html) | Double les deux chances : 12 % à Chance 0, jusqu'à 20 % ; clé 3 % + 0,6 % par point de Chance |
| [Max Leurre](../items/cebo_max.html) | Une chance séparée de 20 % d'avoir une pièce de plus par ennemi, pour toute l'équipe |
| [Rune Sort](../items/hechizo.html) | 5 % + 0,5 % par point de Chance d'avoir un [cœur d'âme](corazones_alma.html) par ennemi |
| [Poké Radar](../items/poke_radar.html) | Les ennemis qu'il rend chromatiques lâchent 3 pièces |
| [Vieil Écu](../items/d_real_plata.html) | Les ennemis vaincus pendant qu'ils sont en or lâchent 2 pièces |
| [Message Mystère](../items/m_nota_intrigante.html) | Si l'ennemi marqué tombe en premier, il lâche 2 ramassables au hasard (cœur, cœur d'âme, clé, bombe, pépite ou pièce) |
| [Baie Pêcha](../held/pecha_berry.html) | Un ennemi sur 12 lâche un demi-cœur |
| [Conserve de Bach](../held/bachs_food_tin.html) | Un ennemi sur 8 lâche une pièce |

## Limites du butin d'objets
Les ramassables ajoutés par des objets (le tableau ci-dessus, sauf la Poche à Renforts et la Rune Sort, qui changent le butin normal) ont des limites :
- Au plus **3 pièces** (pépites comprises) **par salle**, et **6 + la moitié du numéro d'étage** par étage.
- Au plus **6 autres ramassables par salle**, et **14 + la moitié du numéro d'étage** par étage.
- Aucun butin d'objet tant que 40 ramassables traînent déjà dans la salle.
Le butin normal n'a pas ces limites.

## Événements en direct
- Pendant un événement en direct avec la règle de l'or, la chance du butin normal est ×1,5 (50 % au plus), comme les pièces pour finir les salles et vaincre les boss.

Voir aussi : [Butin des caisses et tonneaux](botin_rompibles.html), [Pokédollar](../world/coin.html).
