---
title: Faiblo Ball
id: f_nido_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Compagnon
  value: Natu (Psy)
- label: Cadence de tir
  value: 0,6 s
- label: Dégâts par tir
  value: 2 + 0,4 par étage
- label: Tirs
  value: Guidés vers les ennemis
icon: items-ps/ball/nest.png
sprite: true
names:
  en:
    name: Nest Ball
    desc: A Natu follows you and its shots home in on enemies
  es:
    name: Nido Ball
    desc: Un Natu te acompaña y sus disparos persiguen a los enemigos
  de:
    name: Nestball
    desc: Ein Natu begleitet dich und seine Schüsse verfolgen Gegner
  it:
    name: Minor Ball
    desc: Un Natu ti accompagna e i suoi tiri inseguono i nemici
  pt:
    name: Nest Ball
    desc: Um Natu te acompanha e os tiros dele perseguem os inimigos
  ru:
    name: Нестбол
    desc: Нату следует за тобой, и его выстрелы преследуют врагов
  ja:
    name: ネストボール
    desc: ネイティがついてきて、そのショットは敵を追尾する
  ko:
    name: 네스트볼
    desc: 네이티가 함께 다니며 탄이 적을 추적한다
  zh:
    name: 巢穴球
    desc: 天然雀跟随你，它的弹会追踪敌人
  zt:
    name: 巢穴球
    desc: 天然雀會跟著你，它的彈會追蹤敵人
---
Un Natu vous accompagne et ses tirs poursuivent les ennemis

{{< clip >}}

## Fonctionnement

- Natu vous suit de près et tire sur l'ennemi le plus proche à moins de 380 px, une fois toutes les 0,6 secondes. Ses tirs portent jusqu'à 360 px et ont son type (Psy).
- Ses tirs sont autoguidés : ils s'incurvent vers les ennemis.
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Ses tirs ne profitent pas de vos améliorations de tir (pas de tirs supplémentaires, pas de coups critiques) et ne déclenchent pas vos objets à effet sur coup.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
