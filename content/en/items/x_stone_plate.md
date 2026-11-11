---
title: Stone Plate
id: x_stone_plate
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
  value: +15% to Rock-type shots
- label: Appears
  value: Only if someone has a Rock-type Pokémon
icon: items-ps/plate/stone.png
sprite: true
names:
  es:
    name: Tabla Pétrea
    desc: 'Potencia el tipo Roca: si tu Pokémon es de tipo Roca, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  fr:
    name: Plaque Roc
    desc: 'Renforce le type Roche : si votre Pokémon est de type Roche, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts'
  de:
    name: Steintafel
    desc: 'Verstärkt den Typ Fels: Ist dein Pokémon vom Typ Fels, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastrapietra
    desc: 'Potenzia il tipo Roccia: se il tuo Pokémon è di tipo Roccia, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa de Pedra
    desc: 'Potencializa o tipo Pedra: se seu Pokémon for do tipo Pedra, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Каменная плита
    desc: 'Усиливает тип Камень: если твой покемон типа Камень, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: がんせきプレート
    desc: いわタイプを強化：ポケモンがいわタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 암석플레이트
    desc: '강화 타입: 바위. 포켓몬이 바위 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 岩石石板
    desc: 强化石块属性：若你的宝可梦是石块属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 岩石石板
    desc: 強化岩石屬性：如果你的寶可夢是岩石屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Boosts the Rock type: if your Pokémon is Rock-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage

## How it works
- It only works if the Pokémon you are playing has the Rock type. The Plate can appear as soon as anyone on the team has a Rock Pokémon, bench included, but a Pokémon without that type gets nothing from it.
- A dual-type Pokémon only gets the bonus on its Rock shots, one shot in two.
- The +15 % is applied when a Rock shot hits, so it does not show in your Damage stat on the HUD. It is not limited by the ×3 cap on damage multipliers.
- The +2 ranks go to the [Rock passive](../mechanics/pasiva_rock.html). They don't change the Damage stat either.
- Burn and poison ticks don't get the +15 %.

## Stacking
- It does not stack: a second copy adds nothing (still +2 ranks and +15 %).
