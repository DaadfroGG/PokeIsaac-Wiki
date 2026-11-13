---
title: Lecteur GB
id: m_lector_gb
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Laser
  value: Toutes les 1 s en moyenne en tirant, 75 % de dégâts
- label: Rebonds
  value: Jusqu'à 4, selon votre Rebond
- label: Écart
  value: Environ ±20° autour de la visée
icon: items-ps/key-item/gb-sounds.png
sprite: true
names:
  en:
    name: GB Sounds
    desc: While you fire, a laser comes out every now and then
  es:
    name: Lector GB
    desc: Mientras disparas, de vez en cuando sale además un láser
  de:
    name: GB-Player
    desc: Während du schießt, kommt hin und wieder zusätzlich ein Laser heraus
  it:
    name: Lettore GB
    desc: Mentre spari, di tanto in tanto esce anche un laser
  pt:
    name: GB Sounds
    desc: Enquanto você atira, de vez em quando também sai um laser
  ru:
    name: GB-плеер
    desc: Пока стреляешь, время от времени вылетает еще и лазер
  ja:
    name: ＧＢプレイヤー
    desc: ショット中、ときどきレーザーも出ます
  ko:
    name: GB플레이어
    desc: 발사하는 동안 가끔 레이저도 나간다
  zh:
    name: ＧＢ播放器
    desc: 射击时，偶尔还会射出一道激光
  zt:
    name: ＧＢ播放器
    desc: 射擊時，偶爾會額外射出雷射
---
Pendant que vous tirez, un laser sort aussi de temps en temps

{{< clip >}}

## Fonctionnement
- Pendant que vous tirez, un laser part à des moments aléatoires : en moyenne un par seconde. Le laser part en ligne droite (jusqu'à environ ±20° de votre visée) et touche tous les ennemis sur son chemin pour 75 % de vos dégâts.
- Il rebondit sur les murs autant de fois que votre Rebond, jusqu'à 4.
- Il ne se passe rien quand vous ne tirez pas.

## Cumul
- Il ne se cumule pas : un second exemplaire ne tire pas plus de lasers.
