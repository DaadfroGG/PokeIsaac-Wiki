---
title: Pierre Lune
id: p_lunar
kind: passive
category: evo
family: core
tier: 1
pools:
- treasure
pool_weight: 2
stats:
- text: Pierre d'évolution
  good: true
details:
- label: Évolue
  value: Évoli > Noctali
- label: Étages impairs
  value: Dégâts ×1,2
- label: Étages pairs
  value: Vitesse +0,5
icon: items/moon-stone.png
sprite: true
names:
  en:
    name: Moon Stone
    desc: Evolves Eevee (Umbreon). Also, on odd floors you deal ×1.2 damage and on even floors you run faster
  es:
    name: Piedra Lunar
    desc: Evoluciona a Eevee (Umbreon). Además, en las plantas impares haces ×1,2 de daño y en las pares corres más
  de:
    name: Mondstein
    desc: Entwickelt Evoli (zu Nachtara). Außerdem machst du auf ungeraden Etagen ×1,2 Schaden und läufst auf geraden schneller
  it:
    name: Pietralunare
    desc: Fa evolvere Eevee (Umbreon). Inoltre, ai piani dispari infliggi ×1,2 di danni e ai piani pari corri più veloce
  pt:
    name: Pedra da Lua
    desc: Evolui o Eevee (Umbreon). Além disso, nos andares ímpares você causa ×1,2 de dano e nos pares corre mais
  ru:
    name: Лунный камень
    desc: Эволюционирует Иви (в Амбреона). Кроме того, на нечетных этажах ты наносишь ×1,2 урона, а на четных бегаешь быстрее
  ja:
    name: つきのいし
    desc: イーブイをブラッキーに進化させる。さらに、奇数階ではダメージ×1.2、偶数階では移動が速くなる
  ko:
    name: 달의돌
    desc: 이브이를 진화시킨다(블래키). 또한 홀수 층에서는 대미지 ×1.2, 짝수 층에서는 더 빨리 달린다
  zh:
    name: 月之石
    desc: 使伊布进化（月亮伊布）。此外，在单数层你造成×1.2伤害，在双数层你跑得更快
  zt:
    name: 月之石
    desc: 讓伊布進化（月亮伊布）。此外，在奇數樓層造成×1.2傷害，在偶數樓層跑得更快
---
Fait évoluer Évoli (Noctali). De plus, aux étages impairs vous infligez ×1,2 dégâts et aux étages pairs vous courez plus vite

## Fonctionnement

- Utilisée sur Évoli (avant son évolution), elle le transforme en Noctali, et son type devient Ténèbres.
- La première évolution donne +1 cœur (et le soigne), +1 Dégâts et vous grossit un peu. Ce bonus vient de l'évolution, pas de la pierre elle-même.
- Une fois Évoli évolué, les pierres suivantes ne le font plus évoluer, mais leur effet ci-dessous reste actif.
- Les Pokémon autres qu'Évoli n'évoluent pas avec cette pierre ; ils profitent quand même de son effet.
- L'effet fonctionne quel que soit le Pokémon joué et ne dépend pas d'une évolution.
- Si vous avez une [Pierre Éternelle](piedra_eterna.html), l'évolution est bloquée : vous gagnez +0,7 Dégâts et +1 cœur à la place, et l'effet reste actif.

## Effet

- Aux étages impairs (1, 3, 5...), vos dégâts sont multipliés par 1,2. Cela se voit sur votre stat de Dégâts et compte dans le [plafond des multiplicateurs de dégâts](../mechanics/rendimientos.html).
- Aux étages pairs (2, 4, 6...), vous gagnez +0,5 de Vitesse à la place.
- Le bonus change automatiquement quand vous prenez l'escalier.

## Cumul

- Un deuxième exemplaire de la même pierre n'ajoute rien : l'effet est simplement activé.
- Des pierres différentes cumulent leurs effets.
