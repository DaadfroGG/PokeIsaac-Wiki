---
title: Stats in practice
id: estadisticas_reales
color: '#ffd23c'
labels:
- text: MECHANIC
  color: '#ffd23c'
icon: icons/mechanics/rendimientos.png
details:
- label: Damage
  value: Flat points added to base damage
- label: Fire rate
  value: Each point is 1/60 s less between shots; max 12 shots/s
- label: Range
  value: +50 px on every Pokémon, min 120
- label: Health
  value: +1 heart = 2 points, max 12 hearts
names:
  en:
    name: Stats in practice
    desc: 'What the stat numbers on items really are worth: units, a typical Pokémon, limits, and fire rate in shots per second.'
  es:
    name: Estadísticas en la práctica
    desc: 'Lo que valen de verdad los números de estadísticas de los objetos: unidades, un Pokémon típico, límites y cadencia en disparos por segundo.'
  fr:
    name: Statistiques en pratique
    desc: 'Ce que valent vraiment les nombres de statistiques des objets : unités, Pokémon typique, limites et cadence en tirs par seconde.'
  de:
    name: Werte in der Praxis
    desc: 'Was die Stat-Zahlen auf Items wirklich wert sind: Einheiten, ein typisches Pokémon, Grenzen und Feuerrate in Schuss pro Sekunde.'
  it:
    name: Statistiche in pratica
    desc: 'Quanto valgono davvero i numeri delle statistiche degli oggetti: unità, un Pokémon tipico, limiti e cadenza in colpi al secondo.'
  pt:
    name: Estatísticas na prática
    desc: 'O que os números de estatísticas dos itens realmente valem: unidades, um Pokémon típico, limites e cadência em tiros por segundo.'
  ru:
    name: Характеристики на практике
    desc: 'Чего на самом деле стоят числа характеристик на предметах: единицы, типичный покемон, пределы и скорострельность в выстрелах в секунду.'
  ja:
    name: ステータスの実際の効果
    desc: どうぐのステータス数値が実際にどれほどの効果か：単位、標準的なポケモン、上限、秒あたりの連射数。
  ko:
    name: 능력치의 실제 효과
    desc: '아이템 능력치 숫자가 실제로 어느 정도인지: 단위, 평균적인 포켓몬, 한계, 초당 발사 수.'
  zh:
    name: 属性的实际效果
    desc: 道具上的属性数字实际值多少：单位、典型宝可梦、上限，以及每秒射击数。
  zt:
    name: 屬性的實際效果
    desc: 道具上的屬性數字實際值多少：單位、典型寶可夢、上限，以及每秒射擊數。
---
Item pages give raw numbers ("Fire rate +2", "Range +160 px"). This page says what those numbers are worth in practice: the unit of each stat, what a typical Pokémon starts with, the limits, and what the first copies really change. Each stat item page ends with a "Real effect" line using the typical Pokémon below.

## The typical Pokémon
Across the roster, half of the Pokémon are around these values (the Pokémon pages show their own):

| Stat | Typical | Roster range |
|---|---|---|
| Damage | 4 | 2.7 to 7.2 |
| Fire rate | 4.3 shots/s | 3.3 to 7.5 |
| Speed | 4 | 3.2 to 5.1 |
| Range | 350 px (300 shown + 50, see below) | 279 to 469 px |
| Shot speed | 9 | 8 to 10 |
| Health | 4 hearts (8 points) | ½ to 8 hearts |
| Luck | 0 | 0 to 3 |

## What each number means
| Stat | What the item adds | Limits | Diminishing returns |
|---|---|---|---|
| **Damage** | Flat points added to your base damage ([Protein](../items/proteina.html) +0.5 on 4 damage = 4.5) | Never below 0.5 | Flat bonuses count in full up to +3 in total, then half, then less. Penalties count in full. See [Diminishing returns](rendimientos.html) |
| **Fire rate** | Time between shots: each point is 1/60 s (about 0.017 s) less (+2 = 0.033 s less) | Never more than 12 shots/s | First 3 points in full, next 4 at half, the rest at a quarter. Slowdowns count in full |
| **Speed** | Added straight to your movement speed | Never below 1.6 | None |
| **Range** | Pixels your shots travel before they disappear. Every Pokémon gets +50 px on top of the range shown on its page | Never below 120 px | None |
| **Shot speed** | Added straight to how fast your shots fly | Never below 4 | None |
| **Max health** | Items say hearts; the game counts half hearts (+1 heart = +2 points) | Between 1 and 12 hearts | None, but 12 hearts is the ceiling |
| **Luck** | Added to your Luck | | Full up to 10, a quarter above |

## What a fire rate bonus really does
Shots per second = 60 ÷ (ticks between shots − counted bonus). Because the delay shrinks, each new point helps more than the last one in shots per second, but the diminishing returns hold the total back.

| Shots/s of the Pokémon | +1 | +2 | +3 | +5 | +7 | +10 | +15 |
|---|---|---|---|---|---|---|---|
| 3.5 | 3.8 | 4 | 4.3 | 4.6 | 5 | 5.3 | 6 |
| 4.3 | 4.6 | 5 | 5.5 | 6 | 6.7 | 7.3 | 8.6 |
| 5 | 5.5 | 6 | 6.7 | 7.5 | 8.6 | 9.6 | 12 |
| 6 | 6.7 | 7.5 | 8.6 | 10 | 12 | 12 | 12 |

The columns are the total fire rate bonus from items (before the diminishing returns, which are already applied in the table). A fire rate penalty (items marked "Fire rate −") adds its points as extra delay: +4 delay on a 4.3 shots/s Pokémon gives 3.3 shots/s.

## Example
A 4 damage, 4.3 shots/s Pokémon picks up [Protein](../items/proteina.html) (Damage +0.5), [Calcium](../items/calcio.html) (Fire rate +2) and [Zinc](../items/zinc.html) (Damage +0.4, Fire rate +1.2):
- Damage: 4 + 0.5 + 0.4 = **4.9** (+23 %).
- Fire rate: 2 + 1.2 = 3.2 points. 3 count in full and 0.2 at half: 3.1. The delay goes from 14 to 10.9 ticks: **5.5 shots/s** (+28 %).

## What also changes the numbers
- **Level** (Classic and Liga): a Pokémon gains damage, fire rate and speed with its level, see [Pokémon levels](niveles_pokemon.html).
- **Shiny**: small bonuses, see [Shiny advantage](shinys_ventaja.html).
- **Type passives**: for example Bug fire rate and speed, Flying speed, Normal Luck, see the type pages.
- **Item multipliers** on damage or fire rate (such as ×1.5 damage) apply after the flat bonuses and have their own cap, see [Diminishing returns](rendimientos.html).
- The [evolution](niveles_pokemon.html) bonuses count as item bonuses (and so are subject to the diminishing returns).
- Temporary effects (actives, rooms, status) are on top of all this.

See also: [Diminishing returns](rendimientos.html), [Item stacking](acumulacion.html).
