---
title: Light Stone
id: m_orbe_claro
kind: passive
category: shot
family: module
tier: 3
pools:
- angel
- treasure
pool_weight: 2
details:
- label: Light beam
  value: 10 % per hit (+1 % per Luck), ×3
- label: Area
  value: Radius 30 px, after 0.1 s
icon: items-ps/key-item/light-stone.png
sprite: true
names:
  es:
    name: Orbe Claro
    desc: A veces, al golpear, cae un rayo de luz sobre el enemigo que hace ×3 de daño
  fr:
    name: Galet Blanc
    desc: Parfois, en touchant, un rayon de lumière frappe l'ennemi et inflige ×3 dégâts
  de:
    name: Lichtstein
    desc: Manchmal schlägt beim Treffen ein Lichtstrahl in den Gegner ein und richtet ×3 Schaden an
  it:
    name: Chiarolite
    desc: A volte, colpendo, cade un raggio di luce sul nemico che infligge ×3 di danni
  pt:
    name: Orbe Claro
    desc: Às vezes, ao acertar, cai um raio de luz sobre o inimigo causando ×3 de dano
  ru:
    name: Светлая сфера
    desc: Иногда при ударе на врага падает луч света с уроном ×3
  ja:
    name: ライトストーン
    desc: ときどき、命中すると敵に光の柱が落ち、×3のダメージを与える
  ko:
    name: 라이트스톤
    desc: 가끔 맞히면 적에게 빛줄기가 떨어져 ×3 대미지를 준다
  zh:
    name: 光明石
    desc: 有时命中时会有一道光柱落在敌人身上，造成×3伤害
  zt:
    name: 光明石
    desc: 有時命中時會有一道光柱落在敵人身上，造成×3傷害
---
Sometimes, on hit, a beam of light strikes the enemy for ×3 damage

{{< clip >}}

## How it works
- Each hit has a 10 % chance (+1 % per Luck) to call down a beam of light on the enemy hit. After 0.1 s it deals ×3 the damage of that hit to every enemy within 30 px of the spot.
- The beam works on bosses. Its damage does not trigger item effects.

## Stacking
- It does not stack: a second copy does not raise the chance.
