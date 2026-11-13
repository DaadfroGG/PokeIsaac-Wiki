---
title: CT Explosion
id: mt_explosion
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 4
details:
- label: Rayon
  value: 160 px autour de vous
- label: Dégâts
  value: Vos Dégâts ×14 (au moins 28)
- label: Vous
  value: Pas blessé
icon: items-ps/tm/normal.png
sprite: true
names:
  en:
    name: TM Explosion
    desc: A big explosion around you that doesn't hurt you
  es:
    name: MT Explosión
    desc: Una gran explosión a tu alrededor que no te hace daño
  de:
    name: TM Explosion
    desc: Eine große Explosion um dich herum, die dir nicht schadet
  it:
    name: MT Esplosione
    desc: Una grande esplosione intorno a te che non ti ferisce
  pt:
    name: MT Explosão
    desc: Uma grande explosão ao seu redor que não te causa dano
  ru:
    name: ТМ Взрыв
    desc: Мощный взрыв вокруг тебя, который тебя не ранит
  ja:
    name: わざマシン・だいばくはつ
    desc: 自分にダメージのない、周囲への大爆発
  ko:
    name: 기술머신 대폭발
    desc: 주위에 큰 폭발을 일으킨다(나는 피해 없음)
  zh:
    name: 招式机器 大爆炸
    desc: 在你周围引发一场大爆炸，不会伤到你
  zt:
    name: 招式學習器 大爆炸
    desc: 在你周圍引發不會傷害你的大爆炸
---
Une grosse explosion autour de vous qui ne vous blesse pas

## Fonctionnement
- Une grosse explosion part autour de vous. Chaque ennemi à moins de 160 px subit 14 fois vos Dégâts (au moins 28), boss compris.
- Elle peut être un [coup critique](../mechanics/criticos.html) et déclenche les effets au toucher de vos objets.
- Elle ne vous blesse jamais. Elle casse tous les rochers, caisses et tonneaux à moins de 160 px et ouvre les portes de salle secrète cachées près de vous.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux explosions partent.
