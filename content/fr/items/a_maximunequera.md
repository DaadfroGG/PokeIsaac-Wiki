---
title: Poignet Dynamax
id: a_maximunequera
kind: active
family: ability
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 2
details:
- label: Durée
  value: 0,7 s
- label: Dégâts
  value: Vos Dégâts ×1,2 toutes les 0,05 s (jusqu'à ×16,8 par ennemi)
- label: Largeur
  value: 34 px (+6 par bonus de taille)
- label: Portée
  value: Jusqu'au mur, à travers tout
icon: items-ps/key-item/dynamax-band.png
sprite: true
names:
  en:
    name: Dynamax Band
    desc: You fire a huge beam where you're facing that pierces everything
  es:
    name: Maximuñequera
    desc: Lanzas un rayo enorme hacia donde miras que lo atraviesa todo
  de:
    name: Dynamax-Band
    desc: Du feuerst einen riesigen Strahl in Blickrichtung ab, der alles durchdringt
  it:
    name: Polsino Dynamax
    desc: Lanci un enorme raggio nella direzione in cui guardi che trapassa tutto
  pt:
    name: Banda Dynamax
    desc: Você dispara um raio enorme para onde está olhando, que atravessa tudo
  ru:
    name: Динамакс-браслет
    desc: Выпускаешь огромный луч туда, куда смотришь, пробивающий все
  ja:
    name: ダイマックスＢ
    desc: 向いている方向に巨大なビームを撃ち、すべてを貫通する
  ko:
    name: 다이맥스 밴드
    desc: 바라보는 방향으로 모든 것을 관통하는 거대한 빔을 쏜다
  zh:
    name: 极巨腕带
    desc: 朝面向的方向发射一道贯穿一切的巨大光束
  zt:
    name: 極巨腕帶
    desc: 朝面向的方向發射一道貫穿一切的巨大光束
---
Vous lancez devant vous un énorme rayon qui transperce tout

## Fonctionnement
- Vous lancez un rayon énorme vers où vous regardez pendant 0,7 seconde. Il va jusqu'au mur et traverse les rochers et tous les ennemis. Si vous avez des tirs à tête chercheuse, il vise un peu vers l'ennemi le plus proche.
- Toutes les 0,05 seconde, chaque ennemi dans le rayon subit 1,2 fois vos Dégâts : jusqu'à 14 coups, environ 16,8 fois vos Dégâts, pour un ennemi qui y reste tout le temps. Les boss aussi.
- Chaque coup utilise votre type et peut être un [coup critique](../mechanics/criticos.html). Les effets de tirs de vos objets s'appliquent aussi.
- Avec des bonus de rebond, le rayon rebondit sur les murs (jusqu'à 4 fois). Il casse les caisses et les tonneaux sur sa route. Il reste un seul rayon : les tirs supplémentaires n'en ajoutent pas.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : le second rayon remplace le premier.
