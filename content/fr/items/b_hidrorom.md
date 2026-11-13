---
title: Module Aqua
id: b_hidrorom
kind: passive
category: voltorb
family: core
tier: 1
pool_weight: 2
stats:
- text: +5 Voltorbe
  good: true
details:
- label: Voltorbes
  value: '+5'
- label: Vague
  value: 'Rayon de 130 px : ralentit 2,5 s et repousse'
- label: Flaques
  value: 3, durent 3,3 s
- label: Disponibilité
  value: 'Retiré : dans aucun lot d''objets'
icon: items-ps/hold-item/douse-drive.png
sprite: true
names:
  en:
    name: Douse Drive
    desc: '+5 Voltorbs; when they blow up, a wave pushes and soaks enemies: they get slowed and leave puddles'
  es:
    name: HidroROM
    desc: '+5 Voltorbs; al estallar, una ola empuja y empapa a los enemigos: quedan lentos y dejan charcos'
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
+5 Voltorbes ; en explosant, une vague repousse et trempe les ennemis : ils sont ralentis et laissent des flaques

## Fonctionnement
- Un Voltorbe normal (posé avec la touche bombe) explose après 1,5 s dans un rayon de 95 px pour max(25, 7 × vos Dégâts), et il vous blesse aussi (1 cœur) si vous êtes dans la zone.
- Avec cet objet, chaque explosion envoie une vague sur 130 px : les ennemis à portée sont ralentis pendant 2,5 s et repoussés. Les boss sont ralentis mais pas repoussés.
- Elle laisse aussi 3 flaques autour de l'explosion (rayon de 26 px, 3,3 s chacune, 14 au maximum en même temps). Toutes les 0,25 s, chaque ennemi au sol dans une flaque subit max(0,5, un quart de vos Dégâts) et est ralenti 1,2 s. Les ennemis volants ignorent les flaques.
- Les petits Voltorbes de la [Bonbonnière](b_tarro.html) ne font pas de vague.
- Avec le [Nikodule](w_acromaquina.html), une explosion sur trois de ses Voltorbes ralentit les ennemis à moins de 70 px pendant 2,5 s et les repousse légèrement (boss : ralentis seulement).
- Cet objet est retiré : il n'apparaît plus dans aucun lot d'objets.

## Cumul
- L'effet est simplement activé : un second exemplaire n'ajoute rien. Chaque exemplaire donne quand même +5 Voltorbes.
