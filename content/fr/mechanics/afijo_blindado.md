---
title: Blindé (affixe)
id: afijo_blindado
color: '#a3a8c0'
labels:
- text: MÉCANIQUE
  color: '#a3a8c0'
icon: icons/mechanics/afijos.png
details:
- label: Bouclier
  value: 15 % de sa vie maximale
- label: Boss de la Ligue
  value: 12 % de leur vie maximale
- label: Compte contre lui
  value: Coups critiques, brûlure, poison
- label: Ne compte pas
  value: Efficacité des types, effets d'objets au contact
names:
  es:
    name: Blindado
    desc: ''
---
Un boss Blindé a une barre de bouclier en plus de sa vie : tant que vous ne l'avez pas brisée, vos coups ne touchent pas sa vie.

## Comment le bouclier prend les dégâts
- Le bouclier vaut 15 % de la vie maximale du boss (12 % pour les boss de la Ligue). Quand le boss gagne de la vie (coop, Boss colossaux, mode infini), le bouclier grandit avec elle.
- Chaque coup frappe le bouclier avec les dégâts qu'il avait en quittant votre Pokémon. Les [coups critiques](criticos.html) comptent, mais pas l'[efficacité des types](tabla_tipos.html), les effets d'objets qui se déclenchent au contact ni la [pénalité quand vous portez beaucoup d'objets](rendimientos.html) : un type super efficace ne fait rien de plus contre le bouclier.
- Quand un coup brise le bouclier, le reste de ses dégâts passe tout de suite dans la vie du boss, avec tous les bonus habituels.
- La brûlure et le poison usent aussi le bouclier.
- « Bouclier brisé ! » s'affiche quand il casse. Il ne revient pas.

## Bouclier ou vie
Le bouclier fonctionne comme une deuxième barre de vie, mais un coup sur le bouclier saute presque tout ce que subit un coup sur la vie :

| | Bouclier | Vie |
|---|---|---|
| Coups critiques et tirs qui grossissent | Comptent | Comptent |
| Efficacité des types | Ignorée | Appliquée (×0,45 à ×2,25) |
| Venin (+50 % sur les cibles empoisonnées) | Ignoré | Appliqué |
| Effets d'objets et d'armes au contact | Ne se déclenchent pas | Se déclenchent |
| [Pénalité quand vous portez beaucoup d'objets](rendimientos.html) | Non appliquée | Appliquée |
| Brûlure, poison, ralentissement et autres effets de vos tirs | Non appliqués | Appliqués |
| Chiffres de dégâts et son d'impact | Aucun | Affichés |
| Compte pour les changements de phase | Non | Oui |
| Compté par les [boss adaptatifs](jefes_adaptativos.html) | Non | Oui |
| Se soigne | Jamais | Avec [Vampire](afijo_vampiro.html) |

Le coup qui brise le bouclier compte comme un coup sur la vie pour ce qu'il en reste. Exemple : un tir Électrik de 10 dégâts sur un boss Eau (×2) retire 10 au bouclier, mais 20 à sa vie une fois le bouclier tombé. S'il ne reste que 4 au bouclier, le bouclier perd 4 et la vie du boss perd (10 − 4) × 2 = 12.

## Conseils
- Seuls les dégâts totaux comptent contre le bouclier : beaucoup de petits tirs ou quelques gros le brisent aussi bien.
- Avec un type super efficace, le bouclier vous coûte autant que 30 % de la vie du boss. Avec un type résisté (×0,5), il coûte moins que la même quantité de vie.
- La brûlure, le poison, le ralentissement et le charme ne marchent qu'une fois le bouclier tombé.

Tous les affixes et les boss qui les reçoivent : [Affixes des boss](afijos.html).
