---
title: Champ’Duit
id: b_cubresuelos
kind: passive
category: voltorb
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
stats:
- text: +5 Voltorbe
  good: true
details:
- label: Voltorbes
  value: '+5'
- label: Explosions en croix
  value: 3 par direction, tous les 70 px (56 px haut/bas)
- label: Explosion
  value: Rayon de 46 px, 18 dégâts chacune
- label: Vous blesse
  value: Non (seule l'explosion centrale le fait)
icon: items-ps/hold-item/terrain-extender.png
sprite: true
names:
  en:
    name: Terrain Extender
    desc: +5 Voltorbs; they explode in a cross and reach much farther
  es:
    name: Cubresuelos
    desc: +5 Voltorbs; estallan en cruz y llegan mucho más lejos
  de:
    name: Feldbeschichtung
    desc: +5 Voltobals; sie explodieren im Kreuz und reichen viel weiter
  it:
    name: Fissacampo
    desc: +5 Voltorb; esplodono a croce e arrivano molto più lontano
  pt:
    name: Extensor de Terreno
    desc: +5 Voltorbs; explodem em cruz e chegam muito mais longe
  ru:
    name: Расширитель местности
    desc: +5 Вольторбов; взрываются крестом и достают намного дальше
  ja:
    name: グランドコート
    desc: ビリリダマ+5個。十字に爆発し、はるかに遠くまで届く
  ko:
    name: 그라운드코트
    desc: 찌리리공 +5. 십자로 폭발하며 훨씬 멀리까지 닿는다
  zh:
    name: 大地膜
    desc: +5霹雳电球；十字形爆炸，波及范围远得多
  zt:
    name: 大地膜
    desc: +5顆霹靂電球；呈十字爆炸，範圍遠得多
---
+5 Voltorbes ; ils explosent en croix et portent bien plus loin

## Fonctionnement
- Un Voltorbe normal (posé avec la touche bombe) explose après 1,5 s dans un rayon de 95 px pour max(25, 7 × vos Dégâts), et il vous blesse aussi (1 cœur) si vous êtes dans la zone.
- Avec cet objet, chaque Voltorbe déclenche aussi une croix d'explosions supplémentaires : 3 à droite, 3 à gauche, 3 en haut et 3 en bas, une tous les 70 px à l'horizontale et tous les 56 px à la verticale. La ligne s'arrête au bord de la salle.
- Chaque explosion supplémentaire a un rayon de 46 px et inflige 18 dégâts fixes. Elles brisent rochers et caisses et peuvent ouvrir des portes secrètes, mais ne vous blessent jamais.
- Les petits Voltorbes de la [Bonbonnière](b_tarro.html) ne font pas de croix.
- Avec le [Nikodule](w_acromaquina.html), chaque explosion de ses Voltorbes déclenche aussi quatre petites explosions (62 px sur les côtés, 50 px en haut/bas, rayon de 36 px, 12 % des dégâts du tir chacune).

## Cumul
- L'effet est simplement activé : un second exemplaire n'ajoute rien. Chaque exemplaire donne quand même +5 Voltorbes.
