---
title: Plume Santé
id: d_pluma_vigor
kind: passive
category: defense
family: defense
tier: 2
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Soin
  value: ½ cœur toutes les 25 s de combat
- label: Compteur
  value: Ne compte que lorsque des ennemis sont en vie dans la salle
icon: items-ps/medicine/health-wing.png
sprite: true
names:
  en:
    name: Health Feather
    desc: Every 25 seconds of combat you recover half a heart
  es:
    name: Pluma Vigor
    desc: Cada 25 segundos de combate recuperas medio corazón
  de:
    name: Heilfeder
    desc: Alle 25 Sekunden im Kampf erholst du ein halbes Herz
  it:
    name: Piumsalute
    desc: Ogni 25 secondi di combattimento recuperi mezzo cuore
  pt:
    name: Pluma do Vigor
    desc: A cada 25 segundos de combate, você recupera meio coração
  ru:
    name: Перо здоровья
    desc: Каждые 25 секунд боя восстанавливаешь полсердца
  ja:
    name: たいりょくのハネ
    desc: 戦闘25秒ごとに半分のハートを回復
  ko:
    name: 체력깃털
    desc: 전투 25초마다 하트 반 칸을 회복한다
  zh:
    name: 体力之羽
    desc: 战斗中每25秒恢复半颗心
  zt:
    name: 體力之羽
    desc: 戰鬥中每25秒回復半顆愛心
---
Toutes les 25 secondes de combat, vous récupérez un demi-cœur

## Fonctionnement
- Un minuteur ne tourne que tant qu'il reste des ennemis dans la salle. Au bout de 25 secondes, vous récupérez un demi-cœur.
- Le minuteur repart ensuite, même si vous étiez déjà à PV pleins (aucun cœur n'est alors donné).
- Il ignore la limite de soin des objets.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien.
