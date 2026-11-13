---
title: Métronome
id: metronomo
kind: passive
category: shot
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Dégâts
  value: +5 % par salve d'affilée
- label: Plafond
  value: +60 % (après 12 salves)
- label: Remise à zéro
  value: Une pause plus longue que votre délai de tir + 0,2 s
icon: items/metronome.png
sprite: true
names:
  en:
    name: Metronome
    desc: Firing nonstop raises damage, up to +60%
  es:
    name: Metrónomo
    desc: Disparar sin parar sube el daño, hasta +60%
  de:
    name: Metronom
    desc: Dauerfeuer erhöht den Schaden, bis zu +60%
  it:
    name: Plessimetro
    desc: Sparare senza sosta aumenta i danni, fino a +60%
  pt:
    name: Metrônomo
    desc: Atirar sem parar aumenta o dano, até +60%
  ru:
    name: Метроном
    desc: Непрерывная стрельба повышает урон, до +60%
  ja:
    name: メトロノーム
    desc: 撃ち続けるとダメージが上がる（最大+60%）
  ko:
    name: 메트로놈
    desc: 쉬지 않고 쏘면 대미지가 올라간다, 최대 +60%
  zh:
    name: 节拍器
    desc: 不停射击会提升伤害，最高+60%
  zt:
    name: 節拍器
    desc: 不停射擊會提升傷害，最多+60%
---
Tirer sans arrêt augmente les dégâts, jusqu'à +60%

## Fonctionnement
- Chaque salve tirée juste après la précédente ajoute +5 % de dégâts, jusqu'à +60 % après 12 salves d'affilée.
- « Juste après » veut dire dans votre délai normal entre deux tirs plus 0,2 s. Arrêtez de tirer plus longtemps et le bonus retombe d'un coup à 0.
- Le bonus s'applique aux tirs au moment où ils partent : il n'apparaît donc pas dans la stat Dégâts du HUD et n'est pas limité par le plafond de ×3 des multiplicateurs de dégâts.
- Tous les tirs d'une salve ont le même bonus.
- Avec une arme spéciale au lieu des tirs normaux, le bonus monte de la même façon tant que vous attaquez (+5 % par délai de tir d'attaque sans pause, jusqu'à +60 %) et redescend vite quand vous arrêtez.

## Cumul
- Un deuxième exemplaire n'apporte rien de plus : le plafond reste à +60 %.
