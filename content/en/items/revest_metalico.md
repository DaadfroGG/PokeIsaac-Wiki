---
title: Metal Coat
id: revest_metalico
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Price
  value: 3 PokéDollars per half heart
- label: Condition
  value: No soul hearts
- label: Not enough money
  value: The hit hurts you as usual
- label: After
  value: 1.2 s of invulnerability
icon: items-ps/hold-item/metal-coat.png
sprite: true
names:
  es:
    name: Revestimiento Metálico
    desc: Si llevas Pokédólares (y no te quedan corazones de alma), los golpes te quitan 3 P$ por medio corazón en vez de vida
  fr:
    name: Peau Métal
    desc: Si vous avez des Pokédollars (et plus de cœurs d'âme), les coups vous coûtent 3 P$ par demi-cœur au lieu de la vie
  de:
    name: Metallmantel
    desc: Wenn du Pokédollar bei dir hast (und keine Seelenherzen mehr), kosten Treffer 3 P$ pro halbes Herz statt Leben
  it:
    name: Metalcoperta
    desc: Se hai Pokédollari (e non ti restano cuori d'anima), i colpi ti tolgono 3 P$ per mezzo cuore invece della vita
  pt:
    name: Revestimento Metálico
    desc: Se você tiver Pokédólares (e nenhum coração de alma sobrando), os golpes tiram 3 P$ por meio coração em vez de vida
  ru:
    name: Металлическое покрытие
    desc: Если у тебя есть покедоллары (и нет сердец души), удары отнимают 3 P$ за полсердца вместо здоровья
  ja:
    name: メタルコート
    desc: ポケドルを持っていて（ソウルハートがない）ときは、攻撃を受けるとHPの代わりに半分のハートにつき3$を失う
  ko:
    name: 금속코트
    desc: 포켓달러를 갖고 있으면(영혼 하트가 없을 때) 공격을 받을 때 체력 대신 하트 반 칸당 3 P$를 잃는다
  zh:
    name: 金属膜
    desc: 如果你带着宝可币（且没有灵魂之心），受击时每半颗心扣除3宝可币，而不是扣生命
  zt:
    name: 金屬膜
    desc: 如果你身上有寶可幣（且沒有靈魂之心），受到攻擊時每半顆愛心會改扣3 P$，而不是扣生命
---
If you carry PokéDollars (and have no soul hearts left), hits take 3 $ per half heart instead of health

## How it works
- If you have no soul hearts and enough PokéDollars, a hit costs you 3 PokéDollars per half heart of damage instead of health (a 1-heart hit costs 6, always rounded up).
- The hit is then treated as if it never landed: no damage, you get the usual 1.2 seconds of invulnerability, and your on-hit items don't trigger.
- If you can't afford the whole price, or you have a soul heart, the hit hurts you as usual.

## Stacking
- It does not stack: a second copy adds nothing.
