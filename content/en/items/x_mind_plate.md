---
title: Mind Plate
id: x_mind_plate
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
  value: +15% to Psychic-type shots
- label: Appears
  value: Only if someone has a Psychic-type Pokémon
icon: items-ps/plate/mind.png
sprite: true
names:
  es:
    name: Tabla Mental
    desc: 'Potencia el tipo Psíquico: si tu Pokémon es de tipo Psíquico, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  fr:
    name: Plaque Esprit
    desc: 'Renforce le type Psy : si votre Pokémon est de type Psy, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts'
  de:
    name: Hirntafel
    desc: 'Verstärkt den Typ Psychokinese: Ist dein Pokémon vom Typ Psychokinese, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastramente
    desc: 'Potenzia il tipo Psichico: se il tuo Pokémon è di tipo Psichico, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa Mental
    desc: 'Potencializa o tipo Psíquico: se seu Pokémon for do tipo Psíquico, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Ментальная плита
    desc: 'Усиливает тип Психическая атака: если твой покемон типа Психическая атака, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: ふしぎのプレート
    desc: サイコキネシスタイプを強化：ポケモンがサイコキネシスタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 이상한플레이트
    desc: '강화 타입: 사이코키네시스. 포켓몬이 사이코키네시스 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 神奇石板
    desc: 强化精神强念属性：若你的宝可梦是精神强念属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 神奇石板
    desc: 強化精神強念屬性：如果你的寶可夢是精神強念屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Boosts the Psychic type: if your Pokémon is Psychic-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage

## How it works
- It only works if the Pokémon you are playing has the Psychic type. The Plate can appear as soon as anyone on the team has a Psychic Pokémon, bench included, but a Pokémon without that type gets nothing from it.
- A dual-type Pokémon only gets the bonus on its Psychic shots, one shot in two.
- The +15 % is applied when a Psychic shot hits, so it does not show in your Damage stat on the HUD. It is not limited by the ×3 cap on damage multipliers.
- The +2 ranks go to the [Psychic passive](../mechanics/pasiva_psychic.html). They don't change the Damage stat either.
- Burn and poison ticks don't get the +15 %.

## Stacking
- It does not stack: a second copy adds nothing (still +2 ranks and +15 %).
