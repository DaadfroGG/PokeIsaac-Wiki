---
title: Fossile Griffe
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
- label: Coût
  value: Un demi-cœur (d'abord un demi-cœur d'âme)
- label: Dégâts
  value: ×1,4 par utilisation (×1,96 après deux)
- label: Par salle
  value: 2 utilisations
- label: Charge
  value: Aucune
icon: items-ps/fossil/claw.png
sprite: true
names:
  en:
    name: Claw Fossil
    desc: You lose half a heart and deal 40 % more damage in this room (up to twice; no charge)
  es:
    name: Fósil Garra
    desc: Pierdes medio corazón y pegas un 40 % más en esta sala (hasta dos veces; sin carga)
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
Vous perdez un demi-cœur et infligez 40 % de dégâts en plus dans cette salle (deux fois max. ; sans charge)

## Fonctionnement
- Chaque utilisation coûte un demi-cœur et ne demande aucune charge. Si vous avez des [cœurs d'âme](../mechanics/corazones_alma.html), elle prend un demi-cœur d'âme à la place. Payer ainsi ne compte pas comme un coup reçu.
- Dans la salle où vous l'utilisez, vos Dégâts sont multipliés par 1,4, puis encore par 1,4 après la deuxième utilisation (×1,96). Une troisième utilisation dans la même salle est refusée.
- Il est refusé s'il devait vous tuer : sans cœur d'âme et avec un seul demi-cœur, il ne marche pas.
- Le bonus appartient à la salle : il s'arrête quand vous partez et revient si vous y retournez, tant que vous ne l'avez pas utilisé ailleurs entre-temps.
- C'est un multiplicateur de votre stat de Dégâts (affiché sur le HUD), donc il suit les [rendements décroissants](../mechanics/rendimientos.html) des multiplicateurs (plein jusqu'à ×2,3, total plafonné à ×3).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : une utilisation paie deux fois et donne les deux bonus d'un coup (×1,96).
