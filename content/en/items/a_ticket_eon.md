---
title: Eon Ticket
id: a_ticket_eon
kind: active
family: ability
tier: 4
pools:
- boss
- secret
pool_weight: 2
charge: 2
details:
- label: Copies
  value: Every item on a pedestal
- label: Shop items
  value: The copy has the same price
- label: Not copied
  value: Devil deals
- label: Uses
  value: 1, then it is gone
icon: items-ps/key-item/eon-ticket.png
sprite: true
names:
  es:
    name: Ticket Eón
    desc: Duplica los objetos de los pedestales de la sala. Se gasta al usarlo
  fr:
    name: Passe Éon
    desc: Duplique les objets des piédestaux de la salle. Disparaît après usage
  de:
    name: Äon-Ticket
    desc: Verdoppelt die Items auf den Sockeln des Raums. Wird beim Benutzen verbraucht
  it:
    name: Biglietto Eone
    desc: Duplica gli oggetti sui piedistalli della stanza. Si consuma all'uso
  pt:
    name: Bilhete Eon
    desc: Duplica os itens dos pedestais da sala. É consumido ao usar
  ru:
    name: Эон-билет
    desc: Удваивает предметы на пьедесталах комнаты. Расходуется при использовании
  ja:
    name: むげんのチケット
    desc: 部屋の台座のどうぐを複製する。使うとなくなる
  ko:
    name: 무한티켓
    desc: 방에 있는 받침대의 아이템을 복제한다. 사용하면 사라진다
  zh:
    name: 无限船票
    desc: 使房间基座上的道具翻倍。使用后消耗
  zt:
    name: 無限船票
    desc: 複製房間台座上的道具。使用後就會消耗掉
---
Duplicates the items on the room's pedestals. Used up on use

## How it works
- Every item on a pedestal in the room that hasn't been taken gets a copy on a new pedestal next to it.
- A shop item's copy costs the same price. Devil deals (paid with health) are not copied, and a copy can't be copied again.
- If the original is part of a [choose-one](../mechanics/elegir_uno.html) set, the copy joins the same set.
- The ticket is used up: it disappears after one use.
- With no item to copy, nothing happens and the ticket is kept.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: the items are only copied once.
