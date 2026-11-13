---
title: Dusk Ball
id: f_ocaso_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
- devil
pool_weight: 2
details:
- label: Companion
  value: Zubat (Poison)
- label: Bite
  value: 0.45 × your Damage (at least 1.2), every 1/3 s
- label: Healing
  value: Half a heart every 8 kills
icon: items-ps/ball/dusk.png
sprite: true
names:
  es:
    name: Ocaso Ball
    desc: Un Zubat persigue a los enemigos; cada 8 que derrota te cura medio corazón
  fr:
    name: Sombre Ball
    desc: Un Nosferapti poursuit les ennemis ; tous les 8 vaincus, il vous soigne d'un demi-cœur
  de:
    name: Finsterball
    desc: Ein Zubat verfolgt Gegner; je 8 besiegte heilen dich um ein halbes Herz
  it:
    name: Scuro Ball
    desc: Uno Zubat insegue i nemici; ogni 8 che sconfigge ti cura di mezzo cuore
  pt:
    name: Dusk Ball
    desc: Um Zubat persegue os inimigos; a cada 8 que derrota, cura meio coração em você
  ru:
    name: Даскбол
    desc: Зубат преследует врагов; за каждых 8 побежденных лечит тебе полсердца
  ja:
    name: ダークボール
    desc: ズバットが敵を追う。8体倒すごとにハート半分回復
  ko:
    name: 다크볼
    desc: 주뱃이 적을 쫓는다. 8마리 쓰러뜨릴 때마다 하트 반 칸을 회복시켜 준다
  zh:
    name: 黑暗球
    desc: 超音蝠追击敌人；每击败8个就为你恢复半颗心
  zt:
    name: 黑暗球
    desc: 超音蝠會追擊敵人；每打倒8個敵人就為你回復半顆愛心
---
A Zubat chases enemies; every 8 it defeats heal you half a heart

{{< clip >}}

## How it works

- Zubat flies at the nearest enemy (within 700 px) and keeps biting it every third of a second for 0.45 times your Damage (at least 1.2), as Poison-type damage.
- Every 8th enemy it finishes off with a bite heals you half a heart. Only kills by Zubat itself count.
- It does not shoot.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
