---
title: Razor Fang
id: w_colmillo
kind: passive
category: weapon
family: weapon
tier: 4
pools:
- treasure
- boss
pool_weight: 1
details:
- label: Use
  value: Weapon key (Shift/F, right click, LB)
- label: Bite
  value: ×1.1 Damage to every enemy in a cone, 60 px (+7 per Size)
- label: Bites
  value: Up to 3 with multishot (40° apart)
- label: Defense Down
  value: +12 % damage taken per stack, max 3 stacks (+36 %), 4 s, refreshed by each bite
- label: Cooldown
  value: 1.5 × your delay (at least 0.35 s)
- label: Balance
  value: ×0.37
- label: If not in charge
  value: 'A fang orbits you: ×1.2 Damage, each enemy at most every 0.2 s'
icon: items-ps/evo-item/razor-fang.png
sprite: true
names:
  es:
    name: Colmillo Agudo
    desc: 'Muerdes lo que tienes delante; cada mordisco deja Defensa baja: el enemigo recibe más daño de todo lo que hagas (hasta +36 %)'
  fr:
    name: Croc Rasoir
    desc: 'Vous mordez ce qui est devant vous ; chaque morsure inflige Défense baissée : l''ennemi subit plus de dégâts de tout ce que vous faites (jusqu''à +36 %)'
  de:
    name: Scharfzahn
    desc: 'Du beißt in alles vor dir; jeder Biss hinterlässt Verteidigung gesenkt: Der Gegner erleidet mehr Schaden von allem, was du tust (bis zu +36 %)'
  it:
    name: Affilodente
    desc: 'Mordi ciò che hai davanti; ogni morso lascia Difesa bassa: il nemico subisce più danni da tutto ciò che fai (fino a +36 %)'
  pt:
    name: Presa Afiada
    desc: 'Você morde o que estiver à frente; cada mordida deixa Defesa baixa: o inimigo recebe mais dano de tudo que você fizer (até +36%)'
  ru:
    name: Острый клык
    desc: 'Кусаешь все, что перед тобой; каждый укус оставляет пониженную Защиту: враг получает больше урона от всего, что ты делаешь (до +36 %)'
  ja:
    name: するどいキバ
    desc: 目の前の相手にかみつきます。かみつくたびに防御ダウンが付き、敵が受ける全ダメージが増えます（最大+36%）
  ko:
    name: 예리한이빨
    desc: 앞에 있는 것을 깨문다. 깨물 때마다 방어 하락이 쌓여 적이 모든 공격에 더 큰 대미지를 받는다(최대 +36%)
  zh:
    name: 锐利之牙
    desc: 你会咬住面前的目标；每次咬击都会附加防御下降：敌人受到你所有攻击的伤害都会增加（最多+36%）
  zt:
    name: 銳利之牙
    desc: 啃咬前方的目標；每次啃咬都會造成「防禦降低」：敵人受到你所有攻擊的傷害都會提高（最多+36 %）
---
You bite whatever is in front of you; each bite leaves Defense Down: the enemy takes more damage from everything you do (up to +36 %)

## How it works
- It is a **weapon**: it only works as your equipped weapon ([Equipped weapon](../mechanics/arma_principal.html)); with another main weapon it only adds the small effect listed under "If not in charge". Your normal shots are not replaced.
- Balance: while this is your equipped weapon, the damage it deals is further multiplied by ×0.37. The multipliers below are applied before it.
- After each attack the weapon is ready again after 1.5 times your normal delay between shots, and never less than 0.35 s.
- Crits, burn, poison, slow and the other effects of your items apply to its hits, and its hits carry your Pokémon's type. See [Weapons and shot effects](../mechanics/armas.html).
- Each attack is a bite in a cone in front of you: reach 60 px (+7 per Size), about 49° each side. It hits every enemy in the cone for ×1.1 of your Damage and breaks crates in front of you.
- Multishot adds bites (up to 3, 40° apart); extra-direction items add more.
- **Defense Down:** each bite on an enemy that survives adds a stack: +12 % damage taken from your hits, up to 3 stacks (+36 %). Stacks last 4 s and each new bite restarts the 4 s; after they expire it starts again at one stack.
- **If not in charge:** a fang circles you about once a second and hits enemies it touches (14 px +3 per Size) for ×1.2 Damage, each enemy at most every 0.2 s. It does not apply Defense Down.

## Stacking
- A second copy does nothing more.

{{< clip >}}
