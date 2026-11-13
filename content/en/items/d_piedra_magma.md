---
title: Magma Stone
id: d_piedra_magma
kind: passive
category: voltorb
family: defense
tier: 2
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: +5 Voltorb
  good: true
details:
- label: Voltorbs
  value: '+5'
- label: Explosions
  value: Never hurt you
- label: Heal
  value: ½ heart per explosion that would hit you
- label: Limit
  value: Once every 0.33 s
icon: items-ps/key-item/magma-stone.png
sprite: true
names:
  es:
    name: Piedra Magma
    desc: '+5 Voltorbs; las explosiones no te hieren: te curan medio corazón'
  fr:
    name: Pierre Magma
    desc: '+5 Voltorbes ; les explosions ne vous blessent pas : elles vous soignent d''un demi-cœur'
  de:
    name: Magmastein
    desc: '+5 Voltobals; Explosionen verletzen dich nicht: Sie heilen dich um ein halbes Herz'
  it:
    name: Magmapietra
    desc: '+5 Voltorb; le esplosioni non ti feriscono: ti curano di mezzo cuore'
  pt:
    name: Pedra de Magma
    desc: '+5 Voltorbs; as explosões não ferem você: curam meio coração'
  ru:
    name: Магмовый камень
    desc: +5 Вольторбов; взрывы не ранят тебя, а лечат на полсердца
  ja:
    name: かざんのおきいし
    desc: ビリリダマ+5個。爆発でダメージを受けず、半分のハートを回復する
  ko:
    name: 화산의돌
    desc: 찌리리공 +5. 폭발에 다치지 않고 오히려 하트 반 칸을 회복한다
  zh:
    name: 火山镇石
    desc: +5霹雳电球；爆炸不会伤到你，反而回复半颗心
  zt:
    name: 火山鎮石
    desc: +5顆霹靂電球；爆炸不會傷到你，反而治療半顆愛心
---
+5 Voltorbs; explosions don't hurt you: they heal you half a heart

## How it works
- Every explosion that would hit you (your own Voltorbs, small Voltorbs, enemy explosions) deals no damage. Instead it heals you ½ heart, at most once every 0.33 s.
- It works even while you are standing in the blast, and the heal is wasted if your hearts are already full.
- This does not change the damage your Voltorbs deal to enemies. A normal Voltorb explodes after 1.5 s in a 95 px radius for max(25, 7 × your Damage).
- It does not protect against anything that is not an explosion.

## Stacking
- The effect is only switched on: a second copy does nothing more. Each copy still gives +5 Voltorbs.
