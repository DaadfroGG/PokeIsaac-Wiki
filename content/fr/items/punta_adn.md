---
title: Pointeau ADN
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
  value: 1 salle
- label: Cible
  value: L'ennemi le plus éloigné (pas les boss)
- label: Étourdi
  value: 1,5 seconde
- label: Vous
  value: Invulnérable 0,5 seconde
icon: items-ps/key-item/dna-splicers.png
sprite: true
names:
  en:
    name: DNA Splicers
    desc: You swap places with the farthest enemy and leave it stunned
  es:
    name: Punta ADN
    desc: Te cambias de sitio con el enemigo más lejano y lo dejas aturdido
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
Vous échangez votre place avec l'ennemi le plus éloigné et l'étourdissez

## Fonctionnement
- Charge : 1 salle. Terminez une seule salle et il est de nouveau prêt.
- Vous échangez votre place avec l'ennemi le plus éloigné de vous (les boss ne sont jamais choisis, ni les ennemis qui ne peuvent pas être blessés à cet instant). Il reste étourdi 1,5 seconde.
- Vous êtes invulnérable 0,5 seconde après l'échange.
- S'il n'y a aucun ennemi valide dans la salle, il ne fait rien et aucune charge n'est dépensée.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec une [Pile Cellulaire](d_pila.html), l'objet peut stocker le double de charge.
