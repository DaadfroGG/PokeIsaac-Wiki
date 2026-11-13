---
title: Casteliacone
id: w_porcehelado
kind: passive
category: weapon
family: weapon
tier: 2
pools:
- treasure
- shop
pool_weight: 2
details:
- label: Charge
  value: 2.5 × your delay between shots, 0.33 to 1.4 s, fired with the shoot keys (min 8 % to release)
- label: Shadow Ball
  value: ×0.4 to ×1.25 Damage, bigger with charge
- label: Fragments
  value: 4 to 12, each 15 % of the ball's damage; half seek enemies within 260 px
- label: Cooldown
  value: Half your delay (at least 0.1 s)
- label: Module
  value: Works with any weapon
- label: With another weapon
  value: 'Every 3rd weapon attack: small Shadow Ball (×0.9, 5 fragments)'
icon: items-ps/medicine/casteliacone.png
sprite: true
names:
  es:
    name: Porcehelado
    desc: Mantén el disparo para cargar una Bola Sombra que, al impactar, se rompe en fragmentos que buscan enemigos. Con otra arma, cada 3.er ataque lanza una pequeña
  fr:
    name: Glace Volute
    desc: Maintenez le tir pour charger une Ball'Ombre qui, à l'impact, se brise en fragments qui traquent les ennemis. Avec une autre arme, une petite part toutes les 3 attaques
  de:
    name: Stratos-Eis
    desc: Halte die Schusstaste gedrückt, um einen Spukball aufzuladen, der beim Aufprall in Splitter zerfällt, die Gegner suchen. Mit einer anderen Waffe wirft jeder 3. Angriff einen kleinen
  it:
    name: Conostropoli
    desc: Tieni premuto il tiro per caricare una Palla Ombra che, all'impatto, si spezza in frammenti che cercano i nemici. Con un'altra arma, ogni 3° attacco ne lancia una piccola
  pt:
    name: Casteliacone
    desc: Segure o tiro para carregar uma Bola Sombria que, ao acertar, se parte em fragmentos que buscam inimigos. Com outra arma, a cada 3º ataque lança uma pequena
  ru:
    name: Кастелиакон
    desc: Зажми выстрел, чтобы зарядить Теневой шар, который при попадании разлетается на осколки, ищущие врагов. С другим оружием каждая 3-я атака бросает маленький
  ja:
    name: ヒウンアイス
    desc: ショットを長押ししてシャドーボールをチャージ。命中すると敵を追う破片に砕けます。ほかの武器が主体のときは、3回攻撃するごとに小さなものを放ちます
  ko:
    name: 구름아이스
    desc: 공격을 길게 눌러 섀도볼을 모으면, 명중할 때 적을 쫓는 파편으로 부서진다. 다른 무기를 쓸 때는 3번째 공격마다 작은 섀도볼을 던진다
  zh:
    name: 飞云冰淇淋
    desc: 按住射击键蓄力暗影球，命中后会碎成追踪敌人的碎片。搭配其他武器时，每第3次攻击会发射一个小号暗影球
  zt:
    name: 飛雲冰淇淋
    desc: 按住射擊鍵蓄力暗影球，命中後會碎成追蹤敵人的碎片。搭配其他武器時，每第3次攻擊會發射一顆小型暗影球
---
Hold fire to charge a Shadow Ball that breaks into fragments seeking enemies when it hits. With another weapon, every 3rd attack throws a small one

## How it works
- It is a **module**: it works with any weapon and does not replace it. Your normal shooting is replaced: hold the shoot keys to charge, release to fire. It needs at least 8 % charge, and a full charge takes 2.5 × your delay between shots (0.33 s to 1.4 s).
- The release is a normal volley (multishot applies, up to 9 balls), but each ball deals ×0.4 to ×1.25 of its normal damage and gets bigger the more you charged. After a release you can charge again after half your delay between shots (at least 0.1 s).
- When a ball hits an enemy or ends (range, wall) it bursts into 4 to 12 fragments (by charge). Each fragment deals 15 % of the ball's damage (at least 0.4), flies 110 to 160 px, and every second fragment aims at an enemy within 260 px; the rest fly in random directions. Fragments are child shots: effects that only trigger on primary shots do not trigger on them.
- Your items' effects (crit, burn, poison, slow...) apply to the balls.
- **With another weapon:** every 3rd attack made with the weapon key also throws a small Shadow Ball (×0.9 Damage, 5 fragments).

## Stacking
- A second copy does nothing more.

{{< clip >}}
