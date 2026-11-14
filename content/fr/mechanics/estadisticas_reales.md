---
title: Statistiques en pratique
id: estadisticas_reales
color: '#ffd23c'
labels:
- text: MÉCANIQUE
  color: '#ffd23c'
icon: icons/mechanics/rendimientos.png
details:
- label: Dégâts
  value: Points fixes ajoutés aux dégâts de base
- label: Cadence
  value: 'Chaque point : 1/60 s de moins entre deux tirs ; 12 tirs/s max'
- label: Portée
  value: +50 px pour tout Pokémon, min 120
- label: Santé
  value: +1 cœur = 2 points, 12 cœurs max
names:
  en:
    name: Stats in practice
    desc: 'What the stat numbers on items really are worth: units, a typical Pokémon, limits, and fire rate in shots per second.'
  es:
    name: Estadísticas en la práctica
    desc: 'Lo que valen de verdad los números de estadísticas de los objetos: unidades, un Pokémon típico, límites y cadencia en disparos por segundo.'
  fr:
    name: Statistiques en pratique
    desc: 'Ce que valent vraiment les nombres de statistiques des objets : unités, Pokémon typique, limites et cadence en tirs par seconde.'
  de:
    name: Werte in der Praxis
    desc: 'Was die Stat-Zahlen auf Items wirklich wert sind: Einheiten, ein typisches Pokémon, Grenzen und Feuerrate in Schuss pro Sekunde.'
  it:
    name: Statistiche in pratica
    desc: 'Quanto valgono davvero i numeri delle statistiche degli oggetti: unità, un Pokémon tipico, limiti e cadenza in colpi al secondo.'
  pt:
    name: Estatísticas na prática
    desc: 'O que os números de estatísticas dos itens realmente valem: unidades, um Pokémon típico, limites e cadência em tiros por segundo.'
  ru:
    name: Характеристики на практике
    desc: 'Чего на самом деле стоят числа характеристик на предметах: единицы, типичный покемон, пределы и скорострельность в выстрелах в секунду.'
  ja:
    name: ステータスの実際の効果
    desc: どうぐのステータス数値が実際にどれほどの効果か：単位、標準的なポケモン、上限、秒あたりの連射数。
  ko:
    name: 능력치의 실제 효과
    desc: '아이템 능력치 숫자가 실제로 어느 정도인지: 단위, 평균적인 포켓몬, 한계, 초당 발사 수.'
  zh:
    name: 属性的实际效果
    desc: 道具上的属性数字实际值多少：单位、典型宝可梦、上限，以及每秒射击数。
  zt:
    name: 屬性的實際效果
    desc: 道具上的屬性數字實際值多少：單位、典型寶可夢、上限，以及每秒射擊數。
---
Les pages d'objets donnent des nombres bruts (« Cadence +2 », « Portée +160 px »). Cette page dit ce que ces nombres valent en pratique : l'unité de chaque statistique, ce qu'un Pokémon typique a au départ, les limites, et ce que changent vraiment les premières copies. Chaque page d'objet de statistiques se termine par une ligne « Effet réel » basée sur le Pokémon typique ci-dessous.

## Le Pokémon typique
Dans le roster, la moitié des Pokémon sont autour de ces valeurs (les pages Pokémon montrent les leurs) :

| Stat | Typique | Écart dans le roster |
|---|---|---|
| Dégâts | 4 | 2,7 à 7,2 |
| Cadence | 4,3 tirs/s | 3,3 à 7,5 |
| Vitesse | 4 | 3,2 à 5,1 |
| Portée | 350 px (300 affiché + 50, voir plus bas) | 279 à 469 px |
| Vitesse des tirs | 9 | 8 à 10 |
| Santé | 4 cœurs (8 points) | ½ à 8 cœurs |
| Chance | 0 | 0 à 3 |

## Ce que veut dire chaque nombre
| Stat | Ce que l'objet ajoute | Limites | Rendements décroissants |
|---|---|---|---|
| **Dégâts** | Des points fixes ajoutés à vos dégâts de base ([Protéine](../items/proteina.html) +0,5 sur 4 dégâts = 4,5) | Jamais sous 0,5 | Les bonus fixes comptent en entier jusqu'à +3 au total, puis moitié, puis moins. Les malus comptent en entier. Voir [Rendements décroissants](rendimientos.html) |
| **Cadence** | Le temps entre deux tirs : chaque point vaut 1/60 s (environ 0,017 s) de moins (+2 = 0,033 s de moins) | Jamais plus de 12 tirs/s | 3 premiers points en entier, 4 suivants à moitié, le reste au quart. Les ralentissements comptent en entier |
| **Vitesse** | S'ajoute directement à votre vitesse de déplacement | Jamais sous 1,6 | Aucun |
| **Portée** | Les pixels que parcourent vos tirs avant de disparaître. Tout Pokémon reçoit +50 px en plus de la portée affichée sur sa page | Jamais sous 120 px | Aucun |
| **Vitesse des tirs** | S'ajoute directement à la vitesse de vol de vos tirs | Jamais sous 4 | Aucun |
| **PV max** | Les objets parlent de cœurs ; le jeu compte des demi-cœurs (+1 cœur = +2 points) | Entre 1 et 12 cœurs | Aucun, mais 12 cœurs est le plafond |
| **Chance** | S'ajoute à votre Chance | | En entier jusqu'à 10, au quart au-delà |

## Ce que fait vraiment un bonus de cadence
Tirs par seconde = 60 ÷ (ticks entre deux tirs − bonus compté). Comme le délai diminue, chaque nouveau point aide plus que le précédent en tirs par seconde, mais les rendements décroissants freinent le total.

| Tirs/s du Pokémon | +1 | +2 | +3 | +5 | +7 | +10 | +15 |
|---|---|---|---|---|---|---|---|
| 3,5 | 3,8 | 4 | 4,3 | 4,6 | 5 | 5,3 | 6 |
| 4,3 | 4,6 | 5 | 5,5 | 6 | 6,7 | 7,3 | 8,6 |
| 5 | 5,5 | 6 | 6,7 | 7,5 | 8,6 | 9,6 | 12 |
| 6 | 6,7 | 7,5 | 8,6 | 10 | 12 | 12 | 12 |

Les colonnes sont le bonus de cadence total venant des objets (les rendements décroissants sont déjà appliqués dans le tableau). Un malus de cadence (objets marqués « Cadence − ») ajoute ses points en délai : +4 de délai sur un Pokémon à 4,3 tirs/s donne 3,3 tirs/s.

## Exemple
Un Pokémon à 4 dégâts et 4,3 tirs/s ramasse une [Protéine](../items/proteina.html) (Dégâts +0,5), un [Calcium](../items/calcio.html) (Cadence +2) et un [Zinc](../items/zinc.html) (Dégâts +0,4, Cadence +1,2) :
- Dégâts : 4 + 0,5 + 0,4 = **4,9** (+23 %).
- Cadence : 2 + 1,2 = 3,2 points. 3 comptent en entier et 0,2 à moitié : 3,1. Le délai passe de 14 à 10,9 ticks : **5,5 tirs/s** (+28 %).

## Ce qui change aussi les nombres
- **Le niveau** (Classique et Ligue) : un Pokémon gagne dégâts, cadence et vitesse avec son niveau, voir [Niveaux des Pokémon](niveles_pokemon.html).
- **Chromatique** : de petits bonus, voir [Avantage des chromatiques](shinys_ventaja.html).
- **Passifs de type** : par exemple cadence et vitesse du type Insecte, vitesse du type Vol, Chance du type Normal, voir les pages de types.
- **Les multiplicateurs d'objets** sur les dégâts ou la cadence (comme ×1,5 de dégâts) s'appliquent après les bonus fixes et ont leur propre plafond, voir [Rendements décroissants](rendimientos.html).
- Les bonus d'[évolution](niveles_pokemon.html) comptent comme des bonus d'objets (donc soumis aux rendements décroissants).
- Les effets temporaires (actifs, salles, statuts) s'ajoutent à tout cela.

Voir aussi : [Rendements décroissants](rendimientos.html), [Cumul des objets](acumulacion.html).
