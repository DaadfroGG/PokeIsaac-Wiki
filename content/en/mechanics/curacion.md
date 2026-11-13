---
title: Healing and invulnerability
id: curacion
color: '#ff7a9a'
labels:
- text: MECHANIC
  color: '#ff7a9a'
icon: icons/mechanics/corazones_alma.png
details:
- label: Healing limit
  value: At most 30 % of your max HP (at least 2 hearts) per 10 s, for some item heals
- label: Not limited
  value: Heart pickups, healing when you pick up an item, most healing items
- label: After a hit
  value: About 1.2 s of invulnerability
- label: Blocked or resisted hit
  value: 0.3 to 0.5 s of invulnerability
---
Some items heal you over and over during a fight. To stop them from making you unkillable, part of that healing has a limit per 10 seconds. After every hit you also get a short moment where nothing can hurt you.

## Healing limit
- The limit is **30 % of your max HP, at least 2 hearts**, for every 10 seconds. With 6 hearts that is 2 hearts per 10 s; with 10 hearts, 3 hearts.
- The 10 seconds start with the first limited heal. Once they are over, the counter goes back to 0.
- A heal that would go over the limit is cut down to what is left; once the limit is reached, those heals do nothing until the 10 seconds are over.

### Heals that count toward the limit
- [Enigma Berry](../items/baya_enigma.html) (30 % when you are hit)
- [Big Root](../items/raiz_grande.html) (½ heart for every 40 damage you deal)
- [Jaw Fossil](../items/d_fosil_mandibula.html)
- [Magma Stone](../items/d_piedra_magma.html)
- [Red Apricorn](../items/m_bonguri_rojo.html)
- [Lunar Shard](../items/cs_luna.html) (every 3 rooms)
- [Clear Bell](../items/campana_clara.html)

### Heals that ignore it
- Hearts and half hearts picked up from the floor.
- The heal you get when you pick up an item that heals (stat items, berries…).
- [Leftovers](../items/restos.html), [Shell Bell](../items/cascabel.html), [Health Feather](../items/d_pluma_vigor.html), [Lemonade](../items/limonada.html), [Energy Powder](../items/polvo_energia.html), [Oran Berry](../items/baya_aranja.html), [Fresh Water](../items/bolsa_suero.html), [Full Restore](../items/restaurar_todo.html).
- Heals from [held items](equipados.html) and from levelling up.
- With [Moomoo Milk](../items/leche_mumu.html), healing beyond your max HP turns into soul health; that follows the same limit as the heal that caused it.

## Invulnerability
- After a hit that hurts you, you can't be hurt again for **about 1.2 seconds** (your Pokémon blinks). [Light Clay](../items/arcilla_ligera.html) makes it longer.
- A hit the [type chart](tabla_tipos.html) reduces to nothing, or that a type passive dodges, gives **0.5 s**.
- A hit an item blocks completely gives **about 0.33 s**.
- These times never add up: a new one only applies if it is longer than what is left.

## See also
- [Soul hearts](corazones_alma.html)
- [Item stacking](acumulacion.html)
