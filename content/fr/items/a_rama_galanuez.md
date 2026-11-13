---
title: Branche Galanoa
id: a_rama_galanuez
kind: active
family: ability
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 1
details:
- label: Boomerang
  value: Va à 260 px, puis revient vers vous
- label: Dégâts
  value: Vos Dégâts ×2 par ennemi
- label: Étourdissement
  value: 1 s (pas les boss)
- label: Bonus
  value: Ramenés vers vous
icon: items-ps/other-item/galarica-twig.png
sprite: true
names:
  en:
    name: Galarica Twig
    desc: You throw a boomerang that stuns enemies and brings back whatever it touches on the floor
  es:
    name: Rama de Galanuez
    desc: Lanzas un bumerán que aturde a los enemigos y te trae lo que toque del suelo
  de:
    name: Galarnuss-Zweig
    desc: Du wirfst einen Bumerang, der Gegner betäubt und dir mitbringt, was er am Boden berührt
  it:
    name: Ramo Galarnoce
    desc: Lanci un boomerang che stordisce i nemici e ti riporta quello che tocca a terra
  pt:
    name: Galho de Galarica
    desc: Você lança um bumerangue que atordoa os inimigos e traz o que ele tocar no chão
  ru:
    name: Ветка галарики
    desc: Бросаешь бумеранг, который оглушает врагов и приносит тебе то, чего коснется на полу
  ja:
    name: ガラナツのえだ
    desc: ブーメランを投げる。敵を気絶させ、床に落ちているものを拾って戻ってくる
  ko:
    name: 가라두구가지
    desc: 적을 기절시키고 바닥에서 닿은 것을 가져오는 부메랑을 던진다
  zh:
    name: 伽勒豆蔻枝
    desc: 掷出回力镖，使敌人眩晕，并把碰到的地上物品带回给你
  zt:
    name: 伽勒荳蔻枝
    desc: 擲出迴力鏢，讓敵人暈眩，並把碰到的地上物品帶回給你
---
Vous lancez un boomerang qui étourdit les ennemis et vous rapporte ce qu'il touche au sol

## Fonctionnement
- Vous lancez un boomerang dans la direction où vous regardez. Il va à 260 px puis revient vers vous, où que vous soyez.
- Il traverse les ennemis et les rochers et rebondit sur les murs. Chaque ennemi touché subit 2 fois vos Dégâts une fois par lancer, et est étourdi 1 seconde. Les boss subissent les dégâts mais ne sont pas étourdis.
- Il peut faire un [coup critique](../mechanics/criticos.html), mais les effets de tirs de vos objets ne s'y ajoutent pas.
- Les bonus gratuits qu'il survole sont emportés et ramenés vers vous. Les articles de boutique restent en place.
- Il ne demande qu'une charge.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : vous lancez deux boomerangs.
