---
title: Effets de statut
id: estados
color: '#b45cf0'
labels:
- text: MÉCANIQUE
  color: '#b45cf0'
icon: icons/mechanics/efectos_suelo.png
details:
- label: Brûlure
  value: 10 % des dégâts du tir toutes les ⅓ s pendant 2 s (60 % au total)
- label: Poison
  value: 12 % des dégâts du tir toutes les ½ s pendant 2,5 s (60 % au total)
- label: Ralentissement
  value: Vitesse divisée par deux pendant 1,5 s
- label: Étourdissement, gel, sommeil
  value: L'ennemi ne peut ni bouger ni attaquer
- label: Charme, confusion, peur
  value: L'ennemi ne peut pas attaquer ; il se bat pour vous, erre ou s'enfuit
- label: Réapplication
  value: Remet le minuteur au maximum ; n'ajoute jamais de temps, ne se cumule jamais
- label: Boss
  value: Brûlure, poison et ralentissement seulement (ralentissement seulement entre leurs attaques)
---
Vos tirs et vos objets peuvent brûler, empoisonner, ralentir, étourdir, charmer, confondre, effrayer ou endormir les ennemis. Chaque effet a une durée fixe ; toucher à nouveau ne fait que remettre le minuteur au maximum.

## Règles générales
- Les effets sont tirés au sort **à chaque coup** : chaque projectile, et chaque ennemi traversé par un projectile perçant, est une nouvelle chance (voir [Projectiles et dégâts](proyectiles.html)).
- Réappliquer un effet déjà en cours le **remet à sa durée complète**. Cela n'ajoute jamais de temps, et deux exemplaires d'un même effet ne tournent jamais en même temps.
- Les chances notées « +2 % par point de Chance » ou « +1 % par point de Chance » utilisent votre Chance après les [rendements décroissants](rendimientos.html). Les chances des passifs de type sont ×1,5 pour un Pokémon à type unique et augmentent avec le [rang du passif](pasivas_escalan.html).
- Les dégâts de brûlure et de poison ignorent la [table des types](tabla_tipos.html) et les bonus de dégâts des objets.
- Les **boss** peuvent être brûlés, empoisonnés et ralentis, mais jamais étourdis, gelés, charmés, confus, effrayés, englués ou endormis. Quand un effet devrait le faire sur un boss, il le ralentit à la place, ou ne fait rien (voir chaque effet).

## Dégâts sur la durée

### Brûlure
- **Toutes les ⅓ de seconde** pendant **2 secondes** : 10 % des dégâts du tir qui a brûlé l'ennemi (au moins 1 par tick). Soit 30 % par seconde, 60 % au total.
- Si un tir plus fort brûle à nouveau l'ennemi, les ticks utilisent ce tir plus fort ; un tir plus faible ne fait que remettre le minuteur au maximum.
- La [Roche Chaude](../items/roca_calor.html) double la durée : **4 secondes**. Les rangs plus élevés des passifs Feu et Dragon font durer les brûlures plus longtemps et les rendent plus fortes.
- Fonctionne sur les boss.
- Sources : passifs [Feu](pasiva_fire.html) et [Dragon](pasiva_dragon.html) (15 % par coup + 2 % par point de Chance), [Charbon](../items/carbon.html) et [Roche Chaude](../items/roca_calor.html) (25 % + 2 % par point de Chance), la flamme du [Nectar Rouge](../items/m_nectar_rojo.html) (toujours), [Lava Cookie](../items/m_galleta_lava.html) et [Magmariseur](../items/magmatizador.html) (Pokémon de type Feu seulement), [Masse Ball](../items/f_peso_ball.html), [Pierre Feu](../items/p_fuego.html), [Encens Bizarre](../items/incienso_raro.html).
- Avec le [Charbon](../items/carbon.html) ou la [Roche Chaude](../items/roca_calor.html), un ennemi qui meurt en brûlant met le feu à tous les ennemis à moins de 120 px pendant 2 secondes (4 avec la Roche Chaude).

### Poison
- **Toutes les ½ seconde** pendant **2,5 secondes** : 12 % des dégâts du tir qui a empoisonné l'ennemi (au moins 1,5 par tick). Soit 24 % par seconde, 60 % au total.
- Même règle que la brûlure : un tir plus fort remplace les dégâts des ticks, un plus faible ne fait que remettre le minuteur au maximum. Les rangs plus élevés du passif Poison le font durer plus longtemps, le rendent plus fort et le propagent aux autres ennemis.
- Fonctionne sur les boss.
- Sources : passif [Poison](pasiva_poison.html) (20 % + 2 % par point de Chance), [Noigrume Vert](../items/m_bonguri_verde.html) (à chaque coup), [Pic Venin](../items/flecha_venenosa.html) (33 % + 2 % par point de Chance, et les ennemis empoisonnés subissent ×1,5 de vos tirs), [Nectar Mauve](../items/m_nectar_violeta.html) (tous les ennemis quand vous entrez dans une salle, pendant 6 s), [Fromage Meumeu](../items/m_queso_mumu.html), [Œuf Dur](../items/a_huevo_duro.html), [Orbe Toxique](../items/m_toxisfera.html) (Pokémon de type Poison seulement).

### Englué
- [Mouchoir Sale](../items/m_panuelo_sucio.html) : 20 % + 1 % par point de Chance par coup, le tir reste collé **2 secondes** et inflige 20 % des dégâts de ce coup toutes les ⅓ de seconde (6 ticks, 120 % au total). Il ne ralentit pas l'ennemi.
- Jamais sur les boss.

## Ralentir

### Ralentissement
- L'ennemi marche à **vitesse divisée par deux** pendant **1,5 seconde**. Il attaque toujours normalement.
- Boss : seuls leurs déplacements entre deux attaques sont divisés par deux.
- Sources : passif [Glace](pasiva_ice.html) (25 % + 2 % par point de Chance), [Noigrume Bleu](../items/m_bonguri_azul.html) (à chaque coup), [Noigrume Blanc](../items/m_bonguri_blanco.html) (30 % + 2 % par point de Chance), charme [Fée](pasiva_fairy.html) (1 s), flaques de [Miel](../items/m_miel.html), [Fertihumide](../items/a_abono_lento.html) (6 s).
- [Bande Étreinte](../items/banda_atadura.html) : les ennemis ralentis subissent 30 % de dégâts en plus.
- Toujours actifs, sans toucher : [Ralentiqueue](../items/cola_plumbea.html) (tous les ennemis 20 % plus lents) et [Queue Ramoloss](../items/cola_slowpoke.html) (vitesse divisée par deux à moins de 150 px de vous). Aucun des deux ne marche sur les boss ; les deux se cumulent avec un ralentissement.

## Arrêter l'ennemi

### Étourdissement (paralysie)
- L'ennemi **ne peut ni bouger ni attaquer**. Jamais sur les boss.
- Sources : passif [Acier](pasiva_steel.html) (15 % + 2 % par point de Chance, 0,6 s), [Roche Royale](../items/roca_rey.html) (10 % + 2 % par point de Chance, 0,75 s), [Lunettes Noires](../items/gafas_sol.html) (chaque coup critique, 0,75 s), charme [Fée](pasiva_fairy.html) (0,8 s), passif [Plante](pasiva_grass.html) à partir du rang 3 (0,5 s ; un boss est ralenti à la place), passifs [Roche](pasiva_rock.html) et [Sol](pasiva_ground.html) à partir du rang 3 (0,4 s), [Pointeau ADN](../items/punta_adn.html) (1,5 s), [Branche Galanoa](../items/a_rama_galanuez.html).

### Gel
- Comme un étourdissement (l'ennemi est pris dans la glace), mais il **faut un ennemi déjà ralenti**.
- [Noigrume Blanc](../items/m_bonguri_blanco.html) : sur un ennemi ralenti, 25 % + 2 % par point de Chance de le geler **1,8 seconde** ; sinon 30 % + 2 % par point de Chance de le ralentir.
- Passif [Glace](pasiva_ice.html) à partir du rang 3 : gelé 1,2 s ; un boss est ralenti 2 s à la place.
- [Fertistable](../items/a_abono_fijador.html) : change tous les ennemis en pierre pendant **4 secondes** ; les boss sont seulement ralentis 4 s.

### Sommeil
- [Poké Flûte](../items/poke_flauta.html) : tous les ennemis (sauf les boss) s'endorment **5 secondes** et ne peuvent ni bouger ni attaquer.
- Le **premier coup** sur un ennemi endormi inflige **×3** et le réveille.

## Changer le comportement de l'ennemi
Aucun de ces effets ne marche sur les boss.

| Effet | Ce que fait l'ennemi | Sources |
|---|---|---|
| **Charme** (Fée) | Étourdi 0,8 s et ralenti 1 s ; un boss est seulement ralenti | passif [Fée](pasiva_fairy.html) (18 % + 2 % par point de Chance) |
| **Retourné** | Va vers l'ennemi le plus proche et le frappe toutes les ½ s (3 fois ses dégâts de contact, au moins 2) ; il ne vous blesse pas au contact | [Noigrume Rose](../items/m_bonguri_rosa.html) (12 % + 1 % par point de Chance, 5 s), [Nectar Rose](../items/m_nectar_rosa.html) (ennemis à moins de 70 px, environ une fois sur deux pour chaque seconde passée là, 4 s), passif [Fée](pasiva_fairy.html) à partir du rang 4 (1,5 s) |
| **Confusion** | Erre dans une direction au hasard (une nouvelle toutes les ½ s) à 70 % de sa vitesse et n'attaque pas | [Encens Fleur](../items/m_incienso_floral.html) (12 % + 1 % par point de Chance, 3 s), passif [Psy](pasiva_psychic.html) à partir du rang 4 (1,5 s) |
| **Peur** | S'enfuit loin de vous à 110 % de sa vitesse et n'attaque pas | [Galet Noir](../items/m_orbe_oscuro.html) (15 % + 1 % par point de Chance, 2,5 s), passif [Spectre](pasiva_ghost.html) (1,5 s), compagnons qui effraient (25 %, 2 s) |
| **Recul** | Repoussé par le coup | passif [Eau](pasiva_water.html) (à chaque coup), passifs [Roche](pasiva_rock.html) et [Sol](pasiva_ground.html) (50 %) ; les boss ne sont jamais repoussés |

- Un ennemi retourné ne peut pas être retourné à nouveau avant la fin de l'effet. La peur l'emporte sur la confusion quand un ennemi a les deux.

## Contre les boss

| Effet | Sur un boss |
|---|---|
| Brûlure, poison | Effet complet |
| Ralentissement | Ralentit seulement ses déplacements entre ses attaques |
| Charme (Fée), gel du passif Glace, étourdissement du passif Plante, Fertistable | Devient un simple ralentissement |
| Autres étourdissements, gel du Noigrume Blanc, sommeil, englué, retourné, confusion, peur, recul | Rien |

## Effets sur vous
- Dans une partie normale, les ennemis ne vous brûlent, ne vous empoisonnent, ne vous étourdissent et ne vous charment **jamais** : leurs attaques et leur contact ne vous coûtent que des PV.
- Ce qui peut vous ralentir ou vous pousser, ce sont les dangers au sol et les règles des zones : voir [Effets au sol](efectos_suelo.html), [Zones de l'Infini](zonas_infinito.html) et [Malédictions](maldiciones.html).
- Dans l'arène du [Combat de Dresseurs](batalla.html), les effets des tirs de vos adversaires vous atteignent, en plus faible : la brûlure et le poison durent deux fois moins longtemps ; le ralentissement, la confusion, la peur et le charme ne font que vous ralentir (vitesse ×0,62) ; l'étourdissement, le gel et le sommeil vous immobilisent 1 s au maximum, puis vous ne pouvez plus être immobilisé pendant 3 s.

Pages liées : [Projectiles et dégâts](proyectiles.html) · [Passifs de type évolutifs](pasivas_escalan.html) · [Tirs supplémentaires](disparos_extra.html) · [Cumul des objets](acumulacion.html)
