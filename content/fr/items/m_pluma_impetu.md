---
title: Plume Sprint
id: m_pluma_impetu
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Cadence
  value: Jusqu'à ×2 après 4 s de tir dans la même direction
- label: Remise à zéro
  value: Changer de direction, ou 0,5 s sans tirer
icon: items-ps/medicine/swift-wing.png
sprite: true
names:
  en:
    name: Swift Feather
    desc: If you keep firing in the same direction, you fire faster and faster (up to double)
  es:
    name: Pluma Ímpetu
    desc: Si disparas sin parar hacia el mismo lado, cada vez disparas más rápido (hasta el doble)
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
Si vous tirez sans arrêt dans la même direction, vous tirez de plus en plus vite (jusqu'au double)

## Fonctionnement
- Tant que vous tirez dans la même direction, le bonus augmente. Après 4 s, il atteint son maximum : le temps entre deux tirs est divisé par deux (cadence doublée).
- Changer de direction de tir, ou vous arrêter plus de 0,5 s, le remet à zéro.
- C'est un multiplicateur sur le délai : la limite de 12 tirs par seconde s'applique toujours.

## Cumul
- Il ne se cumule pas : un second exemplaire ne change rien.
