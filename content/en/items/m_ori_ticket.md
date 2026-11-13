---
title: AuroraTicket
id: m_ori_ticket
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Wrap
  value: Once per shot
- label: Exit
  value: Opposite side of the room
icon: items-ps/key-item/auroraticket.png
sprite: true
names:
  es:
    name: Ori-Ticket
    desc: Tus disparos que llegan a una pared salen por el lado contrario de la sala
  fr:
    name: Ticketaurora
    desc: Vos tirs qui atteignent un mur ressortent du côté opposé de la salle
  de:
    name: Auroraticket
    desc: Deine Schüsse, die eine Wand erreichen, treten auf der gegenüberliegenden Seite des Raums wieder aus
  it:
    name: Bigl. Aurora
    desc: I tuoi tiri che arrivano a un muro escono dal lato opposto della stanza
  pt:
    name: Passe Aurora
    desc: Seus tiros que chegam a uma parede saem pelo lado oposto da sala
  ru:
    name: Аврора-билет
    desc: Твои выстрелы, долетевшие до стены, выходят с противоположной стороны комнаты
  ja:
    name: オーロラチケット
    desc: 壁に届いたショットが、部屋の反対側から出てくる
  ko:
    name: 오로라티켓
    desc: 벽에 닿은 탄이 방 반대편에서 나온다
  zh:
    name: 极光船票
    desc: 你的弹到达墙壁后会从房间另一侧飞出
  zt:
    name: 極光船票
    desc: 你的彈碰到牆壁時會從房間另一側飛出
---
Your shots that reach a wall come out on the opposite side of the room

## How it works
- A shot that reaches the edge of the room comes out on the opposite side and keeps flying instead of disappearing. This happens once per shot.
- If you also have Bounce, the shot bounces first and only wraps when it has no bounces left. Child shots (fragments, splits) do not wrap.

## Stacking
- It does not stack: a second copy does not allow a second wrap.
