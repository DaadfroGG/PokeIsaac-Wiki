---
title: Eject Button
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
- label: Trigger
  value: Each hit that hurts you
- label: Destination
  value: The spot farthest from enemies
- label: Condition
  value: At least one enemy alive
icon: items-ps/hold-item/eject-button.png
sprite: true
names:
  es:
    name: Botón Escape
    desc: Al recibir un golpe, te teletransportas lejos de los enemigos
  fr:
    name: Bouton Fuite
    desc: Quand vous êtes touché, vous vous téléportez loin des ennemis
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
When you get hit, you teleport away from enemies

## How it works
- After you take a hit, you teleport to the free spot of the room that is farthest from all living enemies. Spots on hazards (puddles, acid, lava...) and rocks are skipped.
- You keep the usual invulnerability after the hit while you teleport.
- It does nothing if the hit killed you or if no enemy is left in the room.
- It has no cooldown: it triggers on every hit.

## Stacking
- It does not stack: a second copy adds nothing.
