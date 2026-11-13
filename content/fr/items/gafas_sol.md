---
title: Lunettes Noires
id: gafas_sol
kind: passive
category: shot
family: core
tier: 2
pool_weight: 2
stats:
- text: Dégâts +0,3
  good: true
details:
- label: Dégâts
  value: +0,3
- label: Chance de critique
  value: +8 % (par exemplaire)
- label: Étourdissement
  value: 0,75 s sur un coup critique, pas les boss
icon: items/black-glasses.png
sprite: true
names:
  en:
    name: Black Glasses
    desc: 'Dazzling critical hits: the enemy freezes in place'
  es:
    name: Gafas de Sol
    desc: 'Golpes críticos que deslumbran: el enemigo se queda quieto'
  de:
    name: Schattenbrille
    desc: 'Volltreffer, die blenden: Der Gegner bleibt stehen'
  it:
    name: Occhialineri
    desc: 'Colpi critici che abbagliano: il nemico resta fermo'
  pt:
    name: Óculos Escuros
    desc: 'Golpes críticos que ofuscam: o inimigo fica parado'
  ru:
    name: Черные очки
    desc: 'Ослепляющие криты: враг замирает на месте'
  ja:
    name: くろいメガネ
    desc: まぶしい急所攻撃：敵が動きを止める
  ko:
    name: 검은안경
    desc: '눈부신 급소: 적이 그 자리에 멈춘다'
  zh:
    name: 黑色眼镜
    desc: 令敌人目眩的暴击：敌人会愣在原地
  zt:
    name: 黑色眼鏡
    desc: 會心一擊令敵人目眩：敵人會定住不動
---
Coups critiques éblouissants : l'ennemi reste immobile

## Fonctionnement
- Elles donnent les +8 % habituels de chance de coup critique, en plus des bonus Combat/Ténèbres et de la Chance (voir [coups critiques](../mechanics/criticos.html)).
- Tout ennemi touché par un tir critique est étourdi 0,75 s : il ne bouge plus et n'attaque plus. L'étourdissement se déclenche au coup, donc avec toutes les sources de critiques (y compris le critique garanti du [Joyau Normal](gema_normal.html)).
- Les boss ne sont jamais étourdis ; ils subissent quand même les dégâts critiques.
- Seuls les critiques de vos tirs comptent ; brûlure, poison et éclairs en chaîne n'étourdissent pas.

## Cumul
- Dégâts +0,3 et +8 % de chance de critique s'ajoutent à chaque exemplaire.
- L'étourdissement est actif ou non : plus d'exemplaires ne le prolongent pas.
