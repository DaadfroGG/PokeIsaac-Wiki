---
title: Racinénergie
id: a_raiz_energia
kind: active
family: ability
tier: 2
pools:
- treasure
- boss
pool_weight: 2
charge: 6
details:
- label: Durée
  value: 6 s
- label: Vitesse
  value: +1,2
- label: Dégâts au contact
  value: Vos Dégâts ×0,8 (min. 2), 7,5 fois par seconde
- label: Pendant l'effet
  value: Rien ne vous blesse
icon: items-ps/medicine/energy-root.png
sprite: true
names:
  en:
    name: Energy Root
    desc: For 6 seconds you're invulnerable, faster and hurt whatever you touch
  es:
    name: Raíz Energía
    desc: Durante 6 segundos eres invulnerable, vas más rápido y hieres a quien tocas
  de:
    name: Kraftwurzel
    desc: 6 Sekunden lang bist du unverwundbar, schneller und verletzt alles, was du berührst
  it:
    name: Radicenergia
    desc: Per 6 secondi sei invulnerabile, più veloce e ferisci chiunque tocchi
  pt:
    name: Raiz de Energia
    desc: Por 6 segundos você fica invulnerável, mais rápido e fere tudo que tocar
  ru:
    name: Энергетический корень
    desc: На 6 секунд ты неуязвим, быстрее и ранишь всех, кого касаешься
  ja:
    name: ちからのねっこ
    desc: 6秒間、無敵で移動が速くなり、触れたものにダメージを与える
  ko:
    name: 힘의뿌리
    desc: 6초 동안 무적이 되고, 더 빨라지며, 닿는 적에게 피해를 준다
  zh:
    name: 元气根
    desc: 6秒内你无敌、更快，并会伤害接触到的一切
  zt:
    name: 元氣根
    desc: 6秒內你會無敵、移動更快，並傷害碰到的一切
---
Pendant 6 secondes, vous êtes invulnérable, plus rapide et blessez tout ce que vous touchez

## Fonctionnement
- Pendant 6 secondes rien ne peut vous blesser, et vous gagnez +1,2 en Vitesse.
- Chaque ennemi que vous touchez, boss compris, subit 0,8 fois vos Dégâts (au moins 2) toutes les 0,13 seconde (7,5 fois par seconde) tant qu'il reste au contact.
- Il se déclenche toujours quand vous l'utilisez, même dans une salle vide, et consomme la charge.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : le minuteur repart simplement à 6 secondes.
