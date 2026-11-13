---
title: Croc Dragon
id: colmillo_dragon
kind: passive
category: shot
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Par coup
  value: +8 % contre cet ennemi
- label: Plafond
  value: +72 % (10e coup)
icon: items/dragon-fang.png
sprite: true
names:
  en:
    name: Dragon Fang
    desc: 'Rend: each hit on the same enemy deals 8 % more than the last (up to +72 %)'
  es:
    name: Colmillo Dragón
    desc: 'Desgarro: cada golpe a un mismo enemigo le hace un 8 % más que el anterior (hasta +72 %)'
  de:
    name: Drachenzahn
    desc: 'Aufreißen: Jeder Treffer auf denselben Gegner richtet 8 % mehr Schaden an als der vorige (bis +72 %)'
  it:
    name: Dentedidrago
    desc: 'Squarcio: ogni colpo allo stesso nemico fa l''8 % in più del precedente (fino a +72 %)'
  pt:
    name: Presa de Dragão
    desc: 'Rasgo: cada golpe no mesmo inimigo causa 8 % a mais que o anterior (até +72 %)'
  ru:
    name: Клык дракона
    desc: 'Разрыв: каждый удар по одному и тому же врагу наносит на 8 % больше предыдущего (до +72 %)'
  ja:
    name: りゅうのキバ
    desc: 引き裂き：同じ敵への攻撃は、直前より8%ずつダメージが増える（最大+72%）
  ko:
    name: 용의이빨
    desc: '찢기: 같은 적을 때릴 때마다 직전보다 8 % 더 강하다 (최대 +72 %)'
  zh:
    name: 龙之牙
    desc: 撕裂：对同一敌人的每次攻击比上一次多造成8 %伤害（最高+72 %）
  zt:
    name: 龍之牙
    desc: 撕裂：對同一個敵人的每次攻擊都比上一次多8 %傷害（最多+72 %）
---
Lacération : chaque coup sur un même ennemi inflige 8 % de plus que le précédent (jusqu'à +72 %)

## Fonctionnement

- Chaque ennemi garde son propre compteur de coups reçus. Votre 1er coup inflige des dégâts normaux, le 2e +8 %, le 3e +16 % et ainsi de suite, jusqu'à +72 % dès le 10e coup.
- Le compteur appartient à l'ennemi et ne se réinitialise pas quand vous arrêtez de tirer ; il disparaît à la mort de l'ennemi.
- Le bonus s'applique par coup : il n'apparaît pas dans la stat de Dégâts et n'est pas limité par le plafond ×3 des multiplicateurs de dégâts.

## Cumul

- Un deuxième exemplaire ne change rien.
