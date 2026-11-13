---
title: Zap Plate
id: x_zap_plate
kind: passive
category: shot
family: plate
tier: 2
pools:
- treasure
- boss
- shop
pool_weight: 1
details:
- label: Passive
  value: +2 ranks (from the start)
- label: Damage
  value: +15% to Electric-type shots
- label: Appears
  value: Only if someone has a Electric-type Pokémon
- label: Zone guardian
  value: Also offered by zone guardians of its type (endless mode)
icon: items-ps/plate/zap.png
sprite: true
names:
  es:
    name: Tabla Trueno
    desc: 'Potencia el tipo Eléctrico: si tu Pokémon es de tipo Eléctrico, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  fr:
    name: Plaque Volt
    desc: 'Renforce le type Électrik : si votre Pokémon est de type Électrik, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts'
  de:
    name: Blitztafel
    desc: 'Verstärkt den Typ Elektro: Ist dein Pokémon vom Typ Elektro, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastrasaetta
    desc: 'Potenzia il tipo Elettro: se il tuo Pokémon è di tipo Elettro, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa de Raio
    desc: 'Potencializa o tipo Elétrico: se seu Pokémon for do tipo Elétrico, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Громовая плита
    desc: 'Усиливает тип Электро: если твой покемон типа Электро, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: いかずちプレート
    desc: でんきタイプを強化：ポケモンがでんきタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 우레플레이트
    desc: '강화 타입: 전기. 포켓몬이 전기 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 雷电石板
    desc: 强化电属性：若你的宝可梦是电属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 雷電石板
    desc: 強化電屬性：如果你的寶可夢是電屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Boosts the Electric type: if your Pokémon is Electric-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage

## How it works
- It only works if the Pokémon you are playing has the Electric type. The Plate can appear as soon as anyone on the team has a Electric Pokémon, bench included, but a Pokémon without that type gets nothing from it.
- A dual-type Pokémon only gets the bonus on its Electric shots, one shot in two.
- The +15 % is applied when a Electric shot hits, so it does not show in your Damage stat on the HUD. It is not limited by the ×3 cap on damage multipliers.
- The +2 ranks go to the [Electric passive](../mechanics/pasiva_electric.html). They don't change the Damage stat either.
- Burn and poison ticks don't get the +15 %.

## Stacking
- It does not stack: a second copy adds nothing (still +2 ranks and +15 %).
