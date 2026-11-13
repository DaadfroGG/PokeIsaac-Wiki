---
title: Honey
id: m_miel
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Puddle
  value: 2 s, radius 18 px
- label: Damage
  value: 25 % of your damage every 0.25 s (min. 0.5)
- label: Slow
  value: 0.7 s, renewed while inside
- label: Flying
  value: Not affected
icon: items-ps/other-item/honey.png
sprite: true
names:
  es:
    name: Miel
    desc: Tus disparos dejan charcos de miel que frenan y hieren a los enemigos que los pisan
  fr:
    name: Miel
    desc: Vos tirs laissent des flaques de miel qui ralentissent et blessent les ennemis qui marchent dedans
  de:
    name: Honig
    desc: Deine Schüsse hinterlassen Honigpfützen, die Gegner, die hineintreten, bremsen und verletzen
  it:
    name: Miele
    desc: I tuoi tiri lasciano pozze di miele che rallentano e feriscono i nemici che ci passano sopra
  pt:
    name: Mel
    desc: Seus tiros deixam poças de mel que retardam e ferem os inimigos que pisam nelas
  ru:
    name: Мед
    desc: Твои выстрелы оставляют медовые лужи, которые замедляют и ранят наступивших врагов
  ja:
    name: あまいミツ
    desc: ショットがハチミツの水たまりを残し、踏んだ敵を遅くしてダメージを与える
  ko:
    name: 달콤한꿀
    desc: 탄이 꿀 웅덩이를 남겨 밟은 적을 느리게 하고 대미지를 준다
  zh:
    name: 甜甜蜜
    desc: 你的弹会留下蜜糖水洼，使踩到的敌人减速并受伤
  zt:
    name: 甜甜蜜
    desc: 你的彈會留下蜂蜜水窪，讓踩到的敵人減速並受到傷害
---
Your shots leave honey puddles that slow and hurt enemies that step in them

{{< clip >}}

## How it works
- Your shots drop a honey puddle about every 0.12 s while they fly. A puddle lasts 2 s and has a radius of 18 px.
- Every 0.25 s each non-flying enemy standing in a puddle takes 25 % of your damage (at least 0.5) and is slowed for 0.7 s.
- At most 24 puddles exist at once, so the trail thins out in long fights.

## Stacking
- It does not stack: a second copy changes nothing.
