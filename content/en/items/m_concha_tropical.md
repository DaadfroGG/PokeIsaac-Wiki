---
title: Tropical Shell
id: m_concha_tropical
kind: passive
category: shot
family: module
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Charge
  value: 2 s without firing for a full charge
- label: Volley
  value: Up to 10 extra shots (at least 2)
- label: Extra shots
  value: Full damage each, spread over about ±23°
icon: items-ps/partner-gift/tropical-shell.png
sprite: true
names:
  es:
    name: Concha Tropical
    desc: Mientras no disparas se carga; al volver a disparar, sale de golpe una ráfaga de disparos extra
  fr:
    name: Coquille du Sud
    desc: Se charge quand vous ne tirez pas ; en tirant de nouveau, une rafale de tirs supplémentaires part d'un coup
  de:
    name: Tropenmuschel
    desc: Lädt sich auf, solange du nicht schießt; beim nächsten Schuss kommt auf einmal eine Salve Extraschüsse heraus
  it:
    name: Tropiconchiglia
    desc: Si carica mentre non spari; quando riprendi a sparare, parte all'improvviso una raffica di tiri extra
  pt:
    name: Concha Tropical
    desc: Carrega enquanto você não atira; ao atirar de novo, uma rajada de tiros extras sai de uma vez
  ru:
    name: Тропическая ракушка
    desc: Пока не стреляешь, заряжается; когда снова стреляешь, разом вылетает очередь дополнительных выстрелов
  ja:
    name: なんごくかいがら
    desc: ショットしていない間にたまり、再びショットすると追加の弾が一斉に飛び出します
  ko:
    name: 트로피컬조개껍질
    desc: 발사하지 않는 동안 충전되고, 다시 발사하면 추가 탄이 한꺼번에 쏟아진다
  zh:
    name: 南国贝壳
    desc: 不射击时会蓄力；再次射击时，会一次性射出一阵额外的弹
  zt:
    name: 南國貝殼
    desc: 不射擊時會充能；再次射擊時會一口氣射出一陣額外的彈
---
It charges while you're not firing; when you fire again, a burst of extra shots comes out at once

## How it works
- While you are not holding a fire key, the shell charges: it fills in 2 s.
- When you start firing again, it releases a burst of extra shots at once, on top of your normal volley. The number is the charge ×10, rounded: up to 10 shots. A charge below 15 % (less than 0.3 s idle) releases nothing, so the smallest burst is 2 shots.
- Burst shots are fired in the direction you aim, spread about 23° either side, at 75 % to 120 % of the normal shot speed, and each deals your full damage. They are marked as extra shots (see [Extra shots](../mechanics/disparos_extra.html)).
- The charge is lost as soon as you keep firing; it starts again from zero when you stop.

## Stacking
- It does not stack: a second copy does not give a bigger burst.
