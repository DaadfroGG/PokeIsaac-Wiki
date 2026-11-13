---
title: Trainer Cap
id: gorra
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Chance
  value: 10 % per enemy defeated (not bosses)
- label: Companions at once
  value: Up to 2
- label: Damage
  value: 50 % of yours (at least 2 + 0.4 per floor)
- label: Shots
  value: About 1 every 0.5 s, within 380 px
- label: Duration
  value: Until you leave the room
icon: icons/items/gorra.png
sprite: true
names:
  es:
    name: Gorra de Entrenador
    desc: ¡Hazte con todos! A veces, un enemigo que derrotas se une a ti hasta que sales de la sala (máx. 2)
  fr:
    name: Casquette de Dresseur
    desc: Attrapez-les tous ! Parfois, un ennemi vaincu vous rejoint jusqu'à ce que vous quittiez la salle (max. 2)
  de:
    name: Trainerkappe
    desc: Schnapp sie dir alle! Manchmal schließt sich ein besiegter Gegner dir an, bis du den Raum verlässt (max. 2)
  it:
    name: Cappello da Allenatore
    desc: Acchiappali tutti! A volte un nemico che sconfiggi si unisce a te finché non esci dalla stanza (max 2)
  pt:
    name: Boné de Treinador
    desc: Pegue todos! Às vezes, um inimigo que você derrota se une a você até sair da sala (máx. 2)
  ru:
    name: Кепка тренера
    desc: Поймай их всех! Иногда побежденный враг присоединяется к тебе, пока ты не покинешь комнату (макс. 2)
  ja:
    name: トレーナーキャップ
    desc: ぜんぶつかまえよう！倒した敵が、部屋を出るまでなかまになることがある（最大2匹）
  ko:
    name: 트레이너 모자
    desc: 모두 잡아라! 가끔 쓰러뜨린 적이 방을 나갈 때까지 동료가 된다 (최대 2마리)
  zh:
    name: 训练家帽子
    desc: 抓住它们！有时被你击败的敌人会加入你，直到你离开房间（最多2个）
  zt:
    name: 訓練家帽子
    desc: 全部收服！有時你擊敗的敵人會加入你，直到你離開房間（最多2隻）
---
Gotta catch 'em all! Sometimes an enemy you defeat joins you until you leave the room (max. 2)

## How it works
- Each normal enemy you defeat has a 10 % chance to join you (Luck does not change it). Bosses never join.
- The new ally is the same Pokémon as the defeated enemy and has its type. It floats behind you like a [companion](../mechanics/companeros.html) and shoots the nearest enemy within 380 px, about once every 0.5 s.
- Each shot deals half your Damage, but never less than 2 + 0.4 per floor. Items that boost companions also boost it.
- At most 2 of these allies at once. They do not count toward your normal companion limit.
- They all leave as soon as you walk into another room.

## Stacking
- A second copy does nothing more: still 10 % and 2 allies at most.
