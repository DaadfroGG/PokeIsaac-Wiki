---
title: Red Orb
id: w_prisma_rojo
kind: passive
category: weapon
family: weapon
tier: 4
pools:
- boss
- devil
pool_weight: 1
stats:
- text: Fire rate -
  good: false
details:
- label: Meter
  value: +6.25 % per hit (once per delay between shots) and +6 % per KO
- label: Hyper Beam
  value: 0.6 s, 12 ticks (every 0.05 s) of ×2.3 Damage
- label: Beams
  value: Up to 5 with multishot, 15° apart; width 22 px (+5 per Size)
- label: Rest
  value: 0.57 s without attacking after the beam
- label: Effects
  value: Bounce (max 4), homing, crits, growth and your items' effects
- label: Balance
  value: ×0.33 (≈ ×0.76 per tick)
- label: Stat
  value: Fire rate -
- label: Module
  value: Works with any weapon
icon: items-ps/hold-item/red-orb.png
sprite: true
names:
  es:
    name: Prisma Rojo
    desc: Tus golpes cargan un medidor; lleno, tu siguiente ataque suelta un Hiperrayo enorme que lo atraviesa todo (y luego descansas un instante). Vale con cualquier arma
  fr:
    name: Gemme Rouge
    desc: Vos coups remplissent une jauge ; pleine, votre prochaine attaque libère un énorme Ultralaser qui transperce tout (puis vous soufflez un instant). Fonctionne avec n'importe quelle arme
  de:
    name: Roter Edelstein
    desc: Deine Treffer laden eine Leiste; ist sie voll, entfesselt dein nächster Angriff einen riesigen Hyperstrahl, der alles durchbohrt (danach ruhst du kurz). Funktioniert mit jeder Waffe
  it:
    name: Gemma rossa
    desc: I tuoi colpi caricano un indicatore; quando è pieno, il tuo prossimo attacco scatena un enorme Iper Raggio che trapassa tutto (poi riposi un istante). Vale con qualsiasi arma
  pt:
    name: Esfera Vermelha
    desc: Seus golpes carregam um medidor; cheio, seu próximo ataque solta um Hiper Raio enorme que atravessa tudo (e depois você descansa um instante). Vale com qualquer arma
  ru:
    name: Красная сфера
    desc: Твои удары заполняют шкалу; когда она полна, следующая атака выпускает огромный Гипер-луч, пробивающий все (потом ты на миг переводишь дух). Работает с любым оружием
  ja:
    name: べにいろのたま
    desc: 攻撃が当たるとゲージがたまり、満タンで次の攻撃が全てを貫く巨大なはかいこうせんになる（その後、一瞬休む）。どんな武器でも使える
  ko:
    name: 주홍구슬
    desc: 공격하면 게이지가 찬다. 가득 차면 다음 공격이 모든 것을 관통하는 거대한 파괴광선을 쏜다(이후 잠깐 쉰다). 어떤 무기와도 쓸 수 있다
  zh:
    name: 朱红色宝珠
    desc: 你的攻击会填充计量槽；填满后，下一次攻击会释放一道贯穿一切的巨大破坏光线（随后短暂休息）。适用于任何武器
  zt:
    name: 朱紅色寶珠
    desc: 你的攻擊會累積量表；量表滿時，下一次攻擊會放出貫穿一切的巨大破壞光線（之後需要稍作休息）。任何武器都適用
---
Your hits fill a meter; when it is full, your next attack unleashes a huge Hyper Beam that pierces everything (then you rest for a moment). Works with any weapon

## How it works
- It is a **module**: it works with any weapon and does not replace it. It makes your fire rate slightly worse (+2 points between shots, about 0.03 s).
- **Meter:** each hit of your normal shots and weapons fills 6.25 % (at most once per delay between shots), and each KO adds 6 %. It does not fill during the beam or the rest, and the beam's own hits do not count.
- **Release:** when the meter is full, your next shot (a press of the shoot keys) fires the Hyper Beam instead. The beam follows your aim, turning up to 5° per tick, pierces every enemy and breaks crates. It lasts 0.6 s and hits 12 times (every 0.05 s) for ×2.3 of your Damage, times a ×0.33 balance factor (about ×0.76 per tick, ×9 over the whole beam on one enemy).
- Multishot adds beams (up to 5, 15° apart); each beam is 22 px wide (+5 per Size). Bounce (up to 4 bounces off walls), homing (the beam bends toward enemies), Growth, crits (rolled on every tick) and your other items' effects apply.
- After the beam you cannot attack for 0.57 s.

## Stacking
- A second copy does nothing more.

{{< clip >}}
