---
title: Plaque Terre
id: x_earth_plate
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
  value: +15 % aux tirs de type Sol
- label: Apparaît
  value: Seulement si quelqu'un a un Pokémon de type Sol
- label: Gardien de zone
  value: Aussi proposée par les gardiens de zone de son type (mode infini)
icon: items-ps/plate/earth.png
sprite: true
names:
  en:
    name: Earth Plate
    desc: 'Boosts the Ground type: if your Pokémon is Ground-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage'
  es:
    name: Tabla Terrax
    desc: 'Potencia el tipo Tierra: si tu Pokémon es de tipo Tierra, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  de:
    name: Erdtafel
    desc: 'Verstärkt den Typ Boden: Ist dein Pokémon vom Typ Boden, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastrageo
    desc: 'Potenzia il tipo Terra: se il tuo Pokémon è di tipo Terra, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa da Terra
    desc: 'Potencializa o tipo Terrestre: se seu Pokémon for do tipo Terrestre, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Земляная плита
    desc: 'Усиливает тип Земля: если твой покемон типа Земля, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: だいちのプレート
    desc: じめんタイプを強化：ポケモンがじめんタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 대지플레이트
    desc: '강화 타입: 땅. 포켓몬이 땅 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 大地石板
    desc: 强化地面属性：若你的宝可梦是地面属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 大地石板
    desc: 強化地面屬性：如果你的寶可夢是地面屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Renforce le type Sol : si votre Pokémon est de type Sol, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts

## Fonctionnement
- Elle ne marche que si le Pokémon que vous jouez a le type Sol. La Plaque peut apparaître dès que quelqu'un dans l'équipe a un Pokémon Sol, banc compris, mais un Pokémon sans ce type n'en tire rien.
- Un Pokémon à double type n'a le bonus que sur ses tirs Sol, un tir sur deux.
- Le +15 % s'applique quand un tir Sol touche, il n'apparaît donc pas dans votre stat Dégâts du HUD. Il n'est pas limité par le plafond de ×3 des multiplicateurs de dégâts.
- Les +2 rangs vont au [Passif Sol](../mechanics/pasiva_ground.html). Ils ne changent pas non plus la stat Dégâts.
- Les ticks de brûlure et de poison n'ont pas le +15 %.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien (toujours +2 rangs et +15 %).
