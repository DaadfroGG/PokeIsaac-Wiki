---
title: Room Service
id: room_service
color: '#c8b0ff'
labels:
- text: HELD ITEM
  color: '#7ee0c0'
icon: items-ps/hold-item/room-service.png
details:
- label: Charge
  value: Active item fully charged
- label: When
  value: When you beat a boss (boss room cleared)
- label: Held by
  value: One Pokémon on the team; works while that Pokémon is on the field
- label: Where to find it
  value: By clearing rooms, in chests, by breaking objects in the room, in secret rooms and in the shop
- label: Which one drops
  value: Picked at random among the held items nobody has yet (held by the team, fused, or lying in the room)
- label: Fuse
  value: 'From the Bag: 15 Poké Dollars on floor 1, +3.5 % per floor after that. It then works with any Pokémon on the team, for good. Up to 5 fused, never two alike'
names:
  es:
    name: Servicio Raro
    desc: Al vencer al jefe, tu activo se carga entero.
  fr:
    name: Chariot Distordu
    desc: Quand vous battez le boss, votre objet actif se recharge entièrement.
  pt:
    name: Serviço de Quarto
    desc: Ao vencer o chefe, seu item ativo recarrega por completo.
  de:
    name: Bizarroservice
    desc: Besiegst du den Boss, lädt sich dein aktives Item ganz auf.
  it:
    name: Distorservizio
    desc: Quando sconfiggi il Boss, il tuo attivo si ricarica del tutto.
  ja:
    name: ルームサービス
    desc: ボスを倒すと、アクティブどうぐのチャージが満タンになる。
  zh:
    name: 客房服务
    desc: 击败首领后，你的主动道具充满能量。
  zt:
    name: 客房服務
    desc: 打倒頭目時，主動道具充能全滿。
  ko:
    name: 룸서비스
    desc: 보스를 쓰러뜨리면 액티브가 완전히 충전된다.
  ru:
    name: Рум-сервис
    desc: Когда ты побеждаешь босса, активный предмет заряжается полностью.
---
When you defeat the boss, your active item fully recharges.

One Pokémon on your team holds it, and it only works while that Pokémon is on the field. Fuse it from the Bag to make it work with the whole team. See [Held items](../mechanics/equipados.html).

## How it works
- When the [boss room](../rooms/boss.html) is cleared, your active item is instantly fully charged.
- Nothing happens if you have no active item. Other rooms don't trigger it.

## Stacking
- A second copy does nothing more: the effect is either on or off. Having it held and fused, or held by two Pokémon of the team, is the same as having it once. The game won't let you fuse two alike, and new drops avoid the ones you already have.
