---
title: Guérison
id: restaurar_todo
kind: active
family: core
tier: 2
pools:
- treasure
- shop
pool_weight: 2
charge: 10
details:
- label: Charge
  value: 10 salles
- label: Soin
  value: Tous vos PV
- label: PV pleins
  value: Inutilisable
icon: items-ps/medicine/full-restore.png
sprite: true
names:
  en:
    name: Full Restore
    desc: Fully restores your health
  es:
    name: Restaurar Todo
    desc: Te cura toda la vida
  de:
    name: Top-Genesung
    desc: Stellt dein ganzes Leben wieder her
  it:
    name: Ricarica totale
    desc: Ti ripristina tutta la vita
  pt:
    name: Restaurar Tudo
    desc: Restaura toda a sua vida
  ru:
    name: Полное восстановление
    desc: Восстанавливает все здоровье
  ja:
    name: かいふくのくすり
    desc: HPを全回復する
  ko:
    name: 회복약
    desc: 체력을 모두 회복한다
  zh:
    name: 全复药
    desc: 为你恢复全部生命
  zt:
    name: 全復藥
    desc: 完全恢復你的生命
---
Restaure toute votre vie

## Fonctionnement
- Charge : 10 salles. Chaque salle terminée donne 1 charge, une charge complète demande donc 10 salles terminées.
- Rend d'un coup tous vos cœurs rouges. La limite de soin des objets ne s'y applique pas.
- Il est inutilisable quand vos PV sont déjà pleins, et aucune charge n'est alors dépensée. Les cœurs d'âme ne comptent pas comme des PV ici.

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec une [Pile Cellulaire](d_pila.html), l'objet peut stocker le double de charge.
