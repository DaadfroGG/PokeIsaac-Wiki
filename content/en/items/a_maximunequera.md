---
title: Dynamax Band
id: a_maximunequera
kind: active
family: ability
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 2
details:
- label: Duration
  value: 0.7 s
- label: Damage
  value: Your Damage ×1.2 every 0.05 s (up to ×16.8 per enemy)
- label: Width
  value: 34 px (+6 per Size bonus)
- label: Reach
  value: To the wall, through everything
icon: items-ps/key-item/dynamax-band.png
sprite: true
names:
  es:
    name: Maximuñequera
    desc: Lanzas un rayo enorme hacia donde miras que lo atraviesa todo
  fr:
    name: Poignet Dynamax
    desc: Vous lancez devant vous un énorme rayon qui transperce tout
  de:
    name: Dynamax-Band
    desc: Du feuerst einen riesigen Strahl in Blickrichtung ab, der alles durchdringt
  it:
    name: Polsino Dynamax
    desc: Lanci un enorme raggio nella direzione in cui guardi che trapassa tutto
  pt:
    name: Banda Dynamax
    desc: Você dispara um raio enorme para onde está olhando, que atravessa tudo
  ru:
    name: Динамакс-браслет
    desc: Выпускаешь огромный луч туда, куда смотришь, пробивающий все
  ja:
    name: ダイマックスＢ
    desc: 向いている方向に巨大なビームを撃ち、すべてを貫通する
  ko:
    name: 다이맥스 밴드
    desc: 바라보는 방향으로 모든 것을 관통하는 거대한 빔을 쏜다
  zh:
    name: 极巨腕带
    desc: 朝面向的方向发射一道贯穿一切的巨大光束
  zt:
    name: 極巨腕帶
    desc: 朝面向的方向發射一道貫穿一切的巨大光束
---
You fire a huge beam where you're facing that pierces everything

## How it works
- You fire one huge beam where you are facing for 0.7 seconds. It reaches the wall and goes through rocks and every enemy. If you have homing, it aims a little toward the nearest enemy.
- Every 0.05 seconds, each enemy in the beam takes 1.2 times your Damage: up to 14 hits, about 16.8 times your Damage, for an enemy that stays in it the whole time. Bosses take it too.
- Each tick uses your type and can be a [critical hit](../mechanics/criticos.html). Your items' shot effects also apply.
- With bounce bonuses, the beam bounces off the walls (up to 4 times). It breaks crates and barrels on its path. It stays a single beam: extra shots don't add more.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: the second beam replaces the first.
