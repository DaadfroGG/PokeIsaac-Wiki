---
title: Memorydex
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
- label: Marques
  value: Jusqu'à 4 ennemis, 5 s chacune (relancées par de nouveaux coups), avec vos coups
- label: Liens
  value: 'Toutes les 0,2 s : ×0,17 Dégâts de vous à la 1re marque, ×0,26 entre marques, à tout ce qui touche la ligne'
- label: Portée des liens
  value: La chaîne se coupe au-delà de 300 px
- label: Équilibrage
  value: ×0,62 sur les liens
- label: Éclair bonus
  value: ×0,4 Dégâts sur un autre ennemi à moins de 170 px, au plus toutes les 0,13 s
- label: Module
  value: Marche avec toute arme
icon: items-ps/key-item/fame-checker.png
sprite: true
names:
  en:
    name: Fame Checker
    desc: Your hits mark enemies (up to 4, 5 s) and the marks are joined by links from your Pokémon that hurt anything that touches them
  es:
    name: Memorín
    desc: Tus golpes marcan enemigos (hasta 4, 5 s) y las marcas se unen con enlaces desde tu Pokémon que hieren a todo el que los toque
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
Vos coups marquent les ennemis (jusqu'à 4, 5 s) et les marques sont reliées à votre Pokémon par des liens qui blessent tout ce qui les touche

## Fonctionnement
- C'est un **module** : il marche avec toute arme et ne la remplace pas.
- Chaque coup de vos tirs normaux et armes (au plus une fois par délai entre deux tirs) marque l'ennemi touché pendant 5 s ; toucher un ennemi marqué relance la marque. Vous pouvez avoir 4 marques : une 5e supprime la plus ancienne. Les marques disparaissent à la mort de l'ennemi ou en quittant la salle.
- Toutes les 0,2 s, un lien relie votre Pokémon à la première marque, puis de marque en marque dans l'ordre où elles ont été posées. Le lien depuis vous inflige ×0,17 de vos Dégâts et les liens entre marques ×0,26, à chaque ennemi qui touche la ligne (5 px de large). Le tout est multiplié par un facteur d'équilibrage ×0,62. Si une marque est à plus de 300 px du point précédent, la chaîne se coupe là (pas de dégâts sur ce lien).
- À chacun de vos coups, un éclair saute aussi vers un autre ennemi à moins de 170 px pour ×0,4 de vos Dégâts (au plus toutes les 0,13 s).

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
