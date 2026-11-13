---
title: Tirs supplémentaires
id: disparos_extra
color: '#ffd23c'
labels:
- text: MÉCANIQUE
  color: '#ffd23c'
icon: icons/mechanics/armas.png
details:
- label: Salve
  value: 1 tir + 1 par tir multiple, jamais plus de 9 par salve
- label: Objets de tir multiple
  value: CT Reflet +1, Boîte Lentilles +2 (ils s'additionnent)
- label: Au-delà de 9
  value: Nœud Destin, Lunettes Sable, Crâne Dragon, Bille, Nectar Rouge, Bis Ball et quelques autres
- label: Maximum par attaque
  value: 9 + 9 vers l'arrière = 18, ×2 avec les Lunettes Sable = 36, + jusqu'à 6 de plus par chance
- label: À l'écran
  value: 450 de vos projectiles au maximum en même temps
---
Chaque attaque tire une salve de 9 tirs au maximum. Certains objets ajoutent des tirs en plus de cette salve, et ceux-là ne sont pas limités à 9.

## La salve
- À chaque attaque, vous tirez **1 tir + 1 par tir multiple**. Le tir multiple vient de la [CT Reflet](../items/mt_doble.html) (+1) et de la [Boîte Lentilles](../items/m_portalentillas.html) (+2), et les exemplaires s'additionnent.
- La salve ne dépasse jamais **9 tirs** : au-delà de +8 en tir multiple, la salve ne gagne plus rien.
- Les tirs s'ouvrent en éventail autour de l'endroit visé :

| Tirs | Écart entre deux tirs | Largeur de l'éventail |
|---|---|---|
| 1 | — | tout droit |
| 2 | 14° | 14° |
| 3 | 16° | 32° |
| 4 | 16° | 48° |
| 5 à 9 | 57° ÷ (tirs − 1) | 57° (toujours la même) |

- À partir de 5 tirs, l'éventail reste large de 57° et les tirs se rapprochent simplement les uns des autres.
- Chaque tir de la salve tire au sort son propre coup critique, son autoguidage et son perçage, et ses propres effets à chaque coup (voir [Projectiles et dégâts](proyectiles.html)).

### Talent Rafale
- Certains Pokémon débloquent le talent de maîtrise **Rafale** au rang de maîtrise 8 (Kokiyas, Crustabri, Capumain, Capidextre, Nodulithe, Géolithe, Chinchidou, Pashmilla, Démétéros, Picassaut, Plumeline, Arceus).
- Quand il est actif, une attaque sur 4 tire **un tir de plus** dans la salve.
- Ce tir compte dans les 9 : une salve qui a déjà 9 tirs n'a rien de plus.
- Il ne s'applique qu'à la salve vers l'avant, pas à celle que le [Nœud Destin](../items/lazo_destino.html) tire vers l'arrière.

## Objets qui ajoutent des tirs au-delà de 9

| Objet | Tirs en plus | Quand | Dégâts |
|---|---|---|---|
| [Nœud Destin](../items/lazo_destino.html) | Une deuxième salve complète vers l'arrière (même nombre, jusqu'à 9) | À chaque attaque | Pleins |
| [Lunettes Sable](../items/m_gafas_aislantes.html) | Chaque tir de vos salves devient 2, à 26° de chaque côté | À chaque attaque | Pleins, pour les deux |
| [Crâne Dragon](../items/m_craneo_dragon.html) | 3 (à droite, derrière, à gauche) | 15 % + 1 % par point de Chance, 50 % max, par attaque | Pleins |
| [Bille](../items/m_canica.html) | 1 ou 2 dans des directions aléatoires | 25 % + 1 % par point de Chance, par attaque | Pleins |
| [Nectar Rouge](../items/m_nectar_rojo.html) | 1 grande flamme de type Feu qui transperce tout et brûle | 12 % + 1 % par point de Chance, 50 % max, par attaque | ×1,2 |
| [Bis Ball](../items/f_acopio_ball.html) | Métamorph copie chaque tir de vos salves depuis sa position | À chaque attaque | 75 % |
| [Magnéto VS](../items/camara_lucha.html) | Une copie de chaque tir, depuis le même endroit, une demi-seconde plus tard (24 en attente au maximum) | À chaque tir | 50 % |
| [Miroir Sacré](../items/espejo_veraz.html) (actif) | Votre reflet, de l'autre côté de la salle, tire une copie en miroir de chaque tir, pendant 8 s | Tant qu'il est actif | Pleins |
| [Coquille du Sud](../items/m_concha_tropical.html) | 2 à 10 tirs d'un coup après avoir arrêté de tirer (charge complète en 2 s) | Première attaque après une pause | Pleins |

- Les chances du Crâne Dragon, de la Bille et du Nectar Rouge sont tirées **une fois par attaque**, pas une fois par tir, et pas une seconde fois pour la salve que le Nœud Destin tire vers l'arrière. La « Chance » est votre Chance après les [rendements décroissants](rendimientos.html).
- Les Lunettes Sable ne doublent que les tirs de vos salves (vers l'avant et vers l'arrière). Les tirs ajoutés par le Crâne Dragon, la Bille, le Nectar Rouge, la Coquille du Sud et Métamorph ne sont pas doublés.
- Métamorph copie vos salves (avant et arrière) mais pas les tirs en plus des autres objets, et les Lunettes Sable ne doublent pas ses copies.
- Le [Nœud Destin (Maudit)](../items/cu_nudo.html) n'ajoute **aucun** tir : c'est un objet de cadence.

## Comment ils s'additionnent
<div class="mx-tiles"><div class="mx-tile"><div class="v">9</div><div class="k">par salve au maximum</div></div><div class="mx-tile"><div class="v">18</div><div class="k">avec le Nœud Destin (9 devant + 9 derrière)</div></div><div class="mx-tile"><div class="v">36</div><div class="k">avec en plus les Lunettes Sable</div></div><div class="mx-tile"><div class="v">450</div><div class="k">de vos projectiles à l'écran en même temps</div></div></div>

1. Salve : 1 + tir multiple, **9** au maximum.
2. Nœud Destin : une deuxième salve vers l'arrière, **9 + 9 = 18**.
3. Lunettes Sable : chacun de ces tirs devient deux, **18 × 2 = 36**.
4. Par chance, sur la même attaque : Crâne Dragon **+3**, Bille **+1 ou 2**, Nectar Rouge **+1**, soit jusqu'à **42** rien que pour vous.
5. Chaque Métamorph ([Bis Ball](../items/f_acopio_ball.html)) ajoute une copie de vos deux salves : **+18** par Métamorph, à 75 % des dégâts.
6. Le Magnéto VS répète ensuite la plupart de ces tirs une demi-seconde plus tard à 50 %, avec 24 copies en attente au maximum.

- Tout cela est limité par les **450** projectiles à vous qui peuvent être dans la salle en même temps. Au-delà, ce sont les projectiles créés par d'autres projectiles (divisions, fragments, os…) qui disparaissent en premier, les plus anciens d'abord.
- 12 attaques par seconde au maximum (voir [Rendements décroissants](rendimientos.html)).

## Autres objets qui créent des projectiles
Ils n'ajoutent pas de tirs à votre attaque, mais créent d'autres projectiles quand quelque chose se produit :

| Objet | Ce qu'il crée |
|---|---|
| [Os à Moelle](../items/m_huesos_finos.html) | Quand un tir vainc un ennemi : 3 os (tout droit et à 34° de chaque côté) à 50 % des dégâts |
| [Boulette de Boue](../items/m_bola_arcilla.html) | Chaque tir éclate en retombant en 8 fragments + 2 par tir multiple (moins quand la salle est pleine de projectiles), 11 % des dégâts chacun |
| [Dent Océan](../items/m_diente_marino.html) | Quand son aiguille achève un ennemi : 6 tirs autour de lui à 35 % des dégâts |
| [Hyper Ball](../items/f_ultra_ball.html) | Archéomire : vos tirs qui le traversent se divisent en trois (le tir continue, plus 2 tirs à 20° de chaque côté à 60 % des dégâts) |
| [CT Triplattaque](../items/mt_triataque.html) | 3 tirs (feu, électrique, glace) depuis chaque ennemi vaincu |
| [Fossile Dôme](../items/m_fosil_domo.html) | 7 tirs tournent autour de vous quand vous entrez dans une salle avec des ennemis (80 % des dégâts, ils traversent tout) |
| [Galet de Verre](../items/a_cristal_marino.html) (actif) | 12 de vos tirs tout autour de vous, avec leurs effets |

Pages liées : [Projectiles et dégâts](proyectiles.html) · [Effets de statut](estados.html) · [Cumul des objets](acumulacion.html) · [Rendements décroissants](rendimientos.html)
