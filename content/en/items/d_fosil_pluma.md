---
title: Plume Fossil
id: d_fosil_pluma
kind: passive
category: defense
family: defense
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Trigger
  value: The first hit you take in each room
- label: Birds
  value: 2 Pidgey
- label: Duration
  value: Until you leave the room
- label: Damage
  value: Your Damage (at least 2)
icon: items-ps/fossil/plume.png
sprite: true
names:
  es:
    name: Fósil Pluma
    desc: El primer golpe que recibes en cada sala llama a dos Pidgey que atacan a los enemigos
  fr:
    name: Fossile Plume
    desc: Le premier coup que vous recevez dans chaque salle appelle deux Roucool qui attaquent les ennemis
  de:
    name: Federfossil
    desc: Der erste Treffer, den du in jedem Raum einsteckst, ruft zwei Taubsi, die Gegner angreifen
  it:
    name: Fossilpiuma
    desc: Il primo colpo che subisci in ogni stanza chiama due Pidgey che attaccano i nemici
  pt:
    name: Fóssil Pluma
    desc: O primeiro golpe que você recebe em cada sala chama dois Pidgey que atacam os inimigos
  ru:
    name: Окаменелость-перо
    desc: Первый удар, который ты получаешь в каждой комнате, призывает двух Пиджи, атакующих врагов
  ja:
    name: はねのカセキ
    desc: 各部屋で最初に受けた攻撃で、ポッポ2匹を呼び、敵を攻撃させる
  ko:
    name: 깃털화석
    desc: 각 방에서 처음 공격을 받으면 구구 2마리를 불러 적을 공격한다
  zh:
    name: 羽毛化石
    desc: 每个房间中你受到的第一次攻击，会召唤两只波波去攻击敌人
  zt:
    name: 羽毛化石
    desc: 在每個房間第一次受到攻擊時，會叫來兩隻波波攻擊敵人
---
The first hit you take in each room calls two Pidgey that attack enemies

## How it works
- The first hit that hurts you in each room calls two Pidgey next to you (one on each side).
- They attack enemies with your Damage (at least 2) until you leave the room, then they disappear. They don't count toward your [companion](../mechanics/companeros.html) limit.
- It works once per room. A new room, a new call.

## Stacking
- It does not stack: a second copy adds nothing.
