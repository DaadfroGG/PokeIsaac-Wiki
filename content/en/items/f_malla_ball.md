---
title: Net Ball
id: f_malla_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Companion
  value: Combee (Bug)
- label: Bees
  value: One every 4 s, up to 3
- label: Bee damage
  value: 2 × your Damage (at least 2), per hit
- label: Bee life
  value: 10 s, or 2 hits
icon: items-ps/ball/net.png
sprite: true
names:
  es:
    name: Malla Ball
    desc: Un Combee te acompaña y, en combate, saca abejitas que atacan a los enemigos
  fr:
    name: Filet Ball
    desc: Un Apitrini vous accompagne et, en combat, libère des petites abeilles qui attaquent les ennemis
  de:
    name: Netzball
    desc: Ein Wadribie begleitet dich und lässt im Kampf kleine Bienen los, die Gegner angreifen
  it:
    name: Rete Ball
    desc: Un Combee ti accompagna e, in combattimento, libera piccole api che attaccano i nemici
  pt:
    name: Net Ball
    desc: Um Combee te acompanha e, em combate, solta abelhinhas que atacam os inimigos
  ru:
    name: Нетбол
    desc: Комби следует за тобой и в бою выпускает пчелок, атакующих врагов
  ja:
    name: ネットボール
    desc: ミツハニーがついてきて、戦闘中は小さなハチを出して敵を攻撃する
  ko:
    name: 네트볼
    desc: 세꿀버리가 함께 다니며, 전투 중에 적을 공격하는 꼬마 벌을 내보낸다
  zh:
    name: 捕网球
    desc: 一只三蜜蜂跟随你，战斗中会放出小蜜蜂攻击敌人
  zt:
    name: 捕網球
    desc: 三蜜蜂會跟著你，在戰鬥中放出小蜜蜂攻擊敵人
---
A Combee follows you and, in combat, releases little bees that attack enemies

{{< clip >}}

## How it works

- Combee follows you and does not shoot itself. While enemies are alive, it releases a little bee every 4 seconds, up to 3 at once.
- A bee flies at the nearest enemy (within 600 px) and hits it for 2 times your Damage (at least 2), as Bug-type damage. It backs off a little after its first hit and disappears after its second hit, or after 10 seconds.
- Bee damage scales with your Damage stat.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
