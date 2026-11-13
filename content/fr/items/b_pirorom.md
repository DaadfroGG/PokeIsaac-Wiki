---
title: Module Pyro
id: b_pirorom
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
- label: Brûlure
  value: Ennemis à moins de 120 px, 5 s
- label: Propagation
  value: 'En tuant un ennemi en feu : ennemis à moins de 90 px, 3 s'
- label: Disponibilité
  value: 'Retiré : dans aucun lot d''objets'
icon: items-ps/hold-item/burn-drive.png
sprite: true
names:
  en:
    name: Burn Drive
    desc: +5 Voltorbs; when they blow up they set nearby enemies on fire and the flames jump from one to the next when one dies
  es:
    name: PiroROM
    desc: +5 Voltorbs; al estallar prenden a los enemigos cercanos y el fuego salta de uno a otro al morir
  de:
    name: Flammenmodul
    desc: +5 Voltobals; beim Explodieren setzen sie nahe Gegner in Brand und das Feuer springt beim Tod von einem zum nächsten
  it:
    name: Piromodulo
    desc: +5 Voltorb; esplodendo, incendiano i nemici vicini e il fuoco passa dall'uno all'altro quando uno muore
  pt:
    name: Piro-Drive
    desc: +5 Voltorbs; ao explodir, incendeiam os inimigos próximos e o fogo pula de um para outro quando morrem
  ru:
    name: Пиро-картридж
    desc: +5 Вольторбов; при взрыве поджигают ближайших врагов, а огонь перекидывается с одного на другого, когда враг погибает
  ja:
    name: ブレイズカセット
    desc: ビリリダマ+5個。爆発すると近くの敵に火がつき、倒れるたびに炎が次の敵へ燃え移る
  ko:
    name: 블레이즈카세트
    desc: 찌리리공 +5. 터지면 주변 적에게 불이 붙고, 적이 쓰러지면 불이 다음 적에게 옮겨붙는다
  zh:
    name: 火焰卡带
    desc: +5霹雳电球；爆炸时点燃附近的敌人，敌人死亡时火焰会蔓延到下一个
  zt:
    name: 火焰卡帶
    desc: +5顆霹靂電球；爆炸時會點燃附近的敵人，敵人死亡時火焰會蔓延到下一個
---
+5 Voltorbes ; en explosant, ils enflamment les ennemis proches et le feu passe de l'un à l'autre quand l'un meurt

## Fonctionnement
- Un Voltorbe normal (posé avec la touche bombe) explose après 1,5 s dans un rayon de 95 px pour max(25, 7 × vos Dégâts), et il vous blesse aussi (1 cœur) si vous êtes dans la zone.
- Avec cet objet, chaque explosion de Voltorbe enflamme aussi tous les ennemis à moins de 120 px ([brûlure](../mechanics/estados.html)) pendant 5 s (7,5 s avec la [Roche Chaude](roca_calor.html)).
- **Propagation :** chaque fois que vous tuez un ennemi en feu (avec un Voltorbe ou autre chose), le feu passe à tous les ennemis à moins de 90 px pendant 3 s (4,5 s avec la Roche Chaude).
- Les petits Voltorbes de la [Bonbonnière](b_tarro.html) n'enflamment pas.
- Avec le [Nikodule](w_acromaquina.html), une explosion sur trois de ses Voltorbes enflamme les ennemis à moins de 70 px pendant 3 s.
- Cet objet est retiré : il n'apparaît plus dans aucun lot d'objets.

## Cumul
- L'effet est simplement activé : un second exemplaire n'ajoute rien. Chaque exemplaire donne quand même +5 Voltorbes.
