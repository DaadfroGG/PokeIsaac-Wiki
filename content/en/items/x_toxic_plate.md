---
title: Toxic Plate
id: x_toxic_plate
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
  value: +15% to Poison-type shots
- label: Appears
  value: Only if someone has a Poison-type Pokémon
- label: Zone guardian
  value: Also offered by zone guardians of its type (endless mode)
icon: items-ps/plate/toxic.png
sprite: true
names:
  es:
    name: Tabla Tóxica
    desc: 'Potencia el tipo Veneno: si tu Pokémon es de tipo Veneno, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  fr:
    name: Plaque Toxicité
    desc: 'Renforce le type Poison : si votre Pokémon est de type Poison, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts'
  de:
    name: Gifttafel
    desc: 'Verstärkt den Typ Gift: Ist dein Pokémon vom Typ Gift, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastrafiele
    desc: 'Potenzia il tipo Veleno: se il tuo Pokémon è di tipo Veleno, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa Tóxica
    desc: 'Potencializa o tipo Venenoso: se seu Pokémon for do tipo Venenoso, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Токсичная плита
    desc: 'Усиливает тип Яд: если твой покемон типа Яд, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: もうどくプレート
    desc: どくタイプを強化：ポケモンがどくタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 맹독플레이트
    desc: '강화 타입: 독. 포켓몬이 독 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 剧毒石板
    desc: 强化毒属性：若你的宝可梦是毒属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 劇毒石板
    desc: 強化毒屬性：如果你的寶可夢是毒屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Boosts the Poison type: if your Pokémon is Poison-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage

## How it works
- It only works if the Pokémon you are playing has the Poison type. The Plate can appear as soon as anyone on the team has a Poison Pokémon, bench included, but a Pokémon without that type gets nothing from it.
- A dual-type Pokémon only gets the bonus on its Poison shots, one shot in two.
- The +15 % is applied when a Poison shot hits, so it does not show in your Damage stat on the HUD. It is not limited by the ×3 cap on damage multipliers.
- The +2 ranks go to the [Poison passive](../mechanics/pasiva_poison.html). They don't change the Damage stat either.
- Burn and poison ticks don't get the +15 %.

## Stacking
- It does not stack: a second copy adds nothing (still +2 ranks and +15 %).
