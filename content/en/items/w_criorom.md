---
title: Chill Drive
id: w_criorom
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Charge
  value: 2 × your delay between shots, 0.37 to 1.2 s (min 25 % to release)
- label: Blizzard
  value: ×0.38 to ×0.78 Damage every 0.25 s, for 2.5 to 5.3 s
- label: Zone
  value: 90-240 px ahead; radius 46 to 98 px (+7 per Size)
- label: Ice-type only
  value: Slows 0.8 s on each hit; every 3rd tick can freeze
- label: Zones
  value: Up to 4 with multishot (31° apart), max 6 on screen
- label: Cooldown
  value: 1.5 × your delay (at least 0.5 s)
- label: Balance
  value: ×0.72
- label: If not in charge
  value: 'Every 4th attack: small blizzard (×0.4, 44 px, 1.8 s) on the nearest enemy within 320 px'
icon: items-ps/hold-item/chill-drive.png
sprite: true
names:
  es:
    name: CrioROM
    desc: 'Carga y suelta una ventisca delante de ti: una zona de hielo que daña a quien esté dentro; si eres de tipo Hielo, además ralentiza y congela'
  fr:
    name: Module Cryo
    desc: 'Chargez et lâchez un blizzard devant vous : une zone de glace qui blesse quiconque s''y trouve ; si vous êtes de type Glace, elle ralentit et gèle aussi'
  de:
    name: Gefriermodul
    desc: 'Lade einen Eissturm vor dir auf und lass ihn los: eine Eiszone, die jeden darin verletzt; bist du vom Typ Eis, verlangsamt und gefriert sie zusätzlich'
  it:
    name: Gelomodulo
    desc: 'Carica e scatena una bufera davanti a te: una zona di ghiaccio che danneggia chi vi si trova; se sei di tipo Ghiaccio, rallenta e congela anche'
  pt:
    name: Chill Drive
    desc: 'Carrega e solta uma nevasca à sua frente: uma zona de gelo que fere quem estiver dentro; se você for do tipo Gelo, também deixa lento e congela'
  ru:
    name: Крио-картридж
    desc: 'Заряди и выпусти перед собой метель: ледяная зона, которая ранит всех внутри; если ты типа Лед, еще и замедляет и замораживает'
  ja:
    name: フリーズカセット
    desc: チャージして目の前に吹雪を放つ：中にいる敵にダメージを与える氷のゾーン。こおりタイプなら、さらに動きを遅くして凍らせる
  ko:
    name: 프리즈카세트
    desc: '앞에 눈보라를 모아 터뜨린다: 안에 있는 적에게 대미지를 주는 얼음 구역. 얼음 타입이면 감속과 빙결도 건다'
  zh:
    name: 冰冻卡带
    desc: 蓄力并在面前释放暴风雪：一片冰区，会伤害其中的敌人；若你是冰属性，还会减速并冰冻
  zt:
    name: 冰凍卡帶
    desc: 蓄力後在面前釋放暴風雪：一片冰凍區域，會傷害範圍內的所有人；如果你是冰屬性，還會使其減速並冰凍
---
Charge and release a blizzard in front of you: an ice zone that damages whoever is inside; if you are Ice-type, it also slows and freezes

## How it works
- It is a **weapon**: it only works as your equipped weapon ([Equipped weapon](../mechanics/arma_principal.html)); with another main weapon it only adds the small effect listed under "If not in charge". Your normal shots are not replaced.
- Balance: while this is your equipped weapon, the damage it deals is further multiplied by ×0.72. The multipliers below are applied before it.
- After each attack the weapon is ready again after 1.5 times your normal delay between shots, and never less than 0.5 s.
- Crits, burn, poison, slow and the other effects of your items apply to its hits, and its hits carry your Pokémon's type. See [Weapons and shot effects](../mechanics/armas.html).
- Hold the weapon key to charge (2 × your delay between shots, from 0.37 s to 1.2 s for a full charge), release to drop the blizzard (at least 25 % charge needed). The zone appears 90 to 240 px in front of you depending on the charge, with a radius from 46 to 98 px (+7 px per Size), and lasts 2.5 s (small charge) to 5.3 s (full).
- Every 0.25 s it deals ×0.38 to ×0.78 of your Damage (by charge) to each enemy inside; the same enemy is not hit twice within 0.2 s.
- **Ice-type only:** each hit slows the enemy for about 0.8 s, and every 3rd tick adds a freeze chance. Other types only get the damage. Several blizzards do not add their freezes or slows.
- Multishot drops up to 4 zones fanned 31° apart; at most 6 blizzards can exist at once.
- **If not in charge:** every 4th attack, a small blizzard (×0.4 Damage, 44 px radius +5 per Size, 1.8 s) lands on the nearest enemy within 320 px.

## Stacking
- A second copy does nothing more.

{{< clip >}}
