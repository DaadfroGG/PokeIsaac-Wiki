---
title: Noigrume Rose
id: m_bonguri_rosa
kind: passive
category: shot
family: module
tier: 2
pool_weight: 2
details:
- label: Charme
  value: 12 % par coup (+1 % par Chance), 5 s
- label: Boss
  value: Jamais charmés
- label: Dégâts du charmé
  value: 3× ses dégâts d'attaque (min. 2) toutes les 0,5 s
icon: items-ps/apricorn/pink.png
sprite: true
names:
  en:
    name: Pink Apricorn
    desc: 'Sometimes you charm an enemy: for a few seconds it fights on your side against the others'
  es:
    name: Bonguri Rosa
    desc: 'A veces hechizas a un enemigo: unos segundos pelea de tu lado contra los demás'
  de:
    name: Aprikoko Pink
    desc: 'Manchmal bezauberst du einen Gegner: Für ein paar Sekunden kämpft er auf deiner Seite gegen die anderen'
  it:
    name: Ghicocca Rosa
    desc: 'A volte ammalii un nemico: per qualche secondo combatte dalla tua parte contro gli altri'
  pt:
    name: Apricorn Rosa
    desc: 'Às vezes você enfeitiça um inimigo: por alguns segundos ele luta ao seu lado contra os demais'
  ru:
    name: Розовый абрикорн
    desc: 'Иногда ты очаровываешь врага: на несколько секунд он сражается на твоей стороне против остальных'
  ja:
    name: ももぼんぐり
    desc: ときどき敵を魅了する：数秒間、味方として他の敵と戦ってくれる
  ko:
    name: 담홍규토리
    desc: '가끔 적을 헤롱헤롱하게 만든다: 몇 초 동안 내 편이 되어 다른 적과 싸운다'
  zh:
    name: 粉球果
    desc: 有时会使一个敌人着迷：它会在几秒内站在你这边对抗其他敌人
  zt:
    name: 粉球果
    desc: 有時會迷惑一個敵人：幾秒內它會站在你這邊對抗其他敵人
---
Parfois, vous charmez un ennemi : pendant quelques secondes, il combat à vos côtés contre les autres

## Fonctionnement
- Chaque coup sur un ennemi (hors boss) a 12 % de chance (+1 % par point de Chance) de le charmer 5 s (voir [effets de statut](../mechanics/estados.html)). Un ennemi charmé n'attaque plus et ne vous blesse plus au contact.
- Il marche vers l'ennemi non charmé le plus proche à moins de 600 px et l'attaque : toutes les 0,5 s au contact, il lui inflige 3 fois ses propres dégâts d'attaque (au moins 2).
- Un ennemi déjà charmé ne peut pas être recharmé avant la fin du charme. S'il n'a pas de cible, il reste simplement immobile.

## Cumul
- Il ne se cumule pas : un second exemplaire n'augmente ni la chance ni la durée.
