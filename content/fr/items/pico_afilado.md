---
title: Bec Pointu
id: pico_afilado
kind: passive
category: shot
family: core
tier: 3
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Fréquence
  value: 1 tir sur 5 qui touchent
- label: Explosion
  value: Après 2 secondes, ×3 vos dégâts sur 60 px
- label: Minimum
  value: 4 dégâts
- label: Compte
  value: Seulement vos propres tirs
icon: items/sharp-beak.png
sprite: true
names:
  en:
    name: Sharp Beak
    desc: One in five shots sticks into the enemy and explodes after 2 seconds (×3 damage around it)
  es:
    name: Pico Afilado
    desc: Uno de cada cinco disparos se clava en el enemigo y estalla a los 2 segundos (daño ×3 alrededor)
  de:
    name: Spitzer Schnabel
    desc: Jeder fünfte Schuss bohrt sich in den Gegner und explodiert nach 2 Sekunden (Schaden ×3 ringsum)
  it:
    name: Beccaffilato
    desc: Un tiro su cinque si conficca nel nemico ed esplode dopo 2 secondi (danni ×3 intorno)
  pt:
    name: Bico Afiado
    desc: Um de cada cinco tiros se crava no inimigo e explode após 2 segundos (dano ×3 ao redor)
  ru:
    name: Острый клюв
    desc: Каждый пятый выстрел застревает во враге и взрывается через 2 секунды (урон ×3 вокруг)
  ja:
    name: するどいくちばし
    desc: 5発に1発が敵に刺さり、2秒後に爆発する（周囲にダメージ×3）
  ko:
    name: 예리한부리
    desc: 탄 5발 중 1발이 적에게 박혀 2초 뒤 터진다(주변에 대미지 ×3)
  zh:
    name: 锐利鸟嘴
    desc: 每五发弹中有一发会扎进敌人体内，2秒后爆炸（对周围造成×3伤害）
  zt:
    name: 銳利鳥嘴
    desc: 每五發彈中有一發會插在敵人身上，2秒後爆炸（周圍造成×3傷害）
---
Un tir sur cinq se plante dans l'ennemi et explose au bout de 2 secondes (dégâts ×3 autour)

{{< clip >}}

## Fonctionnement
- Un coup sur 5 de vos propres tirs plante un clou dans l'ennemi. Les tirs divisés, les tirs des compagnons et les autres effets secondaires ne comptent pas. Avec une arme spéciale, au plus un coup compte par délai de tir.
- 2 secondes plus tard, le clou explose là où se trouve l'ennemi (il le suit ; si l'ennemi est mort, il explose là où il est tombé).
- L'explosion inflige 3 fois votre stat Dégâts (au moins 4) à chaque ennemi à moins de 60 px, l'ennemi cloué compris. Elle blesse aussi les boss.
- L'explosion n'a pas de type, ne fait jamais de coup critique et n'inflige aucun statut. Elle ne vous blesse jamais.
- Plusieurs clous peuvent attendre en même temps.

## Cumul
- Un deuxième exemplaire n'apporte rien de plus : toujours un clou tous les 5 coups.
