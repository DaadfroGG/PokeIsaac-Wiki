---
title: TM Tri Attack
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
- label: Shots
  value: '3 per kill: fire (burns), electric (lightning) and ice (freezes)'
- label: Damage
  value: 60 % of your damage, homing
- label: Minimum
  value: 1.5 per shot
- label: Range
  value: 420 px
icon: items-ps/tr/normal.png
sprite: true
names:
  es:
    name: MT Triataque
    desc: Cada enemigo que derrotas suelta tres disparos (fuego, eléctrico y hielo) contra los demás
  fr:
    name: CT Triplattaque
    desc: Chaque ennemi vaincu libère trois tirs (Feu, Électrik et Glace) vers les autres
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
Each enemy you defeat releases three shots (fire, electric and ice) at the others

## How it works
- Every enemy you defeat (bosses included) releases three homing shots from where it died, each aimed at one of the three closest enemies left. With fewer enemies, they share targets; with none, they fly off in three directions.
- Each shot deals 60 % of your Damage (at least 1.5) and has its own type, so the [type chart](../mechanics/tabla_tipos.html) uses Fire, Electric or Ice, not your type.
- **Fire**: always burns the enemy it hits (4 s with the [Heat Rock](roca_calor.html), 2 s otherwise).
- **Electric**: always sends lightning to up to 2 other enemies within 180 px, for 60 % of the shot's damage.
- **Ice**: slows the target (30 % chance, +2 % per Luck), or freezes it for 1.8 s if it was already slowed (25 %, +2 % per Luck). Bosses can't be frozen.
- These shots don't carry your other shot effects and don't trigger items that need your own shots, but a kill they make releases three more shots: they can chain through a whole room.

## Stacking
- A second copy does nothing more: still three shots per kill.
