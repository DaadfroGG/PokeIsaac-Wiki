---
title: Nomel Berry
id: a_baya_monli
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Puddle
  value: 70 px radius, 4 s
- label: Damage
  value: Your Damage ×0.5 (min. 1.5) every 0.25 s
- label: Burn
  value: 1 s (2 s with Heat Rock)
- label: Flying enemies
  value: Not affected
icon: items-ps/berry/nomel.png
sprite: true
names:
  es:
    name: Baya Monli
    desc: Dejas un gran charco ácido que quema a los enemigos que lo pisan
  fr:
    name: Baie Tronci
    desc: Vous laissez une grande flaque d'acide qui brûle les ennemis qui marchent dessus
  de:
    name: Tronzibeere
    desc: Du hinterlässt eine große Säurepfütze, die Gegner verbrennt, die hineintreten
  it:
    name: Baccalemon
    desc: Lasci una grande pozza acida che brucia i nemici che ci passano sopra
  pt:
    name: Baga Nomel
    desc: Você deixa uma grande poça de ácido que queima os inimigos que pisam nela
  ru:
    name: Ягода Номел
    desc: Ты оставляешь большую кислотную лужу, которая жжет наступивших в нее врагов
  ja:
    name: ノメルのみ
    desc: 敵が踏むと焼ける大きな酸の水たまりを残す
  ko:
    name: 노멜열매
    desc: 밟은 적을 태우는 커다란 산성 웅덩이를 남긴다
  zh:
    name: 檬柠果
    desc: 你留下一大片酸液坑，会灼烧踩上去的敌人
  zt:
    name: 檬檸果
    desc: 你會留下一大灘酸液，灼燒踩到的敵人
---
You leave a big acid puddle that burns enemies that step in it

## How it works
- A puddle of acid with a 70 px radius appears at your feet and stays there for 4 seconds.
- Every 0.25 seconds, each enemy standing in it takes half your Damage (at least 1.5), as Fire damage, and is burned for 1 second ([Heat Rock](roca_calor.html): 2 seconds). An enemy that stays in it the whole time takes 16 ticks, about 8 times your Damage.
- Flying enemies float over it and are not affected. Bosses that walk are.
- These ticks don't trigger your items. The puddle doesn't hurt you.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): two puddles appear in the same spot, so enemies inside take double damage.
