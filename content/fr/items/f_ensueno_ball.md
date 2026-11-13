---
title: Rêve Ball
id: f_ensueno_ball
kind: passive
category: familiar
family: familiar
tier: 3
pools:
- angel
- boss
pool_weight: 2
details:
- label: Compagnon
  value: Togepi (Fée)
- label: Cadence de tir
  value: 0,63 s
- label: Dégâts par tir
  value: 2 + 0,4 par étage
- label: Tirs
  value: 3 par salve, à environ 17° d'écart
icon: items-ps/ball/dream.png
sprite: true
names:
  en:
    name: Dream Ball
    desc: A Togepi follows you and fires three at a time
  es:
    name: Ensueño Ball
    desc: Un Togepi te acompaña y dispara de tres en tres
  de:
    name: Traumball
    desc: Ein Togepi begleitet dich und schießt im Dreierpack
  it:
    name: Dream Ball
    desc: Un Togepi ti accompagna e tira tre alla volta
  pt:
    name: Dream Ball
    desc: Um Togepi te acompanha e atira de três em três
  ru:
    name: Дримбол
    desc: Тогепи следует за тобой и стреляет по три выстрела
  ja:
    name: ドリームボール
    desc: トゲピーがついてきて、3発ずつ撃つ
  ko:
    name: 드림볼
    desc: 토게피가 함께 다니며 탄을 3발씩 쏜다
  zh:
    name: 梦境球
    desc: 波克比跟随你，每次射出三发
  zt:
    name: 夢境球
    desc: 波克比會跟著你，每次射出三發
---
Un Togepi vous accompagne et tire par trois

{{< clip >}}

## Fonctionnement

- Togepi vous suit de près et tire sur l'ennemi le plus proche à moins de 380 px, une fois toutes les 0,63 secondes. Ses tirs portent jusqu'à 360 px et ont son type (Fée).
- Il tire trois projectiles à la fois : un sur la cible et un de chaque côté (environ 17° d'écart). Chaque tir inflige les dégâts complets du compagnon.
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Ses tirs ne profitent pas de vos améliorations de tir (pas de tirs supplémentaires, pas de coups critiques) et ne déclenchent pas vos objets à effet sur coup.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
