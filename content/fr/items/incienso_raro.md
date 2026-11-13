---
title: Encens Bizarre
id: incienso_raro
kind: passive
category: shot
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Effets possibles
  value: Brûlure, gel, éclairs, perforation, rebond, tir guidé, ralentissement, recul, poison, éclaboussure ou croissance
- label: Durée
  value: Jusqu'à la fin de la salle (ou jusqu'à ce que vous la quittiez)
- label: Chance
  value: 'Chaque effet a la même chance : 1 sur 11 (environ 9 %)'
- label: Puissance
  value: Comme si vous aviez un exemplaire de plus d'un objet de cet effet
icon: items-ps/incense/odd.png
sprite: true
names:
  en:
    name: Odd Incense
    desc: In each room with enemies, your shots gain a random effect until you clear it
  es:
    name: Incienso Raro
    desc: En cada sala con enemigos, tus disparos ganan un efecto al azar hasta que la limpias
  de:
    name: Schrägrauch
    desc: In jedem Raum mit Gegnern erhalten deine Schüsse einen zufälligen Effekt, bis du ihn räumst
  it:
    name: Bizzoaroma
    desc: In ogni stanza con nemici, i tuoi tiri ottengono un effetto casuale finché non la ripulisci
  pt:
    name: Incenso Estranho
    desc: Em cada sala com inimigos, seus tiros ganham um efeito aleatório até você limpá-la
  ru:
    name: Благовоние странностей
    desc: В каждой комнате с врагами твои выстрелы получают случайный эффект, пока ты ее не зачистишь
  ja:
    name: あやしいおこう
    desc: 敵のいる部屋ごとに、クリアするまでショットにランダムな効果が付く
  ko:
    name: 괴상한향로
    desc: 적이 있는 방마다, 방을 클리어할 때까지 탄에 무작위 효과가 붙는다
  zh:
    name: 奇异薰香
    desc: 在每个有敌人的房间里，你的弹会获得随机效果，直到清空房间
  zt:
    name: 奇異薰香
    desc: 在每個有敵人的房間，你的射擊會獲得一種隨機效果，直到房間清空
---
Dans chaque salle avec des ennemis, vos tirs gagnent un effet aléatoire jusqu'à ce que vous la nettoyiez

{{< clip >}}

## Fonctionnement
- À chaque entrée dans une salle qui contient encore des ennemis vivants, un des 11 effets de tir est tiré au hasard et ajouté à tous vos tirs : brûlure, gel, éclairs, perforation, rebond, tir guidé, ralentissement, recul, poison, éclaboussure ou croissance. Un message indique lequel.
- L'effet équivaut à posséder un exemplaire de plus de l'objet correspondant (par exemple +1 perforation ou +1 rebond). Il disparaît à la fin de la salle ou quand vous la quittez, et un nouveau tirage a lieu dans la salle suivante avec des ennemis.
- Les salles sans ennemis ne tirent pas d'effet.

## Cumul
- Il ne se cumule pas : un second exemplaire ne donne pas un second effet aléatoire.
