---
title: Bandeau Muscle
id: banda_musculo
kind: passive
category: shot
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Distance
  value: À moins de 120 px de l'ennemi (bord)
- label: Dégâts
  value: ×1,6 sur ce coup
icon: items/muscle-band.png
sprite: true
names:
  en:
    name: Muscle Band
    desc: 'Point blank: shots that hit very close to you deal ×1.6'
  es:
    name: Banda Músculo
    desc: 'A quemarropa: los disparos que aciertan muy cerca de ti pegan ×1,6'
  de:
    name: Muskelband
    desc: 'Aus nächster Nähe: Schüsse, die ganz nah bei dir treffen, richten ×1,6 Schaden an'
  it:
    name: Muscolbanda
    desc: 'A bruciapelo: i tiri che colpiscono molto vicino a te infliggono ×1,6'
  pt:
    name: Bandana Muscular
    desc: 'À queima-roupa: tiros que acertam muito perto de você causam ×1,6'
  ru:
    name: Мышечная повязка
    desc: 'В упор: выстрелы, попавшие совсем близко к тебе, бьют ×1,6'
  ja:
    name: ちからのハチマキ
    desc: 至近距離：自分のすぐ近くで命中したショットは×1.6のダメージ
  ko:
    name: 힘의머리띠
    desc: '근접: 아주 가까이에서 명중한 탄은 ×1.6'
  zh:
    name: 力量头带
    desc: 近身射击：在离你很近处命中的弹，伤害×1.6
  zt:
    name: 力量頭帶
    desc: 近距離射擊：在離你很近處命中的射擊傷害×1.6
---
À bout portant : les tirs qui touchent tout près de vous infligent ×1,6

## Fonctionnement

- Un coup inflige ×1,6 de dégâts quand vous êtes à moins de 120 px (2 cases) de l'ennemi, mesuré jusqu'à son bord.
- La vérification se fait à chaque coup, au moment de l'impact : le bonus n'apparaît pas dans la stat de Dégâts et n'est pas limité par le plafond ×3 des multiplicateurs de dégâts.
- Il s'applique aussi aux tirs de vos compagnons si vous êtes près de la cible.

## Cumul

- Un deuxième exemplaire ne change rien.
