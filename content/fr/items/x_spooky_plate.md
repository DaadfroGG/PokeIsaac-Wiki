---
title: Plaque Fantôme
id: x_spooky_plate
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
  value: +15 % aux tirs de type Spectre
- label: Apparaît
  value: Seulement si quelqu'un a un Pokémon de type Spectre
- label: Gardien de zone
  value: Aussi proposée par les gardiens de zone de son type (mode infini)
icon: items-ps/plate/spooky.png
sprite: true
names:
  en:
    name: Spooky Plate
    desc: 'Boosts the Ghost type: if your Pokémon is Ghost-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage'
  es:
    name: Tabla Terror
    desc: 'Potencia el tipo Fantasma: si tu Pokémon es de tipo Fantasma, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  de:
    name: Spuktafel
    desc: 'Verstärkt den Typ Geist: Ist dein Pokémon vom Typ Geist, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastratetra
    desc: 'Potenzia il tipo Spettro: se il tuo Pokémon è di tipo Spettro, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa Sinistra
    desc: 'Potencializa o tipo Fantasma: se seu Pokémon for do tipo Fantasma, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Жуткая плита
    desc: 'Усиливает тип Призрак: если твой покемон типа Призрак, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: もののけプレート
    desc: ゴーストタイプを強化：ポケモンがゴーストタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 원령플레이트
    desc: '강화 타입: 고스트. 포켓몬이 고스트 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 妖怪石板
    desc: 强化幽灵属性：若你的宝可梦是幽灵属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 妖怪石板
    desc: 強化幽靈屬性：如果你的寶可夢是幽靈屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Renforce le type Spectre : si votre Pokémon est de type Spectre, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts

## Fonctionnement
- Elle ne marche que si le Pokémon que vous jouez a le type Spectre. La Plaque peut apparaître dès que quelqu'un dans l'équipe a un Pokémon Spectre, banc compris, mais un Pokémon sans ce type n'en tire rien.
- Un Pokémon à double type n'a le bonus que sur ses tirs Spectre, un tir sur deux.
- Le +15 % s'applique quand un tir Spectre touche, il n'apparaît donc pas dans votre stat Dégâts du HUD. Il n'est pas limité par le plafond de ×3 des multiplicateurs de dégâts.
- Les +2 rangs vont au [Passif Spectre](../mechanics/pasiva_ghost.html). Ils ne changent pas non plus la stat Dégâts.
- Les ticks de brûlure et de poison n'ont pas le +15 %.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien (toujours +2 rangs et +15 %).
