---
title: Swift Feather
id: m_pluma_impetu
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Fire rate
  value: Up to ×2 after 4 s firing the same way
- label: Reset
  value: Changing direction, or 0.5 s without firing
icon: items-ps/medicine/swift-wing.png
sprite: true
names:
  es:
    name: Pluma Ímpetu
    desc: Si disparas sin parar hacia el mismo lado, cada vez disparas más rápido (hasta el doble)
  fr:
    name: Plume Sprint
    desc: Si vous tirez sans arrêt dans la même direction, vous tirez de plus en plus vite (jusqu'au double)
  de:
    name: Flinkfeder
    desc: Wenn du ununterbrochen in dieselbe Richtung schießt, schießt du immer schneller (bis zum Doppelten)
  it:
    name: Piumreazione
    desc: Se spari di continuo nella stessa direzione, spari sempre più veloce (fino al doppio)
  pt:
    name: Pluma do Ímpeto
    desc: Se você atirar sem parar para o mesmo lado, atira cada vez mais rápido (até o dobro)
  ru:
    name: Перо скорости
    desc: Если стреляешь без остановки в одну сторону, темп стрельбы растет (до двух раз)
  ja:
    name: しゅんぱつのハネ
    desc: 同じ方向に撃ち続けると、だんだん連射が速くなる（最大2倍）
  ko:
    name: 순발력깃털
    desc: 같은 방향으로 계속 쏘면 점점 빨리 쏜다(최대 2배)
  zh:
    name: 瞬发之羽
    desc: 朝同一方向持续射击，射速会越来越快（最高翻倍）
  zt:
    name: 瞬發之羽
    desc: 持續朝同一方向射擊，射速會越來越快（最高兩倍）
---
If you keep firing in the same direction, you fire faster and faster (up to double)

## How it works
- As long as you keep firing in the same direction, the bonus rises. After 4 s it reaches its maximum: the time between shots is halved (twice the fire rate).
- Changing the direction you fire in, or stopping for more than 0.5 s, resets it to zero.
- It is a multiplier on the delay, so the 12 shots per second limit still applies.

## Stacking
- It does not stack: a second copy changes nothing.
