---
title: Gastly Pact
id: pacto_gastly
kind: passive
category: familiar
family: core
tier: 1
pools:
- devil
pool_weight: 2
details:
- label: Companion
  value: Gastly (Ghost)
- label: Fire interval
  value: 0.5 s
- label: Damage per shot
  value: (2 + 0.4 per floor) ×1.3
- label: Damage bonus
  value: ×1.3 compared to other companions
- label: Scare
  value: 25 % per hit, 2 s (not bosses)
- label: Shots
  value: Go through rocks
- label: Cost
  value: Distortion Room deal
icon: items-ps/hold-item/griseous-orb.png
sprite: true
names:
  es:
    name: Pacto Gastly
    desc: 'Un Gastly te acompaña: sus disparos atraviesan las rocas, pegan fuerte y a veces asustan'
  fr:
    name: Pacte Fantominus
    desc: 'Un Fantominus vous accompagne : ses tirs traversent les rochers, frappent fort et effraient parfois'
  de:
    name: Nebulak-Pakt
    desc: 'Ein Nebulak begleitet dich: Seine Schüsse durchdringen Felsen, treffen hart und erschrecken manchmal'
  it:
    name: Patto Gastly
    desc: 'Un Gastly ti accompagna: i suoi tiri attraversano i massi, colpiscono forte e a volte spaventano'
  pt:
    name: Pacto do Gastly
    desc: 'Um Gastly te acompanha: os tiros dele atravessam as rochas, causam muito dano e às vezes assustam'
  ru:
    name: Договор Гастли
    desc: 'Гастли следует за тобой: его выстрелы проходят сквозь валуны, бьют сильно и иногда пугают'
  ja:
    name: ゴースの契約
    desc: ゴースがついてくる：ショットは岩を貫通し、強力で、ときどき敵を怯えさせる
  ko:
    name: 고오스의 계약
    desc: '고오스가 함께 다닌다: 탄이 바위를 통과하고 세게 맞히며 가끔 겁을 준다'
  zh:
    name: 鬼斯契约
    desc: 一只鬼斯跟随你：它的弹可穿过石块，威力强大，有时会吓退敌人
  zt:
    name: 鬼斯契約
    desc: 鬼斯會跟著你：它的彈會穿過岩石、威力強大，有時還會嚇跑敵人
---
A Gastly follows you: its shots pass through rocks, hit hard and sometimes scare

{{< clip >}}

## How it works

- Gastly follows just behind you and shoots at the nearest enemy within 380 px, once every 0.5 seconds. Its shots travel up to 360 px and carry its type (Ghost).
- Its shots hit 1.3 times as hard as a normal companion's (2.6 on the first floor), pass through rocks and have a 25 % chance per hit to scare a non-boss enemy for 2 seconds (see [Status effects](../mechanics/estados.html)).
- The Pact is sold in the Distortion Room for life (see [Distortion Room deals](../mechanics/pactos.html)).
- Companion damage does not depend on your own Damage stat: each shot or hit is based on 2 on the first floor, +0.4 for every floor after that.
- Its shots are not boosted by your shot upgrades (no extra shots, no crits) and do not trigger your on-hit items.
- Companions are limited to 3 at a time (5 with the [Apricorn Box](m_caja_bonguri.html)); an extra one waits in the Bag. See [Companions](../mechanics/companeros.html).

## Stacking

- Each copy brings another companion of the same kind (while you are under the limit), and each acts on its own.
