---
title: Coquille du Sud
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
  value: 2 s sans tirer pour une charge complète
- label: Salve
  value: Jusqu'à 10 tirs supplémentaires (au moins 2)
- label: Tirs supplémentaires
  value: Pleins dégâts chacun, dispersés sur environ ±23°
icon: items-ps/partner-gift/tropical-shell.png
sprite: true
names:
  en:
    name: Tropical Shell
    desc: It charges while you're not firing; when you fire again, a burst of extra shots comes out at once
  es:
    name: Concha Tropical
    desc: Mientras no disparas se carga; al volver a disparar, sale de golpe una ráfaga de disparos extra
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
Se charge quand vous ne tirez pas ; en tirant de nouveau, une rafale de tirs supplémentaires part d'un coup

## Fonctionnement
- Tant que vous ne tenez aucune touche de tir, la coquille se charge : elle est pleine en 2 s.
- Quand vous recommencez à tirer, elle libère d'un coup une rafale de tirs supplémentaires, en plus de votre salve normale. Leur nombre est la charge ×10, arrondie : jusqu'à 10 tirs. Une charge inférieure à 15 % (moins de 0,3 s d'attente) ne libère rien, donc la plus petite rafale est de 2 tirs.
- Les tirs de la rafale partent dans la direction visée, dispersés d'environ 23° de chaque côté, à 75 % à 120 % de la vitesse normale, et infligent chacun vos pleins dégâts. Ce sont des tirs supplémentaires (voir [Tirs supplémentaires](../mechanics/disparos_extra.html)).
- La charge est perdue dès que vous continuez à tirer ; elle repart de zéro quand vous vous arrêtez.

## Cumul
- Il ne se cumule pas : un second exemplaire ne donne pas une rafale plus grosse.
