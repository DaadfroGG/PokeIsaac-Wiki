---
title: Timer Ball
id: f_turno_ball
kind: passive
category: familiar
family: familiar
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Companion
  value: Voltorb (Electric)
- label: Explosion
  value: Your Damage × 4 (at least 10), radius 70 px
- label: Frequency
  value: Once per room
icon: items-ps/ball/timer.png
sprite: true
names:
  es:
    name: Turno Ball
    desc: Un Voltorb se lanza contra los enemigos y estalla; vuelve en la sala siguiente
  fr:
    name: Chrono Ball
    desc: Un Voltorbe fonce sur les ennemis et explose ; il revient dans la salle suivante
  de:
    name: Timerball
    desc: Ein Voltobal stürzt sich auf Gegner und explodiert; im nächsten Raum ist es wieder da
  it:
    name: Timer Ball
    desc: Un Voltorb si lancia contro i nemici ed esplode; torna nella stanza successiva
  pt:
    name: Bola Cronômetro
    desc: Um Voltorb avança contra os inimigos e explode; volta na sala seguinte
  ru:
    name: Таймербол
    desc: Вольторб бросается на врагов и взрывается; возвращается в следующей комнате
  ja:
    name: タイマーボール
    desc: ビリリダマが敵に突っ込んで爆発する。次の部屋で戻ってくる
  ko:
    name: 타이머볼
    desc: 찌리리공이 적에게 돌진해 폭발한다. 다음 방에서 돌아온다
  zh:
    name: 计时球
    desc: 霹雳电球冲向敌人并爆炸；在下一个房间重新出现
  zt:
    name: 計時球
    desc: 霹靂電球會衝向敵人並爆炸；在下一個房間回來
---
A Voltorb charges at enemies and explodes; it returns in the next room

{{< clip >}}

## How it works

- In a room with enemies, Voltorb waits about 0.8 seconds after spotting a target (within 700 px), then rushes at it at about 250 px per second.
- When it touches the enemy it explodes: every enemy within 70 px takes 4 times your Damage (at least 10).
- After exploding it is gone for the rest of that room and comes back in the next one.
- It does not shoot and does nothing in cleared rooms.
- Its damage scales with your Damage stat.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
