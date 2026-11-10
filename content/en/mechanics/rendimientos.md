---
title: Diminishing returns
id: rendimientos
color: '#9a9aae'
labels:
- text: MECHANIC
  color: '#9a9aae'
icon: icons/mechanics/rendimientos.png
details:
- label: Item damage
  value: The first +3 counts in full; from +3 to +8, half; from +8 to +40, a quarter; beyond +40, 5 %. Damage penalties always count in full
- label: Damage multipliers
  value: 'All multiplied together: up to ×2.3 counts in full, only a quarter of anything above, and never more than ×3'
- label: Fire rate
  value: The first 3 points of fire rate count in full, the next 4 at half, the rest at a quarter. Slowdowns count in full
- label: Luck
  value: Up to 10 counts in full; above 10, only a quarter
- label: Max health
  value: 12 hearts (soul hearts separate)
- label: Healing
  value: At most 30 % of your max health (2 hearts minimum) every 10 seconds
- label: Minimums
  value: Damage 0.5, speed 1.6, range 120, shot speed 4
names:
  es:
    name: Rendimientos decrecientes
    desc: 'Los objetos siempre suman, pero cuanto más acumulas, menos cuenta cada uno: así la partida no se rompe al final.'
  fr:
    name: Rendements décroissants
    desc: 'Les objets s''additionnent toujours, mais plus vous en cumulez, moins chacun compte : ainsi la partie ne se déséquilibre pas en fin de course.'
  de:
    name: Abnehmender Ertrag
    desc: 'Items addieren sich immer, aber je mehr du ansammelst, desto weniger zählt jedes einzelne: So kippt die Partie am Ende nicht.'
  it:
    name: Rendimenti decrescenti
    desc: 'Gli oggetti si sommano sempre, ma più ne accumuli, meno conta ciascuno: così la partita non si sbilancia alla fine.'
  pt:
    name: Retornos decrescentes
    desc: 'Os itens sempre somam, mas quanto mais você acumula, menos cada um conta: assim a partida não quebra no final.'
  ru:
    name: Убывающая отдача
    desc: 'Предметы всегда складываются, но чем больше накопишь, тем меньше значит каждый: так забег не ломается под конец.'
  ja:
    name: 効果の逓減
    desc: どうぐは常に加算されますが、集めるほど1つあたりの効果が減ります：終盤でプレイが壊れないようにするためです。
  ko:
    name: 수확 체감
    desc: '아이템은 언제나 더해지지만 많이 모을수록 하나하나의 효과가 줄어든다: 그래서 후반에도 게임이 깨지지 않는다.'
  zh:
    name: 收益递减
    desc: 道具总会叠加，但积累得越多，每件的效果就越小：这样对局后期就不会失衡。
  zt:
    name: 收益遞減
    desc: 道具總會疊加，但累積得越多，每件的效果就越小：這樣本局後期就不會失衡。
---
Items always add up, but the more you stack, the less each one counts: that way the run doesn't break late on.

Example: Pikachu has 3.5 base damage. With +10 damage from items, only 3 + 2.5 + 0.5 = 6 of it counts, so it deals 9.5 instead of 13.5. Two ×2 multipliers make ×4 on paper but ×2.725 in practice (2.3, plus a quarter of the 1.7 above it).
