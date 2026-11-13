---
title: Chrono Ball
id: f_turno_ball
kind: passive
category: familiar
family: familiar
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Compagnon
  value: Voltorbe (Électrik)
- label: Explosion
  value: Vos Dégâts × 4 (au moins 10), rayon 70 px
- label: Fréquence
  value: Une fois par salle
icon: items-ps/ball/timer.png
sprite: true
names:
  en:
    name: Timer Ball
    desc: A Voltorb charges at enemies and explodes; it returns in the next room
  es:
    name: Turno Ball
    desc: Un Voltorb se lanza contra los enemigos y estalla; vuelve en la sala siguiente
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
Un Voltorbe fonce sur les ennemis et explose ; il revient dans la salle suivante

{{< clip >}}

## Fonctionnement

- Dans une salle avec des ennemis, Voltorbe attend environ 0,8 seconde après avoir repéré une cible (à moins de 700 px), puis fonce dessus à environ 250 px par seconde.
- En touchant l'ennemi, il explose : tout ennemi à moins de 70 px subit 4 fois vos Dégâts (au moins 10).
- Après l'explosion, il disparaît pour le reste de la salle et revient dans la suivante.
- Il ne tire pas et ne fait rien dans une salle déjà nettoyée.
- Ses dégâts dépendent de votre stat de Dégâts.
- Les compagnons sont limités à 3 à la fois (5 avec la [Boîte Noigrume](m_caja_bonguri.html)) ; un compagnon en trop attend dans le Sac. Voir [Compagnons](../mechanics/companeros.html).

## Cumul

- Chaque exemplaire amène un autre compagnon du même type (tant que vous êtes sous la limite), et chacun agit séparément.
