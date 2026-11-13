---
title: Orbe Vert
id: w_esfera_verde
kind: passive
category: weapon
family: weapon
tier: 4
pools:
- boss
pool_weight: 1
details:
- label: Charge
  value: 2,4 × votre délai entre deux tirs, 0,43 à 1,2 s (min 25 % pour lâcher)
- label: Séisme
  value: ×1 à ×3,4 Dégâts, rayon de 82 à 200 px (+10 par Taille)
- label: Touche
  value: Ennemis au sol seulement (les volants sont ignorés)
- label: Étourdissement
  value: 0,4 s et recul ; les boss ne subissent que les dégâts
- label: Anneaux
  value: 'Jusqu''à 3 avec tirs multiples : +16 % de rayon, -12 % de dégâts chacun'
- label: Récupération
  value: 1,5 × 1,6 × votre délai (au moins 0,75 s)
- label: Équilibrage
  value: ×0,53
- label: Si secondaire
  value: 'Après 4 s de tir avec des ennemis dans la salle : secousse ×1,5, 80 px'
icon: items-ps/key-item/jade-orb.png
sprite: true
names:
  en:
    name: Jade Orb
    desc: 'Hold fire to charge and release it: an earthquake shakes the ground around you and damages, stuns and pushes enemies that do not fly'
  es:
    name: Esfera Verde
    desc: 'Mantén el disparo para cargar y suéltalo: un terremoto sacude el suelo a tu alrededor y daña, aturde y empuja a los enemigos que no vuelan'
  de:
    name: Grüne Kugel
    desc: 'Halte die Schusstaste gedrückt, um aufzuladen, und lasse los: Ein Erdbeben erschüttert den Boden um dich herum und verletzt, betäubt und stößt Gegner zurück, die nicht fliegen'
  it:
    name: Sfera Verde
    desc: 'Tieni premuto il tiro per caricare e rilascialo: un terremoto scuote il terreno intorno a te e danneggia, stordisce e respinge i nemici che non volano'
  pt:
    name: Orbe Jade
    desc: 'Segure o tiro para carregar e solte: um terremoto sacode o chão ao seu redor e causa dano, atordoa e empurra os inimigos que não voam'
  ru:
    name: Нефритовая сфера
    desc: 'Зажми выстрел для заряда и отпусти: землетрясение сотрясает землю вокруг тебя, ранит, оглушает и отбрасывает нелетающих врагов'
  ja:
    name: もえぎいろのたま
    desc: ショットを長押ししてチャージし、離すと周囲の地面が揺れ、飛んでいない敵にダメージを与えてひるませ、押し返します
  ko:
    name: 연둣빛구슬
    desc: 공격을 길게 눌러 모았다가 떼면 주변 땅이 지진으로 흔들려, 날지 않는 적에게 대미지를 주고 기절시키고 밀쳐 낸다
  zh:
    name: 草绿色宝珠
    desc: 按住射击键蓄力，松开后：地震会撼动你周围的地面，对不会飞行的敌人造成伤害、眩晕并将其推开
  zt:
    name: 草綠色寶珠
    desc: 按住射擊鍵蓄力再放開：地震會撼動你周圍的地面，對不會飛行的敵人造成傷害、暈眩並將其推開
---
Maintenez le tir pour charger, puis relâchez : un séisme secoue le sol autour de vous et blesse, étourdit et repousse les ennemis qui ne volent pas

## Fonctionnement
- C'est une **arme** : elle ne marche que comme arme équipée ([Arme équipée](../mechanics/arma_principal.html)) ; avec une autre arme principale, elle n'ajoute que le petit effet indiqué à « Si secondaire ». Vos tirs normaux ne sont pas remplacés.
- Équilibrage : quand c'est votre arme équipée, les dégâts qu'elle inflige sont encore multipliés par ×0,53. Les multiplicateurs ci-dessous s'appliquent avant.
- Après chaque attaque, l'arme est de nouveau prête après 2,4 fois votre délai normal entre deux tirs, et jamais moins de 0,75 s.
- Les critiques, la brûlure, le poison, le ralentissement et les autres effets de vos objets s'appliquent à ses coups, qui portent le type de votre Pokémon. Voir [Armes et effets de tir](../mechanics/armas.html).
- Maintenez la touche d'arme pour charger (2,4 × votre délai entre deux tirs, 0,43 à 1,2 s pour une charge complète), relâchez pour secouer le sol (au moins 25 % de charge). Le séisme est centré sur vous.
- Rayon de 82 à 200 px (+10 par Taille) et dégâts de ×1 à ×3,4 de vos Dégâts, selon la charge.
- Seuls les ennemis qui ne volent pas sont touchés. Les ennemis non-boss sont aussi étourdis 0,4 s et repoussés ; les boss ne subissent que les dégâts. Il brise les caisses dans 80 % du rayon et les rochers dans 35 %.
- Les tirs multiples ajoutent des anneaux (jusqu'à 3) : chacun 0,15 s après le précédent, avec +16 % de rayon et -12 % de dégâts.
- **Si secondaire :** après 4 s de tir normal avec des ennemis dans la salle, une petite secousse (rayon de 80 px, ×1,5 Dégâts) frappe autour de vous.

## Cumul
- Un second exemplaire n'ajoute rien.

{{< clip >}}
