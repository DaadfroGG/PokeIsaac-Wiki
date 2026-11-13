---
title: Bouton Fuite
id: boton_escape
kind: passive
category: defense
family: core
tier: 1
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Déclencheur
  value: Chaque coup qui vous blesse
- label: Destination
  value: L'endroit le plus éloigné des ennemis
- label: Condition
  value: Au moins un ennemi en vie
icon: items-ps/hold-item/eject-button.png
sprite: true
names:
  en:
    name: Eject Button
    desc: When you get hit, you teleport away from enemies
  es:
    name: Botón Escape
    desc: Al recibir un golpe, te teletransportas lejos de los enemigos
  de:
    name: Fluchtknopf
    desc: Wirst du getroffen, teleportierst du dich weg von den Gegnern
  it:
    name: Pulsantefuga
    desc: Quando vieni colpito, ti teletrasporti lontano dai nemici
  pt:
    name: Botão de Ejeção
    desc: Ao receber um golpe, você se teletransporta para longe dos inimigos
  ru:
    name: Кнопка выброса
    desc: Получая удар, ты телепортируешься подальше от врагов
  ja:
    name: だっしゅつボタン
    desc: 被弾すると、敵から離れた場所へテレポートする
  ko:
    name: 탈출버튼
    desc: 맞으면 적에게서 멀리 순간이동한다
  zh:
    name: 逃脱按键
    desc: 受到攻击时，会瞬间移动到远离敌人的地方
  zt:
    name: 逃脫按鍵
    desc: 受到攻擊時，會瞬間移動到遠離敵人的地方
---
Quand vous êtes touché, vous vous téléportez loin des ennemis

## Fonctionnement
- Après un coup reçu, vous vous téléportez à l'endroit libre de la salle le plus éloigné de tous les ennemis vivants. Les endroits sur un piège (flaque, acide, lave...) et les rochers sont ignorés.
- Vous gardez l'invulnérabilité habituelle après le coup pendant la téléportation.
- Il ne fait rien si le coup vous a tué ou s'il ne reste plus d'ennemi dans la salle.
- Il n'a pas de délai de recharge : il se déclenche à chaque coup.

## Cumul
- Elle ne se cumule pas : un second exemplaire n'ajoute rien.
