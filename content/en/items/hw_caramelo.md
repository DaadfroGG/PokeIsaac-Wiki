---
title: Ghost Candy
id: hw_caramelo
kind: passive
category: utility
family: supersecret
tier: 1
pools:
- supersecret
pool_weight: 1
details:
- label: Candy
  value: Every 12 enemies defeated
- label: Damage
  value: +0.15 per candy (max. 10, so +1.5)
- label: Duration
  value: Rest of the run
icon: items-ps/evo-item/berry-sweet.png
sprite: true
names:
  es:
    name: Caramelo Fantasma
    desc: 'Cada 12 enemigos que derrotas te dan un caramelo: daño +0,15 para el resto de la partida (hasta +1,5).'
  fr:
    name: Bonbon Fantôme
    desc: 'Tous les 12 ennemis vaincus, vous gagnez un bonbon : dégâts +0,15 pour le reste de la partie (jusqu''à +1,5).'
  de:
    name: Geisterbonbon
    desc: 'Je 12 besiegte Gegner geben dir ein Bonbon: +0,15 Schaden für den Rest der Partie (bis zu +1,5).'
  it:
    name: Caramella Spettro
    desc: 'Ogni 12 nemici che sconfiggi ti danno una caramella: danni +0,15 per il resto della partita (fino a +1,5).'
  pt:
    name: Doce Fantasma
    desc: 'A cada 12 inimigos derrotados, você ganha um doce: dano +0,15 pelo resto da partida (até +1,5).'
  ru:
    name: Призрачная конфета
    desc: 'Каждые 12 побежденных врагов дают конфету: урон +0,15 до конца забега (до +1,5).'
  ja:
    name: ゴーストキャンディ
    desc: 敵を12体倒すごとにキャンディをもらえます：プレイ中ずっとダメージ+0.15（最大+1.5）。
  ko:
    name: 고스트 사탕
    desc: '적을 12마리 쓰러뜨릴 때마다 사탕 1개를 얻는다: 남은 게임 동안 대미지 +0.15 (최대 +1.5).'
  zh:
    name: 幽灵糖果
    desc: 每击败12个敌人获得一颗糖果：本局剩余时间伤害+0.15（最多+1.5）。
  zt:
    name: 幽靈糖果
    desc: 每擊倒12個敵人就會得到一顆糖果：本局剩餘時間傷害+0.15（最多+1.5）。
---
Every 12 enemies you defeat give you a candy: +0.15 damage for the rest of the run (up to +1.5).

## How it works
- It counts the enemies you defeat from the moment you have it. Every 12th one gives you a candy.
- Each candy is Damage +0.15 for the rest of the run, up to 10 candies (120 enemies): +1.5.
- Bosses count like any other enemy.
- The bonus is a normal flat Damage bonus: it shows on the HUD and follows the [diminishing returns](../mechanics/rendimientos.html).

## Stacking
- A second copy does nothing more: same count, same cap.
