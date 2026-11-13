---
title: Mental Herb
id: hierba_mental
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Trigger
  value: Each hit that hurts you
- label: Radius
  value: 140 px
- label: Bosses
  value: Not pushed
icon: items-ps/hold-item/mental-herb.png
sprite: true
names:
  es:
    name: Hierba Mental
    desc: Al recibir un golpe, empujas lejos a los enemigos cercanos
  fr:
    name: Herbe Mental
    desc: Quand vous êtes touché, vous repoussez loin les ennemis proches
  de:
    name: Mentalkraut
    desc: Wenn du getroffen wirst, schleuderst du nahe Gegner weit weg
  it:
    name: Mentalerba
    desc: Quando vieni colpito, respingi lontano i nemici vicini
  pt:
    name: Erva Mental
    desc: Ao receber um golpe, você empurra para longe os inimigos próximos
  ru:
    name: Ментальная трава
    desc: При получении удара ты отбрасываешь ближайших врагов далеко
  ja:
    name: メンタルハーブ
    desc: 被弾すると、近くの敵を遠くへ吹き飛ばす
  ko:
    name: 멘탈허브
    desc: 피격 시 주변 적을 멀리 밀어낸다
  zh:
    name: 心灵香草
    desc: 受到攻击时，击退周围敌人
  zt:
    name: 心靈香草
    desc: 受到攻擊時，將附近的敵人遠遠推開
---
When you're hit, you push nearby enemies far away

## How it works
- After you take a hit, every enemy within 140 px is pushed far away from you.
- Bosses are not pushed. No damage is dealt.
- It triggers on every hit and has no cooldown. It does not trigger if the hit was blocked or dodged.

## Stacking
- It does not stack: a second copy adds nothing.
