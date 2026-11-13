---
title: Pearl String
id: b_sarta
kind: passive
category: voltorb
family: core
tier: 1
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
- label: Pickup
  value: 35 % per explosion, if an enemy is within 110 px
- label: Pool
  value: Pokédollar 10 %, key 5 %, Voltorb 5 %, ½ heart 5 %, heart 5 %, Nugget 5 %
- label: Luck
  value: No effect
icon: items-ps/valuable-item/pearl-string.png
sprite: true
names:
  es:
    name: Sarta Perlas
    desc: +5 Voltorbs; al estallar cerca de un enemigo, a veces dejan un recogible
  fr:
    name: Perle Triple
    desc: +5 Voltorbes ; en explosant près d'un ennemi, ils laissent parfois un objet à ramasser
  de:
    name: Triperle
    desc: +5 Voltobals; explodieren sie nahe einem Gegner, hinterlassen sie manchmal ein Sammelobjekt
  it:
    name: Trittiperla
    desc: +5 Voltorb; esplodendo vicino a un nemico, a volte lasciano qualcosa da raccogliere
  pt:
    name: Colar de Pérolas
    desc: +5 Voltorbs; ao explodir perto de um inimigo, às vezes deixam um item coletável
  ru:
    name: Нить жемчуга
    desc: +5 Вольторбов; взрываясь рядом с врагом, иногда оставляют добычу
  ja:
    name: おだんごしんじゅ
    desc: ビリリダマ+5個。敵の近くで爆発すると、拾えるものを落とすことがある
  ko:
    name: 경단진주
    desc: 찌리리공 +5. 적 근처에서 터지면 가끔 드롭 아이템을 남긴다
  zh:
    name: 丸子珍珠
    desc: +5霹雳电球；在敌人附近爆炸时，有时会留下拾取物
  zt:
    name: 丸子珍珠
    desc: +5顆霹靂電球；在敵人附近爆炸時，有時會留下掉落物
---
+5 Voltorbs; when they explode near an enemy, they sometimes leave a pickup

## How it works
- A normal Voltorb (placed with the bomb key) explodes after 1.5 s in a 95 px radius for max(25, 7 × your Damage), and it also hurts you (1 heart) if you stand inside.
- With this item, each Voltorb explosion has a 35 % chance to drop a pickup, but only if an enemy is within 110 px of the blast.
- The drop is one of 7 equal entries, two of which are a Pokédollar: Pokédollar (10 % per explosion), key, Voltorb, half heart, heart or Nugget (5 % each).
- Small Voltorbs from the [Candy Jar](b_tarro.html) do not drop anything. Luck changes nothing.
- With the [Colress Machine](w_acromaquina.html), each explosion of its Voltorbs has a 3 % chance (enemy within 100 px) to drop a Pokédollar (40 %), key, Voltorb or half heart (20 % each).

## Stacking
- The effect is only switched on: a second copy does nothing more. Each copy still gives +5 Voltorbs.
