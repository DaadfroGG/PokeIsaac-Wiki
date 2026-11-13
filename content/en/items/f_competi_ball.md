---
title: Sport Ball
id: f_competi_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Companion
  value: Phanpy (Ground)
- label: Roll
  value: About 0.6 s, roughly 240 px
- label: Damage
  value: 2.5 × your Damage (at least 3)
- label: Cooldown
  value: 2.5 s
icon: items-ps/ball/sport.png
sprite: true
names:
  es:
    name: Competi Ball
    desc: Un Phanpy embiste rodando hacia donde disparas y vuelve
  fr:
    name: Compét’Ball
    desc: Un Phanpy fonce en roulant là où vous tirez, puis revient
  de:
    name: Turnierball
    desc: Ein Phanpy rollt in die Richtung, in die du schießt, und kehrt zurück
  it:
    name: Gara Ball
    desc: Un Phanpy carica rotolando nella direzione in cui tiri e torna indietro
  pt:
    name: Bola Competição
    desc: Um Phanpy investe rolando na direção em que você atira e volta
  ru:
    name: Спортбол
    desc: Фанпи катится тараном туда, куда ты стреляешь, и возвращается
  ja:
    name: コンペボール
    desc: ゴマゾウが撃った方向へ転がって突進し、戻ってくる
  ko:
    name: 컴퍼티션볼
    desc: 코코리가 탄을 쏘는 방향으로 굴러 돌진한 뒤 돌아온다
  zh:
    name: 竞赛球
    desc: 小小象朝你射击的方向滚动冲撞，然后返回
  zt:
    name: 競賽球
    desc: 小小象會朝你射擊的方向滾動衝撞，然後滾回來
---
A Phanpy rolls in the direction you fire and comes back

{{< clip >}}

## How it works

- Phanpy follows you and does not shoot. When you are firing, enemies are alive and it is ready, it rolls in the direction you are shooting for about 0.6 seconds (roughly 240 px), then returns to following you.
- Each enemy on its path is hit once per roll for 2.5 times your Damage (at least 3), as Ground-type damage. Non-boss enemies are also knocked back; [bosses](../mechanics/jefes_adaptativos.html) are not.
- It needs 2.5 seconds between rolls.
- Unlike shooting companions, its roll damage scales with your own Damage stat.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
