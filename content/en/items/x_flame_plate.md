---
title: Flame Plate
id: x_flame_plate
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
  value: +15% to Fire-type shots
- label: Appears
  value: Only if someone has a Fire-type Pokémon
- label: Zone guardian
  value: Also offered by zone guardians of its type (endless mode)
icon: items-ps/plate/flame.png
sprite: true
names:
  es:
    name: Tabla Llama
    desc: 'Potencia el tipo Fuego: si tu Pokémon es de tipo Fuego, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  fr:
    name: Plaque Flamme
    desc: 'Renforce le type Feu : si votre Pokémon est de type Feu, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts'
  de:
    name: Feuertafel
    desc: 'Verstärkt den Typ Feuer: Ist dein Pokémon vom Typ Feuer, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastrarogo
    desc: 'Potenzia il tipo Fuoco: se il tuo Pokémon è di tipo Fuoco, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa de Chama
    desc: 'Potencializa o tipo Fogo: se seu Pokémon for do tipo Fogo, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Пламенная плита
    desc: 'Усиливает тип Огонь: если твой покемон типа Огонь, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: ひのたまプレート
    desc: ほのおタイプを強化：ポケモンがほのおタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 불구슬플레이트
    desc: '강화 타입: 불꽃. 포켓몬이 불꽃 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 火球石板
    desc: 强化火属性：若你的宝可梦是火属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 火球石板
    desc: 強化火屬性：如果你的寶可夢是火屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Boosts the Fire type: if your Pokémon is Fire-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage

## How it works
- It only works if the Pokémon you are playing has the Fire type. The Plate can appear as soon as anyone on the team has a Fire Pokémon, bench included, but a Pokémon without that type gets nothing from it.
- A dual-type Pokémon only gets the bonus on its Fire shots, one shot in two.
- The +15 % is applied when a Fire shot hits, so it does not show in your Damage stat on the HUD. It is not limited by the ×3 cap on damage multipliers.
- The +2 ranks go to the [Fire passive](../mechanics/pasiva_fire.html). They don't change the Damage stat either.
- Burn and poison ticks don't get the +15 %.

## Stacking
- It does not stack: a second copy adds nothing (still +2 ranks and +15 %).
