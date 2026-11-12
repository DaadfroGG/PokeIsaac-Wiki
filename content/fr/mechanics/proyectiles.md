---
title: Projectiles et dégâts
id: proyectiles
color: '#ff9a3c'
labels:
- text: MÉCANIQUE
  color: '#ff9a3c'
icon: icons/mechanics/criticos.png
---
Votre Pokémon attaque en tirant des projectiles. La plupart de ce que fait une attaque (coups critiques, effets de statut, passifs de type) se décide pour chaque projectile, pas une fois par attaque.

## De l'attaque au projectile
- Votre cadence fixe la fréquence de vos attaques, au plus 12 par seconde.
- Chaque attaque tire 1 projectile, plus 1 par point de multi-tir, jusqu'à 9.
- Chaque projectile fait ses propres tirages au moment du tir : coup critique, tête chercheuse, perforation, et bonus de son passif de type.
- Un Pokémon à double type alterne ses deux types : un projectile sur deux utilise chaque type.

## Quand un projectile touche
- Un projectile ne touche chaque ennemi qu'une fois. Il disparaît après sa première touche, sauf s'il perfore : il traverse alors autant d'ennemis qu'il peut en perforer.
- Les effets ci-dessous sont retirés pour chaque ennemi touché, donc un projectile qui perfore fait un tirage sur chaque ennemi traversé.
- Avec plusieurs projectiles par attaque, une cible subit un tirage par projectile qui la touche. Trois projectiles qui touchent tous font trois tirages.

## Ce qui se passe dans un coup, dans l'ordre
1. Si l'ennemi est empoisonné et que votre tir a le modificateur de venin, les dégâts sont ×1,5.
2. La [table des types](tabla_tipos.html) multiplie les dégâts (entre ×0,45 et ×2,25). Seuls vos propres projectiles l'utilisent.
3. Les effets d'objets et d'armes qui modifient les dégâts à l'impact.
4. Les dégâts sont infligés, et l'ennemi est un peu repoussé (pas les boss).
5. Les effets de statut sont tirés après les dégâts : brûlure, poison, ralentissement, étourdissement, charme, poussée, éclair en chaîne, et les effets du [passif de type](pasivas_escalan.html).

## Quels effets sont tirés, et quand
- **À chaque touche, sans condition :** brûlure, poison, ralentissement, étourdissement, charme, poussée et éclair en chaîne venant de votre type et de vos objets. Un succès n'ajoute jamais de temps à un effet déjà en cours, il le remet seulement à sa durée maximale.
- **À chaque touche, avec une condition :** le gel demande un ennemi déjà ralenti. Les effets de passif qui commencent à un certain rang (propagation, éclaboussure, retournement) ne marchent qu'à partir de ce rang.
- **Une fois par projectile :** certains effets d'objets ne se déclenchent que sur le premier ennemi touché par un projectile.
- **Boss :** étourdissement, confusion, peur et retournement ne marchent pas sur les boss. Le charme, le gel et l'enracinement deviennent un simple ralentissement.

## Les projectiles qui font moins
- Les projectiles créés par un effet (les petits des tirs divisés, l'éclair en chaîne, les compagnons, certaines armes) n'utilisent pas la plupart de vos effets d'objets.
- Les tirs divisés font la moitié des dégâts et ne portent ni vos modificateurs d'objets ni votre passif de type.
- Les ticks de brûlure et de poison ne sont pas des projectiles : ils ignorent la table des types et ne déclenchent pas les effets « à l'impact ».

## Limites
- Au plus 450 de vos projectiles peuvent exister dans une salle. Au-delà, les plus anciens sont supprimés en premier, en commençant par ceux créés par d'autres projectiles.
- Un projectile disparaît quand il a parcouru sa portée (300 par défaut), quand il sort de la salle, ou quand il touche un rocher, un obstacle ou un trou, sauf s'il peut rebondir. Les projectiles Spectre traversent les rochers.

Pages liées : [Rendements décroissants](rendimientos.html), [Coups critiques](criticos.html), [Table des types](tabla_tipos.html), [Passifs de type évolutifs](pasivas_escalan.html).
