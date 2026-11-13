---
title: Light Ball
id: bola_luminosa
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Damage +0.5
  good: true
details:
- label: Damage
  value: '+0.5'
- label: Electric Pokémon
  value: Damage ×2
icon: items-ps/hold-item/light-ball.png
sprite: true
names:
  es:
    name: Bola Luminosa
    desc: Daño +0.5; si tu Pokémon es eléctrico, además daño ×2
  fr:
    name: Balle Lumière
    desc: Dégâts +0,5 ; si votre Pokémon est de type Électrik, dégâts ×2 en plus
  de:
    name: Kugelblitz
    desc: Schaden +0,5; ist dein Pokémon vom Typ Elektro, zusätzlich Schaden ×2
  it:
    name: Elettropalla
    desc: Danni +0,5; se il tuo Pokémon è di tipo Elettro, i danni sono anche ×2
  pt:
    name: Bola de Luz
    desc: Dano +0,5; se seu Pokémon é Elétrico, o dano ainda é ×2
  ru:
    name: Световой шар
    desc: Урон +0,5; если твой покемон типа Электро, еще и урон ×2
  ja:
    name: でんきだま
    desc: ダメージ+0.5。自分のポケモンがでんきタイプなら、さらにダメージ×2
  ko:
    name: 전기구슬
    desc: 대미지 +0.5; 내 포켓몬이 전기 타입이면 대미지 ×2도 적용
  zh:
    name: 电气球
    desc: 伤害+0.5；如果你的宝可梦是电属性，伤害再×2
  zt:
    name: 電氣球
    desc: 傷害+0.5；如果你的寶可夢是電屬性，傷害再×2
---
Damage +0.5; if your Pokémon is Electric, also damage ×2

## How it works
- Damage +0.5: a flat bonus that follows the [diminishing returns](../mechanics/rendimientos.html) on flat Damage (full up to +3, half to +8, a quarter to +40, then 5 %).
- If the Pokémon you play is Electric-type, your Damage is also multiplied by 2. This is a Damage multiplier, so it is combined with the other multipliers: they count in full up to ×2.3 in total, then only a quarter of the rest, and never more than ×3 (see [Diminishing returns](../mechanics/rendimientos.html)).
- A Pokémon of any other type only gets the +0.5.

## Stacking
- The flat +0.5 is added again by each copy. The ×2 is an on/off effect: a second Light Ball does not make it ×4.
