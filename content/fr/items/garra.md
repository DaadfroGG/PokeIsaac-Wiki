---
title: Griffe Rasoir
id: garra
kind: passive
category: shot
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Par coup
  value: +4 % de dégâts (max +40 % avec 10 d'affilée)
- label: En cas de raté
  value: Un tir qui touche un mur ou un rocher sans avoir touché personne remet la série à zéro
- label: Compte
  value: Seulement le premier coup de chaque tir principal
icon: items/razor-claw.png
sprite: true
names:
  en:
    name: Razor Claw
    desc: 'Every shot that hits sharpens the claw: +4% damage, up to +40%. If a shot is wasted against a wall, the streak resets to zero'
  es:
    name: Garra Afilada
    desc: 'Cada disparo que acierta afila la garra: +4 % de daño, hasta +40 %. Si un disparo se pierde contra la pared, la racha vuelve a cero'
  de:
    name: Scharfklaue
    desc: ''
  it:
    name: Affilartigli
    desc: ''
  pt:
    name: Garra Afiada
    desc: ''
  ru:
    name: Острый коготь
    desc: ''
  ja:
    name: するどいツメ
    desc: ''
  ko:
    name: 예리한손톱
    desc: ''
  zh:
    name: 锐利之爪
    desc: ''
  zt:
    name: 銳利之爪
    desc: ''
---
Chaque tir qui touche aiguise la griffe : +4 % de dégâts, jusqu'à +40 %. Si un tir se perd contre un mur, la série retombe à zéro

## Fonctionnement
- Chaque tir principal qui touche un ennemi ajoute un niveau à la griffe, jusqu'à 10. Chaque niveau vaut +4 % de dégâts (+40 % à 10), appliqués à tous vos dégâts comme un multiplicateur.
- Seul le premier coup d'un tir compte : un tir perforant qui touche trois ennemis ajoute un niveau, pas trois.
- Les tirs des compagnons, les tirs fragmentés et les autres tirs secondaires n'ajoutent pas de niveau et ne brisent pas la série.
- Un tir principal qui finit contre un mur, un rocher ou un autre obstacle sans avoir touché d'ennemi remet la griffe à 0. Un tir qui s'éteint simplement en bout de portée ne la remet pas à zéro.
- La série est conservée d'une salle à l'autre.

## Cumul
- Il ne se cumule pas : un second exemplaire ne change rien (toujours +4 % par niveau, max +40 %).
