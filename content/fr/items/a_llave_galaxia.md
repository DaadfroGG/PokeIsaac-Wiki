---
title: Clé Galaxie
id: a_llave_galaxia
kind: active
family: ability
tier: 2
pools:
- treasure
- secret
pool_weight: 2
charge: 4
details:
- label: Destination
  value: La salle secrète, sinon la salle au trésor
- label: Pas pendant
  value: Un combat de boss ou d'arène
icon: items-ps/key-item/galactic-key.png
sprite: true
names:
  en:
    name: Galactic Key
    desc: Takes you to the floor's secret room (or, if there isn't one, the treasure room)
  es:
    name: Llave Galaxia
    desc: Te lleva a la sala secreta de la planta (o, si no hay, al tesoro)
  de:
    name: G-Schlüssel
    desc: Bringt dich in den Geheimraum der Etage (oder, falls es keinen gibt, in den Schatzraum)
  it:
    name: Galachiave
    desc: Ti porta alla stanza segreta del piano (o, se non c'è, a quella del tesoro)
  pt:
    name: Chave Galáctica
    desc: Leva você à sala secreta do andar (ou, se não houver, à do tesouro)
  ru:
    name: Ключ Галактики
    desc: Переносит в тайную комнату этажа (или, если ее нет, в сокровищницу)
  ja:
    name: ギンガだんのカギ
    desc: その階の隠し部屋へ移動（なければ宝の部屋へ）
  ko:
    name: 갤럭시단의열쇠
    desc: 층의 비밀의 방으로 이동한다 (없으면 보물방)
  zh:
    name: 银河队钥匙
    desc: 前往本层的密室（若没有，则前往宝藏房）
  zt:
    name: 銀河隊鑰匙
    desc: 帶你前往本層的祕密房間（沒有的話則前往寶物房間）
---
Vous emmène à la salle secrète de l'étage (ou, à défaut, à la salle au trésor)

## Fonctionnement
- Vous êtes envoyé directement dans la salle secrète de l'étage, qui apparaît sur votre carte. S'il n'y en a pas, vous allez dans la salle au trésor.
- Les salles super secrètes ne sont jamais choisies.
- Il ne marche pas tant qu'un boss est en vie dans la salle ni pendant un combat d'arène ; vous gardez la charge. Si vous êtes déjà dans la salle secrète, il vous envoie dans la salle au trésor.
- Il ne fonctionne pas dans l'arène finale d'un [Combat de Dresseurs](../mechanics/batalla.html).

## Cumul
- Les objets actifs ne se cumulent pas : vous n'en portez qu'un à la fois. En ramasser un autre les échange, et l'ancien reste sur le piédestal avec sa charge.
- Avec le [Plongeur Devon](d_bombona_devon.html) : rien de plus : vous ne voyagez qu'une fois.
