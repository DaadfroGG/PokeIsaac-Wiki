---
title: Poképoupée
id: muneco
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 3
details:
- label: Durée
  value: 5 s
- label: Posé
  value: À 40 px dans la direction de votre dernier tir
- label: Boss
  value: L'ignorent
icon: items-ps/other-item/poke-doll.png
sprite: true
names:
  en:
    name: Poké Doll
    desc: 'Place a decoy: enemies go after it for a few seconds'
  es:
    name: Muñeco Poké
    desc: 'Pon un señuelo: los enemigos van a por él unos segundos'
  de:
    name: Poképuppe
    desc: 'Stelle eine Puppe auf: Gegner gehen ein paar Sekunden lang auf sie los'
  it:
    name: Poké Bambola
    desc: 'Piazza un diversivo: i nemici lo attaccano per qualche secondo'
  pt:
    name: Boneco Poké
    desc: 'Coloque um chamariz: os inimigos vão atrás dele por alguns segundos'
  ru:
    name: Кукла-покемон
    desc: 'Поставь приманку: враги идут за ней несколько секунд'
  ja:
    name: ピッピにんぎょう
    desc: おとりを置く：敵が数秒間そちらを狙う
  ko:
    name: 삐삐인형
    desc: '미끼를 둔다: 적들이 몇 초 동안 미끼를 노린다'
  zh:
    name: 皮皮玩偶
    desc: 放置诱饵：敌人会追着它跑几秒
  zt:
    name: 皮皮玩偶
    desc: 放置誘餌：敵人會追著它跑幾秒
---
Posez un leurre : les ennemis le prennent pour cible quelques secondes

## Fonctionnement
- Une Poképoupée est posée à 40 px dans la direction de votre dernier tir. Pendant 5 secondes, tous les ennemis sauf les boss visent la poupée au lieu de vous : ils marchent vers elle et dirigent leurs attaques sur elle.
- La poupée ne peut pas être détruite ; elle disparaît simplement au bout de 5 secondes (elle clignote à la fin).
- Les boss et les ennemis qui vous copient l'ignorent.
- En coopération, la poupée attire les ennemis loin de tous les joueurs.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux poupées sont posées, mais une seule attire les ennemis à la fois.
