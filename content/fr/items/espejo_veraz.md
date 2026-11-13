---
title: Miroir Sacré
id: espejo_veraz
kind: active
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 2
charge: 4
details:
- label: Durée
  value: 8 secondes
- label: Reflet
  value: De l'autre côté de la salle, en miroir
- label: Dégâts
  value: Les mêmes que vos tirs
icon: items-ps/key-item/reveal-glass.png
sprite: true
names:
  en:
    name: Reveal Glass
    desc: For 8 seconds, your reflection appears on the other side of the room and shoots with you
  es:
    name: Espejo Veraz
    desc: Durante 8 segundos, tu reflejo aparece al otro lado de la sala y dispara contigo
  de:
    name: Wahrspiegel
    desc: 8 Sekunden lang erscheint dein Spiegelbild auf der anderen Seite des Raums und schießt mit dir
  it:
    name: Verispecchio
    desc: Per 8 secondi, il tuo riflesso compare dall'altra parte della stanza e spara insieme a te
  pt:
    name: Espelho da Verdade
    desc: Por 8 segundos, seu reflexo aparece do outro lado da sala e atira com você
  ru:
    name: Зеркало истины
    desc: На 8 секунд твое отражение появляется на другом конце комнаты и стреляет вместе с тобой
  ja:
    name: うつしかがみ
    desc: 8秒間、自分の分身が部屋の反対側に現れ、一緒に撃つ
  ko:
    name: 비추는거울
    desc: 8초 동안 방 반대편에 내 분신이 나타나 함께 쏜다
  zh:
    name: 现形镜
    desc: 8秒内，你的倒影会出现在房间另一侧，与你一起射击
  zt:
    name: 現形鏡
    desc: 8秒內，你的倒影會出現在房間另一側，和你一起射擊
---
Pendant 8 secondes, votre reflet apparaît de l'autre côté de la salle et tire avec vous

## Fonctionnement
- Pendant 8 secondes votre reflet apparaît de l'autre côté de la salle, en miroir gauche-droite (si vous êtes près du mur de gauche, il est près du mur de droite).
- À chaque tir, il lance la même salve retournée gauche-droite : même nombre de tirs, mêmes dégâts, type et effets d'objets sur les tirs.
- Ses tirs comptent comme des tirs supplémentaires, donc les effets réservés à vos tirs principaux ne se déclenchent pas avec eux (voir [tirs supplémentaires](../mechanics/disparos_extra.html)).
- Le reflet ne peut pas être blessé et ne bloque rien.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : le minuteur repart simplement à 8 secondes.
