---
title: Rendements décroissants
id: rendimientos
color: '#9a9aae'
labels:
- text: MÉCANIQUE
  color: '#9a9aae'
icon: icons/mechanics/rendimientos.png
details:
- label: Dégâts des objets
  value: Les +3 premiers comptent en entier ; de +3 à +8, à moitié ; de +8 à +40, au quart ; au-delà de +40, à 5 %. Les malus de dégâts comptent toujours en entier
- label: Multiplicateurs de dégâts
  value: 'Tous multipliés entre eux : jusqu''à ×2,3 en entier, seulement un quart de ce qui dépasse, et jamais plus de ×3'
- label: Cadence
  value: Les 3 premiers points de cadence comptent en entier, les 4 suivants à moitié, le reste au quart. Les ralentissements comptent en entier
- label: Chance
  value: Jusqu'à 10 en entier ; au-delà de 10, seulement un quart
- label: Vie max
  value: 12 cœurs (cœurs d'âme à part)
- label: Soins
  value: Au plus 30 % de votre vie max (2 cœurs minimum) toutes les 10 secondes
- label: Minimums
  value: Dégâts 0,5, vitesse 1,6, portée 120, vitesse des tirs 4, au plus 12 tirs par seconde
names:
  en:
    name: Diminishing returns
    desc: 'Items always add up, but the more you stack, the less each one counts: that way the run doesn''t break late on.'
  es:
    name: Rendimientos decrecientes
    desc: 'Los objetos siempre suman, pero cuanto más acumulas, menos cuenta cada uno: así la partida no se rompe al final.'
  de:
    name: Abnehmender Ertrag
    desc: 'Items addieren sich immer, aber je mehr du ansammelst, desto weniger zählt jedes einzelne: So kippt die Partie am Ende nicht.'
  it:
    name: Rendimenti decrescenti
    desc: 'Gli oggetti si sommano sempre, ma più ne accumuli, meno conta ciascuno: così la partita non si sbilancia alla fine.'
  pt:
    name: Retornos decrescentes
    desc: 'Os itens sempre somam, mas quanto mais você acumula, menos cada um conta: assim a partida não quebra no final.'
  ru:
    name: Убывающая отдача
    desc: 'Предметы всегда складываются, но чем больше накопишь, тем меньше значит каждый: так забег не ломается под конец.'
  ja:
    name: 効果の逓減
    desc: どうぐは常に加算されますが、集めるほど1つあたりの効果が減ります：終盤でプレイが壊れないようにするためです。
  ko:
    name: 수확 체감
    desc: '아이템은 언제나 더해지지만 많이 모을수록 하나하나의 효과가 줄어든다: 그래서 후반에도 게임이 깨지지 않는다.'
  zh:
    name: 收益递减
    desc: 道具总会叠加，但积累得越多，每件的效果就越小：这样对局后期就不会失衡。
  zt:
    name: 收益遞減
    desc: 道具總會疊加，但累積得越多，每件的效果就越小：這樣本局後期就不會失衡。
---
Les objets s'additionnent toujours, mais plus vous en cumulez, moins chacun compte : ainsi la partie ne se déséquilibre pas en fin de course.

## Comment vos Dégâts sont calculés
1. On additionne les bonus de dégâts fixes de vos objets (par exemple +0,5, +1…).
2. On applique à ce total les rendements décroissants ci-dessous. Les malus de dégâts sautent cette étape et comptent en entier.
3. On ajoute le résultat aux dégâts de base de votre Pokémon.
4. On multiplie entre eux tous les multiplicateurs de dégâts des objets (×1,5, ×2…), puis on applique le plafond des multiplicateurs ci-dessous.
5. On multiplie l'étape 3 par l'étape 4, puis par le niveau, le shiny et les autres bonus. Les dégâts ne descendent jamais sous 0,5.

## Bonus de dégâts fixes
| Partie du bonus | Compte |
|---|---|
| 0 à +3 | 100 % |
| +3 à +8 | 50 % |
| +8 à +40 | 25 % |
| au-delà de +40 | 5 % |

| Bonus des objets | Ce qui compte | Part qui compte |
|---|---|---|
| +1 | +1 | `████████████████████` 100 % |
| +3 | +3 | `████████████████████` 100 % |
| +5 | +4 | `████████████████░░░░` 80 % |
| +8 | +5,5 | `██████████████░░░░░░` 69 % |
| +10 | +6 | `████████████░░░░░░░░` 60 % |
| +15 | +7,25 | `██████████░░░░░░░░░░` 48 % |
| +20 | +8,5 | `████████░░░░░░░░░░░░` 42 % |
| +30 | +11 | `███████░░░░░░░░░░░░░` 37 % |
| +40 | +13,5 | `███████░░░░░░░░░░░░░` 34 % |
| +50 | +14 | `██████░░░░░░░░░░░░░░` 28 % |

## Multiplicateurs de dégâts
Jusqu'à ×2,3, tout compte ; au-delà, seulement un quart de ce qui dépasse ; le total ne dépasse jamais ×3 (atteint à ×5,1 sur le papier).

| Multiplicateurs × entre eux | Ce qui compte |
|---|---|
| ×1,5 | ×1,5 `████░░░░░░░░░░░░░░░░` |
| ×2 | ×2 `█████░░░░░░░░░░░░░░░` |
| ×2,3 | ×2,3 `██████░░░░░░░░░░░░░░` |
| ×3 | ×2,47 `██████░░░░░░░░░░░░░░` |
| ×4 | ×2,72 `███████░░░░░░░░░░░░░` |
| ×5,1 | ×3 `████████░░░░░░░░░░░░` |
| ×8 | ×3 `████████░░░░░░░░░░░░` |

## Cadence
Les bonus de cadence des objets réduisent le temps entre vos tirs. Les 3 premiers points comptent en entier, les 4 suivants à moitié, le reste au quart. Les ralentissements comptent toujours en entier. Vous ne pouvez jamais tirer plus de 12 fois par seconde.

| Bonus de cadence | Ce qui compte |
|---|---|
| 1 | 1 |
| 3 | 3 |
| 5 | 4 |
| 7 | 5 |
| 10 | 5,75 |
| 15 | 7 |

## Chance
Votre Chance totale (objets, passif de type, shiny…) compte en entier jusqu'à 10 ; au-delà, seulement un quart compte.

| Chance totale | Ce qui compte |
|---|---|
| 5 | 5 |
| 10 | 10 |
| 14 | 11 |
| 20 | 12,5 |
| 30 | 15 |

## Exemple complet
Pikachu, 3,5 de dégâts de base, avec +10 de dégâts d'objets et deux objets ×2 :

1. +10 devient 3 + 2,5 + 0,5 = **6**.
2. 3,5 + 6 = **9,5** (au lieu de 13,5).
3. ×2 × ×2 = ×4 sur le papier, qui devient 2,3 + 0,25 × 1,7 = **×2,725**.
4. 9,5 × 2,725 ≈ **25,9** dégâts, au lieu de 54 sans rendements décroissants.

## Voir aussi
- [Tirs supplémentaires](disparos_extra.html)
- [Effets de statut](estados.html)
- [Cumul des objets](acumulacion.html)
