---
title: Plaque Poing
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
- label: Passif
  value: +2 rangs (dès le début)
- label: Dégâts
  value: +15 % aux tirs de type Combat
- label: Apparaît
  value: Seulement si quelqu'un a un Pokémon de type Combat
icon: items-ps/plate/fist.png
sprite: true
names:
  en:
    name: Fist Plate
    desc: 'Boosts the Fighting type: if your Pokémon is Fighting-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage'
  es:
    name: Tabla Fuerte
    desc: 'Potencia el tipo Lucha: si tu Pokémon es de tipo Lucha, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
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
Renforce le type Combat : si votre Pokémon est de type Combat, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts

## Fonctionnement
- Elle ne marche que si le Pokémon que vous jouez a le type Combat. La Plaque peut apparaître dès que quelqu'un dans l'équipe a un Pokémon Combat, banc compris, mais un Pokémon sans ce type n'en tire rien.
- Un Pokémon à double type n'a le bonus que sur ses tirs Combat, un tir sur deux.
- Le +15 % s'applique quand un tir Combat touche, il n'apparaît donc pas dans votre stat Dégâts du HUD. Il n'est pas limité par le plafond de ×3 des multiplicateurs de dégâts.
- Les +2 rangs vont au [Passif Combat](../mechanics/pasiva_fighting.html). Ils ne changent pas non plus la stat Dégâts.
- Les ticks de brûlure et de poison n'ont pas le +15 %.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien (toujours +2 rangs et +15 %).
