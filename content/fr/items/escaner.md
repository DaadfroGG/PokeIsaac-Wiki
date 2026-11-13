---
title: Scanner
id: escaner
kind: active
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 3
details:
- label: Dégâts reçus
  value: +50 % de vos coups
- label: Durée
  value: Jusqu'à la mort de l'ennemi
- label: Boss
  value: Touchés
icon: items-ps/key-item/scanner.png
sprite: true
names:
  en:
    name: Scanner
    desc: 'Scans the enemies in the room: they take 50 % more damage'
  es:
    name: Escáner
    desc: 'Analiza a los enemigos de la sala: reciben un 50 % más de daño'
  de:
    name: Scanner
    desc: 'Analysiert die Gegner im Raum: Sie erleiden 50 % mehr Schaden'
  it:
    name: Scanner
    desc: 'Analizza i nemici della stanza: subiscono il 50 % di danni in più'
  pt:
    name: Scanner
    desc: 'Analisa os inimigos da sala: recebem 50% a mais de dano'
  ru:
    name: Сканер
    desc: 'Сканирует врагов в комнате: они получают на 50 % больше урона'
  ja:
    name: たんちき
    desc: 部屋の敵を分析：受けるダメージが50%増える
  ko:
    name: 탐지기
    desc: '방에 있는 적을 분석한다: 받는 대미지가 50% 늘어난다'
  zh:
    name: 探测器
    desc: 分析房间内的敌人：它们受到的伤害增加50 %
  zt:
    name: 探測器
    desc: 分析房間內的敵人：使其受到的傷害增加50 %
---
Analyse les ennemis de la salle : ils subissent 50 % de dégâts en plus

## Fonctionnement
- Chaque ennemi de la salle, boss compris, est analysé et subit 50 % de dégâts en plus de vos coups pour le reste de sa vie.
- Le bonus s'applique au moment du coup, donc il n'apparaît pas dans votre stat de Dégâts et n'est pas limité par le plafond de ×3 des multiplicateurs.
- Seuls les ennemis présents au moment de l'utilisation sont analysés ; ceux qui apparaissent ensuite ne le sont pas.
- S'il n'y a rien à affecter, rien ne se passe et vous gardez la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : un ennemi ne peut être analysé qu'une fois.
