---
title: Bis Ball
id: f_acopio_ball
kind: passive
category: familiar
family: familiar
tier: 4
pools:
- boss
- devil
pool_weight: 1
details:
- label: Dégâts
  value: 75 % de chaque tir
- label: Copies
  value: Chaque tir de vos salves, vers l'avant et vers l'arrière
- label: Depuis
  value: Métamorph, visé comme vos tirs
- label: Non copiés
  value: Les tirs en plus des autres objets
- label: Compagnon
  value: Prend 1 place de compagnon
icon: items-ps/ball/repeat.png
sprite: true
names:
  en:
    name: Repeat Ball
    desc: A Ditto copies all your shots, with their effects, at 75 % damage
  es:
    name: Acopio Ball
    desc: Un Ditto copia todos tus disparos, con sus efectos, al 75 % del daño
  de:
    name: Wiederball
    desc: Ein Ditto kopiert alle deine Schüsse samt Effekten mit 75 % Schaden
  it:
    name: Bis Ball
    desc: Un Ditto copia tutti i tuoi tiri, con i loro effetti, al 75 % dei danni
  pt:
    name: Bola Repetição
    desc: Um Ditto copia todos os seus tiros, com seus efeitos, a 75% do dano
  ru:
    name: Репитбол
    desc: Дитто копирует все твои выстрелы с их эффектами при 75 % урона
  ja:
    name: リピートボール
    desc: メタモンがすべてのショットを、効果ごとダメージ75%でコピーする
  ko:
    name: 리피트볼
    desc: 메타몽이 모든 탄을 효과까지 그대로 대미지 75%로 따라 쏜다
  zh:
    name: 重复球
    desc: 一只百变怪以75 %的伤害复制你的所有弹及其效果
  zt:
    name: 重複球
    desc: 百變怪會複製你的所有射擊（含效果），造成75 %傷害
---
Un Métamorph copie tous vos tirs, avec leurs effets, à 75 % des dégâts

## Fonctionnement
- Un Métamorph vous suit. À chaque attaque, il tire une copie de chaque tir de votre salve depuis sa position, dans la même direction et avec le même éventail. Avec le [Nœud Destin](lazo_destino.html), il copie aussi la salve arrière : jusqu'à **18 copies** par attaque.
- Chaque copie inflige **75 %** des dégâts (elle tire d'abord au sort son propre coup critique) et reçoit les effets de vos objets au moment du tir, comme vos propres tirs.
- Il ne copie pas les tirs en plus des autres objets ([Lunettes Sable](m_gafas_aislantes.html), [Crâne Dragon](m_craneo_dragon.html), [Bille](m_canica.html), [Nectar Rouge](m_nectar_rojo.html)…), et les Lunettes Sable ne divisent pas ses copies.
- Si vous utilisez une arme au lieu des tirs normaux, Métamorph tire 1 + tir multiple tirs (5 au maximum) en éventail serré, à 8° d'écart, à 75 %.
- Métamorph flotte à environ 34 px **devant vous**, vers votre dernier tir : ses copies partent donc un peu plus près des ennemis. Il ne tire jamais tout seul : pas d'attaque de votre part, pas de copie.
- Les copies sont vos propres tirs, pas des tirs de compagnon : elles utilisent vos Dégâts, votre Portée, la Vitesse des tirs, la Chance, le coup critique, votre passif de type et vos effets de tir. La [Poudre Argentée](polvo_plata.html) les divise et le [Magnéto VS](camara_lucha.html) les répète. Le [Multi Exp](repartir_exp.html) ne leur fait rien.
- Elles ne déclenchent pas la [Bille](m_canica.html), et une copie qui rate ne remet pas à zéro le [Point de Mire](m_blanco.html).
- Comment tous les tirs en plus s'additionnent : [Tirs supplémentaires](../mechanics/disparos_extra.html).

## Cumul
- Chaque exemplaire donne un Métamorph de plus, et chaque Métamorph copie vos tirs. Chacun prend une place de compagnon : 3 au maximum, 5 avec la [Boîte Noigrume](m_caja_bonguri.html) (voir [Compagnons](../mechanics/companeros.html)).

{{< clip >}}
