---
title: Mémoire Ball
id: f_gloria_ball
kind: passive
category: familiar
family: familiar
tier: 3
pools:
- devil
- boss
pool_weight: 2
details:
- label: Aura
  value: 25 % de vos dégâts, 60 px
- label: Dedans
  value: Dégâts ×1,5, avec vos autres multiplicateurs (jamais plus de ×3)
icon: items-ps/ball/cherish.png
sprite: true
names:
  en:
    name: Cherish Ball
    desc: A Misdreavus floats around the room with an aura that hurts enemies; while inside it, you deal 50 % more damage
  es:
    name: Gloria Ball
    desc: Un Misdreavus flota por la sala con un aura que hiere a los enemigos; si estás dentro, pegas un 50 % más
  de:
    name: Jubelball
    desc: Ein Traunfugil schwebt mit einer Aura, die Gegner verletzt, durch den Raum; bist du darin, richtest du 50 % mehr Schaden an
  it:
    name: Pregio Ball
    desc: Un Misdreavus fluttua per la stanza con un'aura che ferisce i nemici; se sei al suo interno, infliggi il 50 % di danni in più
  pt:
    name: Cherish Ball
    desc: Um Misdreavus flutua pela sala com uma aura que fere os inimigos; se você estiver dentro dela, causa 50% a mais de dano
  ru:
    name: Черишбол
    desc: Мисдривус парит по комнате с аурой, ранящей врагов; если ты внутри нее, бьешь на 50 % сильнее
  ja:
    name: プレシャスボール
    desc: ムウマが部屋を漂い、敵にダメージを与えるオーラをまとう。その中にいると、ダメージが50%増える
  ko:
    name: 프레셔스볼
    desc: 무우마가 피해를 주는 오라를 두르고 방을 떠다닌다. 오라 안에 있으면 대미지가 50% 늘어난다
  zh:
    name: 贵重球
    desc: 梦妖在房间里飘荡，其光环会伤害敌人；你身处光环内时，伤害提高50 %
  zt:
    name: 貴重球
    desc: 夢妖會帶著光環在房間裡飄動，傷害敵人；你在光環內時，傷害提升50 %
---
Un Feuforêve flotte dans la salle avec une aura qui blesse les ennemis ; si vous êtes dedans, vous frappez 50 % plus fort

{{< clip >}}

## Bonus de dégâts

- Vous êtes dans l'aura quand vous êtes à moins de 60 px de Feuforêve. Le bonus s'arrête presque dès que vous en sortez.
- Feuforêve ne vous suit pas : il avance en ligne droite et rebondit sur les murs, il faut donc vous déplacer avec lui.
- Le ×1,5 est multiplié avec vos autres multiplicateurs de dégâts venant d'objets, puis le total passe par les [rendements décroissants](../mechanics/rendimientos.html) : il compte en entier jusqu'à ×2,3, seulement un quart de ce qui dépasse compte, et le total ne dépasse jamais ×3.
- Le bonus vaut donc moins sur un build déjà fort :

| Vos autres multiplicateurs | Total dans l'aura | Ce qu'ajoute la Mémoire Ball |
|---|---|---|
| Aucun (×1) | ×1,5 | +50 % |
| ×1,8 | ×2,4 (2,7 sur le papier) | +33 % |
| ×2 | ×2,475 (3 sur le papier) | +24 % |
| ×4,1 ou plus | ×3 | Rien |

- La stat Dégâts du HUD affiche le bonus après environ une demi-seconde dans l'aura.

## Dégâts de l'aura

- Six fois par seconde, chaque ennemi à moins de 60 px de Feuforêve subit 25 % de vos dégâts (au moins 0,5).
- Ces dégâts partent de vos dégâts actuels, donc ils profitent aussi du ×1,5 quand vous êtes dedans.
- Ce sont des dégâts de type [Spectre](../types/ghost.html) pour la table des types, quel que soit le type de votre Pokémon.
- Ils ne repoussent pas les ennemis et ne déclenchent pas vos objets « à l'impact ».

## Cumul

- Chaque exemplaire amène un autre Feuforêve ; chacun a sa propre aura et le ×1,5 ne s'applique pas deux fois (vous êtes dans une aura ou non). Voir [Compagnons](../mechanics/companeros.html) pour la limite.
