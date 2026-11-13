---
title: Herbe Blanche
id: hierba_blanca
kind: passive
category: utility
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Effet
  value: Annule les baisses de stats de vos objets
- label: Portée
  value: Ceux que vous portez et ceux que vous prendrez
- label: Stats
  value: Dégâts, Cadence, Vitesse, Portée, Vitesse des tirs, Chance, PV max
- label: PV max
  value: Les rend aussi (jusqu'au plafond de 12 cœurs)
icon: items-ps/hold-item/white-herb.png
sprite: true
names:
  en:
    name: White Herb
    desc: Stats lowered by your items stop being lowered (also for the ones you already carry)
  es:
    name: Hierba Blanca
    desc: Las estadísticas que te bajan los objetos dejan de bajar (también las de los que ya llevas)
  de:
    name: Schlohkraut
    desc: Werte, die dir Items senken, werden nicht mehr gesenkt (auch bei denen, die du schon trägst)
  it:
    name: Erbachiara
    desc: Le statistiche abbassate dagli oggetti smettono di calare (anche quelle degli oggetti che già porti)
  pt:
    name: Erva Branca
    desc: As estatísticas que seus itens reduzem deixam de ser reduzidas (inclusive as dos que você já leva)
  ru:
    name: Белая трава
    desc: Характеристики, которые снижают твои предметы, больше не снижаются (и у тех, что уже есть)
  ja:
    name: しろいハーブ
    desc: どうぐによるステータスの低下がなくなる（すでに持っているどうぐの分も）
  ko:
    name: 하양허브
    desc: 아이템으로 내려가는 능력치가 더는 내려가지 않는다(이미 가진 아이템도 포함)
  zh:
    name: 白色香草
    desc: 道具带来的数据降低不再生效（已携带的道具也包括在内）
  zt:
    name: 白色香草
    desc: 道具造成的能力下降不再生效（已攜帶的道具也包括在內）
---
Les statistiques réduites par vos objets ne baissent plus (y compris pour ceux que vous portez déjà)

## Fonctionnement
- Quand vous la prenez, elle passe sur tous les objets que vous portez déjà et retire chaque **ligne de stat négative** : Dégâts en moins, Vitesse en moins, Portée en moins, Vitesse des tirs en moins, Chance en moins, cœurs en moins et Cadence plus lente. Les bonnes lignes de ces objets restent.
- À partir de là, chaque objet que vous prenez arrive sans ses lignes de stats négatives.
- Les cœurs de PV max perdus reviennent (jamais au-dessus du plafond de 12 cœurs), mais ils reviennent vides.
- Elle ne touche que les lignes de stats affichées sur la fiche de l'objet. Les multiplicateurs de dégâts sous ×1 et les autres défauts qui font partie de l'effet d'un objet restent.
- Si vous perdez plus tard un objet, l'herbe est prise en compte : vous ne perdez pas une baisse qui n'a jamais été appliquée.

## Cumul
- Un deuxième exemplaire ne fait rien de plus.
