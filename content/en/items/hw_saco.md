---
title: Candy Sack
id: hw_saco
kind: passive
category: defense
family: supersecret
tier: 1
pools:
- supersecret
pool_weight: 1
details:
- label: Treat
  value: ½ soul heart
- label: Trick
  value: Enemies start with 25 % less health (not bosses)
- label: Chance
  value: 50 % each
- label: Frequency
  value: Once per room
icon: items-ps/key-item/loot-sack.png
sprite: true
names:
  es:
    name: Saco de Golosinas
    desc: 'Al entrar en una sala con enemigos: ¡truco o trato! Trato: medio corazón de alma. Truco: los enemigos empiezan con un 25 % menos de vida.'
  fr:
    name: Sac de Friandises
    desc: 'En entrant dans une salle avec des ennemis : des bonbons ou un sort ! Bonbon : un demi-cœur d''âme. Sort : les ennemis commencent avec 25 % de vie en moins.'
  de:
    name: Bonbonsack
    desc: 'Beim Betreten eines Raums mit Gegnern: Süßes oder Saures! Süßes: ein halbes Seelenherz. Saures: Die Gegner starten mit 25 % weniger Leben.'
  it:
    name: Sacco di Dolcetti
    desc: 'Entrando in una stanza con nemici: dolcetto o scherzetto! Dolcetto: mezzo cuore d''anima. Scherzetto: i nemici iniziano con il 25 % di vita in meno.'
  pt:
    name: Saco de Doces
    desc: 'Ao entrar em uma sala com inimigos: doces ou travessuras! Doce: meio coração de alma. Travessura: os inimigos começam com 25% menos vida.'
  ru:
    name: Мешок сладостей
    desc: 'При входе в комнату с врагами: шалость или угощение! Угощение: пол-сердца души. Шалость: враги начинают с 25 % меньшим здоровьем.'
  ja:
    name: おかしぶくろ
    desc: 敵のいる部屋に入ると、トリック・オア・トリート！トリート：ソウルハート半分。トリック：敵のHPが25%減った状態で開始。
  ko:
    name: 사탕 주머니
    desc: '적이 있는 방에 들어갈 때: 트릭 오어 트릿! 트릿: 영혼 하트 반 칸. 트릭: 적이 체력 25% 적게 시작한다.'
  zh:
    name: 糖果袋
    desc: 进入有敌人的房间时：不给糖就捣蛋！给糖：半颗灵魂之心。捣蛋：敌人开局生命-25%。
  zt:
    name: 糖果袋
    desc: 進入有敵人的房間時：不給糖就搗蛋！給糖：半顆靈魂之心。搗蛋：敵人一開始生命減少25%。
---
When you enter a room with enemies: trick or treat! Treat: half a soul heart. Trick: enemies start with 25% less health.

## How it works
- When you enter a room that still has enemies, it is trick or treat: a 50 % chance each.
- Treat: you gain half a soul heart.
- Trick: every non-boss enemy in the room starts with 25 % less health (at least 1 left).
- It doesn't work in boss rooms, and only once per room.

## Stacking
- A second copy changes nothing: the roll still happens once per room.
