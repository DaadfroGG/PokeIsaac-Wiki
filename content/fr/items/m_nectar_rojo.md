---
title: Nectar Rouge
id: m_nectar_rojo
kind: passive
category: shot
family: module
tier: 1
pool_weight: 2
details:
- label: Chance
  value: 12 % + 1 % par point de Chance, par attaque (50 % max)
- label: Flamme
  value: 1 tir de type Feu en plus, dégâts ×1,2
- label: Perçage
  value: Traverse tous les ennemis
- label: Brûlure
  value: Chaque ennemi touché (2 s)
- label: Vitesse et portée
  value: 65 % de votre vitesse des tirs, 70 % de votre portée
icon: items-ps/other-item/red-nectar.png
sprite: true
names:
  en:
    name: Red Nectar
    desc: Sometimes, along with your shot, you breathe a flame that pierces enemies and burns them
  es:
    name: Néctar Rojo
    desc: A veces, además de tu disparo, lanzas una llamarada que atraviesa a los enemigos y los quema
  de:
    name: Roter Nektar
    desc: Manchmal stößt du zusätzlich zu deinem Schuss eine Feuerwoge aus, die Gegner durchdringt und verbrennt
  it:
    name: Nettare rosso
    desc: A volte, oltre al tiro, sputi una vampata che trapassa i nemici e li brucia
  pt:
    name: Néctar Vermelho
    desc: Às vezes, além do seu tiro, você lança uma labareda que atravessa os inimigos e os queima
  ru:
    name: Красный нектар
    desc: Иногда вместе с выстрелом ты выпускаешь пламя, которое пробивает врагов и поджигает их
  ja:
    name: くれないのミツ
    desc: ときどき、ショットに加えて、敵を貫通して燃やす炎を吐く
  ko:
    name: 다홍꿀
    desc: 가끔 탄과 함께 적을 꿰뚫고 화상을 입히는 불꽃을 뿜는다
  zh:
    name: 朱红色花蜜
    desc: 有时除了你的弹，还会喷出一道贯穿敌人并灼烧它们的火焰
  zt:
    name: 朱紅色花蜜
    desc: 有時除了射擊，還會噴出一道貫穿敵人並使其灼傷的火焰
---
Parfois, en plus de votre tir, vous crachez une flamme qui transperce les ennemis et les brûle

## Fonctionnement
- À chaque attaque, il y a 12 % de chance, +1 % par point de Chance (50 % au maximum), de cracher aussi **une flamme** dans la direction de votre premier tir.
- La flamme est un projectile de **type Feu**, quel que soit le type de votre Pokémon (la [table des types](../mechanics/tabla_tipos.html) utilise Feu), inflige **×1,2** les dégâts de ce tir (coup critique compris) et est grosse (au moins 12 px de rayon).
- Elle traverse tous les ennemis sur son chemin et **brûle chaque ennemi touché** : 10 % de ses dégâts toutes les ⅓ s pendant 2 s, 4 s avec la [Roche Chaude](roca_calor.html) (voir [Effets de statut](../mechanics/estados.html)).
- Elle est plus lente (65 % de votre vitesse des tirs) et va moins loin (70 % de votre portée).
- Elle garde les modificateurs de vos tirs (autoguidage, rebond…) mais ne déclenche pas les effets d'objets qui ont lieu au moment du tir.
- Tirée au sort une fois par attaque ; elle s'ajoute à votre salve, ne compte pas dans la limite de 9 tirs, et les [Lunettes Sable](m_gafas_aislantes.html) ne la divisent pas.
- Le plafond de 50 % demande 38 de Chance après les [rendements décroissants](../mechanics/rendimientos.html) (122 sur le papier).
- Comment tous les tirs en plus s'additionnent : [Tirs supplémentaires](../mechanics/disparos_extra.html).

## Cumul
- Un deuxième exemplaire ne fait rien de plus : toujours un seul tirage par attaque, même chance.

{{< clip >}}
