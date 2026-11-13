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
- label: Explosion
  value: 10 % par coup (+1 % par Chance)
- label: Dégâts
  value: 80 % du coup, rayon 46 px
- label: Brûlure
  value: 2 s, seulement si type Feu
icon: items-ps/medicine/lava-cookie.png
sprite: true
names:
  en:
    name: Lava Cookie
    desc: Sometimes your shots burst into flames on hit (they don't hurt you); if your Pokémon is Fire-type, they also burn
  es:
    name: Galleta Lava
    desc: A veces tus disparos estallan en llamas al golpear (no te hieren); si tu Pokémon es de tipo Fuego, además queman
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
Parfois vos tirs s'embrasent à l'impact (sans vous blesser) ; si votre Pokémon est de type Feu, ils brûlent aussi

{{< clip >}}

## Fonctionnement
- Chaque coup a 10 % de chance (+1 % par Chance) de s'embraser : une explosion de rayon 46 px qui inflige 80 % des dégâts du coup à tous les ennemis dans la zone, cible comprise.
- Si votre Pokémon est de type Feu, l'explosion brûle aussi ces ennemis 2 s (voir [effets de statut](../mechanics/estados.html)).
- L'explosion ne vous blesse jamais et ne brise pas les rochers ni n'ouvre les portes secrètes.

## Cumul
- Il ne se cumule pas : un second exemplaire n'augmente pas la chance.
