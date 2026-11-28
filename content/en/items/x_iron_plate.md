---
title: Iron Plate
id: x_iron_plate
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
  value: +15% to Steel-type shots
- label: Appears
  value: Only if someone has a Steel-type Pokémon
- label: Zone guardian
  value: Also offered by zone guardians of its type (endless mode)
icon: items-ps/plate/iron.png
sprite: true
names:
  es:
    name: Tabla Acero
    desc: 'Potencia el tipo Acero: si tu Pokémon es de tipo Acero, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  fr:
    name: Plaque Fer
    desc: 'Renforce le type Acier : si votre Pokémon est de type Acier, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts'
  de:
    name: Eisentafel
    desc: 'Verstärkt den Typ Stahl: Ist dein Pokémon vom Typ Stahl, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastraferro
    desc: 'Potenzia il tipo Acciaio: se il tuo Pokémon è di tipo Acciaio, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa de Ferro
    desc: 'Potencializa o tipo Aço: se seu Pokémon for do tipo Aço, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Железная плита
    desc: 'Усиливает тип Сталь: если твой покемон типа Сталь, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: こうてつプレート
    desc: はがねタイプを強化：ポケモンがはがねタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 강철플레이트
    desc: '강화 타입: 강철. 포켓몬이 강철 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 钢铁石板
    desc: 强化钢属性：若你的宝可梦是钢属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 鋼鐵石板
    desc: 強化鋼屬性：如果你的寶可夢是鋼屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Boosts the Steel type: if your Pokémon is Steel-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage

## How it works
- Its full effect needs the Pokémon you are playing to have the Steel type. The Plate can appear as soon as anyone on the team has a Steel Pokémon, bench included, but a Pokémon without that type doesn't get the +2 ranks.
- A dual-type Pokémon only gets the +15 % on its Steel shots. How many that is depends on your [shot-type setting](../mechanics/tipos_dobles.html): every shot if you lock it to Steel, fewer in AUTO or Alternate.
- The +15 % follows the type of the shot, not of the Pokémon: with [Dubious Disc](disco_extrano.html) (random shot types), the shots that come out as Steel get it even if your Pokémon isn't Steel-type.
- It multiplies with [Eon Flute](m_flauta_eon.html): ×1.15 × ×1.15 = ×1.32 on those shots.
- The +15 % is applied when a Steel shot hits, so it does not show in your Damage stat on the HUD. It is not limited by the ×3 cap on damage multipliers.
- The +2 ranks go to the [Steel passive](../mechanics/pasiva_steel.html). They don't change the Damage stat either.
- Burn and poison ticks don't get the +15 %.

## Stacking
- It does not stack: a second copy adds nothing (still +2 ranks and +15 %).
