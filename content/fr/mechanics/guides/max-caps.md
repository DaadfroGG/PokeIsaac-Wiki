---
title: Maximums théoriques
layout: guide
weight: 2
---
Jusqu'où va chaque stat, à partir d'où le jeu arrête de compter, et quelle taille peut atteindre un seul coup. Les plafonds viennent des articles liés ci-dessous ; l'exemple chiffré a été vérifié sur la version actuelle du jeu.

**En bref :** la stat Dégâts plafonne vers **82,5** (plafond de ×3 des multiplicateurs compris). Par-dessus, chaque tir contre un boss peut être multiplié par environ **×277**, et un tir parfait atteint environ **2,8 millions**. Le calcul complet est plus bas.

## Tous les plafonds d'un coup d'œil

| Quoi | Plafond | Détails |
|---|---|---|
| Dégâts fixes | Aucun, mais ils fondent | Les premiers +3 comptent en entier, puis 50 %, 25 % et 5 % au-delà de +40. +40 venant des objets comptent pour +13,5. Voir [Rendements décroissants](../rendimientos.html) |
| Multiplicateurs de dégâts | **×3** | Multipliés entre eux : en entier jusqu'à ×2,3, un quart au-dessus, ×3 atteint à ×5,1 sur le papier. Seulement les objets listés « dans le plafond » dans [Cumul des objets](../acumulacion.html) |
| Multiplicateurs à chaque coup | Aucun | Tout ce qui est listé « par-dessus le plafond » dans [Cumul des objets](../acumulacion.html), plus les critiques et l'efficacité des types. Ils se multiplient sans limite |
| Cadence | **12 tirs par seconde** | Voir [Statistiques en pratique](../estadisticas_reales.html) |
| Tirs par salve | **9** | Le [Nœud Destin](../../items/lazo_destino.html) ajoute une seconde salve de 9 au plus vers l'arrière ; les objets qui ajoutent des tirs en plus ne sont pas limités à 9. Voir [Tirs supplémentaires](../disparos_extra.html) |
| Vos projectiles dans la salle | **450** | Au-delà, les plus anciens disparaissent, mais ce sont presque toujours des tirs déjà ratés, donc tirer plus ajoute quand même des dégâts. Voir [Projectiles](../proyectiles.html) |
| Chance de critique | Aucun | Au-delà de 100 %, chaque tir est déjà critique ; la [Baie Lansat](../../items/baya_zonlan.html) le fait à un cœur. Voir [Coups critiques](../criticos.html) |
| Dégâts critiques | **×3** | ×2 normalement, ×3 avec la [Loupe](../../items/lupa.html) ; une seconde n'ajoute rien |
| Chance | Plafond doux à **10** | Au-delà de 10, un quart compte |
| Vie max | **12 cœurs** | Voir [Statistiques en pratique](../estadisticas_reales.html) |
| Vitesse, portée, vitesse des tirs | Aucun | Elles n'ont que des planchers : vitesse 1,6, portée 120 px, vitesse des tirs 4 |
| Compagnons | **6** | 3, puis 5 avec la [Boîte Noigrume](../../items/m_caja_bonguri.html), 6 avec une seconde. Voir [Compagnons](../companeros.html) |
| Niveau | **60** | +47 % de dégâts, cadence ×1,3, +12 % de vitesse. Voir [Niveaux et évolution](../niveles_pokemon.html) |
| Efficacité des types | **×2,25** | Contre un ennemi doublement faible au type de votre tir. Voir [Table des types](../tabla_tipos.html) |
| Soins | 30 % de la vie max par 10 s | Seulement pour les soins répétés listés dans [Soins et invulnérabilité](../curacion.html) |

## Jusqu'où va un seul coup ?

Un coup = **stat Dégâts** (ce que montre le HUD) × **multiplicateurs par coup** (jamais affichés dans le HUD). Chaque moitié a ses propres règles, donc le maximum se calcule en quatre étapes. Chaque multiplicateur ci-dessous a été vérifié sur la version actuelle du jeu.

### Étape 1 : dégâts fixes

Dégâts de base de votre Pokémon, plus les bonus fixes après [rendements décroissants](../rendimientos.html) : les premiers +3 comptent en entier, de +3 à +8 à moitié, de +8 à +40 au quart, au-delà à 5 %.

- Les plus gros dégâts de base sont **7,2** ([Méga-Dracaufeu X](../../pokemon/mega0006.html), [Méga-Zygarde](../../pokemon/mega0718.html)) ; un Pokémon typique en a 4.
- Tous les objets qui ont une ligne de dégâts, un exemplaire chacun, ajoutent **+31,9** sur le papier (l'[Herbe Blanche](../../items/hierba_blanca.html) retire les lignes négatives des autres). Après rendements décroissants : 3 + 5 × 0,5 + 23,9 × 0,25 = **+11,5**.
- Il n'y a pas de plafond strict : au-delà de +40, chaque +1 compte encore +0,05.

<details><summary>Les 42 objets avec une ligne de dégâts</summary>

[Lentille Pouvoir](../../items/m_lente_recia.html) +4, [Bandeau Choix](../../items/cinta_elegida.html) +2, [Orbe Vie](../../items/vidasfera.html) +1,8, [Steak Haché](../../items/s_hamburguesas.html) +1,5, [Cuillère Tordue](../../items/cuchara.html) +1,2, [Lunettes Choix](../../items/gafas_elegidas.html) +1, [Galet Noir](../../items/m_orbe_oscuro.html) +1, [Pierre Stase](../../items/piedra_eterna.html) +1, [Poudre Gigamax](../../items/s_especias_gigamax.html) +1, [Feuille Dorée](../../items/m_hoja_oro.html) +1, [Boulette de Boue](../../items/m_bola_arcilla.html) +1, [Orbe Toxique](../../items/m_toxisfera.html) +1, [Épices](../../items/s_especias.html) +0,8, [Bonbon Armure S](../../items/s_caramelo_aguante.html) +0,8, [Champignons](../../items/s_setas.html) +0,7, [Rune Sort](../../items/hechizo.html) +0,7, [Bonbon Force S](../../items/s_caramelo_musculo.html) +0,6, [Sablé Yantreizh](../../items/s_galleta_yantra.html) +0,6, [Gros Champi](../../items/seta_grande.html) +0,5, [Bonbon Exp. XL](../../items/s_caramelo_exp_xl.html) +0,5, [Bandeau](../../items/banda.html) +0,5, [Couronne Galanoa](../../items/m_corona_galanuez.html) +0,5, [Capsule d’Or](../../items/chapa_dorada.html) +0,5, [Nouilles](../../items/s_fideos.html) +0,5, [Balle Lumière](../../items/bola_luminosa.html) +0,5, [Fragment de Météorite](../../items/cs_meteorito.html) +0,5, [Protéine](../../items/proteina.html) +0,5, [Mouchoir Soie](../../items/panuelo.html) +0,5, [CT Ombre Portée](../../items/mt_sombra.html) +0,5, [Attaque +](../../items/ataquex.html) +0,5, [Atq. Spé. +](../../items/s_ataque_especial_x.html) +0,5, [CD Douteux](../../items/disco_extrano.html) +0,4, [Plume Force](../../items/s_pluma_musculo.html) +0,4, [Os Rare](../../items/hueso_raro.html) +0,4, [Zinc](../../items/zinc.html) +0,4, [Jus de Baie](../../items/bolsa_sangre.html) +0,3, [Lunettes Noires](../../items/gafas_sol.html) +0,3, [Charbon](../../items/carbon.html) +0,3, [Accro Griffe](../../items/garra_garfio.html) +0,3, [Aimant](../../items/iman.html) +0,3, [Pic Venin](../../items/flecha_venenosa.html) +0,3, [Super Bonbon](../../items/caramelo.html) +0,3.

</details>

### Étape 2 : multiplicateurs dans le plafond

Ils sont multipliés entre eux, puis plafonnés : en entier jusqu'à ×2,3, un quart au-dessus, **×3** au maximum (atteint à ×5,1 sur le papier).

| Objet | Multiplicateur | Quand |
|---|---|---|
| [Baie Lichii](../../items/baya_lichi.html) | ×1,5 | Un cœur ou moins, sans cœur d'âme |
| [Vulné-Assurance](../../items/seguro_debilidad.html) | ×2 | 5 s après avoir été touché |
| [Balle Lumière](../../items/bola_luminosa.html) | ×2 | Pokémon Électrik |
| [Vieille Statue](../../items/estatua_antigua.html) | ×2 | Immobile |
| [Orbe Perlé](../../items/orbe_lustre.html) | ×1,25 | Toujours |
| [Griffe Rasoir](../../items/garra.html) | jusqu'à ×1,4 | Série de coups |
| [Gemme Sésame](../../items/m_piedra_activadora.html) | ×2 | 8 s de méga-énergie |
| [Pierre Lune](../../items/p_lunar.html) | ×1,2 | Étages impairs |
| [Feuille Dorée](../../items/m_hoja_oro.html) | ×1,8 | Toujours |
| [Lentille Pouvoir](../../items/m_lente_recia.html) | ×1,6 | Toujours |
| [Point de Mire](../../items/m_blanco.html) | jusqu'à ×2 | Coups à la suite |
| [Atq. Spé. +](../../items/s_ataque_especial_x.html) | ×1,5 | Toujours |
| [Noigrume Rouge](../../items/m_bonguri_rojo.html) | jusqu'à ×1,6 | Ennemis vaincus dans la salle |
| [Baie Jaboca](../../items/d_baya_jaboca.html) | jusqu'à ×1,6 | Coups reçus dans la salle |
| Méga-Gemme de votre Pokémon | ×1,2 | Toujours |
| [Dynamax](../raid_dinamax.html) | ×2 | Pendant qu'il dure |
| [Chantibonbon](../../items/m_dulce_nata.html) | ×0,45 | Toujours (un malus) |

Tous ensemble font ×2 675 sur le papier, qui compte toujours pour ×3. Quatre objets toujours actifs suffisent : Feuille Dorée × Lentille Pouvoir × Atq. Spé. + × Orbe Perlé = ×5,4, donc ×3.

### Étape 3 : la stat Dégâts

(base + fixes) × multiplicateurs plafonnés × niveau × chromatique :

- Niveau 60 : ×1,47. Un [chromatique](../shinys_ventaja.html) dont la stat phare est les dégâts : ×1,12 (pas pour les Méga).
- Meilleur cas : (7,2 + 11,5) × 3 × 1,47 = **82,5** de Dégâts dans le HUD.
- Pikachu sans dégâts fixes : 3,5 × 3 = 10,5, et 15,5 au niveau 60.

### Étape 4 : multiplicateurs par coup

Aucun n'apparaît dans le HUD et aucun n'a de limite commune : ils se multiplient tous entre eux.

| Source | Multiplicateur | Quand | Contre les boss |
|---|---|---|---|
| [Flûte Éon](../../items/m_flauta_eon.html) | ×1,15 | Chaque tir | Oui |
| [Plaque](../../items/x_stone_plate.html) du type du tir | ×1,15 | Les tirs de ce type | Oui |
| [Passif de type](../pasivas_escalan.html) au rang 10 | Roche/Sol ×1,3, Dragon ×1,2, Combat ×1,1 | Les tirs de ce type | Oui |
| [Ceinture Pro](../../items/cinta_experto.html) | ×1,3 | Boss seulement | Oui |
| [Bandeau Muscle](../../items/banda_musculo.html) | ×1,6 | De près | Oui |
| [Gros Poireau](../../items/m_puerro_grueso.html) | ×2,14 mesuré de près (×2,2 à bout portant) | De près | Oui |
| [Bande Étreinte](../../items/banda_atadura.html) | ×1,3 | Ennemis ralentis | Oui |
| [Croc Dragon](../../items/colmillo_dragon.html) | jusqu'à ×1,72 | En frappant le même ennemi | Oui |
| [Scanner](../../items/escaner.html) | ×1,5 | Après l'avoir utilisé | Oui |
| [Métronome](../../items/metronomo.html) | jusqu'à ×1,6 | En tirant sans pause | Oui |
| Coup critique | ×2, ×3 avec la [Loupe](../../items/lupa.html) | Chaque tir avec la [Baie Lansat](../../items/baya_zonlan.html) à un cœur | Oui |
| [Efficacité des types](../tabla_tipos.html) | jusqu'à ×2,25 | Ennemi doublement faible au type du tir | Oui |
| [Dentier en Or](../../items/m_dentadura.html) | ×3,2 | Certains tirs (jusqu'à 50 % avec la chance) | Oui |
| [Joyau Normal](../../items/gema_normal.html) | ×4 | Premier tir de chaque combat | Oui |
| [Écaille Draco](../../items/escama_dragon.html) | ×2 | Un tir sur quatre | Oui |
| [Assurance Échec](../../items/seguro_fallo.html) | ×2 | Le tir après un tir dans un mur | Oui |
| [Pierre Soleil](../../items/p_solar.html) | jusqu'à ×2 | Après 2 s sans tirer | Oui |
| [Dent Océan](../../items/m_diente_marino.html) | ×2 sur les boss (×3 ou mort instantanée sur les autres) | Une aiguille, au plus une fois par seconde | Oui |
| Ennemi endormi ([Poké Flûte](../../items/poke_flauta.html)) | ×3 | Premier coup, puis il se réveille | **Non**, les boss ne dorment jamais |

Ce qui ne va pas ensemble :
- La Pierre Soleil demande 2 s de pause, ce qui remet le Métronome à zéro. La Pierre Soleil vaut plus (×2 contre ×1,6).
- La Ceinture Pro ne marche que sur les boss, un ennemi endormi n'est jamais un boss.
- Le Scanner et la Poké Flûte sont deux objets actifs ; vous n'en tenez qu'un à la fois.
- La double faiblesse dépend du type de votre tir : les tirs Dragon ne dépassent jamais ×1,5 (seul le type Dragon est faible au Dragon).

### Exemple chiffré, mesuré

Pikachu, trois objets dans le plafond, contre un boss. Chaque ligne a été mesurée en jeu sauf la dernière.

| Ajouté | Par coup | Total |
|---|---|---|
| Stat Dégâts au plafond de ×3 | 10,5 | ×1 |
| Flûte Éon, Plaque Volt, Ceinture Pro, Bandeau Muscle, Bande Étreinte, Croc Dragon (au max), Scanner | 96,9 | ×9,2 |
| + Baie Lansat à un cœur et Loupe (chaque tir est un critique ×3) | 290,6 | ×27,7 |
| + un boss doublement faible à Électrik (Eau/Vol) | 653,9 | ×62,3 |
| + niveau 60 | 962,5 | ×91,7 |
| + Gros Poireau, au plus près | 2 060 | ×196 |
| + Métronome au max | 3 296 | ×314 |
| + Joyau Normal, Assurance Échec, Écaille Draco et une dent en or sur le même tir (×51,2) | 168 745 | ×16 071 |
| + Pierre Soleil à la place du Métronome (×2 / ×1,6) | 210 931 | ×20 089 |
| + aiguille de la Dent Océan (×2, calculé) | 421 862 | ×40 177 |

### Le plafond théorique

Le meilleur Pokémon pour ça est [Méga-Diancie](../../pokemon/mega0719.html) : 6,5 de dégâts de base, type Roche (passif Roche ×1,3 au rang 10, et la Roche frappe les boss Feu/Vol, Insecte/Vol et Glace/Vol à ×2,25).

- Stat Dégâts : (6,5 + 11,5) × 3 × 1,47 = **79,4**.
- Par coup, en continu : 1,15 (Flûte Éon) × 1,15 (Plaque Roc) × 1,3 (passif Roche) × 1,3 (Ceinture Pro) × 1,6 (Bandeau Muscle) × 2,14 (Gros Poireau) × 1,3 (Bande Étreinte) × 1,72 (Croc Dragon) × 1,5 (Scanner) × 1,6 (Métronome) × 3 (critique) × 2,25 (type) = **×277**, soit environ **22 000** par coup, à chaque tir.
- Avec tous les pics sur le même tir (Joyau Normal ×4, Assurance Échec ×2, Écaille Draco ×2, dent en or ×3,2, Dent Océan ×2, et Pierre Soleil ×2 à la place du Métronome) : 22 000 ÷ 1,6 × 204,8 = environ **2,8 millions** en un coup.

Il faut le niveau 60, le rang 10 (loin dans le [mode infini](../modo_infinito.html)), un seul cœur et beaucoup de chance avec les réserves. C'est un plafond, pas une build.

## Combien de tirs ?

- Au plus 12 attaques par seconde, 9 tirs par salve : 108 tirs par seconde rien qu'avec la salve.
- Le [Nœud Destin](../../items/lazo_destino.html) double la salve (9 devant, 9 derrière), et les extras au hasard peuvent porter une attaque jusqu'à 42 tirs. Voir [Tirs supplémentaires](../disparos_extra.html).
- Quelle que soit la build, seuls 450 de vos projectiles tiennent dans la salle. Le plafond supprime les plus anciens d'abord ; les tirs qui touchent le font en une fraction de seconde, donc il supprime surtout des tirs ratés. Plus de projectiles continue d'ajouter des dégâts au-delà du plafond, un peu moins à chaque fois. Rester près double toujours à peu près les dégâts d'une build à beaucoup de tirs.
- Chaque compagnon copie ou ajoute ses propres tirs en plus, jusqu'à 6 compagnons. Pour une salle, la [Poche de Capture](../../items/a_bolsillo_captura.html) les copie : jusqu'à 30 Métamorph avec le [Plongeur Devon](../../items/d_bombona_devon.html) et la [Pile](../../items/d_pila.html).

## Ce qui est perdu

- Les multiplicateurs « dans le plafond » au-delà de ×5,1 sur le papier : vous êtes déjà à ×3. Prenez plutôt des objets de la liste « par-dessus ».
- Un second exemplaire du même multiplicateur : il compte une fois.
- La cadence au-delà de 12 tirs par seconde.
- La chance au-delà de 10 (un quart compte), la chance de critique au-delà de 100 %, une seconde Loupe.
- La vie au-delà de 12 cœurs.
- Le [Chantibonbon](../../items/m_dulce_nata.html) coûte moins sur une build déjà au-delà du plafond : à ×8 sur le papier il ne baisse les dégâts qu'à 87,5 %, et au-delà de ×11,3 il ne coûte rien.
