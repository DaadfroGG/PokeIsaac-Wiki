---
title: Copain Ball
id: f_amigo_ball
kind: passive
category: familiar
family: familiar
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Compagnon
  value: Pichu (Électrik)
- label: Cadence de tir
  value: 0,5 s
- label: Dégâts par tir
  value: 2 + 0,4 par étage
icon: items-ps/ball/friend.png
sprite: true
names:
  en:
    name: Friend Ball
    desc: A Pichu follows you and shoots enemies
  es:
    name: Amigo Ball
    desc: Un Pichu te acompaña y dispara a los enemigos
  de:
    name: Freundesball
    desc: Ein Pichu begleitet dich und schießt auf Gegner
  it:
    name: Friend Ball
    desc: Un Pichu ti accompagna e tira contro i nemici
  pt:
    name: Bola Amizade
    desc: Um Pichu te acompanha e atira nos inimigos
  ru:
    name: Френдбол
    desc: Пичу следует за тобой и стреляет во врагов
  ja:
    name: フレンドボール
    desc: ピチューがついてきて、敵を撃つ
  ko:
    name: 프렌드볼
    desc: 피츄가 함께 다니며 적에게 탄을 쏜다
  zh:
    name: 友友球
    desc: 皮丘跟随你并射击敌人
  zt:
    name: 友友球
    desc: 皮丘會跟著你，並射擊敵人
---
Un Pichu vous accompagne et tire sur les ennemis

{{< clip >}}

## Fonctionnement

- Pichu vous suit de près et tire sur l'ennemi le plus proche à moins de 380 px, une fois toutes les 0,5 secondes. Ses tirs portent jusqu'à 360 px et ont son type (Électrik).

- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Ses tirs ne profitent pas de vos améliorations de tir (pas de tirs supplémentaires, pas de coups critiques) et ne déclenchent pas vos objets à effet sur coup.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
