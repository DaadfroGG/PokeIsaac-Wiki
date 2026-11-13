---
title: Repeat Ball
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
- label: Damage
  value: 75 % of each shot
- label: Copies
  value: Every shot of your volleys, forward and backward
- label: From
  value: Ditto, aimed like your shots
- label: Not copied
  value: Extra shots from other items
- label: Companion
  value: Takes 1 companion slot
icon: items-ps/ball/repeat.png
sprite: true
names:
  es:
    name: Acopio Ball
    desc: Un Ditto copia todos tus disparos, con sus efectos, al 75 % del daño
  fr:
    name: Bis Ball
    desc: Un Métamorph copie tous vos tirs, avec leurs effets, à 75 % des dégâts
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
A Ditto copies all your shots, with their effects, at 75 % damage

## How it works
- A Ditto follows you. Every time you attack, it fires a copy of each shot of your volley from where it stands, in the same direction and with the same spread. With [Destiny Knot](lazo_destino.html) it also copies the backward volley: up to **18 copies** per attack.
- Each copy deals **75 %** of the damage (it rolls its own critical hit first) and gets your item effects when fired, like your own shots.
- It doesn't copy the extra shots of other items ([Go-Goggles](m_gafas_aislantes.html), [Dragon Skull](m_craneo_dragon.html), [Marble](m_canica.html), [Red Nectar](m_nectar_rojo.html)…), and Go-Goggles don't split its copies.
- If you use a weapon instead of normal shots, Ditto fires 1 + multishot shots (5 at most) in a narrow fan, 8° apart, at 75 %.
- Ditto floats about 34 px **in front of you**, toward where you last shot, so its copies start a little closer to the enemies. It never shoots on its own: no attack from you, no copy.
- The copies are your own shots, not companion shots: they use your Damage, Range, Shot speed, Luck, crit chance, type passive and shot effects. [Silver Powder](polvo_plata.html) splits them and [Vs. Recorder](camara_lucha.html) repeats them. [Exp. Share](repartir_exp.html) does nothing for them.
- They don't trigger [Marble](m_canica.html), and a copy that misses doesn't reset [Ring Target](m_blanco.html).
- How all the extra shots add up: [Extra shots](../mechanics/disparos_extra.html).

## Stacking
- Each copy gives one more Ditto, and every Ditto copies your shots. Each one takes a companion slot: 3 at most, 5 with the [Apricorn Box](m_caja_bonguri.html) (see [Companions](../mechanics/companeros.html)).

{{< clip >}}
