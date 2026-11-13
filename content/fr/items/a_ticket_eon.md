---
title: Passe Éon
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
  value: Chaque objet sur un piédestal
- label: Boutique
  value: La copie a le même prix
- label: Pas copiés
  value: Pactes du démon
- label: Utilisations
  value: 1, puis il disparaît
icon: items-ps/key-item/eon-ticket.png
sprite: true
names:
  en:
    name: Eon Ticket
    desc: Duplicates the items on the room's pedestals. Used up on use
  es:
    name: Ticket Eón
    desc: Duplica los objetos de los pedestales de la sala. Se gasta al usarlo
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
Duplique les objets des piédestaux de la salle. Disparaît après usage

## Fonctionnement
- Chaque objet sur un piédestal de la salle qui n'a pas été pris reçoit une copie sur un nouveau piédestal à côté.
- La copie d'un article de boutique coûte le même prix. Les pactes du démon (payés en PV) ne sont pas copiés, et une copie ne peut pas être recopiée.
- Si l'original fait partie d'un groupe [à choisir](../mechanics/elegir_uno.html), la copie rejoint le même groupe.
- Le ticket est consommé : il disparaît après une utilisation.
- Sans objet à copier, rien ne se passe et vous gardez le ticket.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : les objets ne sont copiés qu'une fois.
