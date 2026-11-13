---
title: Leek
id: w_puerro
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Slash
  value: ×0.5 Damage in an arc, 75 px (+6 per Size), about 63° each side; plus a wave ×0.4
- label: Fury Cutter
  value: 'Each slash that hits: +15 % damage, +6 px, 5 % faster (up to 4)'
- label: Spin
  value: 'At streak 4: 360°, ×1.6 Damage, plus waves ×2 Damage; then the streak resets'
- label: Streak
  value: Resets on a miss or after 0.9 s without a hit
- label: Cooldown
  value: 1.5 × your delay (at least 0.3 s)
- label: Balance
  value: ×0.31
- label: Also
  value: Cancels enemy shots in the arc
- label: If not in charge
  value: Slash (×0.5 + wave) once per second on an enemy within 72 px
icon: items-ps/hold-item/stick.png
sprite: true
names:
  es:
    name: Puerro
    desc: 'Tajos de puerro encadenados: cada tajo que acierta sube tu Corte Furia (más daño, alcance y velocidad, hasta 4); el siguiente es un giro completo. Fallar lo reinicia'
  fr:
    name: Poireau
    desc: 'Coups de poireau enchaînés : chaque coup réussi augmente votre Taillade (plus de dégâts, de portée et de vitesse, jusqu''à 4) ; le suivant est une rotation complète. Rater la réinitialise'
  de:
    name: Lauchstange
    desc: 'Verkettete Lauchstangen-Hiebe: Jeder Treffer erhöht deine Zornklinge (mehr Schaden, Reichweite und Tempo, bis zu 4); der nächste ist eine volle Drehung. Ein Fehlschlag setzt sie zurück'
  it:
    name: Gambo
    desc: 'Fendenti di porro concatenati: ogni fendente che va a segno aumenta il tuo Tagliofuria (più danni, gittata e velocità, fino a 4); il successivo è un giro completo. Mancare lo azzera'
  pt:
    name: Alho-poró
    desc: 'Cortes de alho-poró encadeados: cada corte que acerta aumenta o seu Corte Fúria (mais dano, alcance e velocidade, até 4); o seguinte é um giro completo. Errar reinicia'
  ru:
    name: Порей
    desc: 'Цепочка взмахов пореем: каждый попавший взмах повышает Яростный разрез (больше урона, дальности и скорости, до 4); следующий - полный оборот. Промах сбрасывает его'
  ja:
    name: ながねぎ
    desc: 連なるネギの斬撃：当たるたびにれんぞくぎりが上がり（ダメージ・射程・速度が増加、最大4）、次は一回転斬り。外すとリセットされます
  ko:
    name: 대파
    desc: '대파 연속 베기: 맞힐 때마다 연속자르기가 올라간다(대미지, 사거리, 속도 증가, 최대 4). 그다음 공격은 한 바퀴 회전 베기. 빗나가면 초기화'
  zh:
    name: 大葱
    desc: 连续的大葱斩击：每次命中都会提升你的连斩（更高伤害、范围和速度，最多4层）；下一击是完整回旋。未命中会重置
  zt:
    name: 大蔥
    desc: 連續的大蔥斬擊：每次命中都會提升你的連斬（傷害、距離和速度提高，最多4層）；下一擊會是完整的迴旋斬。沒打中就會重置
---
Chained leek slashes: every slash that hits raises your Fury Cutter (more damage, reach and speed, up to 4); the next one is a full spin. Missing resets it

## How it works
- It is a **weapon**: it only works as your equipped weapon ([Equipped weapon](../mechanics/arma_principal.html)); with another main weapon it only adds the small effect listed under "If not in charge". Your normal shots are not replaced.
- Balance: while this is your equipped weapon, the damage it deals is further multiplied by ×0.31. The multipliers below are applied before it.
- After each attack the weapon is ready again after 1.5 times your normal delay between shots, and never less than 0.3 s.
- Crits, burn, poison, slow and the other effects of your items apply to its hits, and its hits carry your Pokémon's type. See [Weapons and shot effects](../mechanics/armas.html).
- Each attack is a slash in an arc in front of you: reach 75 px (+6 per Size), about 63° each side. It hits every enemy in the arc for ×0.5 of your Damage, breaks crates, destroys enemy shots inside the arc, and sends a short wave (×0.4 Damage, range 0.6 × your Range, pierces 1 + your pierce).
- **Fury Cutter:** every slash that hits at least one enemy raises the streak (max 4). Each level adds +15 % damage (slash and wave), +6 px reach and makes the next attack 5 % faster.
- **Spin:** with the streak at 4, the next attack is a full 360° spin (reach +24 px, ×1.6 Damage) that also sends waves of ×2 Damage (radius 16 px, range 1.1 × Range, pierce everything). The streak then resets to 0.
- A slash that hits nothing, or 0.9 s without a hit, resets the streak.
- Multishot widens the arc and adds waves (up to 3, 20° apart on the spin).
- **If not in charge:** when an enemy is within 72 px (+6 per Size), you slash it automatically (×0.5 Damage and a wave), at most once per second.

## Stacking
- A second copy does nothing more.

{{< clip >}}
