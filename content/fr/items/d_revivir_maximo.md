---
title: Rappel Max
id: d_revivir_maximo
kind: passive
category: defense
family: defense
tier: 3
pools:
- boss
- secret
- shop
pool_weight: 2
details:
- label: Effet
  value: Ressuscite une fois après la mort
- label: PV à la résurrection
  value: 2 cœurs
- label: Après la résurrection
  value: 2,5 s d'invulnérabilité
- label: Utilisations
  value: '1'
icon: items-ps/medicine/max-revive.png
sprite: true
names:
  en:
    name: Max Revive
    desc: If you fall, you come back to life with two hearts (used up)
  es:
    name: Revivir Máximo
    desc: Si caes, vuelves a la vida con dos corazones (se gasta)
  de:
    name: Top-Beleber
    desc: Wenn du fällst, kehrst du mit zwei Herzen ins Leben zurück (verbraucht sich)
  it:
    name: Revitalizz. Max
    desc: Se cadi, torni in vita con due cuori (si consuma)
  pt:
    name: Reviver Máximo
    desc: Se cair, você volta à vida com dois corações (é consumido)
  ru:
    name: Макс-оживление
    desc: Если тебя победят, возвращаешься к жизни с двумя сердцами (расходуется)
  ja:
    name: げんきのかたまり
    desc: 倒されても、ハート2個で息を吹き返す（使い切り）
  ko:
    name: 기력의덩어리
    desc: 쓰러지면 하트 2칸으로 되살아난다(소모)
  zh:
    name: 活力块
    desc: 倒下时以两颗心起死回生（用后消失）
  zt:
    name: 活力塊
    desc: 倒下時帶著兩顆愛心重生（使用後消失）
---
Si vous tombez K.O., vous revenez à la vie avec deux cœurs (usage unique)

## Fonctionnement
- La première fois que vous devriez mourir, vous revenez à la vie avec 2 cœurs (ou vos PV max s'ils sont plus bas) et 2,5 secondes d'invulnérabilité.
- Il est consommé quand il se déclenche (il reste dans l'inventaire mais ne fait plus rien).
- Il agit avant toute autre seconde chance, comme la [Queue Skitty](d_cola_skitty.html).

## Cumul
- Un second exemplaire ramassé avant d'utiliser le premier ne fait rien de plus : une seule résurrection est sauvée.
