---
title: Damp Rock
id: w_roca_lluvia
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
  value: 3.2 × your delay between shots, 0.6 to 1.8 s (min 30 % to release)
- label: Rock Slide
  value: 4 to 7 rocks per line, first at 50 px then every 52 px; one falls every 0.08 s
- label: Rock
  value: ×0.97 to ×1.4 Damage, radius 38 px (+5 per Size), stuns 0.4 s
- label: Lines
  value: Up to 3 with multishot (24° apart), 24 rocks max
- label: Cooldown
  value: 0.3 s after release
- label: Balance
  value: ×0.36
- label: If not in charge
  value: 'Every 5th attack: 2 rocks on the nearest enemies (×0.8, 30 px)'
icon: items-ps/hold-item/damp-rock.png
sprite: true
names:
  es:
    name: Roca Lluvia
    desc: 'Carga y suelta una avalancha: una fila de rocas cae una tras otra hacia donde apuntas y aturde a quien alcanza'
  fr:
    name: Roche Humide
    desc: 'Chargez et relâchez une avalanche : une rangée de rochers tombe l''un après l''autre là où vous visez et étourdit ceux qu''elle touche'
  de:
    name: Nassbrocken
    desc: 'Lade auf und lass eine Lawine los: Eine Reihe Felsen fällt nacheinander dorthin, wohin du zielst, und betäubt, wen sie trifft'
  it:
    name: Rocciaumida
    desc: 'Carica e rilascia una valanga: una fila di rocce cade una dopo l''altra dove mira e stordisce chi colpisce'
  pt:
    name: Rocha da Chuva
    desc: 'Carregue e solte uma avalanche: uma fila de rochas cai uma após a outra para onde você mira e atordoa quem atingir'
  ru:
    name: Влажный камень
    desc: 'Заряди и отпусти лавину: ряд камней падает один за другим туда, куда ты целишься, и оглушает задетых'
  ja:
    name: しめったいわ
    desc: チャージして放つと岩なだれが発生：狙った方向へ岩が1列に次々と落ち、当たった相手をスタンさせる
  ko:
    name: 축축한바위
    desc: '충전 후 발사하면 눈사태: 조준한 방향으로 바위가 줄줄이 떨어져 맞은 적을 기절시킨다'
  zh:
    name: 潮湿岩石
    desc: 蓄力并释放岩崩：一排岩石朝你瞄准的方向接连落下，并使命中的目标眩晕
  zt:
    name: 潮濕岩石
    desc: 蓄力後放出雪崩：一排岩石朝你瞄準的方向接連落下，被砸中的會暈眩
---
Charge and release an avalanche: a line of rocks falls one after another where you aim and stuns whoever it hits

## How it works
- It is a **weapon**: it only works as your equipped weapon ([Equipped weapon](../mechanics/arma_principal.html)); with another main weapon it only adds the small effect listed under "If not in charge". Your normal shots are not replaced.
- Balance: while this is your equipped weapon, the damage it deals is further multiplied by ×0.36. The multipliers below are applied before it.
- After each attack the weapon is ready again after 0.3 s.
- Crits, burn, poison, slow and the other effects of your items apply to its hits, and its hits carry your Pokémon's type. See [Weapons and shot effects](../mechanics/armas.html).
- Hold the weapon key to charge (3.2 × your delay between shots, 0.6 to 1.8 s for a full charge), release to call the avalanche (at least 30 % charge). The line goes in your aim direction and stops at the room's edge.
- 4 to 7 rocks per line (by charge). The first lands 50 px away, then one every 52 px, each falling 0.08 s after the previous one.
- Each rock explodes on impact: radius 38 px (+5 per Size), ×0.97 to ×1.4 of your Damage (by charge), stuns non-boss enemies for 0.4 s. Flying enemies are hit too.
- Multishot adds lines (up to 3, 24° apart); extra-direction items add lines of 3 rocks. At most 24 rocks per release.
- **If not in charge:** every 5th attack, rocks fall on the 2 nearest enemies (radius 30 px +4 per Size, ×0.8 Damage, stun 0.4 s).

## Stacking
- A second copy does nothing more.

{{< clip >}}
