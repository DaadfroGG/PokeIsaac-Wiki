---
title: Beast Ball
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
- label: Duration
  value: 3.3 s
- label: Pull
  value: 200 px (not bosses)
- label: Damage
  value: Your Damage ×1.2, 6 times per second
- label: Enemy shots
  value: Swallowed within 90 px
icon: items-ps/ball/beast.png
sprite: true
names:
  es:
    name: Ente Ball
    desc: Lanzas un agujero de gusano que atrae y hiere a los enemigos y se traga sus disparos
  fr:
    name: Ultra Ball
    desc: Vous lancez un trou de ver qui attire et blesse les ennemis et avale leurs tirs
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
You launch a wormhole that pulls in and hurts enemies and swallows their shots

## How it works
- You launch a wormhole the way you are facing. It moves forward, slows down and stops, growing a little; it lasts 3.3 seconds.
- Enemies within 200 px (not bosses) are dragged toward it.
- Every enemy touching it, bosses included, takes 1.2 times your Damage every 1/6 second.
- Enemy shots within 90 px of it are swallowed.
- It goes through rocks and bounces off walls. It can be a [critical hit](../mechanics/criticos.html), but your items' shot effects are not added to it.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): you launch two wormholes.
