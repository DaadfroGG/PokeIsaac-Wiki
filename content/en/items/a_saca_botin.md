---
title: Loot Sack
id: a_saca_botin
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Voltorbs
  value: 6, at least 70 px from you
- label: Explosion
  value: 95 px, your Damage ×7 (min. 25)
- label: Fuse
  value: 0.57 s to 1.27 s, one after another
- label: Your bombs
  value: Not used
icon: items-ps/key-item/loot-sack.png
sprite: true
names:
  es:
    name: Saca Botín
    desc: Seis Voltorbs a punto de estallar caen por la sala (no te hieren)
  fr:
    name: Sac Butin
    desc: Six Voltorbes sur le point d'exploser tombent dans la salle (ils ne vous blessent pas)
  de:
    name: Beutesack
    desc: Sechs fast explodierende Voltobals regnen durch den Raum (sie verletzen dich nicht)
  it:
    name: Bottinosacca
    desc: Sei Voltorb sul punto di esplodere cadono nella stanza (non ti feriscono)
  pt:
    name: Saco de Saque
    desc: Seis Voltorbs prestes a explodir caem pela sala (não ferem você)
  ru:
    name: Мешок добычи
    desc: На комнату падают шесть Вольторбов, готовых взорваться (тебя не ранят)
  ja:
    name: たからぶくろ
    desc: 爆発寸前のビリリダマが6個、部屋に降ってきます（ダメージはありません）
  ko:
    name: 보물주머니
    desc: 곧 터질 찌리리공 6개가 방에 떨어진다(자신은 다치지 않는다)
  zh:
    name: 宝物袋
    desc: 六个即将爆炸的霹雳电球落在房间里（不会伤到你）
  zt:
    name: 寶物袋
    desc: 六個即將爆炸的霹靂電球落到房間裡（不會傷到你）
---
Six Voltorbs about to explode rain down on the room (they don't hurt you)

## How it works
- Six Voltorbs drop on free spots of the room, at least 70 px from you, and explode one after another between 0.57 and 1.27 seconds later.
- Each explosion hits every enemy within 95 px for 7 times your Damage (at least 25), like one of your bombs. Bosses take it too.
- They never hurt you, and they don't use up your own bombs.
- Like bombs, they break rocks and crates and open hidden secret-room doors next to them.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): 12 Voltorbs drop.
