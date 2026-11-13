---
title: Poids Pouvoir
id: d_pesa_recia
kind: passive
category: utility
family: defense
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Cœurs +1
  good: true
- text: Vitesse -0,2
  good: false
- text: Soigne 1 cœur
  good: true
details:
- label: PV max
  value: +1 cœur
- label: Soin
  value: 1 cœur à la prise
- label: Vitesse
  value: −0,2
- label: Marche
  value: Brise caisses, tonneaux, buissons et vases
- label: Attractions
  value: Ne peuvent plus vous entraîner
icon: items-ps/ev-item/power-weight.png
sprite: true
names:
  en:
    name: Power Weight
    desc: 'Heavy steps: you break crates and vases as you walk and tornadoes can''t move you; heart +1, speed -'
  es:
    name: Pesa Recia
    desc: 'Pisas fuerte: rompes cajas y jarrones al andar y no te mueven los tornados; corazón +1, velocidad -'
  de:
    name: Machtgewicht
    desc: 'Du stampfst kräftig auf: Du zerstörst Kisten und Vasen beim Gehen und Tornados bewegen dich nicht; Herz +1, Tempo -'
  it:
    name: Vigorpeso
    desc: 'Calpesti forte: rompi casse e vasi mentre cammini e i tornado non ti spostano; cuore +1, velocità -'
  pt:
    name: Peso Poderoso
    desc: 'Pisa forte: você quebra caixas e vasos ao andar e os tornados não movem você; coração +1, velocidade -'
  ru:
    name: Силовой груз
    desc: 'Тяжелая поступь: ломаешь ящики и вазы на ходу, и смерчи тебя не сдвигают; сердце +1, скорость -'
  ja:
    name: パワーウエイト
    desc: 重い足取り：歩くだけで箱やつぼを壊し、竜巻にも動かされない。ハート+1、移動速度-
  ko:
    name: 파워웨이트
    desc: '묵직한 발걸음: 걸으면 상자와 항아리를 부수고 회오리에 밀리지 않는다. 하트 +1, 속도 -'
  zh:
    name: 力量负重
    desc: 脚步沉重：走路时会踩碎箱子和花瓶，龙卷风无法移动你；心+1，速度-
  zt:
    name: 力量負重
    desc: 腳步沉重：走路時會踩碎箱子和花瓶，龍捲風也無法移動你；愛心+1，速度-
---
Pas lourds : vous cassez caisses et vases en marchant et les tornades ne vous déplacent pas ; cœur +1, vitesse -

## Fonctionnement
- PV max +1 cœur (dans la limite de 12 cœurs), et il soigne 1 cœur à la prise.
- Vitesse −0,2, retirée en entier. Votre vitesse ne peut jamais descendre sous 1,6.
- Tant que vous vous déplacez, vous brisez les [caisses](../world/crate.html), [tonneaux](../world/barrel.html), [buissons](../world/bush.html) et [vases](../world/vase.html) contre lesquels vous marchez, sans avoir à leur tirer dessus.
- Les attaques qui vous attirent (tornades, tourbillons) ne peuvent plus vous déplacer.

## Cumul
- Chaque exemplaire ajoute encore +1 cœur et −0,2 de Vitesse. Le bris d'objets et l'immunité aux attractions sont tout ou rien.
