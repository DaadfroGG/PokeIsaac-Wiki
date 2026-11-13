---
title: Vieux Bijou
id: brazalete_antiguo
kind: passive
category: utility
family: core
tier: 1
pools:
- secret
pool_weight: 2
details:
- label: Dégâts
  value: +0,15 par objet porté
- label: Plafond
  value: +3 (à 20 objets)
icon: items-ps/valuable-item/relic-band.png
sprite: true
names:
  en:
    name: Relic Band
    desc: Damage +0.15 for each item you carry (up to +3)
  es:
    name: Brazalete Antiguo
    desc: Daño +0.15 por cada objeto que llevas (hasta +3)
  de:
    name: Alter Reif
    desc: Schaden +0,15 für jedes Item, das du trägst (bis +3)
  it:
    name: Bracciantico
    desc: Danni +0,15 per ogni oggetto che porti (fino a +3)
  pt:
    name: Bracelete Antigo
    desc: Dano +0,15 por item que você leva (até +3)
  ru:
    name: Древний браслет
    desc: Урон +0,15 за каждый твой предмет (до +3)
  ja:
    name: こだいのうでわ
    desc: 持っているどうぐ1個ごとにダメージ+0.15（最大+3）
  ko:
    name: 고대의팔찌
    desc: 지닌 아이템 1개당 대미지 +0.15 (최대 +3)
  zh:
    name: 古代手镯
    desc: 每持有一件道具，伤害+0.15（最多+3）
  zt:
    name: 古代手鐲
    desc: 每攜帶一個道具，傷害+0.15（最多+3）
---
Dégâts +0,15 par objet porté (jusqu'à +3)

## Fonctionnement
- Vous gagnez Dégâts +0,15 pour chaque objet passif porté, Vieux Bijou compris, jusqu'à un maximum de +3 (atteint avec 20 objets).
- Le bonus grandit tout seul à mesure que vous ramassez des objets et diminue si vous en perdez.
- C'est un bonus fixe de Dégâts : il s'ajoute aux Dégâts fixes de vos autres objets, et le total suit les [rendements décroissants](../mechanics/rendimientos.html) (en entier jusqu'à +3, pour moitié jusqu'à +8, un quart jusqu'à +40, puis 5 %).

## Cumul
- L'effet est tout ou rien : un second Vieux Bijou ne donne pas un second +3. Il compte en revanche comme un objet de plus (+0,15) dans le calcul.
