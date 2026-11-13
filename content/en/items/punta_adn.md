---
title: DNA Splicers
id: punta_adn
kind: active
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
charge: 1
details:
- label: Charge
  value: 1 room
- label: Target
  value: The farthest enemy (not bosses)
- label: Stunned
  value: 1.5 seconds
- label: You
  value: Invulnerable 0.5 seconds
icon: items-ps/key-item/dna-splicers.png
sprite: true
names:
  es:
    name: Punta ADN
    desc: Te cambias de sitio con el enemigo más lejano y lo dejas aturdido
  fr:
    name: Pointeau ADN
    desc: Vous échangez votre place avec l'ennemi le plus éloigné et l'étourdissez
  de:
    name: DNS-Keil
    desc: Du tauschst den Platz mit dem am weitesten entfernten Gegner und betäubst ihn
  it:
    name: Cuneo DNA
    desc: Scambi posto con il nemico più lontano e lo lasci stordito
  pt:
    name: Cunha de DNA
    desc: Você troca de lugar com o inimigo mais distante e o deixa atordoado
  ru:
    name: ДНК-сплайсеры
    desc: Меняешься местами с самым дальним врагом и оглушаешь его
  ja:
    name: いでんしのくさび
    desc: 最も遠い敵と位置を入れ替え、その敵をまひさせる
  ko:
    name: 유전자쐐기
    desc: 가장 먼 적과 자리를 바꾸고 기절시킨다
  zh:
    name: 基因之楔
    desc: 与最远的敌人互换位置并使其眩晕
  zt:
    name: 基因之楔
    desc: 與最遠的敵人互換位置，並讓牠暈眩
---
You swap places with the farthest enemy and leave it stunned

## How it works
- Charge: 1 room. Clear a single room and it is ready again.
- You swap places with the enemy that is farthest from you (bosses are never chosen, nor enemies that can't be hurt at that moment). It stays stunned for 1.5 seconds.
- You are invulnerable for 0.5 seconds after the swap.
- If there is no valid enemy in the room, it does nothing and no charge is spent.

## Stacking
- Active items don't stack: you hold one at a time. Picking up another active swaps them, and the old one stays on the pedestal with its charge.
- With a [Cell Battery](d_pila.html) the item can store twice its charge.
