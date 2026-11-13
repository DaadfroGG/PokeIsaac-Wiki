---
title: CT Triplattaque
id: mt_triataque
kind: passive
category: shot
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 1
details:
- label: Tirs
  value: '3 par ennemi vaincu : feu (brûle), électrique (éclair) et glace (gèle)'
- label: Dégâts
  value: 60 % de vos dégâts, tête chercheuse
- label: Minimum
  value: 1,5 par tir
- label: Portée
  value: 420 px
icon: items-ps/tr/normal.png
sprite: true
names:
  en:
    name: TM Tri Attack
    desc: Each enemy you defeat releases three shots (fire, electric and ice) at the others
  es:
    name: MT Triataque
    desc: Cada enemigo que derrotas suelta tres disparos (fuego, eléctrico y hielo) contra los demás
  de:
    name: TM Triplette
    desc: Jeder besiegte Gegner lässt drei Schüsse (Feuer, Elektro und Eis) auf die anderen los
  it:
    name: MT Tripletta
    desc: Ogni nemico che sconfiggi lancia tre tiri (Fuoco, Elettro e Ghiaccio) contro gli altri
  pt:
    name: MT Triplo Ataque
    desc: Cada inimigo derrotado solta três tiros (fogo, elétrico e gelo) contra os outros
  ru:
    name: ТМ Тройная атака
    desc: Каждый побежденный враг выпускает три выстрела (огонь, электро и лед) по остальным
  ja:
    name: わざマシン・トライアタック
    desc: 敵を倒すたびに、他の敵に向けて3発のショット（ほのお・でんき・こおり）を放つ
  ko:
    name: 기술머신 트라이어택
    desc: 쓰러뜨린 적마다 나머지 적에게 탄 3발(불꽃, 전기, 얼음)을 쏜다
  zh:
    name: 招式机器 三重攻击
    desc: 每击败一个敌人，会向其余敌人射出三发弹（火、电、冰）
  zt:
    name: 招式學習器 三重攻擊
    desc: 每擊倒一個敵人，就會朝其他敵人射出三發子彈（火、電、冰）
---
Chaque ennemi vaincu libère trois tirs (Feu, Électrik et Glace) vers les autres

## Fonctionnement
- Chaque ennemi que vous battez (boss compris) lâche trois tirs à tête chercheuse depuis l'endroit où il meurt, chacun visant l'un des trois ennemis restants les plus proches. S'il y a moins d'ennemis, ils se partagent les cibles ; s'il n'y en a plus, ils partent dans trois directions.
- Chaque tir inflige 60 % de vos Dégâts (au moins 1,5) et a son propre type : la [table des types](../mechanics/tabla_tipos.html) utilise Feu, Électrik ou Glace, pas votre type.
- **Feu** : brûle toujours l'ennemi touché (4 s avec la [Roche Chaude](roca_calor.html), 2 s sinon).
- **Électrik** : envoie toujours un éclair à 2 autres ennemis au plus dans un rayon de 180 px, pour 60 % des dégâts du tir.
- **Glace** : ralentit la cible (30 % de chances, +2 % par point de Chance), ou la gèle 1,8 s si elle était déjà ralentie (25 %, +2 % par point de Chance). Les boss ne peuvent pas être gelés.
- Ces tirs n'ont pas vos autres effets de tir et ne déclenchent pas les objets qui demandent vos propres tirs, mais un ennemi qu'ils achèvent lâche trois nouveaux tirs : ils peuvent enchaîner toute une salle.

## Cumul
- Un deuxième exemplaire n'apporte rien de plus : toujours trois tirs par ennemi vaincu.
