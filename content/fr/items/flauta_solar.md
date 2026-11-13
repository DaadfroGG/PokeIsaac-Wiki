---
title: Flûte du Soleil
id: flauta_solar
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 2
details:
- label: Tirs
  value: Jusqu'à 40, désormais à vous
- label: Dégâts
  value: Vos Dégâts (au moins 2)
- label: Visée
  value: Chacun vers l'ennemi le plus proche
icon: items-ps/key-item/sun-flute.png
sprite: true
names:
  en:
    name: Sun Flute
    desc: Enemy shots in the room switch sides and go after enemies
  es:
    name: Flauta Solar
    desc: Los disparos enemigos de la sala cambian de bando y van a por los enemigos
  de:
    name: Sonnenflöte
    desc: Gegnerische Schüsse im Raum wechseln die Seite und gehen auf die Gegner los
  it:
    name: Flauto solare
    desc: I tiri nemici della stanza cambiano schieramento e vanno contro i nemici
  pt:
    name: Flauta Solar
    desc: Os tiros inimigos da sala mudam de lado e vão atrás dos inimigos
  ru:
    name: Солнечная флейта
    desc: Выстрелы врагов в комнате переходят на твою сторону и летят во врагов
  ja:
    name: たいようのふえ
    desc: 部屋の敵の弾が寝返って、敵を狙う
  ko:
    name: 태양의피리
    desc: 방 안의 적 탄이 편을 바꿔 적을 노린다
  zh:
    name: 太阳之笛
    desc: 房间内的敌方弹会倒戈，转而攻击敌人
  zt:
    name: 太陽之笛
    desc: 房間內的敵方彈會倒戈，轉而攻擊敵人
---
Les tirs ennemis de la salle changent de camp et visent les ennemis

## Fonctionnement
- Jusqu'à 40 tirs ennemis de la salle deviennent vos tirs. Chacun se tourne vers l'ennemi le plus proche de lui et part vers lui.
- Chaque tir converti inflige vos Dégâts (au moins 2) avec votre type, porte vos bonus de tir et vos statuts, et va jusqu'à 520 px. Sa taille dépend du tir d'origine.
- Ils comptent comme des tirs supplémentaires, donc les effets réservés à vos tirs principaux ne se déclenchent pas avec eux.
- Ils touchent aussi les boss : une salve d'un boss peut lui être renvoyée.
- Sans tir ennemi dans la salle, rien ne se passe et vous gardez la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : une seconde vague convertit jusqu'à 40 tirs ennemis de plus, s'il en reste.
