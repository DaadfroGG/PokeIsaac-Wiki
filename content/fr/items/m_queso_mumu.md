---
title: Fromage Meumeu
id: m_queso_mumu
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
pool_weight: 2
stats:
- text: Cœurs +1
  good: true
- text: Soigne 1 cœur
  good: true
details:
- label: Cœurs
  value: +1 (et le soigne)
- label: Nuage
  value: Toutes les 0,5 s en restant immobile en combat
- label: Durée du nuage
  value: 2,5 s, rayon 30 px
- label: Poison
  value: 2 s, 25 % de vos dégâts toutes les 0,25 s (min. 0,5)
icon: items-ps/curry-ingredient/moomoo-cheese.png
sprite: true
names:
  en:
    name: Moomoo Cheese
    desc: If you stand still in combat, you release stinky clouds that poison enemies; heart +1
  es:
    name: Queso Mu-mu
    desc: Si te quedas quieto en combate, sueltas nubes apestosas que envenenan a los enemigos; corazón +1
  de:
    name: Kuhmuh-Käse
    desc: Wenn du im Kampf stillstehst, setzt du stinkende Wolken frei, die Gegner vergiften; Herz +1
  it:
    name: Formaggio Mumu
    desc: Se stai fermo in combattimento, rilasci nubi puzzolenti che avvelenano i nemici; cuore +1
  pt:
    name: Queijo Moomoo
    desc: Se você ficar parado em combate, solta nuvens fedorentas que envenenam os inimigos; coração +1
  ru:
    name: Сыр Мумуу
    desc: Если стоишь на месте в бою, выпускаешь вонючие облака, отравляющие врагов; сердце +1
  ja:
    name: モーモーチーズ
    desc: 戦闘中に立ち止まると、敵をどく状態にする悪臭の雲を出す；ハート+1
  ko:
    name: 튼튼치즈
    desc: 전투 중 가만히 있으면 악취 구름을 내뿜어 적을 독 상태로 만든다. 하트 +1
  zh:
    name: 哞哞乳酪
    desc: 战斗中站着不动，会释放臭气云使敌人中毒；心+1
  zt:
    name: 哞哞乳酪
    desc: 戰鬥中站著不動時，會釋放臭氣雲讓敵人中毒；愛心+1
---
Si vous restez immobile en combat, vous libérez des nuages puants qui empoisonnent les ennemis ; cœur +1

## Fonctionnement
- Vous gagnez un cœur de plus, rempli.
- Tant que vous restez immobile dans une salle avec des ennemis, vous lâchez un nuage puant sous vous toutes les 0,5 s. Un nuage dure 2,5 s et a un rayon de 30 px.
- Toutes les 0,25 s, chaque ennemi dans le nuage, volants compris, subit 25 % de vos dégâts (au moins 0,5) et est empoisonné 2 s (voir [effets de statut](../mechanics/estados.html)).
- Il n'existe pas plus de 24 nuages et flaques à la fois. Bouger, ou une salle sans ennemis, arrête les nuages.

## Cumul
- Le nuage ne change pas ; +1 cœur s'ajoute à chaque exemplaire.
