---
title: Magnéto VS
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
- label: Délai
  value: 0,5 seconde
- label: Dégâts de la copie
  value: 50 % du tir
- label: Taille de la copie
  value: 85 %
- label: Copies simultanées
  value: Jusqu'à 24
- label: Écho de coup
  value: Chaque coup se répète après 0,5 s à 50 %
icon: items-ps/key-item/vs-recorder.png
sprite: true
names:
  en:
    name: Vs. Recorder
    desc: 'Echo: half a second after each shot, a copy fires from the same spot (at half damage)'
  es:
    name: Cámara Lucha
    desc: 'Eco: medio segundo después de cada disparo sale una copia desde el mismo sitio (a la mitad de daño)'
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
Écho : une demi-seconde après chaque tir, une copie part du même endroit (avec moitié moins de dégâts)

{{< clip >}}

## Fonctionnement

- Une demi-seconde après votre tir, une copie du tir est retirée depuis son point de départ, dans la même direction. Elle inflige 50 % des dégâts d'origine, fait 85 % de sa taille et garde le type, la portée et la trajectoire spéciale (guidage, perforation...).
- Jusqu'à 24 copies peuvent attendre en même temps ; les autres sont ignorées. Les copies sont perdues si vous quittez la salle avant.
- Seuls les tirs principaux sont répétés : les copies, tirs divisés, tirs en miroir et tirs de compagnons ne le sont pas.
- Écho de coup : chaque fois qu'un de vos tirs touche un ennemi, ce même ennemi subit un second coup 0,5 seconde plus tard pour 50 % de ces dégâts, s'il est encore en vie (jusqu'à 40 en attente). Ce second coup ne déclenche pas les objets à effet sur coup.

## Cumul

- Un deuxième exemplaire ne change rien.
