---
title: Balle Lumière
id: bola_luminosa
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Dégâts +0,5
  good: true
details:
- label: Dégâts
  value: +0,5
- label: Pokémon Électrik
  value: Dégâts ×2
icon: items-ps/hold-item/light-ball.png
sprite: true
names:
  en:
    name: Light Ball
    desc: Damage +0.5; if your Pokémon is Electric, also damage ×2
  es:
    name: Bola Luminosa
    desc: Daño +0.5; si tu Pokémon es eléctrico, además daño ×2
  de:
    name: Kugelblitz
    desc: Schaden +0,5; ist dein Pokémon vom Typ Elektro, zusätzlich Schaden ×2
  it:
    name: Elettropalla
    desc: Danni +0,5; se il tuo Pokémon è di tipo Elettro, i danni sono anche ×2
  pt:
    name: Bola de Luz
    desc: Dano +0,5; se seu Pokémon é Elétrico, o dano ainda é ×2
  ru:
    name: Световой шар
    desc: Урон +0,5; если твой покемон типа Электро, еще и урон ×2
  ja:
    name: でんきだま
    desc: ダメージ+0.5。自分のポケモンがでんきタイプなら、さらにダメージ×2
  ko:
    name: 전기구슬
    desc: 대미지 +0.5; 내 포켓몬이 전기 타입이면 대미지 ×2도 적용
  zh:
    name: 电气球
    desc: 伤害+0.5；如果你的宝可梦是电属性，伤害再×2
  zt:
    name: 電氣球
    desc: 傷害+0.5；如果你的寶可夢是電屬性，傷害再×2
---
Dégâts +0,5 ; si votre Pokémon est de type Électrik, dégâts ×2 en plus

## Fonctionnement
- Dégâts +0,5 : un bonus fixe soumis aux [rendements décroissants](../mechanics/rendimientos.html) des Dégâts fixes (en entier jusqu'à +3, pour moitié jusqu'à +8, un quart jusqu'à +40, puis 5 %).
- Si le Pokémon que vous jouez est de type Électrik, vos Dégâts sont aussi multipliés par 2. C'est un multiplicateur de Dégâts : il se combine aux autres multiplicateurs, qui comptent en entier jusqu'à ×2,3 au total, puis pour un quart seulement, sans jamais dépasser ×3 (voir [Rendements décroissants](../mechanics/rendimientos.html)).
- Un Pokémon d'un autre type ne reçoit que les +0,5.

## Cumul
- Le +0,5 fixe s'ajoute à nouveau avec chaque exemplaire. Le ×2 est tout ou rien : une seconde Balle Lumière ne le porte pas à ×4.
