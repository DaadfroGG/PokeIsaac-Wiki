---
title: Snowball
id: w_bola_nieve
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
pool_weight: 2
details:
- label: Ball
  value: ×0.68 to ×1.43 Damage and 9 to 33 px as it travels
- label: Hits
  value: Pierces everything; the same enemy again every 0.23 s
- label: Ice-type only
  value: Slows 1.3 s on each hit
- label: Break
  value: 6 ice chunks (×0.28 of the ball's base damage, 110 px)
- label: Balls
  value: Up to 3 with multishot (17° apart)
- label: Cooldown
  value: 1.5 × 1.8 × your delay (at least 0.55 s)
- label: Balance
  value: ×0.45
- label: If not in charge
  value: One small snowball bounces around the room (×0.8)
icon: items-ps/hold-item/snowball.png
sprite: true
names:
  es:
    name: Bola de Nieve
    desc: 'Lanzas bolas de nieve que ruedan y CRECEN al avanzar: más grandes y con más daño (si eres de tipo Hielo, además ralentizan); al chocar con una pared se rompen en trozos'
  fr:
    name: Boule de Neige
    desc: 'Vous lancez des boules de neige qui roulent et GRANDISSENT en avançant : plus grosses et plus fortes (si vous êtes de type Glace, elles ralentissent aussi) ; elles éclatent en morceaux contre un mur'
  de:
    name: Schneeball
    desc: 'Du wirfst Schneebälle, die rollen und beim Vorankommen WACHSEN: größer und stärker (bist du vom Typ Eis, verlangsamen sie zusätzlich); beim Aufprall auf eine Wand zerspringen sie in Stücke'
  it:
    name: Palla di neve
    desc: 'Lanci palle di neve che rotolano e CRESCONO avanzando: più grandi e con più danni (se sei di tipo Ghiaccio, rallentano anche); contro un muro si spezzano in pezzi'
  pt:
    name: Bola de Neve
    desc: 'Você lança bolas de neve que rolam e CRESCEM ao avançar: maiores e com mais dano (se você for do tipo Gelo, também deixam lento); ao bater numa parede, se quebram em pedaços'
  ru:
    name: Снежок
    desc: 'Ты бросаешь снежки, которые катятся и РАСТУТ на ходу: становятся больше и сильнее (если ты типа Лед, еще и замедляют); при ударе о стену разлетаются на куски'
  ja:
    name: ゆきだま
    desc: 転がりながら育つ雪玉を投げる：進むほど大きく強くなり（こおりタイプなら、さらに動きを遅くする）、壁に当たると破片に砕ける
  ko:
    name: 눈덩이
    desc: '굴러가며 커지는 눈덩이를 던진다: 갈수록 커지고 강해진다(얼음 타입이면 감속도 건다). 벽에 부딪히면 조각으로 깨진다'
  zh:
    name: 雪球
    desc: 你投出会滚动并在前进中「变大」的雪球：更大、伤害更高（若你是冰属性，还会减速）；撞到墙壁时会碎成碎片
  zt:
    name: 雪球
    desc: 你會投出滾動並隨前進而「變大」的雪球：變得更大、更強（如果你是冰屬性，還會減速）；撞到牆壁會碎成小塊
---
You throw snowballs that roll and GROW as they travel: bigger and stronger (if you are Ice-type, they also slow); they shatter into pieces on hitting a wall

## How it works
- It is a **weapon**: it only works as your equipped weapon ([Equipped weapon](../mechanics/arma_principal.html)); with another main weapon it only adds the small effect listed under "If not in charge". Your normal shots are not replaced.
- Balance: while this is your equipped weapon, the damage it deals is further multiplied by ×0.45. The multipliers below are applied before it.
- After each attack the weapon is ready again after 1.8 times your normal delay between shots times 1.5, and never less than 0.55 s.
- Crits, burn, poison, slow and the other effects of your items apply to its hits, and its hits carry your Pokémon's type. See [Weapons and shot effects](../mechanics/armas.html).
- Each attack throws a slow snowball (0.55 × shot speed, range 1.1 × your Range). It pierces every enemy and hits the same enemy again every 0.23 s. Multishot adds balls (up to 3, 17° apart). Bounce and homing do not apply to it.
- It starts at 9 px radius (+2 per Size) and damage ×0.68, and grows with the distance travelled (full size after 85 % of the range): up to +24 px radius and ×1.43 damage.
- **Ice-type only:** each hit slows the enemy for 1.3 s.
- When the ball hits a wall or reaches the end of its range, it breaks into 6 ice chunks (×0.28 of the ball's base damage each, flying 110 px).
- Crits and the other effects of your items apply to the ball.
- **If not in charge:** one small snowball (10 px +2 per Size, ×0.8 Damage, hits each enemy every 0.2 s) rolls and bounces around the room by itself, as long as enemies are alive.

## Stacking
- A second copy does nothing more.

{{< clip >}}
