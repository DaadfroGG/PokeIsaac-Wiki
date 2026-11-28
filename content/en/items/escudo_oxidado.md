---
title: Rusted Shield
id: escudo_oxidado
kind: passive
category: shot
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Collision
  value: Your shot and the enemy shot are both destroyed
- label: Spectral shots
  value: Keep going
icon: items-ps/hold-item/rusted-shield.png
sprite: true
names:
  es:
    name: Escudo Oxidado
    desc: Tus disparos chocan contra los disparos enemigos y los deshacen
  fr:
    name: Bouclier Rouillé
    desc: Vos tirs percutent les tirs ennemis et les détruisent
  de:
    name: Rostiger Schild
    desc: Deine Schüsse prallen auf gegnerische Schüsse und zerstören sie
  it:
    name: Scudo rovinato
    desc: I tuoi tiri si scontrano con i tiri nemici e li annullano
  pt:
    name: Escudo Enferrujado
    desc: Seus tiros colidem com os tiros inimigos e os desfazem
  ru:
    name: Ржавый щит
    desc: Твои выстрелы сталкиваются с вражескими и уничтожают их
  ja:
    name: くちたたて
    desc: ショットが敵のショットとぶつかって打ち消す
  ko:
    name: 녹슨방패
    desc: 탄이 적의 탄과 부딪쳐 없앤다
  zh:
    name: 腐朽的盾
    desc: 你的弹会与敌人的弹相撞并将其抵消
  zt:
    name: 腐朽的盾
    desc: 你的彈會撞上敵人的彈並將其抵消
---
Your shots collide with enemy shots and destroy them

## How it works

- When one of your shots touches an enemy shot, the enemy shot is destroyed.
- Your shot is destroyed too, unless it is a spectral shot (it then keeps flying).
- Each of your shots can only cancel one enemy shot.
- Measured against 12 bosses (floors 4 to 25, 1 minute each, 12 hearts, standing still and shooting): −28 % damage taken (33.9 hearts per minute without it, 24.3 with it), from boss shots cancelled by yours. The more shots you have on screen, the more it cancels: with a full volley at 12 shots/s (about 40 of your shots on screen) it was −50 %, with 6 Dittos as well (about 120, up to the 450 cap) −54 %. It doesn't need the cap: most of the gain comes from the first few dozen shots.
- Against a [Mirror](../mechanics/afijo_espejo.html) boss it is the counter: with 6 Dittos, damage taken went from 69.8 to 19.3 hearts per minute (−72 %), the same as against a normal boss. Deep in the run a few returned shots get through (10 hearts per minute at floor 50 standing still, 3 to 5 while moving around the boss).
- At floors 100 to 200, moving around the boss with 6 Dittos: −34 % to −69 %.

## Stacking

- A second copy changes nothing.
