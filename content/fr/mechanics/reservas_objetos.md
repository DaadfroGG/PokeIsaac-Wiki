---
title: Pools et apparition des objets
id: reservas_objetos
color: '#ffd23c'
labels:
- text: MÉCANIQUE
  color: '#ffd23c'
icon: icons/mechanics/niveles_objetos.png
details:
- label: Pools
  value: Trésor, Boss, Boutique, Distorsion, Céleste, Secret, Super secret, Maudit, Cosmique
- label: Pas de doublons
  value: Un objet montré n'est plus proposé par ce pool tant que son sac n'est pas rempli à nouveau
- label: Niveaux
  value: Étage 1 / 4 / 9 / 15, plus tôt avec la Chance
- label: Verrous
  value: Succès, plus 3 sur 10 verrouillés à chaque partie
names:
  en:
    name: Item pools and spawning
    desc: Every item on a pedestal is drawn from a pool tied to a kind of room. Where items come from, how the draw works (no repeats, floor limits, locked items), and the exceptions.
  es:
    name: Reservas y aparición de objetos
    desc: Cada objeto de un pedestal sale de una reserva ligada a un tipo de sala. De dónde salen los objetos, cómo funciona el sorteo (sin repetidos, límites por planta, objetos bloqueados) y las excepciones.
  fr:
    name: Pools et apparition des objets
    desc: Chaque objet d'un piédestal vient d'un pool lié à un type de salle. D'où viennent les objets, comment fonctionne le tirage (pas de doublons, limites d'étage, objets verrouillés) et les exceptions.
  de:
    name: Item-Pools und Erscheinen
    desc: Jedes Item auf einem Sockel stammt aus einem Pool, der an eine Raumart gebunden ist. Woher Items kommen, wie die Ziehung funktioniert (keine Doppelten, Etagenlimits, gesperrte Items) und die Ausnahmen.
  it:
    name: Pool e comparsa degli oggetti
    desc: Ogni oggetto su un piedistallo viene da un pool legato a un tipo di stanza. Da dove arrivano gli oggetti, come funziona l'estrazione (niente doppioni, limiti di piano, oggetti bloccati) e le eccezioni.
  pt:
    name: Pools e surgimento de itens
    desc: Cada item num pedestal vem de um pool ligado a um tipo de sala. De onde vêm os itens, como funciona o sorteio (sem repetidos, limites por andar, itens bloqueados) e as exceções.
  ru:
    name: Пулы и появление предметов
    desc: Каждый предмет на пьедестале берется из пула, связанного с типом комнаты. Откуда берутся предметы, как работает выбор (без повторов, ограничения по этажам, заблокированные предметы) и исключения.
  ja:
    name: どうぐプールと出現
    desc: 台座のどうぐはすべて、部屋の種類ごとのプールから抽選されます。どうぐの入手元、抽選のしくみ（重複なし・階の制限・ロック）と例外を解説します。
  ko:
    name: 아이템 풀과 등장
    desc: 받침대 위의 아이템은 모두 방 종류에 묶인 풀에서 뽑힌다. 아이템이 나오는 곳, 뽑기 규칙(중복 없음, 층 제한, 잠긴 아이템)과 예외를 설명한다.
  zh:
    name: 道具池与出现规则
    desc: 底座上的每件道具都来自与房间类型绑定的道具池。介绍道具的来源、抽取规则（不重复、楼层限制、锁定道具）以及各种例外。
  zt:
    name: 道具池與出現規則
    desc: 台座上的每件道具都來自與房間類型綁定的道具池。介紹道具的來源、抽取規則（不重複、樓層限制、鎖定道具）以及各種例外。
---
Chaque objet que vous trouvez sur un piédestal vient d'un **pool** : une liste liée à un type de salle. Le jeu y pioche avec quelques règles (pas de doublons, limites d'étage, objets verrouillés), et certaines salles et certains objets les contournent. Chaque page d'objet indique ses pools ; la [liste des objets](../items/) se filtre par pool.

## Les pools
| Pool | Utilisé par | Objets passifs | Par niveau (1 / 2 / 3 / 4) |
|---|---|---|---|
| Trésor | [Salle au trésor](../rooms/treasure.html), coffres, Vœu Étoile, nombreuses salles spéciales | 224 | 94 / 93 / 28 / 9 |
| Boss | Récompenses de boss, [Tour de Combat](../rooms/tower.html), [Salle des Quatre](../rooms/four.html), rival | 110 | 19 / 48 / 25 / 18 |
| Boutique | [Boutique](../rooms/shop.html) | 116 | 72 / 40 / 4 / 0 |
| Distorsion | [Salle Distorsion](../rooms/devil.html) (pactes de Darkrai) | 22 | 4 / 8 / 6 / 4 |
| Céleste | [Salle Céleste](../rooms/angel.html) (Jirachi) | 22 | 8 / 6 / 5 / 3 |
| Secret | [Salles secrètes](../rooms/secret.html), [Kecleon](../world/kecleon.html) | 23 | 14 / 3 / 3 / 3 |
| Super secret | [Salle super secrète](../rooms/supersecret.html) | 6 | 6 / 0 / 0 / 0 |
| Maudit | [Salle d'Ectoplasma](../rooms/gengar.html) | 6 | 6 / 0 / 0 / 0 |
| Cosmique | [Observatoire](../rooms/observatory.html) | 6 | 6 / 0 / 0 / 0 |

- Beaucoup d'objets sont dans plusieurs pools (un objet du trésor peut aussi être dans le pool des boss, par exemple).
- Les **objets actifs** ont leur propre pool, utilisé par la boutique et le [Laboratoire du Professeur](../rooms/lab.html). Voir [Objets actifs](#objets-actifs).
- Les objets qui ne sont dans aucun pool ne tombent jamais : ils viennent de sources spéciales (objets de départ, récompenses d'événement, cadeau fixe).

## D'où viennent les objets
| Source | Pool | Ce que vous obtenez |
|---|---|---|
| Salle au trésor | Trésor | 1 objet gratuit ; **2 au choix** dès l'étage 6 en Classique ([choisir un objet sur deux](elegir_uno.html)) ; +1 choix avec le [Charme Ovale](../items/amuleto_oval.html). 1 par joueur en coop |
| Boss | Boss | 1 objet gratuit, 2 au choix dès l'étage 6 ; +1 choix avec le Charme Ovale. Les méga-boss ajoutent un second objet gratuit. 1 par joueur en coop |
| Boutique | Boutique | 2 emplacements d'objet garantis (1 dès l'étage 31, 3 en Ligue) ; les autres emplacements sont un actif, des cœurs, bombes, clés, âmes ou coffres, au hasard. 6 emplacements, de 4 à 8 avec certains objets. La première boutique d'une partie est gratuite. Tous les 10 étages elle vend aussi des vitamines (voir [exceptions](#exceptions--ce-qui-ignore-les-règles)) |
| [Coffre](../world/chest.html) | Trésor | 12 % des coffres normaux contiennent un objet au lieu de butin |
| [Coffre doré](../world/goldchest.html) | Trésor | Toujours un objet |
| [Vœu Étoile](../items/pieza_deseo.html) (actif) | Trésor | Un piédestal gratuit apparaît juste au-dessus de vous |
| Pacte du diable | Distorsion | 2 objets (+1 par joueur en plus, 4 max) contre des cœurs. Une fois par partie, 10 % de chances que la salle soit un piège de Darkrai (le vaincre : un objet Charbon, ou un objet de boss si vous l'avez déjà) |
| Salle Céleste | Céleste | 1 objet gratuit (1 par joueur, 4 max) |
| Salle secrète | Secret | 15 % [Kecleon](../world/kecleon.html) avec 2 objets contre des PokéDollars ; 12 % un autel avec 1 objet gratuit. Dans toute salle secrète, 15 % de trouver un objet secret gratuit de plus |
| Salle super secrète | Super secret | Un objet d'Halloween (autel, récompense de mini-boss ou bonbons ou sort) |
| [Salle d'Ectoplasma](../rooms/gengar.html) | Maudit | 2 objets maudits, vous en choisissez un |
| [Observatoire](../rooms/observatory.html) | Cosmique | 3 objets gratuits, vous en choisissez un |
| [Salle du Dresseur](../rooms/trainer.html) | Trésor ; Boss dès l'étage 9 (combat difficile) | 1 objet si vous gagnez |
| [Salle du Rival](../rooms/rival.html) et [Tour de Combat](../rooms/tower.html) | Boss | Objet(s) de boss en récompense |
| [Salle des Quatre](../rooms/four.html) | 2 Boss + 2 Trésor | 4 objets, vous en choisissez un |
| [Ruines Unown](../rooms/ruins.html) | Trésor | Un objet si vous faites 0 ou 1 erreur |
| [Échange Mystère](../rooms/trade.html) | Boutique, Trésor, Boss ou Secret | 3 objets, vous en choisissez un ; chaque lancer les remplace par des objets du pool que montre le dé (1 boutique, 2–3 trésor, 4–5 boss, 6 secret) |
| [Vendeurs du casino](../rooms/casino.html) | Pikachu : Trésor ; Mimikyu : Boss | Chaque essai augmente la chance d'objet (Pikachu : 2 % + 0,5 % par essai, 12 % max ; Mimikyu : 8 % + 4 % par essai, 40 % max) ; la Chance aide. Une fois l'objet donné, ils partent |
| Machine à sous | Trésor | Trois Poké Balls (1 % des tours, +1 % par point de Chance) donnent un objet |
| [Salle MissingNo.](../rooms/glitch.html) | Trésor, Boss | Deux objets corrompus, ou un objet de boss gratuit |
| [Terrier de Taupiqueur](../rooms/burrow.html) | Trésor | Meilleur palier de récompense |

## Comment fonctionne un tirage
Chaque fois qu'une salle montre un objet, le jeu fait un **tirage** dans le pool de cette salle. Deux choses sont distinctes :
- **Le sac** : la liste des objets que le pool contient encore pendant la partie. Une fois créé, il ne fait que se vider (voir plus bas).
- **Les filtres** : les règles qui disent quels objets sont autorisés *à cet instant*. Un objet qui échoue à un filtre est seulement ignoré : il reste dans le sac pour un tirage ultérieur.

Un tirage se déroule ainsi :
1. **Création du sac (à la première utilisation).** Le jeu y met tous les objets du pool autorisés à ce moment-là. Un objet de poids 2 y entre deux fois, un objet de poids 1 une fois (la plupart pèsent 2 ; quelques-uns, plus rares, pèsent 1, très peu 3 ou 5). Le sac est mélangé : les objets lourds sortent en moyenne plus tôt.
2. **Choix d'un type** (pools trésor, boss et boutique seulement). Le jeu décide d'abord quel *type* d'objet donner, selon des parts cibles :

| Pool | Stats | Tir | Compagnon | Défense | Utilitaire | Arme | Voltorbe | Évolution |
|---|---|---|---|---|---|---|---|---|
| Trésor | 21 % | 26 % | 13 % | 12 % | 9 % | 8 % | 5 % | 6 % |
| Boss | 30 % | 22 % | 11 % | 11 % | 4 % | 15 % | 3 % | 4 % |
| Boutique | 28 % | 15 % | 8 % | 17 % | 19 % | 4 % | 6 % | 3 % |

   - Un type sous-représenté jusque-là est favorisé (jusqu'à ×4) et un type sorti trop souvent est réduit : sur une longue partie, la répartition suit le tableau.
   - Après un objet Voltorbe, arme, compagnon ou évolution, ce type devient environ 8 fois moins probable au tirage suivant.
3. **Prendre le premier objet autorisé** de ce type dans le sac (autres pools : le premier objet autorisé du sac).
4. **Le retirer du sac.** Toutes ses copies quittent le sac de ce pool dès que la salle le montre, même si vous ne le prenez jamais. Les sacs des autres pools le gardent.

## Les filtres
Un objet échoue au tirage (et reste dans le sac) si :
- **Son niveau est trop haut.** Le niveau 2 demande l'étage 4, le niveau 3 l'étage 9, le niveau 4 l'étage 15. La Chance avance les niveaux : chaque point compte pour 2 étages, avec la plus haute Chance positive de l'équipe, ou la pire Chance négative si personne n'en a de positive. Voir [Niveaux des objets](niveles_objetos.html). Distorsion, Céleste, Secret, Super secret, Maudit et Cosmique n'ont pas de limite de niveau.
- **Un joueur le possède déjà**, ou il attend déjà sur un piédestal quelque part dans l'étage (deux piédestaux ne montrent donc jamais le même objet).
- **Il a été lâché.** Un objet que vous jetez, ou un actif que vous échangez contre un autre, sort des tirages pour le reste de la partie.
- **Il est verrouillé.** Beaucoup d'objets sont verrouillés derrière des [succès](logros.html). En plus, 3 objets sur 10 parmi ceux des pools trésor, boss et boutique démarrent chaque partie verrouillés ; chaque boss vaincu en débloque 4 (8 pour un méga-boss), choisis parmi ceux jusqu'à un niveau au-dessus de votre limite actuelle, et ils rejoignent les sacs à des endroits au hasard. Les objets qui sont aussi dans les pools Distorsion, Céleste ou secret ne sont jamais verrouillés ainsi, pas plus que les objets d'évolution.
- **Objet compagnon alors que les compagnons de tous les joueurs en vie sont au complet**, ou objet qui augmente la limite de compagnons alors que vous n'avez aucun compagnon permanent.
- **Objet de type que votre équipe ne peut pas utiliser** (réservé à un type que personne dans l'équipe n'a).
- **Objet d'évolution quand tout le monde est complètement évolué** (sauf les objets qui font évoluer par pierre).

## Quand le sac est épuisé
« Épuisé » veut dire qu'aucun objet du sac ne passe les filtres (le sac peut encore contenir des objets de niveau trop haut, par exemple). Alors, dans l'ordre :
1. **Remplissage.** Le jeu place un nouveau lot devant le sac : tous les objets de ce pool qui passent les filtres maintenant. Cela inclut des objets déjà montrés mais que vous ne possédez pas, comme celui que vous avez laissé lors d'un choix sur deux. Donc **« pas de doublons » ne dure que jusqu'au prochain remplissage**. Les objets que vous possédez, avez lâchés, ou qui sont sur un piédestal ne reviennent pas ainsi.
2. **Rien dans le pool ne passe** : le jeu tire dans un autre pool : le pool des boss pour la boutique de la Ligue, le pool trésor pour tous les autres.
3. **Toujours rien : dernier recours.** Un objet passif au hasard de n'importe quel pool, dans votre limite de niveau, en préférant ceux qui ne sont pas de simples bonus de stats et qui ne sont pas sur un piédestal. **Cette étape ignore ce que vous possédez et ce que vous avez lâché** : on peut vous proposer un objet que vous avez déjà ou que vous avez jeté. Si même cela échoue, une Protéine.

## Exceptions : ce qui ignore les règles
| Quoi | Ce que ça fait |
|---|---|
| **Vitamines de la boutique** | En Classique, tous les 10 étages (10, 20, 30…) ou au dernier étage de chaque chapitre, la boutique remplace jusqu'à 2 de ses emplacements par des **vitamines** (Protéine, Calcium, Zinc, Fer, PP Max, Carbone), à 1,5 × le prix d'un objet. Elles ne viennent pas du pool boutique : pas de sac, pas de règle « pas de doublons », pas de filtre « lâché ». La boutique préfère les vitamines que personne n'a, mais si vous les avez toutes, elle les revend. C'est pourquoi une Protéine que vous avez lâchée peut réapparaître en boutique. Si un joueur en vie a une santé max sous la limite du jeu, PV Plus passe en premier (1,8 × le prix). Elles remplacent d'abord des emplacements de ramassables (cœurs, bombes…) avant des emplacements d'objets en plus, et jamais les deux premiers emplacements d'objet |
| **Relance de la boutique** | Placez-vous près du vendeur et appuyez sur la touche d'interaction : le stock est retiré au sort de nouveau, pour un prix qui augmente à chaque relance (3 × 1,45 par relance, selon l'étage, 2 au minimum). Impossible en Ligue ou dans une boutique gratuite. Les anciens objets sont consommés, les nouveaux viennent des sacs comme d'habitude, et l'échange par des vitamines se refait |
| **Objets fixes** | Certaines récompenses sont un objet précis, pas un tirage : par exemple le Charbon après avoir vaincu le faux Darkrai (un objet de boss à la place si vous l'avez déjà) |
| **Dernier recours** | Voir plus haut : ignore ce que vous possédez et lâchez |
| **Remplissage** | Voir plus haut : ramène des objets déjà montrés mais non possédés |

## Objets actifs
Les actifs (58 peuvent tomber) ont leur propre sac, utilisé par la [boutique](../rooms/shop.html) (un emplacement) et le [Laboratoire du Professeur](../rooms/lab.html) (Alakazam vend 3 actifs, 3 tirages à la suite). Il fonctionne comme les autres sacs, avec des différences :
- Chaque actif y entre **une seule fois** (pas de poids) et il n'y a pas de répartition par type.
- Filtres : pas un actif que vous portez (n'importe quel joueur), pas un actif que vous avez échangé ou lâché, et dans la limite de niveau (29 de niveau 1, 23 de niveau 2, 5 de niveau 3, 1 de niveau 4).
- Un actif tiré quitte le sac.
- **Quand aucun actif du sac ne passe les filtres, le sac est refait** : tous les actifs non portés et non lâchés sont mélangés et placés devant. Après une longue partie, des actifs déjà vus (et laissés) reviennent donc.
- Si même le sac refait n'a rien dans votre limite de niveau, le jeu prend n'importe quel actif que vous ne portez pas, **sans tenir compte de la limite de niveau** ; si vous les portez tous, n'importe quel actif.
- Échanger votre actif contre celui d'un piédestal laisse le vôtre sur place ; il sort des tirages à partir de là.

## Objets qui changent les tirages
- [Charme Ovale](../items/amuleto_oval.html) : un objet de plus au choix dans les salles au trésor et après les boss.
- [Pilule Talent](../items/a_capsula.html) : remplace chaque objet encore sur un piédestal de la salle par un autre, tiré du pool propre à la salle.
- [Patch Talent](../items/a_parche.html) : remplace tous vos objets passifs par des objets au hasard (70 % pool trésor, 30 % pool boss).
- [Vœu Étoile](../items/pieza_deseo.html) : un objet gratuit du pool trésor à la demande.
- La Chance : relève la limite de niveau (voir plus haut).
- Événement en direct « objets » : un objet de plus dans la salle au trésor.

## Coop et modes
- Les pools sont **partagés par toute l'équipe** : un objet que possède un joueur n'est jamais proposé aux autres.
- Les salles au trésor, les salles de boss et la Salle Céleste donnent **un objet par joueur**. Les joueurs choisissent dans un ordre aléatoire, 15 secondes chacun ; si le temps s'écoule, un objet au hasard est pris. La règle « un objet sur deux » ne s'applique qu'en solo.
- **Ligue** : la boutique vend des objets des pools boutique et trésor réunis ; la salle au trésor propose deux objets au choix dès le troisième étage.

Voir aussi : [Niveaux des objets](niveles_objetos.html), [Choisir un objet sur deux](elegir_uno.html), [Succès et objets](logros.html).
