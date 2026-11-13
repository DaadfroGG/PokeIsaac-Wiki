---
title: Lait Meumeu
id: leche_mumu
kind: passive
category: defense
family: core
tier: 1
pools:
- shop
- boss
pool_weight: 2
stats:
- text: Soin complet
  good: true
details:
- label: Au ramassage
  value: Vous soigne complètement
- label: Ensuite
  value: Soin au-delà des PV pleins > cœur d'âme
- label: Plafond
  value: Un cœur d'âme par soin ; 6 au total
icon: items-ps/medicine/moomoo-milk.png
sprite: true
names:
  en:
    name: Moomoo Milk
    desc: Fully heals you; from now on, healing at full health turns into a soul heart (up to one each time)
  es:
    name: Leche Mu-mu
    desc: Te cura del todo; desde ahora, lo que te curas con la vida llena se vuelve corazón de alma (hasta uno cada vez)
  de:
    name: Kuhmuh-Milch
    desc: Heilt dich vollständig; ab jetzt wird Heilung bei vollem Leben zu einem Seelenherz (höchstens eins pro Mal)
  it:
    name: Latte Mumu
    desc: Ti cura completamente; da ora, le cure a vita piena diventano un cuore d'anima (fino a uno per volta)
  pt:
    name: Leite Mu-mu
    desc: Cura você totalmente; a partir de agora, a cura com a vida cheia vira coração de alma (até um por vez)
  ru:
    name: Молоко Мумуу
    desc: Полностью лечит тебя; отныне лечение при полном здоровье превращается в сердце души (не больше одного за раз)
  ja:
    name: モーモーミルク
    desc: 全回復する；以後、HP満タンで回復したぶんは、ソウルハートになる（1回につき最大1個）
  ko:
    name: 튼튼밀크
    desc: 체력을 모두 회복한다. 이후 체력이 가득할 때 받는 회복은 영혼 하트가 된다 (1번에 최대 1개)
  zh:
    name: 哞哞鲜奶
    desc: 为你恢复全部生命；此后满血时的治疗会变成灵魂之心（每次最多一颗）
  zt:
    name: 哞哞鮮奶
    desc: 完全恢復你的生命；之後在生命全滿時的治療會變成靈魂之心（每次最多一顆）
---
Vous soigne complètement ; désormais, les soins reçus avec toute votre vie deviennent un cœur d'âme (un au maximum à chaque fois)

## Fonctionnement
- Au ramassage, il vous soigne complètement.
- Ensuite, chaque fois qu'un soin dépasserait vos PV max, l'excédent devient des cœurs d'âme : jusqu'à un cœur d'âme entier (2 demi-cœurs) par soin. Le total de cœurs d'âme reste plafonné à 6.
- Les objets qui n'agissent normalement que lorsqu'il vous manque des PV (Grosse Racine, Plume Santé, Fossile Mâchoire) continuent à marcher à PV pleins, et leur soin se transforme en cœurs d'âme.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien.
