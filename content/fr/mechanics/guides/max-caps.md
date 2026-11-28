---
title: Maximums théoriques
layout: guide
weight: 2
---
Jusqu'où va chaque stat, à partir d'où le jeu arrête de compter, et quelle taille peut atteindre un seul coup. Les plafonds viennent des articles liés ci-dessous ; l'exemple chiffré a été vérifié sur la version actuelle du jeu.

## Tous les plafonds d'un coup d'œil

| Quoi | Plafond | Détails |
|---|---|---|
| Dégâts fixes | Aucun, mais ils fondent | Les premiers +3 comptent en entier, puis 50 %, 25 % et 5 % au-delà de +40. +40 venant des objets comptent pour +13,5. Voir [Rendements décroissants](../rendimientos.html) |
| Multiplicateurs de dégâts | **×3** | Multipliés entre eux : en entier jusqu'à ×2,3, un quart au-dessus, ×3 atteint à ×5,1 sur le papier. Seulement les objets listés « dans le plafond » dans [Cumul des objets](../acumulacion.html) |
| Multiplicateurs à chaque coup | Aucun | Tout ce qui est listé « par-dessus le plafond » dans [Cumul des objets](../acumulacion.html), plus les critiques et l'efficacité des types. Ils se multiplient sans limite |
| Cadence | **12 tirs par seconde** | Voir [Statistiques en pratique](../estadisticas_reales.html) |
| Tirs par salve | **9** | Le [Nœud Destin](../../items/lazo_destino.html) ajoute une seconde salve de 9 au plus vers l'arrière ; les objets qui ajoutent des tirs en plus ne sont pas limités à 9. Voir [Tirs supplémentaires](../disparos_extra.html) |
| Vos projectiles dans la salle | **450** | Au-delà, les plus anciens disparaissent. Voir [Tirs supplémentaires](../disparos_extra.html) |
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

Les dégâts d'un tir se construisent en deux moitiés. La première est la stat Dégâts du HUD, la seconde s'applique à chaque tir ou coup et n'apparaît jamais dans le HUD.

**1. La stat Dégâts.** Dégâts de base de votre Pokémon (2,7 à 7,2 selon le Pokémon) plus vos bonus fixes après rendements décroissants, fois vos multiplicateurs après le plafond de ×3, fois votre niveau (jusqu'à ×1,47), votre [bonus chromatique](../shinys_ventaja.html) (jusqu'à +12 %) et votre passif de type.

**2. À chaque coup, par-dessus le plafond.** Ils n'ont pas de limite commune. Les réguliers :

| Objet | Bonus | Quand |
|---|---|---|
| [Flûte Éon](../../items/m_flauta_eon.html) | ×1,15 | Chaque tir |
| [Plaque](../../items/x_zap_plate.html) du type du tir | ×1,15 | Les tirs de ce type |
| [Ceinture Pro](../../items/cinta_experto.html) | ×1,3 | Contre les boss |
| [Bandeau Muscle](../../items/banda_musculo.html) | ×1,6 | De près |
| [Bande Étreinte](../../items/banda_atadura.html) | ×1,3 | Ennemis ralentis |
| [Croc Dragon](../../items/colmillo_dragon.html) | jusqu'à ×1,72 | En frappant le même ennemi |
| [Scanner](../../items/escaner.html) | ×1,5 | Ennemis scannés |
| Coup critique | ×2, ×3 avec la [Loupe](../../items/lupa.html) | Chaque tir avec la [Baie Lansat](../../items/baya_zonlan.html) à un cœur |
| Efficacité des types | jusqu'à ×2,25 | Double faiblesse |

**Exemple chiffré**, mesuré en jeu. Pikachu au plafond de ×3 frappe pour 10,5 par tir.

| Ajouté | Par coup | Total |
|---|---|---|
| Rien de plus | 10,5 | ×1 |
| Flûte Éon, Plaque Volt, Ceinture Pro, Bandeau Muscle, Bande Étreinte, Croc Dragon (au max), Scanner | 96,9 | ×9,2 |
| + Baie Lansat à un cœur et Loupe (chaque tir est un critique ×3) | 290,6 | ×27,7 |
| + un ennemi doublement faible à Électrik (Eau/Vol) | 653,9 | ×62,3 |
| + niveau 60 | 962,5 | ×91,7 |

Un chromatique dont la stat phare est les dégâts ajouterait encore jusqu'à ×1,12.

**Pics occasionnels**, sur certains tirs seulement : [Dentier en Or](../../items/m_dentadura.html) ×3,2, [Joyau Normal](../../items/gema_normal.html) ×4 sur le premier tir d'un combat, [Écaille Draco](../../items/escama_dragon.html) ×2 un tir sur quatre, [Assurance Échec](../../items/seguro_fallo.html) ×2 après un tir dans un mur, [Pierre Soleil](../../items/p_solar.html) jusqu'à ×2 après une pause. D'autres objets par coup sont dans le [guide du mode infini](build-theorycraft.html).

## Combien de tirs ?

- Au plus 12 attaques par seconde, 9 tirs par salve : 108 tirs par seconde rien qu'avec la salve.
- Le [Nœud Destin](../../items/lazo_destino.html) double la salve (9 devant, 9 derrière), et les extras au hasard peuvent porter une attaque jusqu'à 42 tirs. Voir [Tirs supplémentaires](../disparos_extra.html).
- Quelle que soit la build, seuls 450 de vos projectiles tiennent dans la salle. Loin de la cible, les tirs disparaissent avant d'arriver ; restez près.
- Chaque compagnon copie ou ajoute ses propres tirs en plus, jusqu'à 6 compagnons.

## Ce qui est perdu

- Les multiplicateurs « dans le plafond » au-delà de ×5,1 sur le papier : vous êtes déjà à ×3. Prenez plutôt des objets de la liste « par-dessus ».
- Un second exemplaire du même multiplicateur : il compte une fois.
- La cadence au-delà de 12 tirs par seconde.
- La chance au-delà de 10 (un quart compte), la chance de critique au-delà de 100 %, une seconde Loupe.
- La vie au-delà de 12 cœurs.
- Le [Chantibonbon](../../items/m_dulce_nata.html) coûte moins sur une build déjà au-delà du plafond : à ×8 sur le papier il ne baisse les dégâts qu'à 87,5 %, et au-delà de ×11,3 il ne coûte rien.
