---
title: Baie Tronci
id: a_baya_monli
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 2
details:
- label: Flaque
  value: 70 px de rayon, 4 s
- label: Dégâts
  value: Vos Dégâts ×0,5 (min. 1,5) toutes les 0,25 s
- label: Brûlure
  value: 1 s (2 s avec la Roche Chaude)
- label: Ennemis volants
  value: Pas touchés
icon: items-ps/berry/nomel.png
sprite: true
names:
  en:
    name: Nomel Berry
    desc: You leave a big acid puddle that burns enemies that step in it
  es:
    name: Baya Monli
    desc: Dejas un gran charco ácido que quema a los enemigos que lo pisan
  de:
    name: Tronzibeere
    desc: Du hinterlässt eine große Säurepfütze, die Gegner verbrennt, die hineintreten
  it:
    name: Baccalemon
    desc: Lasci una grande pozza acida che brucia i nemici che ci passano sopra
  pt:
    name: Baga Nomel
    desc: Você deixa uma grande poça de ácido que queima os inimigos que pisam nela
  ru:
    name: Ягода Номел
    desc: Ты оставляешь большую кислотную лужу, которая жжет наступивших в нее врагов
  ja:
    name: ノメルのみ
    desc: 敵が踏むと焼ける大きな酸の水たまりを残す
  ko:
    name: 노멜열매
    desc: 밟은 적을 태우는 커다란 산성 웅덩이를 남긴다
  zh:
    name: 檬柠果
    desc: 你留下一大片酸液坑，会灼烧踩上去的敌人
  zt:
    name: 檬檸果
    desc: 你會留下一大灘酸液，灼燒踩到的敵人
---
Vous laissez une grande flaque d'acide qui brûle les ennemis qui marchent dessus

## Fonctionnement
- Une flaque d'acide de 70 px de rayon apparaît à vos pieds et reste 4 secondes.
- Toutes les 0,25 seconde, chaque ennemi dedans subit la moitié de vos Dégâts (au moins 1,5), en dégâts Feu, et est brûlé 1 seconde ([Roche Chaude](roca_calor.html) : 2 secondes). Un ennemi qui y reste tout le temps subit 16 coups, environ 8 fois vos Dégâts.
- Les ennemis volants passent au-dessus sans être touchés. Les boss qui marchent le sont.
- Ces coups ne déclenchent pas vos objets. La flaque ne vous blesse pas.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : deux flaques apparaissent au même endroit, donc les ennemis dedans subissent le double.
