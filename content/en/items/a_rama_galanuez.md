---
title: Galarica Twig
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
  value: Flies 260 px, then comes back to you
- label: Damage
  value: Your Damage ×2 per enemy
- label: Stun
  value: 1 s (not bosses)
- label: Pickups
  value: Carried back to you
icon: items-ps/other-item/galarica-twig.png
sprite: true
names:
  es:
    name: Rama de Galanuez
    desc: Lanzas un bumerán que aturde a los enemigos y te trae lo que toque del suelo
  fr:
    name: Branche Galanoa
    desc: Vous lancez un boomerang qui étourdit les ennemis et vous rapporte ce qu'il touche au sol
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
You throw a boomerang that stuns enemies and brings back whatever it touches on the floor

## How it works
- You throw a boomerang the way you are facing. It flies 260 px, then comes back to you wherever you are.
- It goes through enemies and rocks and bounces off walls. Each enemy it touches takes 2 times your Damage once per throw, and is stunned for 1 second. Bosses take the damage but aren't stunned.
- It can be a [critical hit](../mechanics/criticos.html), but your items' shot effects are not added to it.
- Free pickups it passes over are carried along and brought back to you. Shop items stay put.
- It only needs 1 charge.
- It always goes off when you press it, even in an empty room, and uses the charge.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): you throw two boomerangs.
