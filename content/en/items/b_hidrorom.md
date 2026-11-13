---
title: Douse Drive
id: b_hidrorom
kind: passive
category: voltorb
family: core
tier: 1
pool_weight: 2
stats:
- text: +5 Voltorb
  good: true
details:
- label: Voltorbs
  value: '+5'
- label: Wave
  value: '130 px radius: slow 2.5 s and push back'
- label: Puddles
  value: 3, last 3.3 s
- label: Availability
  value: 'Retired: in no item pool'
icon: items-ps/hold-item/douse-drive.png
sprite: true
names:
  es:
    name: HidroROM
    desc: '+5 Voltorbs; al estallar, una ola empuja y empapa a los enemigos: quedan lentos y dejan charcos'
  fr:
    name: Module Aqua
    desc: '+5 Voltorbes ; en explosant, une vague repousse et trempe les ennemis : ils sont ralentis et laissent des flaques'
  de:
    name: Aquamodul
    desc: '+5 Voltobals; beim Explodieren stößt eine Welle Gegner zurück und durchnässt sie: Sie werden langsam und hinterlassen Pfützen'
  it:
    name: Idromodulo
    desc: '+5 Voltorb; esplodendo, un''onda spinge e inzuppa i nemici: restano rallentati e lasciano delle pozze'
  pt:
    name: Douse Drive
    desc: '+5 Voltorbs; ao explodir, uma onda empurra e encharca os inimigos: eles ficam lentos e deixam poças'
  ru:
    name: Гидро-картридж
    desc: '+5 Вольторбов; при взрыве волна отталкивает и промачивает врагов: они замедляются и оставляют лужи'
  ja:
    name: アクアカセット
    desc: ビリリダマ+5個。爆発すると波が敵を押し流してずぶ濡れにし、動きが遅くなって水たまりが残る
  ko:
    name: 아쿠아카세트
    desc: '찌리리공 +5. 터지면 파도가 적을 밀어내고 적신다: 적은 느려지고 웅덩이를 남긴다'
  zh:
    name: 水流卡带
    desc: +5霹雳电球；爆炸时涌起水浪，推开并浸湿敌人：使其减速，并留下水坑
  zt:
    name: 水流卡帶
    desc: +5顆霹靂電球；爆炸時水波會推開並浸濕敵人：使其減速並留下水窪
---
+5 Voltorbs; when they blow up, a wave pushes and soaks enemies: they get slowed and leave puddles

## How it works
- A normal Voltorb (placed with the bomb key) explodes after 1.5 s in a 95 px radius for max(25, 7 × your Damage), and it also hurts you (1 heart) if you stand inside.
- With this item, each explosion sends a wave over 130 px: enemies in range are slowed for 2.5 s and pushed back. Bosses are slowed but not pushed.
- It also leaves 3 puddles around the explosion (26 px radius, 3.3 s each, at most 14 at once). Every 0.25 s, each ground enemy standing in a puddle takes max(0.5, a quarter of your Damage) and is slowed for 1.2 s. Flying enemies ignore puddles.
- Small Voltorbs from the [Candy Jar](b_tarro.html) do not make waves.
- With the [Colress Machine](w_acromaquina.html), every 3rd explosion of its Voltorbs slows enemies within 70 px for 2.5 s and pushes them slightly (bosses slowed only).
- This item is retired: it no longer appears in any item pool.

## Stacking
- The effect is only switched on: a second copy does nothing more. Each copy still gives +5 Voltorbs.
