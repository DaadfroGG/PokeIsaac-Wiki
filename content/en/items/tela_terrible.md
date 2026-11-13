---
title: Reaper Cloth
id: tela_terrible
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Chance
  value: 25 % per enemy defeated
- label: Blast
  value: 1.5 × your Damage (at least 2), 80 px around
- label: Luck
  value: No effect
icon: items-ps/evo-item/reaper-cloth.png
sprite: true
names:
  es:
    name: Tela Terrible
    desc: A veces, el enemigo que derrotas estalla y hiere a los de alrededor
  fr:
    name: Tissu Fauche
    desc: Parfois, l'ennemi vaincu explose et blesse ceux qui l'entourent
  de:
    name: Düsterumhang
    desc: Manchmal explodieren besiegte Gegner und verletzen die in der Umgebung
  it:
    name: Terrorpanno
    desc: A volte il nemico che sconfiggi esplode e ferisce quelli intorno
  pt:
    name: Tecido Sinistro
    desc: Às vezes, o inimigo que você derrota explode e fere os que estão ao redor
  ru:
    name: Ткань жнеца
    desc: Иногда побежденный враг взрывается и ранит тех, кто рядом
  ja:
    name: れいかいのぬの
    desc: ときどき、倒した敵が爆発し、周囲の敵にダメージを与える
  ko:
    name: 영계의천
    desc: 가끔 쓰러뜨린 적이 폭발해 주위 적에게 대미지를 준다
  zh:
    name: 灵界之布
    desc: 有时被你击败的敌人会爆炸，伤害周围的敌人
  zt:
    name: 靈界之布
    desc: 有時被你打倒的敵人會爆炸，傷及周圍的敵人
---
Sometimes, enemies you defeat explode and hurt those around them

## How it works
- Each enemy you defeat has a 25 % chance to burst. Luck does not change it.
- The burst hits every other enemy within 80 px of it (measured to their edge) for 1.5 times your Damage, at least 2. It hurts bosses too.
- It never hurts you and does not break rocks.
- The burst is plain damage: no type, no critical hit, no item effects.

## Stacking
- A second copy does nothing more: still 25 %.
