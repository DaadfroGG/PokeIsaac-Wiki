---
title: Shock Drive
id: w_fulgorom
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
- label: Bolt
  value: ×0.7 Damage to the first target; reach 0.95 × Range (180-560 px)
- label: Jumps
  value: 3 (+ pierce and chain, max 7), within 150 px (+12 per Size), each ×0.85
- label: Bolts
  value: Up to 5 with multishot, 12.6° apart
- label: Paralysis
  value: 'Electric-type only: 28 % (+1 % per Luck) per target, 0.5 s; bosses slowed 0.8 s'
- label: Cooldown
  value: 1.5 × your delay between shots
- label: Balance
  value: ×1 (no extra scaling)
- label: If not in charge
  value: 'Every 3rd attack: bolt ×0.35 to the nearest enemy within 220 px, 1 jump'
icon: items-ps/hold-item/shock-drive.png
sprite: true
names:
  es:
    name: FulgoROM
    desc: Tus disparos son rayos que saltan de un enemigo a otro (hasta 4 saltos, cada uno más flojo); si eres de tipo Eléctrico, además paralizan
  fr:
    name: Module Choc
    desc: Vos tirs sont des éclairs qui sautent d'un ennemi à l'autre (jusqu'à 4 sauts, chacun plus faible) ; si vous êtes de type Électrik, ils paralysent aussi
  de:
    name: Blitzmodul
    desc: Deine Schüsse sind Strahlen, die von Gegner zu Gegner springen (bis zu 4 Sprünge, jeder schwächer); bist du vom Typ Elektro, lähmen sie zusätzlich
  it:
    name: Voltmodulo
    desc: I tuoi tiri sono raggi che saltano da un nemico all'altro (fino a 4 salti, ognuno più debole); se sei di tipo Elettro, paralizzano anche
  pt:
    name: Shock Drive
    desc: Seus tiros são raios que saltam de inimigo em inimigo (até 4 saltos, cada um mais fraco); se você for do tipo Elétrico, também paralisam
  ru:
    name: Шок-картридж
    desc: Твои выстрелы - лучи, прыгающие от врага к врагу (до 4 прыжков, каждый слабее); если ты типа Электро, еще и парализуют
  ja:
    name: イナズマカセット
    desc: ショットが敵から敵へ飛び移る稲妻になる（最大4回、回ごとに弱まる）。でんきタイプなら、さらに麻痺させる
  ko:
    name: 번개카세트
    desc: 탄이 적에서 적으로 튀는 번개가 된다(최대 4번, 갈수록 약해짐). 전기 타입이면 마비도 건다
  zh:
    name: 闪电卡带
    desc: 你的弹是在敌人之间跳跃的闪电（最多4次跳跃，每次更弱）；若你是电属性，还会麻痹敌人
  zt:
    name: 閃電卡帶
    desc: 你的彈是會在敵人之間跳躍的電流（最多4次跳躍，每次減弱）；如果你是電屬性，還會使其麻痺
---
Your shots are bolts that jump from one enemy to another (up to 4 jumps, each weaker); if you are Electric-type, they also paralyze

## How it works
- It is a **weapon**: it only works as your equipped weapon ([Equipped weapon](../mechanics/arma_principal.html)); with another main weapon it only adds the small effect listed under "If not in charge". Your normal shots are not replaced.
- Balance: while this is your equipped weapon, the damage it deals is further multiplied by ×1. The multipliers below are applied before it.
- After each attack the weapon is ready again after 1.5 times your normal delay between shots.
- Crits, burn, poison, slow and the other effects of your items apply to its hits, and its hits carry your Pokémon's type. See [Weapons and shot effects](../mechanics/armas.html).
- Each attack fires a bolt in your aim direction. It picks the enemy closest to the aim line inside a narrow cone (about 17° each side, 52° with homing) up to 0.95 × your Range (between 180 and 560 px). With no target it flies straight and only damages crates on the way.
- The first target takes ×0.7 of your Damage. The bolt then jumps to the nearest enemy not yet hit within 150 px (+12 px per Size): 3 jumps by default, +1 per pierce and +1 per chain, up to 7. Each jump deals ×0.85 of the previous one (0.7, 0.6, 0.5, 0.43 of your Damage at the start).
- Multishot adds bolts (up to 5, 12.6° apart); extra-direction items add more. Each bolt rolls its own crit.
- Growth makes the first hit up to 60 % stronger the farther the target; the Split effect leaves a split shot at the last target.
- **Paralysis:** only if you are Electric-type: each target hit has a 28 % chance (+1 % per Luck) to be stunned for 0.5 s; bosses are only slowed for about 0.8 s.
- **If not in charge:** every 3rd attack, a short bolt hits the nearest enemy within 220 px for ×0.35 of your Damage and jumps once (×0.3).

## Stacking
- A second copy does nothing more.

{{< clip >}}
