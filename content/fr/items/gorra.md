---
title: Casquette de Dresseur
id: gorra
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Probabilité
  value: 10 % par ennemi vaincu (pas les boss)
- label: Compagnons simultanés
  value: Jusqu'à 2
- label: Dégâts
  value: 50 % des vôtres (au moins 2 + 0,4 par étage)
- label: Tirs
  value: Environ 1 toutes les 0,5 s, à 380 px
- label: Durée
  value: Jusqu'à ce que vous quittiez la salle
icon: icons/items/gorra.png
sprite: true
names:
  en:
    name: Trainer Cap
    desc: Gotta catch 'em all! Sometimes an enemy you defeat joins you until you leave the room (max. 2)
  es:
    name: Gorra de Entrenador
    desc: ¡Hazte con todos! A veces, un enemigo que derrotas se une a ti hasta que sales de la sala (máx. 2)
  de:
    name: Trainerkappe
    desc: Schnapp sie dir alle! Manchmal schließt sich ein besiegter Gegner dir an, bis du den Raum verlässt (max. 2)
  it:
    name: Cappello da Allenatore
    desc: Acchiappali tutti! A volte un nemico che sconfiggi si unisce a te finché non esci dalla stanza (max 2)
  pt:
    name: Boné de Treinador
    desc: Pegue todos! Às vezes, um inimigo que você derrota se une a você até sair da sala (máx. 2)
  ru:
    name: Кепка тренера
    desc: Поймай их всех! Иногда побежденный враг присоединяется к тебе, пока ты не покинешь комнату (макс. 2)
  ja:
    name: トレーナーキャップ
    desc: ぜんぶつかまえよう！倒した敵が、部屋を出るまでなかまになることがある（最大2匹）
  ko:
    name: 트레이너 모자
    desc: 모두 잡아라! 가끔 쓰러뜨린 적이 방을 나갈 때까지 동료가 된다 (최대 2마리)
  zh:
    name: 训练家帽子
    desc: 抓住它们！有时被你击败的敌人会加入你，直到你离开房间（最多2个）
  zt:
    name: 訓練家帽子
    desc: 全部收服！有時你擊敗的敵人會加入你，直到你離開房間（最多2隻）
---
Attrapez-les tous ! Parfois, un ennemi vaincu vous rejoint jusqu'à ce que vous quittiez la salle (max. 2)

## Fonctionnement
- Chaque ennemi normal que vous battez a 10 % de chances de vous rejoindre (la Chance ne change rien). Les boss ne vous rejoignent jamais.
- Le nouvel allié est le même Pokémon que l'ennemi vaincu et garde son type. Il flotte derrière vous comme un [compagnon](../mechanics/companeros.html) et tire sur l'ennemi le plus proche à 380 px, environ une fois toutes les 0,5 s.
- Chaque tir inflige la moitié de vos Dégâts, mais jamais moins de 2 + 0,4 par étage. Les objets qui renforcent les compagnons le renforcent aussi.
- 2 de ces alliés au plus en même temps. Ils ne comptent pas dans votre limite normale de compagnons.
- Ils partent tous dès que vous entrez dans une autre salle.

## Cumul
- Un deuxième exemplaire ne fait rien de plus : toujours 10 % et 2 alliés au plus.
