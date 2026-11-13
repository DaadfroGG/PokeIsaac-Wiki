---
title: Colress Machine
id: w_acromaquina
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Use
  value: Weapon key (Shift/F, right click, LB)
- label: Voltorbs
  value: A normal volley (up to 9 with multishot), speed ×0.6, fuse 1.3 s (1.75 s with the Fishing Rod)
- label: Graze
  value: ×0.45 of the shot's damage every 0.2 s per enemy
- label: Bounce
  value: +20 % damage, +12 % speed; explodes on the 3rd wall hit
- label: Blast
  value: ×0.6 of the shot's damage (+25 % per bounce), 60 px (+8 per Size)
- label: Cooldown
  value: 1.5 × 1.6 × your delay (at least 0.6 s)
- label: Balance
  value: ×0.8
- label: With Voltorb items
  value: Fire, puddles, cross, small blasts, beams, pickups, bigger, homing
- label: If not in charge
  value: '15 % (+1 % per Luck) per hit, once per 0.2 s: blast ×0.6, 45 px'
icon: items-ps/key-item/colress-machine.png
sprite: true
names:
  es:
    name: Acromáquina
    desc: Disparas Voltorbs que ruedan, rozan a los enemigos y ganan fuerza al rebotar; al tercer choque contra una pared o al poco, estallan (no te hieren)
  fr:
    name: Nikodule
    desc: Vous tirez des Voltorbes qui roulent, frôlent les ennemis et gagnent en puissance à chaque rebond ; au troisième choc contre un mur, ou peu après, ils explosent (sans vous blesser)
  de:
    name: Achromat
    desc: Du schießt Voltobals, die rollen, Gegner streifen und beim Abprallen stärker werden; beim dritten Aufprall an einer Wand oder kurz danach explodieren sie (sie verletzen dich nicht)
  it:
    name: Acrocongegno
    desc: Spari Voltorb che rotolano, sfiorano i nemici e acquistano forza a ogni rimbalzo; al terzo urto contro una parete, o poco dopo, esplodono (non ti feriscono)
  pt:
    name: Máquina Colress
    desc: Você atira Voltorbs que rolam, raspam nos inimigos e ganham força a cada quique; na terceira batida numa parede, ou logo depois, explodem (eles não te ferem)
  ru:
    name: Машина Колресса
    desc: 'Ты стреляешь катящимися Вольторбами: они задевают врагов и набирают силу при отскоках; при третьем ударе о стену или вскоре после вылета взрываются (тебя не ранят)'
  ja:
    name: アクロママシーン
    desc: 転がって敵をかすめ、バウンドするたびに強くなるビリリダマを撃つ。壁に3回当たるか、しばらくすると爆発する（自分は傷つかない）
  ko:
    name: 아크로마머신
    desc: '구르는 찌리리공을 쏜다: 적을 스치고 튕길 때마다 강해지며, 벽에 세 번째로 부딪히거나 잠시 뒤 터진다 (나는 다치지 않는다)'
  zh:
    name: 阿克罗玛机器
    desc: 你射出会滚动的霹雳电球，擦过敌人，每次反弹都会变强；撞墙第三次或不久后便会爆炸（不会伤到你）
  zt:
    name: 阿克羅瑪機器
    desc: 你射出會滾動的霹靂電球，擦過敵人，每次反彈都會變強；第三次撞牆或不久後就會爆炸（不會傷到你）
---
You fire Voltorbs that roll, graze enemies and gain strength with every bounce; on the third wall hit, or soon after, they explode (they do not hurt you)

## How it works
- It is a **weapon**: it only works as your equipped weapon ([Equipped weapon](../mechanics/arma_principal.html)); with another main weapon it only adds the small effect listed under "If not in charge". Your normal shots are not replaced.
- Balance: while this is your equipped weapon, the damage it deals is further multiplied by ×0.8. The multipliers below are applied before it.
- After each attack the weapon is ready again after 1.6 times your normal delay between shots times 1.5, and never less than 0.6 s.
- Crits, burn, poison, slow and the other effects of your items apply to its hits, and its hits carry your Pokémon's type. See [Weapons and shot effects](../mechanics/armas.html).
- Each attack fires a normal volley (multishot applies, up to 9) of rolling Voltorbs at 0.6 times shot speed, pierce everything and bounce off walls. They explode when the fuse ends (1.3 s, or 1.75 s with the [Fishing Rod](d_cana.html)) or on the 3rd wall hit.
- While rolling they graze every enemy they touch for ×0.45 of the shot's damage, every 0.2 s per enemy.
- Each wall bounce makes the Voltorb 20 % stronger and 12 % faster (and +25 % to the final blast).
- The blast has a 60 px radius (+8 per Size) and deals ×0.6 of the shot's damage (+25 % per bounce). It never hurts you and breaks nearby rocks. With the Ipecac-style poison or fire effects of your items, they apply to it too.
- **Voltorb items** work on these Voltorbs: [Poké Toy](b_pokesenuelo.html) makes them home in, the [Fishing Rod](d_cana.html) slows them but lengthens the fuse, [Dynite Ore](b_maxinium.html) makes them bigger (×1.5 size, ×1.4 radius, ×1.35 damage), and each explosion also counts for the [Burn Drive](b_pirorom.html) and [Douse Drive](b_hidrorom.html) (every 3rd), [Terrain Extender](b_cubresuelos.html), [Candy Jar](b_tarro.html), [Adrenaline Orb](b_nerviosfera.html) (every 6th) and [Pearl String](b_sarta.html).
- **If not in charge:** when one of your hits lands, there is a 15 % chance (+1 % per Luck) of a small blast on the enemy hit (45 px radius, ×0.6 of your Damage), at most once every 0.2 s.

## Stacking
- A second copy does nothing more.

{{< clip >}}
