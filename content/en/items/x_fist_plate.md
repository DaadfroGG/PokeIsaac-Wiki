---
title: Fist Plate
id: x_fist_plate
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
  value: +15% to Fighting-type shots
- label: Appears
  value: Only if someone has a Fighting-type Pokémon
icon: items-ps/plate/fist.png
sprite: true
names:
  es:
    name: Tabla Fuerte
    desc: 'Potencia el tipo Lucha: si tu Pokémon es de tipo Lucha, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  fr:
    name: Plaque Poing
    desc: 'Renforce le type Combat : si votre Pokémon est de type Combat, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts'
  de:
    name: Fausttafel
    desc: 'Verstärkt den Typ Kampf: Ist dein Pokémon vom Typ Kampf, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastrapugno
    desc: 'Potenzia il tipo Lotta: se il tuo Pokémon è di tipo Lotta, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa de Punho
    desc: 'Potencializa o tipo Lutador: se seu Pokémon for do tipo Lutador, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Кулачная плита
    desc: 'Усиливает тип Боевой: если твой покемон типа Боевой, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: こぶしのプレート
    desc: かくとうタイプを強化：ポケモンがかくとうタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 주먹플레이트
    desc: '강화 타입: 격투. 포켓몬이 격투 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 拳头石板
    desc: 强化格斗属性：若你的宝可梦是格斗属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 拳頭石板
    desc: 強化格鬥屬性：如果你的寶可夢是格鬥屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Boosts the Fighting type: if your Pokémon is Fighting-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage

## How it works
- It only works if the Pokémon you are playing has the Fighting type. The Plate can appear as soon as anyone on the team has a Fighting Pokémon, bench included, but a Pokémon without that type gets nothing from it.
- A dual-type Pokémon only gets the bonus on its Fighting shots, one shot in two.
- The +15 % is applied when a Fighting shot hits, so it does not show in your Damage stat on the HUD. It is not limited by the ×3 cap on damage multipliers.
- The +2 ranks go to the [Fighting passive](../mechanics/pasiva_fighting.html). They don't change the Damage stat either.
- Burn and poison ticks don't get the +15 %.

## Stacking
- It does not stack: a second copy adds nothing (still +2 ranks and +15 %).
