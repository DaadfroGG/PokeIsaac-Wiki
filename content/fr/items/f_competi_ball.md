---
title: Compét’Ball
id: f_competi_ball
kind: passive
category: familiar
family: familiar
tier: 2
pools:
- treasure
pool_weight: 2
details:
- label: Compagnon
  value: Phanpy (Sol)
- label: Charge
  value: Environ 0,6 s, environ 240 px
- label: Dégâts
  value: 2,5 × vos Dégâts (au moins 3)
- label: Délai
  value: 2,5 s
icon: items-ps/ball/sport.png
sprite: true
names:
  en:
    name: Sport Ball
    desc: A Phanpy rolls in the direction you fire and comes back
  es:
    name: Competi Ball
    desc: Un Phanpy embiste rodando hacia donde disparas y vuelve
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
Un Phanpy fonce en roulant là où vous tirez, puis revient

{{< clip >}}

## Fonctionnement

- Phanpy vous suit et ne tire pas. Quand vous tirez, qu'il reste des ennemis et qu'il est prêt, il roule dans la direction de votre tir pendant environ 0,6 seconde (environ 240 px), puis revient vous suivre.
- Chaque ennemi sur son passage est touché une fois par charge pour 2,5 fois vos Dégâts (au moins 3), en dégâts de type Sol. Les ennemis non-boss sont aussi repoussés ; les [boss](../mechanics/jefes_adaptativos.html) non.
- Il lui faut 2,5 secondes entre deux charges.
- Contrairement aux compagnons qui tirent, les dégâts de sa charge dépendent de votre propre stat de Dégâts.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
