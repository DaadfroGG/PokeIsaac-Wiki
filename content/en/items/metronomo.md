---
title: Metronome
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
- label: Damage
  value: +5 % per volley in a row
- label: Cap
  value: +60 % (after 12 volleys)
- label: Reset
  value: A pause longer than your fire delay + 0.2 s
icon: items/metronome.png
sprite: true
names:
  es:
    name: Metrónomo
    desc: Disparar sin parar sube el daño, hasta +60%
  fr:
    name: Métronome
    desc: Tirer sans arrêt augmente les dégâts, jusqu'à +60%
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
Firing nonstop raises damage, up to +60%

## How it works
- Each volley you fire right after the previous one adds +5 % damage, up to +60 % after 12 volleys in a row.
- "Right after" means within your normal time between shots plus 0.2 s. Stop shooting longer than that and the bonus drops back to 0 at once.
- The bonus is applied to the shots when they are fired, so it doesn't show in the Damage stat on the HUD and is not limited by the ×3 cap on damage multipliers.
- All shots of a volley get the same bonus.
- With a special weapon instead of normal shots, the bonus builds up the same way while you keep attacking (+5 % for each fire delay of nonstop attacking, up to +60 %) and fades quickly when you stop.

## Stacking
- A second copy does nothing more: the cap stays at +60 %.
