---
title: Coopération
id: coop
color: '#5ab0ff'
labels:
- text: MÉCANIQUE
  color: '#5ab0ff'
icon: icons/mechanics/equipo.png
details:
- label: Joueurs
  value: Jusqu'à 4, en ligne
- label: Vie des ennemis
  value: ×1,35 / ×1,7 / ×2,05 à 2 / 3 / 4 joueurs
- label: Vie des boss
  value: ×1,5 / ×2 / ×2,5 à 2 / 3 / 4 joueurs
- label: Partagé
  value: Cœurs, cœurs d'âme, pièces, Voltorbes et clés ramassés
- label: Si tout le monde est K.O.
  value: La partie est terminée
names:
  en:
    name: Co-op
    desc: Online runs for up to 4 trainers, with the same floors and a shared team of rules.
  fr:
    name: Coopération
    desc: Parties en ligne pour jusqu'à 4 dresseurs, avec les mêmes étages et des règles partagées.
---
Parties en ligne pour jusqu'à 4 dresseurs. Tout le monde explore le même étage ensemble, avec ses propres Pokémon, objets et compagnons ; les ennemis deviennent plus costauds et quelques éléments sont partagés.

## Jouer ensemble
- Entrer en Coopération crée votre salon. Partagez le code du salon ou invitez des amis depuis la liste d'amis ; un ami dans un salon peut demander à le rejoindre. Un salon accueille jusqu'à 4 dresseurs.
- Tout le monde doit être prêt, et l'hôte lance la partie. Tous les joueurs doivent avoir la même version du jeu que l'hôte ; sinon, ils doivent recharger la page.
- Toute l'équipe est toujours dans la même salle. La partie de l'hôte fait tourner la salle pour tout le monde.
- Un joueur qui perd la connexion plus de 8 secondes est retiré de la partie pour de bon : il compte comme K.O., perd ses compagnons et ne compte plus dans le partage des objets. Si l'hôte perd la connexion un instant, les autres attendent jusqu'à 20 secondes au lieu de fermer le salon.

## Difficulté
Les ennemis et les boss ont plus de vie pour chaque joueur en plus. Leurs attaques ne changent pas.

| Joueurs | Vie des ennemis | Vie des boss |
|--:|--:|--:|
| 1 | ×1 | ×1 |
| 2 | ×1,35 | ×1,5 |
| 3 | ×1,7 | ×2 |
| 4 | ×2,05 | ×2,5 |

- Le multiplicateur compte tous ceux qui ont rejoint le salon, même quelqu'un parti depuis.
- Chaque ennemi vise le **joueur encore debout le plus proche**.
- L'expérience ne va qu'au joueur qui porte le coup fatal : les coéquipiers n'en reçoivent pas (le banc d'un Pokémon reçoit tout de même sa part, voir [Niveaux](niveles_pokemon.html)).

## Ce qui est partagé
- **Ramassé par un joueur, donné à toute l'équipe :** cœurs et demi-cœurs (chaque coéquipier à qui il manque de la vie est soigné, avec son propre bonus de Méga-Gemme et sans la limite de soin), cœurs d'âme (un cœur d'âme chacun), pièces (la [Pièce Rune](../items/amuleto.html) ou le [Haut-de-forme](../items/chistera.html) de chacun compte toujours), Voltorbes, clés et bonbons. Les pièces, Voltorbes et clés arrivent aussi aux coéquipiers K.O., jusqu'aux plafonds habituels ; les cœurs et cœurs d'âme n'arrivent qu'à ceux qui sont debout.
- **Non partagé :** ce qui est en vente dans une boutique, les objets, les coffres et votre argent quand vous achetez. Chaque joueur paie avec ses propres Pokédollars ; n'importe quel joueur peut parler à Miaouss pour changer le stock de la boutique.
- **Pools d'objets :** un objet que possède un joueur est censé être exclu des offres suivantes pour tous, mais des joueurs ont vu l'objet d'un coéquipier revenir plus tard (voir [Pools d'objets](reservas_objetos.html)).
- **Récompenses de salle :** quand une salle est terminée, chaque joueur encore dans la partie tire la récompense de salle de son côté, avec sa propre Chance. Plus de joueurs, plus de tirages, et ce qui tombe est partagé comme ci-dessus.

## Récompenses et tirage au sort du butin
- **Les salles au trésor, les salles de boss et la Salle Céleste** proposent un objet par joueur, au lieu d'un choix d'objets pour un seul joueur. La règle « choisir un parmi deux » ne vaut qu'en jouant seul.
- **Les boss** laissent aussi un cœur par joueur, et leurs pièces sont réparties entre les joueurs : seulement environ 1/n tombent, mais chaque pièce va à tout le monde, donc chaque joueur reçoit environ 1/n de ce que rapporte une partie solo. Les méga boss laissent un second objet par joueur.
- **Le tour de choix :** quand plusieurs objets sont proposés, les joueurs choisissent à tour de rôle dans un ordre aléatoire, 15 secondes chacun. Un joueur qui laisse filer le temps reçoit un objet au hasard. Les joueurs K.O., partis ou dont le [Sac](mochila100.html) est plein sont sautés, et ce qui reste ensuite est libre pour n'importe qui.
- La trappe du boss reste fermée tant que tout le monde n'a pas pris son objet.

## K.O. et réanimation
- Un joueur à zéro de vie tombe K.O. et devient un fantôme : il flotte dans la salle et peut regarder, mais ne peut pas attaquer, et les ennemis l'ignorent. Il perd aussi ses compagnons.
- La partie ne se termine que quand **tous** les joueurs sont K.O.
- À l'étage suivant, les joueurs K.O. reviennent avec **un cœur** et 1,5 seconde d'invulnérabilité.
- La [Cendre Sacrée](../items/cenizas.html) réanime tout de suite les coéquipiers K.O., avec 2 cœurs. Un objet qui vous réanime (le [Rappel Max](../items/d_revivir_maximo.html), par exemple) ne fonctionne que pour son propriétaire.

## Équipe de 3 en coopération
Chaque joueur apporte sa propre équipe de 3 Pokémon au plus et change avec les touches 1-3, comme en solo ([Équipe](equipo.html)).
- **Le changement est personnel.** Votre changement ne modifie jamais les Pokémon de vos coéquipiers. Le Pokémon que vous retirez se repose 8 secondes, mais seulement tant qu'il y a des ennemis dans la salle ; le repos est oublié dès que la salle est terminée. Vos coéquipiers voient votre équipe et quel Pokémon se repose.
- **La vie est celle du joueur, pas du Pokémon.** Les cœurs, cœurs d'âme, objets et améliorations appartiennent au joueur et restent quand il change. Un K.O. met tout le joueur à terre, quel que soit le Pokémon sorti, et un joueur réanimé revient avec le Pokémon qui était sorti.
- **L'expérience reste dans l'équipe d'un joueur.** Le Pokémon qui porte le coup fatal gagne l'XP, et les Pokémon de réserve de ce joueur reçoivent leur part habituelle. Rien ne va aux Pokémon des coéquipiers.
- **Pas de coéquipiers aléatoires.** Le réglage « équipe aléatoire » et son bonus (pièces, clé, Voltorbe, cœur d'âme) ne fonctionne qu'en solo et est ignoré en coopération.
- **Les objets réservés à un type comptent tous les Pokémon.** Une [Plaque](../items/x_draco_plate.html), la [Bande Étreinte](../items/banda_atadura.html) ou le [Nautile](../items/m_fosil_helix.html) peut être proposé dès qu'**un** Pokémon de **n'importe quel** joueur, en réserve ou non, a le bon type. L'objet va à celui qui le prend, et il ne sert que tant que son Pokémon actif a ce type. Voir [Pools d'objets](reservas_objetos.html).
- **La Chance est la meilleure de la salle.** La limite de palier des objets proposés utilise la plus haute Chance parmi tous les joueurs, pas celle de qui ouvre la salle.

## Objets qui touchent toute l'équipe
Ces objets fonctionnent pour tout le monde tant qu'**au moins un joueur encore debout** les possède. Les exemplaires de différents joueurs ne s'additionnent pas : l'effet est actif ou non.

| Objet | Ce qu'il fait pour l'équipe |
|---|---|
| [Talisman Sain](../items/amuleto_puro.html) | Un ennemi de moins dans chaque salle de combat normale |
| [Max Leurre](../items/cebo_max.html) | Un ennemi de plus dans chaque salle de combat normale, et plus de pièces par victoire |
| [Vieux Tortil](../items/corona_antigua.html) | Des ennemis se rendent parfois quand l'équipe entre dans une salle |
| [Morceau Comète](../items/fragmento_cometa.html) | Une comète frappe les ennemis quand l'équipe entre dans un combat |
| [Super Repousse](../items/superrepelente.html) | Les ennemis mettent du temps à réagir quand l'équipe entre dans une salle |
| [Ralentiqueue](../items/cola_plumbea.html) | Les ennemis (pas les boss) vont 20 % plus lentement |
| [Encens Plein](../items/incienso_lento.html) | Les tirs ennemis sont 25 % plus lents |
| [Encens Roc](../items/incienso_roca.html) | Les rochers que n'importe qui casse peuvent laisser des pièces |
| [CoquilleTréfonds](../items/concha_cardumen.html) | Un coffre peut apparaître quand l'équipe termine une salle |
| [Passe Orbe](../items/pase_orbe.html) | Les salles au trésor s'ouvrent sans clé |
| [Carte Bleue](../items/d_tarjeta_azul.html) | Tout coûte moitié prix en boutique |
| [Plume Armure](../items/d_pluma_aguante.html), [Crins Sombres](../items/d_crin_negra.html) | Décident quelle faille s'ouvre après un boss |

Certains effets restent à leur propriétaire : l'[Aimant](../items/iman.html) attire les objets au sol vers le joueur le plus proche qui le possède, et la [Queue Ramoloss](../items/cola_slowpoke.html) ralentit les ennemis près de son propriétaire. Le [Charme Ovale](../items/amuleto_oval.html) n'apporte rien en coopération, car le choix supplémentaire n'existe qu'en jouant seul.

Les objets tenus qui profitent à l'équipe sont décrits sur leur propre page ; par exemple, la [Craie](../held/chalky_stone.html) fonctionne quel que soit le joueur qui casse l'objet, et la [Baie Gowav](../held/aguav_berry.html) laisse les cœurs aux coéquipiers qui en ont besoin.

Voir aussi : [Raid Dynamax](raid_dinamax.html) (solo ou en coopération), [Pools d'objets](reservas_objetos.html), [Compagnons](companeros.html).
