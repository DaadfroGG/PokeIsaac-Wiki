---
title: Diminishing returns
id: rendimientos
color: '#9a9aae'
labels:
- text: MECHANIC
  color: '#9a9aae'
icon: icons/mechanics/rendimientos.png
details:
- label: Item damage
  value: The first +3 counts in full; from +3 to +8, half; from +8 to +40, a quarter; beyond +40, 5 %. Damage penalties always count in full
- label: Damage multipliers
  value: 'All multiplied together: up to ×2.3 counts in full, only a quarter of anything above, and never more than ×3'
- label: Fire rate
  value: The first 3 points of fire rate count in full, the next 4 at half, the rest at a quarter. Slowdowns count in full
- label: Luck
  value: Up to 10 counts in full; above 10, only a quarter
- label: Max health
  value: 12 hearts (soul hearts separate)
- label: Healing
  value: At most 30 % of your max health (2 hearts minimum) every 10 seconds
- label: Minimums
  value: Damage 0.5, speed 1.6, range 120, shot speed 4, at most 12 shots per second
names:
  es:
    name: Rendimientos decrecientes
    desc: 'Los objetos siempre suman, pero cuanto más acumulas, menos cuenta cada uno: así la partida no se rompe al final.'
  fr:
    name: Rendements décroissants
    desc: 'Les objets s''additionnent toujours, mais plus vous en cumulez, moins chacun compte : ainsi la partie ne se déséquilibre pas en fin de course.'
  de:
    name: Abnehmender Ertrag
    desc: 'Items addieren sich immer, aber je mehr du ansammelst, desto weniger zählt jedes einzelne: So kippt die Partie am Ende nicht.'
  it:
    name: Rendimenti decrescenti
    desc: 'Gli oggetti si sommano sempre, ma più ne accumuli, meno conta ciascuno: così la partita non si sbilancia alla fine.'
  pt:
    name: Retornos decrescentes
    desc: 'Os itens sempre somam, mas quanto mais você acumula, menos cada um conta: assim a partida não quebra no final.'
  ru:
    name: Убывающая отдача
    desc: 'Предметы всегда складываются, но чем больше накопишь, тем меньше значит каждый: так забег не ломается под конец.'
  ja:
    name: 効果の逓減
    desc: どうぐは常に加算されますが、集めるほど1つあたりの効果が減ります：終盤でプレイが壊れないようにするためです。
  ko:
    name: 수확 체감
    desc: '아이템은 언제나 더해지지만 많이 모을수록 하나하나의 효과가 줄어든다: 그래서 후반에도 게임이 깨지지 않는다.'
  zh:
    name: 收益递减
    desc: 道具总会叠加，但积累得越多，每件的效果就越小：这样对局后期就不会失衡。
  zt:
    name: 收益遞減
    desc: 道具總會疊加，但累積得越多，每件的效果就越小：這樣本局後期就不會失衡。
---
Items always add up, but the more you stack, the less each one counts: that way the run doesn't break late on.

## How your Damage is calculated
1. Add up the flat damage bonuses from your items (for example +0.5, +1…).
2. Apply the diminishing returns below to that total. Damage penalties skip this step and count in full.
3. Add the result to your Pokémon's base damage.
4. Multiply all the damage multipliers from items together (×1.5, ×2…), then apply the multiplier cap below.
5. Multiply step 3 by step 4, then by your level, shiny and other bonuses. Damage never goes below 0.5.

## Flat damage bonuses
| Part of the bonus | Counts |
|---|---|
| 0 to +3 | 100 % |
| +3 to +8 | 50 % |
| +8 to +40 | 25 % |
| above +40 | 5 % |

| Bonus from items | What counts | Share that counts |
|---|---|---|
| +1 | +1 | `████████████████████` 100 % |
| +3 | +3 | `████████████████████` 100 % |
| +5 | +4 | `████████████████░░░░` 80 % |
| +8 | +5.5 | `██████████████░░░░░░` 69 % |
| +10 | +6 | `████████████░░░░░░░░` 60 % |
| +15 | +7.25 | `██████████░░░░░░░░░░` 48 % |
| +20 | +8.5 | `████████░░░░░░░░░░░░` 42 % |
| +30 | +11 | `███████░░░░░░░░░░░░░` 37 % |
| +40 | +13.5 | `███████░░░░░░░░░░░░░` 34 % |
| +50 | +14 | `██████░░░░░░░░░░░░░░` 28 % |

## Damage multipliers
Up to ×2.3 counts in full; above that, only a quarter of the extra counts; the total never goes past ×3 (reached at ×5.1 on paper).

| Multipliers × together | What counts |
|---|---|
| ×1.5 | ×1.5 `████░░░░░░░░░░░░░░░░` |
| ×2 | ×2 `█████░░░░░░░░░░░░░░░` |
| ×2.3 | ×2.3 `██████░░░░░░░░░░░░░░` |
| ×3 | ×2.47 `██████░░░░░░░░░░░░░░` |
| ×4 | ×2.72 `███████░░░░░░░░░░░░░` |
| ×5.1 | ×3 `████████░░░░░░░░░░░░` |
| ×8 | ×3 `████████░░░░░░░░░░░░` |

## Fire rate
Fire-rate bonuses from items lower the time between your shots. The first 3 points count in full, the next 4 at half, the rest at a quarter. Slowdowns always count in full. You can never shoot more than 12 times per second.

| Fire-rate bonus | What counts |
|---|---|
| 1 | 1 |
| 3 | 3 |
| 5 | 4 |
| 7 | 5 |
| 10 | 5.75 |
| 15 | 7 |

## Luck
Your total Luck (items, type passive, shiny…) counts in full up to 10; above 10, only a quarter counts.

| Total Luck | What counts |
|---|---|
| 5 | 5 |
| 10 | 10 |
| 14 | 11 |
| 20 | 12.5 |
| 30 | 15 |

## Full example
Pikachu, 3.5 base damage, with +10 damage from items and two ×2 items:

1. +10 becomes 3 + 2.5 + 0.5 = **6**.
2. 3.5 + 6 = **9.5** (instead of 13.5).
3. ×2 × ×2 = ×4 on paper, which becomes 2.3 + 0.25 × 1.7 = **×2.725**.
4. 9.5 × 2.725 ≈ **25.9** damage, instead of 54 without diminishing returns.
