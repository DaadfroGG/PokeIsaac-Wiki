---
title: Attaque +
id: ataquex
kind: passive
category: stats
family: core
tier: 1
pools:
- treasure
- boss
pool_weight: 2
stats:
- text: Dégâts +0,5
  good: true
- text: Vit. tir +2
  good: true
details:
- label: Dégâts
  value: +0,5
- label: Vitesse des tirs
  value: '+2'
icon: items/x-attack.png
sprite: true
names:
  en:
    name: X Attack
    desc: Damage +0.5, shot speed +
  es:
    name: Ataque X
    desc: Daño +0.5, velocidad de disparo +
  de:
    name: X-Angriff
    desc: Schaden +0,5, Schusstempo +
  it:
    name: Attacco X
    desc: Danni +0,5, velocità dei tiri +
  pt:
    name: Ataque X
    desc: Dano +0,5, velocidade de tiro +
  ru:
    name: Атака X
    desc: Урон +0,5, скорость выстрелов +
  ja:
    name: プラスパワー
    desc: ダメージ+0.5、弾速+
  ko:
    name: 플러스파워
    desc: 대미지 +0.5, 탄속 +
  zh:
    name: 力量强化
    desc: 伤害+0.5，弹速+
  zt:
    name: 力量強化
    desc: 傷害+0.5、彈速+
---
Dégâts +0,5, vitesse des tirs +

## Fonctionnement
- Le +0,5 en Dégâts est un bonus fixe : il s'ajoute à vos autres bonus fixes et suit les [rendements décroissants](../mechanics/rendimientos.html) (en entier jusqu'à +3 au total, puis de moins en moins).
- Vitesse des tirs +2 : vos tirs volent plus vite (ils atteignent leur portée plus tôt). Elle ne descend jamais sous 4.
- **Effet réel** pour un Pokémon typique (4 dégâts, 4,3 tirs/s, vitesse 4, portée 350 px, vitesse des tirs 9, 4 cœurs), première copie seulement: Dégâts +0,5: 4 → 4,5 (+12 %) · Vitesse des tirs +2: 9 → 11 (+22 %). Voir [Statistiques en pratique](../mechanics/estadisticas_reales.html) pour le comportement des totaux.

## Cumul
- Tout se cumule : chaque exemplaire ajoute à nouveau ses stats (avec les rendements décroissants sur Dégâts).
