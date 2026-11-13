---
title: Energy Root
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
- label: Duration
  value: 6 s
- label: Speed
  value: '+1.2'
- label: Contact damage
  value: Your Damage ×0.8 (min. 2), 7.5 times per second
- label: During it
  value: Nothing hurts you
icon: items-ps/medicine/energy-root.png
sprite: true
names:
  es:
    name: Raíz Energía
    desc: Durante 6 segundos eres invulnerable, vas más rápido y hieres a quien tocas
  fr:
    name: Racinénergie
    desc: Pendant 6 secondes, vous êtes invulnérable, plus rapide et blessez tout ce que vous touchez
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
For 6 seconds you're invulnerable, faster and hurt whatever you touch

## How it works
- For 6 seconds nothing can hurt you, and you get +1.2 Speed.
- Every enemy you touch, bosses included, takes 0.8 times your Damage (at least 2) every 0.13 seconds (7.5 times per second) while it stays in contact.
- It always goes off when you press it, even in an empty room, and uses the charge.
- It doesn't work in the final arena of a [Trainer Battle](../mechanics/batalla.html).

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With [Devon Scuba Gear](d_bombona_devon.html): nothing more: the timer just restarts at 6 seconds.
