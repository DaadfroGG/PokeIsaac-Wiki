---
title: Enemy drops
id: botin_enemigos
color: '#ffd23c'
labels:
- text: MECHANIC
  color: '#ffd23c'
icon: icons/world/coin.png
details:
- label: Drop chance
  value: 6 % + 0.5 % per Luck (3.5 % to 10 %)
- label: What drops
  value: Coin 75 %, half heart 25 %
- label: Key
  value: 1.5 % + 0.3 % per Luck, only if nothing else dropped
- label: Bosses
  value: No normal drop
- label: Item drops
  value: At most 3 coins and 6 other pickups per room
names:
  es:
    name: Botín de los enemigos
    desc: Cada enemigo vencido puede soltar una moneda, medio corazón o una llave. La Suerte y algunos objetos cambian las probabilidades.
  fr:
    name: Butin des ennemis
    desc: Chaque ennemi vaincu peut lâcher une pièce, un demi-cœur ou une clé. La Chance et certains objets changent les chances.
  de:
    name: Beute von Gegnern
    desc: Jeder besiegte Gegner kann eine Münze, ein halbes Herz oder einen Schlüssel fallen lassen. Glück und einige Items ändern die Chancen.
  it:
    name: Bottino dei nemici
    desc: Ogni nemico sconfitto può lasciare una moneta, mezzo cuore o una chiave. La Fortuna e alcuni strumenti cambiano le probabilità.
  pt:
    name: Saque dos inimigos
    desc: Cada inimigo derrotado pode soltar uma moeda, meio coração ou uma chave. A Sorte e alguns itens mudam as chances.
  ru:
    name: Добыча с врагов
    desc: Каждый побеждённый враг может выронить монету, полсердца или ключ. Удача и некоторые предметы меняют шансы.
  ja:
    name: 敵のドロップ
    desc: 倒した敵はコイン、ハート半分、カギを落とすことがあります。運と一部の道具で確率が変わります。
  ko:
    name: 적 전리품
    desc: 쓰러뜨린 적은 동전, 하트 반 칸, 열쇠를 떨어뜨릴 수 있다. 행운과 일부 도구가 확률을 바꾼다.
  zh:
    name: 敌人掉落
    desc: 每个被击败的敌人都可能掉落硬币、半颗心或钥匙。幸运和部分道具会改变概率。
  zt:
    name: 敵人掉落
    desc: 每個被擊敗的敵人都可能掉落金幣、半顆愛心或鑰匙。幸運和部分道具會改變機率。
---
Every enemy you defeat can drop a coin, a half heart or a key. Luck and a few items change the odds.

## Normal drop
- Each defeated enemy rolls once: **6 % + 0.5 % per point of Luck** to drop something. Luck only counts from −5 to 8 here, so the chance goes from 3.5 % to 10 %.
- When it drops something, it is a [coin](../world/coin.html) 3 times out of 4, otherwise a [half heart](../world/halfheart.html).
- When it drops nothing, it gets a second roll: **1.5 % + 0.3 % per point of Luck** to drop a [key](../world/key.html).
- The drop appears where the enemy died.
- The chances use the Luck of the player who gets the kill: the last player who hit the enemy with a shot or an attack (player 1 if nobody did). Kills by companions, bombs and burns count like any other.
- Enemies summoned by other enemies drop like any other enemy.

| Luck | −5 | 0 | 2 | 4 | 6 | 8 or more |
|---|---|---|---|---|---|---|
| Something drops | 3.5 % | 6 % | 7 % | 8 % | 9 % | 10 % |
| Coin | 2.6 % | 4.5 % | 5.3 % | 6 % | 6.8 % | 7.5 % |
| Half heart | 0.9 % | 1.5 % | 1.8 % | 2 % | 2.3 % | 2.5 % |

## Bosses
- Bosses never roll the normal drop, and killing a boss does not trigger the items that react to kills (extra coins, kill counters, heals on kill). Bosses give their own rewards instead.

## Items that change drops
| Item | Effect |
|---|---|
| [Power-Up Pocket](../items/d_bolsillo_mejoras.html) | Doubles both chances: 12 % at Luck 0, up to 20 %; key 3 % + 0.6 % per Luck |
| [Max Lure](../items/cebo_max.html) | A separate 20 % chance of one more coin per kill, for the whole team |
| [Spell Tag](../items/hechizo.html) | 5 % + 0.5 % per Luck chance of a [soul heart](corazones_alma.html) per kill |
| [Poké Radar](../items/poke_radar.html) | Enemies it turns shiny drop 3 coins |
| [Relic Silver](../items/d_real_plata.html) | Enemies killed while turned to gold drop 2 coins |
| [Enigmatic Card](../items/m_nota_intrigante.html) | If the marked enemy is the first to fall, it drops 2 random pickups (heart, soul heart, key, bomb, nugget or coin) |
| [Pecha Berry](../held/pecha_berry.html) | Every 12th kill drops a half heart |
| [Bach's Food Tin](../held/bachs_food_tin.html) | Every 8th kill drops a coin |

## Limits on item drops
The pickups added by items (the table above, except Power-Up Pocket and Spell Tag, which change the normal drop) have limits:
- At most **3 coins** (nuggets included) **per room**, and **6 + half the floor number** per floor.
- At most **6 other pickups per room**, and **14 + half the floor number** per floor.
- No item drop at all while 40 pickups are already lying in the room.
The normal drop has no such limit.

## Live events
- During a live event with the gold rule, the normal drop chance is ×1.5 (50 % at most), and so are coins for clearing rooms and beating bosses.

See also: [Crate and barrel loot](botin_rompibles.html), [Pokédollar](../world/coin.html).
