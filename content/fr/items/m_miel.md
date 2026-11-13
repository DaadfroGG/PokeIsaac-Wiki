---
title: Miel
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
- label: Flaque
  value: 2 s, rayon 18 px
- label: Dégâts
  value: 25 % de vos dégâts toutes les 0,25 s (min. 0,5)
- label: Ralentissement
  value: 0,7 s, renouvelé tant qu'il reste dedans
- label: Volants
  value: Non affectés
icon: items-ps/other-item/honey.png
sprite: true
names:
  en:
    name: Honey
    desc: Your shots leave honey puddles that slow and hurt enemies that step in them
  es:
    name: Miel
    desc: Tus disparos dejan charcos de miel que frenan y hieren a los enemigos que los pisan
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
Vos tirs laissent des flaques de miel qui ralentissent et blessent les ennemis qui marchent dedans

{{< clip >}}

## Fonctionnement
- Vos tirs laissent une flaque de miel environ toutes les 0,12 s pendant leur vol. Une flaque dure 2 s et a un rayon de 18 px.
- Toutes les 0,25 s, chaque ennemi non volant dans une flaque subit 25 % de vos dégâts (au moins 0,5) et est ralenti 0,7 s.
- Il n'existe pas plus de 24 flaques à la fois, la traînée s'éclaircit donc dans les longs combats.

## Cumul
- Il ne se cumule pas : un second exemplaire ne change rien.
