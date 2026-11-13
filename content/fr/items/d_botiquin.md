---
title: Trousse de Soins
id: d_botiquin
kind: passive
category: defense
family: defense
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Déclencheur
  value: Chaque coup qui vous blesse
- label: Charge
  value: +1 salle de charge
icon: items-ps/storage/medicine-pocket.png
sprite: true
names:
  en:
    name: Medicine Pocket
    desc: Every hit you take charges your active item
  es:
    name: Botiquín
    desc: Cada golpe que recibes carga tu objeto activo
  de:
    name: Medizintasche
    desc: Jeder Treffer, den du einsteckst, lädt dein aktives Item auf
  it:
    name: Tasca rimedi
    desc: Ogni colpo che subisci carica il tuo oggetto attivo
  pt:
    name: Bolso de Remédios
    desc: Cada golpe que você recebe carrega seu item ativo
  ru:
    name: Аптечка
    desc: Каждый полученный удар заряжает твой активный предмет
  ja:
    name: かいふくポケット
    desc: 被弾するたびにアクティブのどうぐがチャージされる
  ko:
    name: 회복포켓
    desc: 피해를 받을 때마다 액티브 아이템이 충전된다
  zh:
    name: 回复口袋
    desc: 每受到一次攻击，你的主动道具就会充能
  zt:
    name: 回復口袋
    desc: 每次受到攻擊都會為主動道具充能
---
Chaque coup reçu charge votre objet actif

## Fonctionnement
- Chaque coup qui vous blesse ajoute 1 charge à votre objet actif, comme terminer une salle.
- Il ne fait rien si vous n'avez pas d'objet actif ou s'il est déjà complètement chargé.
- Les coups bloqués ou esquivés ne comptent pas, mais un coup absorbé par un cœur d'âme compte.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien.
