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
- Les 24 objets dont elle retire une ligne de stat : [Bandeau Choix](cinta_elegida.html), [Bonbon Exp. S](s_caramelo_exp_s.html), [Boulette de Boue](m_bola_arcilla.html), [Boîte Lentilles](m_portalentillas.html), [CT Reflet](mt_doble.html), [Champignons](s_setas.html), [Couronne Galanoa](m_corona_galanuez.html), [Cuillère Tordue](cuchara.html), [Feuille Dorée](m_hoja_oro.html), [Gemme Rouge](w_prisma_rojo.html), [Gros Poireau](m_puerro_grueso.html), [Lait de Coco](s_leche_coco.html), [Lentille Pouvoir](m_lente_recia.html), [Lunettes Choix](gafas_elegidas.html), [Légumes](m_verduras.html), [Miroir Brisé](cu_espejo.html), [Mouchoir Choix](panuelo_elegido.html), [Nœud Destin (Maudit)](cu_nudo.html), [Orbe Toxique](m_toxisfera.html), [Orbe Vie](vidasfera.html), [Poids Pouvoir](d_pesa_recia.html), [Poupée de Chiffon](cu_vudu.html), [Steak Haché](s_hamburguesas.html), [Vive Griffe](garra_rapida.html).
- Peu importe que vous la preniez avant ou après les objets qu'elle corrige.
- Mesuré sur Pikachu (4,3 tirs/s) : la [Boîte Lentilles](m_portalentillas.html) passe de 2,7 à 4,3 tirs/s, la [Lentille Pouvoir](m_lente_recia.html) de 2 à 4,3, l'[Orbe Toxique](m_toxisfera.html) de 2,5 à 4,3, la [Feuille Dorée](m_hoja_oro.html) de 3,3 à 4,3 (et elle récupère sa vitesse des tirs). Avec Boîte Lentilles, Lentille Pouvoir et Feuille Dorée ensemble, 1,4 tir/s devient 4,3 : trois fois les dégâts par seconde. Avec 8 objets de cadence en plus, 2,3 devient 8,9 tirs/s.
- Le ×0,45 de dégâts du [Chantibonbon](m_dulce_nata.html) reste : c'est un multiplicateur, pas une ligne de stat.

## Cumul
- Un deuxième exemplaire ne fait rien de plus.
