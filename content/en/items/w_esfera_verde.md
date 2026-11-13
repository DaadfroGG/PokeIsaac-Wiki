---
title: Jade Orb
id: w_esfera_verde
kind: passive
category: weapon
family: weapon
tier: 4
pools:
- boss
pool_weight: 1
details:
- label: Charge
  value: 2.4 × your delay between shots, 0.43 to 1.2 s (min 25 % to release)
- label: Earthquake
  value: ×1 to ×3.4 Damage, radius 82 to 200 px (+10 per Size)
- label: Hits
  value: Ground enemies only (flying ones are ignored)
- label: Stun
  value: 0.4 s and knockback; bosses only take damage
- label: Rings
  value: 'Up to 3 with multishot: +16 % radius, -12 % damage each'
- label: Cooldown
  value: 1.5 × 1.6 × your delay (at least 0.75 s)
- label: Balance
  value: ×0.53
- label: If not in charge
  value: 'After 4 s of firing with enemies in the room: shake ×1.5, 80 px'
icon: items-ps/key-item/jade-orb.png
sprite: true
names:
  es:
    name: Esfera Verde
    desc: 'Mantén el disparo para cargar y suéltalo: un terremoto sacude el suelo a tu alrededor y daña, aturde y empuja a los enemigos que no vuelan'
  fr:
    name: Orbe Vert
    desc: 'Maintenez le tir pour charger, puis relâchez : un séisme secoue le sol autour de vous et blesse, étourdit et repousse les ennemis qui ne volent pas'
  de:
    name: Grüne Kugel
    desc: 'Halte die Schusstaste gedrückt, um aufzuladen, und lasse los: Ein Erdbeben erschüttert den Boden um dich herum und verletzt, betäubt und stößt Gegner zurück, die nicht fliegen'
  it:
    name: Sfera Verde
    desc: 'Tieni premuto il tiro per caricare e rilascialo: un terremoto scuote il terreno intorno a te e danneggia, stordisce e respinge i nemici che non volano'
  pt:
    name: Orbe Jade
    desc: 'Segure o tiro para carregar e solte: um terremoto sacode o chão ao seu redor e causa dano, atordoa e empurra os inimigos que não voam'
  ru:
    name: Нефритовая сфера
    desc: 'Зажми выстрел для заряда и отпусти: землетрясение сотрясает землю вокруг тебя, ранит, оглушает и отбрасывает нелетающих врагов'
  ja:
    name: もえぎいろのたま
    desc: ショットを長押ししてチャージし、離すと周囲の地面が揺れ、飛んでいない敵にダメージを与えてひるませ、押し返します
  ko:
    name: 연둣빛구슬
    desc: 공격을 길게 눌러 모았다가 떼면 주변 땅이 지진으로 흔들려, 날지 않는 적에게 대미지를 주고 기절시키고 밀쳐 낸다
  zh:
    name: 草绿色宝珠
    desc: 按住射击键蓄力，松开后：地震会撼动你周围的地面，对不会飞行的敌人造成伤害、眩晕并将其推开
  zt:
    name: 草綠色寶珠
    desc: 按住射擊鍵蓄力再放開：地震會撼動你周圍的地面，對不會飛行的敵人造成傷害、暈眩並將其推開
---
Hold fire to charge and release it: an earthquake shakes the ground around you and damages, stuns and pushes enemies that do not fly

## How it works
- It is a **weapon**: it only works as your equipped weapon ([Equipped weapon](../mechanics/arma_principal.html)); with another main weapon it only adds the small effect listed under "If not in charge". Your normal shots are not replaced.
- Balance: while this is your equipped weapon, the damage it deals is further multiplied by ×0.53. The multipliers below are applied before it.
- After each attack the weapon is ready again after 2.4 times your normal delay between shots, and never less than 0.75 s.
- Crits, burn, poison, slow and the other effects of your items apply to its hits, and its hits carry your Pokémon's type. See [Weapons and shot effects](../mechanics/armas.html).
- Hold the weapon key to charge (2.4 × your delay between shots, 0.43 to 1.2 s for a full charge), release to shake the ground (at least 25 % charge). The quake is centred on you.
- Radius 82 to 200 px (+10 per Size) and damage ×1 to ×3.4 of your Damage, depending on the charge.
- Only enemies that do not fly are hit. Non-boss enemies are also stunned for 0.4 s and pushed back; bosses only take the damage. It breaks crates in 80 % of the radius and rocks in 35 % of it.
- Multishot adds rings (up to 3): each one 0.15 s after the previous, with +16 % radius and -12 % damage.
- **If not in charge:** after 4 s of firing your normal shots with enemies in the room, a small quake (80 px radius, ×1.5 Damage) hits around you.

## Stacking
- A second copy does nothing more.

{{< clip >}}
