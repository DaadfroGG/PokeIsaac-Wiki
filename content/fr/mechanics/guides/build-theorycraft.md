---
title: Monter une build pour le mode infini
layout: guide
weight: 1
---
Comment monter une partie qui descend loin dans le [mode infini](../modo_infinito.html). Les chiffres viennent des règles du jeu et ont été vérifiés sur la version actuelle, mais la plupart n'ont pas été testés en vraie partie. Si quelque chose se passe autrement chez vous, modifiez la page.

## En bref

- Les multiplicateurs de dégâts partagent un plafond : **×3** au maximum. Une fois atteint, d'autres multiplicateurs ne servent à rien.
- La cadence a aussi un plancher : **12 tirs par seconde** au maximum.
- La profondeur vient donc de ce qui est **hors** de ces plafonds : tirs en plus, compagnons qui copient vos tirs, effets à l'impact et dégâts en pourcentage de la vie de l'ennemi.
- Tard dans l'infini, les ennemis gagnent environ 7 % de vie par étage. Chaque fois que vous doublez vos dégâts, vous allez environ 10 étages plus loin.
- Vous ne pouvez pas compenser par les soins (12 cœurs au maximum, et les soins sont limités) : évitez les coups plutôt que de les encaisser.

## Les plafonds

**Les dégâts fixes** ont des [rendements décroissants](../rendimientos.html) : les +3 premiers comptent en entier, jusqu'à +8 à moitié, jusqu'à +40 au quart. Environ +8 à +10 de dégâts fixes suffisent. Une évolution en deux étapes donne déjà +2,5.

**Les multiplicateurs de dégâts** se multiplient tous entre eux, puis sont plafonnés : jusqu'à ×2,3 en entier, un quart de ce qui dépasse, et jamais plus de ×3. Par exemple, [Feuille Dorée](../../items/m_hoja_oro.html) (×1,8) et [Atq. Spé. +](../../items/s_ataque_especial_x.html) (×1,5) font ×2,7, qui devient ×2,4. Ajoutez [Insigne de Kalos](../../items/d_emblema_kalos.html) (×2) et vous êtes au plafond. Au-delà d'environ ×5 avant plafond, les multiplicateurs en plus sont perdus.

**La cadence** s'arrête à 5 images entre deux tirs, soit 12 tirs par seconde. Les objets de cadence font l'essentiel du chemin, et [Plume Sprint](../../items/m_pluma_impetu.html) (jusqu'à ×2) termine en général le travail. Au-delà, c'est perdu. [Chantibonbon](../../items/m_dulce_nata.html) est un piège : son bonus de cadence est perdu au plancher, mais son malus de dégâts reste.

## Ce qui dépasse les plafonds

**Les tirs en plus.** Chaque tir en plus fait tous vos dégâts plafonnés.
- [Boîte Lentilles](../../items/m_portalentillas.html) : triple tir, mais cadence plus lente
- [CT Reflet](../../items/mt_doble.html) : double tir
- [Lunettes Sable](../../items/m_gafas_aislantes.html) : tirs diagonaux en plus
- [Magnéto VS](../../items/camara_lucha.html) : un écho de chaque tir à 50 % des dégâts
- [Poudre Argentée](../../items/polvo_plata.html) : les tirs se divisent en deux à l'impact
- [Écaille Draco](../../items/escama_dragon.html) : un tir sur 4 fait ×2
- [Bis Ball](../../items/f_acopio_ball.html) : un Métamorph qui copie chaque salve à 75 % des dégâts. Avec [Boîte Noigrume](../../items/m_caja_bonguri.html), vous pouvez en porter plus (6 compagnons au maximum, quoi qu'en dise le texte de l'objet)

Une salve peut compter jusqu'à 9 tirs.

**Les effets à l'impact.** Ils multiplient chaque coup après le plafond.

| Objet | Effet |
|---|---|
| [Croc Rasoir](../../items/w_colmillo.html) | +12 % de dégâts par morsure, jusqu'à 3 (×1,36). Booste aussi les compagnons |
| [Dentier en Or](../../items/m_dentadura.html) | Certains tirs font ×3,2. Chance de 10 % + 2 % par point de chance, jusqu'à 50 % |
| [Dent Océan](../../items/m_diente_marino.html) | Une aiguille, au plus une fois par seconde : ×2 sur les boss ; sur les autres ennemis, ×3, ou une mort instantanée à moitié de vie ou moins. Chance de 3 % + 0,5 % par point de chance, jusqu'à 10 % |
| [Gros Poireau](../../items/m_puerro_grueso.html) | ×2,2 à bout portant, qui tombe à ×0,4 à portée max |
| [Ceinture Pro](../../items/cinta_experto.html) | ×1,3 contre les boss |
| [Bandeau Muscle](../../items/banda_musculo.html) | ×1,6 de près |
| [Croc Dragon](../../items/colmillo_dragon.html) | +8 % par coup sur le même ennemi, jusqu'à ×1,72 |
| [Métronome](../../items/metronomo.html) | +5 % par tir d'affilée, jusqu'à ×1,6 |

L'avantage de type compte aussi ici : un coup super efficace fait ×1,5. Le niveau de votre Pokémon (jusqu'à ×1,47 au niveau 60), le [bonus chromatique](../shinys_ventaja.html) et les [rangs de type](../pasivas_escalan.html) s'appliquent aussi hors plafond.

**La chance** nourrit [Dentier en Or](../../items/m_dentadura.html) et [Dent Océan](../../items/m_diente_marino.html), mais au-delà de 10 elle ne compte qu'au quart.

**La plupart des copies ne se cumulent pas.** Ramasser deux fois le même objet ne fait en général rien de plus : seuls les tirs en plus, la chance de critique et les statistiques simples s'additionnent à chaque copie.

## Les dégâts qui ignorent la profondeur

La vie des ennemis grandit sans fin dans l'infini, mais ces effets en retirent une part : ils valent autant à l'étage 200 qu'à l'étage 31.

- [Morceau Comète](../../items/fragmento_cometa.html) : en entrant dans une salle de combat, chaque ennemi perd 25 % de sa vie max, et les boss 8 %.
- [Lunettes Sages](../../items/gafas_especiales.html) : vos tirs achèvent les ennemis normaux sous 15 % de vie. Avec la comète, il ne reste que 60 % de leur vie à retirer.
- [Dent Océan](../../items/m_diente_marino.html) : sa mort instantanée marche à toute profondeur (ennemis normaux seulement).
- [Pierre Anima](../../items/hw_anima.html) : chaque ennemi vaincu frappe l'ennemi le plus proche pour 2 % de la vie max d'un boss (10 % pour les autres). Énorme contre les boss qui invoquent des sbires (Grotadmorv, Spiritomb, Rafflesia), inutile contre les autres.
- [Talisman Maudit](../../items/hw_talisman.html) : un boss perd 8 % de sa vie actuelle, une fois.
- [Poupée de Chiffon](../../items/cu_vudu.html) : en battant un ennemi, 30 % de chance de retirer 25 % de sa vie actuelle à un autre ennemi. Boss compris, mais ça ne peut pas tuer.

## Ce que l'infini vous oppose

**La vie des ennemis.** Pendant environ les 30 premiers étages de l'infini, les ennemis gagnent environ 14 % de vie par étage (×4 tous les 10 étages) et les boss 10,5 %. Ensuite, les deux gagnent 7 % par étage, sans fin. Les étages du tableau sont ceux affichés dans le classement :

| Étage | Ennemis | Boss d'étage | Méga-boss |
|---|---|---|---|
| 31 | ×22 | ×74 | ×20 |
| 43 | ×105 | ×467 | ×78 |
| 53 | ×390 | ×1 266 | ×211 |
| 72 | ×4 705 | ×8 442 | ×1 407 |
| 100 | ×31 283 | ×56 133 | ×9 355 |
| 150 | ×921 518 | ×1,65 million | ×275 583 |
| 200 | ×27 millions | ×49 millions | ×8 millions |

En plus, [les boss s'adaptent à vous](../jefes_adaptativos.html) : jusqu'à ×10 de vie avant l'étage 43, puis jusqu'à ×2. Très profond, toute build passe sous ce que le jeu attend, et les boss descendent à ×0,5.

**Les chapitres 5 à 7 sont gratuits.** Ils ne rendent pas l'infini plus dur : ce sont des étages d'objets et d'expérience en plus. Mais une fois un chapitre débloqué, il faut battre son boss final pour atteindre l'infini, donc votre build doit être prête.

**Les dégâts subis.** Sur les étages d'après-jeu, tout coup de moins d'un cœur compte pour un cœur entier. Les dégâts de contact augmentent jusqu'à l'étage 73 environ, où ils atteignent 3 cœurs par coup. Un coup de boss retire au plus la moitié de votre vie max. Avec 12 cœurs, ça fait environ 4 coups de contact. Ça n'empire plus après l'étage 73, alors que la vie des ennemis continue de grandir : les parties profondes sont une course.

**Les boucliers.** Les boss avec l'affixe [Blindé](../afijos.html) ont un bouclier de 15 % de leur vie max, à briser d'abord. Le bouclier prend vos **dégâts de tir bruts** : l'avantage de type et les objets à l'impact ([Bandeau Muscle](../../items/banda_musculo.html), [Ceinture Pro](../../items/cinta_experto.html), [Croc Rasoir](../../items/w_colmillo.html), [Gros Poireau](../../items/m_puerro_grueso.html), [Croc Dragon](../../items/colmillo_dragon.html)) ne comptent pas contre lui, et leurs cumuls ne montent pas avant qu'il casse. Les tirs en plus, le plafond ×3, les critiques, [Dentier en Or](../../items/m_dentadura.html) et [Métronome](../../items/metronomo.html) comptent. Plus vous descendez, plus les boss en ont.

## En jeu

- **Restez près du boss.** Il peut y avoir au plus 450 de vos tirs à l'écran ; si vous en tirez plus, les plus anciens disparaissent. Les builds à beaucoup de tirs perdent l'essentiel de leurs dégâts de loin. Restez près du corps du boss, pas de ses pieds : sa zone de collision est sur le sprite.
- **Gardez la qualité graphique au maximum** si votre ordinateur le permet. Des effets comme les rayons de [Galet Blanc](../../items/m_orbe_claro.html) ont besoin de place dans la liste des effets, et une qualité plus basse en laisse moins : plus de rayons sont perdus.
- **[Herbe Blanche](../../items/hierba_blanca.html)** annule tous les malus de cadence et baisses de stats que vous avez ou aurez. Elle transforme [Boîte Lentilles](../../items/m_portalentillas.html) et [Lentille Pouvoir](../../items/m_lente_recia.html) en gains purs.
- **Les dégâts de tir avant les dégâts à l'impact**, à cause des boucliers.

## Build conseillée, par priorité

Le [Sac](../mochila100.html) contient 100 objets.

| Priorité | Objets | Pourquoi |
|---|---|---|
| 1. Tirs en plus | [Boîte Lentilles](../../items/m_portalentillas.html), [CT Reflet](../../items/mt_doble.html), [Lunettes Sable](../../items/m_gafas_aislantes.html), [Magnéto VS](../../items/camara_lucha.html), [Poudre Argentée](../../items/polvo_plata.html), [Écaille Draco](../../items/escama_dragon.html), [Bis Ball](../../items/f_acopio_ball.html), [Bille](../../items/m_canica.html) | Multiplie les dégâts hors de tout plafond |
| 2. Cadence au plancher | [PP Max](../../items/v_pp_max.html), [Calcium](../../items/calcio.html), [Lait de Coco](../../items/s_leche_coco.html), [Bonbon Mental S](../../items/s_caramelo_mente.html), [Bonbon Exp. S](../../items/s_caramelo_exp_s.html), [Tubercule](../../items/s_hierba_intensa.html), [Plume Sprint](../../items/m_pluma_impetu.html) | Arrêtez-vous à 12 tirs par seconde |
| 3. Multiplicateurs | [Feuille Dorée](../../items/m_hoja_oro.html), [Atq. Spé. +](../../items/s_ataque_especial_x.html), [Insigne de Kalos](../../items/d_emblema_kalos.html), [Point de Mire](../../items/m_blanco.html), [Noigrume Rouge](../../items/m_bonguri_rojo.html) | Atteint le plafond ×3 |
| 4. Dégâts fixes | [Protéine](../../items/proteina.html), [Plume Force](../../items/s_pluma_musculo.html) et similaires | Environ +8 suffit |
| 5. Arme | [Croc Rasoir](../../items/w_colmillo.html) | Son bonus s'applique à chaque coup après le plafond |
| 6. À l'impact | [Dentier en Or](../../items/m_dentadura.html), [Métronome](../../items/metronomo.html), [Dent Océan](../../items/m_diente_marino.html), [Galet Blanc](../../items/m_orbe_claro.html), [Bandeau Muscle](../../items/banda_musculo.html), [Ceinture Pro](../../items/cinta_experto.html), [Croc Dragon](../../items/colmillo_dragon.html) | [Dentier en Or](../../items/m_dentadura.html) et [Métronome](../../items/metronomo.html) marchent aussi sur les boucliers |
| 7. Compagnons | [Boîte Noigrume](../../items/m_caja_bonguri.html) et d'autres [Bis Ball](../../items/f_acopio_ball.html) | Chaque Métamorph copie chaque salve |
| 8. Profondeur | [Morceau Comète](../../items/fragmento_cometa.html), [Lunettes Sages](../../items/gafas_especiales.html), [Pierre Anima](../../items/hw_anima.html) s'il apparaît | Des dégâts qui ne perdent pas de valeur |
| 9. Survie | [Peau Métal](../../items/revest_metalico.html), [Bouclier Rouillé](../../items/escudo_oxidado.html), [Nœud Destin (Base)](../../items/lazo_destino.html), [Miroir Brisé](../../items/cu_espejo.html), [Évoluroc](../../items/d_mineral_evol.html), [Rappel Max](../../items/d_revivir_maximo.html) | Éviter les coups compte plus que la vie |
| 10. Remplissage | [Zinc](../../items/zinc.html) et autre chance, jusqu'à 10 | Augmente les chances de [Dentier en Or](../../items/m_dentadura.html) et [Dent Océan](../../items/m_diente_marino.html) |

**À éviter :** [Chantibonbon](../../items/m_dulce_nata.html) ; [Lentille Pouvoir](../../items/m_lente_recia.html) et [Orbe Toxique](../../items/m_toxisfera.html) quand votre cadence est près du plancher (sauf avec [Herbe Blanche](../../items/hierba_blanca.html)) ; [Patch Talent](../../items/a_parche.html), qui retire toute votre build ; la chance au-delà de 10, les multiplicateurs au-delà d'environ ×5 avant plafond, les dégâts fixes au-delà de +10.

**Ce que portent les parties les plus profondes du classement :** plusieurs [Bis Ball](../../items/f_acopio_ball.html) avec [Boîte Noigrume](../../items/m_caja_bonguri.html) ; [Galet Blanc](../../items/m_orbe_claro.html), [Lentille Pouvoir](../../items/m_lente_recia.html) avec [Herbe Blanche](../../items/hierba_blanca.html) ; [Dentier en Or](../../items/m_dentadura.html), [Boîte Lentilles](../../items/m_portalentillas.html), [Écaille Draco](../../items/escama_dragon.html), [Lunettes Sable](../../items/m_gafas_aislantes.html) ; et pour survivre [Peau Métal](../../items/revest_metalico.html) (les pièces absorbent les coups), [Bouclier Rouillé](../../items/escudo_oxidado.html) (vos tirs annulent ceux des ennemis) et [Nœud Destin (Base)](../../items/lazo_destino.html) (tirs vers l'arrière). Certaines jouent mono-type, avec plusieurs Joyaux et Plaques de leur type.

**Canon de verre (non testé) :** [Queue Skitty](../../items/d_cola_skitty.html) vous met à 1 cœur avec 9 vies en plus. À 1 cœur, vous entrez toujours dans une salle avec toute votre vie, donc le ×2 de [Insigne de Kalos](../../items/d_emblema_kalos.html) devrait être actif à chaque salle, et [Pass Couronneige](../../items/d_pase_corona.html) aussi. Chaque coup coûte une vie.
