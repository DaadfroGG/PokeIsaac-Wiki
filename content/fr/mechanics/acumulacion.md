---
title: Cumul des objets
id: acumulacion
color: '#6fdc5a'
labels:
- text: MÉCANIQUE
  color: '#6fdc5a'
icon: icons/mechanics/mochila100.png
details:
- label: Stats
  value: Ajoutées pour chaque exemplaire, puis rendements décroissants
- label: Bonus chiffrés
  value: 'Ajoutés pour chaque exemplaire : tirs en plus, taille, chance de critique, perçage, rebond, recul, éclairs'
- label: Effets spéciaux
  value: Activés une fois ; un deuxième exemplaire n'ajoute rien
- label: Multiplicateurs de dégâts (×)
  value: Ne se cumulent pas avec un exemplaire du même objet ; des objets différents se multiplient, jusqu'à ×3
- label: Compagnons
  value: Un par exemplaire, 3 au maximum (5 avec la Boîte Noigrume)
---
Ramasser deux fois le même objet ne donne pas toujours deux fois l'effet : cela dépend du type de bonus qu'il donne.

## Les règles

| Ce que donne l'objet | Un deuxième exemplaire | Exemple |
|---|---|---|
| **Stats** (Dégâts, Cadence, Vitesse, Portée, Vitesse des tirs, Chance, cœurs) | S'ajoute à nouveau, puis les [rendements décroissants](rendimientos.html) s'appliquent au total | Deux Dégâts +1 = Dégâts +2 |
| **Tirs en plus** (tir multiple) | +1 tir par point, jamais plus de 9 par salve | [Boîte Lentilles](../items/m_portalentillas.html) deux fois = 5 tirs |
| **Taille des tirs** | +2,5 px de rayon par point | |
| **Chance de coup critique** | +8 % par objet | [Loupe](../items/lupa.html) + [Lunettes Noires](../items/gafas_sol.html) + [Roche Royale](../items/roca_rey.html) = 24 % |
| **Perçage** | +1 ennemi transpercé par exemplaire | |
| **Rebond** | +1 rebond par exemplaire | |
| **Recul** | Force de recul 3 + 3 par exemplaire | [Pierre Dure](../items/piedra_dura.html) deux fois repousse à 9 au lieu de 6 |
| **Éclair en chaîne** | +1 ennemi touché par les éclairs par exemplaire | |
| **Effet spécial** (autoguidage, brûlure, poison, ralentissement, gel, tirs en plus d'un objet, une chance au toucher…) | Rien de plus | Deux [Lunettes Sable](../items/m_gafas_aislantes.html) divisent toujours chaque tir en 2 |
| **Multiplicateur de dégâts ×** | Rien de plus | Deux [Feuilles Dorées](../items/m_hoja_oro.html) restent ×1,8 |
| **Compagnon** | Un compagnon de plus | Deux [Bis Ball](../items/f_acopio_ball.html) = deux Métamorph |

## Détails
- **Stats** : chaque exemplaire ajoute ses stats, bonnes et mauvaises. Le total passe par les [rendements décroissants](rendimientos.html) : les Dégâts comptent en entier jusqu'à +3, la Cadence jusqu'à 3 points, la Chance jusqu'à 10. Les PV maximum ne dépassent jamais 12 cœurs.
- Les **bonus chiffrés** s'additionnent par exemplaire. Certains ont une limite : la salve s'arrête à 9 tirs (voir [Tirs supplémentaires](disparos_extra.html)), et le bonus de dégâts critiques de la [Loupe](../items/lupa.html) (critiques ×3 au lieu de ×2) ne compte qu'une fois.
- Les **effets spéciaux** sont activés ou non. Un deuxième exemplaire de l'objet n'augmente ni la chance, ni la durée, ni la force. Cela vaut aussi pour des objets qui donnent le même effet : le [Charbon](../items/carbon.html) et la [Roche Chaude](../items/roca_calor.html) donnent la même chance de brûlure de 25 %, et avoir les deux reste 25 % (la Roche Chaude double toujours la durée des brûlures).
- Si vous perdez un exemplaire, l'effet reste tant que vous avez encore un autre objet qui le donne.
- Les **multiplicateurs de dégâts** (×1,5, ×1,8…) sont aussi des effets spéciaux : deux exemplaires du même objet comptent une fois. Les multiplicateurs d'objets **différents** se multiplient entre eux, puis le total est plafonné (en entier jusqu'à ×2,3, un quart au-delà, jamais plus de ×3). Exemple : [Feuille Dorée](../items/m_hoja_oro.html) ×1,8 et [Lentille Pouvoir](../items/m_lente_recia.html) ×1,6 = ×2,88 sur le papier, ×2,45 en pratique.
- Les bonus de type appliqués au toucher (Joyaux, Plaques, Cristaux Z) ne font pas partie de ce plafond ; leur cumul est indiqué sur la page de chaque objet.
- **Compagnons** : chaque Ball donne son compagnon, donc deux exemplaires donnent deux compagnons (par exemple deux Métamorph qui copient tous les deux vos tirs). Vous pouvez en avoir **3** à la fois, **5** avec la [Boîte Noigrume](../items/m_caja_bonguri.html), jamais plus de 6. Les compagnons en trop attendent dans le Sac (voir [Compagnons](companeros.html)).
- Les **gains immédiats** (cœurs soignés, pièces, bombes, clés, cœurs d'âme) sont donnés à nouveau avec chaque exemplaire.

## Exemples
- [CT Reflet](../items/mt_doble.html) + [Boîte Lentilles](../items/m_portalentillas.html) : 1 + 1 + 2 = **4 tirs**. Trois Boîtes Lentilles : 1 + 6 = 7 tirs ; une quatrième : 9 (pas 10).
- Deux [Nœuds Destin](../items/lazo_destino.html) : toujours une seule salve vers l'arrière.
- Deux [Crânes Dragon](../items/m_craneo_dragon.html) : toujours 15 % + 1 % par point de Chance.
- Deux [Loupes](../items/lupa.html) : 16 % de chance de critique, critiques toujours ×3.
- Deux [Feuilles Dorées](../items/m_hoja_oro.html) : Dégâts +2 et deux cœurs de plus, mais toujours ×1,8.

Pages liées : [Rendements décroissants](rendimientos.html) · [Tirs supplémentaires](disparos_extra.html) · [Effets de statut](estados.html) · [Compagnons](companeros.html) · [Coups critiques](criticos.html)
