---
title: Pierre Magma
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
- text: +5 Voltorbe
  good: true
details:
- label: Voltorbes
  value: '+5'
- label: Explosions
  value: Ne vous blessent jamais
- label: Soin
  value: ½ cœur par explosion qui vous toucherait
- label: Limite
  value: Une fois toutes les 0,33 s
icon: items-ps/key-item/magma-stone.png
sprite: true
names:
  en:
    name: Magma Stone
    desc: '+5 Voltorbs; explosions don''t hurt you: they heal you half a heart'
  es:
    name: Piedra Magma
    desc: '+5 Voltorbs; las explosiones no te hieren: te curan medio corazón'
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
+5 Voltorbes ; les explosions ne vous blessent pas : elles vous soignent d'un demi-cœur

## Fonctionnement
- Toute explosion qui vous toucherait (vos Voltorbes, les petits Voltorbes, les explosions ennemies) n'inflige aucun dégât. À la place, elle vous soigne d'un ½ cœur, au plus une fois toutes les 0,33 s.
- Cela marche même si vous restez dans l'explosion, et le soin est perdu si vos cœurs sont déjà pleins.
- Cela ne change pas les dégâts de vos Voltorbes sur les ennemis. Un Voltorbe normal explose après 1,5 s dans un rayon de 95 px pour max(25, 7 × vos Dégâts).
- Cela ne protège de rien qui ne soit pas une explosion.

## Cumul
- L'effet est simplement activé : un second exemplaire n'ajoute rien. Chaque exemplaire donne quand même +5 Voltorbes.
