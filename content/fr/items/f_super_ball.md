---
title: Super Ball
id: f_super_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Compagnon
  value: Stari (Eau)
- label: Cadence de tir
  value: 0,73 s
- label: Dégâts par tir
  value: 2 + 0,4 par étage
- label: Tirs
  value: 4 directions par salve
icon: items-ps/ball/great.png
sprite: true
names:
  en:
    name: Great Ball
    desc: A Staryu follows you and fires in all four directions
  es:
    name: Super Ball
    desc: Un Staryu te acompaña y dispara en las cuatro direcciones
  de:
    name: Superball
    desc: Ein Sterndu begleitet dich und schießt in alle vier Richtungen
  it:
    name: Mega Ball
    desc: Uno Staryu ti accompagna e tira nelle quattro direzioni
  pt:
    name: Great Ball
    desc: Um Staryu te acompanha e atira nas quatro direções
  ru:
    name: Грейтбол
    desc: Старью следует за тобой и стреляет в четыре стороны
  ja:
    name: スーパーボール
    desc: ヒトデマンがついてきて、四方向に撃つ
  ko:
    name: 슈퍼볼
    desc: 별가사리가 함께 다니며 네 방향으로 탄을 쏜다
  zh:
    name: 超级球
    desc: 海星星跟随你，向四个方向射击
  zt:
    name: 超級球
    desc: 海星星會跟著你，朝四個方向射擊
---
Un Stari vous accompagne et tire dans les quatre directions

{{< clip >}}

## Fonctionnement

- Stari vous suit de près et tire sur l'ennemi le plus proche à moins de 380 px, une fois toutes les 0,73 secondes. Ses tirs portent jusqu'à 360 px et ont son type (Eau).
- Il tire quatre projectiles à la fois : un sur la cible et un dans chacune des trois autres directions (de part et d'autre et en sens inverse). Chaque tir inflige les dégâts complets du compagnon.
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Ses tirs ne profitent pas de vos améliorations de tir (pas de tirs supplémentaires, pas de coups critiques) et ne déclenchent pas vos objets à effet sur coup.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
