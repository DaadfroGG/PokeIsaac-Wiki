---
title: Soins et invulnérabilité
id: curacion
color: '#ff7a9a'
labels:
- text: MÉCANIQUE
  color: '#ff7a9a'
icon: icons/mechanics/corazones_alma.png
details:
- label: Limite de soins
  value: Au plus 30 % de vos PV max (au moins 2 cœurs) par 10 s, pour certains soins d'objets
- label: Sans limite
  value: Cœurs ramassés, soin en prenant un objet, la plupart des objets de soin
- label: Après un coup
  value: Environ 1,2 s d'invulnérabilité
- label: Coup bloqué ou résisté
  value: 0,3 à 0,5 s d'invulnérabilité
---
Certains objets vous soignent encore et encore pendant un combat. Pour qu'ils ne vous rendent pas immortel, une partie de ces soins a une limite par 10 secondes. Après chaque coup, vous avez aussi un court moment où rien ne peut vous blesser.

## Limite de soins
- La limite est de **30 % de vos PV max, au moins 2 cœurs**, toutes les 10 secondes. Avec 6 cœurs, cela fait 2 cœurs par 10 s ; avec 10 cœurs, 3 cœurs.
- Les 10 secondes commencent au premier soin limité. Une fois écoulées, le compteur repart à 0.
- Un soin qui dépasserait la limite est réduit à ce qui reste ; une fois la limite atteinte, ces soins ne font plus rien jusqu'à la fin des 10 secondes.

### Soins qui comptent dans la limite
- [Baie Enigma](../items/baya_enigma.html) (30 % quand vous êtes touché)
- [Grosse Racine](../items/raiz_grande.html) (½ cœur tous les 40 dégâts infligés)
- [Fossile Mâchoire](../items/d_fosil_mandibula.html)
- [Pierre Magma](../items/d_piedra_magma.html)
- [Noigrume Rouge](../items/m_bonguri_rojo.html)
- [Fragment Lunaire](../items/cs_luna.html) (toutes les 3 salles)
- [Cloche Cristal](../items/campana_clara.html)

### Soins qui l'ignorent
- Les cœurs et demi-cœurs ramassés au sol.
- Le soin reçu en prenant un objet qui soigne (objets de stats, baies…).
- [Restes](../items/restos.html), [Grelot Coque](../items/cascabel.html), [Plume Santé](../items/d_pluma_vigor.html), [Limonade](../items/limonada.html), [Poudrénergie](../items/polvo_energia.html), [Baie Oran](../items/baya_aranja.html), [Eau Fraîche](../items/bolsa_suero.html), [Guérison](../items/restaurar_todo.html).
- Les soins des [objets tenus](equipados.html) et des montées de niveau.
- Avec le [Lait Meumeu](../items/leche_mumu.html), le soin au-delà de vos PV max devient de la vie d'âme ; il suit la même limite que le soin qui l'a causé.

## Invulnérabilité
- Après un coup qui vous blesse, vous ne pouvez plus être blessé pendant **environ 1,2 seconde** (votre Pokémon clignote). La [Lumargile](../items/arcilla_ligera.html) l'allonge.
- Un coup que la [table des types](tabla_tipos.html) réduit à rien, ou qu'un passif de type esquive, donne **0,5 s**.
- Un coup qu'un objet bloque entièrement donne **environ 0,33 s**.
- Ces durées ne s'additionnent jamais : une nouvelle ne s'applique que si elle est plus longue que ce qui reste.

## Voir aussi
- [Cœurs d'âme](corazones_alma.html)
- [Cumul des objets](acumulacion.html)
