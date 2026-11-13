---
title: Relic Silver
id: d_real_plata
kind: passive
category: shot
family: defense
tier: 2
pools:
- treasure
- secret
pool_weight: 2
details:
- label: Gold
  value: 3 s
- label: Coins
  value: 2 per golden enemy
- label: Trigger
  value: Touching a non-boss enemy
icon: items-ps/valuable-item/relic-silver.png
sprite: true
names:
  es:
    name: Real Plata
    desc: Los enemigos que tocas se vuelven de oro unos segundos (ni se mueven ni hieren); si caen así, sueltan monedas
  fr:
    name: Vieil Écu
    desc: Les ennemis que vous touchez se changent en or quelques secondes (ils ne bougent ni ne blessent) ; s'ils tombent ainsi, ils lâchent des pièces
  de:
    name: Alter Taler
    desc: Gegner, die du berührst, werden für einige Sekunden golden (sie bewegen sich nicht und verletzen nicht); sterben sie so, lassen sie Münzen fallen
  it:
    name: Ducatantico
    desc: I nemici che tocchi diventano d'oro per qualche secondo (non si muovono né feriscono); se cadono così, lasciano monete
  pt:
    name: Relíquia de Prata
    desc: Os inimigos que você toca viram ouro por alguns segundos (não se movem nem ferem); se caírem assim, soltam moedas
  ru:
    name: Серебряная реликвия
    desc: Враги, которых ты касаешься, на несколько секунд становятся золотыми (не двигаются и не ранят); если погибнут так, роняют монеты
  ja:
    name: こだいのぎんか
    desc: 触れた敵が数秒間金になる（動けず、ダメージも与えない）。この状態で倒すとコインを落とす
  ko:
    name: 고대의은화
    desc: 닿은 적이 몇 초 동안 금으로 변한다(움직이지도 공격하지도 못한다). 그 상태로 쓰러지면 동전을 떨어뜨린다
  zh:
    name: 古代银币
    desc: 你碰到的敌人会变成黄金数秒（无法移动也无法伤人）；若在此状态下倒下，会掉落硬币
  zt:
    name: 古代銀幣
    desc: 你碰到的敵人會變成黃金數秒（無法移動也無法傷人）；若在此狀態下倒下，會掉落金幣
---
Enemies you touch turn to gold for a few seconds (they can't move or hurt you); if they die like that, they drop coins

## How it works

- Walking into a non-boss enemy turns it to gold for 3 seconds: it cannot move, cannot hurt you and is stunned.
- If it dies while golden, it drops 2 coins.
- When the 3 seconds end it returns to normal and can be turned to gold again by touching it.
- [Bosses](../mechanics/jefes_adaptativos.html) are not affected.

## Stacking

- A second copy changes nothing.
