---
title: Nectar Mauve
id: m_nectar_violeta
kind: passive
category: shot
family: module
tier: 2
pool_weight: 2
details:
- label: Poison
  value: 6 s en entrant dans une salle avec des ennemis
- label: Dégâts
  value: 1,5 toutes les 0,5 s (environ 18 au total)
- label: Boss
  value: Empoisonnés aussi
icon: items-ps/other-item/purple-nectar.png
sprite: true
names:
  en:
    name: Purple Nectar
    desc: When you enter a room, all enemies are poisoned for a good while
  es:
    name: Néctar Violeta
    desc: Al entrar en una sala, todos los enemigos quedan envenenados un buen rato
  de:
    name: Purpurner Nektar
    desc: Betrittst du einen Raum, werden alle Gegner für eine ganze Weile vergiftet
  it:
    name: Nettare viola
    desc: Entrando in una stanza, tutti i nemici restano avvelenati per un bel po'
  pt:
    name: Néctar Roxo
    desc: Ao entrar em uma sala, todos os inimigos ficam envenenados por um bom tempo
  ru:
    name: Фиолетовый нектар
    desc: При входе в комнату все враги надолго отравлены
  ja:
    name: むらさきのミツ
    desc: 部屋に入ると、敵全員がしばらく毒状態になる
  ko:
    name: 보라꿀
    desc: 방에 들어가면 모든 적이 한동안 독 상태가 된다
  zh:
    name: 兰紫色花蜜
    desc: 进入房间时，所有敌人会中毒相当长时间
  zt:
    name: 蘭紫色花蜜
    desc: 進入房間時，所有敵人會中毒一段時間
---
En entrant dans une salle, tous les ennemis sont empoisonnés un bon moment

## Fonctionnement
- Quand vous entrez dans une salle qui contient des ennemis vivants, chaque ennemi présent est empoisonné 6 s, boss compris (voir [effets de statut](../mechanics/estados.html)).
- Le poison inflige 1,5 dégât toutes les 0,5 s (12 ticks, environ 18 dégâts), un peu plus si un ennemi empoisonné est ensuite touché par votre propre poison.
- Seuls les ennemis présents à l'entrée sont empoisonnés : les vagues suivantes et les ennemis invoqués ne le sont pas.

## Cumul
- Il ne se cumule pas : un second exemplaire ne change rien.
