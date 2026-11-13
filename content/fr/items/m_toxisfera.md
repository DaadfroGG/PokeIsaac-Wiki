---
title: Orbe Toxique
id: m_toxisfera
kind: passive
category: shot
family: module
tier: 4
pools:
- treasure
- devil
pool_weight: 1
stats:
- text: Cadence -
  good: false
- text: Dégâts +1
  good: true
details:
- label: Explosion
  value: ×0,8 de dégâts, 55 px ; empoisonne seulement si vous êtes de type Poison
- label: Cadence
  value: -10 (0,167 s de plus entre les tirs)
- label: Dégâts
  value: '+1'
- label: Portée
  value: ×0,8
- label: Prix chez Darkrai
  value: 1 réceptacle de cœur (parfois 3 cœurs d'âme)
icon: items-ps/hold-item/toxic-orb.png
sprite: true
names:
  en:
    name: Toxic Orb
    desc: Your shots fly in an arc and explode on landing (they don't hurt you; they poison if your Pokémon is Poison-type); you shoot slower
  es:
    name: Toxisfera
    desc: Tus disparos vuelan en arco y estallan al caer (no te hieren; envenenan si tu Pokémon es de tipo Veneno); disparas más despacio
  de:
    name: Toxik-Orb
    desc: Deine Schüsse fliegen im Bogen und explodieren bei der Landung (sie verletzen dich nicht; sie vergiften, wenn dein Pokémon vom Typ Gift ist); du schießt langsamer
  it:
    name: Tossicsfera
    desc: I tuoi tiri volano ad arco ed esplodono all'atterraggio (non ti feriscono; avvelenano se il tuo Pokémon è di tipo Veleno); spari più lentamente
  pt:
    name: Orbe Tóxico
    desc: Seus tiros voam em arco e explodem ao cair (não ferem você; envenenam se seu Pokémon for do tipo Venenoso); você atira mais devagar
  ru:
    name: Токсичная сфера
    desc: Твои выстрелы летят дугой и взрываются при падении (тебя не ранят; отравляют, если твой покемон типа Яд); стреляешь медленнее
  ja:
    name: どくどくだま
    desc: ショットが弧を描いて飛び、着地で爆発する（自分には当たらない。どくタイプなら毒を与える）。連射は遅くなる
  ko:
    name: 맹독구슬
    desc: 탄이 포물선으로 날아가 떨어지면서 터진다(나는 다치지 않음. 독 타입이면 독을 입힘). 연사가 느려진다
  zh:
    name: 剧毒宝珠
    desc: 你的弹呈弧线飞行并在落地时爆炸（不会伤到你；若你的宝可梦是毒属性，还会使敌人中毒）；射速更慢
  zt:
    name: 劇毒寶珠
    desc: 你的彈會以拋物線飛行，落地時爆炸（不會傷到你；如果你的寶可夢是毒屬性則會使敵人中毒）；射擊速度較慢
---
Vos tirs volent en arc et explosent à l'atterrissage (sans vous blesser ; ils empoisonnent si votre Pokémon est de type Poison) ; vous tirez plus lentement

{{< clip >}}

## Fonctionnement
- Vos tirs volent en cloche : ils passent au-dessus des rochers et vont 20 % moins loin.
- Un tir explose quand il retombe au bout de sa portée, ou dès qu'il touche un ennemi (cet ennemi prend le tir et l'explosion).
- L'explosion blesse chaque ennemi à moins de 55 px (+6 px pour chaque objet qui grossit les tirs) pour 80 % des dégâts du tir. Elle a votre type et peut infliger les statuts de vos tirs. Elle blesse aussi les boss.
- Si votre Pokémon est de type [Poison](../types/poison.html), chaque ennemi pris dans l'explosion est empoisonné 2,5 s.
- L'explosion ne vous blesse jamais. Elle casse les rochers et les objets du décor proches et ouvre les salles secrètes dont elle atteint le mur.
- La perte de cadence compte en entier (les ralentissements échappent aux [rendements décroissants](../mechanics/rendimientos.html)). Le +1 en Dégâts est un bonus fixe normal.
- Les rebonds de la [Roche Lisse](m_roca_suave.html) ne marchent pas sur les tirs en cloche.
- Avec une arme spéciale au lieu des tirs normaux, chaque coup a 25 % de chances (+1 % par point de Chance) de provoquer la même explosion, pour 80 % de vos Dégâts.

## Où le trouver
- Salles au trésor et Salle Distorsion ([pacte de Darkrai](../rooms/devil.html)) : là, il coûte 1 réceptacle de cœur, ou parfois 3 cœurs d'âme.

## Cumul
- La cloche et l'explosion ne changent pas avec un deuxième exemplaire. Les stats s'ajoutent à nouveau : encore -10 en cadence et +1 en Dégâts.
