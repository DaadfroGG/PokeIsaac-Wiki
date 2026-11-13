---
title: Fossile Dôme
id: m_fosil_domo
kind: passive
category: shot
family: module
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Tirs
  value: 7 en orbite pendant 15 s
- label: Dégâts
  value: 80 % de vos dégâts chacun, touche chaque ennemi toutes les 0,5 s
- label: Se déclenche
  value: En entrant dans une salle avec des ennemis vivants
icon: items-ps/fossil/dome.png
sprite: true
names:
  en:
    name: Dome Fossil
    desc: When you enter a room with enemies, seven shots orbit you for 15 seconds
  es:
    name: Fósil Domo
    desc: Al entrar en una sala con enemigos, siete disparos giran a tu alrededor durante 15 segundos
  de:
    name: Domfossil
    desc: Betrittst du einen Raum mit Gegnern, kreisen sieben Schüsse 15 Sekunden lang um dich
  it:
    name: Domofossile
    desc: Entrando in una stanza con nemici, sette tiri ruotano attorno a te per 15 secondi
  pt:
    name: Fóssil Domo
    desc: Ao entrar em uma sala com inimigos, sete tiros giram ao seu redor por 15 segundos
  ru:
    name: Окаменелость-купол
    desc: При входе в комнату с врагами семь выстрелов кружат вокруг тебя 15 секунд
  ja:
    name: こうらのカセキ
    desc: 敵のいる部屋に入ると、7つの弾が15秒間まわりを回る
  ko:
    name: 껍질화석
    desc: 적이 있는 방에 들어가면 탄 7발이 15초 동안 주위를 돈다
  zh:
    name: 甲壳化石
    desc: 进入有敌人的房间时，七颗弹会环绕你旋转15秒
  zt:
    name: 甲殼化石
    desc: 進入有敵人的房間時，七發彈會環繞著你旋轉15秒
---
En entrant dans une salle avec des ennemis, sept tirs tournent autour de vous pendant 15 secondes

{{< clip >}}

## Fonctionnement
- Quand vous entrez dans une salle qui a encore des ennemis vivants, sept tirs apparaissent et tournent autour de vous (à environ 64 px) pendant 15 s.
- Ils traversent tout et retouchent le même ennemi toutes les 0,5 s. Chacun inflige 80 % de vos dégâts. Ils ne déclenchent pas d'effets d'objets au contact.
- Ils disparaissent s'ils touchent un rocher, sauf si vous êtes de type [Spectre](../types/ghost.html).
- Les salles sans ennemis ne les font pas apparaître.

## Cumul
- Il ne se cumule pas : un second exemplaire n'ajoute pas de tirs en orbite.
