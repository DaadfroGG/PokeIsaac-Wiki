---
title: Fame Checker
id: w_memorin
kind: passive
category: weapon
family: weapon
tier: 3
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Marks
  value: Up to 4 enemies, 5 s each (refreshed by new hits), from your hits
- label: Links
  value: 'Every 0.2 s: ×0.17 Damage from you to the 1st mark, ×0.26 between marks, to everything touching the line'
- label: Link range
  value: Chain breaks beyond 300 px
- label: Balance
  value: ×0.62 on links
- label: Bonus bolt
  value: ×0.4 Damage to another enemy within 170 px, at most every 0.13 s
- label: Module
  value: Works with any weapon
icon: items-ps/key-item/fame-checker.png
sprite: true
names:
  es:
    name: Memorín
    desc: Tus golpes marcan enemigos (hasta 4, 5 s) y las marcas se unen con enlaces desde tu Pokémon que hieren a todo el que los toque
  fr:
    name: Memorydex
    desc: Vos coups marquent les ennemis (jusqu'à 4, 5 s) et les marques sont reliées à votre Pokémon par des liens qui blessent tout ce qui les touche
  de:
    name: Ruhmesdatei
    desc: Deine Treffer markieren Gegner (bis zu 4, 5 s) und die Markierungen werden über Verbindungen von deinem Pokémon aus verknüpft, die jeden verletzen, der sie berührt
  it:
    name: PokéVIP
    desc: I tuoi colpi marcano i nemici (fino a 4, 5 s) e i segni si uniscono con legami dal tuo Pokémon che feriscono chiunque li tocchi
  pt:
    name: Fame Checker
    desc: Seus golpes marcam inimigos (até 4, 5 s) e as marcas se unem por elos a partir do seu Pokémon que ferem quem os tocar
  ru:
    name: Справочник славы
    desc: Твои удары отмечают врагов (до 4, на 5 с), и метки соединяются с твоим покемоном связями, которые ранят всех, кто их коснется
  ja:
    name: ボイスチェッカー
    desc: 攻撃が敵に印をつけ（最大4体、5秒）、印どうしがポケモンからのリンクでつながって、触れたものにダメージを与える
  ko:
    name: 명성체커
    desc: 공격이 적에게 표식을 남기고(최대 4마리, 5초), 표식은 내 포켓몬에서 이어진 연결선으로 묶여 닿는 모든 것에 피해를 준다
  zh:
    name: 备忘录
    desc: 你的攻击会标记敌人（最多4个，持续5秒），标记会与你的宝可梦连成链接，伤害触碰到链接的一切
  zt:
    name: 名人錄
    desc: 你的攻擊會標記敵人（最多4個，持續5秒），標記之間會以來自你寶可夢的連線相連，傷害碰到連線的所有東西
---
Your hits mark enemies (up to 4, 5 s) and the marks are joined by links from your Pokémon that hurt anything that touches them

## How it works
- It is a **module**: it works with any weapon and does not replace it.
- Each hit of your normal shots and weapons (at most once per delay between shots) marks the enemy hit for 5 s; hitting a marked enemy refreshes it. You can have 4 marks: a 5th removes the oldest. Marks vanish when the enemy dies or you leave the room.
- Every 0.2 s a link runs from your Pokémon to the first mark, then from mark to mark in the order they were applied. The link from you deals ×0.17 of your Damage and the links between marks ×0.26, to every enemy touching the line (5 px wide). All is multiplied by a ×0.62 balance factor. If a mark is more than 300 px from the previous point the chain breaks there (no damage on that link).
- On each of your hits, a bolt also jumps to another enemy within 170 px for ×0.4 of your Damage (at most once every 0.13 s).

## Stacking
- A second copy does nothing more.

{{< clip >}}
