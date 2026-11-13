---
title: Pink Nectar
id: m_nectar_rosa
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
- angel
pool_weight: 2
details:
- label: Distance
  value: Enemies within 70 px of you (not bosses)
- label: Chance
  value: About 50 % per second spent that close
- label: Charm
  value: '4 s: the enemy fights on your side'
icon: items-ps/other-item/pink-nectar.png
sprite: true
names:
  es:
    name: Néctar Rosa
    desc: Los enemigos que se te acercan mucho a veces quedan hechizados y pelean de tu lado
  fr:
    name: Nectar Rose
    desc: Les ennemis qui s'approchent très près sont parfois charmés et se battent de votre côté
  de:
    name: Rosa Nektar
    desc: Gegner, die dir sehr nahe kommen, werden manchmal verzaubert und kämpfen auf deiner Seite
  it:
    name: Nettare rosa
    desc: I nemici che si avvicinano molto a volte restano ammaliati e combattono dalla tua parte
  pt:
    name: Néctar Rosa
    desc: Os inimigos que chegam muito perto às vezes ficam enfeitiçados e lutam do seu lado
  ru:
    name: Розовый нектар
    desc: Враги, подошедшие совсем близко, иногда очаровываются и сражаются на твоей стороне
  ja:
    name: うすもものミツ
    desc: 近づきすぎた敵が、ときどき魅了され、味方として戦う
  ko:
    name: 연분홍꿀
    desc: 아주 가까이 온 적이 가끔 헤롱헤롱 상태가 되어 내 편에서 싸운다
  zh:
    name: 桃粉色花蜜
    desc: 靠得很近的敌人有时会着迷，并站在你这边战斗
  zt:
    name: 桃粉色花蜜
    desc: 靠得很近的敵人有時會著迷，並站在你這邊戰鬥
---
Enemies that get very close sometimes become charmed and fight on your side

## How it works
- Any non-boss enemy that gets within 70 px of you has about a 50 % chance per second to become charmed for 4 s (see [status effects](../mechanics/estados.html)).
- A charmed enemy stops attacking you and does not hurt you on contact. It walks to the nearest uncharmed enemy within 600 px and attacks it: every 0.5 s in contact it deals 3 times its own attack damage (at least 2).
- It does not need you to hit anything: staying close is enough. Enemies already charmed are skipped.

## Stacking
- It does not stack: a second copy does not raise the chance.
