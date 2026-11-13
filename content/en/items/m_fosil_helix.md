---
title: Helix Fossil
id: m_fosil_helix
kind: passive
category: shot
family: module
tier: 2
pools:
- treasure
- boss
pool_weight: 2
details:
- label: Second hit
  value: ×2 on every enemy after the first one
- label: Grass type
  value: +1 pierce
icon: items-ps/fossil/helix.png
sprite: true
names:
  es:
    name: Fósil Hélix
    desc: Tus disparos que atraviesan enemigos le pegan el doble al segundo; si eres de tipo Planta, atraviesan siempre al primero
  fr:
    name: Nautile
    desc: Vos tirs qui transpercent les ennemis infligent le double au deuxième ; si vous êtes de type Plante, ils transpercent toujours le premier
  de:
    name: Helixfossil
    desc: Deine Schüsse, die Gegner durchdringen, machen dem zweiten doppelten Schaden; bist du vom Typ Pflanze, durchdringen sie immer den ersten
  it:
    name: Helixfossile
    desc: I tuoi tiri che attraversano i nemici infliggono il doppio al secondo; se sei di tipo Erba, attraversano sempre il primo
  pt:
    name: Fóssil Hélix
    desc: Seus tiros que atravessam inimigos causam o dobro no segundo; se você for do tipo Planta, sempre atravessam o primeiro
  ru:
    name: Окаменелость-спираль
    desc: Твои выстрелы, пробивающие врагов, наносят двойной урон второму; если ты типа Трава, они всегда пробивают первого
  ja:
    name: かいのカセキ
    desc: 敵を貫通するショットは2体目に2倍のダメージ。くさタイプなら、1体目は必ず貫通する
  ko:
    name: 조개화석
    desc: 적을 관통하는 탄이 두 번째 적에게 2배의 대미지를 준다. 풀 타입이면 항상 첫 번째 적도 관통한다
  zh:
    name: 贝壳化石
    desc: 穿透敌人的弹对第二个敌人造成双倍伤害；若你是草属性，则总会穿透第一个敌人
  zt:
    name: 貝殼化石
    desc: 你穿透敵人的彈會對第二個敵人造成雙倍傷害；如果你是草屬性，則一定會穿透第一個
---
Your shots that pierce enemies deal double to the second one; if you are Grass-type, they always pierce the first

## How it works
- A shot that passes through enemies deals double damage to every enemy it hits after the first one.
- If your Pokémon is Grass-type (either type), each shot also gets +1 pierce, so it passes through the first enemy by itself.
- Explosions and beams from weapon items also deal ×2 to every target after the first.
- Without pierce (from another item or Grass type) shots stop at the first enemy and the bonus never triggers.

## Stacking
- It does not stack: a second copy changes nothing.
