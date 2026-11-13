---
title: Claw Fossil
id: a_fosil_garra
kind: active
family: ability
tier: 2
pools:
- devil
- treasure
pool_weight: 2
charge: 1
details:
- label: Cost
  value: Half a heart (a soul half-heart first)
- label: Damage
  value: ×1.4 per use (×1.96 after two)
- label: Per room
  value: 2 uses
- label: Charge
  value: None needed
icon: items-ps/fossil/claw.png
sprite: true
names:
  es:
    name: Fósil Garra
    desc: Pierdes medio corazón y pegas un 40 % más en esta sala (hasta dos veces; sin carga)
  fr:
    name: Fossile Griffe
    desc: Vous perdez un demi-cœur et infligez 40 % de dégâts en plus dans cette salle (deux fois max. ; sans charge)
  de:
    name: Klauenfossil
    desc: Du verlierst ein halbes Herz und richtest in diesem Raum 40 % mehr Schaden an (bis zu zweimal; ohne Ladung)
  it:
    name: Fossilunghia
    desc: Perdi mezzo cuore e infliggi il 40 % di danni in più in questa stanza (fino a due volte; senza carica)
  pt:
    name: Fóssil Garra
    desc: Você perde meio coração e causa 40% mais dano nesta sala (até duas vezes; sem carga)
  ru:
    name: Окаменелость-коготь
    desc: Теряешь полсердца и наносишь на 40 % больше урона в этой комнате (до двух раз; без заряда)
  ja:
    name: ツメのカセキ
    desc: ハートが半分減り、この部屋では与えるダメージが40%増える（最大2回、チャージなし）
  ko:
    name: 발톱화석
    desc: 하트 반 칸을 잃는 대신 이 방에서 대미지가 40% 늘어난다(최대 2번, 충전 없음)
  zh:
    name: 爪子化石
    desc: 失去半颗心，并在本房间多造成40%伤害（最多两次；无需充能）
  zt:
    name: 爪子化石
    desc: 失去半顆愛心，並在這個房間造成多40 %的傷害（最多兩次；無需充能）
---
You lose half a heart and deal 40 % more damage in this room (up to twice; no charge)

## How it works
- Each use costs half a heart and needs no charge. If you have [soul hearts](../mechanics/corazones_alma.html), it takes half a soul heart instead. Paying this way doesn't count as being hit.
- In the room where you use it, your Damage is multiplied by 1.4, then by 1.4 again after the second use (×1.96). A third use in the same room is refused.
- It can't be used if it would kill you: with no soul heart and only half a heart left, it is refused.
- The bonus belongs to the room: it stops when you leave and comes back if you return to that room, as long as you haven't used it somewhere else since.
- It is a multiplier on your Damage stat (shown on the HUD), so it follows the [diminishing returns](../mechanics/rendimientos.html) on multipliers (full up to ×2.3, total capped at ×3).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): one press pays twice and gives both boosts at once (×1.96).
