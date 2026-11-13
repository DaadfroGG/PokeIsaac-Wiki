---
title: Lava Cookie
id: m_galleta_lava
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Blast
  value: 10 % per hit (+1 % per Luck)
- label: Blast damage
  value: 80 % of the hit, radius 46 px
- label: Burn
  value: 2 s, only if Fire-type
icon: items-ps/medicine/lava-cookie.png
sprite: true
names:
  es:
    name: Galleta Lava
    desc: A veces tus disparos estallan en llamas al golpear (no te hieren); si tu Pokémon es de tipo Fuego, además queman
  fr:
    name: Lava Cookie
    desc: Parfois vos tirs s'embrasent à l'impact (sans vous blesser) ; si votre Pokémon est de type Feu, ils brûlent aussi
  de:
    name: Lavakeks
    desc: Manchmal gehen deine Schüsse beim Treffen in Flammen auf (sie verletzen dich nicht); bist du vom Typ Feuer, brennen sie zusätzlich
  it:
    name: Lavottino
    desc: A volte i tuoi tiri esplodono in fiamme all'impatto (non ti feriscono); se il tuo Pokémon è di tipo Fuoco, bruciano anche
  pt:
    name: Biscoito Lava
    desc: Às vezes seus tiros explodem em chamas ao acertar (não ferem você); se seu Pokémon for do tipo Fogo, também queimam
  ru:
    name: Лавовое печенье
    desc: Иногда твои выстрелы вспыхивают пламенем при попадании (тебя не ранят); если твой покемон типа Огонь, они еще и поджигают
  ja:
    name: フエンせんべい
    desc: ときどきショットが命中時に炎を上げて爆ぜる（自分には当たらない）。ほのおタイプなら、やけども与える
  ko:
    name: 용암전병
    desc: 가끔 탄이 맞을 때 불꽃으로 터진다(나는 다치지 않는다). 불꽃 타입 포켓몬이면 화상도 입힌다
  zh:
    name: 釜炎仙贝
    desc: 你的弹有时会在命中时爆出火焰（不会伤到你）；若你的宝可梦是火属性，还会灼伤敌人
  zt:
    name: 釜炎仙貝
    desc: 你的彈有時會在命中時爆出火焰（不會傷到你）；如果你的寶可夢是火屬性，還會造成灼傷
---
Sometimes your shots burst into flames on hit (they don't hurt you); if your Pokémon is Fire-type, they also burn

{{< clip >}}

## How it works
- Each hit has a 10 % chance (+1 % per Luck) to burst into flames: a blast of radius 46 px that deals 80 % of the hit's damage to every enemy inside it, the target included.
- If your Pokémon is Fire-type the blast also burns those enemies for 2 s (see [status effects](../mechanics/estados.html)).
- The blast never hurts you and does not break rocks or open secret doors.

## Stacking
- It does not stack: a second copy does not raise the chance.
