---
title: Épée Rouillée
id: espada_oxidada
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 2
details:
- label: Portée
  value: Éventail de 125 px devant vous
- label: Dégâts
  value: Vos Dégâts ×10 (au moins 12)
- label: Tirs ennemis
  value: Les coupe
icon: items-ps/hold-item/rusted-sword.png
sprite: true
names:
  en:
    name: Rusted Sword
    desc: A slash in front of you that deals ×10 damage and cuts enemy shots
  es:
    name: Espada Oxidada
    desc: Un tajo delante de ti que hace ×10 de daño y corta los disparos enemigos
  de:
    name: Rostiges Schwert
    desc: Ein Hieb vor dir, der ×10 Schaden macht und gegnerische Schüsse zerschneidet
  it:
    name: Spada rovinata
    desc: Un fendente davanti a te che infligge ×10 danni e taglia i tiri nemici
  pt:
    name: Espada Enferrujada
    desc: Um golpe à sua frente que causa ×10 de dano e corta os tiros inimigos
  ru:
    name: Ржавый меч
    desc: Удар перед тобой с уроном ×10, который рассекает вражеские выстрелы
  ja:
    name: くちたけん
    desc: 目の前を斬りつけて×10のダメージを与え、敵のショットを切る
  ko:
    name: 녹슨검
    desc: 앞에 대미지 ×10의 베기를 날려 적의 탄을 자른다
  zh:
    name: 腐朽的剑
    desc: 在你面前挥出一记伤害×10的斩击，并斩断敌人的弹
  zt:
    name: 腐朽的劍
    desc: 在面前揮出一擊，造成×10傷害並切斷敵人的彈
---
Une entaille devant vous qui inflige ×10 dégâts et coupe les tirs ennemis

## Fonctionnement
- Vous frappez dans la direction de votre dernier tir : un large éventail d'environ 125° sur 125 px, plus tout ce qui est collé à vous.
- Chaque ennemi dedans subit 10 fois vos Dégâts (au moins 12), boss compris. Le coup peut être un [coup critique](../mechanics/criticos.html) et déclenche les effets au toucher de vos objets.
- Chaque tir ennemi dans l'éventail est détruit, et les caisses et tonneaux juste devant vous sont cassés.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : vous frappez deux fois.
