---
title: Dread Plate
id: x_dread_plate
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
  value: +15% to Dark-type shots
- label: Appears
  value: Only if someone has a Dark-type Pokémon
icon: items-ps/plate/dread.png
sprite: true
names:
  es:
    name: Tabla Oscura
    desc: 'Potencia el tipo Siniestro: si tu Pokémon es de tipo Siniestro, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  fr:
    name: Plaque Ombre
    desc: 'Renforce le type Ténèbres : si votre Pokémon est de type Ténèbres, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts'
  de:
    name: Furchttafel
    desc: 'Verstärkt den Typ Unlicht: Ist dein Pokémon vom Typ Unlicht, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastratimore
    desc: 'Potenzia il tipo Buio: se il tuo Pokémon è di tipo Buio, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa Sombria
    desc: 'Potencializa o tipo Sombrio: se seu Pokémon for do tipo Sombrio, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Мрачная плита
    desc: 'Усиливает тип Тьма: если твой покемон типа Тьма, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: こわもてプレート
    desc: あくタイプを強化：ポケモンがあくタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 공포플레이트
    desc: '강화 타입: 악. 포켓몬이 악 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 恶颜石板
    desc: 强化恶属性：若你的宝可梦是恶属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 惡顏石板
    desc: 強化惡屬性：如果你的寶可夢是惡屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Boosts the Dark type: if your Pokémon is Dark-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage

## How it works
- It only works if the Pokémon you are playing has the Dark type. The Plate can appear as soon as anyone on the team has a Dark Pokémon, bench included, but a Pokémon without that type gets nothing from it.
- A dual-type Pokémon only gets the bonus on its Dark shots, one shot in two.
- The +15 % is applied when a Dark shot hits, so it does not show in your Damage stat on the HUD. It is not limited by the ×3 cap on damage multipliers.
- The +2 ranks go to the [Dark passive](../mechanics/pasiva_dark.html). They don't change the Damage stat either.
- Burn and poison ticks don't get the +15 %.

## Stacking
- It does not stack: a second copy adds nothing (still +2 ranks and +15 %).
