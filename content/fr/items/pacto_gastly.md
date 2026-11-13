---
title: Pacte Fantominus
id: pacto_gastly
kind: passive
category: familiar
family: core
tier: 1
pools:
- devil
pool_weight: 2
details:
- label: Compagnon
  value: Fantominus (Spectre)
- label: Cadence de tir
  value: 0,5 s
- label: Dégâts par tir
  value: (2 + 0,4 par étage) ×1,3
- label: Bonus de dégâts
  value: ×1,3 par rapport aux autres compagnons
- label: Peur
  value: 25 % par coup, 2 s (pas les boss)
- label: Tirs
  value: Traversent les rochers
- label: Prix
  value: Offre de la salle Distorsion
icon: items-ps/hold-item/griseous-orb.png
sprite: true
names:
  en:
    name: Gastly Pact
    desc: 'A Gastly follows you: its shots pass through rocks, hit hard and sometimes scare'
  es:
    name: Pacto Gastly
    desc: 'Un Gastly te acompaña: sus disparos atraviesan las rocas, pegan fuerte y a veces asustan'
  de:
    name: Nebulak-Pakt
    desc: 'Ein Nebulak begleitet dich: Seine Schüsse durchdringen Felsen, treffen hart und erschrecken manchmal'
  it:
    name: Patto Gastly
    desc: 'Un Gastly ti accompagna: i suoi tiri attraversano i massi, colpiscono forte e a volte spaventano'
  pt:
    name: Pacto do Gastly
    desc: 'Um Gastly te acompanha: os tiros dele atravessam as rochas, causam muito dano e às vezes assustam'
  ru:
    name: Договор Гастли
    desc: 'Гастли следует за тобой: его выстрелы проходят сквозь валуны, бьют сильно и иногда пугают'
  ja:
    name: ゴースの契約
    desc: ゴースがついてくる：ショットは岩を貫通し、強力で、ときどき敵を怯えさせる
  ko:
    name: 고오스의 계약
    desc: '고오스가 함께 다닌다: 탄이 바위를 통과하고 세게 맞히며 가끔 겁을 준다'
  zh:
    name: 鬼斯契约
    desc: 一只鬼斯跟随你：它的弹可穿过石块，威力强大，有时会吓退敌人
  zt:
    name: 鬼斯契約
    desc: 鬼斯會跟著你：它的彈會穿過岩石、威力強大，有時還會嚇跑敵人
---
Un Fantominus vous accompagne : ses tirs traversent les rochers, frappent fort et effraient parfois

{{< clip >}}

## Fonctionnement

- Fantominus vous suit de près et tire sur l'ennemi le plus proche à moins de 380 px, une fois toutes les 0,5 secondes. Ses tirs portent jusqu'à 360 px et ont son type (Spectre).
- Ses tirs frappent 1,3 fois plus fort qu'un compagnon normal (2,6 au premier étage), traversent les rochers et ont 25 % de chances par coup d'effrayer un ennemi non-boss pendant 2 secondes (voir [Effets de statut](../mechanics/estados.html)).
- Le Pacte se vend dans la salle Distorsion contre de la vie (voir [Pactes de la salle Distorsion](../mechanics/pactos.html)).
- Les dégâts d'un compagnon ne dépendent pas de votre stat de Dégâts : chaque tir ou coup part de 2 au premier étage, +0,4 par étage ensuite.
- Ses tirs ne profitent pas de vos améliorations de tir (pas de tirs supplémentaires, pas de coups critiques) et ne déclenchent pas vos objets à effet sur coup.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
