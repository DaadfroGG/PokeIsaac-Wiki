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
  value: Un objet montré une fois n'est plus proposé par ce pool de la partie
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
| Boutique | Boutique | 2 emplacements d'objet garantis (1 dès l'étage 31, 3 en Ligue) ; les autres emplacements sont un actif, des cœurs, bombes, clés, âmes ou coffres, au hasard. 6 emplacements, de 4 à 8 avec certains objets. La première boutique d'une partie est gratuite |
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

## Comment un objet est choisi
Chaque pool fonctionne comme un sac où l'on pioche pendant toute la partie :
1. **Le sac.** À la première utilisation d'un pool, le jeu y met tous les objets autorisés. Un objet de poids 2 y entre deux fois, un objet de poids 1 une fois (la plupart pèsent 2 ; quelques-uns, plus rares, pèsent 1, très peu 3 ou 5). Le sac est mélangé : les objets lourds sortent en moyenne plus tôt.
2. **Répartition par catégorie.** Dans les pools trésor, boss et boutique, le jeu décide d'abord quel *type* d'objet donner, selon des parts cibles, puis prend le premier objet autorisé de ce type dans le sac.

| Pool | Stats | Tir | Compagnon | Défense | Utilitaire | Arme | Voltorbe | Évolution |
|---|---|---|---|---|---|---|---|---|
| Trésor | 21 % | 26 % | 13 % | 12 % | 9 % | 8 % | 5 % | 6 % |
| Boss | 30 % | 22 % | 11 % | 11 % | 4 % | 15 % | 3 % | 4 % |
| Boutique | 28 % | 15 % | 8 % | 17 % | 19 % | 4 % | 6 % | 3 % |

   - Un type sous-représenté jusque-là est favorisé (jusqu'à ×4) et un type sorti trop souvent est réduit : sur une longue partie, la répartition suit le tableau.
   - Après un objet Voltorbe, arme, compagnon ou évolution, le même type devient environ 8 fois moins probable au tirage suivant.
3. **Pas de doublons.** Un objet sort du sac dès qu'une salle le montre : ce pool ne le propose plus de la partie, même si vous le laissez sur son piédestal. Les sacs des autres pools le gardent.
4. **Remplissage.** Quand il ne reste plus rien d'autorisé dans un sac, le jeu en refait un lot d'objets autorisés et le place devant.

## Ce qui est ignoré
Un objet est passé (il reste dans le sac pour plus tard) si :
- **Son niveau est trop haut.** Le niveau 2 demande l'étage 4, le niveau 3 l'étage 9, le niveau 4 l'étage 15. La Chance avance les niveaux : chaque point compte pour 2 étages, avec la plus haute Chance positive de l'équipe, ou la pire Chance négative si personne n'en a de positive. Voir [Niveaux des objets](niveles_objetos.html). Distorsion, Céleste, Secret, Super secret, Maudit et Cosmique ignorent les niveaux.
- **Un joueur l'a déjà**, ou il attend déjà sur un piédestal quelque part dans l'étage (deux piédestaux ne montrent donc jamais le même objet), ou il a été **lâché** : un objet que vous jetez ou un actif que vous échangez est retiré du jeu pour le reste de la partie.
- **Il est verrouillé.** Beaucoup d'objets sont verrouillés derrière des [succès](logros.html). En plus, 3 objets sur 10 parmi ceux des pools trésor, boss et boutique démarrent chaque partie verrouillés ; chaque boss vaincu en débloque 4 (8 pour un méga-boss), choisis parmi ceux jusqu'à un niveau au-dessus de votre limite actuelle, et ils rejoignent les sacs à des endroits au hasard. Les objets qui sont aussi dans les pools Distorsion, Céleste ou secret ne sont jamais verrouillés ainsi, pas plus que les objets d'évolution.
- **Un objet compagnon alors que les compagnons de tous les joueurs en vie sont au complet**, ou un objet qui augmente la limite de compagnons alors que vous n'avez aucun compagnon permanent.
- **Un objet de type que votre équipe ne peut pas utiliser** (réservé à un type que personne dans l'équipe n'a).
- **Un objet d'évolution quand tout le monde est complètement évolué** (sauf les objets qui font évoluer par pierre).
- **Un objet rare qui a raté son tirage.** Les Méga-Gemmes n'entrent dans un sac qu'avec 20 % de chances chacune, à la création du sac.

## Quand un pool est à sec
S'il ne reste plus rien d'autorisé dans un pool :
1. Boutique de la Ligue : le pool des boss. Tout autre pool : le pool trésor.
2. Toujours rien : un objet passif au hasard de n'importe quel pool, dans votre limite de niveau, en préférant ceux qui ne sont pas de simples bonus de stats et qui ne sont pas déjà sur un piédestal.
3. En dernier recours : une Protéine.

## Objets actifs
Les actifs sont tirés d'un sac à part, utilisé par la [boutique](../rooms/shop.html) et le [Laboratoire](../rooms/lab.html). Un actif que vous portez ou que vous avez échangé ne peut plus sortir, et la limite de niveau s'applique aussi. Échanger un actif contre celui d'un piédestal laisse le vôtre sur place ; il sort des tirages à partir de là.

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
