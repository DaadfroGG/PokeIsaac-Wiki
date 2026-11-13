---
title: Master Ball
id: master_ball
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 10
details:
- label: Cible
  value: L'ennemi non-boss le plus proche à moins de 320 px
- label: PV
  value: Peu importe
- label: Dégâts du compagnon
  value: 1,5 au premier étage, +0,4 par étage
icon: items-ps/ball/master.png
sprite: true
names:
  en:
    name: Master Ball
    desc: Captures any non-boss enemy, even at full health
  es:
    name: Master Ball
    desc: Captura a cualquier enemigo que no sea jefe, aunque esté sano
  de:
    name: Meisterball
    desc: Fängt jeden Gegner außer Bossen, auch bei voller Gesundheit
  it:
    name: Master Ball
    desc: Cattura qualsiasi nemico che non sia un Boss, anche se in piena salute
  pt:
    name: Bola Mestra
    desc: Captura qualquer inimigo que não seja chefe, mesmo com a vida cheia
  ru:
    name: Мастербол
    desc: Ловит любого врага, кроме босса, даже со всем здоровьем
  ja:
    name: マスターボール
    desc: ボス以外の敵なら、HPが満タンでも捕まえられる
  ko:
    name: 마스터볼
    desc: 보스가 아닌 적이라면 체력이 가득해도 포획한다
  zh:
    name: 大师球
    desc: 可以捕获任何非首领敌人，即使其生命值充足
  zt:
    name: 大師球
    desc: 可捕捉任何非頭目的敵人，即使牠體力全滿
---
Capture n'importe quel ennemi hors boss, même en pleine santé

## Fonctionnement
- L'ennemi le plus proche à moins de 320 px qui n'est pas un boss est capturé d'un coup, quels que soient ses PV, et devient un [compagnon](../mechanics/companeros.html) permanent qui vous suit et tire.
- Ses dégâts dépendent de l'étage où vous le capturez : 1,5 au premier étage, +0,4 par étage ensuite.
- Il compte dans votre limite de compagnons (3, ou 5 avec la [Boîte Noigrume](m_caja_bonguri.html)). Si la limite est atteinte, ou sans ennemi valable à moins de 320 px, rien ne se passe et vous gardez la charge.
- Les boss ne peuvent jamais être capturés.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux ennemis sont capturés (si vous avez la place pour deux compagnons).
