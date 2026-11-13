---
title: Ceinture Noire
id: cinturon_negro
kind: passive
category: shot
family: core
tier: 2
pools:
- boss
pool_weight: 2
details:
- label: Frôlement
  value: Un tir ennemi passe tout près sans vous toucher
- label: Riposte
  value: Tir doré à ×2 dégâts
- label: Rythme
  value: Un toutes les 0,2 secondes au plus
icon: items/black-belt.png
sprite: true
names:
  en:
    name: Black Belt
    desc: 'Counter: if an enemy shot grazes you, you strike back with a double hit on the nearest enemy'
  es:
    name: Cinturón Negro
    desc: 'Contraataque: si un disparo enemigo te pasa rozando, respondes con un golpe doble al enemigo más cercano'
  de:
    name: Schwarzgurt
    desc: 'Konter: Streift dich ein gegnerischer Schuss, schlägst du mit einem Doppelschlag auf den nächsten Gegner zurück'
  it:
    name: Cinturanera
    desc: 'Contrattacco: se un tiro nemico ti sfiora, rispondi con un colpo doppio al nemico più vicino'
  pt:
    name: Faixa Preta
    desc: 'Contra-ataque: se um tiro inimigo passar de raspão por você, você responde com um golpe duplo no inimigo mais próximo'
  ru:
    name: Черный пояс
    desc: 'Контратака: если вражеский выстрел пролетает впритирку, ты отвечаешь двойным ударом по ближайшему врагу'
  ja:
    name: くろおび
    desc: カウンター：敵のショットがかすめると、一番近い敵に2連撃で反撃する
  ko:
    name: 검은띠
    desc: '반격: 적의 탄이 아슬아슬하게 스치면 가장 가까운 적에게 2배 공격으로 되갚는다'
  zh:
    name: 黑带
    desc: 反击：敌人的弹从你身边擦过时，你会对最近的敌人回击两次
  zt:
    name: 黑帶
    desc: 反擊：敵人的子彈從你身邊擦過時，你會對最近的敵人還以雙倍傷害的一擊
---
Riposte : si un tir ennemi vous frôle, vous répliquez par un coup double sur l'ennemi le plus proche

## Fonctionnement

- Quand un tir ennemi passe à environ 20-40 px de vous puis continue sans vous toucher, vous ripostez avec un tir doré sur l'ennemi le plus proche : 2 fois vos Dégâts, vitesse 11, portée 520 px.
- Une riposte au plus toutes les 0,2 seconde, et aucune pendant votre invulnérabilité après un coup.
- La riposte est un tir enfant : elle ne déclenche pas les objets à effet sur coup et n'a pas de tirs multiples.
- Les tirs qui vous touchent ne comptent pas, seulement les frôlements.

## Cumul

- Un deuxième exemplaire ne change rien.
