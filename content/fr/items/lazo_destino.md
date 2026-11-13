---
title: Nœud Destin (Base)
id: lazo_destino
kind: passive
category: shot
family: core
tier: 1
pools:
- treasure
pool_weight: 2
details:
- label: Tirs en plus
  value: Une deuxième salve complète vers l'arrière (même nombre de tirs, jusqu'à 9)
- label: Dégâts
  value: Les mêmes que vos tirs vers l'avant
- label: Deuxième exemplaire
  value: Rien de plus
icon: items-ps/hold-item/destiny-knot.png
sprite: true
names:
  en:
    name: Destiny Knot
    desc: You also shoot backwards
  es:
    name: Lazo Destino
    desc: Disparas también hacia atrás
  de:
    name: Fatumknoten
    desc: Du schießt auch nach hinten
  it:
    name: Destincomune
    desc: Spari anche all'indietro
  pt:
    name: Laço do Destino
    desc: Você também atira para trás
  ru:
    name: Узел судьбы
    desc: Ты стреляешь еще и назад
  ja:
    name: あかいいと
    desc: 後ろにも撃つ
  ko:
    name: 빨간실
    desc: 뒤쪽으로도 쏜다
  zh:
    name: 红线
    desc: 你也会向后方射击
  zt:
    name: 紅線
    desc: 你也會向後方射擊
---
Vous tirez aussi vers l'arrière

## Fonctionnement
- À chaque attaque, vous tirez aussi une deuxième salve exactement dans la direction opposée : même nombre de tirs (1 + tir multiple, jusqu'à 9), mêmes dégâts, mêmes effets. Avec une salve complète de 9 tirs, cela fait **18 tirs** par attaque.
- Chaque tir de la salve arrière tire au sort son propre coup critique, autoguidage, perçage et ses effets, comme n'importe quel autre tir.
- La salve arrière n'a pas le tir en plus du talent de maîtrise Rafale, et les objets à chance ([Crâne Dragon](m_craneo_dragon.html), [Bille](m_canica.html), [Nectar Rouge](m_nectar_rojo.html)) sont tirés au sort une fois par attaque, pas une deuxième fois pour la salve arrière.
- Les [Lunettes Sable](m_gafas_aislantes.html) divisent aussi les tirs arrière (9 + 9 = 18 deviennent 36), et le Métamorph de la [Bis Ball](f_acopio_ball.html) copie aussi la salve arrière.
- Si vous utilisez une arme au lieu des tirs normaux, la plupart des armes attaquent aussi vers l'arrière.
- Comment tous les tirs en plus s'additionnent : [Tirs supplémentaires](../mechanics/disparos_extra.html).

## Cumul
- Un deuxième exemplaire ne fait rien : il n'y a toujours qu'une seule salve arrière.
- À ne pas confondre avec le [Nœud Destin (Maudit)](cu_nudo.html), un objet de cadence qui n'ajoute aucun tir.

{{< clip >}}
