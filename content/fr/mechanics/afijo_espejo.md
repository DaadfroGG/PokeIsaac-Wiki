---
title: Miroir (affixe)
id: afijo_espejo
color: '#ff9ae0'
labels:
- text: MÉCANIQUE
  color: '#ff9ae0'
icon: icons/mechanics/afijos.png
details:
- label: Chance
  value: 10 % pour chacun de vos tirs qui touche
- label: Vos dégâts
  value: Infligés quand même
- label: Boss de la Ligue
  value: Jamais
names:
  es:
    name: Espejo
    desc: ''
---
Un boss Miroir renvoie environ un de vos tirs sur dix qui le touchent.

## Effet
- Chacun de vos tirs qui le touche a 10 % de chances de lancer un tir rose depuis le point d'impact, qui s'éloigne du boss : souvent droit vers vous.
- Votre tir inflige quand même ses dégâts : le miroir ne bloque rien.
- Les tirs arrêtés par une attaque Barrière ne sont pas renvoyés.
- Le tir renvoyé fait mal comme le tir de base du boss.
- Les boss de la Ligue ne reçoivent jamais cet affixe.

## Mesuré

Contre 12 boss (étages 4 à 25, 1 minute chacun, 12 cœurs, immobile en tirant), avec et sans l'affixe Miroir :

| Build | Tirs renvoyés par minute | Cœurs perdus par minute, sans Miroir | Avec Miroir | Avec Miroir + [Bouclier Rouillé](../items/escudo_oxidado.html) | Avec Miroir + [Fer](../items/hierro.html) |
|---|---|---|---|---|---|
| Un tir à la fois, 4,3/s | environ 25 | 34,9 | 37,6 | 26,3 | 25,6 |
| Salve pleine à 12 tirs/s | environ 460 | 38,5 | 54 | 17,7 | 34,9 |
| Salve pleine + 6 Métamorph | environ 3 600 | 42,8 | 69,8 | 19,3 | 47 |

- La chance s'applique à chaque tir qui touche, sans limite, donc le nombre de tirs renvoyés suit votre nombre de tirs : avec des Métamorph, le Miroir ajoute à lui seul 27 cœurs par minute, de quoi vider 12 cœurs en environ 10 secondes.
- **Le [Bouclier Rouillé](../items/escudo_oxidado.html) en arrête la plupart.** Les tirs renvoyés partent de l'endroit où vos tirs touchent, en plein dans votre flot de tirs, donc vos tirs suivants en détruisent la plupart. Certains passent quand même, davantage loin dans la partie.
- Étages profonds et déplacement, avec 6 Métamorph (8 boss par étage, cœurs perdus par minute, total / dus aux tirs renvoyés) :

| | Sans bouclier, immobile | Bouclier, immobile | Sans bouclier, en tournant autour du boss | Bouclier, en tournant autour du boss |
|---|---|---|---|---|
| Étage 10 | 67 / 51 | 34 / 6 | 56 / 45 | 11 / 1 |
| Étage 50 | 73 / 57 | 49 / 10 | 54 à 60 / 42 à 49 | 11,5 / 3 à 5 |
| Étage 100 (Méga-Mewtwo Y) | 106 / 74 | 57 / 0 | 94 / 69 | 18 / 3 |
| Étage 150 (Méga-Rayquaza) | 132 / 68 | 92 / 8 | 92 / 55 | 40 / 3 |
| Étage 200 (Méga-Latias) | 73 | 61 | 104 | 47 |

- À partir de l'étage 100, chaque coup du boss coûte 2,5 cœurs. Avec le bouclier, un boss Miroir ne faisait toujours pas plus mal que le même boss sans l'affixe (étage 100 : 57 contre 58 immobile, 18 contre 19 en bougeant ; étage 150 : 92 contre 95, 40 contre 35) : ce qui fait mal si loin, ce sont les attaques du boss lui-même, pas les tirs renvoyés. Le boss de l'étage 200 tire lui-même des tirs roses, donc sa part ne peut pas être séparée.
- Tourner autour du boss avec le bouclier est de loin le mieux : les tirs du boss ratent plus, et le bouclier attrape encore presque tous les tirs renvoyés. Des tirs plus rapides (vitesse des tirs de 9 à 33) et le [Nikodule](../items/w_acromaquina.html) n'ont rien changé de mesurable.
- Fer, Bouclier Rouillé et [Miroir Brisé](../items/cu_espejo.html) ensemble : 10,4 cœurs par minute avec la salve pleine, 12,1 avec des Métamorph.

## Conseils
- Avec une build qui tire vite, prenez le [Bouclier Rouillé](../items/escudo_oxidado.html) et tournez autour du boss : ensemble ils réduisent les dégâts d'environ 80 %.
- Avec une build qui tire vite, beaucoup plus de tirs reviennent : déplacez-vous sur les côtés au lieu de rester face au boss.

Tous les affixes et les boss qui les reçoivent : [Affixes des boss](afijos.html).
