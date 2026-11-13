---
title: Nectar Rose
id: m_nectar_rosa
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Distance
  value: Ennemis à moins de 70 px de vous (pas les boss)
- label: Chance
  value: Environ 50 % par seconde passée si près
- label: Charme
  value: '4 s : l''ennemi se bat de votre côté'
icon: items-ps/other-item/pink-nectar.png
sprite: true
names:
  en:
    name: Pink Nectar
    desc: Enemies that get very close sometimes become charmed and fight on your side
  es:
    name: Néctar Rosa
    desc: Los enemigos que se te acercan mucho a veces quedan hechizados y pelean de tu lado
  de:
    name: Rosa Nektar
    desc: Gegner, die dir sehr nahe kommen, werden manchmal verzaubert und kämpfen auf deiner Seite
  it:
    name: Nettare rosa
    desc: I nemici che si avvicinano molto a volte restano ammaliati e combattono dalla tua parte
  pt:
    name: Néctar Rosa
    desc: Os inimigos que chegam muito perto às vezes ficam enfeitiçados e lutam do seu lado
  ru:
    name: Розовый нектар
    desc: Враги, подошедшие совсем близко, иногда очаровываются и сражаются на твоей стороне
  ja:
    name: うすもものミツ
    desc: 近づきすぎた敵が、ときどき魅了され、味方として戦う
  ko:
    name: 연분홍꿀
    desc: 아주 가까이 온 적이 가끔 헤롱헤롱 상태가 되어 내 편에서 싸운다
  zh:
    name: 桃粉色花蜜
    desc: 靠得很近的敌人有时会着迷，并站在你这边战斗
  zt:
    name: 桃粉色花蜜
    desc: 靠得很近的敵人有時會著迷，並站在你這邊戰鬥
---
Les ennemis qui s'approchent très près sont parfois charmés et se battent de votre côté

## Fonctionnement
- Tout ennemi (hors boss) qui s'approche à moins de 70 px de vous a environ 50 % de chance par seconde d'être charmé 4 s (voir [effets de statut](../mechanics/estados.html)).
- Un ennemi charmé n'attaque plus et ne vous blesse plus au contact. Il marche vers l'ennemi non charmé le plus proche à moins de 600 px et l'attaque : toutes les 0,5 s au contact, il lui inflige 3 fois ses propres dégâts d'attaque (au moins 2).
- Pas besoin de toucher quoi que ce soit : rester près suffit. Les ennemis déjà charmés sont ignorés.

## Cumul
- Il ne se cumule pas : un second exemplaire n'augmente pas la chance.
