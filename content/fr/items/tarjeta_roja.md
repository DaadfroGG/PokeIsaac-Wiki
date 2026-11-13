---
title: Carton Rouge
id: tarjeta_roja
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Déclencheur
  value: Un ennemi non-boss vous blesse au contact
- label: Recul
  value: Repoussé loin de vous
- label: Étourdissement
  value: 0,5 s
- label: Boss
  value: Non affectés
icon: items-ps/hold-item/red-card.png
sprite: true
names:
  en:
    name: Red Card
    desc: Enemies (not bosses) that hit you in melee get knocked back and stunned
  es:
    name: Tarjeta Roja
    desc: Quien te golpea cuerpo a cuerpo (salvo los jefes) sale despedido y aturdido
  de:
    name: Rote Karte
    desc: Wer dich im Nahkampf trifft (außer Bosse), wird weggeschleudert und betäubt
  it:
    name: Cartelrosso
    desc: Chi ti colpisce in corpo a corpo (tranne i Boss) viene sbalzato via e stordito
  pt:
    name: Cartão Vermelho
    desc: Quem acertar você de perto (exceto chefes) é arremessado e atordoado
  ru:
    name: Красная карта
    desc: Враги (кроме боссов), бьющие тебя вблизи, отлетают и оглушаются
  ja:
    name: レッドカード
    desc: 接近戦で攻撃してきた敵（ボスを除く）は吹き飛ばされ、スタン状態になる
  ko:
    name: 레드카드
    desc: 근접 공격으로 나를 친 적(보스 제외)은 튕겨 나가고 기절한다
  zh:
    name: 红牌
    desc: 近身攻击你的敌人（首领除外）会被击飞并眩晕
  zt:
    name: 紅牌
    desc: 近身攻擊你的敵人（頭目除外）會被擊退並暈眩
---
Ceux qui vous frappent au corps à corps (sauf les boss) sont repoussés et étourdis

## Fonctionnement

- Chaque fois qu'un ennemi vous blesse au contact, il est projeté loin de vous et étourdi pendant 0,5 seconde.
- Vous subissez quand même le coup : la carte n'empêche pas les dégâts, elle éloigne seulement l'agresseur.
- Elle ne réagit qu'au corps à corps. Les tirs ennemis, explosions et dangers au sol ne la déclenchent pas.
- Les [boss](../mechanics/jefes_adaptativos.html) ne sont jamais repoussés ni étourdis.

## Cumul

- Un deuxième exemplaire ne change rien.
