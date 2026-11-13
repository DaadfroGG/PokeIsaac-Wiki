---
title: Boiled Egg
id: a_huevo_duro
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 1
details:
- label: Throw
  value: Lobbed, up to 320 px (your Range if lower)
- label: Burst
  value: 55 px (+6 per Size bonus)
- label: Damage
  value: Your Damage ×3.2 (min. 8)
- label: Poison
  value: 2.5 s, only if you are Poison type
icon: items-ps/curry-ingredient/boiled-egg.png
sprite: true
names:
  es:
    name: Huevo Duro
    desc: Lanzas un huevo podrido que estalla con veneno al caer (no te hiere)
  fr:
    name: Œuf Dur
    desc: Vous lancez un œuf pourri qui explose en poison à l'impact (sans vous blesser)
  de:
    name: Gekochtes Ei
    desc: Du wirfst ein faules Ei, das beim Aufprall mit Gift platzt (verletzt dich nicht)
  it:
    name: Uovo sodo
    desc: Lanci un uovo marcio che esplode di veleno quando cade (non ti ferisce)
  pt:
    name: Ovo Cozido
    desc: Você lança um ovo podre que explode em veneno ao cair (não fere você)
  ru:
    name: Вареное яйцо
    desc: Бросаешь тухлое яйцо, которое лопается ядом при падении (тебя не ранит)
  ja:
    name: ゆでタマゴ
    desc: 腐った卵を投げる。落ちると毒をまき散らして破裂する（自分は傷つかない）
  ko:
    name: 삶은알
    desc: 떨어지면 독을 뿜으며 터지는 썩은 알을 던진다 (나는 다치지 않는다)
  zh:
    name: 水煮蛋
    desc: 扔出一颗臭蛋，落地时爆出毒雾（不会伤到你）
  zt:
    name: 水煮蛋
    desc: 扔出一顆臭蛋，落地時爆出毒霧（不會傷到你）
---
You throw a rotten egg that bursts with poison on landing (doesn't hurt you)

## How it works
- You lob an egg the way you are facing. It flies over rocks and bursts when it lands, at the end of its flight (320 px, or your Range if it is shorter), or as soon as it touches an enemy.
- The burst hits every enemy within 55 px (+6 px per Size bonus) for about 3.2 times your Damage (at least 8). Bosses take it too.
- It only poisons (2.5 seconds) if your Pokémon is Poison type.
- It doesn't hurt you. The burst breaks rocks and crates and can open hidden secret-room doors.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): you throw two eggs.
