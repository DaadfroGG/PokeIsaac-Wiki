---
title: Ultra Ball
id: a_ente_ball
kind: active
family: ability
tier: 3
pools:
- treasure
- boss
pool_weight: 2
charge: 4
details:
- label: Durée
  value: 3,3 s
- label: Attraction
  value: 200 px (pas les boss)
- label: Dégâts
  value: Vos Dégâts ×1,2, 6 fois par seconde
- label: Tirs ennemis
  value: Avalés à moins de 90 px
icon: items-ps/ball/beast.png
sprite: true
names:
  en:
    name: Beast Ball
    desc: You launch a wormhole that pulls in and hurts enemies and swallows their shots
  es:
    name: Ente Ball
    desc: Lanzas un agujero de gusano que atrae y hiere a los enemigos y se traga sus disparos
  de:
    name: Ultraball
    desc: Du schleuderst ein Wurmloch, das Gegner anzieht und verletzt und ihre Schüsse verschluckt
  it:
    name: UC Ball
    desc: Lanci un wormhole che attira e ferisce i nemici e inghiotte i loro tiri
  pt:
    name: Beast Ball
    desc: Você lança um buraco de minhoca que atrai e fere os inimigos e engole os tiros deles
  ru:
    name: Бистбол
    desc: Запускаешь червоточину, которая притягивает и ранит врагов и поглощает их выстрелы
  ja:
    name: ウルトラボール
    desc: ワームホールを放ち、敵を引き寄せてダメージを与え、敵の弾も飲み込む
  ko:
    name: 울트라볼
    desc: 적을 끌어당겨 상처 입히고 적의 탄을 삼키는 웜홀을 던진다
  zh:
    name: 究极球
    desc: 发射一个虫洞，吸引并伤害敌人，还会吞噬它们的弹
  zt:
    name: 究極球
    desc: 發射一個蟲洞，吸引並傷害敵人，還會吞噬它們的彈
---
Vous lancez un trou de ver qui attire et blesse les ennemis et avale leurs tirs

## Fonctionnement
- Vous lancez un trou de ver dans la direction où vous regardez. Il avance, ralentit puis s'arrête en grossissant un peu ; il dure 3,3 secondes.
- Les ennemis à moins de 200 px (sauf les boss) sont attirés vers lui.
- Chaque ennemi qui le touche, boss compris, subit 1,2 fois vos Dégâts toutes les 1/6 seconde.
- Les tirs ennemis à moins de 90 px sont avalés.
- Il traverse les rochers et rebondit sur les murs. Il peut faire un [coup critique](../mechanics/criticos.html), mais les effets de tirs de vos objets ne s'y ajoutent pas.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : vous lancez deux trous de ver.
