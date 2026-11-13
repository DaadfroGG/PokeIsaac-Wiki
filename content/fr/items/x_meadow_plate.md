---
title: Plaque Herbe
id: x_meadow_plate
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
  value: +15 % aux tirs de type Plante
- label: Apparaît
  value: Seulement si quelqu'un a un Pokémon de type Plante
- label: Gardien de zone
  value: Aussi proposée par les gardiens de zone de son type (mode infini)
icon: items-ps/plate/meadow.png
sprite: true
names:
  en:
    name: Meadow Plate
    desc: 'Boosts the Grass type: if your Pokémon is Grass-type, its type passive goes up 2 ranks and its shots of that type deal +15% damage'
  es:
    name: Tabla Pradal
    desc: 'Potencia el tipo Planta: si tu Pokémon es de tipo Planta, su pasiva de tipo sube 2 rangos y sus disparos de ese tipo hacen +15 % de daño'
  de:
    name: Wiesentafel
    desc: 'Verstärkt den Typ Pflanze: Ist dein Pokémon vom Typ Pflanze, steigt seine Typ-Passivfähigkeit um 2 Ränge und seine Schüsse dieses Typs machen +15 % Schaden'
  it:
    name: Lastraprato
    desc: 'Potenzia il tipo Erba: se il tuo Pokémon è di tipo Erba, il suo passivo di tipo sale di 2 ranghi e i suoi tiri di quel tipo fanno +15 % di danni'
  pt:
    name: Placa do Prado
    desc: 'Potencializa o tipo Planta: se seu Pokémon for do tipo Planta, a passiva de tipo dele sobe 2 graus e os tiros desse tipo causam +15% de dano'
  ru:
    name: Луговая плита
    desc: 'Усиливает тип Трава: если твой покемон типа Трава, его пассивка типа повышается на 2 ранга, а выстрелы этого типа наносят на 15 % больше урона'
  ja:
    name: みどりのプレート
    desc: くさタイプを強化：ポケモンがくさタイプなら、タイプパッシブの段階が2上がり、そのタイプのショットのダメージ+15%
  ko:
    name: 초록플레이트
    desc: '강화 타입: 풀. 포켓몬이 풀 타입이면 타입 패시브가 2랭크 오르고 그 타입 탄의 대미지가 +15%가 된다'
  zh:
    name: 碧绿石板
    desc: 强化草属性：若你的宝可梦是草属性，其属性被动提升2等阶，该属性的弹伤害+15%
  zt:
    name: 碧綠石板
    desc: 強化草屬性：如果你的寶可夢是草屬性，其屬性被動提升2階級，該屬性的彈傷害+15%
---
Renforce le type Plante : si votre Pokémon est de type Plante, son passif de type gagne 2 rangs et ses tirs de ce type infligent +15 % de dégâts

## Fonctionnement
- Elle ne marche que si le Pokémon que vous jouez a le type Plante. La Plaque peut apparaître dès que quelqu'un dans l'équipe a un Pokémon Plante, banc compris, mais un Pokémon sans ce type n'en tire rien.
- Un Pokémon à double type n'a le bonus que sur ses tirs Plante, un tir sur deux.
- Le +15 % s'applique quand un tir Plante touche, il n'apparaît donc pas dans votre stat Dégâts du HUD. Il n'est pas limité par le plafond de ×3 des multiplicateurs de dégâts.
- Les +2 rangs vont au [Passif Plante](../mechanics/pasiva_grass.html). Ils ne changent pas non plus la stat Dégâts.
- Les ticks de brûlure et de poison n'ont pas le +15 %.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien (toujours +2 rangs et +15 %).
