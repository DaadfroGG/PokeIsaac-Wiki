---
title: Root Fossil
id: d_fosil_raiz
kind: passive
category: defense
family: defense
tier: 1
pools:
- treasure
- secret
pool_weight: 2
details:
- label: Still
  value: 1 s (not moving or shooting) to turn to stone
- label: Holds
  value: One hit
- label: Rebuild
  value: 6 s after it breaks
- label: After the block
  value: 0.7 s of invulnerability
icon: items-ps/fossil/root.png
sprite: true
names:
  es:
    name: Fósil Raíz
    desc: Si te quedas quieto sin disparar un segundo, te cubres de piedra y bloqueas un golpe; tarda 6 segundos en volver a formarse
  fr:
    name: Fossile Racine
    desc: Si vous restez immobile sans tirer pendant une seconde, vous vous couvrez de pierre et bloquez un coup ; elle met 6 secondes à se reformer
  de:
    name: Wurzelfossil
    desc: Bleibst du eine Sekunde still stehen, ohne zu schießen, bedeckst du dich mit Stein und blockst einen Treffer; er braucht 6 Sekunden, um sich neu zu bilden
  it:
    name: Radifossile
    desc: Se resti fermo senza sparare per un secondo, ti copri di pietra e blocchi un colpo; impiega 6 secondi a riformarsi
  pt:
    name: Fóssil Raiz
    desc: Se você ficar parado sem atirar por um segundo, se cobre de pedra e bloqueia um golpe; leva 6 segundos para se formar de novo
  ru:
    name: Окаменелость-корень
    desc: Если секунду стоишь на месте и не стреляешь, покрываешься камнем и блокируешь один удар; камень восстанавливается 6 секунд
  ja:
    name: ねっこのカセキ
    desc: 1秒間じっとして撃たずにいると、石に覆われて1回の攻撃を防ぐ。再び形成されるまで6秒かかる
  ko:
    name: 뿌리화석
    desc: 1초 동안 쏘지 않고 가만히 있으면 돌로 덮여 공격을 1번 막는다. 다시 생기기까지 6초 걸린다
  zh:
    name: 根状化石
    desc: 若你静止不动且一秒不射击，就会被石头包裹并挡下一次攻击；需要6秒才会重新形成
  zt:
    name: 根狀化石
    desc: 站著不動且一秒不射擊，就會被石頭包覆並擋下一次攻擊；需要6秒才會重新形成
---
If you stand still without shooting for a second, you cover yourself in stone and block one hit; it takes 6 seconds to form again

## How it works
- If you stay still and don't shoot for 1 second, you cover yourself in stone.
- The stone blocks the next hit completely (no damage), then breaks and gives 0.7 seconds of invulnerability.
- The stone can't form again for 6 seconds after it breaks. After that, you must again stand still for 1 second without shooting.
- Moving or shooting makes the stone crumble away before it takes a hit.

## Stacking
- It does not stack: a second copy adds nothing.
