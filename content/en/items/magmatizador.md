---
title: Magmarizer
id: magmatizador
kind: passive
category: defense
family: core
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Trigger
  value: Each hit that hurts you
- label: Radius
  value: 120 px
- label: Damage
  value: 1.5× your Damage (at least 2)
- label: If you are Fire-type
  value: Burns them for 3 s instead
icon: items-ps/evo-item/magmarizer.png
sprite: true
names:
  es:
    name: Magmatizador
    desc: Al recibir un golpe, una onda de calor hiere a los enemigos cercanos (si eres de tipo Fuego, los quema)
  fr:
    name: Magmariseur
    desc: Quand vous êtes touché, une onde de chaleur blesse les ennemis proches (si vous êtes de type Feu, elle les brûle)
  de:
    name: Magmaisierer
    desc: Wenn du getroffen wirst, verletzt eine Hitzewelle nahe Gegner (bist du vom Typ Feuer, verbrennt sie sie)
  it:
    name: Magmatore
    desc: Quando vieni colpito, un'onda di calore ferisce i nemici vicini (se sei di tipo Fuoco, li brucia)
  pt:
    name: Magmarizer
    desc: Ao receber um golpe, uma onda de calor fere os inimigos próximos (se você for do tipo Fogo, os queima)
  ru:
    name: Магмарайзер
    desc: При получении удара волна жара ранит ближайших врагов (если ты типа Огонь, поджигает их)
  ja:
    name: マグマブースター
    desc: 被弾すると、熱波が近くの敵にダメージを与える（ほのおタイプならやけど）
  ko:
    name: 마그마부스터
    desc: 피격 시 열기 파동이 주변 적에게 피해를 준다(불꽃 타입이면 화상)
  zh:
    name: 熔岩增幅器
    desc: 受到攻击时，热浪会伤害周围敌人（若你是火属性，还会灼伤）
  zt:
    name: 熔岩增幅器
    desc: 受到攻擊時，熱浪會傷害附近的敵人（如果你是火屬性，還會灼傷他們）
---
When you're hit, a heat wave hurts nearby enemies (if you are Fire-type, it burns them)

## How it works
- After you take a hit, a heat wave hits every enemy within 120 px of you.
- Normally each takes 1.5 times your Damage (at least 2).
- If your Pokémon has the Fire type (either type for a dual-type), it deals no damage but sets each enemy on fire for 3 seconds instead (see [Status effects](../mechanics/estados.html)).
- It triggers on every hit, with no cooldown. It does not trigger if the hit was blocked or dodged.

## Stacking
- It does not stack: a second copy adds nothing.
