---
title: Vs. Recorder
id: camara_lucha
kind: passive
category: shot
family: core
tier: 3
pools:
- treasure
- boss
pool_weight: 1
details:
- label: Delay
  value: 0.5 seconds
- label: Copy damage
  value: 50 % of the shot
- label: Copy size
  value: 85 %
- label: Copies at once
  value: Up to 24
- label: Hit echo
  value: Each hit repeats after 0.5 s at 50 %
icon: items-ps/key-item/vs-recorder.png
sprite: true
names:
  es:
    name: Cámara Lucha
    desc: 'Eco: medio segundo después de cada disparo sale una copia desde el mismo sitio (a la mitad de daño)'
  fr:
    name: Magnéto VS
    desc: 'Écho : une demi-seconde après chaque tir, une copie part du même endroit (avec moitié moins de dégâts)'
  de:
    name: Kampfkamera
    desc: 'Echo: Eine halbe Sekunde nach jedem Schuss kommt eine Kopie vom selben Ort (mit halbem Schaden)'
  it:
    name: Registradati
    desc: 'Eco: mezzo secondo dopo ogni tiro parte una copia dallo stesso punto (a metà dei danni)'
  pt:
    name: Gravador de Batalha
    desc: 'Eco: meio segundo depois de cada tiro, sai uma cópia do mesmo lugar (com metade do dano)'
  ru:
    name: Боевой рекордер
    desc: 'Эхо: через полсекунды после каждого выстрела из той же точки вылетает копия (с половиной урона)'
  ja:
    name: バトルレコーダー
    desc: エコー：ショットの0.5秒後、同じ位置からコピーが飛ぶ（ダメージは半分）
  ko:
    name: 배틀레코더
    desc: '메아리: 탄을 쏠 때마다 0.5초 뒤 같은 자리에서 복제 탄이 나간다 (대미지 절반)'
  zh:
    name: 对战记录器
    desc: 回声：每次射击半秒后，会从同一位置射出一个副本（伤害减半）
  zt:
    name: 對戰記錄器
    desc: 回音：每次射擊半秒後，會從同一位置再射出一發複製彈（傷害減半）
---
Echo: half a second after each shot, a copy fires from the same spot (at half damage)

{{< clip >}}

## How it works

- Half a second after you fire, a copy of the shot is fired again from the spot where it started, in the same direction. It deals 50 % of the original damage and is 85 % of its size, keeps the type, range and special flight (homing, piercing...).
- Up to 24 copies can be waiting at once; extra ones are skipped. Copies are dropped if you leave the room first.
- Only main shots are echoed: copies, split shots, mirrored shots and companion shots are not.
- Hit echo: every time one of your shots hits an enemy, the same enemy takes a second hit 0.5 seconds later for 50 % of that damage, if it is still alive (up to 40 waiting). This second hit does not trigger on-hit items.

## Stacking

- A second copy changes nothing.
