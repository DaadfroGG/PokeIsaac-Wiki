---
title: Love Ball
id: f_amor_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Compagnon
  value: Toudoudou (Fée)
- label: Cadence de tir
  value: 0,67 s
- label: Dégâts par tir
  value: (2 + 0,4 par étage) ×1,8
- label: Bonus de dégâts
  value: ×1,8 par rapport aux autres compagnons
icon: items-ps/ball/love.png
sprite: true
names:
  en:
    name: Love Ball
    desc: An Igglybuff follows you and shoots harder than other companions
  es:
    name: Amor Ball
    desc: Un Igglybuff te acompaña y dispara más fuerte que otros compañeros
  de:
    name: Sympaball
    desc: Ein Fluffeluff begleitet dich und schießt stärker als andere Begleiter
  it:
    name: Love Ball
    desc: Un Igglybuff ti accompagna e tira più forte degli altri compagni
  pt:
    name: Bola Amor
    desc: Um Igglybuff te acompanha e atira mais forte que os outros companheiros
  ru:
    name: Лавбол
    desc: Игглибафф следует за тобой и стреляет сильнее других спутников
  ja:
    name: ラブラブボール
    desc: ププリンがついてきて、ほかのなかまより強く撃つ
  ko:
    name: 러브러브볼
    desc: 푸푸린이 함께 다니며 다른 동료보다 센 탄을 쏜다
  zh:
    name: 甜蜜球
    desc: 一只宝宝丁跟随你，射击威力比其他伙伴更强
  zt:
    name: 甜蜜球
    desc: 寶寶丁會跟著你，射擊威力比其他夥伴更強
---
Un Toudoudou vous accompagne et tire plus fort que les autres compagnons

{{< clip >}}

## Fonctionnement

- Toudoudou vous suit de près et tire sur l'ennemi le plus proche à moins de 380 px, une fois toutes les 0,67 secondes. Ses tirs portent jusqu'à 360 px et ont son type (Fée).
- Ses tirs frappent 1,8 fois plus fort qu'un compagnon normal (3,6 au premier étage).
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Ses tirs ne profitent pas de vos améliorations de tir (pas de tirs supplémentaires, pas de coups critiques) et ne déclenchent pas vos objets à effet sur coup.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
